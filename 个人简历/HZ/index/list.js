webpackJsonp([31, 40], [function (t, n, e) {
    "use strict";
    e(363), e(7), e(364);
    var i = (e(91), e(93));
    e(365);
    $("img.lazy").lazyload(), i(0), $("#slider").Swipe({
        startSlide: 0,
        speed: 400,
        auto: 3e3,
        continuous: !0,
        disableScroll: !0,
        stopPropagation: !1,
        callback: function (t, n) {
            $(".swipe-index span").eq(t).addClass("curr").siblings().removeClass("curr")
        }
    })
}, , , , , , , function (t, n, e) {
    "use strict";
    function i() {
        window.wx && (o.init(), window.clearInterval(r), window.wx.ready(function () {
            "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", function () {
                setTimeout(function () {
                    window.WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}, function () {
                    })
                }, 0)
            }) : setTimeout(function () {
                window.WeixinJSBridge.invoke("setFontSizeCallback", {fontSize: 0}, function () {
                })
            }, 0)
        }))
    }

    e(8);
    var r, o = e(82), a = e(9);
    r = window.setInterval(function () {
        window.wx && window.clearInterval(r), i()
    }, 50);
    var u = function (t) {
        var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return n ? n[1] || "" : ""
    }, s = u("channel");
    s && a.set("channel", s, {expires: 365, domain: ".shuidihuzhu.com", path: "/"});
    var c = localStorage.getItem("userId"), f = localStorage.getItem(c);
    f && (f = JSON.parse(f)), c && f && (f.userId = c, a.set(f, {
        expires: 365,
        domain: ".shuidihuzhu.com",
        path: "/"
    })), a.set({nickname: "", headImgUrl: ""}, {
        expires: -1,
        domain: ".shuidihuzhu.com",
        path: "/"
    }), window.onerror = function (t, n, e, i, r) {
        return "Script error." != t && !n || (setTimeout(function () {
                var t = {};
                if (i = i || window.event && window.event.errorCharacter || 0, t.url = n, t.line = e, t.col = i, r && r.stack)t.msg = r.stack.toString(); else if (arguments.callee) {
                    for (var o = [], a = arguments.callee.caller, u = 3; a && --u > 0 && (o.push(a.toString()), a !== a.caller);)a = a.caller;
                    o = o.join(","), t.msg = o
                }
                try {
                    t.msg = encodeURIComponent(t.msg);
                    var s = t.url.match("js/.*js").toString().replace("js/", "").replace(".js", "") + t.col, c = new Image;
                    c.src = "http://sea.shuidihuzhu.com/admin/logs/feException?msg=" + t.msg.slice(0, 200) + "&url=" + t.url + "&line=" + t.line + "&col=" + t.col + "&key=" + s
                } catch (f) {
                }
            }, 0), !0)
    }
}, function (t, n, e) {
    "use strict";
    var i = e(9), r = r || [];
    $.trackEvent = function (t, n) {
        r.push(["_trackEvent", t, n])
    }, $.trackLog = function (t) {
        var n = {type: 1, v1: i.get("userId"), v2: "", v3: "", v4: "", v5: ""};
        $.extend(n, t);
        var e = new Image;
        e.src = "/api/log?type=" + n.type + "&v1=" + n.v1 + "&v2=" + n.v2 + "&v3=" + n.v3 + "&v4=" + n.v4 + "&v5=" + n.v5
    }, $("body").on("click", "[trackEvent]", function () {
        var t = $(this).attr("trackLabel");
        $.trackEvent(t, "点击")
    })
}, function (t, n, e) {
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var r, o = e(10), a = i(o), u = e(78), s = i(u), c = function l() {
        return l.get.apply(l, arguments)
    }, f = c.utils = {
        isArray: Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, isPlainObject: function (t) {
            return !!t && "[object Object]" === Object.prototype.toString.call(t)
        }, toArray: function (t) {
            return Array.prototype.slice.call(t)
        }, getKeys: s["default"] || function (t) {
            var n = [], e = "";
            for (e in t)t.hasOwnProperty(e) && n.push(e);
            return n
        }, encode: function (t) {
            return String(t).replace(/[,;"\\=\s%]/g, function (t) {
                return encodeURIComponent(t)
            })
        }, decode: function (t) {
            return decodeURIComponent(t)
        }, retrieve: function (t, n) {
            return null == t ? n : t
        }
    };
    c.defaults = {}, c.expiresMultiplier = 86400, c.set = function (t, n, e) {
        if (f.isPlainObject(t))for (var i in t)t.hasOwnProperty(i) && this.set(i, t[i], n); else {
            e = f.isPlainObject(e) ? e : {expires: e};
            var r = void 0 !== e.expires ? e.expires : this.defaults.expires || "", o = "undefined" == typeof r ? "undefined" : (0, a["default"])(r);
            "string" === o && "" !== r ? r = new Date(r) : "number" === o && (r = new Date(+new Date + 1e3 * this.expiresMultiplier * r)), "" !== r && "toGMTString" in r && (r = ";expires=" + r.toGMTString());
            var u = e.path || this.defaults.path;
            u = u ? ";path=" + u : "";
            var s = e.domain || this.defaults.domain;
            s = s ? ";domain=" + s : "";
            var c = e.secure || this.defaults.secure ? ";secure" : "";
            e.secure === !1 && (c = ""), document.cookie = f.encode(t) + "=" + f.encode(n) + r + u + s + c
        }
        return this
    }, c.setDefault = function (t, n, e) {
        if (f.isPlainObject(t)) {
            for (var i in t)void 0 === this.get(i) && this.set(i, t[i], n);
            return c
        }
        if (void 0 === this.get(t))return this.set.apply(this, arguments)
    }, c.remove = function (t) {
        t = f.isArray(t) ? t : f.toArray(arguments);
        for (var n = 0, e = t.length; n < e; n++)this.set(t[n], "", -1);
        return this
    }, c.removeSpecific = function (t, n) {
        if (!n)return this.remove(t);
        t = f.isArray(t) ? t : [t], n.expire = -1;
        for (var e = 0, i = t.length; e < i; e++)this.set(t[e], "", n);
        return this
    }, c.empty = function () {
        return this.remove(f.getKeys(this.all()))
    }, c.get = function (t, n) {
        var e = this.all();
        if (f.isArray(t)) {
            for (var i = {}, r = 0, o = t.length; r < o; r++) {
                var a = t[r];
                i[a] = f.retrieve(e[a], n)
            }
            return i
        }
        return f.retrieve(e[t], n)
    }, c.all = function () {
        if ("" === document.cookie)return {};
        for (var t = document.cookie.split("; "), n = {}, e = 0, i = t.length; e < i; e++) {
            var r = t[e].split("="), o = f.decode(r.shift()), a = f.decode(r.join("="));
            n[o] = a
        }
        return n
    }, c.enabled = function () {
        if (navigator.cookieEnabled)return !0;
        var t = "_" === c.set("_", "_").get("_");
        return c.remove("_"), t
    }, r = function () {
        return c
    }.call(n, e, n, t), !(void 0 !== r && (t.exports = r)), t.exports = c
}, function (t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    n.__esModule = !0;
    var r = e(11), o = i(r), a = e(62), u = i(a), s = "function" == typeof u["default"] && "symbol" == typeof o["default"] ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : typeof t
    };
    n["default"] = "function" == typeof u["default"] && "symbol" === s(o["default"]) ? function (t) {
        return "undefined" == typeof t ? "undefined" : s(t)
    } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
    }
}, function (t, n, e) {
    t.exports = {"default": e(12), __esModule: !0}
}, function (t, n, e) {
    e(13), e(57), t.exports = e(61).f("iterator")
}, function (t, n, e) {
    "use strict";
    var i = e(14)(!0);
    e(17)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, n = this._t, e = this._i;
        return e >= n.length ? {value: void 0, done: !0} : (t = i(n, e), this._i += t.length, {value: t, done: !1})
    })
}, function (t, n, e) {
    var i = e(15), r = e(16);
    t.exports = function (t) {
        return function (n, e) {
            var o, a, u = String(r(n)), s = i(e), c = u.length;
            return s < 0 || s >= c ? t ? "" : void 0 : (o = u.charCodeAt(s), o < 55296 || o > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : o : t ? u.slice(s, s + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function (t, n) {
    var e = Math.ceil, i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : e)(t)
    }
}, function (t, n) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, n, e) {
    "use strict";
    var i = e(18), r = e(19), o = e(34), a = e(24), u = e(35), s = e(36), c = e(37), f = e(53), l = e(55), d = e(54)("iterator"), h = !([].keys && "next" in [].keys()), p = "@@iterator", v = "keys", m = "values", g = function () {
        return this
    };
    t.exports = function (t, n, e, y, w, b, x) {
        c(e, n, y);
        var S, _, k, O = function (t) {
            if (!h && t in I)return I[t];
            switch (t) {
                case v:
                    return function () {
                        return new e(this, t)
                    };
                case m:
                    return function () {
                        return new e(this, t)
                    }
            }
            return function () {
                return new e(this, t)
            }
        }, E = n + " Iterator", A = w == m, M = !1, I = t.prototype, j = I[d] || I[p] || w && I[w], P = j || O(w), T = w ? A ? O("entries") : P : void 0, U = "Array" == n ? I.entries || j : j;
        if (U && (k = l(U.call(new t)), k !== Object.prototype && (f(k, E, !0), i || u(k, d) || a(k, d, g))), A && j && j.name !== m && (M = !0, P = function () {
                return j.call(this)
            }), i && !x || !h && !M && I[d] || a(I, d, P), s[n] = P, s[E] = g, w)if (S = {
                values: A ? P : O(m),
                keys: b ? P : O(v),
                entries: T
            }, x)for (_ in S)_ in I || o(I, _, S[_]); else r(r.P + r.F * (h || M), n, S);
        return S
    }
}, function (t, n) {
    t.exports = !0
}, function (t, n, e) {
    var i = e(20), r = e(21), o = e(22), a = e(24), u = "prototype", s = function (t, n, e) {
        var c, f, l, d = t & s.F, h = t & s.G, p = t & s.S, v = t & s.P, m = t & s.B, g = t & s.W, y = h ? r : r[n] || (r[n] = {}), w = y[u], b = h ? i : p ? i[n] : (i[n] || {})[u];
        h && (e = n);
        for (c in e)f = !d && b && void 0 !== b[c], f && c in y || (l = f ? b[c] : e[c], y[c] = h && "function" != typeof b[c] ? e[c] : m && f ? o(l, i) : g && b[c] == l ? function (t) {
            var n = function (n, e, i) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n);
                        case 2:
                            return new t(n, e)
                    }
                    return new t(n, e, i)
                }
                return t.apply(this, arguments)
            };
            return n[u] = t[u], n
        }(l) : v && "function" == typeof l ? o(Function.call, l) : l, v && ((y.virtual || (y.virtual = {}))[c] = l, t & s.R && w && !w[c] && a(w, c, l)))
    };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function (t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
}, function (t, n) {
    var e = t.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = e)
}, function (t, n, e) {
    var i = e(23);
    t.exports = function (t, n, e) {
        if (i(t), void 0 === n)return t;
        switch (e) {
            case 1:
                return function (e) {
                    return t.call(n, e)
                };
            case 2:
                return function (e, i) {
                    return t.call(n, e, i)
                };
            case 3:
                return function (e, i, r) {
                    return t.call(n, e, i, r)
                }
        }
        return function () {
            return t.apply(n, arguments)
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, n, e) {
    var i = e(25), r = e(33);
    t.exports = e(29) ? function (t, n, e) {
        return i.f(t, n, r(1, e))
    } : function (t, n, e) {
        return t[n] = e, t
    }
}, function (t, n, e) {
    var i = e(26), r = e(28), o = e(32), a = Object.defineProperty;
    n.f = e(29) ? Object.defineProperty : function (t, n, e) {
        if (i(t), n = o(n, !0), i(e), r)try {
            return a(t, n, e)
        } catch (u) {
        }
        if ("get" in e || "set" in e)throw TypeError("Accessors not supported!");
        return "value" in e && (t[n] = e.value), t
    }
}, function (t, n, e) {
    var i = e(27);
    t.exports = function (t) {
        if (!i(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, n) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, n, e) {
    t.exports = !e(29) && !e(30)(function () {
            return 7 != Object.defineProperty(e(31)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
}, function (t, n, e) {
    t.exports = !e(30)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (t, n) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (n) {
            return !0
        }
    }
}, function (t, n, e) {
    var i = e(27), r = e(20).document, o = i(r) && i(r.createElement);
    t.exports = function (t) {
        return o ? r.createElement(t) : {}
    }
}, function (t, n, e) {
    var i = e(27);
    t.exports = function (t, n) {
        if (!i(t))return t;
        var e, r;
        if (n && "function" == typeof(e = t.toString) && !i(r = e.call(t)))return r;
        if ("function" == typeof(e = t.valueOf) && !i(r = e.call(t)))return r;
        if (!n && "function" == typeof(e = t.toString) && !i(r = e.call(t)))return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
}, function (t, n, e) {
    t.exports = e(24)
}, function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
        return e.call(t, n)
    }
}, function (t, n) {
    t.exports = {}
}, function (t, n, e) {
    "use strict";
    var i = e(38), r = e(33), o = e(53), a = {};
    e(24)(a, e(54)("iterator"), function () {
        return this
    }), t.exports = function (t, n, e) {
        t.prototype = i(a, {next: r(1, e)}), o(t, n + " Iterator")
    }
}, function (t, n, e) {
    var i = e(26), r = e(39), o = e(51), a = e(48)("IE_PROTO"), u = function () {
    }, s = "prototype", c = function () {
        var t, n = e(31)("iframe"), i = o.length, r = "<", a = ">";
        for (n.style.display = "none", e(52).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write(r + "script" + a + "document.F=Object" + r + "/script" + a), t.close(), c = t.F; i--;)delete c[s][o[i]];
        return c()
    };
    t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (u[s] = i(t), e = new u, u[s] = null, e[a] = t) : e = c(), void 0 === n ? e : r(e, n)
        }
}, function (t, n, e) {
    var i = e(25), r = e(26), o = e(40);
    t.exports = e(29) ? Object.defineProperties : function (t, n) {
        r(t);
        for (var e, a = o(n), u = a.length, s = 0; u > s;)i.f(t, e = a[s++], n[e]);
        return t
    }
}, function (t, n, e) {
    var i = e(41), r = e(51);
    t.exports = Object.keys || function (t) {
            return i(t, r)
        }
}, function (t, n, e) {
    var i = e(35), r = e(42), o = e(45)(!1), a = e(48)("IE_PROTO");
    t.exports = function (t, n) {
        var e, u = r(t), s = 0, c = [];
        for (e in u)e != a && i(u, e) && c.push(e);
        for (; n.length > s;)i(u, e = n[s++]) && (~o(c, e) || c.push(e));
        return c
    }
}, function (t, n, e) {
    var i = e(43), r = e(16);
    t.exports = function (t) {
        return i(r(t))
    }
}, function (t, n, e) {
    var i = e(44);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
        return e.call(t).slice(8, -1)
    }
}, function (t, n, e) {
    var i = e(42), r = e(46), o = e(47);
    t.exports = function (t) {
        return function (n, e, a) {
            var u, s = i(n), c = r(s.length), f = o(a, c);
            if (t && e != e) {
                for (; c > f;)if (u = s[f++], u != u)return !0
            } else for (; c > f; f++)if ((t || f in s) && s[f] === e)return t || f || 0;
            return !t && -1
        }
    }
}, function (t, n, e) {
    var i = e(15), r = Math.min;
    t.exports = function (t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function (t, n, e) {
    var i = e(15), r = Math.max, o = Math.min;
    t.exports = function (t, n) {
        return t = i(t), t < 0 ? r(t + n, 0) : o(t, n)
    }
}, function (t, n, e) {
    var i = e(49)("keys"), r = e(50);
    t.exports = function (t) {
        return i[t] || (i[t] = r(t))
    }
}, function (t, n, e) {
    var i = e(20), r = "__core-js_shared__", o = i[r] || (i[r] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, n) {
    var e = 0, i = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + i).toString(36))
    }
}, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, n, e) {
    t.exports = e(20).document && document.documentElement
}, function (t, n, e) {
    var i = e(25).f, r = e(35), o = e(54)("toStringTag");
    t.exports = function (t, n, e) {
        t && !r(t = e ? t : t.prototype, o) && i(t, o, {configurable: !0, value: n})
    }
}, function (t, n, e) {
    var i = e(49)("wks"), r = e(50), o = e(20).Symbol, a = "function" == typeof o, u = t.exports = function (t) {
        return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
    };
    u.store = i
}, function (t, n, e) {
    var i = e(35), r = e(56), o = e(48)("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
            return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
}, function (t, n, e) {
    var i = e(16);
    t.exports = function (t) {
        return Object(i(t))
    }
}, function (t, n, e) {
    e(58);
    for (var i = e(20), r = e(24), o = e(36), a = e(54)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
        var c = u[s], f = i[c], l = f && f.prototype;
        l && !l[a] && r(l, a, c), o[c] = o.Array
    }
}, function (t, n, e) {
    "use strict";
    var i = e(59), r = e(60), o = e(36), a = e(42);
    t.exports = e(17)(Array, "Array", function (t, n) {
        this._t = a(t), this._i = 0, this._k = n
    }, function () {
        var t = this._t, n = this._k, e = this._i++;
        return !t || e >= t.length ? (this._t = void 0, r(1)) : "keys" == n ? r(0, e) : "values" == n ? r(0, t[e]) : r(0, [e, t[e]])
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (t, n) {
    t.exports = function () {
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {value: n, done: !!t}
    }
}, function (t, n, e) {
    n.f = e(54)
}, function (t, n, e) {
    t.exports = {"default": e(63), __esModule: !0}
}, function (t, n, e) {
    e(64), e(75), e(76), e(77), t.exports = e(21).Symbol
}, function (t, n, e) {
    "use strict";
    var i = e(20), r = e(35), o = e(29), a = e(19), u = e(34), s = e(65).KEY, c = e(30), f = e(49), l = e(53), d = e(50), h = e(54), p = e(61), v = e(66), m = e(67), g = e(68), y = e(71), w = e(26), b = e(42), x = e(32), S = e(33), _ = e(38), k = e(72), O = e(74), E = e(25), A = e(40), M = O.f, I = E.f, j = k.f, P = i.Symbol, T = i.JSON, U = T && T.stringify, C = "prototype", L = h("_hidden"), N = h("toPrimitive"), z = {}.propertyIsEnumerable, F = f("symbol-registry"), $ = f("symbols"), D = f("op-symbols"), R = Object[C], J = "function" == typeof P, Q = i.QObject, W = !Q || !Q[C] || !Q[C].findChild, B = o && c(function () {
        return 7 != _(I({}, "a", {
                get: function () {
                    return I(this, "a", {value: 7}).a
                }
            })).a
    }) ? function (t, n, e) {
        var i = M(R, n);
        i && delete R[n], I(t, n, e), i && t !== R && I(R, n, i)
    } : I, q = function (t) {
        var n = $[t] = _(P[C]);
        return n._k = t, n
    }, G = J && "symbol" == typeof P.iterator ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        return t instanceof P
    }, Y = function (t, n, e) {
        return t === R && Y(D, n, e), w(t), n = x(n, !0), w(e), r($, n) ? (e.enumerable ? (r(t, L) && t[L][n] && (t[L][n] = !1), e = _(e, {enumerable: S(0, !1)})) : (r(t, L) || I(t, L, S(1, {})), t[L][n] = !0), B(t, n, e)) : I(t, n, e)
    }, Z = function (t, n) {
        w(t);
        for (var e, i = g(n = b(n)), r = 0, o = i.length; o > r;)Y(t, e = i[r++], n[e]);
        return t
    }, K = function (t, n) {
        return void 0 === n ? _(t) : Z(_(t), n)
    }, H = function (t) {
        var n = z.call(this, t = x(t, !0));
        return !(this === R && r($, t) && !r(D, t)) && (!(n || !r(this, t) || !r($, t) || r(this, L) && this[L][t]) || n)
    }, X = function (t, n) {
        if (t = b(t), n = x(n, !0), t !== R || !r($, n) || r(D, n)) {
            var e = M(t, n);
            return !e || !r($, n) || r(t, L) && t[L][n] || (e.enumerable = !0), e
        }
    }, V = function (t) {
        for (var n, e = j(b(t)), i = [], o = 0; e.length > o;)r($, n = e[o++]) || n == L || n == s || i.push(n);
        return i
    }, tt = function (t) {
        for (var n, e = t === R, i = j(e ? D : b(t)), o = [], a = 0; i.length > a;)!r($, n = i[a++]) || e && !r(R, n) || o.push($[n]);
        return o
    };
    J || (P = function () {
        if (this instanceof P)throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0), n = function (e) {
            this === R && n.call(D, e), r(this, L) && r(this[L], t) && (this[L][t] = !1), B(this, t, S(1, e))
        };
        return o && W && B(R, t, {configurable: !0, set: n}), q(t)
    }, u(P[C], "toString", function () {
        return this._k
    }), O.f = X, E.f = Y, e(73).f = k.f = V, e(70).f = H, e(69).f = tt, o && !e(18) && u(R, "propertyIsEnumerable", H, !0), p.f = function (t) {
        return q(h(t))
    }), a(a.G + a.W + a.F * !J, {Symbol: P});
    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; nt.length > et;)h(nt[et++]);
    for (var nt = A(h.store), et = 0; nt.length > et;)v(nt[et++]);
    a(a.S + a.F * !J, "Symbol", {
        "for": function (t) {
            return r(F, t += "") ? F[t] : F[t] = P(t)
        }, keyFor: function (t) {
            if (G(t))return m(F, t);
            throw TypeError(t + " is not a symbol!")
        }, useSetter: function () {
            W = !0
        }, useSimple: function () {
            W = !1
        }
    }), a(a.S + a.F * !J, "Object", {
        create: K,
        defineProperty: Y,
        defineProperties: Z,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: V,
        getOwnPropertySymbols: tt
    }), T && a(a.S + a.F * (!J || c(function () {
            var t = P();
            return "[null]" != U([t]) || "{}" != U({a: t}) || "{}" != U(Object(t))
        })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !G(t)) {
                for (var n, e, i = [t], r = 1; arguments.length > r;)i.push(arguments[r++]);
                return n = i[1], "function" == typeof n && (e = n), !e && y(n) || (n = function (t, n) {
                    if (e && (n = e.call(this, t, n)), !G(n))return n
                }), i[1] = n, U.apply(T, i)
            }
        }
    }), P[C][N] || e(24)(P[C], N, P[C].valueOf), l(P, "Symbol"), l(Math, "Math", !0), l(i.JSON, "JSON", !0)
}, function (t, n, e) {
    var i = e(50)("meta"), r = e(27), o = e(35), a = e(25).f, u = 0, s = Object.isExtensible || function () {
            return !0
        }, c = !e(30)(function () {
        return s(Object.preventExtensions({}))
    }), f = function (t) {
        a(t, i, {value: {i: "O" + ++u, w: {}}})
    }, l = function (t, n) {
        if (!r(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, i)) {
            if (!s(t))return "F";
            if (!n)return "E";
            f(t)
        }
        return t[i].i
    }, d = function (t, n) {
        if (!o(t, i)) {
            if (!s(t))return !0;
            if (!n)return !1;
            f(t)
        }
        return t[i].w
    }, h = function (t) {
        return c && p.NEED && s(t) && !o(t, i) && f(t), t
    }, p = t.exports = {KEY: i, NEED: !1, fastKey: l, getWeak: d, onFreeze: h}
}, function (t, n, e) {
    var i = e(20), r = e(21), o = e(18), a = e(61), u = e(25).f;
    t.exports = function (t) {
        var n = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in n || u(n, t, {value: a.f(t)})
    }
}, function (t, n, e) {
    var i = e(40), r = e(42);
    t.exports = function (t, n) {
        for (var e, o = r(t), a = i(o), u = a.length, s = 0; u > s;)if (o[e = a[s++]] === n)return e
    }
}, function (t, n, e) {
    var i = e(40), r = e(69), o = e(70);
    t.exports = function (t) {
        var n = i(t), e = r.f;
        if (e)for (var a, u = e(t), s = o.f, c = 0; u.length > c;)s.call(t, a = u[c++]) && n.push(a);
        return n
    }
}, function (t, n) {
    n.f = Object.getOwnPropertySymbols
}, function (t, n) {
    n.f = {}.propertyIsEnumerable
}, function (t, n, e) {
    var i = e(44);
    t.exports = Array.isArray || function (t) {
            return "Array" == i(t)
        }
}, function (t, n, e) {
    var i = e(42), r = e(73).f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function (t) {
        try {
            return r(t)
        } catch (n) {
            return a.slice()
        }
    };
    t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? u(t) : r(i(t))
    }
}, function (t, n, e) {
    var i = e(41), r = e(51).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
            return i(t, r)
        }
}, function (t, n, e) {
    var i = e(70), r = e(33), o = e(42), a = e(32), u = e(35), s = e(28), c = Object.getOwnPropertyDescriptor;
    n.f = e(29) ? c : function (t, n) {
        if (t = o(t), n = a(n, !0), s)try {
            return c(t, n)
        } catch (e) {
        }
        if (u(t, n))return r(!i.f.call(t, n), t[n])
    }
}, function (t, n) {
}, function (t, n, e) {
    e(66)("asyncIterator")
}, function (t, n, e) {
    e(66)("observable")
}, function (t, n, e) {
    t.exports = {"default": e(79), __esModule: !0}
}, function (t, n, e) {
    e(80), t.exports = e(21).Object.keys
}, function (t, n, e) {
    var i = e(56), r = e(40);
    e(81)("keys", function () {
        return function (t) {
            return r(i(t))
        }
    })
}, function (t, n, e) {
    var i = e(19), r = e(21), o = e(30);
    t.exports = function (t, n) {
        var e = (r.Object || {})[t] || Object[t], a = {};
        a[t] = n(e), i(i.S + i.F * o(function () {
                e(1)
            }), "Object", a)
    }
}, function (t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    var r = e(83), o = i(r), a = e(87), u = e(88), s = e(89), c = e(9), f = e(90), l = e(91), d = f.inviteJoinMoney, h = {
        init: function () {
            1 == u() && (this.nickname, this.headImgUrl, this.thumbUrl = "http://static-59729941.mtmssdn0.com/img/share_logo2.png", this.description = "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。", this.uri = window.location.href, this._setParams())
        }, _getRandomTitle: function (t, n) {
            var e = t + "邀请你加入水滴互助，最高享30万健康保障。";
            return e
        }, _isHasUserInfo: function (t) {
            var n = this, e = c.get("userId");
            c.get("token");
            e ? s(function (e) {
                e.data.nickname ? n.nickname = e.data.nickname : n.nickname = "我", n.headImgUrl = e.data.headImgUrl, t(!0)
            }) : t(!1)
        }, _getShareCode: function (t) {
            var n = this;
            n._isHasUserInfo(function (n) {
                var e = c.get("userId"), i = c.get("token");
                n ? $.ajax({
                    type: "POST",
                    url: "/api/inv/inviteCode",
                    data: {userId: e, token: i, invitationId: 1},
                    dataType: "json",
                    success: function (n) {
                        0 == n.code && t(n.data.inviteCode)
                    }
                }) : t(!1)
            })
        }, _setParams: function () {
            var t = this, n = c.get("userId");
            this._getShareCode(function (e) {
                e || n ? t._getLoginedParams(e) : t._getNotLoginParams()
            })
        }, _getLoginedParams: function (t) {
            var n;
            if (this.uri.indexOf("list/") > -1)n = {
                title: "我加入了水滴互助，一瓶水的钱在关键时刻能帮上大忙！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel=",
                friendChannel: "mp_wx_activity_invite1hy",
                friendsChannel: "mp_wx_activity_invite1pyq"
            }, this._hideMenuShare(); else if (this.uri.indexOf("intro") > -1)n = {
                title: "我加入了水滴互助，还不错哦，快来加入吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("inviteJoin") > -1) {
                var e = decodeURIComponent(a.urlParam("nickname"));
                n = {
                    title: this._getRandomTitle(e, d),
                    description: this.description,
                    thumbUrl: this.thumbUrl,
                    link: this.uri,
                    friendChannel: "mp_wx_activity_invite1hy",
                    friendsChannel: "mp_wx_activity_invite1pyq"
                }, this._hideMenuShare()
            } else {
                var i;
                i = {
                    title: this._getRandomTitle(this.nickname, d),
                    description: "水滴互助是腾讯、IDG资本等联合投资的抵御风险社群，已有超100万用户加入。"
                }, (0, o["default"])(i, "description", this.description), (0, o["default"])(i, "thumbUrl", this.thumbUrl), (0, o["default"])(i, "link", "https://www.shuidihuzhu.com/sd/inviteJoin?nickname=" + this.nickname + "&headImgUrl=" + this.headImgUrl + "&inviteCode=" + t + "&channel="), (0, o["default"])(i, "friendChannel", "mp_wx_activity_invite1hy"), (0, o["default"])(i, "friendsChannel", "mp_wx_activity_invite1pyq"), n = i, this._hideMenuShare(), this._showFrideShare()
            }
            this._registShare(n)
        }, _getNotLoginParams: function () {
            var t;
            if (this.uri.indexOf("list/") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: this.uri,
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("intro") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }; else if (this.uri.indexOf("invite") > -1)t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            }, l() ? (this._hideMenuShare(), this._showFrideShare()) : (this._hideMenuShare(), this._hideFrideShare()); else if (this.uri.indexOf("inviteJoin") > -1) {
                var n = decodeURIComponent(a.urlParam("nickname"));
                t = {
                    title: this._getRandomTitle(n, d),
                    description: this.description,
                    thumbUrl: this.thumbUrl,
                    link: this.uri,
                    friendChannel: "mp_wx_activity_invite1hy",
                    friendsChannel: "mp_wx_activity_invite1pyq"
                }, this._hideMenuShare()
            } else t = {
                title: "我关注了水滴互助，还不错哦，快来看看吧！",
                description: this.description,
                thumbUrl: this.thumbUrl,
                link: "https://www.shuidihuzhu.com/sd/intro",
                friendChannel: "",
                friendsChannel: ""
            };
            this._registShare(t)
        }, _registShare: function (t) {
            var n = this;
            $.ajax({
                type: "POST", url: "/api/const/signature", data: {url: n.uri}, dataType: "json", success: function (e) {
                    if ($(n).trigger("shareParams", t), 0 == e.code) {
                        var i = e.data;
                        window.wx.config({
                            debug: !1,
                            appId: i.appid,
                            timestamp: i.timestamp,
                            nonceStr: i.noncestr,
                            signature: i.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "showMenuItems", "hideMenuItems"]
                        }), window.wx.ready(function () {
                            window.wx.onMenuShareTimeline({
                                title: t.title,
                                desc: "",
                                link: t.link + t.friendsChannel,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    t.link.indexOf("inviteJoin") > -1 && $.trackLog({
                                        type: 1,
                                        v2: window.location.pathname,
                                        v4: "1"
                                    })
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareAppMessage({
                                title: t.title,
                                desc: t.description,
                                link: t.link + t.friendChannel,
                                imgUrl: t.thumbUrl,
                                type: "link",
                                dataUrl: "",
                                success: function () {
                                    t.link.indexOf("inviteJoin") > -1 && $.trackLog({
                                        type: 1,
                                        v2: window.location.pathname,
                                        v4: "0"
                                    })
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareQQ({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友QQ分享好友成功", "分享")
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareWeibo({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友分享微博成功", "分享")
                                },
                                cancel: function () {
                                }
                            }), window.wx.onMenuShareQZone({
                                title: t.title,
                                desc: t.description,
                                link: t.link,
                                imgUrl: t.thumbUrl,
                                success: function () {
                                    $.trackEvent("邀请好友分享朋友圈成功", "分享")
                                },
                                cancel: function () {
                                }
                            })
                        })
                    }
                }
            })
        }, _hideMenuShare: function () {
            window.wx.ready(function () {
                wx.hideMenuItems({menuList: ["menuItem:share:timeline"]})
            })
        }, _hideFrideShare: function () {
            window.wx.ready(function () {
                wx.hideMenuItems({menuList: ["menuItem:share:appMessage"]})
            })
        }, _showFrideShare: function () {
            window.wx.ready(function () {
                wx.showMenuItems({menuList: ["menuItem:share:appMessage"]})
            })
        }
    };
    t.exports = h
}, function (t, n, e) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    n.__esModule = !0;
    var r = e(84), o = i(r);
    n["default"] = function (t, n, e) {
        return n in t ? (0, o["default"])(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }
}, function (t, n, e) {
    t.exports = {"default": e(85), __esModule: !0}
}, function (t, n, e) {
    e(86);
    var i = e(21).Object;
    t.exports = function (t, n, e) {
        return i.defineProperty(t, n, e)
    }
}, function (t, n, e) {
    var i = e(19);
    i(i.S + i.F * !e(29), "Object", {defineProperty: e(25).f})
}, function (t, n, e) {
    "use strict";
    function i(t, n, e) {
        return 0 !== t.code ? ($().inform({
            type: "error",
            title: t.msg || "操作失败",
            delay: 2e3,
            size: "large",
            cb: e
        }), !1) : void n(t.data)
    }

    function r() {
        var t = "test", n = window.sessionStorage;
        try {
            return n.setItem(t, "testValue"), n.removeItem(t), !0
        } catch (e) {
            return !1
        }
    }

    function o(t, n) {
        r() && localStorage.setItem(t, n)
    }

    function a(t) {
        return $().inform({type: "error", title: "连接服务器出错", delay: 2e3, size: "large", cb: t}), !1
    }

    function u(t, n, e, r, o, u) {
        var s = {
            url: t, type: n, dataType: "JSON", data: e, success: function (t) {
                i(t, r, o)
            }, error: function () {
                a(o)
            }
        };
        u && $.extend(s, u), $.ajax(s)
    }

    function s(t) {
        return t = "" + t, t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function c(t) {
        return t.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "")
    }

    function f(t) {
        return t < 9 && t >= 1 ? 1 : t >= 9 && t < 30 ? 2 : t < 1 ? 3 : 4
    }

    function l() {
        return p("channel") || h.get("channel")
    }

    function d(t) {
        function n(t, n) {
            var e = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(t);
            return e ? e[1] || "" : ""
        }

        var e, i = l();
        return n(t, "channel") ? t : e = t.indexOf("?") > -1 ? t + "&channel=" + i : t + "?channel=" + i
    }

    var h = e(9), p = function (t) {
        var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.href);
        return n ? n[1] || "" : ""
    };
    t.exports = {
        urlParam: p,
        querySuccess: i,
        queryError: a,
        ajaxQuery: u,
        escapeHTML: s,
        functionTpl: c,
        getPlanStatus: f,
        getChannel: l,
        setChannelForUrl: d,
        setLocalStorage: o
    }
}, function (t, n) {
    "use strict";
    var e = function (t) {
        var n = t || window.navigator.userAgent;
        return n = n.toLowerCase(), "micromessenger" == n.match(/MicroMessenger/i) ? 1 : "rock/" == n.match(/rock\//i) && "android" == n.match(/Android/i) ? 3 : "rock/" == n.match(/rock\//i) && "iphone os" == n.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = e
}, function (t, n, e) {
    "use strict";
    var i = e(9), r = function (t, n) {
        var e = i.get("userId"), r = i.get("token");
        $.ajax({
            type: "POST",
            url: "/api/useraccount/info",
            data: {token: r, userId: e},
            dataType: "json",
            success: function (n) {
                0 == n.code && i.set({mobile: n.data.mobile}, {
                    expires: 365,
                    domain: ".shuidihuzhu.com",
                    path: "/"
                }), t && t(n)
            },
            error: function () {
                n && n()
            }
        })
    };
    t.exports = r
}, function (t, n) {
    "use strict";
    var e = {
        inviteMoney: 5, inviteJoinMoney: 5, joinMoney: 9, getPlanName: function (t) {
            var n = ["中青年抗癌计划", "少儿健康互助计划", "中老年抗癌计划", "综合意外互助计划"];
            return t ? n[t - 1] : n[0]
        }, getPlanTipsForId: function (t) {
            var n = ["胃癌、肝癌等各种癌症", "白血病、癌症等50种大病", "胃癌、肝癌等各种癌症", "意外身故、意外伤残"];
            return t ? n[t - 1] : n[0]
        }, planUrlNames: ["young", "child", "old", "accident"], getPlanUrlName: function (t) {
            return e.planUrlNames[t - 1] ? e.planUrlNames[t - 1] : e.planUrlNames[0]
        }, getInsuranceIdForplanUrlName: function (t) {
            return e.planUrlNames.indexOf(t) + 1
        }, getPayName: function () {
            return "微信"
        }, getPayType: function (t) {
            return 1 == t ? this.weixinPayFlag : 2 == t ? this.nowWeixinPayFlag : ""
        }, nowWeixinPayFlag: 22, weixinPayFlag: 10
    };
    t.exports = e
}, function (t, n, e) {
    "use strict";
    var i = e(92), r = e(9), o = function () {
        var t = r.get("userId"), n = r.get("token"), e = r.get("openId");
        return !(!t || !n) && (2 != i() ? !(!n || !e) && {userId: t, token: n, openId: e} : !!n && {
                userId: t,
                token: n
            })
    };
    t.exports = o
}, function (t, n) {
    "use strict";
    var e = function () {
        var t = window.navigator.userAgent.toLowerCase();
        return "micromessenger" == t.match(/MicroMessenger/i) ? 1 : "rock/" == t.match(/rock\//i) && "android" == t.match(/Android/i) ? 3 : "rock/" == t.match(/rock\//i) && "iphone os" == t.match(/iPhone\sOS/i) ? 4 : 2
    };
    t.exports = e
}, function (t, n, e) {
    "use strict";
    function i(t) {
        var n = [$(".plan-bottom"), $(".notice-bottom"), $(".invite-bottom"), $(".me-bottom")], e = function (t) {
            t.attr("node-type", "blue").siblings().attr("node-type", "gray")
        };
        e(n[t]), $(".tab").click(function () {
            e($(this))
        })
    }

    e(94), t.exports = i
}, function (t, n) {
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, n) {
}, function (t, n) {
    "use strict";
    !function (t, n, e, i) {
        var r = t(n);
        t.fn.lazyload = function (o) {
            function a() {
                var n = 0;
                s.each(function () {
                    var e = t(this);
                    if (!c.skip_invisible || "none" != !e.css("display"))if (t.abovethetop(this, c) || t.leftofbegin(this, c)); else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                        if (++n > c.failure_limit)return !1
                    } else e.trigger("appear"), n = 0
                })
            }

            var u, s = this, c = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: n,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
            return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(c, o)), u = c.container === i || c.container === n ? r : t(c.container), 0 === c.event.indexOf("scroll") && u.bind(c.event, function () {
                return a()
            }), this.each(function () {
                var n = this, e = t(n);
                n.loaded = !1, e.attr("src") !== i && e.attr("src") !== !1 || e.is("img") && e.attr("src", c.placeholder), e.one("appear", function () {
                    if (!this.loaded) {
                        if (c.appear) {
                            var i = s.length;
                            c.appear.call(n, i, c)
                        }
                        t("<img />").bind("load", function () {
                            var i = e.attr("data-" + c.data_attribute);
                            e.hide(), e.is("img") ? e.attr("src", i) : e.css("background-image", "url('" + i + "')"), e[c.effect](c.effect_speed), n.loaded = !0;
                            var r = t.grep(s, function (t) {
                                return !t.loaded
                            });
                            if (s = t(r), c.load) {
                                var o = s.length;
                                c.load.call(n, o, c)
                            }
                        }).attr("src", e.attr("data-" + c.data_attribute))
                    }
                }), 0 !== c.event.indexOf("scroll") && e.bind(c.event, function () {
                    n.loaded || e.trigger("appear")
                })
            }), r.bind("resize", function () {
                a()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function (n) {
                n.originalEvent && n.originalEvent.persisted && s.each(function () {
                    t(this).trigger("appear")
                })
            }), t(e).ready(function () {
                a()
            }), this
        }, t.belowthefold = function (e, o) {
            var a;
            return a = o.container === i || o.container === n ? (n.innerHeight ? n.innerHeight : r.height()) + r.scrollTop() : t(o.container).offset().top + t(o.container).height(), a <= t(e).offset().top - o.threshold
        }, t.rightoffold = function (e, o) {
            var a;
            return a = o.container === i || o.container === n ? r.width() + r.scrollLeft() : t(o.container).offset().left + t(o.container).width(), a <= t(e).offset().left - o.threshold
        }, t.abovethetop = function (e, o) {
            var a;
            return a = o.container === i || o.container === n ? r.scrollTop() : t(o.container).offset().top, a >= t(e).offset().top + o.threshold + t(e).height()
        }, t.leftofbegin = function (e, o) {
            var a;
            return a = o.container === i || o.container === n ? r.scrollLeft() : t(o.container).offset().left,
            a >= t(e).offset().left + o.threshold + t(e).width()
        }, t.inviewport = function (n, e) {
            return !(t.rightoffold(n, e) || t.leftofbegin(n, e) || t.belowthefold(n, e) || t.abovethetop(n, e))
        }
    }($, window, document)
}, function (t, n) {
    "use strict";
    function e(t, n) {
        function e() {
            v = w.children, y = v.length, v.length < 2 && (n.continuous = !1), p.transitions && n.continuous && v.length < 3 && (w.appendChild(v[0].cloneNode(!0)), w.appendChild(w.children[1].cloneNode(!0)), v = w.children), m = new Array(v.length), g = t.getBoundingClientRect().width || t.offsetWidth, w.style.width = v.length * g + "px";
            for (var e = v.length; e--;) {
                var i = v[e];
                i.style.width = g + "px", i.setAttribute("data-index", e), p.transitions && (i.style.left = e * -g + "px", u(e, b > e ? -g : b < e ? g : 0, 0))
            }
            n.continuous && p.transitions && (u(o(b - 1), -g, 0), u(o(b + 1), g, 0)), p.transitions || (w.style.left = b * -g + "px"), t.style.visibility = "visible"
        }

        function i() {
            n.continuous ? a(b - 1) : b && a(b - 1)
        }

        function r() {
            n.continuous ? a(b + 1) : b < v.length - 1 && a(b + 1)
        }

        function o(t) {
            return (v.length + t % v.length) % v.length
        }

        function a(t, e) {
            if (b != t) {
                if (p.transitions) {
                    var i = Math.abs(b - t) / (b - t);
                    if (n.continuous) {
                        var r = i;
                        i = -m[o(t)] / g, i !== r && (t = -i * v.length + t)
                    }
                    for (var a = Math.abs(b - t) - 1; a--;)u(o((t > b ? t : b) - a - 1), g * i, 0);
                    t = o(t), u(b, g * i, e || x), u(t, 0, e || x), n.continuous && u(o(t - i), -(g * i), 0)
                } else t = o(t), c(b * -g, t * -g, e || x);
                b = t, h(n.callback && n.callback(b, v[b]))
            }
        }

        function u(t, n, e) {
            s(t, n, e), m[t] = n
        }

        function s(t, n, e) {
            var i = v[t], r = i && i.style;
            r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = e + "ms", r.webkitTransform = "translate(" + n + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + n + "px)")
        }

        function c(t, e, i) {
            if (!i)return void(w.style.left = e + "px");
            var r = +new Date, o = setInterval(function () {
                var a = +new Date - r;
                return a > i ? (w.style.left = e + "px", k && f(), n.transitionEnd && n.transitionEnd.call(event, b, v[b]), void clearInterval(o)) : void(w.style.left = (e - t) * (Math.floor(a / i * 100) / 100) + t + "px")
            }, 4)
        }

        function f() {
            S = setTimeout(r, k)
        }

        function l() {
            k = 0, clearTimeout(S)
        }

        var d = function () {
        }, h = function (t) {
            setTimeout(t || d, 0)
        }, p = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function (t) {
                var n = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var e in n)if (void 0 !== t.style[n[e]])return !0;
                return !1
            }(document.createElement("swipe"))
        };
        if (t) {
            var v, m, g, y, w = t.children[0];
            n = n || {};
            var b = parseInt(n.startSlide, 10) || 0, x = n.speed || 300;
            n.continuous = void 0 === n.continuous || n.continuous;
            var S, _, k = n.auto || 0, O = {}, E = {}, A = {
                handleEvent: function (t) {
                    switch (t.type) {
                        case"touchstart":
                            this.start(t);
                            break;
                        case"touchmove":
                            this.move(t);
                            break;
                        case"touchend":
                            h(this.end(t));
                            break;
                        case"webkitTransitionEnd":
                        case"msTransitionEnd":
                        case"oTransitionEnd":
                        case"otransitionend":
                        case"transitionend":
                            h(this.transitionEnd(t));
                            break;
                        case"resize":
                            h(e)
                    }
                    n.stopPropagation && t.stopPropagation()
                }, start: function (t) {
                    var n = t.touches[0];
                    O = {
                        x: n.pageX,
                        y: n.pageY,
                        time: +new Date
                    }, _ = void 0, E = {}, w.addEventListener("touchmove", this, !1), w.addEventListener("touchend", this, !1)
                }, move: function (t) {
                    if (!(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        n.disableScroll && t.preventDefault();
                        var e = t.touches[0];
                        E = {
                            x: e.pageX - O.x,
                            y: e.pageY - O.y
                        }, "undefined" == typeof _ && (_ = !!(_ || Math.abs(E.x) < Math.abs(E.y))), _ || (t.preventDefault(), l(), n.continuous ? (s(o(b - 1), E.x + m[o(b - 1)], 0), s(b, E.x + m[b], 0), s(o(b + 1), E.x + m[o(b + 1)], 0)) : (E.x = E.x / (!b && E.x > 0 || b == v.length - 1 && E.x < 0 ? Math.abs(E.x) / g + 1 : 1), s(b - 1, E.x + m[b - 1], 0), s(b, E.x + m[b], 0), s(b + 1, E.x + m[b + 1], 0)))
                    }
                }, end: function (t) {
                    var e = +new Date - O.time, i = Number(e) < 250 && Math.abs(E.x) > 20 || Math.abs(E.x) > g / 2, r = !b && E.x > 0 || b == v.length - 1 && E.x < 0;
                    n.continuous && (r = !1);
                    var a = E.x < 0;
                    _ || (i && !r ? (a ? (n.continuous ? (u(o(b - 1), -g, 0), u(o(b + 2), g, 0)) : u(b - 1, -g, 0), u(b, m[b] - g, x), u(o(b + 1), m[o(b + 1)] - g, x), b = o(b + 1)) : (n.continuous ? (u(o(b + 1), g, 0), u(o(b - 2), -g, 0)) : u(b + 1, g, 0), u(b, m[b] + g, x), u(o(b - 1), m[o(b - 1)] + g, x), b = o(b - 1)), n.callback && n.callback(b, v[b])) : n.continuous ? (u(o(b - 1), -g, x), u(b, 0, x), u(o(b + 1), g, x)) : (u(b - 1, -g, x), u(b, 0, x), u(b + 1, g, x))), w.removeEventListener("touchmove", A, !1), w.removeEventListener("touchend", A, !1)
                }, transitionEnd: function (t) {
                    parseInt(t.target.getAttribute("data-index"), 10) == b && (k && f(), n.transitionEnd && n.transitionEnd.call(t, b, v[b]))
                }
            };
            return e(), k && f(), p.addEventListener ? (p.touch && w.addEventListener("touchstart", A, !1), p.transitions && (w.addEventListener("webkitTransitionEnd", A, !1), w.addEventListener("msTransitionEnd", A, !1), w.addEventListener("oTransitionEnd", A, !1), w.addEventListener("otransitionend", A, !1), w.addEventListener("transitionend", A, !1)), window.addEventListener("resize", A, !1)) : window.onresize = function () {
                e()
            }, {
                setup: function () {
                    e()
                }, slide: function (t, n) {
                    l(), a(t, n)
                }, prev: function () {
                    l(), i()
                }, next: function () {
                    l(), r()
                }, stop: function () {
                    l()
                }, getPos: function () {
                    return b
                }, getNumSlides: function () {
                    return y
                }, kill: function () {
                    l(), w.style.width = "", w.style.left = "";
                    for (var t = v.length; t--;) {
                        var n = v[t];
                        n.style.width = "", n.style.left = "", p.transitions && s(t, 0, 0)
                    }
                    p.addEventListener ? (w.removeEventListener("touchstart", A, !1), w.removeEventListener("webkitTransitionEnd", A, !1), w.removeEventListener("msTransitionEnd", A, !1), w.removeEventListener("oTransitionEnd", A, !1), w.removeEventListener("otransitionend", A, !1), w.removeEventListener("transitionend", A, !1), window.removeEventListener("resize", A, !1)) : window.onresize = null
                }
            }
        }
    }

    (window.jQuery || window.Zepto) && !function (t) {
        t.fn.Swipe = function (n) {
            return this.each(function () {
                t(this).data("Swipe", new e(t(this)[0], n))
            })
        }
    }(window.jQuery || window.Zepto)
}]);