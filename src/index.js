import "./styles.css";
import disk from './ab-testing-storage';
import {trackEvent, trackPageview} from "./analytics-api.js";

class AbTesting {
    DISK_KEY_TRACKING_CONTROL_DIALOG = 'abTestingCanTrackDialog';
    DISK_KEY_TRACKING_CONTROL = 'abTestingCanTrack';
    DISK_KEY_SELECTED_VARIANT_KEY = 'abTestingSelectedVariantKey';

    /**
     * AbTesting.
     */
    constructor() {
        this.disk = disk;
        this.variants = [];
        this.selectedVariant = null;

        this.initVariants();
        this.initSelectedVariant();
        this.showSelectedVariant();
        this.showOrHideTrackingDialog();
    }

    /**
     * Init variants from document by using custom attribute.
     */
    initVariants() {
        [...document.querySelectorAll('[data-ab-variant]')].map(el => {
            el.getAttribute('data-ab-variant').split(',').forEach(key => {
                let weight = parseInt(el.getAttribute('data-ab-weight')) || 1;
                let index = this.variants.findIndex(v => v.key === key);

                if (index > -1) {
                    this.variants[index].weight = this.variants[index].weight > weight ? this.variants[index].weight : weight;
                } else {
                    this.variants.push({key, weight});
                }
            });
        });
    }

    /**
     * Init selected variant for current user.
     */
    initSelectedVariant() {
        // Try to get user selected variant key
        let selectedVariantKey = this.disk.getItem(this.DISK_KEY_SELECTED_VARIANT_KEY);

        if (selectedVariantKey) {
            // If it has selected variant before, use this.
            this.selectedVariant = this.variants.find(v => v.key === selectedVariantKey);
        } else {
            // If it has not any selected variant, let's play!

            // Parse weights from parsed variants
            const weights = this.variants.reduce((acc, variant, i) => {
                acc.push(variant.weight + (acc[i - 1] ?? 0));
                return acc;
            }, []);

            // Get random variant by using weights
            const random = Math.random() * weights.at(-1);

            // Select user variant
            this.selectedVariant = this.variants[weights.findIndex((weight) => weight > random)];

            // Store selected variant key for next visits
            this.disk.setItem(this.DISK_KEY_SELECTED_VARIANT_KEY, this.selectedVariant.key);
        }
    }

    /**
     * Make visible selected variant elements in the document.
     */
    showSelectedVariant() {
        document.querySelectorAll(`[data-ab-variant=${this.selectedVariant.key}]`).forEach(el => {
            el.style.display = 'block';
        });
    }

    /**
     * Can track user events.
     *
     * @returns {boolean}
     */
    canTrack() {
        return !!this.disk.getItem(this.DISK_KEY_TRACKING_CONTROL);
    }

    /**
     * Show or hide tracking dialog.
     */
    showOrHideTrackingDialog() {
        // Do not anything if user selected choice before.
        if (this.disk.getItem(this.DISK_KEY_TRACKING_CONTROL_DIALOG)) {
            return this.startListenEventsToTrack();
        }

        document.querySelector('[data-ab-tracking-dialog]').style.display = 'block';
        document.querySelector('[data-ab-tracking-dialog-button-yes]')
            .addEventListener('click', () => this.setTrackingDialogChoice(1));

        document.querySelector('[data-ab-tracking-dialog-button-no]')
            .addEventListener('click', () => this.setTrackingDialogChoice(0));
    }

    /**
     * Set user choice for tracking dialog.
     *
     * @param value
     */
    setTrackingDialogChoice(value) {
        disk.setItem(this.DISK_KEY_TRACKING_CONTROL, value);
        disk.setItem(this.DISK_KEY_TRACKING_CONTROL_DIALOG, new Date);
        document.querySelector('[data-ab-tracking-dialog]').style.display = 'none';
        this.startListenEventsToTrack();
    }

    /**
     * Start listen events for tracking.
     */
    startListenEventsToTrack() {
        if (!this.canTrack()) {
            return;
        }

        // Send page view event first
        trackPageview(JSON.stringify({variant: this.selectedVariant.key, date: new Date}));

        // Listen click events for links in document
        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', () => {
                trackEvent(JSON.stringify({type: 'click', variant: this.selectedVariant.key, date: new Date, el}));
            });
        });
    }
}

export default new AbTesting;
