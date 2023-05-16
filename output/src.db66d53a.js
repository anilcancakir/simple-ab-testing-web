parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }

    f.isParcelRequire = !0, f.Module = function (e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
        e[r] = [function (e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "D9Nj": [function (require, module, exports) {

    }, {}], "yRDH": [function (require, module, exports) {
        "use strict";

        function t(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {writable: !1}), n && e(t, n)
        }

        function e(t, n) {
            return (e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e, t
            })(t, n)
        }

        function n(t) {
            var e = i();
            return function () {
                var n, o = u(t);
                if (e) {
                    var i = u(this).constructor;
                    n = Reflect.construct(o, arguments, i)
                } else n = o.apply(this, arguments);
                return r(this, n)
            }
        }

        function r(t, e) {
            if (e && ("object" === c(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return o(t)
        }

        function o(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function i() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0
            } catch (t) {
                return !1
            }
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function c(t) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function f(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function l(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
            }
        }

        function a(t, e, n) {
            return e && l(t.prototype, e), n && l(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
        }

        function s(t) {
            var e = p(t, "string");
            return "symbol" === c(e) ? e : String(e)
        }

        function p(t, e) {
            if ("object" !== c(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(t, e || "default");
                if ("object" !== c(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0;
        var y = function () {
            function t() {
                f(this, t)
            }

            return a(t, [{
                key: "getItem", value: function (t) {
                    return null
                }
            }, {
                key: "setItem", value: function (t, e) {
                }
            }, {
                key: "isAvailable", value: function () {
                    return !0
                }
            }]), t
        }(), b = function (e) {
            t(o, y);
            var r = n(o);

            function o() {
                return f(this, o), r.apply(this, arguments)
            }

            return a(o, [{
                key: "getItem", value: function (t) {
                    for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
                        for (var o = n[r]; " " === o.charAt(0);) o = o.substring(1);
                        if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                    }
                    return ""
                }
            }, {
                key: "setItem", value: function (t, e) {
                    var n = new Date;
                    n.setTime(n.getTime() + 307584e5);
                    var r = "expires=" + n.toUTCString();
                    document.cookie = t + "=" + e + ";" + r + ";path=/"
                }
            }, {
                key: "isAvailable", value: function () {
                    return "undefined" != typeof document && "cookie" in document && null !== document.cookie
                }
            }]), o
        }(), v = function (e) {
            t(o, y);
            var r = n(o);

            function o() {
                return f(this, o), r.apply(this, arguments)
            }

            return a(o, [{
                key: "getItem", value: function (t) {
                    return localStorage.getItem(t)
                }
            }, {
                key: "setItem", value: function (t, e) {
                    localStorage.setItem(t, e)
                }
            }, {
                key: "isAvailable", value: function () {
                    return "undefined" != typeof window && "localStorage" in window && null !== window.localStorage
                }
            }]), o
        }(), d = [new v, new b, new y].find(function (t) {
            return t.isAvailable()
        }), m = d;
        exports.default = m;
    }, {}], "oQ6f": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.trackPageview = exports.trackEvent = void 0;
        var e = function (e) {
            console.log("--\x3e Tracking Pageview: ".concat(e))
        };
        exports.trackPageview = e;
        var t = function (e) {
            console.log("--\x3e Tracking Event: ".concat(e))
        };
        exports.trackEvent = t;
    }, {}], "H99C": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = void 0, require("./styles.css");
        var t = n(require("./ab-testing-storage")), e = require("./analytics-api.js");

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t) {
            return c(t) || s(t) || o(t) || a()
        }

        function a() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function o(t, e) {
            if (t) {
                if ("string" == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
            }
        }

        function s(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }

        function c(t) {
            if (Array.isArray(t)) return u(t)
        }

        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function l(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, h(r.key), r)
            }
        }

        function d(t, e, n) {
            return e && f(t.prototype, e), n && f(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
        }

        function y(t, e, n) {
            return (e = h(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function h(t) {
            var e = v(t, "string");
            return "symbol" === r(e) ? e : String(e)
        }

        function v(t, e) {
            if ("object" !== r(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, e || "default");
                if ("object" !== r(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }

        var b = function () {
            function n() {
                l(this, n), y(this, "DISK_KEY_TRACKING_CONTROL_DIALOG", "abTestingCanTrackDialog"), y(this, "DISK_KEY_TRACKING_CONTROL", "abTestingCanTrack"), y(this, "DISK_KEY_SELECTED_VARIANT_KEY", "abTestingSelectedVariantKey"), this.disk = t.default, this.variants = [], this.selectedVariant = null, this.initVariants(), this.initSelectedVariant(), this.showSelectedVariant(), this.showOrHideTrackingDialog()
            }

            return d(n, [{
                key: "initVariants", value: function () {
                    var t = this;
                    i(document.querySelectorAll("[data-ab-variant]")).map(function (e) {
                        e.getAttribute("data-ab-variant").split(",").forEach(function (n) {
                            var r = parseInt(e.getAttribute("data-ab-weight")) || 1,
                                i = t.variants.findIndex(function (t) {
                                    return t.key === n
                                });
                            i > -1 ? t.variants[i].weight = t.variants[i].weight > r ? t.variants[i].weight : r : t.variants.push({
                                key: n,
                                weight: r
                            })
                        })
                    })
                }
            }, {
                key: "initSelectedVariant", value: function () {
                    var t = this.disk.getItem(this.DISK_KEY_SELECTED_VARIANT_KEY);
                    if (console.log("selectedVariantKey", t), t) this.selectedVariant = this.variants.find(function (e) {
                        return e.key === t
                    }); else {
                        var e = this.variants.reduce(function (t, e, n) {
                            var r;
                            return t.push(e.weight + (null !== (r = t[n - 1]) && void 0 !== r ? r : 0)), t
                        }, []), n = Math.random() * e.at(-1);
                        this.selectedVariant = this.variants[e.findIndex(function (t) {
                            return t > n
                        })], this.disk.setItem(this.DISK_KEY_SELECTED_VARIANT_KEY, this.selectedVariant.key)
                    }
                }
            }, {
                key: "showSelectedVariant", value: function () {
                    document.querySelectorAll("[data-ab-variant=".concat(this.selectedVariant.key, "]")).forEach(function (t) {
                        t.style.display = "block"
                    })
                }
            }, {
                key: "canTrack", value: function () {
                    return !!this.disk.getItem(this.DISK_KEY_TRACKING_CONTROL)
                }
            }, {
                key: "showOrHideTrackingDialog", value: function () {
                    var t = this;
                    if (this.disk.getItem(this.DISK_KEY_TRACKING_CONTROL_DIALOG)) return this.startListenEventsToTrack();
                    document.querySelector("[data-ab-tracking-dialog]").style.display = "block", document.querySelector("[data-ab-tracking-dialog-button-yes]").addEventListener("click", function () {
                        return t.setTrackingDialogChoice(1)
                    }), document.querySelector("[data-ab-tracking-dialog-button-no]").addEventListener("click", function () {
                        return t.setTrackingDialogChoice(0)
                    })
                }
            }, {
                key: "setTrackingDialogChoice", value: function (e) {
                    t.default.setItem(this.DISK_KEY_TRACKING_CONTROL, e), t.default.setItem(this.DISK_KEY_TRACKING_CONTROL_DIALOG, new Date), document.querySelector("[data-ab-tracking-dialog]").style.display = "none", this.startListenEventsToTrack()
                }
            }, {
                key: "startListenEventsToTrack", value: function () {
                    var t = this;
                    this.canTrack() && ((0, e.trackPageview)(JSON.stringify({
                        variant: this.selectedVariant.key,
                        date: new Date
                    })), document.querySelectorAll("a").forEach(function (n) {
                        n.addEventListener("click", function () {
                            (0, e.trackEvent)(JSON.stringify({
                                type: "click",
                                variant: t.selectedVariant.key,
                                date: new Date,
                                el: n
                            }))
                        })
                    }))
                }
            }]), n
        }(), g = new b;
        exports.default = g;
    }, {"./styles.css": "D9Nj", "./ab-testing-storage": "yRDH", "./analytics-api.js": "oQ6f"}]
}, {}, ["H99C"], null)
//# sourceMappingURL=/src.db66d53a.js.map
