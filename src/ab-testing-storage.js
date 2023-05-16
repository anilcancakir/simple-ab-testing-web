class AbTestingStorage {
    /**
     * Get item value from storage.
     *
     * @param key
     * @returns {string|null}
     */
    getItem(key) {
        return null;
    }

    /**
     * Set item value to storage.
     *
     * @param key
     * @param value
     */
    setItem(key, value) {
        //
    }

    /**
     * Check storage method is available for current browser.
     *
     * @returns {boolean}
     */
    isAvailable() {
        return true;
    }
}

class CookieAbTestingStorage extends AbTestingStorage {
    /**
     * Get cookie value
     *
     * @code https://www.w3schools.com/js/js_cookies.asp
     * @param key
     * @returns {string}
     */
    getItem(key) {
        let name = key + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    }

    /**
     * Set cookie value
     *
     * @code https://www.w3schools.com/js/js_cookies.asp
     * @param key
     * @param value
     */
    setItem(key, value) {
        const d = new Date();
        d.setTime(d.getTime() + (356 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }

    /**
     * Check the cookie storage is available.
     *
     * @returns {boolean}
     */
    isAvailable() {
        return typeof document !== 'undefined' && 'cookie' in document && document['cookie'] !== null;
    }
}

class LocalStorageAbTestingStorage extends AbTestingStorage {
    /**
     * Get local storage value
     *
     * @param key
     * @returns {string}
     */
    getItem(key) {
        return localStorage.getItem(key);
    }

    /**
     * Set local storage value
     *
     * @param key
     * @param value
     */
    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    /**
     * Check the local storage is available.
     *
     * @returns {boolean}
     */
    isAvailable() {
        return typeof window !== 'undefined' && 'localStorage' in window && window['localStorage'] !== null;
    }
}

// Decide the available storage for the browser
const disk = [
    new LocalStorageAbTestingStorage(),
    new CookieAbTestingStorage(),
    new AbTestingStorage()
].find(disk => disk.isAvailable());

export default disk;

