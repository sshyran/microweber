!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function () {
    "use strict";
    const P = 1e3, z = "transitionend", j = e => {
            let i = e.getAttribute("data-bs-target");
            if (!i || "#" === i) {
                let t = e.getAttribute("href");
                if (!t || !t.includes("#") && !t.startsWith(".")) return null;
                t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]), i = t && "#" !== t ? t.trim() : null
            }
            return i
        }, H = t => {
            t = j(t);
            return t && document.querySelector(t) ? t : null
        }, o = t => {
            t = j(t);
            return t ? document.querySelector(t) : null
        }, F = t => {
            t.dispatchEvent(new Event(z))
        }, r = t => !(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType,
        s = t => r(t) ? t.jquery ? t[0] : t : "string" == typeof t && 0 < t.length ? document.querySelector(t) : null,
        i = (s, n, o) => {
            Object.keys(o).forEach(t => {
                var e = o[t], i = n[t],
                    i = i && r(i) ? "element" : null == (i = i) ? "" + i : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(e).test(i)) throw new TypeError(s.toUpperCase() + `: Option "${t}" provided type "${i}" but expected type "${e}".`)
            })
        },
        W = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        a = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        R = t => {
            return document.documentElement.attachShadow ? "function" == typeof t.getRootNode ? (e = t.getRootNode()) instanceof ShadowRoot ? e : null : t instanceof ShadowRoot ? t : t.parentNode ? R(t.parentNode) : null : null;
            var e
        }, B = () => {
        }, d = t => {
            t.offsetHeight
        }, V = () => {
            var t = window["jQuery"];
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }, U = [], n = () => "rtl" === document.documentElement.dir;
    var t = s => {
        var t;
        t = () => {
            const t = V();
            if (t) {
                const e = s.NAME, i = t.fn[e];
                t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface)
            }
        }, "loading" === document.readyState ? (U.length || document.addEventListener("DOMContentLoaded", () => {
            U.forEach(t => t())
        }), U.push(t)) : t()
    };
    const l = t => {
        "function" == typeof t && t()
    }, q = (i, s, t = !0) => {
        if (t) {
            t = (t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
                var t = Number.parseFloat(e), s = Number.parseFloat(i);
                return t || s ? (e = e.split(",")[0], i = i.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(i)) * P) : 0
            })(s) + 5;
            let e = !1;
            const n = ({target: t}) => {
                t === s && (e = !0, s.removeEventListener(z, n), l(i))
            };
            s.addEventListener(z, n), setTimeout(() => {
                e || F(s)
            }, t)
        } else l(i)
    }, K = (t, e, i, s) => {
        let n = t.indexOf(e);
        if (-1 === n) return t[!i && s ? t.length - 1 : 0];
        e = t.length;
        return n += i ? 1 : -1, s && (n = (n + e) % e), t[Math.max(0, Math.min(n, e - 1))]
    }, G = /[^.]*(?=\..*)\.|.*/, X = /\..*/, Y = /::\d+$/, Q = {};
    let J = 1;
    const Z = {mouseenter: "mouseover", mouseleave: "mouseout"}, tt = /^(mouseenter|mouseleave)/i,
        et = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function it(t, e) {
        return e && e + "::" + J++ || t.uidEvent || J++
    }

    function st(t) {
        var e = it(t);
        return t.uidEvent = e, Q[e] = Q[e] || {}, Q[e]
    }

    function nt(i, s, n = null) {
        var o = Object.keys(i);
        for (let t = 0, e = o.length; t < e; t++) {
            var r = i[o[t]];
            if (r.originalHandler === s && r.delegationSelector === n) return r
        }
        return null
    }

    function ot(t, e, i) {
        var s = "string" == typeof e, i = s ? i : e;
        let n = lt(t);
        e = et.has(n);
        return [s, i, n = e ? n : t]
    }

    function rt(t, e, i, s, n) {
        if ("string" == typeof e && t) {
            i || (i = s, s = null), tt.test(e) && (o = e => function (t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            }, s ? s = o(s) : i = o(i));
            var [o, r, a] = ot(e, i, s);
            const u = st(t), f = u[a] || (u[a] = {}), m = nt(f, r, o ? i : null);
            if (m) m.oneOff = m.oneOff && n; else {
                var l, c, h, d, p, e = it(r, e.replace(G, ""));
                const g = o ? (h = t, d = i, p = s, function i(s) {
                    var n = h.querySelectorAll(d);
                    for (let e = s["target"]; e && e !== this; e = e.parentNode) for (let t = n.length; t--;) if (n[t] === e) return s.delegateTarget = e, i.oneOff && _.off(h, s.type, d, p), p.apply(e, [s]);
                    return null
                }) : (l = t, c = i, function t(e) {
                    return e.delegateTarget = l, t.oneOff && _.off(l, e.type, c), c.apply(l, [e])
                });
                g.delegationSelector = o ? i : null, g.originalHandler = r, g.oneOff = n, g.uidEvent = e, f[e] = g, t.addEventListener(a, g, o)
            }
        }
    }

    function at(t, e, i, s, n) {
        s = nt(e[i], s, n);
        s && (t.removeEventListener(i, s, Boolean(n)), delete e[i][s.uidEvent])
    }

    function lt(t) {
        return t = t.replace(X, ""), Z[t] || t
    }

    const _ = {
        on(t, e, i, s) {
            rt(t, e, i, s, !1)
        }, one(t, e, i, s) {
            rt(t, e, i, s, !0)
        }, off(r, a, t, e) {
            if ("string" == typeof a && r) {
                const [i, s, n] = ot(a, t, e), o = n !== a, l = st(r);
                e = a.startsWith(".");
                if (void 0 !== s) return l && l[n] ? void at(r, l, n, s, i ? t : null) : void 0;
                e && Object.keys(l).forEach(t => {
                    {
                        var e = r, i = l, s = t, n = a.slice(1);
                        const o = i[s] || {};
                        return void Object.keys(o).forEach(t => {
                            t.includes(n) && (t = o[t], at(e, i, s, t.originalHandler, t.delegationSelector))
                        })
                    }
                });
                const c = l[n] || {};
                Object.keys(c).forEach(t => {
                    var e = t.replace(Y, "");
                    o && !a.includes(e) || (e = c[t], at(r, l, n, e.originalHandler, e.delegationSelector))
                })
            }
        }, trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = V();
            var n = lt(e), o = e !== n, r = et.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents")).initEvent(n, l, !0) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach(t => {
                Object.defineProperty(d, t, {
                    get() {
                        return i[t]
                    }
                })
            }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
        }
    }, c = new Map, ct = {
        set(t, e, i) {
            c.has(t) || c.set(t, new Map);
            const s = c.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        }, get(t, e) {
            return c.has(t) && c.get(t).get(e) || null
        }, remove(t, e) {
            if (c.has(t)) {
                const i = c.get(t);
                i.delete(e), 0 === i.size && c.delete(t)
            }
        }
    };

    class e {
        constructor(t) {
            (t = s(t)) && (this._element = t, ct.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            ct.remove(this._element, this.constructor.DATA_KEY), _.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }

        _queueCallback(t, e, i = !0) {
            q(t, e, i)
        }

        static getInstance(t) {
            return ct.get(s(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.1.3"
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        static get DATA_KEY() {
            return "bs." + this.NAME
        }

        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }

    var ht = (i, s = "hide") => {
        var t = "click.dismiss" + i.EVENT_KEY;
        const n = i.NAME;
        _.on(document, t, `[data-bs-dismiss="${n}"]`, function (t) {
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
                t = o(this) || this.closest("." + n);
                const e = i.getOrCreateInstance(t);
                e[s]()
            }
        })
    };

    class dt extends e {
        static get NAME() {
            return "alert"
        }

        close() {
            var t;
            _.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), t = this._element.classList.contains("fade"), this._queueCallback(() => this._destroyElement(), this._element, t))
        }

        _destroyElement() {
            this._element.remove(), _.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = dt.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    ht(dt, "close"), t(dt);
    const pt = '[data-bs-toggle="button"]';

    class ut extends e {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = ut.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }

    function ft(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function mt(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }

    _.on(document, "click.bs.button.data-api", pt, t => {
        t.preventDefault();
        t = t.target.closest(pt);
        const e = ut.getOrCreateInstance(t);
        e.toggle()
    }), t(ut);
    const h = {
        setDataAttribute(t, e, i) {
            t.setAttribute("data-bs-" + mt(e), i)
        }, removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + mt(e))
        }, getDataAttributes(i) {
            if (!i) return {};
            const s = {};
            return Object.keys(i.dataset).filter(t => t.startsWith("bs")).forEach(t => {
                let e = t.replace(/^bs/, "");
                e = e.charAt(0).toLowerCase() + e.slice(1, e.length), s[e] = ft(i.dataset[t])
            }), s
        }, getDataAttribute(t, e) {
            return ft(t.getAttribute("data-bs-" + mt(e)))
        }, offset(t) {
            t = t.getBoundingClientRect();
            return {top: t.top + window.pageYOffset, left: t.left + window.pageXOffset}
        }, position(t) {
            return {top: t.offsetTop, left: t.offsetLeft}
        }
    }, p = {
        find(t, e = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(e, t))
        }, findOne(t, e = document.documentElement) {
            return Element.prototype.querySelector.call(e, t)
        }, children(t, e) {
            return [].concat(...t.children).filter(t => t.matches(e))
        }, parents(t, e) {
            const i = [];
            let s = t.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;
            return i
        }, prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling
            }
            return []
        }, next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling
            }
            return []
        }, focusableChildren(t) {
            var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(", ");
            return this.find(e, t).filter(t => !a(t) && W(t))
        }
    }, gt = "carousel";
    var _t = ".bs.carousel";
    const vt = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, bt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, u = "next", f = "prev", m = "left", yt = "right", wt = {ArrowLeft: yt, ArrowRight: m}, xt = "slid" + _t;
    const g = "active", kt = ".active.carousel-item";

    class v extends e {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = p.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }

        static get Default() {
            return vt
        }

        static get NAME() {
            return gt
        }

        next() {
            this._slide(u)
        }

        nextWhenVisible() {
            !document.hidden && W(this._element) && this.next()
        }

        prev() {
            this._slide(f)
        }

        pause(t) {
            t || (this._isPaused = !0), p.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (F(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }

        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }

        to(t) {
            this._activeElement = p.findOne(kt, this._element);
            var e = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) _.one(this._element, xt, () => this.to(t)); else {
                if (e === t) return this.pause(), void this.cycle();
                e = e < t ? u : f;
                this._slide(e, this._items[t])
            }
        }

        _getConfig(t) {
            return t = {...vt, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i(gt, t, bt), t
        }

        _handleSwipe() {
            var t = Math.abs(this.touchDeltaX);
            t <= 40 || (t = t / this.touchDeltaX, this.touchDeltaX = 0, t && this._slide(0 < t ? yt : m))
        }

        _addEventListeners() {
            this._config.keyboard && _.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (_.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), _.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            const e = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), i = t => {
                e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            }, s = t => {
                this.touchDeltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this.touchStartX
            }, n = t => {
                e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
            };
            p.find(".carousel-item img", this._element).forEach(t => {
                _.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }), this._pointerEvent ? (_.on(this._element, "pointerdown.bs.carousel", t => i(t)), _.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (_.on(this._element, "touchstart.bs.carousel", t => i(t)), _.on(this._element, "touchmove.bs.carousel", t => s(t)), _.on(this._element, "touchend.bs.carousel", t => n(t)))
        }

        _keydown(t) {
            var e;
            /input|textarea/i.test(t.target.tagName) || (e = wt[t.key]) && (t.preventDefault(), this._slide(e))
        }

        _getItemIndex(t) {
            return this._items = t && t.parentNode ? p.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }

        _getItemByOrder(t, e) {
            t = t === u;
            return K(this._items, e, t, this._config.wrap)
        }

        _triggerSlideEvent(t, e) {
            var i = this._getItemIndex(t), s = this._getItemIndex(p.findOne(kt, this._element));
            return _.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: s, to: i})
        }

        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = p.findOne(".active", this._indicatorsElement),
                    i = (t.classList.remove(g), t.removeAttribute("aria-current"), p.find("[data-bs-target]", this._indicatorsElement));
                for (let t = 0; t < i.length; t++) if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                    i[t].classList.add(g), i[t].setAttribute("aria-current", "true");
                    break
                }
            }
        }

        _updateInterval() {
            const t = this._activeElement || p.findOne(kt, this._element);
            var e;
            t && ((e = Number.parseInt(t.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }

        _slide(t, e) {
            t = this._directionToOrder(t);
            const i = p.findOne(kt, this._element), s = this._getItemIndex(i), n = e || this._getItemByOrder(t, i),
                o = this._getItemIndex(n);
            var e = Boolean(this._interval), r = t === u;
            const a = r ? "carousel-item-start" : "carousel-item-end",
                l = r ? "carousel-item-next" : "carousel-item-prev", c = this._orderToDirection(t);
            if (n && n.classList.contains(g)) this._isSliding = !1; else if (!this._isSliding) {
                r = this._triggerSlideEvent(n, c);
                if (!r.defaultPrevented && i && n) {
                    this._isSliding = !0, e && this.pause(), this._setActiveIndicatorElement(n), this._activeElement = n;
                    const h = () => {
                        _.trigger(this._element, xt, {relatedTarget: n, direction: c, from: s, to: o})
                    };
                    this._element.classList.contains("slide") ? (n.classList.add(l), d(n), i.classList.add(a), n.classList.add(a), this._queueCallback(() => {
                        n.classList.remove(a, l), n.classList.add(g), i.classList.remove(g, l, a), this._isSliding = !1, setTimeout(h, 0)
                    }, i, !0)) : (i.classList.remove(g), n.classList.add(g), this._isSliding = !1, h()), e && this.cycle()
                }
            }
        }

        _directionToOrder(t) {
            return [yt, m].includes(t) ? n() ? t === m ? f : u : t === m ? u : f : t
        }

        _orderToDirection(t) {
            return [u, f].includes(t) ? n() ? t === f ? m : yt : t === f ? yt : m : t
        }

        static carouselInterface(t, e) {
            const i = v.getOrCreateInstance(t, e);
            let s = i["_config"];
            "object" == typeof e && (s = {...s, ...e});
            t = "string" == typeof e ? e : s.slide;
            if ("number" == typeof e) i.to(e); else if ("string" == typeof t) {
                if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                i[t]()
            } else s.interval && s.ride && (i.pause(), i.cycle())
        }

        static jQueryInterface(t) {
            return this.each(function () {
                v.carouselInterface(this, t)
            })
        }

        static dataApiClickHandler(t) {
            const e = o(this);
            if (e && e.classList.contains("carousel")) {
                const s = {...h.getDataAttributes(e), ...h.getDataAttributes(this)};
                var i = this.getAttribute("data-bs-slide-to");
                i && (s.interval = !1), v.carouselInterface(e, s), i && v.getInstance(e).to(i), t.preventDefault()
            }
        }
    }

    _.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", v.dataApiClickHandler), _.on(window, "load.bs.carousel.data-api", () => {
        var i = p.find('[data-bs-ride="carousel"]');
        for (let t = 0, e = i.length; t < e; t++) v.carouselInterface(i[t], v.getInstance(i[t]))
    }), t(v);
    const Et = "collapse", $t = "bs.collapse";
    $t;
    const It = {toggle: !0, parent: null}, Tt = {toggle: "boolean", parent: "(null|element)"};
    const Ot = "show", Ct = "collapse", St = "collapsing", At = "collapsed", Lt = `:scope .${Ct} .` + Ct,
        Nt = '[data-bs-toggle="collapse"]';

    class Dt extends e {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            var i = p.find(Nt);
            for (let t = 0, e = i.length; t < e; t++) {
                var s = i[t], n = H(s), o = p.find(n).filter(t => t === this._element);
                null !== n && o.length && (this._selector = n, this._triggerArray.push(s))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return It
        }

        static get NAME() {
            return Et
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let t = [], e;
                if (this._config.parent) {
                    const n = p.find(Lt, this._config.parent);
                    t = p.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(t => !n.includes(t))
                }
                const s = p.findOne(this._selector);
                if (t.length) {
                    var i = t.find(t => s !== t);
                    if ((e = i ? Dt.getInstance(i) : null) && e._isTransitioning) return
                }
                i = _.trigger(this._element, "show.bs.collapse");
                if (!i.defaultPrevented) {
                    t.forEach(t => {
                        s !== t && Dt.getOrCreateInstance(t, {toggle: !1}).hide(), e || ct.set(t, $t, null)
                    });
                    const o = this._getDimension();
                    this._element.classList.remove(Ct), this._element.classList.add(St), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    i = "scroll" + (o[0].toUpperCase() + o.slice(1));
                    this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(St), this._element.classList.add(Ct, Ot), this._element.style[o] = "", _.trigger(this._element, "shown.bs.collapse")
                    }, this._element, !0), this._element.style[o] = this._element[i] + "px"
                }
            }
        }

        hide() {
            if (!this._isTransitioning && this._isShown()) {
                var t = _.trigger(this._element, "hide.bs.collapse");
                if (!t.defaultPrevented) {
                    var t = this._getDimension(),
                        e = (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d(this._element), this._element.classList.add(St), this._element.classList.remove(Ct, Ot), this._triggerArray.length);
                    for (let t = 0; t < e; t++) {
                        var i = this._triggerArray[t], s = o(i);
                        s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1)
                    }
                    this._isTransitioning = !0;
                    this._element.style[t] = "", this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(St), this._element.classList.add(Ct), _.trigger(this._element, "hidden.bs.collapse")
                    }, this._element, !0)
                }
            }
        }

        _isShown(t = this._element) {
            return t.classList.contains(Ot)
        }

        _getConfig(t) {
            return (t = {...It, ...h.getDataAttributes(this._element), ...t}).toggle = Boolean(t.toggle), t.parent = s(t.parent), i(Et, t, Tt), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (this._config.parent) {
                const e = p.find(Lt, this._config.parent);
                p.find(Nt, this._config.parent).filter(t => !e.includes(t)).forEach(t => {
                    var e = o(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                })
            }
        }

        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach(t => {
                e ? t.classList.remove(At) : t.classList.add(At), t.setAttribute("aria-expanded", e)
            })
        }

        static jQueryInterface(i) {
            return this.each(function () {
                const t = {},
                    e = ("string" == typeof i && /show|hide/.test(i) && (t.toggle = !1), Dt.getOrCreateInstance(this, t));
                if ("string" == typeof i) {
                    if (void 0 === e[i]) throw new TypeError(`No method named "${i}"`);
                    e[i]()
                }
            })
        }
    }

    _.on(document, "click.bs.collapse.data-api", Nt, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        t = H(this);
        const e = p.find(t);
        e.forEach(t => {
            Dt.getOrCreateInstance(t, {toggle: !1}).toggle()
        })
    }), t(Dt);
    var T = "top", O = "bottom", C = "right", S = "left", Mt = "auto", Pt = [T, O, C, S], A = "start", zt = "end",
        jt = "clippingParents", Ht = "viewport", Ft = "popper", Wt = "reference", Rt = Pt.reduce(function (t, e) {
            return t.concat([e + "-" + A, e + "-" + zt])
        }, []), Bt = [].concat(Pt, [Mt]).reduce(function (t, e) {
            return t.concat([e, e + "-" + A, e + "-" + zt])
        }, []), _t = "beforeRead", Vt = "afterRead", Ut = "beforeMain", qt = "afterMain", Kt = "beforeWrite",
        Gt = "afterWrite", Xt = [_t, "read", Vt, Ut, "main", qt, Kt, "write", Gt];

    function b(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function y(t) {
        return null == t ? window : "[object Window]" !== t.toString() ? (e = t.ownerDocument) && e.defaultView || window : t;
        var e
    }

    function Yt(t) {
        return t instanceof y(t).Element || t instanceof Element
    }

    function w(t) {
        return t instanceof y(t).HTMLElement || t instanceof HTMLElement
    }

    function Qt(t) {
        if ("undefined" != typeof ShadowRoot) return t instanceof y(t).ShadowRoot || t instanceof ShadowRoot
    }

    var x = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var n = t.state;
            Object.keys(n.elements).forEach(function (t) {
                var e = n.styles[t] || {}, i = n.attributes[t] || {}, s = n.elements[t];
                w(s) && b(s) && (Object.assign(s.style, e), Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        }, effect: function (t) {
            var s = t.state, n = {
                popper: {position: s.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(s.elements.popper.style, n.popper), s.styles = n, s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow), function () {
                Object.keys(s.elements).forEach(function (t) {
                    var e = s.elements[t], i = s.attributes[t] || {},
                        t = Object.keys((s.styles.hasOwnProperty(t) ? s.styles : n)[t]).reduce(function (t, e) {
                            return t[e] = "", t
                        }, {});
                    w(e) && b(e) && (Object.assign(e.style, t), Object.keys(i).forEach(function (t) {
                        e.removeAttribute(t)
                    }))
                })
            }
        }, requires: ["computeStyles"]
    };

    function L(t) {
        return t.split("-")[0]
    }

    function Jt(t) {
        t = t.getBoundingClientRect();
        return {
            width: +t.width,
            height: +t.height,
            top: +t.top,
            right: +t.right,
            bottom: +t.bottom,
            left: +t.left,
            x: +t.left,
            y: +t.top
        }
    }

    function Zt(t) {
        var e = Jt(t), i = t.offsetWidth, s = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        }
    }

    function te(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && Qt(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s)) return !0
            } while (s = s.parentNode || s.host)
        }
        return !1
    }

    function k(t) {
        return y(t).getComputedStyle(t)
    }

    function E(t) {
        return ((Yt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ee(t) {
        return "html" === b(t) ? t : t.assignedSlot || t.parentNode || (Qt(t) ? t.host : null) || E(t)
    }

    function ie(t) {
        return w(t) && "fixed" !== k(t).position ? t.offsetParent : null
    }

    function se(t) {
        for (var e, i = y(t), s = ie(t); s && (e = s, 0 <= ["table", "td", "th"].indexOf(b(e))) && "static" === k(s).position;) s = ie(s);
        return (!s || "html" !== b(s) && ("body" !== b(s) || "static" !== k(s).position)) && (s || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
                i = -1 !== navigator.userAgent.indexOf("Trident");
            if (i && w(t) && "fixed" === k(t).position) return null;
            for (var s = ee(t); w(s) && ["html", "body"].indexOf(b(s)) < 0;) {
                var n = k(s);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return s;
                s = s.parentNode
            }
            return null
        }(t)) || i
    }

    function ne(t) {
        return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
    }

    var $ = Math.max, oe = Math.min, re = Math.round;

    function ae(t, e, i) {
        return $(t, oe(e, i))
    }

    function le() {
        return {top: 0, right: 0, bottom: 0, left: 0}
    }

    function ce(t) {
        return Object.assign({}, le(), t)
    }

    function he(i, t) {
        return t.reduce(function (t, e) {
            return t[e] = i, t
        }, {})
    }

    var I = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, i, s, n, o = t.state, r = t.name, t = t.options, a = o.elements.arrow,
                l = o.modifiersData.popperOffsets, c = ne(h = L(o.placement)),
                h = 0 <= [S, C].indexOf(h) ? "height" : "width";
            a && l && (t = t.padding, i = o, i = ce("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, i.rects, {placement: i.placement})) : t) ? t : he(t, Pt)), t = Zt(a), n = "y" === c ? T : S, s = "y" === c ? O : C, e = o.rects.reference[h] + o.rects.reference[c] - l[c] - o.rects.popper[h], l = l[c] - o.rects.reference[c], a = (a = se(a)) ? "y" === c ? a.clientHeight || 0 : a.clientWidth || 0 : 0, n = i[n], i = a - t[h] - i[s], n = ae(n, s = a / 2 - t[h] / 2 + (e / 2 - l / 2), i), o.modifiersData[r] = ((a = {})[c] = n, a.centerOffset = n - s, a))
        }, effect: function (t) {
            var e = t.state;
            null != (t = void 0 === (t = t.options.element) ? "[data-popper-arrow]" : t) && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && te(e.elements.popper, t) && (e.elements.arrow = t)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function de(t) {
        return t.split("-")[1]
    }

    var pe = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function ue(t) {
        var e, i, s, n = t.popper, o = t.popperRect, r = t.placement, a = t.variation, l = t.offsets, c = t.position,
            h = t.gpuAcceleration, d = t.adaptive, t = t.roundOffsets,
            p = !0 === t ? (p = (u = l).x, u = l.y, f = window.devicePixelRatio || 1, {
                x: re(re(p * f) / f) || 0,
                y: re(re(u * f) / f) || 0
            }) : "function" == typeof t ? t(l) : l, u = p.x, f = void 0 === u ? 0 : u, t = p.y,
            t = void 0 === t ? 0 : t, m = l.hasOwnProperty("x"), l = l.hasOwnProperty("y"), g = S, _ = T, v = window,
            n = (d && (s = "clientHeight", i = "clientWidth", (e = se(n)) === y(n) && "static" !== k(e = E(n)).position && "absolute" === c && (s = "scrollHeight", i = "scrollWidth"), r !== T && (r !== S && r !== C || a !== zt) || (_ = O, t = (t - (e[s] - o.height)) * (h ? 1 : -1)), r !== S && (r !== T && r !== O || a !== zt) || (g = C, f = (f - (e[i] - o.width)) * (h ? 1 : -1))), Object.assign({position: c}, d && pe));
        return h ? Object.assign({}, n, ((s = {})[_] = l ? "0" : "", s[g] = m ? "0" : "", s.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + t + "px)" : "translate3d(" + f + "px, " + t + "px, 0)", s)) : Object.assign({}, n, ((r = {})[_] = l ? t + "px" : "", r[g] = m ? f + "px" : "", r.transform = "", r))
    }

    var fe = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, t = t.options, i = void 0 === (i = t.gpuAcceleration) || i,
                s = void 0 === (s = t.adaptive) || s, t = void 0 === (t = t.roundOffsets) || t, i = {
                    placement: L(e.placement),
                    variation: de(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: i
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ue(Object.assign({}, i, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s,
                roundOffsets: t
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ue(Object.assign({}, i, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: t
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    }, me = {passive: !0};
    var ge = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, i = t.instance, s = (t = t.options).scroll, n = void 0 === s || s,
                o = void 0 === (s = t.resize) || s, r = y(e.elements.popper),
                a = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return n && a.forEach(function (t) {
                t.addEventListener("scroll", i.update, me)
            }), o && r.addEventListener("resize", i.update, me), function () {
                n && a.forEach(function (t) {
                    t.removeEventListener("scroll", i.update, me)
                }), o && r.removeEventListener("resize", i.update, me)
            }
        }, data: {}
    }, _e = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function ve(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return _e[t]
        })
    }

    var be = {start: "end", end: "start"};

    function ye(t) {
        return t.replace(/start|end/g, function (t) {
            return be[t]
        })
    }

    function we(t) {
        t = y(t);
        return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset}
    }

    function xe(t) {
        return Jt(E(t)).left + we(t).scrollLeft
    }

    function ke(t) {
        var t = k(t), e = t.overflow, i = t.overflowX, t = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + t + i)
    }

    function Ee(t, e) {
        void 0 === e && (e = []);
        var i = function t(e) {
                return 0 <= ["html", "body", "#document"].indexOf(b(e)) ? e.ownerDocument.body : w(e) && ke(e) ? e : t(ee(e))
            }(t), t = i === (null == (t = t.ownerDocument) ? void 0 : t.body), s = y(i),
            s = t ? [s].concat(s.visualViewport || [], ke(i) ? i : []) : i, i = e.concat(s);
        return t ? i : i.concat(Ee(ee(s)))
    }

    function $e(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function Ie(t, e) {
        return e === Ht ? $e((s = y(i = t), n = E(i), s = s.visualViewport, o = n.clientWidth, n = n.clientHeight, a = r = 0, s && (o = s.width, n = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), {
            width: o,
            height: n,
            x: r + xe(i),
            y: a
        })) : w(e) ? ((o = Jt(s = e)).top = o.top + s.clientTop, o.left = o.left + s.clientLeft, o.bottom = o.top + s.clientHeight, o.right = o.left + s.clientWidth, o.width = s.clientWidth, o.height = s.clientHeight, o.x = o.left, o.y = o.top, o) : $e((n = E(t), r = E(n), i = we(n), a = null == (a = n.ownerDocument) ? void 0 : a.body, e = $(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), t = $(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), n = -i.scrollLeft + xe(n), i = -i.scrollTop, "rtl" === k(a || r).direction && (n += $(r.clientWidth, a ? a.clientWidth : 0) - e), {
            width: e,
            height: t,
            x: n,
            y: i
        }));
        var i, s, n, o, r, a
    }

    function Te(i, t, e) {
        var s,
            n = "clippingParents" === t ? (o = Ee(ee(n = i)), Yt(s = 0 <= ["absolute", "fixed"].indexOf(k(n).position) && w(n) ? se(n) : n) ? o.filter(function (t) {
                return Yt(t) && te(t, s) && "body" !== b(t)
            }) : []) : [].concat(t), o = [].concat(n, [e]), t = o[0], e = o.reduce(function (t, e) {
                e = Ie(i, e);
                return t.top = $(e.top, t.top), t.right = oe(e.right, t.right), t.bottom = oe(e.bottom, t.bottom), t.left = $(e.left, t.left), t
            }, Ie(i, t));
        return e.width = e.right - e.left, e.height = e.bottom - e.top, e.x = e.left, e.y = e.top, e
    }

    function Oe(t) {
        var e, i = t.reference, s = t.element, t = t.placement, n = t ? L(t) : null, t = t ? de(t) : null,
            o = i.x + i.width / 2 - s.width / 2, r = i.y + i.height / 2 - s.height / 2;
        switch (n) {
            case T:
                e = {x: o, y: i.y - s.height};
                break;
            case O:
                e = {x: o, y: i.y + i.height};
                break;
            case C:
                e = {x: i.x + i.width, y: r};
                break;
            case S:
                e = {x: i.x - s.width, y: r};
                break;
            default:
                e = {x: i.x, y: i.y}
        }
        var a = n ? ne(n) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (t) {
                case A:
                    e[a] = e[a] - (i[l] / 2 - s[l] / 2);
                    break;
                case zt:
                    e[a] = e[a] + (i[l] / 2 - s[l] / 2)
            }
        }
        return e
    }

    function Ce(t, e) {
        var s, e = e = void 0 === e ? {} : e, i = e.placement, i = void 0 === i ? t.placement : i, n = e.boundary,
            n = void 0 === n ? jt : n, o = e.rootBoundary, o = void 0 === o ? Ht : o, r = e.elementContext,
            r = void 0 === r ? Ft : r, a = e.altBoundary, a = void 0 !== a && a, e = e.padding,
            e = void 0 === e ? 0 : e, e = ce("number" != typeof e ? e : he(e, Pt)), l = t.rects.popper,
            a = t.elements[a ? r === Ft ? Wt : Ft : r],
            a = Te(Yt(a) ? a : a.contextElement || E(t.elements.popper), n, o), n = Jt(t.elements.reference),
            o = Oe({reference: n, element: l, strategy: "absolute", placement: i}), l = $e(Object.assign({}, l, o)),
            o = r === Ft ? l : n, c = {
                top: a.top - o.top + e.top,
                bottom: o.bottom - a.bottom + e.bottom,
                left: a.left - o.left + e.left,
                right: o.right - a.right + e.right
            }, l = t.modifiersData.offset;
        return r === Ft && l && (s = l[i], Object.keys(c).forEach(function (t) {
            var e = 0 <= [C, O].indexOf(t) ? 1 : -1, i = 0 <= [T, O].indexOf(t) ? "y" : "x";
            c[t] += s[i] * e
        })), c
    }

    var Se = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var d = t.state, e = t.options, t = t.name;
            if (!d.modifiersData[t]._skip) {
                for (var i = e.mainAxis, s = void 0 === i || i, i = e.altAxis, n = void 0 === i || i, i = e.fallbackPlacements, p = e.padding, u = e.boundary, f = e.rootBoundary, o = e.altBoundary, r = e.flipVariations, m = void 0 === r || r, g = e.allowedAutoPlacements, r = d.options.placement, e = L(r), i = i || (e === r || !m ? [ve(r)] : function (t) {
                    if (L(t) === Mt) return [];
                    var e = ve(t);
                    return [ye(t), e, ye(e)]
                }(r)), a = [r].concat(i).reduce(function (t, e) {
                    return t.concat(L(e) === Mt ? (i = d, s = (t = t = void 0 === (t = {
                        placement: e,
                        boundary: u,
                        rootBoundary: f,
                        padding: p,
                        flipVariations: m,
                        allowedAutoPlacements: g
                    }) ? {} : t).placement, n = t.boundary, o = t.rootBoundary, r = t.padding, a = t.flipVariations, l = void 0 === (t = t.allowedAutoPlacements) ? Bt : t, c = de(s), t = c ? a ? Rt : Rt.filter(function (t) {
                        return de(t) === c
                    }) : Pt, h = (s = 0 === (s = t.filter(function (t) {
                        return 0 <= l.indexOf(t)
                    })).length ? t : s).reduce(function (t, e) {
                        return t[e] = Ce(i, {placement: e, boundary: n, rootBoundary: o, padding: r})[L(e)], t
                    }, {}), Object.keys(h).sort(function (t, e) {
                        return h[t] - h[e]
                    })) : e);
                    var i, s, n, o, r, a, l, c, h
                }, []), l = d.rects.reference, c = d.rects.popper, h = new Map, _ = !0, v = a[0], b = 0; b < a.length; b++) {
                    var y = a[b], w = L(y), x = de(y) === A, k = 0 <= [T, O].indexOf(w), E = k ? "width" : "height",
                        $ = Ce(d, {placement: y, boundary: u, rootBoundary: f, altBoundary: o, padding: p}),
                        k = k ? x ? C : S : x ? O : T, x = (l[E] > c[E] && (k = ve(k)), ve(k)), E = [];
                    if (s && E.push($[w] <= 0), n && E.push($[k] <= 0, $[x] <= 0), E.every(function (t) {
                        return t
                    })) {
                        v = y, _ = !1;
                        break
                    }
                    h.set(y, E)
                }
                if (_) for (var I = m ? 3 : 1; 0 < I; I--) if ("break" === function (e) {
                    var t = a.find(function (t) {
                        t = h.get(t);
                        if (t) return t.slice(0, e).every(function (t) {
                            return t
                        })
                    });
                    if (t) return v = t, "break"
                }(I)) break;
                d.placement !== v && (d.modifiersData[t]._skip = !0, d.placement = v, d.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function Ae(t, e, i) {
        return {
            top: t.top - e.height - (i = void 0 === i ? {x: 0, y: 0} : i).y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function Le(e) {
        return [T, C, O, S].some(function (t) {
            return 0 <= e[t]
        })
    }

    var Ne = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, t = t.name, i = e.rects.reference, s = e.rects.popper, n = e.modifiersData.preventOverflow,
                o = Ce(e, {elementContext: "reference"}), r = Ce(e, {altBoundary: !0}), o = Ae(o, i), i = Ae(r, s, n),
                r = Le(o), s = Le(i);
            e.modifiersData[t] = {
                referenceClippingOffsets: o,
                popperEscapeOffsets: i,
                isReferenceHidden: r,
                hasPopperEscaped: s
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": s
            })
        }
    };
    var De = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var r = t.state, e = t.options, t = t.name, a = void 0 === (e = e.offset) ? [0, 0] : e,
                e = Bt.reduce(function (t, e) {
                    var i, s, n, o;
                    return t[e] = (e = e, i = r.rects, s = a, n = L(e), o = 0 <= [S, T].indexOf(n) ? -1 : 1, e = (i = "function" == typeof s ? s(Object.assign({}, i, {placement: e})) : s)[0] || 0, s = (i[1] || 0) * o, 0 <= [S, C].indexOf(n) ? {
                        x: s,
                        y: e
                    } : {x: e, y: s}), t
                }, {}), i = (s = e[r.placement]).x, s = s.y;
            null != r.modifiersData.popperOffsets && (r.modifiersData.popperOffsets.x += i, r.modifiersData.popperOffsets.y += s), r.modifiersData[t] = e
        }
    };
    var Me = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, t = t.name;
            e.modifiersData[t] = Oe({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    };
    var Pe = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e, i, s, n, o, r, a, l, c, h = t.state, d = t.options, t = t.name, p = void 0 === (p = d.mainAxis) || p,
                u = void 0 !== (u = d.altAxis) && u, f = d.boundary, m = d.rootBoundary, g = d.altBoundary,
                _ = d.padding, v = void 0 === (v = d.tether) || v, d = void 0 === (d = d.tetherOffset) ? 0 : d,
                f = Ce(h, {boundary: f, rootBoundary: m, padding: _, altBoundary: g}), m = L(h.placement),
                g = !(_ = de(h.placement)), b = "x" === (m = ne(m)) ? "y" : "x", y = h.modifiersData.popperOffsets,
                w = h.rects.reference, x = h.rects.popper,
                d = "function" == typeof d ? d(Object.assign({}, h.rects, {placement: h.placement})) : d,
                k = {x: 0, y: 0};
            y && ((p || u) && (o = "y" === m ? "height" : "width", e = y[m], i = y[m] + f[c = "y" === m ? T : S], s = y[m] - f[a = "y" === m ? O : C], r = v ? -x[o] / 2 : 0, n = (_ === A ? w : x)[o], _ = _ === A ? -x[o] : -w[o], x = h.elements.arrow, x = v && x ? Zt(x) : {
                width: 0,
                height: 0
            }, c = (l = h.modifiersData["arrow#persistent"] ? h.modifiersData["arrow#persistent"].padding : le())[c], l = l[a], a = ae(0, w[o], x[o]), x = g ? w[o] / 2 - r - a - c - d : n - a - c - d, n = g ? -w[o] / 2 + r + a + l + d : _ + a + l + d, g = (c = h.elements.arrow && se(h.elements.arrow)) ? "y" === m ? c.clientTop || 0 : c.clientLeft || 0 : 0, w = h.modifiersData.offset ? h.modifiersData.offset[h.placement][m] : 0, o = y[m] + x - w - g, r = y[m] + n - w, p && (_ = ae(v ? oe(i, o) : i, e, v ? $(s, r) : s), y[m] = _, k[m] = _ - e), u && (l = (a = y[b]) + f["x" === m ? T : S], d = a - f["x" === m ? O : C], c = ae(v ? oe(l, o) : l, a, v ? $(d, r) : d), y[b] = c, k[b] = c - a)), h.modifiersData[t] = k)
        }, requiresIfExists: ["offset"]
    };

    function ze(t, e, i) {
        void 0 === i && (i = !1);
        var s = w(e),
            n = (w(e) && ((n = (o = e).getBoundingClientRect()).width, o.offsetWidth, n.height, o.offsetHeight), E(e)),
            o = Jt(t), t = {scrollLeft: 0, scrollTop: 0}, r = {x: 0, y: 0};
        return !s && i || ("body" === b(e) && !ke(n) || (t = (s = e) !== y(s) && w(s) ? {
            scrollLeft: s.scrollLeft,
            scrollTop: s.scrollTop
        } : we(s)), w(e) ? ((r = Jt(e)).x += e.clientLeft, r.y += e.clientTop) : n && (r.x = xe(n))), {
            x: o.left + t.scrollLeft - r.x,
            y: o.top + t.scrollTop - r.y,
            width: o.width,
            height: o.height
        }
    }

    function je(t) {
        var i = new Map, s = new Set, n = [];
        return t.forEach(function (t) {
            i.set(t.name, t)
        }), t.forEach(function (t) {
            s.has(t.name) || !function e(t) {
                s.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                    s.has(t) || (t = i.get(t)) && e(t)
                }), n.push(t)
            }(t)
        }), n
    }

    var He = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function Fe() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function We(t) {
        var t = t = void 0 === t ? {} : t, e = t.defaultModifiers, d = void 0 === e ? [] : e, e = t.defaultOptions,
            p = void 0 === e ? He : e;
        return function (s, n, e) {
            void 0 === e && (e = p);
            var i, o, r = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, He, p),
                modifiersData: {},
                elements: {reference: s, popper: n},
                attributes: {},
                styles: {}
            }, a = [], l = !1, c = {
                state: r, setOptions: function (t) {
                    var i, e, t = "function" == typeof t ? t(r.options) : t,
                        t = (h(), r.options = Object.assign({}, p, r.options, t), r.scrollParents = {
                            reference: Yt(s) ? Ee(s) : s.contextElement ? Ee(s.contextElement) : [],
                            popper: Ee(n)
                        }, t = [].concat(d, r.options.modifiers), e = t.reduce(function (t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }, {}), t = Object.keys(e).map(function (t) {
                            return e[t]
                        }), i = je(t), Xt.reduce(function (t, e) {
                            return t.concat(i.filter(function (t) {
                                return t.phase === e
                            }))
                        }, []));
                    return r.orderedModifiers = t.filter(function (t) {
                        return t.enabled
                    }), r.orderedModifiers.forEach(function (t) {
                        var e = t.name, i = t.options, t = t.effect;
                        "function" == typeof t && (t = t({
                            state: r,
                            name: e,
                            instance: c,
                            options: void 0 === i ? {} : i
                        }), a.push(t || function () {
                        }))
                    }), c.update()
                }, forceUpdate: function () {
                    if (!l) {
                        var t = r.elements, e = t.reference, t = t.popper;
                        if (Fe(e, t)) {
                            r.rects = {
                                reference: ze(e, se(t), "fixed" === r.options.strategy),
                                popper: Zt(t)
                            }, r.reset = !1, r.placement = r.options.placement, r.orderedModifiers.forEach(function (t) {
                                return r.modifiersData[t.name] = Object.assign({}, t.data)
                            });
                            for (var i, s, n, o = 0; o < r.orderedModifiers.length; o++) !0 === r.reset ? (r.reset = !1, o = -1) : (i = (n = r.orderedModifiers[o]).fn, s = n.options, n = n.name, "function" == typeof i && (r = i({
                                state: r,
                                options: void 0 === s ? {} : s,
                                name: n,
                                instance: c
                            }) || r))
                        }
                    }
                }, update: (i = function () {
                    return new Promise(function (t) {
                        c.forceUpdate(), t(r)
                    })
                }, function () {
                    return o = o || new Promise(function (t) {
                        Promise.resolve().then(function () {
                            o = void 0, t(i())
                        })
                    })
                }), destroy: function () {
                    h(), l = !0
                }
            };
            return Fe(s, n) && c.setOptions(e).then(function (t) {
                !l && e.onFirstUpdate && e.onFirstUpdate(t)
            }), c;

            function h() {
                a.forEach(function (t) {
                    return t()
                }), a = []
            }
        }
    }

    var Re = We({defaultModifiers: [ge, Me, fe, x, De, Se, Pe, I, Ne]});
    const Be = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: Ce,
        createPopperBase: We(),
        createPopper: Re,
        createPopperLite: We({defaultModifiers: [ge, Me, fe, x]}),
        top: T,
        bottom: O,
        right: C,
        left: S,
        auto: Mt,
        basePlacements: Pt,
        start: A,
        end: zt,
        clippingParents: jt,
        viewport: Ht,
        popper: Ft,
        reference: Wt,
        variationPlacements: Rt,
        placements: Bt,
        beforeRead: _t,
        read: "read",
        afterRead: Vt,
        beforeMain: Ut,
        main: "main",
        afterMain: qt,
        beforeWrite: Kt,
        write: "write",
        afterWrite: Gt,
        modifierPhases: Xt,
        applyStyles: x,
        arrow: I,
        computeStyles: fe,
        eventListeners: ge,
        flip: Se,
        hide: Ne,
        offset: De,
        popperOffsets: Me,
        preventOverflow: Pe
    }), Ve = "dropdown";
    _t = ".bs.dropdown", Vt = ".data-api";
    const Ue = "Escape", qe = "ArrowUp", Ke = "ArrowDown", Ge = new RegExp(qe + `|${Ke}|` + Ue);
    Ut = "click" + _t + Vt, qt = "keydown" + _t + Vt;
    const Xe = "show", Ye = '[data-bs-toggle="dropdown"]', Qe = ".dropdown-menu", Je = n() ? "top-end" : "top-start",
        Ze = n() ? "top-start" : "top-end", ti = n() ? "bottom-end" : "bottom-start",
        ei = n() ? "bottom-start" : "bottom-end", ii = n() ? "left-start" : "right-start",
        si = n() ? "right-start" : "left-start", ni = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        }, oi = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };

    class N extends e {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return ni
        }

        static get DefaultType() {
            return oi
        }

        static get NAME() {
            return Ve
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (!a(this._element) && !this._isShown(this._menu)) {
                var t = {relatedTarget: this._element}, e = _.trigger(this._element, "show.bs.dropdown", t);
                if (!e.defaultPrevented) {
                    const i = N.getParentFromElement(this._element);
                    this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => _.on(t, "mouseover", B)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Xe), this._element.classList.add(Xe), _.trigger(this._element, "shown.bs.dropdown", t)
                }
            }
        }

        hide() {
            var t;
            !a(this._element) && this._isShown(this._menu) && (t = {relatedTarget: this._element}, this._completeHide(t))
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            _.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => _.off(t, "mouseover", B)), this._popper && this._popper.destroy(), this._menu.classList.remove(Xe), this._element.classList.remove(Xe), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), _.trigger(this._element, "hidden.bs.dropdown", t))
        }

        _getConfig(t) {
            if (t = {...this.constructor.Default, ...h.getDataAttributes(this._element), ...t}, i(Ve, t, this.constructor.DefaultType), "object" != typeof t.reference || r(t.reference) || "function" == typeof t.reference.getBoundingClientRect) return t;
            throw new TypeError(Ve.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
        }

        _createPopper(t) {
            if (void 0 === Be) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = s(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig();
            t = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
            this._popper = Re(e, this._menu, i), t && h.setDataAttribute(this._menu, "popper", "static")
        }

        _isShown(t = this._element) {
            return t.classList.contains(Xe)
        }

        _getMenuElement() {
            return p.next(this._element, Qe)[0]
        }

        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ii;
            if (t.classList.contains("dropstart")) return si;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Ze : Je : e ? ei : ti
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _selectMenuItem({key: t, target: e}) {
            const i = p.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(W);
            i.length && K(i, e, t === Ke, !i.includes(e)).focus()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = N.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }

        static clearMenus(i) {
            if (!i || 2 !== i.button && ("keyup" !== i.type || "Tab" === i.key)) {
                var s = p.find(Ye);
                for (let t = 0, e = s.length; t < e; t++) {
                    const o = N.getInstance(s[t]);
                    if (o && !1 !== o._config.autoClose && o._isShown()) {
                        const r = {relatedTarget: o._element};
                        if (i) {
                            const a = i.composedPath();
                            var n = a.includes(o._menu);
                            if (a.includes(o._element) || "inside" === o._config.autoClose && !n || "outside" === o._config.autoClose && n) continue;
                            if (o._menu.contains(i.target) && ("keyup" === i.type && "Tab" === i.key || /input|select|option|textarea|form/i.test(i.target.tagName))) continue;
                            "click" === i.type && (r.clickEvent = i)
                        }
                        o._completeHide(r)
                    }
                }
            }
        }

        static getParentFromElement(t) {
            return o(t) || t.parentNode
        }

        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? !("Space" === t.key || t.key !== Ue && (t.key !== Ke && t.key !== qe || t.target.closest(Qe))) : Ge.test(t.key)) {
                var e = this.classList.contains(Xe);
                if ((e || t.key !== Ue) && (t.preventDefault(), t.stopPropagation(), !a(this))) {
                    var i = this.matches(Ye) ? this : p.prev(this, Ye)[0];
                    const s = N.getOrCreateInstance(i);
                    if (t.key !== Ue) return t.key === qe || t.key === Ke ? (e || s.show(), void s._selectMenuItem(t)) : void (e && "Space" !== t.key || N.clearMenus());
                    s.hide()
                }
            }
        }
    }

    _.on(document, qt, Ye, N.dataApiKeydownHandler), _.on(document, qt, Qe, N.dataApiKeydownHandler), _.on(document, Ut, N.clearMenus), _.on(document, "keyup.bs.dropdown.data-api", N.clearMenus), _.on(document, Ut, Ye, function (t) {
        t.preventDefault(), N.getOrCreateInstance(this).toggle()
    }), t(N);
    const ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ai = ".sticky-top";

    class li {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            var t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", t => t + e), this._setElementAttributes(ri, "paddingRight", t => t + e), this._setElementAttributes(ai, "marginRight", t => t - e)
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, i, s) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, t => {
                var e;
                t !== this._element && window.innerWidth > t.clientWidth + n || (this._saveInitialAttribute(t, i), e = window.getComputedStyle(t)[i], t.style[i] = s(Number.parseFloat(e)) + "px")
            })
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ri, "paddingRight"), this._resetElementAttributes(ai, "marginRight")
        }

        _saveInitialAttribute(t, e) {
            var i = t.style[e];
            i && h.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, i) {
            this._applyManipulationCallback(t, t => {
                var e = h.getDataAttribute(t, i);
                void 0 === e ? t.style.removeProperty(i) : (h.removeDataAttribute(t, i), t.style[i] = e)
            })
        }

        _applyManipulationCallback(t, e) {
            r(t) ? e(t) : p.find(t, this._element).forEach(e)
        }

        isOverflowing() {
            return 0 < this.getWidth()
        }
    }

    const ci = {className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null},
        hi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        }, di = "backdrop", pi = "mousedown.bs." + di;

    class ui {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                l(t)
            })) : l(t)
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                this.dispose(), l(t)
            })) : l(t)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _getConfig(t) {
            return (t = {...ci, ..."object" == typeof t ? t : {}}).rootElement = s(t.rootElement), i(di, t, hi), t
        }

        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), _.on(this._getElement(), pi, () => {
                l(this._config.clickCallback)
            }), this._isAppended = !0)
        }

        dispose() {
            this._isAppended && (_.off(this._element, pi), this._element.remove(), this._isAppended = !1)
        }

        _emulateAnimation(t) {
            q(t, this._getElement(), this._config.isAnimated)
        }
    }

    const fi = {trapElement: null, autofocus: !0}, mi = {trapElement: "element", autofocus: "boolean"};
    const gi = ".bs.focustrap", _i = (gi, gi, "backward");

    class vi {
        constructor(t) {
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(), _.off(document, gi), _.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)), _.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, _.off(document, gi))
        }

        _handleFocusin(t) {
            t = t.target;
            const e = this._config["trapElement"];
            if (t !== document && t !== e && !e.contains(t)) {
                const i = p.focusableChildren(e);
                (0 === i.length ? e : this._lastTabNavDirection === _i ? i[i.length - 1] : i[0]).focus()
            }
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? _i : "forward")
        }

        _getConfig(t) {
            return t = {...fi, ..."object" == typeof t ? t : {}}, i("focustrap", t, mi), t
        }
    }

    const D = ".bs.modal";
    const bi = {backdrop: !0, keyboard: !0, focus: !0},
        yi = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"}, wi = (D, D, "hidden" + D),
        xi = "show" + D, ki = (D, "resize" + D), Ei = "click.dismiss" + D, $i = "keydown.dismiss" + D,
        Ii = (D, "mousedown.dismiss" + D);
    D;
    const Ti = "modal-open", Oi = "modal-static";

    class Ci extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = p.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new li
        }

        static get Default() {
            return bi
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || _.trigger(this._element, xi, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Ti), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), _.on(this._dialog, Ii, () => {
                _.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }

        hide() {
            var t;
            !this._isShown || this._isTransitioning || _.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, (t = this._isAnimated()) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), _.off(this._element, Ei), _.off(this._dialog, Ii), this._queueCallback(() => this._hideModal(), this._element, t))
        }

        dispose() {
            [window, this._dialog].forEach(t => _.off(t, D)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new ui({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new vi({trapElement: this._element})
        }

        _getConfig(t) {
            return t = {...bi, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i("modal", t, yi), t
        }

        _showElement(t) {
            var e = this._isAnimated();
            const i = p.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && d(this._element), this._element.classList.add("show");
            this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, _.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
            }, this._dialog, e)
        }

        _setEscapeEvent() {
            this._isShown ? _.on(this._element, $i, t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }) : _.off(this._element, $i)
        }

        _setResizeEvent() {
            this._isShown ? _.on(window, ki, () => this._adjustDialog()) : _.off(window, ki)
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(Ti), this._resetAdjustments(), this._scrollBar.reset(), _.trigger(this._element, wi)
            })
        }

        _showBackdrop(t) {
            _.on(this._element, Ei, t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            var t = _.trigger(this._element, "hidePrevented.bs.modal");
            if (!t.defaultPrevented) {
                const {classList: e, scrollHeight: i, style: s} = this._element,
                    n = i > document.documentElement.clientHeight;
                !n && "hidden" === s.overflowY || e.contains(Oi) || (n || (s.overflowY = "hidden"), e.add(Oi), this._queueCallback(() => {
                    e.remove(Oi), n || this._queueCallback(() => {
                        s.overflowY = ""
                    }, this._dialog)
                }, this._dialog), this._element.focus())
            }
        }

        _adjustDialog() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(),
                i = 0 < e;
            (!i && t && !n() || i && !t && n()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !n() || !i && t && n()) && (this._element.style.paddingRight = e + "px")
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(e, i) {
            return this.each(function () {
                const t = Ci.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](i)
                }
            })
        }
    }

    _.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        const e = o(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), _.one(e, xi, t => {
            t.defaultPrevented || _.one(e, wi, () => {
                W(this) && this.focus()
            })
        });
        t = p.findOne(".modal.show");
        t && Ci.getInstance(t).hide();
        const i = Ci.getOrCreateInstance(e);
        i.toggle(this)
    }), ht(Ci), t(Ci);
    const Si = "offcanvas";
    Kt = ".bs.offcanvas";
    const Ai = {backdrop: !0, keyboard: !0, scroll: !1},
        Li = {backdrop: "boolean", keyboard: "boolean", scroll: "boolean"}, Ni = ".offcanvas.show", Di = "hidden" + Kt;

    class M extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get NAME() {
            return Si
        }

        static get Default() {
            return Ai
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || _.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new li).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                this._config.scroll || this._focustrap.activate(), _.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
            }, this._element, !0))
        }

        hide() {
            this._isShown && !_.trigger(this._element, "hide.bs.offcanvas").defaultPrevented && (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new li).reset(), _.trigger(this._element, Di)
            }, this._element, !0))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _getConfig(t) {
            return t = {...Ai, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i(Si, t, Li), t
        }

        _initializeBackDrop() {
            return new ui({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }

        _initializeFocusTrap() {
            return new vi({trapElement: this._element})
        }

        _addEventListeners() {
            _.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            })
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = M.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    _.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
        var e = o(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
            _.one(e, Di, () => {
                W(this) && this.focus()
            });
            t = p.findOne(Ni);
            t && t !== e && M.getInstance(t).hide();
            const i = M.getOrCreateInstance(e);
            i.toggle(this)
        }
    }), _.on(window, "load.bs.offcanvas.data-api", () => p.find(Ni).forEach(t => M.getOrCreateInstance(t).show())), ht(M), t(M);
    const Mi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
    const Pi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        zi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    Gt = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };

    function ji(t, i, e) {
        if (!t.length) return t;
        if (e && "function" == typeof e) return e(t);
        const s = new window.DOMParser, n = s.parseFromString(t, "text/html");
        var o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, e = o.length; t < e; t++) {
            const a = o[t];
            var r = a.nodeName.toLowerCase();
            if (Object.keys(i).includes(r)) {
                const l = [].concat(...a.attributes), c = [].concat(i["*"] || [], i[r] || []);
                l.forEach(t => {
                    ((t, e) => {
                        var i = t.nodeName.toLowerCase();
                        if (e.includes(i)) return !Mi.has(i) || Boolean(Pi.test(t.nodeValue) || zi.test(t.nodeValue));
                        const s = e.filter(t => t instanceof RegExp);
                        for (let t = 0, e = s.length; t < e; t++) if (s[t].test(i)) return !0;
                        return !1
                    })(t, c) || a.removeAttribute(t.nodeName)
                })
            } else a.remove()
        }
        return n.body.innerHTML
    }

    const Hi = "tooltip";
    x = ".bs.tooltip";
    const Fi = new Set(["sanitize", "allowList", "sanitizeFn"]), Wi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        }, Ri = {AUTO: "auto", TOP: "top", RIGHT: n() ? "left" : "right", BOTTOM: "bottom", LEFT: n() ? "right" : "left"},
        Bi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: Gt,
            popperConfig: null
        }, Vi = {
            HIDE: "hide" + x,
            HIDDEN: "hidden" + x,
            SHOW: "show" + x,
            SHOWN: "shown" + x,
            INSERTED: "inserted" + x,
            CLICK: "click" + x,
            FOCUSIN: "focusin" + x,
            FOCUSOUT: "focusout" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x
        }, Ui = "fade";
    const qi = "show", Ki = "show", Gi = ".tooltip-inner", Xi = "hide.bs.modal", Yi = "hover", Qi = "focus";

    class Ji extends e {
        constructor(t, e) {
            if (void 0 === Be) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }

        static get Default() {
            return Bi
        }

        static get NAME() {
            return Hi
        }

        static get Event() {
            return Vi
        }

        static get DefaultType() {
            return Wi
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle(t) {
            if (this._isEnabled) if (t) {
                const e = this._initializeOnDelegatedTarget(t);
                e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
            } else this.getTipElement().classList.contains(qi) ? this._leave(null, this) : this._enter(null, this)
        }

        dispose() {
            clearTimeout(this._timeout), _.off(this._element.closest(".modal"), Xi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var t = _.trigger(this._element, this.constructor.Event.SHOW);
                const i = R(this._element);
                var e = (null === i ? this._element.ownerDocument.documentElement : i).contains(this._element);
                if (!t.defaultPrevented && e) {
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Gi).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                    const s = this.getTipElement();
                    t = (t => {
                        for (; t += Math.floor(1e6 * Math.random()), document.getElementById(t);) ;
                        return t
                    })(this.constructor.NAME), e = (s.setAttribute("id", t), this._element.setAttribute("aria-describedby", t), this._config.animation && s.classList.add(Ui), "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement), t = this._getAttachment(e);
                    this._addAttachmentClass(t);
                    const n = this._config["container"],
                        o = (ct.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s), _.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Re(this._element, s, this._getPopperConfig(t)), s.classList.add(qi), this._resolvePossibleFunction(this._config.customClass));
                    o && s.classList.add(...o.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                        _.on(t, "mouseover", B)
                    });
                    e = this.tip.classList.contains(Ui);
                    this._queueCallback(() => {
                        var t = this._hoverState;
                        this._hoverState = null, _.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
                    }, this.tip, e)
                }
            }
        }

        hide() {
            if (this._popper) {
                const e = this.getTipElement();
                var t;
                _.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (e.classList.remove(qi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => _.off(t, "mouseover", B)), this._activeTrigger.click = !1, this._activeTrigger[Qi] = !1, this._activeTrigger[Yi] = !1, t = this.tip.classList.contains(Ui), this._queueCallback(() => {
                    this._isWithActiveTrigger() || (this._hoverState !== Ki && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), _.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                }, this.tip, t), this._hoverState = "")
            }
        }

        update() {
            null !== this._popper && this._popper.update()
        }

        isWithContent() {
            return Boolean(this.getTitle())
        }

        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div"), e = (t.innerHTML = this._config.template, t.children[0]);
            return this.setContent(e), e.classList.remove(Ui, qi), this.tip = e, this.tip
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Gi)
        }

        _sanitizeAndSetContent(t, e, i) {
            const s = p.findOne(i, t);
            !e && s ? s.remove() : this.setElementContent(s, e)
        }

        setElementContent(t, e) {
            if (null !== t) return r(e) ? (e = s(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = ji(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }

        getTitle() {
            var t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }

        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }

        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }

        _getPopperConfig(t) {
            t = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _addAttachmentClass(t) {
            this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(t))
        }

        _getAttachment(t) {
            return Ri[t.toUpperCase()]
        }

        _setListeners() {
            const t = this._config.trigger.split(" ");
            t.forEach(t => {
                var e;
                "click" === t ? _.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t)) : "manual" !== t && (e = t === Yi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, t = t === Yi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT, _.on(this._element, e, this._config.selector, t => this._enter(t)), _.on(this._element, t, this._config.selector, t => this._leave(t)))
            }), this._hideModalHandler = () => {
                this._element && this.hide()
            }, _.on(this._element.closest(".modal"), Xi, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }

        _fixTitle() {
            var t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            !t && "string" == e || (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }

        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? Qi : Yi] = !0), e.getTipElement().classList.contains(qi) || e._hoverState === Ki ? e._hoverState = Ki : (clearTimeout(e._timeout), e._hoverState = Ki, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                e._hoverState === Ki && e.show()
            }, e._config.delay.show) : e.show())
        }

        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? Qi : Yi] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide()
            }, e._config.delay.hide) : e.hide())
        }

        _isWithActiveTrigger() {
            for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1
        }

        _getConfig(t) {
            const e = h.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                Fi.has(t) && delete e[t]
            }), (t = {...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {}}).container = !1 === t.container ? document.body : s(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), i(Hi, t, this.constructor.DefaultType), t.sanitize && (t.template = ji(t.template, t.allowList, t.sanitizeFn)), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }

        _cleanTipClass() {
            const e = this.getTipElement();
            var t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g");
            const i = e.getAttribute("class").match(t);
            null !== i && 0 < i.length && i.map(t => t.trim()).forEach(t => e.classList.remove(t))
        }

        _getBasicClassPrefix() {
            return "bs-tooltip"
        }

        _handlePopperPlacementChange(t) {
            t = t.state;
            t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = Ji.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    t(Ji);
    I = ".bs.popover";
    const Zi = {
        ...Ji.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, ts = {...Ji.DefaultType, content: "(string|element|function)"}, es = {
        HIDE: "hide" + I,
        HIDDEN: "hidden" + I,
        SHOW: "show" + I,
        SHOWN: "shown" + I,
        INSERTED: "inserted" + I,
        CLICK: "click" + I,
        FOCUSIN: "focusin" + I,
        FOCUSOUT: "focusout" + I,
        MOUSEENTER: "mouseenter" + I,
        MOUSELEAVE: "mouseleave" + I
    };

    class is extends Ji {
        static get Default() {
            return Zi
        }

        static get NAME() {
            return "popover"
        }

        static get Event() {
            return es
        }

        static get DefaultType() {
            return ts
        }

        isWithContent() {
            return this.getTitle() || this._getContent()
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        _getBasicClassPrefix() {
            return "bs-popover"
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = is.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    t(is);
    const ss = "scrollspy";
    const ns = ".bs.scrollspy";
    const os = {offset: 10, method: "auto", target: ""},
        rs = {offset: "number", method: "string", target: "(string|element)"};
    ns, ns;
    ns;
    const as = "dropdown-item", ls = "active", cs = ".nav-link", hs = ".list-group-item", ds = cs + `, ${hs}, .` + as,
        ps = "position";

    class us extends e {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, _.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
        }

        static get Default() {
            return os
        }

        static get NAME() {
            return ss
        }

        refresh() {
            var t = this._scrollElement === this._scrollElement.window ? "offset" : ps;
            const s = "auto" === this._config.method ? t : this._config.method, n = s === ps ? this._getScrollTop() : 0,
                e = (this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), p.find(ds, this._config.target));
            e.map(t => {
                t = H(t);
                const e = t ? p.findOne(t) : null;
                if (e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [h[s](e).top + n, t]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }

        dispose() {
            _.off(this._scrollElement, ns), super.dispose()
        }

        _getConfig(t) {
            return (t = {...os, ...h.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}).target = s(t.target) || document.documentElement, i(ss, t, rs), t
        }

        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }

        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }

        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }

        _process() {
            var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                i = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), i <= e) return t = this._targets[this._targets.length - 1], void (this._activeTarget !== t && this._activate(t));
            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
            for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
        }

        _activate(e) {
            this._activeTarget = e, this._clear();
            const t = ds.split(",").map(t => t + `[data-bs-target="${e}"],${t}[href="${e}"]`),
                i = p.findOne(t.join(","), this._config.target);
            i.classList.add(ls), i.classList.contains(as) ? p.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(ls) : p.parents(i, ".nav, .list-group").forEach(t => {
                p.prev(t, cs + ", " + hs).forEach(t => t.classList.add(ls)), p.prev(t, ".nav-item").forEach(t => {
                    p.children(t, cs).forEach(t => t.classList.add(ls))
                })
            }), _.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: e})
        }

        _clear() {
            p.find(ds, this._config.target).filter(t => t.classList.contains(ls)).forEach(t => t.classList.remove(ls))
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = us.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    _.on(window, "load.bs.scrollspy.data-api", () => {
        p.find('[data-bs-spy="scroll"]').forEach(t => new us(t))
    }), t(us);
    const fs = "active", ms = ".active", gs = ":scope > li > .active";

    class _s extends e {
        static get NAME() {
            return "tab"
        }

        show() {
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(fs)) {
                let t;
                var e = o(this._element), i = this._element.closest(".nav, .list-group"),
                    s = (i && (s = "UL" === i.nodeName || "OL" === i.nodeName ? gs : ms, t = (t = p.find(s, i))[t.length - 1]), t ? _.trigger(t, "hide.bs.tab", {relatedTarget: this._element}) : null);
                _.trigger(this._element, "show.bs.tab", {relatedTarget: t}).defaultPrevented || null !== s && s.defaultPrevented || (this._activate(this._element, i), s = () => {
                    _.trigger(t, "hidden.bs.tab", {relatedTarget: this._element}), _.trigger(this._element, "shown.bs.tab", {relatedTarget: t})
                }, e ? this._activate(e, e.parentNode, s) : s())
            }
        }

        _activate(t, e, i) {
            const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p.children(e, ms) : p.find(gs, e))[0];
            var e = i && s && s.classList.contains("fade"), n = () => this._transitionComplete(t, s, i);
            s && e ? (s.classList.remove("show"), this._queueCallback(n, t, !0)) : n()
        }

        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(fs);
                const n = p.findOne(":scope > .dropdown-menu .active", e.parentNode);
                n && n.classList.remove(fs), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(fs), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains("fade") && t.classList.add("show");
            let s = t.parentNode;
            (s = s && "LI" === s.nodeName ? s.parentNode : s) && s.classList.contains("dropdown-menu") && ((e = t.closest(".dropdown")) && p.find(".dropdown-toggle", e).forEach(t => t.classList.add(fs)), t.setAttribute("aria-expanded", !0)), i && i()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = _s.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    _.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
            const e = _s.getOrCreateInstance(this);
            e.show()
        }
    }), t(_s);
    const vs = "show", bs = "showing", ys = {animation: "boolean", autohide: "boolean", delay: "number"},
        ws = {animation: !0, autohide: !0, delay: 5e3};

    class xs extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get DefaultType() {
            return ys
        }

        static get Default() {
            return ws
        }

        static get NAME() {
            return "toast"
        }

        show() {
            _.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add(vs), this._element.classList.add(bs), this._queueCallback(() => {
                this._element.classList.remove(bs), _.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }

        hide() {
            this._element.classList.contains(vs) && !_.trigger(this._element, "hide.bs.toast").defaultPrevented && (this._element.classList.add(bs), this._queueCallback(() => {
                this._element.classList.add("hide"), this._element.classList.remove(bs), this._element.classList.remove(vs), _.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation))
        }

        dispose() {
            this._clearTimeout(), this._element.classList.contains(vs) && this._element.classList.remove(vs), super.dispose()
        }

        _getConfig(t) {
            return t = {...ws, ...h.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}, i("toast", t, this.constructor.DefaultType), t
        }

        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            e ? this._clearTimeout() : (t = t.relatedTarget, this._element === t || this._element.contains(t) || this._maybeScheduleHide())
        }

        _setListeners() {
            _.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), _.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), _.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), _.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = xs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    return ht(xs), t(xs), {
        Alert: dt,
        Button: ut,
        Carousel: v,
        Collapse: Dt,
        Dropdown: N,
        Modal: Ci,
        Offcanvas: M,
        Popover: is,
        ScrollSpy: us,
        Tab: _s,
        Toast: xs,
        Tooltip: Ji
    }
}), function (t, e) {
    void 0 === t && void 0 !== window && (t = window), "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, function (t) {
    !function (y) {
        "use strict";
        var P = ["sanitize", "whiteList", "sanitizeFn"],
            z = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], j = {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, H = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function T(t, e, i) {
            if (i && "function" == typeof i) return i(t);
            for (var s = Object.keys(e), n = 0, o = t.length; n < o; n++) for (var r = t[n].querySelectorAll("*"), a = 0, l = r.length; a < l; a++) {
                var c = r[a], h = c.nodeName.toLowerCase();
                if (-1 === s.indexOf(h)) c.parentNode.removeChild(c); else for (var d = [].slice.call(c.attributes), p = [].concat(e["*"] || [], e[h] || []), u = 0, f = d.length; u < f; u++) {
                    var m = d[u];
                    !function (t, e) {
                        var i = t.nodeName.toLowerCase();
                        if (-1 !== y.inArray(i, e)) return -1 === y.inArray(i, z) || Boolean(t.nodeValue.match(H) || t.nodeValue.match(F));
                        for (var s = y(e).filter(function (t, e) {
                            return e instanceof RegExp
                        }), n = 0, o = s.length; n < o; n++) if (i.match(s[n])) return 1
                    }(m, p) && c.removeAttribute(m.nodeName)
                }
            }
        }

        if (!("classList" in document.createElement("_")) && "Element" in (i = window)) {
            var e = "classList", t = "prototype", i = i.Element[t], s = Object, n = function () {
                var i = y(this);
                return {
                    add: function (t) {
                        return t = Array.prototype.slice.call(arguments).join(" "), i.addClass(t)
                    }, remove: function (t) {
                        return t = Array.prototype.slice.call(arguments).join(" "), i.removeClass(t)
                    }, toggle: function (t, e) {
                        return i.toggleClass(t, e)
                    }, contains: function (t) {
                        return i.hasClass(t)
                    }
                }
            };
            if (s.defineProperty) {
                var o = {get: n, enumerable: !0, configurable: !0};
                try {
                    s.defineProperty(i, e, o)
                } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (o.enumerable = !1, s.defineProperty(i, e, o))
                }
            } else s[t].__defineGetter__ && i.__defineGetter__(e, n)
        }
        var r, a, l, c, o = document.createElement("_");

        function h(t) {
            if (null == this) throw new TypeError;
            var e = String(this);
            if (t && "[object RegExp]" == c.call(t)) throw new TypeError;
            var i = e.length, s = String(t), n = s.length, t = 1 < arguments.length ? arguments[1] : void 0,
                t = t ? Number(t) : 0, o = (t != t && (t = 0), Math.min(Math.max(t, 0), i));
            if (i < n + o) return !1;
            for (var r = -1; ++r < n;) if (e.charCodeAt(o + r) != s.charCodeAt(r)) return !1;
            return !0
        }

        function w(t, e) {
            var i, s = t.selectedOptions, n = [];
            if (e) {
                for (var o = 0, r = s.length; o < r; o++) (i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
                return n
            }
            return s
        }

        function x(t, e) {
            for (var i, s = [], n = e || t.selectedOptions, o = 0, r = n.length; o < r; o++) (i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value);
            return t.multiple ? s : s.length ? s[0] : null
        }

        o.classList.add("c1", "c2"), o.classList.contains("c2") || (r = DOMTokenList.prototype.add, a = DOMTokenList.prototype.remove, DOMTokenList.prototype.add = function () {
            Array.prototype.forEach.call(arguments, r.bind(this))
        }, DOMTokenList.prototype.remove = function () {
            Array.prototype.forEach.call(arguments, a.bind(this))
        }), o.classList.toggle("c3", !1), o.classList.contains("c3") && (l = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (t, e) {
            return 1 in arguments && !this.contains(t) == !e ? e : l.call(this, t)
        }), o = null, String.prototype.startsWith || (s = function () {
            try {
                var t = {}, e = Object.defineProperty, i = e(t, t, t) && e
            } catch (t) {
            }
            return i
        }(), c = {}.toString, s ? s(String.prototype, "startsWith", {
            value: h,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = h), Object.keys || (Object.keys = function (t, e, i) {
            for (e in i = [], t) i.hasOwnProperty.call(t, e) && i.push(e);
            return i
        }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function () {
                return this.querySelectorAll(":checked")
            }
        });
        var d = {useDefault: !1, _set: y.valHooks.select.set}, k = (y.valHooks.select.set = function (t, e) {
            return e && !d.useDefault && y(t).data("selected", !0), d._set.apply(this, arguments)
        }, null), W = function () {
            try {
                return new Event("change"), !0
            } catch (t) {
                return !1
            }
        }();

        function v(t, e, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
                var a = n[r], l = t[a];
                if (l && (l = l.toString(), "display" === a && (l = l.replace(/<[^>]+>/g, "")), l = (l = s ? u(l) : l).toUpperCase(), o = "contains" === i ? 0 <= l.indexOf(e) : l.startsWith(e))) break
            }
            return o
        }

        function _(t) {
            return parseInt(t, 10) || 0
        }

        y.fn.triggerNative = function (t) {
            var e, i = this[0];
            i.dispatchEvent ? (W ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event")).initEvent(t, !0, !1), i.dispatchEvent(e)) : i.fireEvent ? ((e = document.createEventObject()).eventType = t, i.fireEvent("on" + t, e)) : this.trigger(t)
        };
        var R = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }, B = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            V = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function U(t) {
            return R[t]
        }

        function u(t) {
            return (t = t.toString()) && t.replace(B, U).replace(V, "")
        }

        p = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, t = "(?:" + Object.keys(p).join("|") + ")", f = RegExp(t), m = RegExp(t, "g");
        var p, f, m, E = function (t) {
            return f.test(t = null == t ? "" : "" + t) ? t.replace(m, q) : t
        };

        function q(t) {
            return p[t]
        }

        var K = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
        }, b = 27, G = 13, $ = 32, I = 9, O = 38, C = 40, S = {success: !1, major: "3"};
        try {
            S.full = (y.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), S.major = S.full[0], S.success = !0
        } catch (t) {
        }
        var g = 0, A = ".bs.select", L = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok"
            }, X = {MENU: "." + L.MENU}, N = {
                div: document.createElement("div"),
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode(" "),
                fragment: document.createDocumentFragment()
            },
            Y = (N.noResults = N.li.cloneNode(!1), N.noResults.className = "no-results", N.a.setAttribute("role", "option"), N.a.className = "dropdown-item", N.subtext.className = "text-muted", N.text = N.span.cloneNode(!1), N.text.className = "text", N.checkMark = N.span.cloneNode(!1), new RegExp(O + "|" + C)),
            Q = new RegExp("^" + I + "$|" + b), D = {
                li: function (t, e, i) {
                    var s = N.li.cloneNode(!1);
                    return t && (1 === t.nodeType || 11 === t.nodeType ? s.appendChild(t) : s.innerHTML = t), void 0 !== e && "" !== e && (s.className = e), null != i && s.classList.add("optgroup-" + i), s
                }, a: function (t, e, i) {
                    var s = N.a.cloneNode(!0);
                    return t && (11 === t.nodeType ? s.appendChild(t) : s.insertAdjacentHTML("beforeend", t)), void 0 !== e && "" !== e && s.classList.add.apply(s.classList, e.split(/\s+/)), i && s.setAttribute("style", i), s
                }, text: function (t, e) {
                    var i, s, n = N.text.cloneNode(!1);
                    if (t.content ? n.innerHTML = t.content : (n.textContent = t.text, t.icon && (i = N.whitespace.cloneNode(!1), (s = (!0 === e ? N.i : N.span).cloneNode(!1)).className = this.options.iconBase + " " + t.icon, N.fragment.appendChild(s), N.fragment.appendChild(i)), t.subtext && ((s = N.subtext.cloneNode(!1)).textContent = t.subtext, n.appendChild(s))), !0 === e) for (; 0 < n.childNodes.length;) N.fragment.appendChild(n.childNodes[0]); else N.fragment.appendChild(n);
                    return N.fragment
                }, label: function (t) {
                    var e, i, s = N.text.cloneNode(!1);
                    return s.innerHTML = t.display, t.icon && (e = N.whitespace.cloneNode(!1), (i = N.span.cloneNode(!1)).className = this.options.iconBase + " " + t.icon, N.fragment.appendChild(i), N.fragment.appendChild(e)), t.subtext && ((i = N.subtext.cloneNode(!1)).textContent = t.subtext, s.appendChild(i)), N.fragment.appendChild(s), N.fragment
                }
            };

        function M(t, e) {
            var i = this;
            d.useDefault || (y.valHooks.select.set = d._set, d.useDefault = !0), this.$element = y(t), this.$newElement = null, this.$button = null, this.$menu = null, this.options = e, this.selectpicker = {
                main: {},
                search: {},
                current: {},
                view: {},
                isSearching: !1,
                keydown: {
                    keyHistory: "", resetKeyHistory: {
                        start: function () {
                            return setTimeout(function () {
                                i.selectpicker.keydown.keyHistory = ""
                            }, 800)
                        }
                    }
                }
            }, this.sizeInfo = {}, null === this.options.title && (this.options.title = this.$element.attr("title")), "number" == typeof (t = this.options.windowPadding) && (this.options.windowPadding = [t, t, t, t]), this.val = M.prototype.val, this.render = M.prototype.render, this.refresh = M.prototype.refresh, this.setStyle = M.prototype.setStyle, this.selectAll = M.prototype.selectAll, this.deselectAll = M.prototype.deselectAll, this.destroy = M.prototype.destroy, this.remove = M.prototype.remove, this.show = M.prototype.show, this.hide = M.prototype.hide, this.init()
        }

        function J(t) {
            var a, l = arguments, c = t;
            if ([].shift.apply(l), !S.success) {
                try {
                    S.full = (y.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (t) {
                    M.BootstrapVersion ? S.full = M.BootstrapVersion.split(" ")[0].split(".") : (S.full = [S.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", t))
                }
                S.major = S.full[0], S.success = !0
            }
            if ("4" === S.major) {
                var e = [];
                M.DEFAULTS.style === L.BUTTONCLASS && e.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }), M.DEFAULTS.iconBase === L.ICONBASE && e.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }), M.DEFAULTS.tickIcon === L.TICKICON && e.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }), L.DIVIDER = "dropdown-divider", L.SHOW = "show", L.BUTTONCLASS = "btn-light", L.POPOVERHEADER = "popover-header", L.ICONBASE = "", L.TICKICON = "bs-ok-default";
                for (var i = 0; i < e.length; i++) {
                    t = e[i];
                    M.DEFAULTS[t.name] = L[t.className]
                }
            }
            var s = this.each(function () {
                var t = y(this);
                if (t.is("select")) {
                    var e = t.data("selectpicker"), i = "object" == typeof c && c;
                    if (e) {
                        if (i) for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e.options[s] = i[s])
                    } else {
                        var n, o = t.data();
                        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && -1 !== y.inArray(n, P) && delete o[n];
                        var r = y.extend({}, M.DEFAULTS, y.fn.selectpicker.defaults || {}, o, i);
                        r.template = y.extend({}, M.DEFAULTS.template, y.fn.selectpicker.defaults ? y.fn.selectpicker.defaults.template : {}, o.template, i.template), t.data("selectpicker", e = new M(this, r))
                    }
                    "string" == typeof c && (a = e[c] instanceof Function ? e[c].apply(e, l) : e.options[c])
                }
            });
            return void 0 !== a ? a : s
        }

        M.VERSION = "1.13.18", M.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (t, e) {
                return 1 == t ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (t, e) {
                return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: L.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: L.ICONBASE,
            tickIcon: L.TICKICON,
            showTick: !1,
            template: {caret: '<span class="caret"></span>'},
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: j
        }, M.prototype = {
            constructor: M, init: function () {
                var i = this, t = this.$element.attr("id"), e = this.$element[0], s = e.form;
                g++, this.selectId = "bs-select-" + g, e.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), e.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.buildData(), this.$element.after(this.$newElement).prependTo(this.$newElement), s && null === e.form && (s.id || (s.id = "form-" + this.selectId), e.setAttribute("form", s.id)), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(X.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), e.classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(L.MENURIGHT), void 0 !== t && this.$button.attr("data-id", t), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + A, function () {
                    var t, e;
                    i.isVirtual() && (e = (t = i.$menuInner[0]).firstChild.cloneNode(!1), t.replaceChild(e, t.firstChild), t.scrollTop = 0)
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (t) {
                        i.$element.trigger("hide" + A, t)
                    }, "hidden.bs.dropdown": function (t) {
                        i.$element.trigger("hidden" + A, t)
                    }, "show.bs.dropdown": function (t) {
                        i.$element.trigger("show" + A, t)
                    }, "shown.bs.dropdown": function (t) {
                        i.$element.trigger("shown" + A, t)
                    }
                }), e.hasAttribute("required") && this.$element.on("invalid" + A, function () {
                    i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + A + ".invalid", function () {
                        i.$element.val(i.$element.val()).off("shown" + A + ".invalid")
                    }).on("rendered" + A, function () {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + A)
                    }), i.$button.on("blur" + A, function () {
                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + A)
                    })
                }), setTimeout(function () {
                    i.buildList(), i.$element.trigger("loaded" + A)
                })
            }, createDropdown: function () {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    e = this.multiple ? ' aria-multiselectable="true"' : "", i = "",
                    s = this.autofocus ? " autofocus" : "";
                S.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
                var n = "", o = "", r = "", a = "";
                return this.options.header && (n = '<div class="' + L.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (o = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + E(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (r = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + L.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + L.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + L.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), t = '<div class="dropdown bootstrap-select' + t + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === S.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + L.MENU + " " + ("4" === S.major ? "" : L.SHOW) + '">' + n + o + r + '<div class="inner ' + L.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + e + '><ul class="' + L.MENU + " inner " + ("4" === S.major ? L.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>", y(t)
            }, setPositionData: function () {
                this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1;
                for (var t = 0; t < this.selectpicker.current.data.length; t++) {
                    var e = this.selectpicker.current.data[t], i = !0;
                    "divider" === e.type ? (i = !1, e.height = this.sizeInfo.dividerHeight) : "optgroup-label" === e.type ? (i = !1, e.height = this.sizeInfo.dropdownHeaderHeight) : e.height = this.sizeInfo.liHeight, e.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, e.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = t)), e.position = (0 === t ? 0 : this.selectpicker.current.data[t - 1].position) + e.height
                }
            }, isVirtual: function () {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            }, createView: function (x, t, e) {
                var k, E, $ = this, i = 0, I = [];

                function s(t, e) {
                    var i, s = $.selectpicker.current.elements.length, n = [], o = !0, r = $.isVirtual();
                    $.selectpicker.view.scrollTop = t;
                    for (var a, l = Math.ceil($.sizeInfo.menuInnerHeight / $.sizeInfo.liHeight * 1.5), c = Math.round(s / l) || 1, h = 0; h < c; h++) {
                        var d = h === c - 1 ? s : (h + 1) * l;
                        if (n[h] = [h * l + (h ? 1 : 0), d], !s) break;
                        void 0 === i && t - 1 <= $.selectpicker.current.data[d - 1].position - $.sizeInfo.menuInnerHeight && (i = h)
                    }
                    if (void 0 === i && (i = 0), _ = [$.selectpicker.view.position0, $.selectpicker.view.position1], p = Math.max(0, i - 1), f = Math.min(c - 1, i + 1), $.selectpicker.view.position0 = !1 !== r && Math.max(0, n[p][0]) || 0, $.selectpicker.view.position1 = !1 === r ? s : Math.min(s, n[f][1]) || 0, p = _[0] !== $.selectpicker.view.position0 || _[1] !== $.selectpicker.view.position1, void 0 !== $.activeIndex && (E = $.selectpicker.main.elements[$.prevActiveIndex], I = $.selectpicker.main.elements[$.activeIndex], k = $.selectpicker.main.elements[$.selectedIndex], e && ($.activeIndex !== $.selectedIndex && $.defocusItem(I), $.activeIndex = void 0), $.activeIndex && $.activeIndex !== $.selectedIndex && $.defocusItem(k)), void 0 !== $.prevActiveIndex && $.prevActiveIndex !== $.activeIndex && $.prevActiveIndex !== $.selectedIndex && $.defocusItem(E), (e || p) && (f = $.selectpicker.view.visibleElements ? $.selectpicker.view.visibleElements.slice() : [], $.selectpicker.view.visibleElements = !1 === r ? $.selectpicker.current.elements : $.selectpicker.current.elements.slice($.selectpicker.view.position0, $.selectpicker.view.position1), $.setOptionStatus(), (x || !1 === r && e) && (_ = f, a = $.selectpicker.view.visibleElements, o = !(_.length === a.length && _.every(function (t, e) {
                        return t === a[e]
                    }))), (e || !0 === r) && o)) {
                        var p = $.$menuInner[0], u = document.createDocumentFragment(), f = p.firstChild.cloneNode(!1),
                            m = $.selectpicker.view.visibleElements, g = [];
                        p.replaceChild(f, p.firstChild);
                        for (var _, h = 0, v = m.length; h < v; h++) {
                            var b, y, w = m[h];
                            $.options.sanitize && (b = w.lastChild) && (y = $.selectpicker.current.data[h + $.selectpicker.view.position0]) && y.content && !y.sanitized && (g.push(b), y.sanitized = !0), u.appendChild(w)
                        }
                        $.options.sanitize && g.length && T(g, $.options.whiteList, $.options.sanitizeFn), !0 === r ? (_ = 0 === $.selectpicker.view.position0 ? 0 : $.selectpicker.current.data[$.selectpicker.view.position0 - 1].position, o = $.selectpicker.view.position1 > s - 1 ? 0 : $.selectpicker.current.data[s - 1].position - $.selectpicker.current.data[$.selectpicker.view.position1 - 1].position, p.firstChild.style.marginTop = _ + "px", p.firstChild.style.marginBottom = o + "px") : (p.firstChild.style.marginTop = 0, p.firstChild.style.marginBottom = 0), p.firstChild.appendChild(u), !0 === r && $.sizeInfo.hasScrollBar && (f = p.firstChild.offsetWidth, e && f < $.sizeInfo.menuInnerInnerWidth && $.sizeInfo.totalMenuWidth > $.sizeInfo.selectWidth ? p.firstChild.style.minWidth = $.sizeInfo.menuInnerInnerWidth + "px" : f > $.sizeInfo.menuInnerInnerWidth && ($.$menu[0].style.minWidth = 0, (_ = p.firstChild.offsetWidth) > $.sizeInfo.menuInnerInnerWidth && ($.sizeInfo.menuInnerInnerWidth = _, p.firstChild.style.minWidth = $.sizeInfo.menuInnerInnerWidth + "px"), $.$menu[0].style.minWidth = ""))
                    }
                    $.prevActiveIndex = $.activeIndex, $.options.liveSearch ? x && e && ($.selectpicker.view.canHighlight[o = 0] || (o = 1 + $.selectpicker.view.canHighlight.slice(1).indexOf(!0)), r = $.selectpicker.view.visibleElements[o], $.defocusItem($.selectpicker.view.currentActive), $.activeIndex = ($.selectpicker.current.data[o] || {}).index, $.focusItem(r)) : $.$menuInner.trigger("focus")
                }

                this.selectpicker.isSearching = x, this.selectpicker.current = x ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), t && (e ? i = this.$menuInner[0].scrollTop : $.multiple || "number" == typeof (e = ((t = $.$element[0]).options[t.selectedIndex] || {}).liIndex) && !1 !== $.options.size && (e = (t = $.selectpicker.main.data[e]) && t.position) && (i = e - ($.sizeInfo.menuInnerHeight + $.sizeInfo.liHeight) / 2)), s(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (t, e) {
                    $.noScroll || s(this.scrollTop, e), $.noScroll = !1
                }), y(window).off("resize" + A + "." + this.selectId + ".createView").on("resize" + A + "." + this.selectId + ".createView", function () {
                    $.$newElement.hasClass(L.SHOW) && s($.$menuInner[0].scrollTop)
                })
            }, focusItem: function (t, e, i) {
                var s;
                t && (e = e || this.selectpicker.main.data[this.activeIndex], (s = t.firstChild) && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", e.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), t.classList.add("active"), s.classList.add("active"))))
            }, defocusItem: function (t) {
                t && (t.classList.remove("active"), t.firstChild && t.firstChild.classList.remove("active"))
            }, setPlaceholder: function () {
                var t, e, i, s, n, o, r = this, a = !1;
                return this.options.title && !this.multiple && (this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = this.$element[0], e = !(a = !0), i = !this.selectpicker.view.titleOption.parentNode, s = t.selectedIndex, n = t.options[s], o = (o = window.performance && window.performance.getEntriesByType("navigation")) && o.length ? "back_forward" !== o[0].type : 2 !== window.performance.navigation.type, i && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", e = !n || 0 === s && !1 === n.defaultSelected && void 0 === this.$element.data("selected")), !i && 0 === this.selectpicker.view.titleOption.index || t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), e && o ? t.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function () {
                    r.selectpicker.view.displayedValue !== t.value && r.render()
                })), a
            }, buildData: function () {
                var t = ':not([hidden]):not([data-hidden="true"])', o = [], e = 0, i = this.setPlaceholder() ? 1 : 0,
                    s = (this.options.hideDisabled && (t += ":not(:disabled)"), this.$element[0].querySelectorAll("select > *" + t));

                function r(t) {
                    var e = o[o.length - 1];
                    e && "divider" === e.type && (e.optID || t.optID) || ((t = t || {}).type = "divider", o.push(t))
                }

                function n(t, e) {
                    var i, s, n;
                    (e = e || {}).divider = "true" === t.getAttribute("data-divider"), e.divider ? r({optID: e.optID}) : (i = o.length, s = (s = t.style.cssText) ? E(s) : "", n = (t.className || "") + (e.optgroupClass || ""), e.optID && (n = "opt " + n), e.optionClass = n.trim(), e.inlineStyle = s, e.text = t.textContent, e.content = t.getAttribute("data-content"), e.tokens = t.getAttribute("data-tokens"), e.subtext = t.getAttribute("data-subtext"), e.icon = t.getAttribute("data-icon"), t.liIndex = i, e.display = e.content || e.text, e.type = "option", e.index = i, e.option = t, e.selected = !!t.selected, e.disabled = e.disabled || !!t.disabled, o.push(e))
                }

                for (var a = s.length, l = i; l < a; l++) {
                    var c = s[l];
                    if ("OPTGROUP" !== c.tagName) n(c, {}); else {
                        b = v = _ = m = f = g = u = p = d = h = p = c = void 0;
                        var c = l, h = (p = s)[c], d = !(c - 1 < i) && p[c - 1], p = p[c + 1],
                            u = h.querySelectorAll("option" + t);
                        if (u.length) {
                            var f, m, g = {
                                display: E(h.label),
                                subtext: h.getAttribute("data-subtext"),
                                icon: h.getAttribute("data-icon"),
                                type: "optgroup-label",
                                optgroupClass: " " + (h.className || "")
                            };
                            e++, d && r({optID: e}), g.optID = e, o.push(g);
                            for (var _ = 0, v = u.length; _ < v; _++) {
                                var b = u[_];
                                0 === _ && (m = (f = o.length - 1) + v), n(b, {
                                    headerIndex: f,
                                    lastIndex: m,
                                    optID: g.optID,
                                    optgroupClass: g.optgroupClass,
                                    disabled: h.disabled
                                })
                            }
                            p && r({optID: e})
                        }
                    }
                }
                this.selectpicker.main.data = this.selectpicker.current.data = o
            }, buildList: function () {
                var t = this, e = this.selectpicker.main.data, i = [], s = 0;
                !t.options.showTick && !t.multiple || N.checkMark.parentNode || (N.checkMark.className = this.options.iconBase + " " + t.options.tickIcon + " check-mark", N.a.appendChild(N.checkMark));
                for (var n = e.length, o = 0; o < n; o++) {
                    var r, a = e[o], l = (c = r = l = void 0, a), c = 0;
                    switch (l.type) {
                        case"divider":
                            r = D.li(!1, L.DIVIDER, l.optID ? l.optID + "div" : void 0);
                            break;
                        case"option":
                            (r = D.li(D.a(D.text.call(t, l), l.optionClass, l.inlineStyle), "", l.optID)).firstChild && (r.firstChild.id = t.selectId + "-" + l.index);
                            break;
                        case"optgroup-label":
                            r = D.li(D.label.call(t, l), "dropdown-header" + l.optgroupClass, l.optID)
                    }
                    l.element = r, i.push(r), l.display && (c += l.display.length), l.subtext && (c += l.subtext.length), l.icon && (c += 1), s < c && (s = c, t.selectpicker.view.widestOption = i[i.length - 1])
                }
                this.selectpicker.main.elements = this.selectpicker.current.elements = i
            }, findLis: function () {
                return this.$menuInner.find(".inner > li")
            }, render: function () {
                var t = this, e = this.$element[0], i = this.setPlaceholder() && 0 === e.selectedIndex,
                    s = w(e, this.options.hideDisabled), n = s.length, o = this.$button[0],
                    r = o.querySelector(".filter-option-inner-inner"),
                    a = document.createTextNode(this.options.multipleSeparator), l = N.fragment.cloneNode(!1), c = !1;
                if (o.classList.toggle("bs-placeholder", t.multiple ? !n : !x(e, s)), t.multiple || 1 !== s.length || (t.selectpicker.view.displayedValue = x(e, s)), "static" === this.options.selectedTextFormat) l = D.text.call(this, {text: this.options.title}, !0); else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < n && (1 < (e = this.options.selectedTextFormat.split(">")).length && n > e[1] || 1 === e.length && 2 <= n))) {
                    if (!i) {
                        for (var h = 0; h < n && h < 50; h++) {
                            var d = s[h], p = this.selectpicker.main.data[d.liIndex], u = {};
                            this.multiple && 0 < h && l.appendChild(a.cloneNode(!1)), d.title ? u.text = d.title : p && (p.content && t.options.showContent ? (u.content = p.content.toString(), c = !0) : (t.options.showIcon && (u.icon = p.icon), t.options.showSubtext && !t.multiple && p.subtext && (u.subtext = " " + p.subtext), u.text = d.textContent.trim())), l.appendChild(D.text.call(this, u, !0))
                        }
                        49 < n && l.appendChild(document.createTextNode("..."))
                    }
                } else var e = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])',
                    i = (this.options.hideDisabled && (e += ":not(:disabled)"), this.$element[0].querySelectorAll("select > option" + e + ", optgroup" + e + " option" + e).length),
                    e = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n, i) : this.options.countSelectedText,
                    l = D.text.call(this, {text: e.replace("{0}", n.toString()).replace("{1}", i.toString())}, !0);
                null == this.options.title && (this.options.title = this.$element.attr("title")), l.childNodes.length || (l = D.text.call(this, {text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText}, !0)), o.title = l.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && c && T([l], t.options.whiteList, t.options.sanitizeFn), r.innerHTML = "", r.appendChild(l), S.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon") && (e = o.querySelector(".filter-expand"), (i = r.cloneNode(!0)).className = "filter-expand", e ? o.replaceChild(i, e) : o.appendChild(i)), this.$element.trigger("rendered" + A)
            }, setStyle: function (t, e) {
                var i = this.$button[0], s = this.$newElement[0], n = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), S.major < 4 && (s.classList.add("bs3"), s.parentNode.classList && s.parentNode.classList.contains("input-group") && (s.previousElementSibling || s.nextElementSibling) && (s.previousElementSibling || s.nextElementSibling).classList.contains("input-group-addon") && s.classList.add("bs3-has-addon")), s = t ? t.trim() : n, "add" == e ? s && i.classList.add.apply(i.classList, s.split(" ")) : "remove" == e ? s && i.classList.remove.apply(i.classList, s.split(" ")) : (n && i.classList.remove.apply(i.classList, n.split(" ")), s && i.classList.add.apply(i.classList, s.split(" ")))
            }, liHeight: function (t) {
                if (t || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
                    var e, t = N.div.cloneNode(!1), i = N.div.cloneNode(!1), s = N.div.cloneNode(!1),
                        n = document.createElement("ul"), o = N.li.cloneNode(!1), r = N.li.cloneNode(!1),
                        a = N.a.cloneNode(!1), l = N.span.cloneNode(!1),
                        c = this.options.header && 0 < this.$menu.find("." + L.POPOVERHEADER).length ? this.$menu.find("." + L.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? N.div.cloneNode(!1) : null,
                        d = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        u = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, l.className = "text", a.className = "dropdown-item " + (u ? u.className : ""), t.className = this.$menu[0].parentNode.className + " " + L.SHOW, t.style.width = 0, "auto" === this.options.width && (i.style.minWidth = 0), i.className = L.MENU + " " + L.SHOW, s.className = "inner " + L.SHOW, n.className = L.MENU + " inner " + ("4" === S.major ? L.SHOW : ""), o.className = L.DIVIDER, r.className = "dropdown-header", l.appendChild(document.createTextNode("​")), this.selectpicker.current.data.length) for (var f = 0; f < this.selectpicker.current.data.length; f++) {
                        var m = this.selectpicker.current.data[f];
                        if ("option" === m.type) {
                            e = m.element;
                            break
                        }
                    } else e = N.li.cloneNode(!1), a.appendChild(l), e.appendChild(a);
                    r.appendChild(l.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(e), n.appendChild(o), n.appendChild(r), c && i.appendChild(c), h && (u = document.createElement("input"), h.className = "bs-searchbox", u.className = "form-control", h.appendChild(u), i.appendChild(h)), d && i.appendChild(d), s.appendChild(n), i.appendChild(s), p && i.appendChild(p), t.appendChild(i), document.body.appendChild(t);
                    var a = e.offsetHeight, l = r ? r.offsetHeight : 0, u = c ? c.offsetHeight : 0,
                        n = h ? h.offsetHeight : 0, r = d ? d.offsetHeight : 0, c = p ? p.offsetHeight : 0,
                        h = y(o).outerHeight(!0), d = !!window.getComputedStyle && window.getComputedStyle(i),
                        p = i.offsetWidth, o = d ? null : y(i), g = {
                            vert: _(d ? d.paddingTop : o.css("paddingTop")) + _(d ? d.paddingBottom : o.css("paddingBottom")) + _(d ? d.borderTopWidth : o.css("borderTopWidth")) + _(d ? d.borderBottomWidth : o.css("borderBottomWidth")),
                            horiz: _(d ? d.paddingLeft : o.css("paddingLeft")) + _(d ? d.paddingRight : o.css("paddingRight")) + _(d ? d.borderLeftWidth : o.css("borderLeftWidth")) + _(d ? d.borderRightWidth : o.css("borderRightWidth"))
                        }, d = {
                            vert: g.vert + _(d ? d.marginTop : o.css("marginTop")) + _(d ? d.marginBottom : o.css("marginBottom")) + 2,
                            horiz: g.horiz + _(d ? d.marginLeft : o.css("marginLeft")) + _(d ? d.marginRight : o.css("marginRight")) + 2
                        };
                    s.style.overflowY = "scroll", o = i.offsetWidth - p, document.body.removeChild(t), this.sizeInfo.liHeight = a, this.sizeInfo.dropdownHeaderHeight = l, this.sizeInfo.headerHeight = u, this.sizeInfo.searchHeight = n, this.sizeInfo.actionsHeight = r, this.sizeInfo.doneButtonHeight = c, this.sizeInfo.dividerHeight = h, this.sizeInfo.menuPadding = g, this.sizeInfo.menuExtras = d, this.sizeInfo.menuWidth = p, this.sizeInfo.menuInnerInnerWidth = p - g.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = o, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            }, getSelectPosition: function () {
                var t, e = y(window), i = this.$newElement.offset(), s = y(this.options.container),
                    s = (this.options.container && s.length && !s.is("body") ? ((t = s.offset()).top += parseInt(s.css("borderTopWidth")), t.left += parseInt(s.css("borderLeftWidth"))) : t = {
                        top: 0,
                        left: 0
                    }, this.options.windowPadding);
                this.sizeInfo.selectOffsetTop = i.top - t.top - e.scrollTop(), this.sizeInfo.selectOffsetBot = e.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - s[2], this.sizeInfo.selectOffsetLeft = i.left - t.left - e.scrollLeft(), this.sizeInfo.selectOffsetRight = e.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - s[1], this.sizeInfo.selectOffsetTop -= s[0], this.sizeInfo.selectOffsetLeft -= s[3]
            }, setMenuSize: function (t) {
                this.getSelectPosition();
                var e, i, s, n, o, r, a = this.sizeInfo.selectWidth, l = this.sizeInfo.liHeight,
                    c = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, d = this.sizeInfo.actionsHeight,
                    p = this.sizeInfo.doneButtonHeight, u = this.sizeInfo.dividerHeight, f = this.sizeInfo.menuPadding,
                    m = 0;
                if (this.options.dropupAuto && (r = l * this.selectpicker.current.elements.length + f.vert, r = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (r = this.selectpicker.dropup), this.$newElement.toggleClass(L.DROPUP, r), this.selectpicker.dropup = r), "auto" === this.options.size) r = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = r + c + h + d + p, o = Math.max(r - f.vert, 0), e = (n = i = this.$newElement.hasClass(L.DROPUP) ? this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert : i) - c - h - d - p - f.vert; else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && m++;
                    e = (i = l * this.options.size + m * u + f.vert) - f.vert, n = i + c + h + d + p, s = o = ""
                }
                this.$menu.css({
                    "max-height": n + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": e + "px",
                    "overflow-y": "auto",
                    "min-height": o + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(e, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(L.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            }, setSize: function (t) {
                var e, i;
                this.liHeight(t), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size && (e = this, i = y(window), this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () {
                    return e.setMenuSize()
                }), "auto" === this.options.size ? i.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize").on("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize", function () {
                    return e.setMenuSize()
                }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize")), this.createView(!1, !0, t)
            }, setWidth: function () {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function () {
                    i.$menu.css("min-width", "0"), i.$element.on("loaded" + A, function () {
                        i.liHeight(), i.setMenuSize();
                        var t = i.$newElement.clone().appendTo("body"),
                            e = t.css("width", "auto").children("button").outerWidth();
                        t.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, e), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            }, selectPosition: function () {
                this.$bsContainer = y('<div class="bs-container" />');

                function t(t) {
                    var e = {},
                        i = r.options.display || !!y.fn.dropdown.Constructor.Default && y.fn.dropdown.Constructor.Default.display;
                    r.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(L.DROPUP, t.hasClass(L.DROPUP)), s = t.offset(), a.is("body") ? n = {
                        top: 0,
                        left: 0
                    } : ((n = a.offset()).top += parseInt(a.css("borderTopWidth")) - a.scrollTop(), n.left += parseInt(a.css("borderLeftWidth")) - a.scrollLeft()), o = t.hasClass(L.DROPUP) ? 0 : t[0].offsetHeight, (S.major < 4 || "static" === i) && (e.top = s.top - n.top + o, e.left = s.left - n.left), e.width = t[0].offsetWidth, r.$bsContainer.css(e)
                }

                var s, n, o, r = this, a = y(this.options.container);
                this.$button.on("click.bs.dropdown.data-api", function () {
                    r.isDisabled() || (t(r.$newElement), r.$bsContainer.appendTo(r.options.container).toggleClass(L.SHOW, !r.$button.hasClass(L.SHOW)).append(r.$menu))
                }), y(window).off("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId).on("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId, function () {
                    r.$newElement.hasClass(L.SHOW) && t(r.$newElement)
                }), this.$element.on("hide" + A, function () {
                    r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach()
                })
            }, setOptionStatus: function (t) {
                var e = this;
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length) for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                    var s = e.selectpicker.current.data[i + e.selectpicker.view.position0], n = s.option;
                    n && (!0 !== t && e.setDisabled(s.index, s.disabled), e.setSelected(s.index, n.selected))
                }
            }, setSelected: function (t, e) {
                var i, s = this.selectpicker.main.elements[t], n = this.selectpicker.main.data[t],
                    o = void 0 !== this.activeIndex, r = this.activeIndex === t || e && !this.multiple && !o;
                n.selected = e, i = s.firstChild, e && (this.selectedIndex = t), s.classList.toggle("selected", e), r ? (this.focusItem(s, n), this.selectpicker.view.currentActive = s, this.activeIndex = t) : this.defocusItem(s), i && (i.classList.toggle("selected", e), e ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")), r || o || !e || void 0 === this.prevActiveIndex || (n = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(n))
            }, setDisabled: function (t, e) {
                var i = this.selectpicker.main.elements[t];
                this.selectpicker.main.data[t].disabled = e, t = i.firstChild, i.classList.toggle(L.DISABLED, e), t && ("4" === S.major && t.classList.toggle(L.DISABLED, e), e ? (t.setAttribute("aria-disabled", e), t.setAttribute("tabindex", -1)) : (t.removeAttribute("aria-disabled"), t.setAttribute("tabindex", 0)))
            }, isDisabled: function () {
                return this.$element[0].disabled
            }, checkDisabled: function () {
                this.isDisabled() ? (this.$newElement[0].classList.add(L.DISABLED), this.$button.addClass(L.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(L.DISABLED) && (this.$newElement[0].classList.remove(L.DISABLED), this.$button.removeClass(L.DISABLED).attr("aria-disabled", !1))
            }, clickListener: function () {
                var b = this, e = y(document);

                function t() {
                    (b.options.liveSearch ? b.$searchbox : b.$menuInner).trigger("focus")
                }

                function i() {
                    b.dropdown && b.dropdown._popper && b.dropdown._popper.state.isCreated ? t() : requestAnimationFrame(i)
                }

                e.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
                    /(32)/.test(t.keyCode.toString(10)) && e.data("spaceSelect") && (t.preventDefault(), e.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function () {
                    3 < S.major && !b.dropdown && (b.dropdown = b.$button.data("bs.dropdown"), b.dropdown._menu = b.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function () {
                    b.$newElement.hasClass(L.SHOW) || b.setSize()
                }), this.$element.on("shown" + A, function () {
                    b.$menuInner[0].scrollTop !== b.selectpicker.view.scrollTop && (b.$menuInner[0].scrollTop = b.selectpicker.view.scrollTop), 3 < S.major ? requestAnimationFrame(i) : t()
                }), this.$menuInner.on("mouseenter", "li a", function (t) {
                    var e = this.parentElement, i = b.isVirtual() ? b.selectpicker.view.position0 : 0,
                        s = Array.prototype.indexOf.call(e.parentElement.children, e),
                        s = b.selectpicker.current.data[s + i];
                    b.focusItem(e, s, !0)
                }), this.$menuInner.on("click", "li a", function (t, e) {
                    var i = y(this), s = b.$element[0], n = b.isVirtual() ? b.selectpicker.view.position0 : 0,
                        n = b.selectpicker.current.data[i.parent().index() + n], o = n.index, r = x(s),
                        a = s.selectedIndex, l = s.options[a], c = !0;
                    if (b.multiple && 1 !== b.options.maxOptions && t.stopPropagation(), t.preventDefault(), !b.isDisabled() && !i.parent().hasClass(L.DISABLED)) {
                        var t = n.option, i = y(t), n = t.selected, h = i.parent("optgroup"), d = h.find("option"),
                            p = b.options.maxOptions, u = h.data("maxOptions") || !1;
                        if ((e = o === b.activeIndex ? !0 : e) || (b.prevActiveIndex = b.activeIndex, b.activeIndex = void 0), b.multiple) {
                            if (t.selected = !n, b.setSelected(o, !n), b.focusedParent.focus(), !1 !== p || !1 !== u) {
                                e = p < w(s).length, n = u < h.find("option:selected").length;
                                if (p && e || u && n) if (p && 1 == p) s.selectedIndex = -1, t.selected = !0, b.setOptionStatus(!0); else if (u && 1 == u) {
                                    for (var f = 0; f < d.length; f++) {
                                        var m = d[f];
                                        m.selected = !1, b.setSelected(m.liIndex, !1)
                                    }
                                    t.selected = !0, b.setSelected(o, !0)
                                } else {
                                    var h = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                                        h = "function" == typeof h ? h(p, u) : h, g = h[0].replace("{n}", p),
                                        _ = h[1].replace("{n}", u), v = y('<div class="notify"></div>');
                                    h[2] && (g = g.replace("{var}", h[2][1 < p ? 0 : 1]), _ = _.replace("{var}", h[2][1 < u ? 0 : 1])), t.selected = !1, b.$menu.append(v), p && e && (v.append(y("<div>" + g + "</div>")), c = !1, b.$element.trigger("maxReached" + A)), u && n && (v.append(y("<div>" + _ + "</div>")), c = !1, b.$element.trigger("maxReachedGrp" + A)), setTimeout(function () {
                                        b.setSelected(o, !1)
                                    }, 10), v[0].classList.add("fadeOut"), setTimeout(function () {
                                        v.remove()
                                    }, 1050)
                                }
                            }
                        } else l && (l.selected = !1), t.selected = !0, b.setSelected(o, !0);
                        !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.trigger("focus") : b.options.liveSearch && b.$searchbox.trigger("focus"), !c || !b.multiple && a === s.selectedIndex || (k = [t.index, i.prop("selected"), r], b.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li." + L.DISABLED + " a, ." + L.POPOVERHEADER + ", ." + L.POPOVERHEADER + " :not(.close)", function (t) {
                    t.currentTarget == this && (t.preventDefault(), t.stopPropagation(), (b.options.liveSearch && !y(t.target).hasClass("close") ? b.$searchbox : b.$button).trigger("focus"))
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
                    t.preventDefault(), t.stopPropagation(), (b.options.liveSearch ? b.$searchbox : b.$button).trigger("focus")
                }), this.$menu.on("click", "." + L.POPOVERHEADER + " .close", function () {
                    b.$button.trigger("click")
                }), this.$searchbox.on("click", function (t) {
                    t.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (t) {
                    (b.options.liveSearch ? b.$searchbox : b.$button).trigger("focus"), t.preventDefault(), t.stopPropagation(), y(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }), this.$button.on("focus" + A, function (t) {
                    var e = b.$element[0].getAttribute("tabindex");
                    void 0 !== e && t.originalEvent && t.originalEvent.isTrusted && (this.setAttribute("tabindex", e), b.$element[0].setAttribute("tabindex", -1), b.selectpicker.view.tabindex = e)
                }).on("blur" + A, function (t) {
                    void 0 !== b.selectpicker.view.tabindex && t.originalEvent && t.originalEvent.isTrusted && (b.$element[0].setAttribute("tabindex", b.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), b.selectpicker.view.tabindex = void 0)
                }), this.$element.on("change" + A, function () {
                    b.render(), b.$element.trigger("changed" + A, k), k = null
                }).on("focus" + A, function () {
                    b.options.mobile || b.$button[0].focus()
                })
            }, liveSearchListener: function () {
                var p = this;
                this.$button.on("click.bs.dropdown.data-api", function () {
                    p.$searchbox.val() && (p.$searchbox.val(""), p.selectpicker.search.previousValue = void 0)
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (t) {
                    t.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    var t = p.$searchbox[0].value;
                    if (p.selectpicker.search.elements = [], p.selectpicker.search.data = [], t) {
                        var e = [], i = t.toUpperCase(), s = {}, n = [], o = p._searchStyle(),
                            r = p.options.liveSearchNormalize;
                        r && (i = u(i));
                        for (var a = 0; a < p.selectpicker.main.data.length; a++) {
                            var l = p.selectpicker.main.data[a];
                            s[a] || (s[a] = v(l, i, o, r)), s[a] && void 0 !== l.headerIndex && -1 === n.indexOf(l.headerIndex) && (0 < l.headerIndex && (s[l.headerIndex - 1] = !0, n.push(l.headerIndex - 1)), s[l.headerIndex] = !0, n.push(l.headerIndex), s[l.lastIndex + 1] = !0), s[a] && "optgroup-label" !== l.type && n.push(a)
                        }
                        for (var a = 0, c = n.length; a < c; a++) {
                            var h = n[a], d = n[a - 1], l = p.selectpicker.main.data[h],
                                d = p.selectpicker.main.data[d];
                            ("divider" !== l.type || "divider" === l.type && d && "divider" !== d.type && c - 1 !== a) && (p.selectpicker.search.data.push(l), e.push(p.selectpicker.main.elements[h]))
                        }
                        p.activeIndex = void 0, p.noScroll = !0, p.$menuInner.scrollTop(0), p.selectpicker.search.elements = e, p.createView(!0), !function (t, e) {
                            t.length || (N.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + E(e) + '"'), this.$menuInner[0].firstChild.appendChild(N.noResults))
                        }.call(p, e, t)
                    } else p.selectpicker.search.previousValue && (p.$menuInner.scrollTop(0), p.createView(!1));
                    p.selectpicker.search.previousValue = t
                })
            }, _searchStyle: function () {
                return this.options.liveSearchStyle || "contains"
            }, val: function (t) {
                var e, i = this.$element[0];
                return void 0 !== t ? (e = x(i), k = [null, null, e], this.$element.val(t).trigger("changed" + A, k), this.$newElement.hasClass(L.SHOW) && (this.multiple ? this.setOptionStatus(!0) : "number" == typeof (e = (i.options[i.selectedIndex] || {}).liIndex) && (this.setSelected(this.selectedIndex, !1), this.setSelected(e, !0))), this.render(), k = null, this.$element) : this.$element.val()
            }, changeAll: function (t) {
                if (this.multiple) {
                    void 0 === t && (t = !0);
                    var e = this.$element[0], i = 0, s = 0, n = x(e);
                    e.classList.add("bs-select-hidden");
                    for (var o = 0, r = this.selectpicker.current.data, a = r.length; o < a; o++) {
                        var l = r[o], c = l.option;
                        c && !l.disabled && "divider" !== l.type && (l.selected && i++, !0 === (c.selected = t) && s++)
                    }
                    e.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), k = [null, null, n], this.$element.triggerNative("change"))
                }
            }, selectAll: function () {
                return this.changeAll(!0)
            }, deselectAll: function () {
                return this.changeAll(!1)
            }, toggle: function (t) {
                (t = t || window.event) && t.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api")
            }, keydown: function (t) {
                var e, i, s, n, o = y(this), r = o.hasClass("dropdown-toggle"),
                    a = (r ? o.closest(".dropdown") : o.closest(X.MENU)).data("this"), l = a.findLis(), c = !1,
                    r = t.which === I && !r && !a.options.selectOnTab, h = Y.test(t.which) || r,
                    d = a.$menuInner[0].scrollTop, p = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
                if (!(112 <= t.which && t.which <= 123)) if (!(e = a.$newElement.hasClass(L.SHOW)) && (h || 48 <= t.which && t.which <= 57 || 96 <= t.which && t.which <= 105 || 65 <= t.which && t.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus"); else {
                    if (t.which === b && e && (t.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), h) {
                        if (!l.length) return;
                        -1 !== (h = (i = a.selectpicker.main.elements[a.activeIndex]) ? Array.prototype.indexOf.call(i.parentElement.children, i) : -1) && a.defocusItem(i), t.which === O ? (-1 !== h && h--, h + p < 0 && (h += l.length), a.selectpicker.view.canHighlight[h + p] || -1 === (h = a.selectpicker.view.canHighlight.slice(0, h + p).lastIndexOf(!0) - p) && (h = l.length - 1)) : t.which !== C && !r || (++h + p >= a.selectpicker.view.canHighlight.length && (h = a.selectpicker.view.firstHighlightIndex), a.selectpicker.view.canHighlight[h + p] || (h = h + 1 + a.selectpicker.view.canHighlight.slice(h + p + 1).indexOf(!0))), t.preventDefault();
                        var u = p + h;
                        t.which === O ? 0 === p && h === l.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, u = a.selectpicker.current.elements.length - 1) : c = (n = (s = a.selectpicker.current.data[u]).position - s.height) < d : t.which !== C && !r || (h === a.selectpicker.view.firstHighlightIndex ? (a.$menuInner[0].scrollTop = 0, u = a.selectpicker.view.firstHighlightIndex) : c = d < (n = (s = a.selectpicker.current.data[u]).position - a.sizeInfo.menuInnerHeight)), i = a.selectpicker.current.elements[u], a.activeIndex = a.selectpicker.current.data[u].index, a.focusItem(i), a.selectpicker.view.currentActive = i, c && (a.$menuInner[0].scrollTop = n), (a.options.liveSearch ? a.$searchbox : o).trigger("focus")
                    } else if (!o.is("input") && !Q.test(t.which) || t.which === $ && a.selectpicker.keydown.keyHistory) {
                        var f, m = [];
                        t.preventDefault(), a.selectpicker.keydown.keyHistory += K[t.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), f = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(f) && (f = f.charAt(0));
                        for (var g = 0; g < a.selectpicker.current.data.length; g++) {
                            var _ = a.selectpicker.current.data[g];
                            v(_, f, "startsWith", !0) && a.selectpicker.view.canHighlight[g] && m.push(_.index)
                        }
                        m.length && (p = 0, l.removeClass("active").find("a").removeClass("active"), 1 === f.length && (-1 === (p = m.indexOf(a.activeIndex)) || p === m.length - 1 ? p = 0 : p++), r = m[p], c = 0 < d - (s = a.selectpicker.main.data[r]).position ? (n = s.position - s.height, !0) : (n = s.position - a.sizeInfo.menuInnerHeight, s.position > d + a.sizeInfo.menuInnerHeight), i = a.selectpicker.main.elements[r], a.activeIndex = m[p], a.focusItem(i), i && i.firstChild.focus(), c && (a.$menuInner[0].scrollTop = n), o.trigger("focus"))
                    }
                    e && (t.which === $ && !a.selectpicker.keydown.keyHistory || t.which === G || t.which === I && a.options.selectOnTab) && (t.which !== $ && t.preventDefault(), a.options.liveSearch && t.which === $ || (a.$menuInner.find(".active a").trigger("click", !0), o.trigger("focus"), a.options.liveSearch || (t.preventDefault(), y(document).data("spaceSelect", !0))))
                }
            }, mobile: function () {
                this.options.mobile = !0, this.$element[0].classList.add("mobile-device")
            }, refresh: function () {
                var t = y.extend({}, this.options, this.$element.data());
                this.options = t, this.checkDisabled(), this.buildData(), this.setStyle(), this.render(), this.buildList(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + A)
            }, hide: function () {
                this.$newElement.hide()
            }, show: function () {
                this.$newElement.show()
            }, remove: function () {
                this.$newElement.remove(), this.$element.remove()
            }, destroy: function () {
                this.$newElement.before(this.$element).remove(), (this.$bsContainer || this.$menu).remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(A).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), y(window).off(A + "." + this.selectId)
            }
        };
        var Z = y.fn.selectpicker;

        function tt() {
            if (y.fn.dropdown) return (y.fn.dropdown.Constructor._dataApiKeydownHandler || y.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments)
        }

        y.fn.selectpicker = J, y.fn.selectpicker.Constructor = M, y.fn.selectpicker.noConflict = function () {
            return y.fn.selectpicker = Z, this
        }, y(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', tt).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", tt).on("keydown" + A, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', M.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (t) {
            t.stopPropagation()
        }), y(window).on("load" + A + ".data-api", function () {
            y(".selectpicker").each(function () {
                var t = y(this);
                J.call(t, t.data())
            })
        })
    }(t)
}), function (p) {
    "use strict";
    var n = {
        tagClass: function (t) {
            return "btn btn-primary"
        },
        itemValue: function (t) {
            return t && t.toString()
        },
        itemText: function (t) {
            return this.itemValue(t)
        },
        itemTitle: function (t) {
            return null
        },
        freeInput: !0,
        addOnBlur: !0,
        maxTags: void 0,
        maxChars: void 0,
        confirmKeys: [13, 44],
        delimiter: ",",
        delimiterRegex: null,
        cancelConfirmKeysOnEmpty: !0,
        onTagExists: function (t, e) {
            e.hide().fadeIn()
        },
        trimValue: !1,
        allowDuplicates: !1
    };

    function r(t, e) {
        this.itemsArray = [], this.$element = p(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = e && e.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = p('<div class="bootstrap-tagsinput"></div>'), this.$input = p('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.before(this.$container), this.build(e)
    }

    function o(t, e) {
        var i;
        "function" != typeof t[e] && (i = t[e], t[e] = function (t) {
            return t[i]
        })
    }

    function l(t, e) {
        var i;
        "function" != typeof t[e] && (i = t[e], t[e] = function () {
            return i
        })
    }

    r.prototype = {
        constructor: r, add: function (t, e, i) {
            var s = this;
            if (!(s.options.maxTags && s.itemsArray.length >= s.options.maxTags) && (!1 === t || t)) {
                if ("object" == typeof (t = "string" == typeof t && s.options.trimValue ? p.trim(t) : t) && !s.objectItems) throw"Can't add objects when itemValue option is not set";
                if (!t.toString().match(/^\s*$/)) {
                    if (s.isSelect && !s.multiple && 0 < s.itemsArray.length && s.remove(s.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
                        var n = s.options.delimiterRegex || s.options.delimiter, o = t.split(n);
                        if (1 < o.length) {
                            for (var r = 0; r < o.length; r++) this.add(o[r], !0);
                            return void (e || s.pushVal())
                        }
                    }
                    var a, l = s.options.itemValue(t), n = s.options.itemText(t), c = s.options.tagClass(t),
                        h = s.options.itemTitle(t), d = p.grep(s.itemsArray, function (t) {
                            return s.options.itemValue(t) === l
                        })[0];
                    d && !s.options.allowDuplicates ? s.options.onTagExists && (a = p(".tag", s.$container).filter(function () {
                        return p(this).data("item") === d
                    }), s.options.onTagExists(t, a)) : s.items().toString().length + t.length + 1 > s.options.maxInputLength || (a = p.Event("beforeItemAdd", {
                        item: t,
                        cancel: !1,
                        options: i
                    }), s.$element.trigger(a), a.cancel || (s.itemsArray.push(t), (a = p('<div class="btn-group tag tag-xs mb-2 mr-1"><span class="btn-sm icon-left no-hover ' + u(c) + (null !== h ? '" title="' + h : "") + '">' + u(n) + '</span><button type="button" data-role="remove" class="btn btn-primary btn-sm btn-icon"><i class="mdi mdi-close"></i></button></div>')).data("item", t), s.findInputWrapper().before(a), a.after(" "), s.isSelect && !p('option[value="' + encodeURIComponent(l) + '"]', s.$element)[0] && ((c = p("<option selected>" + u(n) + "</option>")).data("item", t), c.attr("value", l), s.$element.append(c)), e || s.pushVal(), s.options.maxTags !== s.itemsArray.length && s.items().toString().length !== s.options.maxInputLength || s.$container.addClass("bootstrap-tagsinput-max"), s.$element.trigger(p.Event("itemAdded", {
                        item: t,
                        options: i
                    }))))
                }
            }
        }, remove: function (e, t, i) {
            var s = this;
            if (e = s.objectItems ? (e = "object" == typeof e ? p.grep(s.itemsArray, function (t) {
                return s.options.itemValue(t) == s.options.itemValue(e)
            }) : p.grep(s.itemsArray, function (t) {
                return s.options.itemValue(t) == e
            }))[e.length - 1] : e) {
                var n = p.Event("beforeItemRemove", {item: e, cancel: !1, options: i});
                if (s.$element.trigger(n), n.cancel) return;
                p(".tag", s.$container).filter(function () {
                    return p(this).data("item") === e
                }).remove(), p("option", s.$element).filter(function () {
                    return p(this).data("item") === e
                }).remove(), -1 !== p.inArray(e, s.itemsArray) && s.itemsArray.splice(p.inArray(e, s.itemsArray), 1)
            }
            t || s.pushVal(), s.options.maxTags > s.itemsArray.length && s.$container.removeClass("bootstrap-tagsinput-max"), s.$element.trigger(p.Event("itemRemoved", {
                item: e,
                options: i
            }))
        }, removeAll: function () {
            var t = this;
            for (p(".tag", t.$container).remove(), p("option", t.$element).remove(); 0 < t.itemsArray.length;) t.itemsArray.pop();
            t.pushVal()
        }, refresh: function () {
            var o = this;
            p(".tag", o.$container).each(function () {
                var t = p(this), e = t.data("item"), i = o.options.itemValue(e), s = o.options.itemText(e),
                    n = o.options.tagClass(e);
                t.attr("class", null), t.addClass("tag " + u(n)), t.contents().filter(function () {
                    return 3 == this.nodeType
                })[0].nodeValue = u(s), o.isSelect && p("option", o.$element).filter(function () {
                    return p(this).data("item") === e
                }).attr("value", i)
            })
        }, items: function () {
            return this.itemsArray
        }, pushVal: function () {
            var e = this, t = p.map(e.items(), function (t) {
                return e.options.itemValue(t).toString()
            });
            e.$element.val(t, !0).trigger("change")
        }, build: function (t) {
            var i, e, s, a = this;
            a.options = p.extend({}, n, t), a.objectItems && (a.options.freeInput = !1), o(a.options, "itemValue"), o(a.options, "itemText"), l(a.options, "tagClass"), a.options.typeahead && (l(i = a.options.typeahead || {}, "source"), a.$input.typeahead(p.extend({}, i, {
                source: function (t, n) {
                    function e(t) {
                        for (var e = [], i = 0; i < t.length; i++) {
                            var s = a.options.itemText(t[i]);
                            o[s] = t[i], e.push(s)
                        }
                        n(e)
                    }

                    this.map = {};
                    var o = this.map, t = i.source(t);
                    p.isFunction(t.success) ? t.success(e) : (p.isFunction(t.then) ? t : p.when(t)).then(e)
                }, updater: function (t) {
                    return a.add(this.map[t]), this.map[t]
                }, matcher: function (t) {
                    return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase())
                }, sorter: function (t) {
                    return t.sort()
                }, highlighter: function (t) {
                    var e = new RegExp("(" + this.query + ")", "gi");
                    return t.replace(e, "<strong>$1</strong>")
                }
            }))), a.options.typeaheadjs && (t = null, s = {}, e = a.options.typeaheadjs, s = p.isArray(e) ? (t = e[0], e[1]) : e, a.$input.typeahead(t, s).on("typeahead:selected", p.proxy(function (t, e) {
                s.valueKey ? a.add(e[s.valueKey]) : a.add(e), a.$input.typeahead("val", "")
            }, a))), a.$container.on("click", p.proxy(function (t) {
                a.$element.attr("disabled") || a.$input.removeAttr("disabled"), a.$input.focus()
            }, a)), a.options.addOnBlur && a.options.freeInput && a.$input.on("focusout", p.proxy(function (t) {
                0 === p(".typeahead, .twitter-typeahead", a.$container).length && (a.add(a.$input.val()), a.$input.val(""))
            }, a)), a.$container.on("keydown", "input", p.proxy(function (t) {
                var e = p(t.target), i = a.findInputWrapper();
                if (a.$element.attr("disabled")) a.$input.attr("disabled", "disabled"); else {
                    switch (t.which) {
                        case 8:
                            0 !== c(e[0]) || (s = i.prev()).length && a.remove(s.data("item"));
                            break;
                        case 46:
                            0 !== c(e[0]) || (s = i.next()).length && a.remove(s.data("item"));
                            break;
                        case 37:
                            var s = i.prev();
                            0 === e.val().length && s[0] && (s.before(i), e.focus());
                            break;
                        case 39:
                            s = i.next();
                            0 === e.val().length && s[0] && (s.after(i), e.focus())
                    }
                    t = e.val().length;
                    Math.ceil(t / 5);
                    e.attr("size", Math.max(this.inputSize, e.val().length))
                }
            }, a)), a.$container.on("keypress", "input", p.proxy(function (t) {
                var e, i, n, o, s, r = p(t.target);
                a.$element.attr("disabled") ? a.$input.attr("disabled", "disabled") : (e = r.val(), i = a.options.maxChars && e.length >= a.options.maxChars, a.options.freeInput && (n = t, s = a.options.confirmKeys, o = !1, p.each(s, function (t, e) {
                    if ("number" == typeof e && n.which === e) return !(o = !0);
                    if (n.which === e.which) {
                        var i = !e.hasOwnProperty("altKey") || n.altKey === e.altKey,
                            s = !e.hasOwnProperty("shiftKey") || n.shiftKey === e.shiftKey,
                            e = !e.hasOwnProperty("ctrlKey") || n.ctrlKey === e.ctrlKey;
                        if (i && s && e) return !(o = !0)
                    }
                }), o || i) && (0 !== e.length && (a.add(i ? e.substr(0, a.options.maxChars) : e), r.val("")), !1 === a.options.cancelConfirmKeysOnEmpty && t.preventDefault()), s = r.val().length, Math.ceil(s / 5), r.attr("size", Math.max(this.inputSize, r.val().length)))
            }, a)), a.$container.on("click", "[data-role=remove]", p.proxy(function (t) {
                a.$element.attr("disabled") || a.remove(p(t.target).closest(".tag").data("item"))
            }, a)), a.options.itemValue === n.itemValue && ("INPUT" === a.$element[0].tagName ? a.add(a.$element.val()) : p("option", a.$element).each(function () {
                a.add(p(this).attr("value"), !0)
            }))
        }, destroy: function () {
            var t = this;
            t.$container.off("keypress", "input"), t.$container.off("click", "[role=remove]"), t.$container.remove(), t.$element.removeData("tagsinput"), t.$element.show()
        }, focus: function () {
            this.$input.focus()
        }, input: function () {
            return this.$input
        }, findInputWrapper: function () {
            for (var t = this.$input[0], e = this.$container[0]; t && t.parentNode !== e;) t = t.parentNode;
            return p(t)
        }
    }, p.fn.tagsinput = function (i, s, n) {
        var o = [];
        return this.each(function () {
            var t, e = p(this).data("tagsinput");
            e ? i || s ? void 0 !== e[i] && void 0 !== (t = 3 === e[i].length && void 0 !== n ? e[i](s, null, n) : e[i](s)) && o.push(t) : o.push(e) : (e = new r(this, i), p(this).data("tagsinput", e), o.push(e), "SELECT" === this.tagName && p("option", p(this)).attr("selected", "selected"), p(this).val(p(this).val()))
        }), "string" != typeof i || 1 < o.length ? o : o[0]
    }, p.fn.tagsinput.Constructor = r;
    var e = p("<div />");

    function u(t) {
        return t ? e.text(t).html() : ""
    }

    function c(t) {
        var e, i = 0;
        return document.selection ? (t.focus(), (e = document.selection.createRange()).moveStart("character", -t.value.length), i = e.text.length) : !t.selectionStart && "0" != t.selectionStart || (i = t.selectionStart), i
    }
}(window.jQuery), function (e) {
    "undefined" != typeof jQuery && jQuery || "function" != typeof define || !define.amd ? "undefined" != typeof jQuery && jQuery || "object" != typeof exports ? e(jQuery, document, window, navigator) : e(require("jquery"), document, window, navigator) : define(["jquery"], function (t) {
        return e(t, document, window, navigator)
    })
}(function (r, a, l, t, c) {
    "use strict";

    function e(t, e, i) {
        this.VERSION = "2.3.1", this.input = t, this.plugin_count = i, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, e = e || {}, this.$cache = {
            win: r(l),
            body: r(a.body),
            input: r(t),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var s, n, t = (i = this.$cache.input).prop("value"), o = {
            skin: "flat",
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        };
        for (n in "INPUT" !== i[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", i[0]), (s = {
            skin: i.data("skin"),
            type: i.data("type"),
            min: i.data("min"),
            max: i.data("max"),
            from: i.data("from"),
            to: i.data("to"),
            step: i.data("step"),
            min_interval: i.data("minInterval"),
            max_interval: i.data("maxInterval"),
            drag_interval: i.data("dragInterval"),
            values: i.data("values"),
            from_fixed: i.data("fromFixed"),
            from_min: i.data("fromMin"),
            from_max: i.data("fromMax"),
            from_shadow: i.data("fromShadow"),
            to_fixed: i.data("toFixed"),
            to_min: i.data("toMin"),
            to_max: i.data("toMax"),
            to_shadow: i.data("toShadow"),
            prettify_enabled: i.data("prettifyEnabled"),
            prettify_separator: i.data("prettifySeparator"),
            force_edges: i.data("forceEdges"),
            keyboard: i.data("keyboard"),
            grid: i.data("grid"),
            grid_margin: i.data("gridMargin"),
            grid_num: i.data("gridNum"),
            grid_snap: i.data("gridSnap"),
            hide_min_max: i.data("hideMinMax"),
            hide_from_to: i.data("hideFromTo"),
            prefix: i.data("prefix"),
            postfix: i.data("postfix"),
            max_postfix: i.data("maxPostfix"),
            decorate_both: i.data("decorateBoth"),
            values_separator: i.data("valuesSeparator"),
            input_values_separator: i.data("inputValuesSeparator"),
            disable: i.data("disable"),
            block: i.data("block"),
            extra_classes: i.data("extraClasses")
        }).values = s.values && s.values.split(","), s) !s.hasOwnProperty(n) || s[n] !== c && "" !== s[n] || delete s[n];
        t !== c && "" !== t && ((t = t.split(s.input_values_separator || e.input_values_separator || ";"))[0] && t[0] == +t[0] && (t[0] = +t[0]), t[1] && t[1] == +t[1] && (t[1] = +t[1]), e && e.values && e.values.length ? (o.from = t[0] && e.values.indexOf(t[0]), o.to = t[1] && e.values.indexOf(t[1])) : (o.from = t[0] && +t[0], o.to = t[1] && +t[1])), r.extend(o, e), r.extend(o, s), this.options = o, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    }

    var i, s = 0,
        n = (t = t.userAgent, i = /msie\s\d+/i, 0 < t.search(i) && i.exec(t).toString().split(" ")[1] < 9 && (r("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (i) {
        var s = this, n = [].slice;
        if ("function" != typeof s) throw new TypeError;
        var o = n.call(arguments, 1), r = function () {
            var t, e;
            return this instanceof r ? ((t = function () {
            }).prototype = s.prototype, t = new t, e = s.apply(t, o.concat(n.call(arguments))), Object(e) === e ? e : t) : s.apply(i, o.concat(n.call(arguments)))
        };
        return r
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var s = Object(this), n = s.length >>> 0;
        if (0 == n) return -1;
        e = +e || 0;
        if (n <= (e = Math.abs(e) === 1 / 0 ? 0 : e)) return -1;
        for (i = Math.max(0 <= e ? e : n - Math.abs(e), 0); i < n;) {
            if (i in s && s[i] === t) return i;
            i++
        }
        return -1
    });
    e.prototype = {
        init: function (t) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
            this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var t = this.options.min, e = this.options.max, i = this.options.from, s = this.options.to;
            t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (t) {
            switch (t) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), n && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), n && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (t) {
            var e, i;
            this.target || (i = (e = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += e.width() / 2 - 1, this.pointerClick("single", {
                preventDefault: function () {
                }, pageX: i
            }))
        }, pointerMove: function (t) {
            this.dragging && (t = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX, this.coords.x_pointer = t - this.coords.x_gap, this.calc())
        }, pointerUp: function (t) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, n && r("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (r.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && ("both" === t && this.setTempMinInterval(), t = t || this.target || "from", this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = i - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), n && r("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (t, e) {
            if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                switch (e.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        e.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        e.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (t) {
            var e = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100, i = this.options.step / i;
            t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options) {
                if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
                var t, e;
                this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (t = this._prettify(this.options.min), e = this._prettify(this.options.max), this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var t = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (t) {
            if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                this.calcPointerPercent();
                var e = this.getHandleX();
                switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                    case"base":
                        var i = (this.options.max - this.options.min) / 100,
                            s = (this.result.from - this.options.min) / i, i = (this.result.to - this.options.min) / i;
                        this.coords.p_single_real = this.toFixed(s), this.coords.p_from_real = this.toFixed(s), this.coords.p_to_real = this.toFixed(i), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        var s = this.convertToRealPercent(e), i = this.result.from_percent,
                            i = this.result.to_percent - i, n = i / 2, o = s - n, s = s + n;
                        100 < (s = o < 0 ? (o = 0) + i : s) && (o = (s = 100) - i), this.coords.p_from_real = this.calcWithStep(o), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(s), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (t) {
            return t / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (t) {
            return t / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return e < 0 ? e = 0 : t < e && (e = t), e
        }, calcHandlePercent: function () {
            "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (t) {
            return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
        }, drawLabels: function () {
            var t, e, i, s, n;
            this.options && (i = this.options.values.length, t = this.options.p_values, this.options.hide_from_to || ("single" === this.options.type ? (s = i ? this.decorate(t[this.result.from]) : (e = this._prettify(this.result.from), this.decorate(e, this.result.from)), this.$cache.single.html(s), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible") : (t = i ? (s = this.options.decorate_both ? (s = this.decorate(t[this.result.from]), (s += this.options.values_separator) + this.decorate(t[this.result.to])) : this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), n = this.decorate(t[this.result.from]), this.decorate(t[this.result.to])) : (e = this._prettify(this.result.from), i = this._prettify(this.result.to), s = this.options.decorate_both ? (s = this.decorate(e, this.result.from), (s += this.options.values_separator) + this.decorate(i, this.result.to)) : this.decorate(e + this.options.values_separator + i, this.result.to), n = this.decorate(e, this.result.from), this.decorate(i, this.result.to)), this.$cache.single.html(s), this.$cache.from.html(n), this.$cache.to.html(t), this.calcLabels(), e = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake, s = this.labels.p_to_left + this.labels.p_to_fake, n = Math.max(i, s), this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", s) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(i, s))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), e < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", n > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible")))
        }, drawShadow: function () {
            var t, e, i = this.options, s = this.$cache, n = "number" == typeof i.from_min && !isNaN(i.from_min),
                o = "number" == typeof i.from_max && !isNaN(i.from_max),
                r = "number" == typeof i.to_min && !isNaN(i.to_min),
                a = "number" == typeof i.to_max && !isNaN(i.to_max);
            "single" === i.type ? i.from_shadow && (n || o) ? (t = this.convertToPercent(n ? i.from_min : i.min), e = this.convertToPercent(o ? i.from_max : i.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_single[0].style.display = "block", s.shad_single[0].style.left = t + "%", s.shad_single[0].style.width = e + "%") : s.shad_single[0].style.display = "none" : (i.from_shadow && (n || o) ? (t = this.convertToPercent(n ? i.from_min : i.min), e = this.convertToPercent(o ? i.from_max : i.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_from[0].style.display = "block", s.shad_from[0].style.left = t + "%", s.shad_from[0].style.width = e + "%") : s.shad_from[0].style.display = "none", i.to_shadow && (r || a) ? (n = this.convertToPercent(r ? i.to_min : i.min), o = this.convertToPercent(a ? i.to_max : i.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), o = this.toFixed(o - this.coords.p_handle / 100 * o), n += this.coords.p_handle / 2, s.shad_to[0].style.display = "block", s.shad_to[0].style.left = n + "%", s.shad_to[0].style.width = o + "%") : s.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (t, e) {
            var i = this.options.max - this.options.min;
            return i ? (e = e ? t : t - this.options.min, this.toFixed(e / (i / 100))) : (this.no_diapason = !0, 0)
        }, convertToValue: function (t) {
            var e, i = this.options.min, s = this.options.max, n = i.toString().split(".")[1],
                o = s.toString().split(".")[1], r = 0, a = 0;
            if (0 === t) return this.options.min;
            if (100 === t) return this.options.max;
            n && (r = l = n.length), o && (r = e = o.length), l && e && (r = e <= l ? l : e), i < 0 && (i = +(i + (a = Math.abs(i))).toFixed(r), s = +(s + a).toFixed(r));
            var l, n = (s - i) / 100 * t + i, o = this.options.step.toString().split(".")[1],
                n = o ? +n.toFixed(o.length) : +(n = (n /= this.options.step) * this.options.step).toFixed(0);
            return a && (n -= a), (l = o ? +n.toFixed(o.length) : this.toFixed(n)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l
        }, calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return 100 < e && (e = 100), this.toFixed(e = 100 === t ? 100 : e)
        }, checkMinInterval: function (t, e, i) {
            var s, n = this.options;
            return n.min_interval ? (s = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - s < n.min_interval && (s = e - n.min_interval) : s - e < n.min_interval && (s = e + n.min_interval), this.convertToPercent(s)) : t
        }, checkMaxInterval: function (t, e, i) {
            var s, n = this.options;
            return n.max_interval ? (s = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - s > n.max_interval && (s = e - n.max_interval) : s - e > n.max_interval && (s = e + n.max_interval), this.convertToPercent(s)) : t
        }, checkDiapason: function (t, e, i) {
            var t = this.convertToValue(t), s = this.options;
            return "number" != typeof e && (e = s.min), (i = "number" != typeof i ? s.max : i) < (t = t < e ? e : t) && (t = i), this.convertToPercent(t)
        }, toFixed: function (t) {
            return +(t = t.toFixed(20))
        }, _prettify: function (t) {
            return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options : this).prettify(t) : t
        }, prettify: function (t) {
            return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (t, e) {
            return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t)
        }, validate: function () {
            var t, e, i = this.options, s = this.result, n = i.values, o = n.length;
            if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o) for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +n[e], t = isNaN(t) ? n[e] : (n[e] = t, this._prettify(t)), i.p_values.push(t);
            "number" == typeof i.from && !isNaN(i.from) || (i.from = i.min), "number" == typeof i.to && !isNaN(i.to) || (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
        }, decorate: function (t, e) {
            var i = "", s = this.options;
            return s.prefix && (i += s.prefix), i += t, s.max_postfix && (s.values.length && t === s.p_values[s.max] || e === s.max) && (i += s.max_postfix, s.postfix && (i += " ")), s.postfix && (i += s.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var t, e, i, s, n, o, r = this.options, a = r.max - r.min, l = r.grid_num, c = 0, h = 4, d = "";
                for (this.calcGridMargin(), r.grid_snap && (l = a / r.step), i = this.toFixed(100 / (l = 50 < l ? 50 : l)), 4 < l && (h = 3), 7 < l && (h = 2), 14 < l && (h = 1), 28 < l && (h = 0), t = 0; t < l + 1; t++) {
                    for (s = h, 100 < (c = this.toFixed(i * t)) && (c = 100), n = ((this.coords.big[t] = c) - i * (t - 1)) / (s + 1), e = 1; e <= s && 0 !== c; e++) d += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - n * e) + '%"></span>';
                    d += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', o = this.convertToValue(c), d += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (o = r.values.length ? r.p_values[o] : this._prettify(o)) + "</span>"
                }
                this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            for (var t, e = this.coords.big_num, i = 0; i < e; i++) t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
            this.calcGridLabels()
        }, calcGridLabels: function () {
            for (var t, e = [], i = [], s = this.coords.big_num, n = 0; n < s; n++) this.coords.big_w[n] = this.$cache.grid_labels[n].outerWidth(!1), this.coords.big_p[n] = this.toFixed(this.coords.big_w[n] / this.coords.w_rs * 100), this.coords.big_x[n] = this.toFixed(this.coords.big_p[n] / 2), e[n] = this.toFixed(this.coords.big[n] - this.coords.big_x[n]), i[n] = this.toFixed(e[n] + this.coords.big_p[n]);
            for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[s - 1] > 100 + this.coords.grid_gap && (i[s - 1] = 100 + this.coords.grid_gap, e[s - 1] = this.toFixed(i[s - 1] - this.coords.big_p[s - 1]), this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), n = 0; n < s; n++) t = this.$cache.grid_labels[n][0], this.coords.big_x[n] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[n] + "%")
        }, calcGridCollision: function (t, e, i) {
            for (var s, n, o = this.coords.big_num, r = 0; r < o && !(o <= (s = r + t / 2)); r += t) n = this.$cache.grid_labels[s][0], i[r] <= e[s] ? n.style.visibility = "visible" : n.style.visibility = "hidden"
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (t) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = r.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), r.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
        }
    }, r.fn.ionRangeSlider = function (t) {
        return this.each(function () {
            r.data(this, "ionRangeSlider") || r.data(this, "ionRangeSlider", new e(this, t, s++))
        })
    };
    for (var o = 0, h = ["ms", "moz", "webkit", "o"], d = 0; d < h.length && !l.requestAnimationFrame; ++d) l.requestAnimationFrame = l[h[d] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[h[d] + "CancelAnimationFrame"] || l[h[d] + "CancelRequestAnimationFrame"];
    l.requestAnimationFrame || (l.requestAnimationFrame = function (t, e) {
        var i = (new Date).getTime(), s = Math.max(0, 16 - (i - o)), n = l.setTimeout(function () {
            t(i + s)
        }, s);
        return o = i + s, n
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
}(this, function () {
    return s = [function (t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n() {
            f = (0, u.default)(), _()
        }

        var o = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i, s = arguments[e];
                    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
                }
                return t
            }, r = (s(i(1)), i(6)), a = s(r), l = s(i(7)), c = s(i(8)), h = s(i(9)), d = s(i(10)), p = s(i(11)),
            u = s(i(14)), f = [], m = !1, g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, _ = function () {
                if (m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? !0 : m) return f = (0, p.default)(f, g), (0, d.default)(f, g.once), f
            };
        t.exports = {
            init: function (t) {
                g = o(g, t), f = (0, u.default)();
                var e, t = document.all && !window.atob;
                return !0 === (e = g.disable) || "mobile" === e && h.default.mobile() || "phone" === e && h.default.phone() || "tablet" === e && h.default.tablet() || "function" == typeof e && !0 === e() || t ? void f.forEach(function (t, e) {
                    t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                }) : (g.disableMutationObserver || c.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? _(!0) : ("load" === g.startEvent ? window : document).addEventListener(g.startEvent, function () {
                    _(!0)
                }), window.addEventListener("resize", (0, l.default)(_, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, l.default)(_, g.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function () {
                    (0, d.default)(f, g.once)
                }, g.throttleDelay)), g.disableMutationObserver || c.default.ready("[data-aos]", n), f)
            }, refresh: _, refreshHard: n
        }
    }, function (t, e) {
    }, , , , , function (u, t) {
        !function (t) {
            "use strict";

            function o(s, i, t) {
                function n(t) {
                    var e = l, i = c;
                    return l = c = void 0, f = t, d = s.apply(i, e)
                }

                function o(t) {
                    var e = t - u;
                    return void 0 === u || i <= e || e < 0 || g && h <= t - f
                }

                function r() {
                    var t, e = k();
                    return o(e) ? a(e) : void (p = setTimeout(r, (t = i - ((e = e) - u), g ? x(t, h - (e - f)) : t)))
                }

                function a(t) {
                    return p = void 0, _ && l ? n(t) : (l = c = void 0, d)
                }

                function e() {
                    var t = k(), e = o(t);
                    if (l = arguments, c = this, u = t, e) {
                        if (void 0 === p) return f = t = u, p = setTimeout(r, i), m ? n(t) : d;
                        if (g) return p = setTimeout(r, i), n(u)
                    }
                    return void 0 === p && (p = setTimeout(r, i)), d
                }

                var l, c, h, d, p, u, f = 0, m = !1, g = !1, _ = !0;
                if ("function" != typeof s) throw new TypeError(y);
                return i = b(i) || 0, v(t) && (m = !!t.leading, g = "maxWait" in t, h = g ? w(b(t.maxWait) || 0, i) : h, _ = "trailing" in t ? !!t.trailing : _), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), l = u = c = p = void (f = 0)
                }, e.flush = function () {
                    return void 0 === p ? d : a(k())
                }, e
            }

            function v(t) {
                var e = void 0 === t ? "undefined" : s(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : s(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : s(e)) && "[object Symbol]" == p.call(t);
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return n;
                if ("string" != typeof (t = v(t) ? v(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t)) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var e = l.test(t);
                return e || c.test(t) ? h(t.slice(2), e ? 2 : 8) : a.test(t) ? n : +t
            }

            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y = "Expected a function", n = NaN, r = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i, h = parseInt,
                t = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                e = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                d = t || e || Function("return this")(), p = Object.prototype.toString, w = Math.max, x = Math.min,
                k = function () {
                    return d.Date.now()
                };
            u.exports = function (t, e, i) {
                var s = !0, n = !0;
                if ("function" != typeof t) throw new TypeError(y);
                return v(i) && (s = "leading" in i ? !!i.leading : s, n = "trailing" in i ? !!i.trailing : n), o(t, e, {
                    leading: s,
                    maxWait: e,
                    trailing: n
                })
            }
        }.call(t, function () {
            return this
        }())
    }, function (u, t) {
        !function (t) {
            "use strict";

            function v(t) {
                var e = void 0 === t ? "undefined" : s(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : s(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : s(e)) && p.call(t) == o;
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return n;
                if ("string" != typeof (t = v(t) ? v(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t)) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var e = l.test(t);
                return e || c.test(t) ? h(t.slice(2), e ? 2 : 8) : a.test(t) ? n : +t
            }

            function y() {
                return d.Date.now()
            }

            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n = NaN, o = "[object Symbol]", r = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i, h = parseInt,
                t = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                e = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                d = t || e || Function("return this")(), p = Object.prototype.toString, w = Math.max, x = Math.min;
            u.exports = function (s, i, t) {
                function n(t) {
                    var e = l, i = c;
                    return l = c = void 0, f = t, d = s.apply(i, e)
                }

                function o(t) {
                    var e = t - u;
                    return void 0 === u || i <= e || e < 0 || g && h <= t - f
                }

                function r() {
                    var t, e = y();
                    return o(e) ? a(e) : void (p = setTimeout(r, (t = i - ((e = e) - u), g ? x(t, h - (e - f)) : t)))
                }

                function a(t) {
                    return p = void 0, _ && l ? n(t) : (l = c = void 0, d)
                }

                function e() {
                    var t = y(), e = o(t);
                    if (l = arguments, c = this, u = t, e) {
                        if (void 0 === p) return f = t = u, p = setTimeout(r, i), m ? n(t) : d;
                        if (g) return p = setTimeout(r, i), n(u)
                    }
                    return void 0 === p && (p = setTimeout(r, i)), d
                }

                var l, c, h, d, p, u, f = 0, m = !1, g = !1, _ = !0;
                if ("function" != typeof s) throw new TypeError("Expected a function");
                return i = b(i) || 0, v(t) && (m = !!t.leading, g = "maxWait" in t, h = g ? w(b(t.maxWait) || 0, i) : h, _ = "trailing" in t ? !!t.trailing : _), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), l = u = c = p = void (f = 0)
                }, e.flush = function () {
                    return void 0 === p ? d : a(y())
                }, e
            }
        }.call(t, function () {
            return this
        }())
    }, function (t, e) {
        "use strict";

        function n() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function o(t) {
            t && t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes), t = Array.prototype.slice.call(t.removedNodes);
                if (function t(e) {
                    for (var i, s = void 0, s = 0; s < e.length; s += 1) {
                        if ((i = e[s]).dataset && i.dataset.aos) return !0;
                        if (i.children && t(i.children)) return !0
                    }
                    return !1
                }(e.concat(t))) return r()
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
        };
        e.default = {
            isSupported: function () {
                return !!n()
            }, ready: function (t, e) {
                var i = window.document, s = new (n())(o);
                r = e, s.observe(i.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
            }
        }
    }, function (t, e) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            n = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a = (function (t, e, i) {
                return e && c(t.prototype, e), i && c(t, i), t
            }(l, [{
                key: "phone", value: function () {
                    var t = i();
                    return !(!s.test(t) && !n.test(t.substr(0, 4)))
                }
            }, {
                key: "mobile", value: function () {
                    var t = i();
                    return !(!o.test(t) && !r.test(t.substr(0, 4)))
                }
            }, {
                key: "tablet", value: function () {
                    return this.mobile() && !this.phone()
                }
            }]), l);

        function l() {
            if (!(this instanceof l)) throw new TypeError("Cannot call a class as a function")
        }

        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }

        e.default = new a
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t, o) {
            var r = window.pageYOffset, a = window.innerHeight;
            t.forEach(function (t, e) {
                var i, s, n;
                i = a + r, s = o, n = (t = t).node.getAttribute("data-aos-once"), i > t.position ? t.node.classList.add("aos-animate") : void 0 === n || "false" !== n && (s || "true" === n) || t.node.classList.remove("aos-animate")
            })
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = i(12), s = (i = i) && i.__esModule ? i : {default: i};
        e.default = function (t, i) {
            return t.forEach(function (t, e) {
                t.node.classList.add("aos-init"), t.position = (0, s.default)(t.node, i.offset)
            }), t
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = i(13), r = (i = i) && i.__esModule ? i : {default: i};
        e.default = function (t, e) {
            var i = 0, s = 0, n = window.innerHeight, o = {
                offset: t.getAttribute("data-aos-offset"),
                anchor: t.getAttribute("data-aos-anchor"),
                anchorPlacement: t.getAttribute("data-aos-anchor-placement")
            };
            switch (o.offset && !isNaN(o.offset) && (s = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), i = (0, r.default)(t).top, o.anchorPlacement) {
                case"top-bottom":
                    break;
                case"center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    i += t.offsetHeight;
                    break;
                case"top-center":
                    i += n / 2;
                    break;
                case"bottom-center":
                    i += n / 2 + t.offsetHeight;
                    break;
                case"center-center":
                    i += n / 2 + t.offsetHeight / 2;
                    break;
                case"top-top":
                    i += n;
                    break;
                case"bottom-top":
                    i += t.offsetHeight + n;
                    break;
                case"center-top":
                    i += t.offsetHeight / 2 + n
            }
            return i + (s = o.anchorPlacement || o.offset || isNaN(e) ? s : e)
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t) {
            for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
            return {top: i, left: e}
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t) {
            return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function (t) {
                return {node: t}
            })
        }
    }], n = {}, i.m = s, i.c = n, i.p = "dist/", i(0);

    function i(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {exports: {}, id: t, loaded: !1};
        return s[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports
    }

    var s, n
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (d) {
    var i = /\+/g;

    function p(t) {
        return f.raw ? t : encodeURIComponent(t)
    }

    function u(t, e) {
        t = f.raw ? t : function (t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(i, " ")), f.json ? JSON.parse(t) : t
            } catch (t) {
            }
        }(t);
        return d.isFunction(e) ? e(t) : t
    }

    var f = d.cookie = function (t, e, i) {
        var s, n;
        if (1 < arguments.length && !d.isFunction(e)) return "number" == typeof (i = d.extend({}, f.defaults, i)).expires && (s = i.expires, (n = i.expires = new Date).setMilliseconds(n.getMilliseconds() + 864e5 * s)), document.cookie = [p(t), "=", (n = e, p(f.json ? JSON.stringify(n) : String(n))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
        for (var o = t ? void 0 : {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0, l = r.length; a < l; a++) {
            var c = r[a].split("="), h = (h = c.shift(), f.raw ? h : decodeURIComponent(h)), c = c.join("=");
            if (t === h) {
                o = u(c, e);
                break
            }
            t || void 0 === (c = u(c)) || (o[h] = c)
        }
        return o
    };
    f.defaults = {}, d.removeCookie = function (t, e) {
        return d.cookie(t, "", d.extend({}, e, {expires: -1})), !d.cookie(t)
    }
});
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function () {
    "use strict";
    const P = 1e3, z = "transitionend", j = e => {
            let i = e.getAttribute("data-bs-target");
            if (!i || "#" === i) {
                let t = e.getAttribute("href");
                if (!t || !t.includes("#") && !t.startsWith(".")) return null;
                t.includes("#") && !t.startsWith("#") && (t = "#" + t.split("#")[1]), i = t && "#" !== t ? t.trim() : null
            }
            return i
        }, H = t => {
            t = j(t);
            return t && document.querySelector(t) ? t : null
        }, o = t => {
            t = j(t);
            return t ? document.querySelector(t) : null
        }, F = t => {
            t.dispatchEvent(new Event(z))
        }, r = t => !(!t || "object" != typeof t) && void 0 !== (t = void 0 !== t.jquery ? t[0] : t).nodeType,
        s = t => r(t) ? t.jquery ? t[0] : t : "string" == typeof t && 0 < t.length ? document.querySelector(t) : null,
        i = (s, n, o) => {
            Object.keys(o).forEach(t => {
                var e = o[t], i = n[t],
                    i = i && r(i) ? "element" : null == (i = i) ? "" + i : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(e).test(i)) throw new TypeError(s.toUpperCase() + `: Option "${t}" provided type "${i}" but expected type "${e}".`)
            })
        },
        W = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        a = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
        R = t => {
            return document.documentElement.attachShadow ? "function" == typeof t.getRootNode ? (e = t.getRootNode()) instanceof ShadowRoot ? e : null : t instanceof ShadowRoot ? t : t.parentNode ? R(t.parentNode) : null : null;
            var e
        }, B = () => {
        }, d = t => {
            t.offsetHeight
        }, V = () => {
            var t = window["jQuery"];
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }, U = [], n = () => "rtl" === document.documentElement.dir;
    var t = s => {
        var t;
        t = () => {
            const t = V();
            if (t) {
                const e = s.NAME, i = t.fn[e];
                t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = i, s.jQueryInterface)
            }
        }, "loading" === document.readyState ? (U.length || document.addEventListener("DOMContentLoaded", () => {
            U.forEach(t => t())
        }), U.push(t)) : t()
    };
    const l = t => {
        "function" == typeof t && t()
    }, q = (i, s, t = !0) => {
        if (t) {
            t = (t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
                var t = Number.parseFloat(e), s = Number.parseFloat(i);
                return t || s ? (e = e.split(",")[0], i = i.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(i)) * P) : 0
            })(s) + 5;
            let e = !1;
            const n = ({target: t}) => {
                t === s && (e = !0, s.removeEventListener(z, n), l(i))
            };
            s.addEventListener(z, n), setTimeout(() => {
                e || F(s)
            }, t)
        } else l(i)
    }, K = (t, e, i, s) => {
        let n = t.indexOf(e);
        if (-1 === n) return t[!i && s ? t.length - 1 : 0];
        e = t.length;
        return n += i ? 1 : -1, s && (n = (n + e) % e), t[Math.max(0, Math.min(n, e - 1))]
    }, G = /[^.]*(?=\..*)\.|.*/, X = /\..*/, Q = /::\d+$/, Y = {};
    let Z = 1;
    const J = {mouseenter: "mouseover", mouseleave: "mouseout"}, tt = /^(mouseenter|mouseleave)/i,
        et = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function it(t, e) {
        return e && e + "::" + Z++ || t.uidEvent || Z++
    }

    function st(t) {
        var e = it(t);
        return t.uidEvent = e, Y[e] = Y[e] || {}, Y[e]
    }

    function nt(i, s, n = null) {
        var o = Object.keys(i);
        for (let t = 0, e = o.length; t < e; t++) {
            var r = i[o[t]];
            if (r.originalHandler === s && r.delegationSelector === n) return r
        }
        return null
    }

    function ot(t, e, i) {
        var s = "string" == typeof e, i = s ? i : e;
        let n = lt(t);
        e = et.has(n);
        return [s, i, n = e ? n : t]
    }

    function rt(t, e, i, s, n) {
        if ("string" == typeof e && t) {
            i || (i = s, s = null), tt.test(e) && (o = e => function (t) {
                if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
            }, s ? s = o(s) : i = o(i));
            var [o, r, a] = ot(e, i, s);
            const u = st(t), f = u[a] || (u[a] = {}), m = nt(f, r, o ? i : null);
            if (m) m.oneOff = m.oneOff && n; else {
                var l, c, h, d, p, e = it(r, e.replace(G, ""));
                const g = o ? (h = t, d = i, p = s, function i(s) {
                    var n = h.querySelectorAll(d);
                    for (let e = s["target"]; e && e !== this; e = e.parentNode) for (let t = n.length; t--;) if (n[t] === e) return s.delegateTarget = e, i.oneOff && _.off(h, s.type, d, p), p.apply(e, [s]);
                    return null
                }) : (l = t, c = i, function t(e) {
                    return e.delegateTarget = l, t.oneOff && _.off(l, e.type, c), c.apply(l, [e])
                });
                g.delegationSelector = o ? i : null, g.originalHandler = r, g.oneOff = n, g.uidEvent = e, f[e] = g, t.addEventListener(a, g, o)
            }
        }
    }

    function at(t, e, i, s, n) {
        s = nt(e[i], s, n);
        s && (t.removeEventListener(i, s, Boolean(n)), delete e[i][s.uidEvent])
    }

    function lt(t) {
        return t = t.replace(X, ""), J[t] || t
    }

    const _ = {
        on(t, e, i, s) {
            rt(t, e, i, s, !1)
        }, one(t, e, i, s) {
            rt(t, e, i, s, !0)
        }, off(r, a, t, e) {
            if ("string" == typeof a && r) {
                const [i, s, n] = ot(a, t, e), o = n !== a, l = st(r);
                e = a.startsWith(".");
                if (void 0 !== s) return l && l[n] ? void at(r, l, n, s, i ? t : null) : void 0;
                e && Object.keys(l).forEach(t => {
                    {
                        var e = r, i = l, s = t, n = a.slice(1);
                        const o = i[s] || {};
                        return void Object.keys(o).forEach(t => {
                            t.includes(n) && (t = o[t], at(e, i, s, t.originalHandler, t.delegationSelector))
                        })
                    }
                });
                const c = l[n] || {};
                Object.keys(c).forEach(t => {
                    var e = t.replace(Q, "");
                    o && !a.includes(e) || (e = c[t], at(r, l, n, e.originalHandler, e.delegationSelector))
                })
            }
        }, trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const s = V();
            var n = lt(e), o = e !== n, r = et.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents")).initEvent(n, l, !0) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach(t => {
                Object.defineProperty(d, t, {
                    get() {
                        return i[t]
                    }
                })
            }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
        }
    }, c = new Map, ct = {
        set(t, e, i) {
            c.has(t) || c.set(t, new Map);
            const s = c.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        }, get(t, e) {
            return c.has(t) && c.get(t).get(e) || null
        }, remove(t, e) {
            if (c.has(t)) {
                const i = c.get(t);
                i.delete(e), 0 === i.size && c.delete(t)
            }
        }
    };

    class e {
        constructor(t) {
            (t = s(t)) && (this._element = t, ct.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            ct.remove(this._element, this.constructor.DATA_KEY), _.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }

        _queueCallback(t, e, i = !0) {
            q(t, e, i)
        }

        static getInstance(t) {
            return ct.get(s(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.1.3"
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        static get DATA_KEY() {
            return "bs." + this.NAME
        }

        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }

    var ht = (i, s = "hide") => {
        var t = "click.dismiss" + i.EVENT_KEY;
        const n = i.NAME;
        _.on(document, t, `[data-bs-dismiss="${n}"]`, function (t) {
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
                t = o(this) || this.closest("." + n);
                const e = i.getOrCreateInstance(t);
                e[s]()
            }
        })
    };

    class dt extends e {
        static get NAME() {
            return "alert"
        }

        close() {
            var t;
            _.trigger(this._element, "close.bs.alert").defaultPrevented || (this._element.classList.remove("show"), t = this._element.classList.contains("fade"), this._queueCallback(() => this._destroyElement(), this._element, t))
        }

        _destroyElement() {
            this._element.remove(), _.trigger(this._element, "closed.bs.alert"), this.dispose()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = dt.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    ht(dt, "close"), t(dt);
    const pt = '[data-bs-toggle="button"]';

    class ut extends e {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = ut.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }

    function ft(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function mt(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }

    _.on(document, "click.bs.button.data-api", pt, t => {
        t.preventDefault();
        t = t.target.closest(pt);
        const e = ut.getOrCreateInstance(t);
        e.toggle()
    }), t(ut);
    const h = {
        setDataAttribute(t, e, i) {
            t.setAttribute("data-bs-" + mt(e), i)
        }, removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + mt(e))
        }, getDataAttributes(i) {
            if (!i) return {};
            const s = {};
            return Object.keys(i.dataset).filter(t => t.startsWith("bs")).forEach(t => {
                let e = t.replace(/^bs/, "");
                e = e.charAt(0).toLowerCase() + e.slice(1, e.length), s[e] = ft(i.dataset[t])
            }), s
        }, getDataAttribute(t, e) {
            return ft(t.getAttribute("data-bs-" + mt(e)))
        }, offset(t) {
            t = t.getBoundingClientRect();
            return {top: t.top + window.pageYOffset, left: t.left + window.pageXOffset}
        }, position(t) {
            return {top: t.offsetTop, left: t.offsetLeft}
        }
    }, p = {
        find(t, e = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(e, t))
        }, findOne(t, e = document.documentElement) {
            return Element.prototype.querySelector.call(e, t)
        }, children(t, e) {
            return [].concat(...t.children).filter(t => t.matches(e))
        }, parents(t, e) {
            const i = [];
            let s = t.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;
            return i
        }, prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling
            }
            return []
        }, next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling
            }
            return []
        }, focusableChildren(t) {
            var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => t + ':not([tabindex^="-"])').join(", ");
            return this.find(e, t).filter(t => !a(t) && W(t))
        }
    }, gt = "carousel";
    var _t = ".bs.carousel";
    const vt = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, bt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, u = "next", f = "prev", m = "left", yt = "right", wt = {ArrowLeft: yt, ArrowRight: m}, xt = "slid" + _t;
    const g = "active", kt = ".active.carousel-item";

    class v extends e {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = p.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }

        static get Default() {
            return vt
        }

        static get NAME() {
            return gt
        }

        next() {
            this._slide(u)
        }

        nextWhenVisible() {
            !document.hidden && W(this._element) && this.next()
        }

        prev() {
            this._slide(f)
        }

        pause(t) {
            t || (this._isPaused = !0), p.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (F(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }

        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }

        to(t) {
            this._activeElement = p.findOne(kt, this._element);
            var e = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) _.one(this._element, xt, () => this.to(t)); else {
                if (e === t) return this.pause(), void this.cycle();
                e = e < t ? u : f;
                this._slide(e, this._items[t])
            }
        }

        _getConfig(t) {
            return t = {...vt, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i(gt, t, bt), t
        }

        _handleSwipe() {
            var t = Math.abs(this.touchDeltaX);
            t <= 40 || (t = t / this.touchDeltaX, this.touchDeltaX = 0, t && this._slide(0 < t ? yt : m))
        }

        _addEventListeners() {
            this._config.keyboard && _.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (_.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), _.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            const e = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), i = t => {
                e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            }, s = t => {
                this.touchDeltaX = t.touches && 1 < t.touches.length ? 0 : t.touches[0].clientX - this.touchStartX
            }, n = t => {
                e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
            };
            p.find(".carousel-item img", this._element).forEach(t => {
                _.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }), this._pointerEvent ? (_.on(this._element, "pointerdown.bs.carousel", t => i(t)), _.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (_.on(this._element, "touchstart.bs.carousel", t => i(t)), _.on(this._element, "touchmove.bs.carousel", t => s(t)), _.on(this._element, "touchend.bs.carousel", t => n(t)))
        }

        _keydown(t) {
            var e;
            /input|textarea/i.test(t.target.tagName) || (e = wt[t.key]) && (t.preventDefault(), this._slide(e))
        }

        _getItemIndex(t) {
            return this._items = t && t.parentNode ? p.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }

        _getItemByOrder(t, e) {
            t = t === u;
            return K(this._items, e, t, this._config.wrap)
        }

        _triggerSlideEvent(t, e) {
            var i = this._getItemIndex(t), s = this._getItemIndex(p.findOne(kt, this._element));
            return _.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: s, to: i})
        }

        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = p.findOne(".active", this._indicatorsElement),
                    i = (t.classList.remove(g), t.removeAttribute("aria-current"), p.find("[data-bs-target]", this._indicatorsElement));
                for (let t = 0; t < i.length; t++) if (Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                    i[t].classList.add(g), i[t].setAttribute("aria-current", "true");
                    break
                }
            }
        }

        _updateInterval() {
            const t = this._activeElement || p.findOne(kt, this._element);
            var e;
            t && ((e = Number.parseInt(t.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }

        _slide(t, e) {
            t = this._directionToOrder(t);
            const i = p.findOne(kt, this._element), s = this._getItemIndex(i), n = e || this._getItemByOrder(t, i),
                o = this._getItemIndex(n);
            var e = Boolean(this._interval), r = t === u;
            const a = r ? "carousel-item-start" : "carousel-item-end",
                l = r ? "carousel-item-next" : "carousel-item-prev", c = this._orderToDirection(t);
            if (n && n.classList.contains(g)) this._isSliding = !1; else if (!this._isSliding) {
                r = this._triggerSlideEvent(n, c);
                if (!r.defaultPrevented && i && n) {
                    this._isSliding = !0, e && this.pause(), this._setActiveIndicatorElement(n), this._activeElement = n;
                    const h = () => {
                        _.trigger(this._element, xt, {relatedTarget: n, direction: c, from: s, to: o})
                    };
                    this._element.classList.contains("slide") ? (n.classList.add(l), d(n), i.classList.add(a), n.classList.add(a), this._queueCallback(() => {
                        n.classList.remove(a, l), n.classList.add(g), i.classList.remove(g, l, a), this._isSliding = !1, setTimeout(h, 0)
                    }, i, !0)) : (i.classList.remove(g), n.classList.add(g), this._isSliding = !1, h()), e && this.cycle()
                }
            }
        }

        _directionToOrder(t) {
            return [yt, m].includes(t) ? n() ? t === m ? f : u : t === m ? u : f : t
        }

        _orderToDirection(t) {
            return [u, f].includes(t) ? n() ? t === f ? m : yt : t === f ? yt : m : t
        }

        static carouselInterface(t, e) {
            const i = v.getOrCreateInstance(t, e);
            let s = i["_config"];
            "object" == typeof e && (s = {...s, ...e});
            t = "string" == typeof e ? e : s.slide;
            if ("number" == typeof e) i.to(e); else if ("string" == typeof t) {
                if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                i[t]()
            } else s.interval && s.ride && (i.pause(), i.cycle())
        }

        static jQueryInterface(t) {
            return this.each(function () {
                v.carouselInterface(this, t)
            })
        }

        static dataApiClickHandler(t) {
            const e = o(this);
            if (e && e.classList.contains("carousel")) {
                const s = {...h.getDataAttributes(e), ...h.getDataAttributes(this)};
                var i = this.getAttribute("data-bs-slide-to");
                i && (s.interval = !1), v.carouselInterface(e, s), i && v.getInstance(e).to(i), t.preventDefault()
            }
        }
    }

    _.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", v.dataApiClickHandler), _.on(window, "load.bs.carousel.data-api", () => {
        var i = p.find('[data-bs-ride="carousel"]');
        for (let t = 0, e = i.length; t < e; t++) v.carouselInterface(i[t], v.getInstance(i[t]))
    }), t(v);
    const Et = "collapse", $t = "bs.collapse";
    $t;
    const Tt = {toggle: !0, parent: null}, It = {toggle: "boolean", parent: "(null|element)"};
    const Ot = "show", Ct = "collapse", St = "collapsing", At = "collapsed", Dt = `:scope .${Ct} .` + Ct,
        Lt = '[data-bs-toggle="collapse"]';

    class Nt extends e {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            var i = p.find(Lt);
            for (let t = 0, e = i.length; t < e; t++) {
                var s = i[t], n = H(s), o = p.find(n).filter(t => t === this._element);
                null !== n && o.length && (this._selector = n, this._triggerArray.push(s))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return Tt
        }

        static get NAME() {
            return Et
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (!this._isTransitioning && !this._isShown()) {
                let t = [], e;
                if (this._config.parent) {
                    const n = p.find(Dt, this._config.parent);
                    t = p.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(t => !n.includes(t))
                }
                const s = p.findOne(this._selector);
                if (t.length) {
                    var i = t.find(t => s !== t);
                    if ((e = i ? Nt.getInstance(i) : null) && e._isTransitioning) return
                }
                i = _.trigger(this._element, "show.bs.collapse");
                if (!i.defaultPrevented) {
                    t.forEach(t => {
                        s !== t && Nt.getOrCreateInstance(t, {toggle: !1}).hide(), e || ct.set(t, $t, null)
                    });
                    const o = this._getDimension();
                    this._element.classList.remove(Ct), this._element.classList.add(St), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                    i = "scroll" + (o[0].toUpperCase() + o.slice(1));
                    this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(St), this._element.classList.add(Ct, Ot), this._element.style[o] = "", _.trigger(this._element, "shown.bs.collapse")
                    }, this._element, !0), this._element.style[o] = this._element[i] + "px"
                }
            }
        }

        hide() {
            if (!this._isTransitioning && this._isShown()) {
                var t = _.trigger(this._element, "hide.bs.collapse");
                if (!t.defaultPrevented) {
                    var t = this._getDimension(),
                        e = (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", d(this._element), this._element.classList.add(St), this._element.classList.remove(Ct, Ot), this._triggerArray.length);
                    for (let t = 0; t < e; t++) {
                        var i = this._triggerArray[t], s = o(i);
                        s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1)
                    }
                    this._isTransitioning = !0;
                    this._element.style[t] = "", this._queueCallback(() => {
                        this._isTransitioning = !1, this._element.classList.remove(St), this._element.classList.add(Ct), _.trigger(this._element, "hidden.bs.collapse")
                    }, this._element, !0)
                }
            }
        }

        _isShown(t = this._element) {
            return t.classList.contains(Ot)
        }

        _getConfig(t) {
            return (t = {...Tt, ...h.getDataAttributes(this._element), ...t}).toggle = Boolean(t.toggle), t.parent = s(t.parent), i(Et, t, It), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (this._config.parent) {
                const e = p.find(Dt, this._config.parent);
                p.find(Lt, this._config.parent).filter(t => !e.includes(t)).forEach(t => {
                    var e = o(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                })
            }
        }

        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach(t => {
                e ? t.classList.remove(At) : t.classList.add(At), t.setAttribute("aria-expanded", e)
            })
        }

        static jQueryInterface(i) {
            return this.each(function () {
                const t = {},
                    e = ("string" == typeof i && /show|hide/.test(i) && (t.toggle = !1), Nt.getOrCreateInstance(this, t));
                if ("string" == typeof i) {
                    if (void 0 === e[i]) throw new TypeError(`No method named "${i}"`);
                    e[i]()
                }
            })
        }
    }

    _.on(document, "click.bs.collapse.data-api", Lt, function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        t = H(this);
        const e = p.find(t);
        e.forEach(t => {
            Nt.getOrCreateInstance(t, {toggle: !1}).toggle()
        })
    }), t(Nt);
    var I = "top", O = "bottom", C = "right", S = "left", Mt = "auto", Pt = [I, O, C, S], A = "start", zt = "end",
        jt = "clippingParents", Ht = "viewport", Ft = "popper", Wt = "reference", Rt = Pt.reduce(function (t, e) {
            return t.concat([e + "-" + A, e + "-" + zt])
        }, []), Bt = [].concat(Pt, [Mt]).reduce(function (t, e) {
            return t.concat([e, e + "-" + A, e + "-" + zt])
        }, []), _t = "beforeRead", Vt = "afterRead", Ut = "beforeMain", qt = "afterMain", Kt = "beforeWrite",
        Gt = "afterWrite", Xt = [_t, "read", Vt, Ut, "main", qt, Kt, "write", Gt];

    function b(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function y(t) {
        return null == t ? window : "[object Window]" !== t.toString() ? (e = t.ownerDocument) && e.defaultView || window : t;
        var e
    }

    function Qt(t) {
        return t instanceof y(t).Element || t instanceof Element
    }

    function w(t) {
        return t instanceof y(t).HTMLElement || t instanceof HTMLElement
    }

    function Yt(t) {
        if ("undefined" != typeof ShadowRoot) return t instanceof y(t).ShadowRoot || t instanceof ShadowRoot
    }

    var x = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var n = t.state;
            Object.keys(n.elements).forEach(function (t) {
                var e = n.styles[t] || {}, i = n.attributes[t] || {}, s = n.elements[t];
                w(s) && b(s) && (Object.assign(s.style, e), Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }))
            })
        }, effect: function (t) {
            var s = t.state, n = {
                popper: {position: s.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(s.elements.popper.style, n.popper), s.styles = n, s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow), function () {
                Object.keys(s.elements).forEach(function (t) {
                    var e = s.elements[t], i = s.attributes[t] || {},
                        t = Object.keys((s.styles.hasOwnProperty(t) ? s.styles : n)[t]).reduce(function (t, e) {
                            return t[e] = "", t
                        }, {});
                    w(e) && b(e) && (Object.assign(e.style, t), Object.keys(i).forEach(function (t) {
                        e.removeAttribute(t)
                    }))
                })
            }
        }, requires: ["computeStyles"]
    };

    function D(t) {
        return t.split("-")[0]
    }

    function Zt(t) {
        t = t.getBoundingClientRect();
        return {
            width: +t.width,
            height: +t.height,
            top: +t.top,
            right: +t.right,
            bottom: +t.bottom,
            left: +t.left,
            x: +t.left,
            y: +t.top
        }
    }

    function Jt(t) {
        var e = Zt(t), i = t.offsetWidth, s = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - s) <= 1 && (s = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        }
    }

    function te(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && Yt(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s)) return !0
            } while (s = s.parentNode || s.host)
        }
        return !1
    }

    function k(t) {
        return y(t).getComputedStyle(t)
    }

    function E(t) {
        return ((Qt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ee(t) {
        return "html" === b(t) ? t : t.assignedSlot || t.parentNode || (Yt(t) ? t.host : null) || E(t)
    }

    function ie(t) {
        return w(t) && "fixed" !== k(t).position ? t.offsetParent : null
    }

    function se(t) {
        for (var e, i = y(t), s = ie(t); s && (e = s, 0 <= ["table", "td", "th"].indexOf(b(e))) && "static" === k(s).position;) s = ie(s);
        return (!s || "html" !== b(s) && ("body" !== b(s) || "static" !== k(s).position)) && (s || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
                i = -1 !== navigator.userAgent.indexOf("Trident");
            if (i && w(t) && "fixed" === k(t).position) return null;
            for (var s = ee(t); w(s) && ["html", "body"].indexOf(b(s)) < 0;) {
                var n = k(s);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return s;
                s = s.parentNode
            }
            return null
        }(t)) || i
    }

    function ne(t) {
        return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
    }

    var $ = Math.max, oe = Math.min, re = Math.round;

    function ae(t, e, i) {
        return $(t, oe(e, i))
    }

    function le() {
        return {top: 0, right: 0, bottom: 0, left: 0}
    }

    function ce(t) {
        return Object.assign({}, le(), t)
    }

    function he(i, t) {
        return t.reduce(function (t, e) {
            return t[e] = i, t
        }, {})
    }

    var T = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, i, s, n, o = t.state, r = t.name, t = t.options, a = o.elements.arrow,
                l = o.modifiersData.popperOffsets, c = ne(h = D(o.placement)),
                h = 0 <= [S, C].indexOf(h) ? "height" : "width";
            a && l && (t = t.padding, i = o, i = ce("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, i.rects, {placement: i.placement})) : t) ? t : he(t, Pt)), t = Jt(a), n = "y" === c ? I : S, s = "y" === c ? O : C, e = o.rects.reference[h] + o.rects.reference[c] - l[c] - o.rects.popper[h], l = l[c] - o.rects.reference[c], a = (a = se(a)) ? "y" === c ? a.clientHeight || 0 : a.clientWidth || 0 : 0, n = i[n], i = a - t[h] - i[s], n = ae(n, s = a / 2 - t[h] / 2 + (e / 2 - l / 2), i), o.modifiersData[r] = ((a = {})[c] = n, a.centerOffset = n - s, a))
        }, effect: function (t) {
            var e = t.state;
            null != (t = void 0 === (t = t.options.element) ? "[data-popper-arrow]" : t) && ("string" != typeof t || (t = e.elements.popper.querySelector(t))) && te(e.elements.popper, t) && (e.elements.arrow = t)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function de(t) {
        return t.split("-")[1]
    }

    var pe = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function ue(t) {
        var e, i, s, n = t.popper, o = t.popperRect, r = t.placement, a = t.variation, l = t.offsets, c = t.position,
            h = t.gpuAcceleration, d = t.adaptive, t = t.roundOffsets,
            p = !0 === t ? (p = (u = l).x, u = l.y, f = window.devicePixelRatio || 1, {
                x: re(re(p * f) / f) || 0,
                y: re(re(u * f) / f) || 0
            }) : "function" == typeof t ? t(l) : l, u = p.x, f = void 0 === u ? 0 : u, t = p.y,
            t = void 0 === t ? 0 : t, m = l.hasOwnProperty("x"), l = l.hasOwnProperty("y"), g = S, _ = I, v = window,
            n = (d && (s = "clientHeight", i = "clientWidth", (e = se(n)) === y(n) && "static" !== k(e = E(n)).position && "absolute" === c && (s = "scrollHeight", i = "scrollWidth"), r !== I && (r !== S && r !== C || a !== zt) || (_ = O, t = (t - (e[s] - o.height)) * (h ? 1 : -1)), r !== S && (r !== I && r !== O || a !== zt) || (g = C, f = (f - (e[i] - o.width)) * (h ? 1 : -1))), Object.assign({position: c}, d && pe));
        return h ? Object.assign({}, n, ((s = {})[_] = l ? "0" : "", s[g] = m ? "0" : "", s.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + t + "px)" : "translate3d(" + f + "px, " + t + "px, 0)", s)) : Object.assign({}, n, ((r = {})[_] = l ? t + "px" : "", r[g] = m ? f + "px" : "", r.transform = "", r))
    }

    var fe = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, t = t.options, i = void 0 === (i = t.gpuAcceleration) || i,
                s = void 0 === (s = t.adaptive) || s, t = void 0 === (t = t.roundOffsets) || t, i = {
                    placement: D(e.placement),
                    variation: de(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: i
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ue(Object.assign({}, i, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s,
                roundOffsets: t
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ue(Object.assign({}, i, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: t
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    }, me = {passive: !0};
    var ge = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, i = t.instance, s = (t = t.options).scroll, n = void 0 === s || s,
                o = void 0 === (s = t.resize) || s, r = y(e.elements.popper),
                a = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return n && a.forEach(function (t) {
                t.addEventListener("scroll", i.update, me)
            }), o && r.addEventListener("resize", i.update, me), function () {
                n && a.forEach(function (t) {
                    t.removeEventListener("scroll", i.update, me)
                }), o && r.removeEventListener("resize", i.update, me)
            }
        }, data: {}
    }, _e = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function ve(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return _e[t]
        })
    }

    var be = {start: "end", end: "start"};

    function ye(t) {
        return t.replace(/start|end/g, function (t) {
            return be[t]
        })
    }

    function we(t) {
        t = y(t);
        return {scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset}
    }

    function xe(t) {
        return Zt(E(t)).left + we(t).scrollLeft
    }

    function ke(t) {
        var t = k(t), e = t.overflow, i = t.overflowX, t = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + t + i)
    }

    function Ee(t, e) {
        void 0 === e && (e = []);
        var i = function t(e) {
                return 0 <= ["html", "body", "#document"].indexOf(b(e)) ? e.ownerDocument.body : w(e) && ke(e) ? e : t(ee(e))
            }(t), t = i === (null == (t = t.ownerDocument) ? void 0 : t.body), s = y(i),
            s = t ? [s].concat(s.visualViewport || [], ke(i) ? i : []) : i, i = e.concat(s);
        return t ? i : i.concat(Ee(ee(s)))
    }

    function $e(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function Te(t, e) {
        return e === Ht ? $e((s = y(i = t), n = E(i), s = s.visualViewport, o = n.clientWidth, n = n.clientHeight, a = r = 0, s && (o = s.width, n = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = s.offsetLeft, a = s.offsetTop)), {
            width: o,
            height: n,
            x: r + xe(i),
            y: a
        })) : w(e) ? ((o = Zt(s = e)).top = o.top + s.clientTop, o.left = o.left + s.clientLeft, o.bottom = o.top + s.clientHeight, o.right = o.left + s.clientWidth, o.width = s.clientWidth, o.height = s.clientHeight, o.x = o.left, o.y = o.top, o) : $e((n = E(t), r = E(n), i = we(n), a = null == (a = n.ownerDocument) ? void 0 : a.body, e = $(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), t = $(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), n = -i.scrollLeft + xe(n), i = -i.scrollTop, "rtl" === k(a || r).direction && (n += $(r.clientWidth, a ? a.clientWidth : 0) - e), {
            width: e,
            height: t,
            x: n,
            y: i
        }));
        var i, s, n, o, r, a
    }

    function Ie(i, t, e) {
        var s,
            n = "clippingParents" === t ? (o = Ee(ee(n = i)), Qt(s = 0 <= ["absolute", "fixed"].indexOf(k(n).position) && w(n) ? se(n) : n) ? o.filter(function (t) {
                return Qt(t) && te(t, s) && "body" !== b(t)
            }) : []) : [].concat(t), o = [].concat(n, [e]), t = o[0], e = o.reduce(function (t, e) {
                e = Te(i, e);
                return t.top = $(e.top, t.top), t.right = oe(e.right, t.right), t.bottom = oe(e.bottom, t.bottom), t.left = $(e.left, t.left), t
            }, Te(i, t));
        return e.width = e.right - e.left, e.height = e.bottom - e.top, e.x = e.left, e.y = e.top, e
    }

    function Oe(t) {
        var e, i = t.reference, s = t.element, t = t.placement, n = t ? D(t) : null, t = t ? de(t) : null,
            o = i.x + i.width / 2 - s.width / 2, r = i.y + i.height / 2 - s.height / 2;
        switch (n) {
            case I:
                e = {x: o, y: i.y - s.height};
                break;
            case O:
                e = {x: o, y: i.y + i.height};
                break;
            case C:
                e = {x: i.x + i.width, y: r};
                break;
            case S:
                e = {x: i.x - s.width, y: r};
                break;
            default:
                e = {x: i.x, y: i.y}
        }
        var a = n ? ne(n) : null;
        if (null != a) {
            var l = "y" === a ? "height" : "width";
            switch (t) {
                case A:
                    e[a] = e[a] - (i[l] / 2 - s[l] / 2);
                    break;
                case zt:
                    e[a] = e[a] + (i[l] / 2 - s[l] / 2)
            }
        }
        return e
    }

    function Ce(t, e) {
        var s, e = e = void 0 === e ? {} : e, i = e.placement, i = void 0 === i ? t.placement : i, n = e.boundary,
            n = void 0 === n ? jt : n, o = e.rootBoundary, o = void 0 === o ? Ht : o, r = e.elementContext,
            r = void 0 === r ? Ft : r, a = e.altBoundary, a = void 0 !== a && a, e = e.padding,
            e = void 0 === e ? 0 : e, e = ce("number" != typeof e ? e : he(e, Pt)), l = t.rects.popper,
            a = t.elements[a ? r === Ft ? Wt : Ft : r],
            a = Ie(Qt(a) ? a : a.contextElement || E(t.elements.popper), n, o), n = Zt(t.elements.reference),
            o = Oe({reference: n, element: l, strategy: "absolute", placement: i}), l = $e(Object.assign({}, l, o)),
            o = r === Ft ? l : n, c = {
                top: a.top - o.top + e.top,
                bottom: o.bottom - a.bottom + e.bottom,
                left: a.left - o.left + e.left,
                right: o.right - a.right + e.right
            }, l = t.modifiersData.offset;
        return r === Ft && l && (s = l[i], Object.keys(c).forEach(function (t) {
            var e = 0 <= [C, O].indexOf(t) ? 1 : -1, i = 0 <= [I, O].indexOf(t) ? "y" : "x";
            c[t] += s[i] * e
        })), c
    }

    var Se = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var d = t.state, e = t.options, t = t.name;
            if (!d.modifiersData[t]._skip) {
                for (var i = e.mainAxis, s = void 0 === i || i, i = e.altAxis, n = void 0 === i || i, i = e.fallbackPlacements, p = e.padding, u = e.boundary, f = e.rootBoundary, o = e.altBoundary, r = e.flipVariations, m = void 0 === r || r, g = e.allowedAutoPlacements, r = d.options.placement, e = D(r), i = i || (e === r || !m ? [ve(r)] : function (t) {
                    if (D(t) === Mt) return [];
                    var e = ve(t);
                    return [ye(t), e, ye(e)]
                }(r)), a = [r].concat(i).reduce(function (t, e) {
                    return t.concat(D(e) === Mt ? (i = d, s = (t = t = void 0 === (t = {
                        placement: e,
                        boundary: u,
                        rootBoundary: f,
                        padding: p,
                        flipVariations: m,
                        allowedAutoPlacements: g
                    }) ? {} : t).placement, n = t.boundary, o = t.rootBoundary, r = t.padding, a = t.flipVariations, l = void 0 === (t = t.allowedAutoPlacements) ? Bt : t, c = de(s), t = c ? a ? Rt : Rt.filter(function (t) {
                        return de(t) === c
                    }) : Pt, h = (s = 0 === (s = t.filter(function (t) {
                        return 0 <= l.indexOf(t)
                    })).length ? t : s).reduce(function (t, e) {
                        return t[e] = Ce(i, {placement: e, boundary: n, rootBoundary: o, padding: r})[D(e)], t
                    }, {}), Object.keys(h).sort(function (t, e) {
                        return h[t] - h[e]
                    })) : e);
                    var i, s, n, o, r, a, l, c, h
                }, []), l = d.rects.reference, c = d.rects.popper, h = new Map, _ = !0, v = a[0], b = 0; b < a.length; b++) {
                    var y = a[b], w = D(y), x = de(y) === A, k = 0 <= [I, O].indexOf(w), E = k ? "width" : "height",
                        $ = Ce(d, {placement: y, boundary: u, rootBoundary: f, altBoundary: o, padding: p}),
                        k = k ? x ? C : S : x ? O : I, x = (l[E] > c[E] && (k = ve(k)), ve(k)), E = [];
                    if (s && E.push($[w] <= 0), n && E.push($[k] <= 0, $[x] <= 0), E.every(function (t) {
                        return t
                    })) {
                        v = y, _ = !1;
                        break
                    }
                    h.set(y, E)
                }
                if (_) for (var T = m ? 3 : 1; 0 < T; T--) if ("break" === function (e) {
                    var t = a.find(function (t) {
                        t = h.get(t);
                        if (t) return t.slice(0, e).every(function (t) {
                            return t
                        })
                    });
                    if (t) return v = t, "break"
                }(T)) break;
                d.placement !== v && (d.modifiersData[t]._skip = !0, d.placement = v, d.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function Ae(t, e, i) {
        return {
            top: t.top - e.height - (i = void 0 === i ? {x: 0, y: 0} : i).y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function De(e) {
        return [I, C, O, S].some(function (t) {
            return 0 <= e[t]
        })
    }

    var Le = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, t = t.name, i = e.rects.reference, s = e.rects.popper, n = e.modifiersData.preventOverflow,
                o = Ce(e, {elementContext: "reference"}), r = Ce(e, {altBoundary: !0}), o = Ae(o, i), i = Ae(r, s, n),
                r = De(o), s = De(i);
            e.modifiersData[t] = {
                referenceClippingOffsets: o,
                popperEscapeOffsets: i,
                isReferenceHidden: r,
                hasPopperEscaped: s
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": s
            })
        }
    };
    var Ne = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var r = t.state, e = t.options, t = t.name, a = void 0 === (e = e.offset) ? [0, 0] : e,
                e = Bt.reduce(function (t, e) {
                    var i, s, n, o;
                    return t[e] = (e = e, i = r.rects, s = a, n = D(e), o = 0 <= [S, I].indexOf(n) ? -1 : 1, e = (i = "function" == typeof s ? s(Object.assign({}, i, {placement: e})) : s)[0] || 0, s = (i[1] || 0) * o, 0 <= [S, C].indexOf(n) ? {
                        x: s,
                        y: e
                    } : {x: e, y: s}), t
                }, {}), i = (s = e[r.placement]).x, s = s.y;
            null != r.modifiersData.popperOffsets && (r.modifiersData.popperOffsets.x += i, r.modifiersData.popperOffsets.y += s), r.modifiersData[t] = e
        }
    };
    var Me = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, t = t.name;
            e.modifiersData[t] = Oe({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    };
    var Pe = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e, i, s, n, o, r, a, l, c, h = t.state, d = t.options, t = t.name, p = void 0 === (p = d.mainAxis) || p,
                u = void 0 !== (u = d.altAxis) && u, f = d.boundary, m = d.rootBoundary, g = d.altBoundary,
                _ = d.padding, v = void 0 === (v = d.tether) || v, d = void 0 === (d = d.tetherOffset) ? 0 : d,
                f = Ce(h, {boundary: f, rootBoundary: m, padding: _, altBoundary: g}), m = D(h.placement),
                g = !(_ = de(h.placement)), b = "x" === (m = ne(m)) ? "y" : "x", y = h.modifiersData.popperOffsets,
                w = h.rects.reference, x = h.rects.popper,
                d = "function" == typeof d ? d(Object.assign({}, h.rects, {placement: h.placement})) : d,
                k = {x: 0, y: 0};
            y && ((p || u) && (o = "y" === m ? "height" : "width", e = y[m], i = y[m] + f[c = "y" === m ? I : S], s = y[m] - f[a = "y" === m ? O : C], r = v ? -x[o] / 2 : 0, n = (_ === A ? w : x)[o], _ = _ === A ? -x[o] : -w[o], x = h.elements.arrow, x = v && x ? Jt(x) : {
                width: 0,
                height: 0
            }, c = (l = h.modifiersData["arrow#persistent"] ? h.modifiersData["arrow#persistent"].padding : le())[c], l = l[a], a = ae(0, w[o], x[o]), x = g ? w[o] / 2 - r - a - c - d : n - a - c - d, n = g ? -w[o] / 2 + r + a + l + d : _ + a + l + d, g = (c = h.elements.arrow && se(h.elements.arrow)) ? "y" === m ? c.clientTop || 0 : c.clientLeft || 0 : 0, w = h.modifiersData.offset ? h.modifiersData.offset[h.placement][m] : 0, o = y[m] + x - w - g, r = y[m] + n - w, p && (_ = ae(v ? oe(i, o) : i, e, v ? $(s, r) : s), y[m] = _, k[m] = _ - e), u && (l = (a = y[b]) + f["x" === m ? I : S], d = a - f["x" === m ? O : C], c = ae(v ? oe(l, o) : l, a, v ? $(d, r) : d), y[b] = c, k[b] = c - a)), h.modifiersData[t] = k)
        }, requiresIfExists: ["offset"]
    };

    function ze(t, e, i) {
        void 0 === i && (i = !1);
        var s = w(e),
            n = (w(e) && ((n = (o = e).getBoundingClientRect()).width, o.offsetWidth, n.height, o.offsetHeight), E(e)),
            o = Zt(t), t = {scrollLeft: 0, scrollTop: 0}, r = {x: 0, y: 0};
        return !s && i || ("body" === b(e) && !ke(n) || (t = (s = e) !== y(s) && w(s) ? {
            scrollLeft: s.scrollLeft,
            scrollTop: s.scrollTop
        } : we(s)), w(e) ? ((r = Zt(e)).x += e.clientLeft, r.y += e.clientTop) : n && (r.x = xe(n))), {
            x: o.left + t.scrollLeft - r.x,
            y: o.top + t.scrollTop - r.y,
            width: o.width,
            height: o.height
        }
    }

    function je(t) {
        var i = new Map, s = new Set, n = [];
        return t.forEach(function (t) {
            i.set(t.name, t)
        }), t.forEach(function (t) {
            s.has(t.name) || !function e(t) {
                s.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                    s.has(t) || (t = i.get(t)) && e(t)
                }), n.push(t)
            }(t)
        }), n
    }

    var He = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function Fe() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function We(t) {
        var t = t = void 0 === t ? {} : t, e = t.defaultModifiers, d = void 0 === e ? [] : e, e = t.defaultOptions,
            p = void 0 === e ? He : e;
        return function (s, n, e) {
            void 0 === e && (e = p);
            var i, o, r = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, He, p),
                modifiersData: {},
                elements: {reference: s, popper: n},
                attributes: {},
                styles: {}
            }, a = [], l = !1, c = {
                state: r, setOptions: function (t) {
                    var i, e, t = "function" == typeof t ? t(r.options) : t,
                        t = (h(), r.options = Object.assign({}, p, r.options, t), r.scrollParents = {
                            reference: Qt(s) ? Ee(s) : s.contextElement ? Ee(s.contextElement) : [],
                            popper: Ee(n)
                        }, t = [].concat(d, r.options.modifiers), e = t.reduce(function (t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }, {}), t = Object.keys(e).map(function (t) {
                            return e[t]
                        }), i = je(t), Xt.reduce(function (t, e) {
                            return t.concat(i.filter(function (t) {
                                return t.phase === e
                            }))
                        }, []));
                    return r.orderedModifiers = t.filter(function (t) {
                        return t.enabled
                    }), r.orderedModifiers.forEach(function (t) {
                        var e = t.name, i = t.options, t = t.effect;
                        "function" == typeof t && (t = t({
                            state: r,
                            name: e,
                            instance: c,
                            options: void 0 === i ? {} : i
                        }), a.push(t || function () {
                        }))
                    }), c.update()
                }, forceUpdate: function () {
                    if (!l) {
                        var t = r.elements, e = t.reference, t = t.popper;
                        if (Fe(e, t)) {
                            r.rects = {
                                reference: ze(e, se(t), "fixed" === r.options.strategy),
                                popper: Jt(t)
                            }, r.reset = !1, r.placement = r.options.placement, r.orderedModifiers.forEach(function (t) {
                                return r.modifiersData[t.name] = Object.assign({}, t.data)
                            });
                            for (var i, s, n, o = 0; o < r.orderedModifiers.length; o++) !0 === r.reset ? (r.reset = !1, o = -1) : (i = (n = r.orderedModifiers[o]).fn, s = n.options, n = n.name, "function" == typeof i && (r = i({
                                state: r,
                                options: void 0 === s ? {} : s,
                                name: n,
                                instance: c
                            }) || r))
                        }
                    }
                }, update: (i = function () {
                    return new Promise(function (t) {
                        c.forceUpdate(), t(r)
                    })
                }, function () {
                    return o = o || new Promise(function (t) {
                        Promise.resolve().then(function () {
                            o = void 0, t(i())
                        })
                    })
                }), destroy: function () {
                    h(), l = !0
                }
            };
            return Fe(s, n) && c.setOptions(e).then(function (t) {
                !l && e.onFirstUpdate && e.onFirstUpdate(t)
            }), c;

            function h() {
                a.forEach(function (t) {
                    return t()
                }), a = []
            }
        }
    }

    var Re = We({defaultModifiers: [ge, Me, fe, x, Ne, Se, Pe, T, Le]});
    const Be = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: Ce,
        createPopperBase: We(),
        createPopper: Re,
        createPopperLite: We({defaultModifiers: [ge, Me, fe, x]}),
        top: I,
        bottom: O,
        right: C,
        left: S,
        auto: Mt,
        basePlacements: Pt,
        start: A,
        end: zt,
        clippingParents: jt,
        viewport: Ht,
        popper: Ft,
        reference: Wt,
        variationPlacements: Rt,
        placements: Bt,
        beforeRead: _t,
        read: "read",
        afterRead: Vt,
        beforeMain: Ut,
        main: "main",
        afterMain: qt,
        beforeWrite: Kt,
        write: "write",
        afterWrite: Gt,
        modifierPhases: Xt,
        applyStyles: x,
        arrow: T,
        computeStyles: fe,
        eventListeners: ge,
        flip: Se,
        hide: Le,
        offset: Ne,
        popperOffsets: Me,
        preventOverflow: Pe
    }), Ve = "dropdown";
    _t = ".bs.dropdown", Vt = ".data-api";
    const Ue = "Escape", qe = "ArrowUp", Ke = "ArrowDown", Ge = new RegExp(qe + `|${Ke}|` + Ue);
    Ut = "click" + _t + Vt, qt = "keydown" + _t + Vt;
    const Xe = "show", Qe = '[data-bs-toggle="dropdown"]', Ye = ".dropdown-menu", Ze = n() ? "top-end" : "top-start",
        Je = n() ? "top-start" : "top-end", ti = n() ? "bottom-end" : "bottom-start",
        ei = n() ? "bottom-start" : "bottom-end", ii = n() ? "left-start" : "right-start",
        si = n() ? "right-start" : "left-start", ni = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        }, oi = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };

    class L extends e {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return ni
        }

        static get DefaultType() {
            return oi
        }

        static get NAME() {
            return Ve
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (!a(this._element) && !this._isShown(this._menu)) {
                var t = {relatedTarget: this._element}, e = _.trigger(this._element, "show.bs.dropdown", t);
                if (!e.defaultPrevented) {
                    const i = L.getParentFromElement(this._element);
                    this._inNavbar ? h.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i), "ontouchstart" in document.documentElement && !i.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => _.on(t, "mouseover", B)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Xe), this._element.classList.add(Xe), _.trigger(this._element, "shown.bs.dropdown", t)
                }
            }
        }

        hide() {
            var t;
            !a(this._element) && this._isShown(this._menu) && (t = {relatedTarget: this._element}, this._completeHide(t))
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            _.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => _.off(t, "mouseover", B)), this._popper && this._popper.destroy(), this._menu.classList.remove(Xe), this._element.classList.remove(Xe), this._element.setAttribute("aria-expanded", "false"), h.removeDataAttribute(this._menu, "popper"), _.trigger(this._element, "hidden.bs.dropdown", t))
        }

        _getConfig(t) {
            if (t = {...this.constructor.Default, ...h.getDataAttributes(this._element), ...t}, i(Ve, t, this.constructor.DefaultType), "object" != typeof t.reference || r(t.reference) || "function" == typeof t.reference.getBoundingClientRect) return t;
            throw new TypeError(Ve.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.')
        }

        _createPopper(t) {
            if (void 0 === Be) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = s(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig();
            t = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
            this._popper = Re(e, this._menu, i), t && h.setDataAttribute(this._menu, "popper", "static")
        }

        _isShown(t = this._element) {
            return t.classList.contains(Xe)
        }

        _getMenuElement() {
            return p.next(this._element, Ye)[0]
        }

        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ii;
            if (t.classList.contains("dropstart")) return si;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Je : Ze : e ? ei : ti
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _selectMenuItem({key: t, target: e}) {
            const i = p.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(W);
            i.length && K(i, e, t === Ke, !i.includes(e)).focus()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = L.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }

        static clearMenus(i) {
            if (!i || 2 !== i.button && ("keyup" !== i.type || "Tab" === i.key)) {
                var s = p.find(Qe);
                for (let t = 0, e = s.length; t < e; t++) {
                    const o = L.getInstance(s[t]);
                    if (o && !1 !== o._config.autoClose && o._isShown()) {
                        const r = {relatedTarget: o._element};
                        if (i) {
                            const a = i.composedPath();
                            var n = a.includes(o._menu);
                            if (a.includes(o._element) || "inside" === o._config.autoClose && !n || "outside" === o._config.autoClose && n) continue;
                            if (o._menu.contains(i.target) && ("keyup" === i.type && "Tab" === i.key || /input|select|option|textarea|form/i.test(i.target.tagName))) continue;
                            "click" === i.type && (r.clickEvent = i)
                        }
                        o._completeHide(r)
                    }
                }
            }
        }

        static getParentFromElement(t) {
            return o(t) || t.parentNode
        }

        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? !("Space" === t.key || t.key !== Ue && (t.key !== Ke && t.key !== qe || t.target.closest(Ye))) : Ge.test(t.key)) {
                var e = this.classList.contains(Xe);
                if ((e || t.key !== Ue) && (t.preventDefault(), t.stopPropagation(), !a(this))) {
                    var i = this.matches(Qe) ? this : p.prev(this, Qe)[0];
                    const s = L.getOrCreateInstance(i);
                    if (t.key !== Ue) return t.key === qe || t.key === Ke ? (e || s.show(), void s._selectMenuItem(t)) : void (e && "Space" !== t.key || L.clearMenus());
                    s.hide()
                }
            }
        }
    }

    _.on(document, qt, Qe, L.dataApiKeydownHandler), _.on(document, qt, Ye, L.dataApiKeydownHandler), _.on(document, Ut, L.clearMenus), _.on(document, "keyup.bs.dropdown.data-api", L.clearMenus), _.on(document, Ut, Qe, function (t) {
        t.preventDefault(), L.getOrCreateInstance(this).toggle()
    }), t(L);
    const ri = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ai = ".sticky-top";

    class li {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            var t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", t => t + e), this._setElementAttributes(ri, "paddingRight", t => t + e), this._setElementAttributes(ai, "marginRight", t => t - e)
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, i, s) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, t => {
                var e;
                t !== this._element && window.innerWidth > t.clientWidth + n || (this._saveInitialAttribute(t, i), e = window.getComputedStyle(t)[i], t.style[i] = s(Number.parseFloat(e)) + "px")
            })
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(ri, "paddingRight"), this._resetElementAttributes(ai, "marginRight")
        }

        _saveInitialAttribute(t, e) {
            var i = t.style[e];
            i && h.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, i) {
            this._applyManipulationCallback(t, t => {
                var e = h.getDataAttribute(t, i);
                void 0 === e ? t.style.removeProperty(i) : (h.removeDataAttribute(t, i), t.style[i] = e)
            })
        }

        _applyManipulationCallback(t, e) {
            r(t) ? e(t) : p.find(t, this._element).forEach(e)
        }

        isOverflowing() {
            return 0 < this.getWidth()
        }
    }

    const ci = {className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null},
        hi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        }, di = "backdrop", pi = "mousedown.bs." + di;

    class ui {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                l(t)
            })) : l(t)
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                this.dispose(), l(t)
            })) : l(t)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _getConfig(t) {
            return (t = {...ci, ..."object" == typeof t ? t : {}}).rootElement = s(t.rootElement), i(di, t, hi), t
        }

        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), _.on(this._getElement(), pi, () => {
                l(this._config.clickCallback)
            }), this._isAppended = !0)
        }

        dispose() {
            this._isAppended && (_.off(this._element, pi), this._element.remove(), this._isAppended = !1)
        }

        _emulateAnimation(t) {
            q(t, this._getElement(), this._config.isAnimated)
        }
    }

    const fi = {trapElement: null, autofocus: !0}, mi = {trapElement: "element", autofocus: "boolean"};
    const gi = ".bs.focustrap", _i = (gi, gi, "backward");

    class vi {
        constructor(t) {
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(), _.off(document, gi), _.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t)), _.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t)), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, _.off(document, gi))
        }

        _handleFocusin(t) {
            t = t.target;
            const e = this._config["trapElement"];
            if (t !== document && t !== e && !e.contains(t)) {
                const i = p.focusableChildren(e);
                (0 === i.length ? e : this._lastTabNavDirection === _i ? i[i.length - 1] : i[0]).focus()
            }
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? _i : "forward")
        }

        _getConfig(t) {
            return t = {...fi, ..."object" == typeof t ? t : {}}, i("focustrap", t, mi), t
        }
    }

    const N = ".bs.modal";
    const bi = {backdrop: !0, keyboard: !0, focus: !0},
        yi = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"}, wi = (N, N, "hidden" + N),
        xi = "show" + N, ki = (N, "resize" + N), Ei = "click.dismiss" + N, $i = "keydown.dismiss" + N,
        Ti = (N, "mousedown.dismiss" + N);
    N;
    const Ii = "modal-open", Oi = "modal-static";

    class Ci extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = p.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new li
        }

        static get Default() {
            return bi
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || _.trigger(this._element, xi, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Ii), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), _.on(this._dialog, Ti, () => {
                _.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }

        hide() {
            var t;
            !this._isShown || this._isTransitioning || _.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, (t = this._isAnimated()) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), _.off(this._element, Ei), _.off(this._dialog, Ti), this._queueCallback(() => this._hideModal(), this._element, t))
        }

        dispose() {
            [window, this._dialog].forEach(t => _.off(t, N)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new ui({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new vi({trapElement: this._element})
        }

        _getConfig(t) {
            return t = {...bi, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i("modal", t, yi), t
        }

        _showElement(t) {
            var e = this._isAnimated();
            const i = p.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && d(this._element), this._element.classList.add("show");
            this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, _.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
            }, this._dialog, e)
        }

        _setEscapeEvent() {
            this._isShown ? _.on(this._element, $i, t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }) : _.off(this._element, $i)
        }

        _setResizeEvent() {
            this._isShown ? _.on(window, ki, () => this._adjustDialog()) : _.off(window, ki)
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(Ii), this._resetAdjustments(), this._scrollBar.reset(), _.trigger(this._element, wi)
            })
        }

        _showBackdrop(t) {
            _.on(this._element, Ei, t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            var t = _.trigger(this._element, "hidePrevented.bs.modal");
            if (!t.defaultPrevented) {
                const {classList: e, scrollHeight: i, style: s} = this._element,
                    n = i > document.documentElement.clientHeight;
                !n && "hidden" === s.overflowY || e.contains(Oi) || (n || (s.overflowY = "hidden"), e.add(Oi), this._queueCallback(() => {
                    e.remove(Oi), n || this._queueCallback(() => {
                        s.overflowY = ""
                    }, this._dialog)
                }, this._dialog), this._element.focus())
            }
        }

        _adjustDialog() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(),
                i = 0 < e;
            (!i && t && !n() || i && !t && n()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !n() || !i && t && n()) && (this._element.style.paddingRight = e + "px")
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(e, i) {
            return this.each(function () {
                const t = Ci.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](i)
                }
            })
        }
    }

    _.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
        const e = o(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), _.one(e, xi, t => {
            t.defaultPrevented || _.one(e, wi, () => {
                W(this) && this.focus()
            })
        });
        t = p.findOne(".modal.show");
        t && Ci.getInstance(t).hide();
        const i = Ci.getOrCreateInstance(e);
        i.toggle(this)
    }), ht(Ci), t(Ci);
    const Si = "offcanvas";
    Kt = ".bs.offcanvas";
    const Ai = {backdrop: !0, keyboard: !0, scroll: !1},
        Di = {backdrop: "boolean", keyboard: "boolean", scroll: "boolean"}, Li = ".offcanvas.show", Ni = "hidden" + Kt;

    class M extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get NAME() {
            return Si
        }

        static get Default() {
            return Ai
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || _.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new li).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                this._config.scroll || this._focustrap.activate(), _.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
            }, this._element, !0))
        }

        hide() {
            this._isShown && !_.trigger(this._element, "hide.bs.offcanvas").defaultPrevented && (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new li).reset(), _.trigger(this._element, Ni)
            }, this._element, !0))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _getConfig(t) {
            return t = {...Ai, ...h.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, i(Si, t, Di), t
        }

        _initializeBackDrop() {
            return new ui({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }

        _initializeFocusTrap() {
            return new vi({trapElement: this._element})
        }

        _addEventListeners() {
            _.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            })
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = M.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    _.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
        var e = o(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
            _.one(e, Ni, () => {
                W(this) && this.focus()
            });
            t = p.findOne(Li);
            t && t !== e && M.getInstance(t).hide();
            const i = M.getOrCreateInstance(e);
            i.toggle(this)
        }
    }), _.on(window, "load.bs.offcanvas.data-api", () => p.find(Li).forEach(t => M.getOrCreateInstance(t).show())), ht(M), t(M);
    const Mi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
    const Pi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        zi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    Gt = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };

    function ji(t, i, e) {
        if (!t.length) return t;
        if (e && "function" == typeof e) return e(t);
        const s = new window.DOMParser, n = s.parseFromString(t, "text/html");
        var o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, e = o.length; t < e; t++) {
            const a = o[t];
            var r = a.nodeName.toLowerCase();
            if (Object.keys(i).includes(r)) {
                const l = [].concat(...a.attributes), c = [].concat(i["*"] || [], i[r] || []);
                l.forEach(t => {
                    ((t, e) => {
                        var i = t.nodeName.toLowerCase();
                        if (e.includes(i)) return !Mi.has(i) || Boolean(Pi.test(t.nodeValue) || zi.test(t.nodeValue));
                        const s = e.filter(t => t instanceof RegExp);
                        for (let t = 0, e = s.length; t < e; t++) if (s[t].test(i)) return !0;
                        return !1
                    })(t, c) || a.removeAttribute(t.nodeName)
                })
            } else a.remove()
        }
        return n.body.innerHTML
    }

    const Hi = "tooltip";
    x = ".bs.tooltip";
    const Fi = new Set(["sanitize", "allowList", "sanitizeFn"]), Wi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        }, Ri = {AUTO: "auto", TOP: "top", RIGHT: n() ? "left" : "right", BOTTOM: "bottom", LEFT: n() ? "right" : "left"},
        Bi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: Gt,
            popperConfig: null
        }, Vi = {
            HIDE: "hide" + x,
            HIDDEN: "hidden" + x,
            SHOW: "show" + x,
            SHOWN: "shown" + x,
            INSERTED: "inserted" + x,
            CLICK: "click" + x,
            FOCUSIN: "focusin" + x,
            FOCUSOUT: "focusout" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x
        }, Ui = "fade";
    const qi = "show", Ki = "show", Gi = ".tooltip-inner", Xi = "hide.bs.modal", Qi = "hover", Yi = "focus";

    class Zi extends e {
        constructor(t, e) {
            if (void 0 === Be) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }

        static get Default() {
            return Bi
        }

        static get NAME() {
            return Hi
        }

        static get Event() {
            return Vi
        }

        static get DefaultType() {
            return Wi
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle(t) {
            if (this._isEnabled) if (t) {
                const e = this._initializeOnDelegatedTarget(t);
                e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
            } else this.getTipElement().classList.contains(qi) ? this._leave(null, this) : this._enter(null, this)
        }

        dispose() {
            clearTimeout(this._timeout), _.off(this._element.closest(".modal"), Xi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var t = _.trigger(this._element, this.constructor.Event.SHOW);
                const i = R(this._element);
                var e = (null === i ? this._element.ownerDocument.documentElement : i).contains(this._element);
                if (!t.defaultPrevented && e) {
                    "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Gi).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                    const s = this.getTipElement();
                    t = (t => {
                        for (; t += Math.floor(1e6 * Math.random()), document.getElementById(t);) ;
                        return t
                    })(this.constructor.NAME), e = (s.setAttribute("id", t), this._element.setAttribute("aria-describedby", t), this._config.animation && s.classList.add(Ui), "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement), t = this._getAttachment(e);
                    this._addAttachmentClass(t);
                    const n = this._config["container"],
                        o = (ct.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s), _.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Re(this._element, s, this._getPopperConfig(t)), s.classList.add(qi), this._resolvePossibleFunction(this._config.customClass));
                    o && s.classList.add(...o.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                        _.on(t, "mouseover", B)
                    });
                    e = this.tip.classList.contains(Ui);
                    this._queueCallback(() => {
                        var t = this._hoverState;
                        this._hoverState = null, _.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
                    }, this.tip, e)
                }
            }
        }

        hide() {
            if (this._popper) {
                const e = this.getTipElement();
                var t;
                _.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (e.classList.remove(qi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => _.off(t, "mouseover", B)), this._activeTrigger.click = !1, this._activeTrigger[Yi] = !1, this._activeTrigger[Qi] = !1, t = this.tip.classList.contains(Ui), this._queueCallback(() => {
                    this._isWithActiveTrigger() || (this._hoverState !== Ki && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), _.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                }, this.tip, t), this._hoverState = "")
            }
        }

        update() {
            null !== this._popper && this._popper.update()
        }

        isWithContent() {
            return Boolean(this.getTitle())
        }

        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div"), e = (t.innerHTML = this._config.template, t.children[0]);
            return this.setContent(e), e.classList.remove(Ui, qi), this.tip = e, this.tip
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Gi)
        }

        _sanitizeAndSetContent(t, e, i) {
            const s = p.findOne(i, t);
            !e && s ? s.remove() : this.setElementContent(s, e)
        }

        setElementContent(t, e) {
            if (null !== t) return r(e) ? (e = s(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = ji(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }

        getTitle() {
            var t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }

        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }

        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _getOffset() {
            const e = this._config["offset"];
            return "string" == typeof e ? e.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }

        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }

        _getPopperConfig(t) {
            t = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
        }

        _addAttachmentClass(t) {
            this.getTipElement().classList.add(this._getBasicClassPrefix() + "-" + this.updateAttachment(t))
        }

        _getAttachment(t) {
            return Ri[t.toUpperCase()]
        }

        _setListeners() {
            const t = this._config.trigger.split(" ");
            t.forEach(t => {
                var e;
                "click" === t ? _.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t)) : "manual" !== t && (e = t === Qi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, t = t === Qi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT, _.on(this._element, e, this._config.selector, t => this._enter(t)), _.on(this._element, t, this._config.selector, t => this._leave(t)))
            }), this._hideModalHandler = () => {
                this._element && this.hide()
            }, _.on(this._element.closest(".modal"), Xi, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }

        _fixTitle() {
            var t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            !t && "string" == e || (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }

        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? Yi : Qi] = !0), e.getTipElement().classList.contains(qi) || e._hoverState === Ki ? e._hoverState = Ki : (clearTimeout(e._timeout), e._hoverState = Ki, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                e._hoverState === Ki && e.show()
            }, e._config.delay.show) : e.show())
        }

        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? Yi : Qi] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide()
            }, e._config.delay.hide) : e.hide())
        }

        _isWithActiveTrigger() {
            for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1
        }

        _getConfig(t) {
            const e = h.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                Fi.has(t) && delete e[t]
            }), (t = {...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {}}).container = !1 === t.container ? document.body : s(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), i(Hi, t, this.constructor.DefaultType), t.sanitize && (t.template = ji(t.template, t.allowList, t.sanitizeFn)), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }

        _cleanTipClass() {
            const e = this.getTipElement();
            var t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g");
            const i = e.getAttribute("class").match(t);
            null !== i && 0 < i.length && i.map(t => t.trim()).forEach(t => e.classList.remove(t))
        }

        _getBasicClassPrefix() {
            return "bs-tooltip"
        }

        _handlePopperPlacementChange(t) {
            t = t.state;
            t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = Zi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    t(Zi);
    T = ".bs.popover";
    const Ji = {
        ...Zi.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, ts = {...Zi.DefaultType, content: "(string|element|function)"}, es = {
        HIDE: "hide" + T,
        HIDDEN: "hidden" + T,
        SHOW: "show" + T,
        SHOWN: "shown" + T,
        INSERTED: "inserted" + T,
        CLICK: "click" + T,
        FOCUSIN: "focusin" + T,
        FOCUSOUT: "focusout" + T,
        MOUSEENTER: "mouseenter" + T,
        MOUSELEAVE: "mouseleave" + T
    };

    class is extends Zi {
        static get Default() {
            return Ji
        }

        static get NAME() {
            return "popover"
        }

        static get Event() {
            return es
        }

        static get DefaultType() {
            return ts
        }

        isWithContent() {
            return this.getTitle() || this._getContent()
        }

        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        _getBasicClassPrefix() {
            return "bs-popover"
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = is.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    t(is);
    const ss = "scrollspy";
    const ns = ".bs.scrollspy";
    const os = {offset: 10, method: "auto", target: ""},
        rs = {offset: "number", method: "string", target: "(string|element)"};
    ns, ns;
    ns;
    const as = "dropdown-item", ls = "active", cs = ".nav-link", hs = ".list-group-item", ds = cs + `, ${hs}, .` + as,
        ps = "position";

    class us extends e {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, _.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
        }

        static get Default() {
            return os
        }

        static get NAME() {
            return ss
        }

        refresh() {
            var t = this._scrollElement === this._scrollElement.window ? "offset" : ps;
            const s = "auto" === this._config.method ? t : this._config.method, n = s === ps ? this._getScrollTop() : 0,
                e = (this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), p.find(ds, this._config.target));
            e.map(t => {
                t = H(t);
                const e = t ? p.findOne(t) : null;
                if (e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [h[s](e).top + n, t]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }

        dispose() {
            _.off(this._scrollElement, ns), super.dispose()
        }

        _getConfig(t) {
            return (t = {...os, ...h.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}).target = s(t.target) || document.documentElement, i(ss, t, rs), t
        }

        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }

        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }

        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }

        _process() {
            var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                i = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), i <= e) return t = this._targets[this._targets.length - 1], void (this._activeTarget !== t && this._activate(t));
            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
            for (let t = this._offsets.length; t--;) this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
        }

        _activate(e) {
            this._activeTarget = e, this._clear();
            const t = ds.split(",").map(t => t + `[data-bs-target="${e}"],${t}[href="${e}"]`),
                i = p.findOne(t.join(","), this._config.target);
            i.classList.add(ls), i.classList.contains(as) ? p.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(ls) : p.parents(i, ".nav, .list-group").forEach(t => {
                p.prev(t, cs + ", " + hs).forEach(t => t.classList.add(ls)), p.prev(t, ".nav-item").forEach(t => {
                    p.children(t, cs).forEach(t => t.classList.add(ls))
                })
            }), _.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: e})
        }

        _clear() {
            p.find(ds, this._config.target).filter(t => t.classList.contains(ls)).forEach(t => t.classList.remove(ls))
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = us.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    _.on(window, "load.bs.scrollspy.data-api", () => {
        p.find('[data-bs-spy="scroll"]').forEach(t => new us(t))
    }), t(us);
    const fs = "active", ms = ".active", gs = ":scope > li > .active";

    class _s extends e {
        static get NAME() {
            return "tab"
        }

        show() {
            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(fs)) {
                let t;
                var e = o(this._element), i = this._element.closest(".nav, .list-group"),
                    s = (i && (s = "UL" === i.nodeName || "OL" === i.nodeName ? gs : ms, t = (t = p.find(s, i))[t.length - 1]), t ? _.trigger(t, "hide.bs.tab", {relatedTarget: this._element}) : null);
                _.trigger(this._element, "show.bs.tab", {relatedTarget: t}).defaultPrevented || null !== s && s.defaultPrevented || (this._activate(this._element, i), s = () => {
                    _.trigger(t, "hidden.bs.tab", {relatedTarget: this._element}), _.trigger(this._element, "shown.bs.tab", {relatedTarget: t})
                }, e ? this._activate(e, e.parentNode, s) : s())
            }
        }

        _activate(t, e, i) {
            const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p.children(e, ms) : p.find(gs, e))[0];
            var e = i && s && s.classList.contains("fade"), n = () => this._transitionComplete(t, s, i);
            s && e ? (s.classList.remove("show"), this._queueCallback(n, t, !0)) : n()
        }

        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(fs);
                const n = p.findOne(":scope > .dropdown-menu .active", e.parentNode);
                n && n.classList.remove(fs), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(fs), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d(t), t.classList.contains("fade") && t.classList.add("show");
            let s = t.parentNode;
            (s = s && "LI" === s.nodeName ? s.parentNode : s) && s.classList.contains("dropdown-menu") && ((e = t.closest(".dropdown")) && p.find(".dropdown-toggle", e).forEach(t => t.classList.add(fs)), t.setAttribute("aria-expanded", !0)), i && i()
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = _s.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }

    _.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), !a(this)) {
            const e = _s.getOrCreateInstance(this);
            e.show()
        }
    }), t(_s);
    const vs = "show", bs = "showing", ys = {animation: "boolean", autohide: "boolean", delay: "number"},
        ws = {animation: !0, autohide: !0, delay: 5e3};

    class xs extends e {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get DefaultType() {
            return ys
        }

        static get Default() {
            return ws
        }

        static get NAME() {
            return "toast"
        }

        show() {
            _.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add(vs), this._element.classList.add(bs), this._queueCallback(() => {
                this._element.classList.remove(bs), _.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }

        hide() {
            this._element.classList.contains(vs) && !_.trigger(this._element, "hide.bs.toast").defaultPrevented && (this._element.classList.add(bs), this._queueCallback(() => {
                this._element.classList.add("hide"), this._element.classList.remove(bs), this._element.classList.remove(vs), _.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation))
        }

        dispose() {
            this._clearTimeout(), this._element.classList.contains(vs) && this._element.classList.remove(vs), super.dispose()
        }

        _getConfig(t) {
            return t = {...ws, ...h.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}, i("toast", t, this.constructor.DefaultType), t
        }

        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            e ? this._clearTimeout() : (t = t.relatedTarget, this._element === t || this._element.contains(t) || this._maybeScheduleHide())
        }

        _setListeners() {
            _.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), _.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), _.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), _.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(e) {
            return this.each(function () {
                const t = xs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }

    return ht(xs), t(xs), {
        Alert: dt,
        Button: ut,
        Carousel: v,
        Collapse: Nt,
        Dropdown: L,
        Modal: Ci,
        Offcanvas: M,
        Popover: is,
        ScrollSpy: us,
        Tab: _s,
        Toast: xs,
        Tooltip: Zi
    }
}), function (t, e) {
    void 0 === t && void 0 !== window && (t = window), "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
}(this, function (t) {
    !function ($) {
        "use strict";
        var P = ["sanitize", "whiteList", "sanitizeFn"],
            z = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], j = {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, H = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
            W = ["title", "placeholder"];

        function T(t, e, i) {
            if (i && "function" == typeof i) return i(t);
            for (var s = Object.keys(e), n = 0, o = t.length; n < o; n++) for (var r = t[n].querySelectorAll("*"), a = 0, l = r.length; a < l; a++) {
                var c = r[a], h = c.nodeName.toLowerCase();
                if (-1 === s.indexOf(h)) c.parentNode.removeChild(c); else for (var d = [].slice.call(c.attributes), p = [].concat(e["*"] || [], e[h] || []), u = 0, f = d.length; u < f; u++) {
                    var m = d[u];
                    !function (t, e) {
                        var i = t.nodeName.toLowerCase();
                        if (-1 !== $.inArray(i, e)) return -1 === $.inArray(i, z) || Boolean(t.nodeValue.match(H) || t.nodeValue.match(F));
                        for (var s = $(e).filter(function (t, e) {
                            return e instanceof RegExp
                        }), n = 0, o = s.length; n < o; n++) if (i.match(s[n])) return 1
                    }(m, p) && c.removeAttribute(m.nodeName)
                }
            }
        }

        function h(e) {
            var i, s = {};
            return W.forEach(function (t) {
                (i = e.attr(t)) && (s[t] = i)
            }), !s.placeholder && s.title && (s.placeholder = s.title), s
        }

        if (!("classList" in document.createElement("_")) && "Element" in (i = window)) {
            var e = "classList", t = "prototype", i = i.Element[t], s = Object, n = function () {
                var i = $(this);
                return {
                    add: function (t) {
                        return t = Array.prototype.slice.call(arguments).join(" "), i.addClass(t)
                    }, remove: function (t) {
                        return t = Array.prototype.slice.call(arguments).join(" "), i.removeClass(t)
                    }, toggle: function (t, e) {
                        return i.toggleClass(t, e)
                    }, contains: function (t) {
                        return i.hasClass(t)
                    }
                }
            };
            if (s.defineProperty) {
                var o = {get: n, enumerable: !0, configurable: !0};
                try {
                    s.defineProperty(i, e, o)
                } catch (t) {
                    void 0 !== t.number && -2146823252 !== t.number || (o.enumerable = !1, s.defineProperty(i, e, o))
                }
            } else s[t].__defineGetter__ && i.__defineGetter__(e, n)
        }
        var r, a, l, c, o = document.createElement("_");

        function d(t) {
            if (null == this) throw new TypeError;
            var e = String(this);
            if (t && "[object RegExp]" == c.call(t)) throw new TypeError;
            var i = e.length, s = String(t), n = s.length, t = 1 < arguments.length ? arguments[1] : void 0,
                t = t ? Number(t) : 0, o = (t != t && (t = 0), Math.min(Math.max(t, 0), i));
            if (i < n + o) return !1;
            for (var r = -1; ++r < n;) if (e.charCodeAt(o + r) != s.charCodeAt(r)) return !1;
            return !0
        }

        function x() {
            var t = this.selectpicker.main.data,
                e = (t = this.options.source.data || this.options.source.search ? Object.values(this.selectpicker.optionValuesDataMap) : t).filter(function (t) {
                    return !!t.selected && (!this.options.hideDisabled || !t.disabled)
                }, this);
            if (this.options.source.data && !this.multiple && 1 < e.length) {
                for (var i = 0; i < e.length - 1; i++) e[i].selected = !1;
                e = [e[e.length - 1]]
            }
            return e
        }

        function k(t) {
            for (var e, i = [], s = t || x.call(this), n = 0, o = s.length; n < o; n++) (e = s[n]).disabled || i.push(void 0 === e.value ? e.text : e.value);
            return this.multiple ? i : i.length ? i[0] : null
        }

        o.classList.add("c1", "c2"), o.classList.contains("c2") || (r = DOMTokenList.prototype.add, a = DOMTokenList.prototype.remove, DOMTokenList.prototype.add = function () {
            Array.prototype.forEach.call(arguments, r.bind(this))
        }, DOMTokenList.prototype.remove = function () {
            Array.prototype.forEach.call(arguments, a.bind(this))
        }), o.classList.toggle("c3", !1), o.classList.contains("c3") && (l = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (t, e) {
            return 1 in arguments && !this.contains(t) == !e ? e : l.call(this, t)
        }), o = null, Object.values = "function" == typeof Object.values ? Object.values : function (e) {
            return Object.keys(e).map(function (t) {
                return e[t]
            })
        }, String.prototype.startsWith || (c = {}.toString, Object.defineProperty ? Object.defineProperty(String.prototype, "startsWith", {
            value: d,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = d);
        var p = {useDefault: !1, _set: $.valHooks.select.set}, E = ($.valHooks.select.set = function (t, e) {
            return e && !p.useDefault && $(t).data("selected", !0), p._set.apply(this, arguments)
        }, null), R = function () {
            try {
                return new Event("change"), !0
            } catch (t) {
                return !1
            }
        }();

        function v(t, e, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
                var a = n[r], l = t[a];
                if (l && (l = l.toString(), "display" === a && (l = l.replace(/<[^>]+>/g, "")), l = (l = s ? u(l) : l).toUpperCase(), o = "function" == typeof i ? i(l, e) : "contains" === i ? 0 <= l.indexOf(e) : l.startsWith(e))) break
            }
            return o
        }

        function g(t) {
            return parseInt(t, 10) || 0
        }

        $.fn.triggerNative = function (t) {
            var e, i = this[0];
            i.dispatchEvent && (R ? e = new Event(t, {bubbles: !0}) : (e = document.createEvent("Event")).initEvent(t, !0, !1), i.dispatchEvent(e))
        };
        var B = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }, V = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            U = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function q(t) {
            return B[t]
        }

        function u(t) {
            return (t = t.toString()) && t.replace(V, q).replace(U, "")
        }

        f = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, s = "(?:" + Object.keys(f).join("|") + ")", K = RegExp(s), G = RegExp(s, "g");
        var f, K, G, y = function (t) {
            return K.test(t = null == t ? "" : "" + t) ? t.replace(G, X) : t
        };

        function X(t) {
            return f[t]
        }

        var Q = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
        }, Y = 27, Z = 13, b = 32, w = 9, I = 38, O = 40, m = window.Dropdown || bootstrap.Dropdown;

        function J() {
            var e;
            try {
                e = $.fn.dropdown.Constructor.VERSION
            } catch (t) {
                e = m.VERSION
            }
            return e
        }

        var _ = {success: !1, major: "3"};
        try {
            _.full = (J() || "").split(" ")[0].split("."), _.major = _.full[0], _.success = !0
        } catch (t) {
        }
        var tt = 0, C = ".bs.select", S = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title",
                ICONBASE: "glyphicon",
                TICKICON: "glyphicon-ok"
            }, A = {MENU: "." + S.MENU, DATA_TOGGLE: 'data-toggle="dropdown"'}, D = {
                div: document.createElement("div"),
                span: document.createElement("span"),
                i: document.createElement("i"),
                subtext: document.createElement("small"),
                a: document.createElement("a"),
                li: document.createElement("li"),
                whitespace: document.createTextNode(" "),
                fragment: document.createDocumentFragment(),
                option: document.createElement("option")
            },
            et = (D.selectedOption = D.option.cloneNode(!1), D.selectedOption.setAttribute("selected", !0), D.noResults = D.li.cloneNode(!1), D.noResults.className = "no-results", D.a.setAttribute("role", "option"), D.a.className = "dropdown-item", D.subtext.className = "text-muted", D.text = D.span.cloneNode(!1), D.text.className = "text", D.checkMark = D.span.cloneNode(!1), new RegExp(I + "|" + O)),
            it = new RegExp("^" + w + "$|" + Y), L = {
                li: function (t, e, i) {
                    var s = D.li.cloneNode(!1);
                    return t && (1 === t.nodeType || 11 === t.nodeType ? s.appendChild(t) : s.innerHTML = t), void 0 !== e && "" !== e && (s.className = e), null != i && s.classList.add("optgroup-" + i), s
                }, a: function (t, e, i) {
                    var s = D.a.cloneNode(!0);
                    return t && (11 === t.nodeType ? s.appendChild(t) : s.insertAdjacentHTML("beforeend", t)), void 0 !== e && "" !== e && s.classList.add.apply(s.classList, e.split(/\s+/)), i && s.setAttribute("style", i), s
                }, text: function (t, e) {
                    var i, s, n = D.text.cloneNode(!1);
                    if (t.content ? n.innerHTML = t.content : (n.textContent = t.text, t.icon && (i = D.whitespace.cloneNode(!1), (s = (!0 === e ? D.i : D.span).cloneNode(!1)).className = this.options.iconBase + " " + t.icon, D.fragment.appendChild(s), D.fragment.appendChild(i)), t.subtext && ((s = D.subtext.cloneNode(!1)).textContent = t.subtext, n.appendChild(s))), !0 === e) for (; 0 < n.childNodes.length;) D.fragment.appendChild(n.childNodes[0]); else D.fragment.appendChild(n);
                    return D.fragment
                }, label: function (t) {
                    var e, i, s = D.text.cloneNode(!1);
                    return s.innerHTML = t.display, t.icon && (e = D.whitespace.cloneNode(!1), (i = D.span.cloneNode(!1)).className = this.options.iconBase + " " + t.icon, D.fragment.appendChild(i), D.fragment.appendChild(e)), t.subtext && ((i = D.subtext.cloneNode(!1)).textContent = t.subtext, s.appendChild(i)), D.fragment.appendChild(s), D.fragment
                }
            }, N = {
                fromOption: function (t, e) {
                    var i;
                    switch (e) {
                        case"divider":
                            i = "true" === t.getAttribute("data-divider");
                            break;
                        case"text":
                            i = t.textContent;
                            break;
                        case"label":
                            i = t.label;
                            break;
                        case"style":
                            i = t.style.cssText;
                            break;
                        case"title":
                            i = t.title;
                            break;
                        default:
                            i = t.getAttribute("data-" + e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (t, e) {
                                return (e ? "-" : "") + t.toLowerCase()
                            }))
                    }
                    return i
                }, fromDataSource: function (t, e) {
                    var i;
                    switch (e) {
                        case"text":
                        case"label":
                            i = t.text || t.value || "";
                            break;
                        default:
                            i = t[e]
                    }
                    return i
                }
            };

        function st(t, e) {
            t.length || (D.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + y(e) + '"'), this.$menuInner[0].firstChild.appendChild(D.noResults))
        }

        function nt(t) {
            return !(t.hidden || this.options.hideDisabled && t.disabled)
        }

        function M(t, e) {
            var i = this;
            p.useDefault || ($.valHooks.select.set = p._set, p.useDefault = !0), this.$element = $(t), this.$newElement = null, this.$button = null, this.$menu = null, this.options = e, this.selectpicker = {
                main: {
                    data: [],
                    optionQueue: D.fragment.cloneNode(!1),
                    hasMore: !1
                },
                search: {data: [], hasMore: !1},
                current: {},
                view: {},
                optionValuesDataMap: {},
                isSearching: !1,
                keydown: {
                    keyHistory: "", resetKeyHistory: {
                        start: function () {
                            return setTimeout(function () {
                                i.selectpicker.keydown.keyHistory = ""
                            }, 800)
                        }
                    }
                }
            }, this.sizeInfo = {}, "number" == typeof (t = this.options.windowPadding) && (this.options.windowPadding = [t, t, t, t]), this.val = M.prototype.val, this.render = M.prototype.render, this.refresh = M.prototype.refresh, this.setStyle = M.prototype.setStyle, this.selectAll = M.prototype.selectAll, this.deselectAll = M.prototype.deselectAll, this.destroy = M.prototype.destroy, this.remove = M.prototype.remove, this.show = M.prototype.show, this.hide = M.prototype.hide, this.init()
        }

        function ot(t) {
            var a, l = arguments, c = t;
            if ([].shift.apply(l), !_.success) {
                try {
                    _.full = (J() || "").split(" ")[0].split(".")
                } catch (t) {
                    M.BootstrapVersion ? _.full = M.BootstrapVersion.split(" ")[0].split(".") : (_.full = [_.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", t))
                }
                _.major = _.full[0], _.success = !0
            }
            if ("4" <= _.major) {
                var e = [];
                M.DEFAULTS.style === S.BUTTONCLASS && e.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }), M.DEFAULTS.iconBase === S.ICONBASE && e.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }), M.DEFAULTS.tickIcon === S.TICKICON && e.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }), S.DIVIDER = "dropdown-divider", S.SHOW = "show", S.BUTTONCLASS = "btn-light", S.POPOVERHEADER = "popover-header", S.ICONBASE = "", S.TICKICON = "bs-ok-default";
                for (var i = 0; i < e.length; i++) {
                    t = e[i];
                    M.DEFAULTS[t.name] = S[t.className]
                }
            }
            "4" < _.major && (A.DATA_TOGGLE = 'data-bs-toggle="dropdown"');
            var s = this.each(function () {
                var t = $(this);
                if (t.is("select")) {
                    var e = t.data("selectpicker"), i = "object" == typeof c && c;
                    if (i.title && (i.placeholder = i.title), e) {
                        if (i) for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e.options[s] = i[s])
                    } else {
                        var n, o = t.data();
                        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && -1 !== $.inArray(n, P) && delete o[n];
                        var r = $.extend({}, M.DEFAULTS, $.fn.selectpicker.defaults || {}, h(t), o, i);
                        r.template = $.extend({}, M.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, o.template, i.template), r.source = $.extend({}, M.DEFAULTS.source, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.source : {}, i.source), t.data("selectpicker", e = new M(this, r))
                    }
                    "string" == typeof c && (a = e[c] instanceof Function ? e[c].apply(e, l) : e.options[c])
                }
            });
            return void 0 !== a ? a : s
        }

        M.VERSION = "1.14.0-beta3", M.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (t, e) {
                return 1 == t ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (t, e) {
                return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            source: {pageSize: 40},
            chunkSize: 40,
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: S.BUTTONCLASS,
            size: "auto",
            title: null,
            placeholder: null,
            allowClear: !1,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: S.ICONBASE,
            tickIcon: S.TICKICON,
            showTick: !1,
            template: {caret: '<span class="caret"></span>'},
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !0,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: j
        }, M.prototype = {
            constructor: M, init: function () {
                var i = this, t = this.$element.attr("id"), e = this.$element[0], s = e.form;
                tt++, this.selectId = "bs-select-" + tt, e.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), e.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), s && null === e.form && (s.id || (s.id = "form-" + this.selectId), e.setAttribute("form", s.id)), this.$button = this.$newElement.children("button"), this.options.allowClear && (this.$clearButton = this.$button.children(".bs-select-clear-selected")), this.$menu = this.$newElement.children(A.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), e.classList.remove("bs-select-hidden"), this.fetchData(function () {
                    i.render(!0), i.buildList(), requestAnimationFrame(function () {
                        i.$element.trigger("loaded" + C)
                    })
                }), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(S.MENURIGHT), void 0 !== t && this.$button.attr("data-id", t), this.checkDisabled(), this.clickListener(), 4 < _.major && (this.dropdown = new m(this.$button[0])), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + C, function () {
                    var t, e;
                    i.isVirtual() && (e = (t = i.$menuInner[0]).firstChild.cloneNode(!1), t.replaceChild(e, t.firstChild), t.scrollTop = 0)
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (t) {
                        i.$element.trigger("hide" + C, t)
                    }, "hidden.bs.dropdown": function (t) {
                        i.$element.trigger("hidden" + C, t)
                    }, "show.bs.dropdown": function (t) {
                        i.$element.trigger("show" + C, t)
                    }, "shown.bs.dropdown": function (t) {
                        i.$element.trigger("shown" + C, t)
                    }
                }), e.hasAttribute("required") && this.$element.on("invalid" + C, function () {
                    i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + C + ".invalid", function () {
                        i.$element.val(i.$element.val()).off("shown" + C + ".invalid")
                    }).on("rendered" + C, function () {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + C)
                    }), i.$button.on("blur" + C, function () {
                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + C)
                    })
                }), s && $(s).on("reset" + C, function () {
                    requestAnimationFrame(function () {
                        i.render()
                    })
                })
            }, createDropdown: function () {
                var t = this.multiple || this.options.showTick ? " show-tick" : "",
                    e = this.multiple ? ' aria-multiselectable="true"' : "", i = "",
                    s = this.autofocus ? " autofocus" : "";
                _.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
                var n = "", o = "", r = "", a = "", l = "";
                return this.options.header && (n = '<div class="' + S.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (o = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + y(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (r = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' + S.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + S.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' + S.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), this.options.allowClear && (l = '<span class="close bs-select-clear-selected" title="' + this.options.deselectAllText + '"><span>&times;</span>'), t = '<div class="dropdown bootstrap-select' + t + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + A.DATA_TOGGLE + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' + l + "</span>" + ("4" <= _.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + S.MENU + " " + ("4" <= _.major ? "" : S.SHOW) + '">' + n + o + r + '<div class="inner ' + S.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + e + '><ul class="' + S.MENU + " inner " + ("4" <= _.major ? S.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>", $(t)
            }, setPositionData: function () {
                this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1;
                for (var t = 0; t < this.selectpicker.current.data.length; t++) {
                    var e = this.selectpicker.current.data[t], i = !0;
                    "divider" === e.type ? (i = !1, e.height = this.sizeInfo.dividerHeight) : "optgroup-label" === e.type ? (i = !1, e.height = this.sizeInfo.dropdownHeaderHeight) : e.height = this.sizeInfo.liHeight, e.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, e.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = t)), e.position = (0 === t ? 0 : this.selectpicker.current.data[t - 1].position) + e.height
                }
            }, isVirtual: function () {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.data.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            }, createView: function (x, t, e) {
                var k = this, i = 0;

                function E(t, e) {
                    var i, s = k.selectpicker.current.data.length, n = [], o = !0, r = k.isVirtual();
                    k.selectpicker.view.scrollTop = t;
                    for (var a, l = k.options.chunkSize, c = Math.ceil(s / l) || 1, h = 0; h < c; h++) {
                        var d = h === c - 1 ? s : (h + 1) * l;
                        if (n[h] = [h * l + (h ? 1 : 0), d], !s) break;
                        void 0 === i && t - 1 <= k.selectpicker.current.data[d - 1].position - k.sizeInfo.menuInnerHeight && (i = h)
                    }
                    if (void 0 === i && (i = 0), _ = [k.selectpicker.view.position0, k.selectpicker.view.position1], p = Math.max(0, i - 1), f = Math.min(c - 1, i + 1), k.selectpicker.view.position0 = !1 !== r && Math.max(0, n[p][0]) || 0, k.selectpicker.view.position1 = !1 === r ? s : Math.min(s, n[f][1]) || 0, p = _[0] !== k.selectpicker.view.position0 || _[1] !== k.selectpicker.view.position1, void 0 !== k.activeElement && (e && (k.activeElement !== k.selectedElement && k.defocusItem(k.activeElement), k.activeElement = void 0), k.activeElement !== k.selectedElement && k.defocusItem(k.selectedElement)), void 0 !== k.prevActiveElement && k.prevActiveElement !== k.activeElement && k.prevActiveElement !== k.selectedElement && k.defocusItem(k.prevActiveElement), e || p || k.selectpicker.current.hasMore) {
                        if (f = k.selectpicker.view.visibleElements ? k.selectpicker.view.visibleElements.slice() : [], k.selectpicker.view.visibleElements = !1 === r ? k.selectpicker.current.elements : k.selectpicker.current.elements.slice(k.selectpicker.view.position0, k.selectpicker.view.position1), k.setOptionStatus(), (x || !1 === r && e) && (_ = f, a = k.selectpicker.view.visibleElements, o = !(_.length === a.length && _.every(function (t, e) {
                            return t === a[e]
                        }))), (e || !0 === r) && o) {
                            var p = k.$menuInner[0], u = document.createDocumentFragment(),
                                f = p.firstChild.cloneNode(!1), m = k.selectpicker.view.visibleElements, g = [];
                            p.replaceChild(f, p.firstChild);
                            for (var _, h = 0, v = m.length; h < v; h++) {
                                var b, y, w = m[h];
                                k.options.sanitize && (b = w.lastChild) && (y = k.selectpicker.current.data[h + k.selectpicker.view.position0]) && y.content && !y.sanitized && (g.push(b), y.sanitized = !0), u.appendChild(w)
                            }
                            k.options.sanitize && g.length && T(g, k.options.whiteList, k.options.sanitizeFn), !0 === r ? (_ = 0 === k.selectpicker.view.position0 ? 0 : k.selectpicker.current.data[k.selectpicker.view.position0 - 1].position, o = k.selectpicker.view.position1 > s - 1 ? 0 : k.selectpicker.current.data[s - 1].position - k.selectpicker.current.data[k.selectpicker.view.position1 - 1].position, p.firstChild.style.marginTop = _ + "px", p.firstChild.style.marginBottom = o + "px") : (p.firstChild.style.marginTop = 0, p.firstChild.style.marginBottom = 0), p.firstChild.appendChild(u), !0 === r && k.sizeInfo.hasScrollBar && (f = p.firstChild.offsetWidth, e && f < k.sizeInfo.menuInnerInnerWidth && k.sizeInfo.totalMenuWidth > k.sizeInfo.selectWidth ? p.firstChild.style.minWidth = k.sizeInfo.menuInnerInnerWidth + "px" : f > k.sizeInfo.menuInnerInnerWidth && (k.$menu[0].style.minWidth = 0, (_ = p.firstChild.offsetWidth) > k.sizeInfo.menuInnerInnerWidth && (k.sizeInfo.menuInnerInnerWidth = _, p.firstChild.style.minWidth = k.sizeInfo.menuInnerInnerWidth + "px"), k.$menu[0].style.minWidth = ""))
                        }
                        (!x && k.options.source.data || x && k.options.source.search) && k.selectpicker.current.hasMore && i === c - 1 && 0 < t && (o = Math.floor(i * k.options.chunkSize / k.options.source.pageSize) + 2, k.fetchData(function () {
                            k.render(), k.buildList(s, x), k.setPositionData(), E(t)
                        }, x ? "search" : "data", o, x ? k.selectpicker.search.previousValue : void 0))
                    }
                    k.prevActiveElement = k.activeElement, k.options.liveSearch ? x && e && (k.selectpicker.view.canHighlight[r = 0] || (r = 1 + k.selectpicker.view.canHighlight.slice(1).indexOf(!0)), f = k.selectpicker.view.visibleElements[r], k.defocusItem(k.selectpicker.view.currentActive), k.activeElement = (k.selectpicker.current.data[r] || {}).element, k.focusItem(f)) : k.$menuInner.trigger("focus")
                }

                this.selectpicker.isSearching = x, this.selectpicker.current = x ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), t && (e ? i = this.$menuInner[0].scrollTop : k.multiple || "number" == typeof (e = ((t = k.$element[0]).options[t.selectedIndex] || {}).liIndex) && !1 !== k.options.size && (e = (t = k.selectpicker.main.data[e]) && t.position) && (i = e - (k.sizeInfo.menuInnerHeight + k.sizeInfo.liHeight) / 2)), E(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (t, e) {
                    k.noScroll || E(this.scrollTop, e), k.noScroll = !1
                }), $(window).off("resize" + C + "." + this.selectId + ".createView").on("resize" + C + "." + this.selectId + ".createView", function () {
                    k.$newElement.hasClass(S.SHOW) && E(k.$menuInner[0].scrollTop)
                })
            }, focusItem: function (t, e, i) {
                var s;
                t && (e = e || this.selectpicker.current.data[this.selectpicker.current.elements.indexOf(this.activeElement)], (s = t.firstChild) && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", e.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), t.classList.add("active"), s.classList.add("active"))))
            }, defocusItem: function (t) {
                t && (t.classList.remove("active"), t.firstChild && t.firstChild.classList.remove("active"))
            }, setPlaceholder: function () {
                var t, e, i, s, n, o, r, a = this, l = !1;
                return !this.options.placeholder && !this.options.allowClear || this.multiple || (this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = this.$element[0], e = !(l = !0), i = !this.selectpicker.view.titleOption.parentNode, s = t.selectedIndex, n = t.options[s], o = (o = t.querySelector("select > *:not(:disabled)")) ? o.index : 0, r = (r = window.performance && window.performance.getEntriesByType("navigation")) && r.length ? "back_forward" !== r[0].type : 2 !== window.performance.navigation.type, i && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", e = !n || s === o && !1 === n.defaultSelected && void 0 === this.$element.data("selected")), !i && 0 === this.selectpicker.view.titleOption.index || t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), e && r ? t.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function () {
                    a.selectpicker.view.displayedValue !== t.value && a.render()
                })), l
            }, fetchData: function (n, o, t, e) {
                t = t || 1, o = o || "data";
                var r, a = this, i = this.options.source[o];
                i ? (this.options.virtualScroll = !0, "function" == typeof i ? i.call(this, function (t, e, i) {
                    var s = a.selectpicker["search" === o ? "search" : "main"];
                    s.hasMore = e, s.totalItems = i, r = a.buildData(t, o), n.call(a, r), a.$element.trigger("fetched" + C)
                }, t, e) : Array.isArray(i) && (r = a.buildData(i, o), n.call(a, r))) : (r = this.buildData(!1, o), n.call(a, r))
            }, buildData: function (d, t) {
                var o = this, p = !1 === d ? N.fromOption : N.fromDataSource,
                    u = ':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])', f = [],
                    r = this.selectpicker.main.data ? this.selectpicker.main.data.length : 0, m = 0,
                    g = this.setPlaceholder() && !d ? 1 : 0,
                    e = ("search" === t && (r = this.selectpicker.search.data.length), this.options.hideDisabled && (u += ":not(:disabled)"), d ? d.filter(nt, this) : this.$element[0].querySelectorAll("select > *" + u));

                function _(t) {
                    var e = f[f.length - 1];
                    e && "divider" === e.type && (e.optID || t.optID) || ((t = t || {}).type = "divider", f.push(t))
                }

                function v(t, e) {
                    var i, s, n;
                    (e = e || {}).divider = p(t, "divider"), !0 === e.divider ? _({optID: e.optID}) : (i = f.length + r, s = (s = p(t, "style")) ? y(s) : "", n = (t.className || "") + (e.optgroupClass || ""), e.optID && (n = "opt " + n), e.optionClass = n.trim(), e.inlineStyle = s, e.text = p(t, "text"), e.title = p(t, "title"), e.content = p(t, "content"), e.tokens = p(t, "tokens"), e.subtext = p(t, "subtext"), e.icon = p(t, "icon"), e.display = e.content || e.text, e.value = void 0 === t.value ? t.text : t.value, e.type = "option", e.index = i, e.option = t.option || t, e.option.liIndex = i, e.selected = !!t.selected, e.disabled = e.disabled || !!t.disabled, !1 !== d && (o.selectpicker.optionValuesDataMap[e.value] ? e = $.extend(o.selectpicker.optionValuesDataMap[e.value], e) : o.selectpicker.optionValuesDataMap[e.value] = e), f.push(e))
                }

                function i(t, e) {
                    var i = e[t], s = !(t - 1 < g) && e[t - 1], e = e[t + 1],
                        n = d ? i.children.filter(nt, this) : i.querySelectorAll("option" + u);
                    if (n.length) {
                        var o, r, a = {
                            display: y(p(b, "label")),
                            subtext: p(i, "subtext"),
                            icon: p(i, "icon"),
                            type: "optgroup-label",
                            optgroupClass: " " + (i.className || ""),
                            optgroup: i
                        };
                        m++, s && _({optID: m}), a.optID = m, f.push(a);
                        for (var l = 0, c = n.length; l < c; l++) {
                            var h = n[l];
                            0 === l && (r = (o = f.length - 1) + c), v(h, {
                                headerIndex: o,
                                lastIndex: r,
                                optID: a.optID,
                                optgroupClass: a.optgroupClass,
                                disabled: i.disabled
                            })
                        }
                        e && _({optID: m})
                    }
                }

                for (var s = e.length, n = g; n < s; n++) {
                    var b = e[n], a = b.children;
                    a && a.length ? i.call(this, n, e) : v.call(this, b, {})
                }
                switch (t) {
                    case"data":
                        this.selectpicker.main.data || (this.selectpicker.main.data = []), Array.prototype.push.apply(this.selectpicker.main.data, f), this.selectpicker.current.data = this.selectpicker.main.data;
                        break;
                    case"search":
                        Array.prototype.push.apply(this.selectpicker.search.data, f)
                }
                return f
            }, buildList: function (t, e) {
                var i = this, s = (e ? this.selectpicker.search : this.selectpicker.main).data, n = [], o = 0;
                !i.options.showTick && !i.multiple || D.checkMark.parentNode || (D.checkMark.className = this.options.iconBase + " " + i.options.tickIcon + " check-mark", D.a.appendChild(D.checkMark));
                for (var r = s.length, a = t || 0; a < r; a++) {
                    var l, c = s[a], h = (p = l = d = h = void 0, n), d = c, p = 0;
                    switch (d.type) {
                        case"divider":
                            l = L.li(!1, S.DIVIDER, d.optID ? d.optID + "div" : void 0);
                            break;
                        case"option":
                            (l = L.li(L.a(L.text.call(i, d), d.optionClass, d.inlineStyle), "", d.optID)).firstChild && (l.firstChild.id = i.selectId + "-" + d.index);
                            break;
                        case"optgroup-label":
                            l = L.li(L.label.call(i, d), "dropdown-header" + d.optgroupClass, d.optID)
                    }
                    d.element ? d.element.innerHTML = l.innerHTML : d.element = l, h.push(d.element), d.display && (p += d.display.length), d.subtext && (p += d.subtext.length), d.icon && (p += 1), o < p && (o = p, i.selectpicker.view.widestOption = h[h.length - 1])
                }
                t ? e ? Array.prototype.push.apply(this.selectpicker.search.elements, n) : (Array.prototype.push.apply(this.selectpicker.main.elements, n), this.selectpicker.current.elements = this.selectpicker.main.elements) : e ? this.selectpicker.search.elements = n : this.selectpicker.main.elements = this.selectpicker.current.elements = n
            }, findLis: function () {
                return this.$menuInner.find(".inner > li")
            }, render: function (t) {
                var i = this, e = this.$element[0], s = this.setPlaceholder() && 0 === e.selectedIndex,
                    n = x.call(this), o = n.length, r = k.call(this, n), a = this.$button[0],
                    l = a.querySelector(".filter-option-inner-inner"),
                    c = document.createTextNode(this.options.multipleSeparator), h = D.fragment.cloneNode(!1), d = !1;
                if (this.options.source.data && t && (n.map(function t(e) {
                    e.selected ? i.createOption(e, !0) : e.children && e.children.length && e.children.map(t)
                }), e.appendChild(this.selectpicker.main.optionQueue), s = s && 0 === e.selectedIndex), a.classList.toggle("bs-placeholder", i.multiple ? !o : !r && 0 !== r), i.multiple || 1 !== n.length || (i.selectpicker.view.displayedValue = r), "static" === this.options.selectedTextFormat) h = L.text.call(this, {text: this.options.placeholder}, !0); else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 0 < o && (1 < (t = this.options.selectedTextFormat.split(">")).length && o > t[1] || 1 === t.length && 2 <= o))) {
                    if (!s) {
                        for (var p = 0; p < o && p < 50; p++) {
                            var u = n[p], f = {};
                            u && (this.multiple && 0 < p && h.appendChild(c.cloneNode(!1)), u.title ? f.text = u.title : u.content && i.options.showContent ? (f.content = u.content.toString(), d = !0) : (i.options.showIcon && (f.icon = u.icon), i.options.showSubtext && !i.multiple && u.subtext && (f.subtext = " " + u.subtext), f.text = u.text.trim()), h.appendChild(L.text.call(this, f, !0)))
                        }
                        49 < o && h.appendChild(document.createTextNode("..."))
                    }
                } else var e = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])',
                    r = (this.options.hideDisabled && (e += ":not(:disabled)"), this.$element[0].querySelectorAll("select > option" + e + ", optgroup" + e + " option" + e).length),
                    t = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, r) : this.options.countSelectedText,
                    h = L.text.call(this, {text: t.replace("{0}", o.toString()).replace("{1}", r.toString())}, !0);
                h.childNodes.length || (h = L.text.call(this, {text: this.options.placeholder || this.options.noneSelectedText}, !0)), a.title = h.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && d && T([h], i.options.whiteList, i.options.sanitizeFn), l.innerHTML = "", l.appendChild(h), _.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon") && (s = a.querySelector(".filter-expand"), (e = l.cloneNode(!0)).className = "filter-expand", s ? a.replaceChild(e, s) : a.appendChild(e)), this.$element.trigger("rendered" + C)
            }, setStyle: function (t, e) {
                var i = this.$button[0], s = this.$newElement[0], n = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), _.major < 4 && (s.classList.add("bs3"), s.parentNode.classList && s.parentNode.classList.contains("input-group") && (s.previousElementSibling || s.nextElementSibling) && (s.previousElementSibling || s.nextElementSibling).classList.contains("input-group-addon") && s.classList.add("bs3-has-addon")), s = t ? t.trim() : n, "add" == e ? s && i.classList.add.apply(i.classList, s.split(" ")) : "remove" == e ? s && i.classList.remove.apply(i.classList, s.split(" ")) : (n && i.classList.remove.apply(i.classList, n.split(" ")), s && i.classList.add.apply(i.classList, s.split(" ")))
            }, liHeight: function (t) {
                if (t || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
                    var e, t = D.div.cloneNode(!1), i = D.div.cloneNode(!1), s = D.div.cloneNode(!1),
                        n = document.createElement("ul"), o = D.li.cloneNode(!1), r = D.li.cloneNode(!1),
                        a = D.a.cloneNode(!1), l = D.span.cloneNode(!1),
                        c = this.options.header && 0 < this.$menu.find("." + S.POPOVERHEADER).length ? this.$menu.find("." + S.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? D.div.cloneNode(!1) : null,
                        d = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        u = this.$element[0].options[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, l.className = "text", a.className = "dropdown-item " + (u ? u.className : ""), t.className = this.$menu[0].parentNode.className + " " + S.SHOW, t.style.width = 0, "auto" === this.options.width && (i.style.minWidth = 0), i.className = S.MENU + " " + S.SHOW, s.className = "inner " + S.SHOW, n.className = S.MENU + " inner " + ("4" <= _.major ? S.SHOW : ""), o.className = S.DIVIDER, r.className = "dropdown-header", l.appendChild(document.createTextNode("​")), this.selectpicker.current.data.length) for (var f = 0; f < this.selectpicker.current.data.length; f++) {
                        var m = this.selectpicker.current.data[f];
                        if ("option" === m.type && "none" !== $(m.element.firstChild).css("display")) {
                            e = m.element;
                            break
                        }
                    } else e = D.li.cloneNode(!1), a.appendChild(l), e.appendChild(a);
                    r.appendChild(l.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(e), n.appendChild(o), n.appendChild(r), c && i.appendChild(c), h && (u = document.createElement("input"), h.className = "bs-searchbox", u.className = "form-control", h.appendChild(u), i.appendChild(h)), d && i.appendChild(d), s.appendChild(n), i.appendChild(s), p && i.appendChild(p), t.appendChild(i), document.body.appendChild(t);
                    a = e.offsetHeight, l = r ? r.offsetHeight : 0, u = c ? c.offsetHeight : 0, n = h ? h.offsetHeight : 0, r = d ? d.offsetHeight : 0, c = p ? p.offsetHeight : 0, h = $(o).outerHeight(!0), d = window.getComputedStyle(i), p = i.offsetWidth, o = {
                        vert: g(d.paddingTop) + g(d.paddingBottom) + g(d.borderTopWidth) + g(d.borderBottomWidth),
                        horiz: g(d.paddingLeft) + g(d.paddingRight) + g(d.borderLeftWidth) + g(d.borderRightWidth)
                    }, d = {
                        vert: o.vert + g(d.marginTop) + g(d.marginBottom) + 2,
                        horiz: o.horiz + g(d.marginLeft) + g(d.marginRight) + 2
                    };
                    s.style.overflowY = "scroll", s = i.offsetWidth - p, document.body.removeChild(t), this.sizeInfo.liHeight = a, this.sizeInfo.dropdownHeaderHeight = l, this.sizeInfo.headerHeight = u, this.sizeInfo.searchHeight = n, this.sizeInfo.actionsHeight = r, this.sizeInfo.doneButtonHeight = c, this.sizeInfo.dividerHeight = h, this.sizeInfo.menuPadding = o, this.sizeInfo.menuExtras = d, this.sizeInfo.menuWidth = p, this.sizeInfo.menuInnerInnerWidth = p - o.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = s, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            }, getSelectPosition: function () {
                var t, e = $(window), i = this.$newElement.offset(), s = $(this.options.container),
                    s = (this.options.container && s.length && !s.is("body") ? ((t = s.offset()).top += parseInt(s.css("borderTopWidth")), t.left += parseInt(s.css("borderLeftWidth"))) : t = {
                        top: 0,
                        left: 0
                    }, this.options.windowPadding);
                this.sizeInfo.selectOffsetTop = i.top - t.top - e.scrollTop(), this.sizeInfo.selectOffsetBot = e.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - s[2], this.sizeInfo.selectOffsetLeft = i.left - t.left - e.scrollLeft(), this.sizeInfo.selectOffsetRight = e.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - s[1], this.sizeInfo.selectOffsetTop -= s[0], this.sizeInfo.selectOffsetLeft -= s[3]
            }, setMenuSize: function (t) {
                this.getSelectPosition();
                var e, i, s, n, o, r, a = this.sizeInfo.selectWidth, l = this.sizeInfo.liHeight,
                    c = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, d = this.sizeInfo.actionsHeight,
                    p = this.sizeInfo.doneButtonHeight, u = this.sizeInfo.dividerHeight, f = this.sizeInfo.menuPadding,
                    m = 0;
                if (this.options.dropupAuto && (r = l * this.selectpicker.current.data.length + f.vert, r = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (r = this.selectpicker.dropup), this.$newElement.toggleClass(S.DROPUP, r), this.selectpicker.dropup = r), "auto" === this.options.size) r = 3 < this.selectpicker.current.data.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = r + c + h + d + p, o = Math.max(r - f.vert, 0), e = (n = i = this.$newElement.hasClass(S.DROPUP) ? this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert : i) - c - h - d - p - f.vert; else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && m++;
                    e = (i = l * this.options.size + m * u + f.vert) - f.vert, n = i + c + h + d + p, s = o = ""
                }
                this.$menu.css({
                    "max-height": n + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": e + "px",
                    overflow: "hidden auto",
                    "min-height": o + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(e, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(S.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            }, setSize: function (t) {
                var e, i;
                this.liHeight(t), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size && (e = this, i = $(window), this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () {
                    return e.setMenuSize()
                }), "auto" === this.options.size ? i.off("resize" + C + "." + this.selectId + ".setMenuSize scroll" + C + "." + this.selectId + ".setMenuSize").on("resize" + C + "." + this.selectId + ".setMenuSize scroll" + C + "." + this.selectId + ".setMenuSize", function () {
                    return e.setMenuSize()
                }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + C + "." + this.selectId + ".setMenuSize scroll" + C + "." + this.selectId + ".setMenuSize")), this.createView(!1, !0, t)
            }, setWidth: function () {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function () {
                    i.$menu.css("min-width", "0"), i.$element.on("loaded" + C, function () {
                        i.liHeight(), i.setMenuSize();
                        var t = i.$newElement.clone().appendTo("body"),
                            e = t.css("width", "auto").children("button").outerWidth();
                        t.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, e), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            }, selectPosition: function () {
                this.$bsContainer = $('<div class="bs-container" />');

                function t(t) {
                    var e = {},
                        i = r.options.display || !!$.fn.dropdown.Constructor.Default && $.fn.dropdown.Constructor.Default.display;
                    r.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(S.DROPUP, t.hasClass(S.DROPUP)), s = t.offset(), a.is("body") ? n = {
                        top: 0,
                        left: 0
                    } : ((n = a.offset()).top += parseInt(a.css("borderTopWidth")) - a.scrollTop(), n.left += parseInt(a.css("borderLeftWidth")) - a.scrollLeft()), o = t.hasClass(S.DROPUP) ? 0 : t[0].offsetHeight, (_.major < 4 || "static" === i) && (e.top = s.top - n.top + o, e.left = s.left - n.left), e.width = t[0].offsetWidth, r.$bsContainer.css(e)
                }

                var s, n, o, r = this, a = $(this.options.container);
                this.$button.on("click.bs.dropdown.data-api", function () {
                    r.isDisabled() || (t(r.$newElement), r.$bsContainer.appendTo(r.options.container).toggleClass(S.SHOW, !r.$button.hasClass(S.SHOW)).append(r.$menu))
                }), $(window).off("resize" + C + "." + this.selectId + " scroll" + C + "." + this.selectId).on("resize" + C + "." + this.selectId + " scroll" + C + "." + this.selectId, function () {
                    r.$newElement.hasClass(S.SHOW) && t(r.$newElement)
                }), this.$element.on("hide" + C, function () {
                    r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach()
                })
            }, createOption: function (t, e) {
                var i, s = t.option || t;
                s && 1 !== s.nodeType && (i = (e ? D.selectedOption : D.option).cloneNode(!0), void 0 !== s.value && (i.value = s.value), i.textContent = s.text, i.selected = !0, void 0 !== s.liIndex ? i.liIndex = s.liIndex : e || (i.liIndex = t.index), t.option = i, this.selectpicker.main.optionQueue.appendChild(i))
            }, setOptionStatus: function (t) {
                var e = this;
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length) {
                    for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                        var s = e.selectpicker.current.data[i + e.selectpicker.view.position0];
                        s.option && (!0 !== t && e.setDisabled(s), e.setSelected(s))
                    }
                    this.options.source.data && this.$element[0].appendChild(this.selectpicker.main.optionQueue)
                }
            }, setSelected: function (t, e) {
                e = void 0 === e ? t.selected : e;
                var i, s = t.element, n = void 0 !== this.activeElement,
                    o = this.activeElement === s || e && !this.multiple && !n;
                s && (void 0 !== e && (t.selected = e, t.option && (t.option.selected = e)), e && this.options.source.data && this.createOption(t, !1), i = s.firstChild, e && (this.selectedElement = s), s.classList.toggle("selected", e), o ? (this.focusItem(s, t), this.selectpicker.view.currentActive = s, this.activeElement = s) : this.defocusItem(s), i && (i.classList.toggle("selected", e), e ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")), o || n || !e || void 0 === this.prevActiveElement || (t = this.prevActiveElement, this.defocusItem(t)))
            }, setDisabled: function (t) {
                var e, i = t.disabled, t = t.element;
                t && (e = t.firstChild, t.classList.toggle(S.DISABLED, i), e && ("4" <= _.major && e.classList.toggle(S.DISABLED, i), i ? (e.setAttribute("aria-disabled", i), e.setAttribute("tabindex", -1)) : (e.removeAttribute("aria-disabled"), e.setAttribute("tabindex", 0))))
            }, isDisabled: function () {
                return this.$element[0].disabled
            }, checkDisabled: function () {
                this.isDisabled() ? (this.$newElement[0].classList.add(S.DISABLED), this.$button.addClass(S.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(S.DISABLED) && (this.$newElement[0].classList.remove(S.DISABLED), this.$button.removeClass(S.DISABLED).attr("aria-disabled", !1))
            }, clickListener: function () {
                var w = this, e = $(document);

                function t() {
                    (w.options.liveSearch ? w.$searchbox : w.$menuInner).trigger("focus")
                }

                function i() {
                    w.dropdown && w.dropdown._popper && w.dropdown._popper.state ? t() : requestAnimationFrame(i)
                }

                e.data("spaceSelect", !1), this.$button.on("keyup", function (t) {
                    /(32)/.test(t.keyCode.toString(10)) && e.data("spaceSelect") && (t.preventDefault(), e.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function () {
                    w.dropdown || "4" !== _.major || (w.dropdown = w.$button.data("bs.dropdown"), w.dropdown._menu = w.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function (t) {
                    var e, i, s;
                    w.options.allowClear && (e = t.target, i = w.$clearButton[0], (e = /MSIE|Trident/.test(window.navigator.userAgent) ? document.elementFromPoint(t.clientX, t.clientY) : e) !== i && e.parentElement !== i || (t.stopImmediatePropagation(), w.multiple ? w.deselectAll() : (i = (e = w.$element[0]).value, t = e.selectedIndex, (s = !!(s = e.options[t]) && w.selectpicker.main.data[s.liIndex]) && w.setSelected(s, !1), e.selectedIndex = 0, E = [t, !1, i], w.$element.triggerNative("change")), w.$newElement.hasClass(S.SHOW) && (w.options.liveSearch && w.$searchbox.trigger("focus"), w.createView(!1)))), w.$newElement.hasClass(S.SHOW) || w.setSize()
                }), this.$element.on("shown" + C, function () {
                    w.$menuInner[0].scrollTop !== w.selectpicker.view.scrollTop && (w.$menuInner[0].scrollTop = w.selectpicker.view.scrollTop), 3 < _.major ? requestAnimationFrame(i) : t()
                }), this.$menuInner.on("mouseenter", "li a", function (t) {
                    var e = this.parentElement, i = w.isVirtual() ? w.selectpicker.view.position0 : 0,
                        s = Array.prototype.indexOf.call(e.parentElement.children, e),
                        s = w.selectpicker.current.data[s + i];
                    w.focusItem(e, s, !0)
                }), this.$menuInner.on("click", "li a", function (t, e) {
                    var i = $(this), s = w.$element[0], n = w.isVirtual() ? w.selectpicker.view.position0 : 0,
                        o = w.selectpicker.current.data[i.parent().index() + n], n = o.element, r = k.call(w),
                        a = s.selectedIndex, l = s.options[a], l = !!l && w.selectpicker.main.data[l.liIndex], c = !0;
                    if (w.multiple && 1 !== w.options.maxOptions && t.stopPropagation(), t.preventDefault(), !w.isDisabled() && !i.parent().hasClass(S.DISABLED)) {
                        var t = o.option, i = $(t), h = t.selected, d = w.selectpicker.current.data.find(function (t) {
                                return t.optID === o.optID && "optgroup-label" === t.type
                            }), p = d ? d.optgroup : void 0, d = p instanceof Element ? N.fromOption : N.fromDataSource,
                            u = p && p.children, f = parseInt(w.options.maxOptions),
                            d = p && parseInt(d(p, "maxOptions")) || !1;
                        if ((e = n === w.activeElement ? !0 : e) || (w.prevActiveElement = w.activeElement, w.activeElement = void 0), w.multiple && 1 !== f) {
                            if (w.setSelected(o, !h), w.focusedParent.focus(), !1 !== f || !1 !== d) {
                                var n = f < x.call(w).length, m = 0;
                                if (p && p.children) for (var g = 0; g < p.children.length; g++) p.children[g].selected && m++;
                                e = d < m;
                                if (f && n || d && e) if (f && 1 === f) s.selectedIndex = -1, w.setOptionStatus(!0); else if (d && 1 === d) {
                                    for (g = 0; g < u.length; g++) {
                                        var _ = u[g];
                                        w.setSelected(w.selectpicker.current.data[_.liIndex], !1)
                                    }
                                    w.setSelected(o, !0)
                                } else {
                                    var h = "string" == typeof w.options.maxOptionsText ? [w.options.maxOptionsText, w.options.maxOptionsText] : w.options.maxOptionsText,
                                        h = "function" == typeof h ? h(f, d) : h, v = h[0].replace("{n}", f),
                                        b = h[1].replace("{n}", d), y = $('<div class="notify"></div>');
                                    h[2] && (v = v.replace("{var}", h[2][1 < f ? 0 : 1]), b = b.replace("{var}", h[2][1 < d ? 0 : 1])), w.$menu.append(y), f && n && (y.append($("<div>" + v + "</div>")), c = !1, w.$element.trigger("maxReached" + C)), d && e && (y.append($("<div>" + b + "</div>")), c = !1, w.$element.trigger("maxReachedGrp" + C)), setTimeout(function () {
                                        w.setSelected(o, !1)
                                    }, 10), y[0].classList.add("fadeOut"), setTimeout(function () {
                                        y.remove()
                                    }, 1050)
                                }
                            }
                        } else l && w.setSelected(l, !1), w.setSelected(o, !0);
                        w.options.source.data && w.$element[0].appendChild(w.selectpicker.main.optionQueue), !w.multiple || w.multiple && 1 === w.options.maxOptions ? w.$button.trigger("focus") : w.options.liveSearch && w.$searchbox.trigger("focus"), !c || !w.multiple && a === s.selectedIndex || (E = [t.index, i.prop("selected"), r], w.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li." + S.DISABLED + " a, ." + S.POPOVERHEADER + ", ." + S.POPOVERHEADER + " :not(.close)", function (t) {
                    t.currentTarget == this && (t.preventDefault(), t.stopPropagation(), (w.options.liveSearch && !$(t.target).hasClass("close") ? w.$searchbox : w.$button).trigger("focus"))
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (t) {
                    t.preventDefault(), t.stopPropagation(), (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus")
                }), this.$menu.on("click", "." + S.POPOVERHEADER + " .close", function () {
                    w.$button.trigger("click")
                }), this.$searchbox.on("click", function (t) {
                    t.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (t) {
                    (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus"), t.preventDefault(), t.stopPropagation(), $(this).hasClass("bs-select-all") ? w.selectAll() : w.deselectAll()
                }), this.$button.on("focus" + C, function (t) {
                    var e = w.$element[0].getAttribute("tabindex");
                    void 0 !== e && t.originalEvent && t.originalEvent.isTrusted && (this.setAttribute("tabindex", e), w.$element[0].setAttribute("tabindex", -1), w.selectpicker.view.tabindex = e)
                }).on("blur" + C, function (t) {
                    void 0 !== w.selectpicker.view.tabindex && t.originalEvent && t.originalEvent.isTrusted && (w.$element[0].setAttribute("tabindex", w.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), w.selectpicker.view.tabindex = void 0)
                }), this.$element.on("change" + C, function () {
                    w.render(), w.$element.trigger("changed" + C, E), E = null
                }).on("focus" + C, function () {
                    w.options.mobile || w.$button[0].focus()
                })
            }, liveSearchListener: function () {
                var p = this;
                this.$button.on("click.bs.dropdown.data-api", function () {
                    p.$searchbox.val() && (p.$searchbox.val(""), p.selectpicker.search.previousValue = void 0)
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (t) {
                    t.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    var e = p.$searchbox[0].value;
                    if (p.selectpicker.search.elements = [], p.selectpicker.search.data = [], e) if (p.selectpicker.search.previousValue = e, p.options.source.search) p.fetchData(function (t) {
                        p.render(), p.buildList(void 0, !0), p.noScroll = !0, p.$menuInner.scrollTop(0), p.createView(!0), st.call(p, t, e)
                    }, "search", 0, e); else {
                        var t = [], i = e.toUpperCase(), s = {}, n = [], o = p._searchStyle(),
                            r = p.options.liveSearchNormalize;
                        r && (i = u(i));
                        for (var a = 0; a < p.selectpicker.main.data.length; a++) {
                            var l = p.selectpicker.main.data[a];
                            s[a] || (s[a] = v(l, i, o, r)), s[a] && void 0 !== l.headerIndex && -1 === n.indexOf(l.headerIndex) && (0 < l.headerIndex && (s[l.headerIndex - 1] = !0, n.push(l.headerIndex - 1)), s[l.headerIndex] = !0, n.push(l.headerIndex), s[l.lastIndex + 1] = !0), s[a] && "optgroup-label" !== l.type && n.push(a)
                        }
                        for (var a = 0, c = n.length; a < c; a++) {
                            var h = n[a], d = n[a - 1], l = p.selectpicker.main.data[h],
                                d = p.selectpicker.main.data[d];
                            ("divider" !== l.type || "divider" === l.type && d && "divider" !== d.type && c - 1 !== a) && (p.selectpicker.search.data.push(l), t.push(p.selectpicker.main.elements[h]))
                        }
                        p.activeElement = void 0, p.noScroll = !0, p.$menuInner.scrollTop(0), p.selectpicker.search.elements = t, p.createView(!0), st.call(p, t, e)
                    } else p.selectpicker.search.previousValue && (p.$menuInner.scrollTop(0), p.createView(!1))
                })
            }, _searchStyle: function () {
                return this.options.liveSearchStyle || "contains"
            }, val: function (e) {
                var t = this.$element[0];
                if (void 0 === e) return this.$element.val();
                var i = x.call(this), s = k.call(this, i);
                E = [null, null, s], (e = Array.isArray(e) ? e : [e]).map(String);
                for (var n = 0; n < i.length; n++) {
                    var o = i[n];
                    o && -1 === e.indexOf(String(o.value)) && this.setSelected(o, !1)
                }
                return this.selectpicker.main.data.filter(function (t) {
                    return -1 !== e.indexOf(String(t.value)) && (this.setSelected(t, !0), !0)
                }, this), this.options.source.data && t.appendChild(this.selectpicker.main.optionQueue), this.$element.trigger("changed" + C, E), this.$newElement.hasClass(S.SHOW) && (this.multiple ? this.setOptionStatus(!0) : "number" == typeof (s = (t.options[t.selectedIndex] || {}).liIndex) && this.setSelected(this.selectpicker.current.data[s], !0)), this.render(), E = null, this.$element
            }, changeAll: function (t) {
                if (this.multiple) {
                    void 0 === t && (t = !0);
                    var e = this.$element[0], i = 0, s = 0, n = k.call(this);
                    e.classList.add("bs-select-hidden");
                    for (var o = 0, r = this.selectpicker.current.data, a = r.length; o < a; o++) {
                        var l = r[o], c = l.option;
                        c && !l.disabled && "divider" !== l.type && (l.selected && i++, c.selected = t, !0 === (l.selected = t) && s++)
                    }
                    e.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), E = [null, null, n], this.$element.triggerNative("change"))
                }
            }, selectAll: function () {
                return this.changeAll(!0)
            }, deselectAll: function () {
                return this.changeAll(!1)
            }, toggle: function (t, e) {
                var i = void 0 === e;
                (t = t || window.event) && t.stopPropagation(), !1 === i && (t = this.$newElement[0].classList.contains(S.SHOW), i = !0 === e && !1 === t || !1 === e && !0 === t), i && this.$button.trigger("click.bs.dropdown.data-api")
            }, open: function (t) {
                this.toggle(t, !0)
            }, close: function (t) {
                this.toggle(t, !1)
            }, keydown: function (t) {
                var e, i, s, n, o = $(this), r = o.hasClass("dropdown-toggle"),
                    a = (r ? o.closest(".dropdown") : o.closest(A.MENU)).data("this"), l = a.findLis(), c = !1,
                    r = t.which === w && !r && !a.options.selectOnTab, h = et.test(t.which) || r,
                    d = a.$menuInner[0].scrollTop, p = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
                if (!(112 <= t.which && t.which <= 123)) if (!(e = a.$menu.hasClass(S.SHOW)) && (h || 48 <= t.which && t.which <= 57 || 96 <= t.which && t.which <= 105 || 65 <= t.which && t.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus"); else {
                    if (t.which === Y && e && (t.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), h) {
                        if (!l.length) return;
                        -1 !== (h = (i = a.activeElement) ? Array.prototype.indexOf.call(i.parentElement.children, i) : -1) && a.defocusItem(i), t.which === I ? (-1 !== h && h--, h + p < 0 && (h += l.length), a.selectpicker.view.canHighlight[h + p] || -1 === (h = a.selectpicker.view.canHighlight.slice(0, h + p).lastIndexOf(!0) - p) && (h = l.length - 1)) : t.which !== O && !r || (++h + p >= a.selectpicker.view.canHighlight.length && (h = a.selectpicker.view.firstHighlightIndex), a.selectpicker.view.canHighlight[h + p] || (h = h + 1 + a.selectpicker.view.canHighlight.slice(h + p + 1).indexOf(!0))), t.preventDefault();
                        var u = p + h;
                        t.which === I ? 0 === p && h === l.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, u = a.selectpicker.current.elements.length - 1) : (s = a.selectpicker.current.data[u]) && (c = (n = s.position - s.height) < d) : t.which !== O && !r || (h === a.selectpicker.view.firstHighlightIndex ? (a.$menuInner[0].scrollTop = 0, u = a.selectpicker.view.firstHighlightIndex) : (s = a.selectpicker.current.data[u]) && (c = d < (n = s.position - a.sizeInfo.menuInnerHeight))), i = a.selectpicker.current.elements[u], a.activeElement = (a.selectpicker.current.data[u] || {}).element, a.focusItem(i), a.selectpicker.view.currentActive = i, c && (a.$menuInner[0].scrollTop = n), (a.options.liveSearch ? a.$searchbox : o).trigger("focus")
                    } else if (!o.is("input") && !it.test(t.which) || t.which === b && a.selectpicker.keydown.keyHistory) {
                        var f, m = [];
                        t.preventDefault(), a.selectpicker.keydown.keyHistory += Q[t.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), f = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(f) && (f = f.charAt(0));
                        for (var g = 0; g < a.selectpicker.current.data.length; g++) {
                            var _ = a.selectpicker.current.data[g];
                            v(_, f, "startsWith", !0) && a.selectpicker.view.canHighlight[g] && m.push(_.element)
                        }
                        m.length && (p = 0, l.removeClass("active").find("a").removeClass("active"), 1 === f.length && (-1 === (p = m.indexOf(a.activeElement)) || p === m.length - 1 ? p = 0 : p++), r = m[p], c = 0 < d - (s = a.selectpicker.main.data[r]).position ? (n = s.position - s.height, !0) : (n = s.position - a.sizeInfo.menuInnerHeight, s.position > d + a.sizeInfo.menuInnerHeight), i = a.selectpicker.main.elements[r], a.activeElement = i, a.focusItem(i), i && i.firstChild.focus(), c && (a.$menuInner[0].scrollTop = n), o.trigger("focus"))
                    }
                    e && (t.which === b && !a.selectpicker.keydown.keyHistory || t.which === Z || t.which === w && a.options.selectOnTab) && (t.which !== b && t.preventDefault(), a.options.liveSearch && t.which === b || (a.$menuInner.find(".active a").trigger("click", !0), o.trigger("focus"), a.options.liveSearch || (t.preventDefault(), $(document).data("spaceSelect", !0))))
                }
            }, mobile: function () {
                this.options.mobile = !0, this.$element[0].classList.add("mobile-device")
            }, refresh: function () {
                var t = this, e = $.extend({}, this.options, h(this.$element), this.$element.data());
                this.options = e, this.options.source.data ? (this.render(), this.buildList()) : this.fetchData(function () {
                    t.render(), t.buildList()
                }), this.checkDisabled(), this.setStyle(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + C)
            }, hide: function () {
                this.$newElement.hide()
            }, show: function () {
                this.$newElement.show()
            }, remove: function () {
                this.$newElement.remove(), this.$element.remove()
            }, destroy: function () {
                this.$newElement.before(this.$element).remove(), (this.$bsContainer || this.$menu).remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(C).removeData("selectpicker").removeClass("bs-select-hidden selectpicker mobile-device"), $(window).off(C + "." + this.selectId)
            }
        };
        var rt = $.fn.selectpicker;

        function at() {
            return _.major < 5 ? $.fn.dropdown ? ($.fn.dropdown.Constructor._dataApiKeydownHandler || $.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments) : void 0 : m.dataApiKeydownHandler
        }

        $.fn.selectpicker = ot, $.fn.selectpicker.Constructor = M, $.fn.selectpicker.noConflict = function () {
            return $.fn.selectpicker = rt, this
        }, $(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > [" + A.DATA_TOGGLE + "]", at).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", at).on("keydown" + C, ".bootstrap-select [" + A.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', M.prototype.keydown).on("focusin.modal", ".bootstrap-select [" + A.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (t) {
            t.stopPropagation()
        }), document.addEventListener("DOMContentLoaded", function () {
            $(".selectpicker").each(function () {
                var t = $(this);
                ot.call(t, t.data())
            })
        })
    }(t)
}), function (p) {
    "use strict";
    var n = {
        tagClass: function (t) {
            return "btn btn-primary"
        },
        itemValue: function (t) {
            return t && t.toString()
        },
        itemText: function (t) {
            return this.itemValue(t)
        },
        itemTitle: function (t) {
            return null
        },
        freeInput: !0,
        addOnBlur: !0,
        maxTags: void 0,
        maxChars: void 0,
        confirmKeys: [13, 44],
        delimiter: ",",
        delimiterRegex: null,
        cancelConfirmKeysOnEmpty: !0,
        onTagExists: function (t, e) {
            e.hide().fadeIn()
        },
        trimValue: !1,
        allowDuplicates: !1
    };

    function r(t, e) {
        this.itemsArray = [], this.$element = p(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = e && e.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = p('<div class="bootstrap-tagsinput"></div>'), this.$input = p('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.before(this.$container), this.build(e)
    }

    function o(t, e) {
        var i;
        "function" != typeof t[e] && (i = t[e], t[e] = function (t) {
            return t[i]
        })
    }

    function l(t, e) {
        var i;
        "function" != typeof t[e] && (i = t[e], t[e] = function () {
            return i
        })
    }

    r.prototype = {
        constructor: r, add: function (t, e, i) {
            var s = this;
            if (!(s.options.maxTags && s.itemsArray.length >= s.options.maxTags) && (!1 === t || t)) {
                if ("object" == typeof (t = "string" == typeof t && s.options.trimValue ? p.trim(t) : t) && !s.objectItems) throw"Can't add objects when itemValue option is not set";
                if (!t.toString().match(/^\s*$/)) {
                    if (s.isSelect && !s.multiple && 0 < s.itemsArray.length && s.remove(s.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
                        var n = s.options.delimiterRegex || s.options.delimiter, o = t.split(n);
                        if (1 < o.length) {
                            for (var r = 0; r < o.length; r++) this.add(o[r], !0);
                            return void (e || s.pushVal())
                        }
                    }
                    var a, l = s.options.itemValue(t), n = s.options.itemText(t), c = s.options.tagClass(t),
                        h = s.options.itemTitle(t), d = p.grep(s.itemsArray, function (t) {
                            return s.options.itemValue(t) === l
                        })[0];
                    d && !s.options.allowDuplicates ? s.options.onTagExists && (a = p(".tag", s.$container).filter(function () {
                        return p(this).data("item") === d
                    }), s.options.onTagExists(t, a)) : s.items().toString().length + t.length + 1 > s.options.maxInputLength || (a = p.Event("beforeItemAdd", {
                        item: t,
                        cancel: !1,
                        options: i
                    }), s.$element.trigger(a), a.cancel || (s.itemsArray.push(t), (a = p('<div class="btn-group tag tag-xs mb-2 mr-1"><span class="btn-sm icon-left no-hover ' + u(c) + (null !== h ? '" title="' + h : "") + '">' + u(n) + '</span><button type="button" data-role="remove" class="btn btn-primary btn-sm btn-icon"><i class="mdi mdi-close"></i></button></div>')).data("item", t), s.findInputWrapper().before(a), a.after(" "), s.isSelect && !p('option[value="' + encodeURIComponent(l) + '"]', s.$element)[0] && ((c = p("<option selected>" + u(n) + "</option>")).data("item", t), c.attr("value", l), s.$element.append(c)), e || s.pushVal(), s.options.maxTags !== s.itemsArray.length && s.items().toString().length !== s.options.maxInputLength || s.$container.addClass("bootstrap-tagsinput-max"), s.$element.trigger(p.Event("itemAdded", {
                        item: t,
                        options: i
                    }))))
                }
            }
        }, remove: function (e, t, i) {
            var s = this;
            if (e = s.objectItems ? (e = "object" == typeof e ? p.grep(s.itemsArray, function (t) {
                return s.options.itemValue(t) == s.options.itemValue(e)
            }) : p.grep(s.itemsArray, function (t) {
                return s.options.itemValue(t) == e
            }))[e.length - 1] : e) {
                var n = p.Event("beforeItemRemove", {item: e, cancel: !1, options: i});
                if (s.$element.trigger(n), n.cancel) return;
                p(".tag", s.$container).filter(function () {
                    return p(this).data("item") === e
                }).remove(), p("option", s.$element).filter(function () {
                    return p(this).data("item") === e
                }).remove(), -1 !== p.inArray(e, s.itemsArray) && s.itemsArray.splice(p.inArray(e, s.itemsArray), 1)
            }
            t || s.pushVal(), s.options.maxTags > s.itemsArray.length && s.$container.removeClass("bootstrap-tagsinput-max"), s.$element.trigger(p.Event("itemRemoved", {
                item: e,
                options: i
            }))
        }, removeAll: function () {
            var t = this;
            for (p(".tag", t.$container).remove(), p("option", t.$element).remove(); 0 < t.itemsArray.length;) t.itemsArray.pop();
            t.pushVal()
        }, refresh: function () {
            var o = this;
            p(".tag", o.$container).each(function () {
                var t = p(this), e = t.data("item"), i = o.options.itemValue(e), s = o.options.itemText(e),
                    n = o.options.tagClass(e);
                t.attr("class", null), t.addClass("tag " + u(n)), t.contents().filter(function () {
                    return 3 == this.nodeType
                })[0].nodeValue = u(s), o.isSelect && p("option", o.$element).filter(function () {
                    return p(this).data("item") === e
                }).attr("value", i)
            })
        }, items: function () {
            return this.itemsArray
        }, pushVal: function () {
            var e = this, t = p.map(e.items(), function (t) {
                return e.options.itemValue(t).toString()
            });
            e.$element.val(t, !0).trigger("change")
        }, build: function (t) {
            var i, e, s, a = this;
            a.options = p.extend({}, n, t), a.objectItems && (a.options.freeInput = !1), o(a.options, "itemValue"), o(a.options, "itemText"), l(a.options, "tagClass"), a.options.typeahead && (l(i = a.options.typeahead || {}, "source"), a.$input.typeahead(p.extend({}, i, {
                source: function (t, n) {
                    function e(t) {
                        for (var e = [], i = 0; i < t.length; i++) {
                            var s = a.options.itemText(t[i]);
                            o[s] = t[i], e.push(s)
                        }
                        n(e)
                    }

                    this.map = {};
                    var o = this.map, t = i.source(t);
                    p.isFunction(t.success) ? t.success(e) : (p.isFunction(t.then) ? t : p.when(t)).then(e)
                }, updater: function (t) {
                    return a.add(this.map[t]), this.map[t]
                }, matcher: function (t) {
                    return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase())
                }, sorter: function (t) {
                    return t.sort()
                }, highlighter: function (t) {
                    var e = new RegExp("(" + this.query + ")", "gi");
                    return t.replace(e, "<strong>$1</strong>")
                }
            }))), a.options.typeaheadjs && (t = null, s = {}, e = a.options.typeaheadjs, s = p.isArray(e) ? (t = e[0], e[1]) : e, a.$input.typeahead(t, s).on("typeahead:selected", p.proxy(function (t, e) {
                s.valueKey ? a.add(e[s.valueKey]) : a.add(e), a.$input.typeahead("val", "")
            }, a))), a.$container.on("click", p.proxy(function (t) {
                a.$element.attr("disabled") || a.$input.removeAttr("disabled"), a.$input.focus()
            }, a)), a.options.addOnBlur && a.options.freeInput && a.$input.on("focusout", p.proxy(function (t) {
                0 === p(".typeahead, .twitter-typeahead", a.$container).length && (a.add(a.$input.val()), a.$input.val(""))
            }, a)), a.$container.on("keydown", "input", p.proxy(function (t) {
                var e = p(t.target), i = a.findInputWrapper();
                if (a.$element.attr("disabled")) a.$input.attr("disabled", "disabled"); else {
                    switch (t.which) {
                        case 8:
                            0 !== c(e[0]) || (s = i.prev()).length && a.remove(s.data("item"));
                            break;
                        case 46:
                            0 !== c(e[0]) || (s = i.next()).length && a.remove(s.data("item"));
                            break;
                        case 37:
                            var s = i.prev();
                            0 === e.val().length && s[0] && (s.before(i), e.focus());
                            break;
                        case 39:
                            s = i.next();
                            0 === e.val().length && s[0] && (s.after(i), e.focus())
                    }
                    t = e.val().length;
                    Math.ceil(t / 5);
                    e.attr("size", Math.max(this.inputSize, e.val().length))
                }
            }, a)), a.$container.on("keypress", "input", p.proxy(function (t) {
                var e, i, n, o, s, r = p(t.target);
                a.$element.attr("disabled") ? a.$input.attr("disabled", "disabled") : (e = r.val(), i = a.options.maxChars && e.length >= a.options.maxChars, a.options.freeInput && (n = t, s = a.options.confirmKeys, o = !1, p.each(s, function (t, e) {
                    if ("number" == typeof e && n.which === e) return !(o = !0);
                    if (n.which === e.which) {
                        var i = !e.hasOwnProperty("altKey") || n.altKey === e.altKey,
                            s = !e.hasOwnProperty("shiftKey") || n.shiftKey === e.shiftKey,
                            e = !e.hasOwnProperty("ctrlKey") || n.ctrlKey === e.ctrlKey;
                        if (i && s && e) return !(o = !0)
                    }
                }), o || i) && (0 !== e.length && (a.add(i ? e.substr(0, a.options.maxChars) : e), r.val("")), !1 === a.options.cancelConfirmKeysOnEmpty && t.preventDefault()), s = r.val().length, Math.ceil(s / 5), r.attr("size", Math.max(this.inputSize, r.val().length)))
            }, a)), a.$container.on("click", "[data-role=remove]", p.proxy(function (t) {
                a.$element.attr("disabled") || a.remove(p(t.target).closest(".tag").data("item"))
            }, a)), a.options.itemValue === n.itemValue && ("INPUT" === a.$element[0].tagName ? a.add(a.$element.val()) : p("option", a.$element).each(function () {
                a.add(p(this).attr("value"), !0)
            }))
        }, destroy: function () {
            var t = this;
            t.$container.off("keypress", "input"), t.$container.off("click", "[role=remove]"), t.$container.remove(), t.$element.removeData("tagsinput"), t.$element.show()
        }, focus: function () {
            this.$input.focus()
        }, input: function () {
            return this.$input
        }, findInputWrapper: function () {
            for (var t = this.$input[0], e = this.$container[0]; t && t.parentNode !== e;) t = t.parentNode;
            return p(t)
        }
    }, p.fn.tagsinput = function (i, s, n) {
        var o = [];
        return this.each(function () {
            var t, e = p(this).data("tagsinput");
            e ? i || s ? void 0 !== e[i] && void 0 !== (t = 3 === e[i].length && void 0 !== n ? e[i](s, null, n) : e[i](s)) && o.push(t) : o.push(e) : (e = new r(this, i), p(this).data("tagsinput", e), o.push(e), "SELECT" === this.tagName && p("option", p(this)).attr("selected", "selected"), p(this).val(p(this).val()))
        }), "string" != typeof i || 1 < o.length ? o : o[0]
    }, p.fn.tagsinput.Constructor = r;
    var e = p("<div />");

    function u(t) {
        return t ? e.text(t).html() : ""
    }

    function c(t) {
        var e, i = 0;
        return document.selection ? (t.focus(), (e = document.selection.createRange()).moveStart("character", -t.value.length), i = e.text.length) : !t.selectionStart && "0" != t.selectionStart || (i = t.selectionStart), i
    }
}(window.jQuery), function (e) {
    "undefined" != typeof jQuery && jQuery || "function" != typeof define || !define.amd ? "undefined" != typeof jQuery && jQuery || "object" != typeof exports ? e(jQuery, document, window, navigator) : e(require("jquery"), document, window, navigator) : define(["jquery"], function (t) {
        return e(t, document, window, navigator)
    })
}(function (r, a, l, t, c) {
    "use strict";

    function e(t, e, i) {
        this.VERSION = "2.3.1", this.input = t, this.plugin_count = i, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, e = e || {}, this.$cache = {
            win: r(l),
            body: r(a.body),
            input: r(t),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var s, n, t = (i = this.$cache.input).prop("value"), o = {
            skin: "flat",
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        };
        for (n in "INPUT" !== i[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", i[0]), (s = {
            skin: i.data("skin"),
            type: i.data("type"),
            min: i.data("min"),
            max: i.data("max"),
            from: i.data("from"),
            to: i.data("to"),
            step: i.data("step"),
            min_interval: i.data("minInterval"),
            max_interval: i.data("maxInterval"),
            drag_interval: i.data("dragInterval"),
            values: i.data("values"),
            from_fixed: i.data("fromFixed"),
            from_min: i.data("fromMin"),
            from_max: i.data("fromMax"),
            from_shadow: i.data("fromShadow"),
            to_fixed: i.data("toFixed"),
            to_min: i.data("toMin"),
            to_max: i.data("toMax"),
            to_shadow: i.data("toShadow"),
            prettify_enabled: i.data("prettifyEnabled"),
            prettify_separator: i.data("prettifySeparator"),
            force_edges: i.data("forceEdges"),
            keyboard: i.data("keyboard"),
            grid: i.data("grid"),
            grid_margin: i.data("gridMargin"),
            grid_num: i.data("gridNum"),
            grid_snap: i.data("gridSnap"),
            hide_min_max: i.data("hideMinMax"),
            hide_from_to: i.data("hideFromTo"),
            prefix: i.data("prefix"),
            postfix: i.data("postfix"),
            max_postfix: i.data("maxPostfix"),
            decorate_both: i.data("decorateBoth"),
            values_separator: i.data("valuesSeparator"),
            input_values_separator: i.data("inputValuesSeparator"),
            disable: i.data("disable"),
            block: i.data("block"),
            extra_classes: i.data("extraClasses")
        }).values = s.values && s.values.split(","), s) !s.hasOwnProperty(n) || s[n] !== c && "" !== s[n] || delete s[n];
        t !== c && "" !== t && ((t = t.split(s.input_values_separator || e.input_values_separator || ";"))[0] && t[0] == +t[0] && (t[0] = +t[0]), t[1] && t[1] == +t[1] && (t[1] = +t[1]), e && e.values && e.values.length ? (o.from = t[0] && e.values.indexOf(t[0]), o.to = t[1] && e.values.indexOf(t[1])) : (o.from = t[0] && +t[0], o.to = t[1] && +t[1])), r.extend(o, e), r.extend(o, s), this.options = o, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    }

    var i, s = 0,
        n = (t = t.userAgent, i = /msie\s\d+/i, 0 < t.search(i) && i.exec(t).toString().split(" ")[1] < 9 && (r("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (i) {
        var s = this, n = [].slice;
        if ("function" != typeof s) throw new TypeError;
        var o = n.call(arguments, 1), r = function () {
            var t, e;
            return this instanceof r ? ((t = function () {
            }).prototype = s.prototype, t = new t, e = s.apply(t, o.concat(n.call(arguments))), Object(e) === e ? e : t) : s.apply(i, o.concat(n.call(arguments)))
        };
        return r
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var s = Object(this), n = s.length >>> 0;
        if (0 == n) return -1;
        e = +e || 0;
        if (n <= (e = Math.abs(e) === 1 / 0 ? 0 : e)) return -1;
        for (i = Math.max(0 <= e ? e : n - Math.abs(e), 0); i < n;) {
            if (i in s && s[i] === t) return i;
            i++
        }
        return -1
    });
    e.prototype = {
        init: function (t) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
            this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var t = this.options.min, e = this.options.max, i = this.options.from, s = this.options.to;
            t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (t) {
            switch (t) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), n && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), n && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (t) {
            var e, i;
            this.target || (i = (e = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += e.width() / 2 - 1, this.pointerClick("single", {
                preventDefault: function () {
                }, pageX: i
            }))
        }, pointerMove: function (t) {
            this.dragging && (t = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX, this.coords.x_pointer = t - this.coords.x_gap, this.calc())
        }, pointerUp: function (t) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, n && r("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (r.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && ("both" === t && this.setTempMinInterval(), t = t || this.target || "from", this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = i - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), n && r("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (t, e) {
            if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                switch (e.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        e.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        e.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (t) {
            var e = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100, i = this.options.step / i;
            t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options) {
                if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
                var t, e;
                this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (t = this._prettify(this.options.min), e = this._prettify(this.options.max), this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var t = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (t) {
            if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                this.calcPointerPercent();
                var e = this.getHandleX();
                switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                    case"base":
                        var i = (this.options.max - this.options.min) / 100,
                            s = (this.result.from - this.options.min) / i, i = (this.result.to - this.options.min) / i;
                        this.coords.p_single_real = this.toFixed(s), this.coords.p_from_real = this.toFixed(s), this.coords.p_to_real = this.toFixed(i), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        var s = this.convertToRealPercent(e), i = this.result.from_percent,
                            i = this.result.to_percent - i, n = i / 2, o = s - n, s = s + n;
                        100 < (s = o < 0 ? (o = 0) + i : s) && (o = (s = 100) - i), this.coords.p_from_real = this.calcWithStep(o), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(s), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (t) {
            return t / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (t) {
            return t / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return e < 0 ? e = 0 : t < e && (e = t), e
        }, calcHandlePercent: function () {
            "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (t) {
            return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
        }, drawLabels: function () {
            var t, e, i, s, n;
            this.options && (i = this.options.values.length, t = this.options.p_values, this.options.hide_from_to || ("single" === this.options.type ? (s = i ? this.decorate(t[this.result.from]) : (e = this._prettify(this.result.from), this.decorate(e, this.result.from)), this.$cache.single.html(s), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible") : (t = i ? (s = this.options.decorate_both ? (s = this.decorate(t[this.result.from]), (s += this.options.values_separator) + this.decorate(t[this.result.to])) : this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), n = this.decorate(t[this.result.from]), this.decorate(t[this.result.to])) : (e = this._prettify(this.result.from), i = this._prettify(this.result.to), s = this.options.decorate_both ? (s = this.decorate(e, this.result.from), (s += this.options.values_separator) + this.decorate(i, this.result.to)) : this.decorate(e + this.options.values_separator + i, this.result.to), n = this.decorate(e, this.result.from), this.decorate(i, this.result.to)), this.$cache.single.html(s), this.$cache.from.html(n), this.$cache.to.html(t), this.calcLabels(), e = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake, s = this.labels.p_to_left + this.labels.p_to_fake, n = Math.max(i, s), this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", s) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(i, s))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), e < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", n > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible")))
        }, drawShadow: function () {
            var t, e, i = this.options, s = this.$cache, n = "number" == typeof i.from_min && !isNaN(i.from_min),
                o = "number" == typeof i.from_max && !isNaN(i.from_max),
                r = "number" == typeof i.to_min && !isNaN(i.to_min),
                a = "number" == typeof i.to_max && !isNaN(i.to_max);
            "single" === i.type ? i.from_shadow && (n || o) ? (t = this.convertToPercent(n ? i.from_min : i.min), e = this.convertToPercent(o ? i.from_max : i.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_single[0].style.display = "block", s.shad_single[0].style.left = t + "%", s.shad_single[0].style.width = e + "%") : s.shad_single[0].style.display = "none" : (i.from_shadow && (n || o) ? (t = this.convertToPercent(n ? i.from_min : i.min), e = this.convertToPercent(o ? i.from_max : i.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_from[0].style.display = "block", s.shad_from[0].style.left = t + "%", s.shad_from[0].style.width = e + "%") : s.shad_from[0].style.display = "none", i.to_shadow && (r || a) ? (n = this.convertToPercent(r ? i.to_min : i.min), o = this.convertToPercent(a ? i.to_max : i.max) - n, n = this.toFixed(n - this.coords.p_handle / 100 * n), o = this.toFixed(o - this.coords.p_handle / 100 * o), n += this.coords.p_handle / 2, s.shad_to[0].style.display = "block", s.shad_to[0].style.left = n + "%", s.shad_to[0].style.width = o + "%") : s.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (t, e) {
            var i = this.options.max - this.options.min;
            return i ? (e = e ? t : t - this.options.min, this.toFixed(e / (i / 100))) : (this.no_diapason = !0, 0)
        }, convertToValue: function (t) {
            var e, i = this.options.min, s = this.options.max, n = i.toString().split(".")[1],
                o = s.toString().split(".")[1], r = 0, a = 0;
            if (0 === t) return this.options.min;
            if (100 === t) return this.options.max;
            n && (r = l = n.length), o && (r = e = o.length), l && e && (r = e <= l ? l : e), i < 0 && (i = +(i + (a = Math.abs(i))).toFixed(r), s = +(s + a).toFixed(r));
            var l, n = (s - i) / 100 * t + i, o = this.options.step.toString().split(".")[1],
                n = o ? +n.toFixed(o.length) : +(n = (n /= this.options.step) * this.options.step).toFixed(0);
            return a && (n -= a), (l = o ? +n.toFixed(o.length) : this.toFixed(n)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l
        }, calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return 100 < e && (e = 100), this.toFixed(e = 100 === t ? 100 : e)
        }, checkMinInterval: function (t, e, i) {
            var s, n = this.options;
            return n.min_interval ? (s = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - s < n.min_interval && (s = e - n.min_interval) : s - e < n.min_interval && (s = e + n.min_interval), this.convertToPercent(s)) : t
        }, checkMaxInterval: function (t, e, i) {
            var s, n = this.options;
            return n.max_interval ? (s = this.convertToValue(t), e = this.convertToValue(e), "from" === i ? e - s > n.max_interval && (s = e - n.max_interval) : s - e > n.max_interval && (s = e + n.max_interval), this.convertToPercent(s)) : t
        }, checkDiapason: function (t, e, i) {
            var t = this.convertToValue(t), s = this.options;
            return "number" != typeof e && (e = s.min), (i = "number" != typeof i ? s.max : i) < (t = t < e ? e : t) && (t = i), this.convertToPercent(t)
        }, toFixed: function (t) {
            return +(t = t.toFixed(20))
        }, _prettify: function (t) {
            return this.options.prettify_enabled ? (this.options.prettify && "function" == typeof this.options.prettify ? this.options : this).prettify(t) : t
        }, prettify: function (t) {
            return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (t, e) {
            return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t)
        }, validate: function () {
            var t, e, i = this.options, s = this.result, n = i.values, o = n.length;
            if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o) for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +n[e], t = isNaN(t) ? n[e] : (n[e] = t, this._prettify(t)), i.p_values.push(t);
            "number" == typeof i.from && !isNaN(i.from) || (i.from = i.min), "number" == typeof i.to && !isNaN(i.to) || (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
        }, decorate: function (t, e) {
            var i = "", s = this.options;
            return s.prefix && (i += s.prefix), i += t, s.max_postfix && (s.values.length && t === s.p_values[s.max] || e === s.max) && (i += s.max_postfix, s.postfix && (i += " ")), s.postfix && (i += s.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var t, e, i, s, n, o, r = this.options, a = r.max - r.min, l = r.grid_num, c = 0, h = 4, d = "";
                for (this.calcGridMargin(), r.grid_snap && (l = a / r.step), i = this.toFixed(100 / (l = 50 < l ? 50 : l)), 4 < l && (h = 3), 7 < l && (h = 2), 14 < l && (h = 1), 28 < l && (h = 0), t = 0; t < l + 1; t++) {
                    for (s = h, 100 < (c = this.toFixed(i * t)) && (c = 100), n = ((this.coords.big[t] = c) - i * (t - 1)) / (s + 1), e = 1; e <= s && 0 !== c; e++) d += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - n * e) + '%"></span>';
                    d += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', o = this.convertToValue(c), d += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (o = r.values.length ? r.p_values[o] : this._prettify(o)) + "</span>"
                }
                this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            for (var t, e = this.coords.big_num, i = 0; i < e; i++) t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);
            this.calcGridLabels()
        }, calcGridLabels: function () {
            for (var t, e = [], i = [], s = this.coords.big_num, n = 0; n < s; n++) this.coords.big_w[n] = this.$cache.grid_labels[n].outerWidth(!1), this.coords.big_p[n] = this.toFixed(this.coords.big_w[n] / this.coords.w_rs * 100), this.coords.big_x[n] = this.toFixed(this.coords.big_p[n] / 2), e[n] = this.toFixed(this.coords.big[n] - this.coords.big_x[n]), i[n] = this.toFixed(e[n] + this.coords.big_p[n]);
            for (this.options.force_edges && (e[0] < -this.coords.grid_gap && (e[0] = -this.coords.grid_gap, i[0] = this.toFixed(e[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[s - 1] > 100 + this.coords.grid_gap && (i[s - 1] = 100 + this.coords.grid_gap, e[s - 1] = this.toFixed(i[s - 1] - this.coords.big_p[s - 1]), this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap))), this.calcGridCollision(2, e, i), this.calcGridCollision(4, e, i), n = 0; n < s; n++) t = this.$cache.grid_labels[n][0], this.coords.big_x[n] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[n] + "%")
        }, calcGridCollision: function (t, e, i) {
            for (var s, n, o = this.coords.big_num, r = 0; r < o && !(o <= (s = r + t / 2)); r += t) n = this.$cache.grid_labels[s][0], i[r] <= e[s] ? n.style.visibility = "visible" : n.style.visibility = "hidden"
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (t) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = r.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), r.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
        }
    }, r.fn.ionRangeSlider = function (t) {
        return this.each(function () {
            r.data(this, "ionRangeSlider") || r.data(this, "ionRangeSlider", new e(this, t, s++))
        })
    };
    for (var o = 0, h = ["ms", "moz", "webkit", "o"], d = 0; d < h.length && !l.requestAnimationFrame; ++d) l.requestAnimationFrame = l[h[d] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[h[d] + "CancelAnimationFrame"] || l[h[d] + "CancelRequestAnimationFrame"];
    l.requestAnimationFrame || (l.requestAnimationFrame = function (t, e) {
        var i = (new Date).getTime(), s = Math.max(0, 16 - (i - o)), n = l.setTimeout(function () {
            t(i + s)
        }, s);
        return o = i + s, n
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
}(this, function () {
    return s = [function (t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function n() {
            f = (0, u.default)(), _()
        }

        var o = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i, s = arguments[e];
                    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
                }
                return t
            }, r = (s(i(1)), i(6)), a = s(r), l = s(i(7)), c = s(i(8)), h = s(i(9)), d = s(i(10)), p = s(i(11)),
            u = s(i(14)), f = [], m = !1, g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, _ = function () {
                if (m = 0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? !0 : m) return f = (0, p.default)(f, g), (0, d.default)(f, g.once), f
            };
        t.exports = {
            init: function (t) {
                g = o(g, t), f = (0, u.default)();
                var e, t = document.all && !window.atob;
                return !0 === (e = g.disable) || "mobile" === e && h.default.mobile() || "phone" === e && h.default.phone() || "tablet" === e && h.default.tablet() || "function" == typeof e && !0 === e() || t ? void f.forEach(function (t, e) {
                    t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                }) : (g.disableMutationObserver || c.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? _(!0) : ("load" === g.startEvent ? window : document).addEventListener(g.startEvent, function () {
                    _(!0)
                }), window.addEventListener("resize", (0, l.default)(_, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, l.default)(_, g.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function () {
                    (0, d.default)(f, g.once)
                }, g.throttleDelay)), g.disableMutationObserver || c.default.ready("[data-aos]", n), f)
            }, refresh: _, refreshHard: n
        }
    }, function (t, e) {
    }, , , , , function (u, t) {
        !function (t) {
            "use strict";

            function o(s, i, t) {
                function n(t) {
                    var e = l, i = c;
                    return l = c = void 0, f = t, d = s.apply(i, e)
                }

                function o(t) {
                    var e = t - u;
                    return void 0 === u || i <= e || e < 0 || g && h <= t - f
                }

                function r() {
                    var t, e = k();
                    return o(e) ? a(e) : void (p = setTimeout(r, (t = i - ((e = e) - u), g ? x(t, h - (e - f)) : t)))
                }

                function a(t) {
                    return p = void 0, _ && l ? n(t) : (l = c = void 0, d)
                }

                function e() {
                    var t = k(), e = o(t);
                    if (l = arguments, c = this, u = t, e) {
                        if (void 0 === p) return f = t = u, p = setTimeout(r, i), m ? n(t) : d;
                        if (g) return p = setTimeout(r, i), n(u)
                    }
                    return void 0 === p && (p = setTimeout(r, i)), d
                }

                var l, c, h, d, p, u, f = 0, m = !1, g = !1, _ = !0;
                if ("function" != typeof s) throw new TypeError(y);
                return i = b(i) || 0, v(t) && (m = !!t.leading, g = "maxWait" in t, h = g ? w(b(t.maxWait) || 0, i) : h, _ = "trailing" in t ? !!t.trailing : _), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), l = u = c = p = void (f = 0)
                }, e.flush = function () {
                    return void 0 === p ? d : a(k())
                }, e
            }

            function v(t) {
                var e = void 0 === t ? "undefined" : s(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : s(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : s(e)) && "[object Symbol]" == p.call(t);
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return n;
                if ("string" != typeof (t = v(t) ? v(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t)) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var e = l.test(t);
                return e || c.test(t) ? h(t.slice(2), e ? 2 : 8) : a.test(t) ? n : +t
            }

            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y = "Expected a function", n = NaN, r = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i, h = parseInt,
                t = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                e = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                d = t || e || Function("return this")(), p = Object.prototype.toString, w = Math.max, x = Math.min,
                k = function () {
                    return d.Date.now()
                };
            u.exports = function (t, e, i) {
                var s = !0, n = !0;
                if ("function" != typeof t) throw new TypeError(y);
                return v(i) && (s = "leading" in i ? !!i.leading : s, n = "trailing" in i ? !!i.trailing : n), o(t, e, {
                    leading: s,
                    maxWait: e,
                    trailing: n
                })
            }
        }.call(t, function () {
            return this
        }())
    }, function (u, t) {
        !function (t) {
            "use strict";

            function v(t) {
                var e = void 0 === t ? "undefined" : s(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : s(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : s(e)) && p.call(t) == o;
                var e
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return n;
                if ("string" != typeof (t = v(t) ? v(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e : t)) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var e = l.test(t);
                return e || c.test(t) ? h(t.slice(2), e ? 2 : 8) : a.test(t) ? n : +t
            }

            function y() {
                return d.Date.now()
            }

            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n = NaN, o = "[object Symbol]", r = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i, h = parseInt,
                t = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                e = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                d = t || e || Function("return this")(), p = Object.prototype.toString, w = Math.max, x = Math.min;
            u.exports = function (s, i, t) {
                function n(t) {
                    var e = l, i = c;
                    return l = c = void 0, f = t, d = s.apply(i, e)
                }

                function o(t) {
                    var e = t - u;
                    return void 0 === u || i <= e || e < 0 || g && h <= t - f
                }

                function r() {
                    var t, e = y();
                    return o(e) ? a(e) : void (p = setTimeout(r, (t = i - ((e = e) - u), g ? x(t, h - (e - f)) : t)))
                }

                function a(t) {
                    return p = void 0, _ && l ? n(t) : (l = c = void 0, d)
                }

                function e() {
                    var t = y(), e = o(t);
                    if (l = arguments, c = this, u = t, e) {
                        if (void 0 === p) return f = t = u, p = setTimeout(r, i), m ? n(t) : d;
                        if (g) return p = setTimeout(r, i), n(u)
                    }
                    return void 0 === p && (p = setTimeout(r, i)), d
                }

                var l, c, h, d, p, u, f = 0, m = !1, g = !1, _ = !0;
                if ("function" != typeof s) throw new TypeError("Expected a function");
                return i = b(i) || 0, v(t) && (m = !!t.leading, g = "maxWait" in t, h = g ? w(b(t.maxWait) || 0, i) : h, _ = "trailing" in t ? !!t.trailing : _), e.cancel = function () {
                    void 0 !== p && clearTimeout(p), l = u = c = p = void (f = 0)
                }, e.flush = function () {
                    return void 0 === p ? d : a(y())
                }, e
            }
        }.call(t, function () {
            return this
        }())
    }, function (t, e) {
        "use strict";

        function n() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function o(t) {
            t && t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes), t = Array.prototype.slice.call(t.removedNodes);
                if (function t(e) {
                    for (var i, s = void 0, s = 0; s < e.length; s += 1) {
                        if ((i = e[s]).dataset && i.dataset.aos) return !0;
                        if (i.children && t(i.children)) return !0
                    }
                    return !1
                }(e.concat(t))) return r()
            })
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = function () {
        };
        e.default = {
            isSupported: function () {
                return !!n()
            }, ready: function (t, e) {
                var i = window.document, s = new (n())(o);
                r = e, s.observe(i.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
            }
        }
    }, function (t, e) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            n = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a = (function (t, e, i) {
                return e && c(t.prototype, e), i && c(t, i), t
            }(l, [{
                key: "phone", value: function () {
                    var t = i();
                    return !(!s.test(t) && !n.test(t.substr(0, 4)))
                }
            }, {
                key: "mobile", value: function () {
                    var t = i();
                    return !(!o.test(t) && !r.test(t.substr(0, 4)))
                }
            }, {
                key: "tablet", value: function () {
                    return this.mobile() && !this.phone()
                }
            }]), l);

        function l() {
            if (!(this instanceof l)) throw new TypeError("Cannot call a class as a function")
        }

        function c(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
            }
        }

        e.default = new a
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t, o) {
            var r = window.pageYOffset, a = window.innerHeight;
            t.forEach(function (t, e) {
                var i, s, n;
                i = a + r, s = o, n = (t = t).node.getAttribute("data-aos-once"), i > t.position ? t.node.classList.add("aos-animate") : void 0 === n || "false" !== n && (s || "true" === n) || t.node.classList.remove("aos-animate")
            })
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = i(12), s = (i = i) && i.__esModule ? i : {default: i};
        e.default = function (t, i) {
            return t.forEach(function (t, e) {
                t.node.classList.add("aos-init"), t.position = (0, s.default)(t.node, i.offset)
            }), t
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = i(13), r = (i = i) && i.__esModule ? i : {default: i};
        e.default = function (t, e) {
            var i = 0, s = 0, n = window.innerHeight, o = {
                offset: t.getAttribute("data-aos-offset"),
                anchor: t.getAttribute("data-aos-anchor"),
                anchorPlacement: t.getAttribute("data-aos-anchor-placement")
            };
            switch (o.offset && !isNaN(o.offset) && (s = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), i = (0, r.default)(t).top, o.anchorPlacement) {
                case"top-bottom":
                    break;
                case"center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    i += t.offsetHeight;
                    break;
                case"top-center":
                    i += n / 2;
                    break;
                case"bottom-center":
                    i += n / 2 + t.offsetHeight;
                    break;
                case"center-center":
                    i += n / 2 + t.offsetHeight / 2;
                    break;
                case"top-top":
                    i += n;
                    break;
                case"bottom-top":
                    i += t.offsetHeight + n;
                    break;
                case"center-top":
                    i += t.offsetHeight / 2 + n
            }
            return i + (s = o.anchorPlacement || o.offset || isNaN(e) ? s : e)
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t) {
            for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
            return {top: i, left: e}
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = function (t) {
            return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function (t) {
                return {node: t}
            })
        }
    }], n = {}, i.m = s, i.c = n, i.p = "dist/", i(0);

    function i(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {exports: {}, id: t, loaded: !1};
        return s[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports
    }

    var s, n
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (d) {
    var i = /\+/g;

    function p(t) {
        return f.raw ? t : encodeURIComponent(t)
    }

    function u(t, e) {
        t = f.raw ? t : function (t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(i, " ")), f.json ? JSON.parse(t) : t
            } catch (t) {
            }
        }(t);
        return d.isFunction(e) ? e(t) : t
    }

    var f = d.cookie = function (t, e, i) {
        var s, n;
        if (1 < arguments.length && !d.isFunction(e)) return "number" == typeof (i = d.extend({}, f.defaults, i)).expires && (s = i.expires, (n = i.expires = new Date).setMilliseconds(n.getMilliseconds() + 864e5 * s)), document.cookie = [p(t), "=", (n = e, p(f.json ? JSON.stringify(n) : String(n))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
        for (var o = t ? void 0 : {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0, l = r.length; a < l; a++) {
            var c = r[a].split("="), h = (h = c.shift(), f.raw ? h : decodeURIComponent(h)), c = c.join("=");
            if (t === h) {
                o = u(c, e);
                break
            }
            t || void 0 === (c = u(c)) || (o[h] = c)
        }
        return o
    };
    f.defaults = {}, d.removeCookie = function (t, e) {
        return d.cookie(t, "", d.extend({}, e, {expires: -1})), !d.cookie(t)
    }
});
