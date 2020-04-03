! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var n = [],
        i = t.document,
        s = Object.getPrototypeOf,
        r = n.slice,
        o = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        d = h.toString,
        p = d.call(Object),
        f = {},
        m = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(t, e, n) {
        var s, r = (e = e || i).createElement("script");
        if (r.text = t, n)
            for (s in v) n[s] && (r[s] = n[s]);
        e.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
    }
    var _ = "3.3.1",
        w = function(t, e) {
            return new w.fn.init(t, e)
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function D(t) {
        var e = !!t && "length" in t && t.length,
            n = b(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return w.each(this, t)
        },
        map: function(t) {
            return this.pushStack(w.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var t, e, n, i, s, r, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || m(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], o !== (i = t[e]) && (c && i && (w.isPlainObject(i) || (s = Array.isArray(i))) ? (s ? (s = !1, r = n && Array.isArray(n) ? n : []) : r = n && w.isPlainObject(n) ? n : {}, o[e] = w.extend(c, r, i)) : void 0 !== i && (o[e] = i));
        return o
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t)) && (!(e = s(t)) || "function" == typeof(n = h.call(e, "constructor") && e.constructor) && d.call(n) === p)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t) {
            y(t)
        },
        each: function(t, e) {
            var n, i = 0;
            if (D(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(x, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (D(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, s = t.length; i < n; i++) t[s++] = e[i];
            return t.length = s, t
        },
        grep: function(t, e, n) {
            for (var i = [], s = 0, r = t.length, o = !n; s < r; s++) !e(t[s], s) !== o && i.push(t[s]);
            return i
        },
        map: function(t, e, n) {
            var i, s, r = 0,
                a = [];
            if (D(t))
                for (i = t.length; r < i; r++) null != (s = e(t[r], r, n)) && a.push(s);
            else
                for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
            return o.apply([], a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    });
    var k = function(t) {
        var e, n, i, s, r, o, a, l, c, u, h, d, p, f, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
            w = t.document,
            x = 0,
            D = 0,
            k = ot(),
            C = ot(),
            S = ot(),
            T = function(t, e) {
                return t === e && (h = !0), 0
            },
            E = {}.hasOwnProperty,
            A = [],
            M = A.pop,
            O = A.push,
            I = A.push,
            N = A.slice,
            P = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            Y = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + L + "*(" + Y + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + L + "*\\]",
            H = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            R = new RegExp(L + "+", "g"),
            W = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            q = new RegExp("^" + L + "*," + L + "*"),
            F = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            B = new RegExp(H),
            V = new RegExp("^" + Y + "$"),
            G = {
                ID: new RegExp("^#(" + Y + ")"),
                CLASS: new RegExp("^\\.(" + Y + ")"),
                TAG: new RegExp("^(" + Y + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            z = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            X = /[+~]/,
            J = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            tt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            it = function() {
                d()
            },
            st = yt(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(A = N.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (t) {
            I = {
                apply: A.length ? function(t, e) {
                    O.apply(t, N.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function rt(t, e, i, s) {
            var r, a, c, u, h, f, v, y = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!s && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, m)) {
                if (11 !== x && (h = Z.exec(t)))
                    if (r = h[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i
                    } else {
                        if (h[2]) return I.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(r)), i
                    } if (n.qsa && !S[t + " "] && (!g || !g.test(t))) {
                    if (1 !== x) y = e, v = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = _), a = (f = o(t)).length; a--;) f[a] = "#" + u + " " + vt(f[a]);
                        v = f.join(","), y = X.test(t) && mt(e.parentNode) || e
                    }
                    if (v) try {
                        return I.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {} finally {
                        u === _ && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(W, "$1"), e, i, s)
        }

        function ot() {
            var t = [];
            return function e(n, s) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = s
            }
        }

        function at(t) {
            return t[_] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ct(t, e) {
            for (var n = t.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = e
        }

        function ut(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return at(function(e) {
                return e = +e, at(function(n, i) {
                    for (var s, r = t([], n.length, e), o = r.length; o--;) n[s = r[o]] && (n[s] = !(i[s] = n[s]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = rt.support = {}, r = rt.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, d = rt.setDocument = function(t) {
                var e, s, o = t ? t.ownerDocument || t : w;
                return o !== p && 9 === o.nodeType && o.documentElement ? (f = (p = o).documentElement, m = !r(p), w !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", it, !1) : s.attachEvent && s.attachEvent("onunload", it)), n.attributes = lt(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = lt(function(t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = lt(function(t) {
                    return f.appendChild(t).id = _, !p.getElementsByName || !p.getElementsByName(_).length
                }), n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, i, s, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                            for (s = e.getElementsByName(t), i = 0; r = s[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        s = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (lt(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
                }), lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(t) {
                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, T = e ? function(t, e) {
                    if (t === e) return h = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return h = !0, 0;
                    var n, i = 0,
                        s = t.parentNode,
                        r = e.parentNode,
                        o = [t],
                        a = [e];
                    if (!s || !r) return t === p ? -1 : e === p ? 1 : s ? -1 : r ? 1 : u ? P(u, t) - P(u, e) : 0;
                    if (s === r) return ut(t, e);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; o[i] === a[i];) i++;
                    return i ? ut(o[i], a[i]) : o[i] === w ? -1 : a[i] === w ? 1 : 0
                }, p) : p
            }, rt.matches = function(t, e) {
                return rt(t, null, null, e)
            }, rt.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && d(t), e = e.replace(U, "='$1']"), n.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return rt(e, p, null, [t]).length > 0
            }, rt.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && d(t), b(t, e)
            }, rt.attr = function(t, e) {
                (t.ownerDocument || t) !== p && d(t);
                var s = i.attrHandle[e.toLowerCase()],
                    r = s && E.call(i.attrHandle, e.toLowerCase()) ? s(t, e, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, rt.escape = function(t) {
                return (t + "").replace(et, nt)
            }, rt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, rt.uniqueSort = function(t) {
                var e, i = [],
                    s = 0,
                    r = 0;
                if (h = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(T), h) {
                    for (; e = t[r++];) e === t[r] && (s = i.push(r));
                    for (; s--;) t.splice(i[s], 1)
                }
                return u = null, t
            }, s = rt.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += s(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += s(e);
                return n
            }, (i = rt.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && B.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && k(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var s = rt.attr(i, t);
                            return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === n : "!=" === e ? s !== n : "^=" === e ? n && 0 === s.indexOf(n) : "*=" === e ? n && s.indexOf(n) > -1 : "$=" === e ? n && s.slice(-n.length) === n : "~=" === e ? (" " + s.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, s) {
                        var r = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, h, d, p, f, m = r !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (b = (p = (c = (u = (h = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [x, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (c = (u = (h = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                    for (;
                                        (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[_] || (d[_] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, b]), d !== e)););
                                return (b -= s) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, s = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                        return s[_] ? s(e) : s.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                            for (var i, r = s(t, e), o = r.length; o--;) t[i = P(t, r[o])] = !(n[i] = r[o])
                        }) : function(t) {
                            return s(t, 0, n)
                        }) : s
                    }
                },
                pseudos: {
                    not: at(function(t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(W, "$1"));
                        return i[_] ? at(function(t, e, n, s) {
                            for (var r, o = i(t, null, s, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, s, r) {
                            return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: at(function(t) {
                        return function(e) {
                            return rt(t, e).length > 0
                        }
                    }),
                    contains: at(function(t) {
                        return t = t.replace(J, tt),
                            function(e) {
                                return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                            }
                    }),
                    lang: at(function(t) {
                        return V.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return K.test(t.nodeName)
                    },
                    input: function(t) {
                        return z.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function() {
                        return [0]
                    }),
                    last: ft(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: ft(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: ft(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: ft(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: ft(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = ht(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = dt(e);

        function gt() {}

        function vt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function yt(t, e, n) {
            var i = e.dir,
                s = e.next,
                r = s || i,
                o = n && "parentNode" === r,
                a = D++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, s);
                return !1
            } : function(e, n, l) {
                var c, u, h, d = [x, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (u = (h = e[_] || (e[_] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[r]) && c[0] === x && c[1] === a) return d[2] = c[2];
                                if (u[r] = d, d[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function bt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var s = t.length; s--;)
                    if (!t[s](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function _t(t, e, n, i, s) {
            for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, s) || (o.push(r), c && e.push(a)));
            return o
        }

        function wt(t, e, n, i, s, r) {
            return i && !i[_] && (i = wt(i)), s && !s[_] && (s = wt(s, r)), at(function(r, o, a, l) {
                var c, u, h, d = [],
                    p = [],
                    f = o.length,
                    m = r || function(t, e, n) {
                        for (var i = 0, s = e.length; i < s; i++) rt(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !r && e ? m : _t(m, d, t, a, l),
                    v = n ? s || (r ? t : f || i) ? [] : o : g;
                if (n && n(g, v, a, l), i)
                    for (c = _t(v, p), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (v[p[u]] = !(g[p[u]] = h));
                if (r) {
                    if (s || t) {
                        if (s) {
                            for (c = [], u = v.length; u--;)(h = v[u]) && c.push(g[u] = h);
                            s(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(h = v[u]) && (c = s ? P(r, h) : d[u]) > -1 && (r[c] = !(o[c] = h))
                    }
                } else v = _t(v === o ? v.splice(f, v.length) : v), s ? s(null, o, v, l) : I.apply(o, v)
            })
        }

        function xt(t) {
            for (var e, n, s, r = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, u = yt(function(t) {
                    return t === e
                }, a, !0), h = yt(function(t) {
                    return P(e, t) > -1
                }, a, !0), d = [function(t, n, i) {
                    var s = !o && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                    return e = null, s
                }]; l < r; l++)
                if (n = i.relative[t[l].type]) d = [yt(bt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                        for (s = ++l; s < r && !i.relative[t[s].type]; s++);
                        return wt(l > 1 && bt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < s && xt(t.slice(l, s)), s < r && xt(t = t.slice(s)), s < r && vt(t))
                    }
                    d.push(n)
                } return bt(d)
        }
        return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt, o = rt.tokenize = function(t, e) {
            var n, s, r, o, a, l, c, u = C[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (o in n && !(s = q.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(r = [])), n = !1, (s = F.exec(a)) && (n = s.shift(), r.push({
                        value: n,
                        type: s[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(s = G[o].exec(a)) || c[o] && !(s = c[o](s)) || (n = s.shift(), r.push({
                    value: n,
                    type: o,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? rt.error(t) : C(t, l).slice(0)
        }, a = rt.compile = function(t, e) {
            var n, s, r, a, l, u, h = [],
                f = [],
                g = S[t + " "];
            if (!g) {
                for (e || (e = o(t)), n = e.length; n--;)(g = xt(e[n]))[_] ? h.push(g) : f.push(g);
                (g = S(t, (s = f, a = (r = h).length > 0, l = s.length > 0, u = function(t, e, n, o, u) {
                    var h, f, g, v = 0,
                        y = "0",
                        b = t && [],
                        _ = [],
                        w = c,
                        D = t || l && i.find.TAG("*", u),
                        k = x += null == w ? 1 : Math.random() || .1,
                        C = D.length;
                    for (u && (c = e === p || e || u); y !== C && null != (h = D[y]); y++) {
                        if (l && h) {
                            for (f = 0, e || h.ownerDocument === p || (d(h), n = !m); g = s[f++];)
                                if (g(h, e || p, n)) {
                                    o.push(h);
                                    break
                                } u && (x = k)
                        }
                        a && ((h = !g && h) && v--, t && b.push(h))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; g = r[f++];) g(b, _, e, n);
                        if (t) {
                            if (v > 0)
                                for (; y--;) b[y] || _[y] || (_[y] = M.call(o));
                            _ = _t(_)
                        }
                        I.apply(o, _), u && !t && _.length > 0 && v + r.length > 1 && rt.uniqueSort(o)
                    }
                    return u && (x = k, c = w), b
                }, a ? at(u) : u))).selector = t
            }
            return g
        }, l = rt.select = function(t, e, n, s) {
            var r, l, c, u, h, d = "function" == typeof t && t,
                p = !s && o(t = d.selector || t);
            if (n = n || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (r = G.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                    if ((h = i.find[u]) && (s = h(c.matches[0].replace(J, tt), X.test(l[0].type) && mt(e.parentNode) || e))) {
                        if (l.splice(r, 1), !(t = s.length && vt(l))) return I.apply(n, s), n;
                        break
                    }
            }
            return (d || a(t, p))(s, e, !m, n, !e || X.test(t) && mt(e.parentNode) || e), n
        }, n.sortStable = _.split("").sort(T).join("") === _, n.detectDuplicates = !!h, d(), n.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && lt(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ct("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function(t) {
            return null == t.getAttribute("disabled")
        }) || ct(j, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), rt
    }(t);
    w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
    var C = function(t, e, n) {
            for (var i = [], s = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && w(t).is(n)) break;
                    i.push(t)
                } return i
        },
        S = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        T = w.expr.match.needsContext;

    function E(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function M(t, e, n) {
        return m(e) ? w.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? w.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? w.grep(t, function(t) {
            return l.call(e, t) > -1 !== n
        }) : w.filter(e, t, n)
    }
    w.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, w.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(w(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (w.contains(s[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, s[e], n);
            return i > 1 ? w.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(M(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(M(this, t || [], !0))
        },
        is: function(t) {
            return !!M(this, "string" == typeof t && T.test(t) ? w(t) : t || [], !1).length
        }
    });
    var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(t, e, n) {
        var s, r;
        if (!t) return this;
        if (n = n || O, "string" == typeof t) {
            if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (s[1]) {
                if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), A.test(s[1]) && w.isPlainObject(e))
                    for (s in e) m(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                return this
            }
            return (r = i.getElementById(s[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, O = w(i);
    var N = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    w.fn.extend({
        has: function(t) {
            var e = w(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (w.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                s = this.length,
                r = [],
                o = "string" != typeof t && w(t);
            if (!T.test(t))
                for (; i < s; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), w.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return C(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return C(t, "parentNode", n)
        },
        next: function(t) {
            return j(t, "nextSibling")
        },
        prev: function(t) {
            return j(t, "previousSibling")
        },
        nextAll: function(t) {
            return C(t, "nextSibling")
        },
        prevAll: function(t) {
            return C(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return C(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return C(t, "previousSibling", n)
        },
        siblings: function(t) {
            return S((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return S(t.firstChild)
        },
        contents: function(t) {
            return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
        }
    }, function(t, e) {
        w.fn[t] = function(n, i) {
            var s = w.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = w.filter(i, s)), this.length > 1 && (P[t] || w.uniqueSort(s), N.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function Y(t) {
        return t
    }

    function $(t) {
        throw t
    }

    function H(t, e, n, i) {
        var s;
        try {
            t && m(s = t.promise) ? s.call(t).done(e).fail(n) : t && m(s = t.then) ? s.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    w.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(L) || [], function(t, e) {
            n[e] = !0
        }), n) : w.extend({}, t);
        var i, s, r, o, a = [],
            l = [],
            c = -1,
            u = function() {
                for (o = o || t.once, r = i = !0; l.length; c = -1)
                    for (s = l.shift(); ++c < a.length;) !1 === a[c].apply(s[0], s[1]) && t.stopOnFalse && (c = a.length, s = !1);
                t.memory || (s = !1), i = !1, o && (a = s ? [] : "")
            },
            h = {
                add: function() {
                    return a && (s && !i && (c = a.length - 1, l.push(s)), function e(n) {
                        w.each(n, function(n, i) {
                            m(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== b(i) && e(i)
                        })
                    }(arguments), s && !i && u()), this
                },
                remove: function() {
                    return w.each(arguments, function(t, e) {
                        for (var n;
                            (n = w.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? w.inArray(t, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = l = [], a = s = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = l = [], s || i || (a = s = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return h
    }, w.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return s.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return w.Deferred(function(e) {
                            w.each(n, function(n, i) {
                                var s = m(t[i[4]]) && t[i[4]];
                                r[i[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, s) {
                        var r = 0;

                        function o(e, n, i, s) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var t, c;
                                        if (!(e < r)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = t && ("object" == typeof t || "function" == typeof t) && t.then, m(c) ? s ? c.call(t, o(r, n, Y, s), o(r, n, $, s)) : (r++, c.call(t, o(r, n, Y, s), o(r, n, $, s), o(r, n, Y, n.notifyWith))) : (i !== Y && (a = void 0, l = [t]), (s || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = s ? c : function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (i !== $ && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }
                        return w.Deferred(function(t) {
                            n[0][3].add(o(0, t, m(s) ? s : Y, t.notifyWith)), n[1][3].add(o(0, t, m(e) ? e : Y)), n[2][3].add(o(0, t, m(i) ? i : $))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? w.extend(t, s) : s
                    }
                },
                r = {};
            return w.each(n, function(t, e) {
                var o = e[2],
                    a = e[5];
                s[e[1]] = o.add, a && o.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), o.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = o.fireWith
            }), s.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                s = r.call(arguments),
                o = w.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, s[t] = arguments.length > 1 ? r.call(arguments) : n, --e || o.resolveWith(i, s)
                    }
                };
            if (e <= 1 && (H(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || m(s[n] && s[n].then))) return o.then();
            for (; n--;) H(s[n], a(n), o.reject);
            return o.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && R.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var W = w.Deferred();

    function q() {
        i.removeEventListener("DOMContentLoaded", q), t.removeEventListener("load", q), w.ready()
    }
    w.fn.ready = function(t) {
        return W.then(t).catch(function(t) {
            w.readyException(t)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== t && --w.readyWait > 0 || W.resolveWith(i, [w]))
        }
    }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", q), t.addEventListener("load", q));
    var F = function(t, e, n, i, s, r, o) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === b(n))
                for (a in s = !0, n) F(t, e, a, n[a], !0, r, o);
            else if (void 0 !== i && (s = !0, m(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(w(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return s ? t : c ? e.call(t) : l ? e(t[0], n) : r
        },
        U = /^-ms-/,
        B = /-([a-z])/g;

    function V(t, e) {
        return e.toUpperCase()
    }

    function G(t) {
        return t.replace(U, "ms-").replace(B, V)
    }
    var z = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function K() {
        this.expando = w.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, s = this.cache(t);
            if ("string" == typeof e) s[G(e)] = n;
            else
                for (i in e) s[G(i)] = e[i];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(L) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var Q = new K,
        Z = new K,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function tt(t, e, n) {
        var i, s;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : X.test(s) ? JSON.parse(s) : s)
                } catch (t) {}
                Z.set(t, e, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(t) {
            return Z.hasData(t) || Q.hasData(t)
        },
        data: function(t, e, n) {
            return Z.access(t, e, n)
        },
        removeData: function(t, e) {
            Z.remove(t, e)
        },
        _data: function(t, e, n) {
            return Q.access(t, e, n)
        },
        _removeData: function(t, e) {
            Q.remove(t, e)
        }
    }), w.fn.extend({
        data: function(t, e) {
            var n, i, s, r = this[0],
                o = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (s = Z.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = G(i.slice(5)), tt(r, i, s[i]));
                    Q.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                Z.set(this, t)
            }) : F(this, function(e) {
                var n;
                if (r && void 0 === e) return void 0 !== (n = Z.get(r, t)) ? n : void 0 !== (n = tt(r, t)) ? n : void 0;
                this.each(function() {
                    Z.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Z.remove(this, t)
            })
        }
    }), w.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = w.queue(t, e),
                i = n.length,
                s = n.shift(),
                r = w._queueHooks(t, e);
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete r.stop, s.call(t, function() {
                w.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Q.get(t, n) || Q.access(t, n, {
                empty: w.Callbacks("once memory").add(function() {
                    Q.remove(t, [e + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = w.queue(this, t, e);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                w.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                s = w.Deferred(),
                r = this,
                o = this.length,
                a = function() {
                    --i || s.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = Q.get(r[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        st = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && w.contains(t.ownerDocument, t) && "none" === w.css(t, "display")
        },
        rt = function(t, e, n, i) {
            var s, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            for (r in s = n.apply(t, i || []), e) t.style[r] = o[r];
            return s
        };

    function ot(t, e, n, i) {
        var s, r, o = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return w.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (w.cssNumber[e] ? "" : "px"),
            u = (w.cssNumber[e] || "px" !== c && +l) && nt.exec(w.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; o--;) w.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (o = 0), u /= r;
            u *= 2, w.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, s = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = s)), s
    }
    var at = {};

    function lt(t, e) {
        for (var n, i, s, r, o, a, l, c = [], u = 0, h = t.length; u < h; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && st(i) && (c[u] = (r = void 0, o = void 0, void 0, l = void 0, o = (s = i).ownerDocument, a = s.nodeName, (l = at[a]) || (r = o.body.appendChild(o.createElement(a)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), at[a] = l, l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
        for (u = 0; u < h; u++) null != c[u] && (t[u].style.display = c[u]);
        return t
    }
    w.fn.extend({
        show: function() {
            return lt(this, !0)
        },
        hide: function() {
            return lt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                st(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ct = /^(?:checkbox|radio)$/i,
        ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i,
        dt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? w.merge([t], n) : n
    }

    function ft(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
    }
    dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td;
    var mt, gt, vt = /<|&#?\w+;/;

    function yt(t, e, n, i, s) {
        for (var r, o, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((r = t[p]) || 0 === r)
                if ("object" === b(r)) w.merge(d, r.nodeType ? [r] : r);
                else if (vt.test(r)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (ut.exec(r) || ["", ""])[1].toLowerCase(), l = dt[a] || dt._default, o.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
            w.merge(d, o.childNodes), (o = h.firstChild).textContent = ""
        } else d.push(e.createTextNode(r));
        for (h.textContent = "", p = 0; r = d[p++];)
            if (i && w.inArray(r, i) > -1) s && s.push(r);
            else if (c = w.contains(r.ownerDocument, r), o = pt(h.appendChild(r), "script"), c && ft(o), n)
            for (u = 0; r = o[u++];) ht.test(r.type || "") && n.push(r);
        return h
    }
    mt = i.createDocumentFragment().appendChild(i.createElement("div")), (gt = i.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), mt.appendChild(gt), f.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;
    var bt = i.documentElement,
        _t = /^key/,
        wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;

    function Dt() {
        return !0
    }

    function kt() {
        return !1
    }

    function Ct() {
        try {
            return i.activeElement
        } catch (t) {}
    }

    function St(t, e, n, i, s, r) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) St(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = kt;
        else if (!s) return t;
        return 1 === r && (o = s, (s = function(t) {
            return w().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = w.guid++)), t.each(function() {
            w.event.add(this, e, s, i, n)
        })
    }
    w.event = {
        global: {},
        add: function(t, e, n, i, s) {
            var r, o, a, l, c, u, h, d, p, f, m, g = Q.get(t);
            if (g)
                for (n.handler && (n = (r = n).handler, s = r.selector), s && w.find.matchesSelector(bt, s), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(L) || [""]).length; c--;) p = m = (a = xt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = w.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = w.event.special[p] || {}, u = w.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && w.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(p, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[p] = !0)
        },
        remove: function(t, e, n, i, s) {
            var r, o, a, l, c, u, h, d, p, f, m, g = Q.hasData(t) && Q.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(L) || [""]).length; c--;)
                    if (p = m = (a = xt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = w.event.special[p] || {}, d = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = d.length; r--;) u = d[r], !s && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        o && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || w.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) w.event.remove(t, p + e[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, s, r, o, a = w.event.fix(t),
                l = new Array(arguments.length),
                c = (Q.get(this, "events") || {})[a.type] || [],
                u = w.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (o = w.event.handlers.call(this, a, c), e = 0;
                    (s = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = s.elem, n = 0;
                        (r = s.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var n, i, s, r, o, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], o = {}, n = 0; n < l; n++) void 0 === o[s = (i = e[n]).selector + " "] && (o[s] = i.needsContext ? w(s, this).index(c) > -1 : w.find(s, this, null, [c]).length), o[s] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[w.expando] ? t : new w.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ct() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ct() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return E(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, w.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function(t, e) {
        if (!(this instanceof w.Event)) return new w.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Dt : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: kt,
        isPropagationStopped: kt,
        isImmediatePropagationStopped: kt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Dt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Dt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Dt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        w.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget,
                    s = t.handleObj;
                return i && (i === this || w.contains(this, i)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), w.fn.extend({
        on: function(t, e, n, i) {
            return St(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return St(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, s;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = kt), this.each(function() {
                w.event.remove(this, t, n, e)
            })
        }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Et = /<script|<style|<link/i,
        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ot(t, e) {
        return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Nt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Pt(t, e) {
        var n, i, s, r, o, a, l, c;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (r = Q.access(t), o = Q.set(e, r), c = r.events))
                for (s in delete o.handle, o.events = {}, c)
                    for (n = 0, i = c[s].length; n < i; n++) w.event.add(e, s, c[s][n]);
            Z.hasData(t) && (a = Z.access(t), l = w.extend({}, a), Z.set(e, l))
        }
    }

    function jt(t, e, n, i) {
        e = o.apply([], e);
        var s, r, a, l, c, u, h = 0,
            d = t.length,
            p = d - 1,
            g = e[0],
            v = m(g);
        if (v || d > 1 && "string" == typeof g && !f.checkClone && At.test(g)) return t.each(function(s) {
            var r = t.eq(s);
            v && (e[0] = g.call(this, s, r.html())), jt(r, e, n, i)
        });
        if (d && (r = (s = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === s.childNodes.length && (s = r), r || i)) {
            for (l = (a = w.map(pt(s, "script"), It)).length; h < d; h++) c = s, h !== p && (c = w.clone(c, !0, !0), l && w.merge(a, pt(c, "script"))), n.call(t[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, Nt), h = 0; h < l; h++) c = a[h], ht.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Mt, ""), u, c))
        }
        return t
    }

    function Lt(t, e, n) {
        for (var i, s = e ? w.filter(e, t) : t, r = 0; null != (i = s[r]); r++) n || 1 !== i.nodeType || w.cleanData(pt(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && ft(pt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    w.extend({
        htmlPrefilter: function(t) {
            return t.replace(Tt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, s, r, o, a, l, c, u = t.cloneNode(!0),
                h = w.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                for (o = pt(u), i = 0, s = (r = pt(t)).length; i < s; i++) a = r[i], l = o[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ct.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (r = r || pt(t), o = o || pt(u), i = 0, s = r.length; i < s; i++) Pt(r[i], o[i]);
                else Pt(t, u);
            return (o = pt(u, "script")).length > 0 && ft(o, !h && pt(t, "script")), u
        },
        cleanData: function(t) {
            for (var e, n, i, s = w.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (z(n)) {
                    if (e = n[Q.expando]) {
                        if (e.events)
                            for (i in e.events) s[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                        n[Q.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(t) {
            return Lt(this, t, !0)
        },
        remove: function(t) {
            return Lt(this, t)
        },
        text: function(t) {
            return F(this, function(t) {
                return void 0 === t ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return jt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return jt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Ot(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return jt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return jt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(pt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return w.clone(this, t, e)
            })
        },
        html: function(t) {
            return F(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Et.test(t) && !dt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(pt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return jt(this, arguments, function(e) {
                var n = this.parentNode;
                w.inArray(this, t) < 0 && (w.cleanData(pt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        w.fn[t] = function(t) {
            for (var n, i = [], s = w(t), r = s.length - 1, o = 0; o <= r; o++) n = o === r ? this : this.clone(!0), w(s[o])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Yt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
        $t = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Ht = new RegExp(it.join("|"), "i");

    function Rt(t, e, n) {
        var i, s, r, o, a = t.style;
        return (n = n || $t(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || w.contains(t.ownerDocument, t) || (o = w.style(t, e)), !f.pixelBoxStyles() && Yt.test(o) && Ht.test(e) && (i = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = s, a.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function Wt(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                s = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", bt.removeChild(c), u = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var s, r, o, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(f, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), s
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), o
            }
        }))
    }();
    var qt = /^(none|table(?!-c[ea]).+)/,
        Ft = /^--/,
        Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Bt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Vt = ["Webkit", "Moz", "ms"],
        Gt = i.createElement("div").style;

    function zt(t) {
        var e = w.cssProps[t];
        return e || (e = w.cssProps[t] = function(t) {
            if (t in Gt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;)
                if ((t = Vt[n] + e) in Gt) return t
        }(t) || t), e
    }

    function Kt(t, e, n) {
        var i = nt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Qt(t, e, n, i, s, r) {
        var o = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === n && (l += w.css(t, n + it[o], !0, s)), i ? ("content" === n && (l -= w.css(t, "padding" + it[o], !0, s)), "margin" !== n && (l -= w.css(t, "border" + it[o] + "Width", !0, s))) : (l += w.css(t, "padding" + it[o], !0, s), "padding" !== n ? l += w.css(t, "border" + it[o] + "Width", !0, s) : a += w.css(t, "border" + it[o] + "Width", !0, s));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l
    }

    function Zt(t, e, n) {
        var i = $t(t),
            s = Rt(t, e, i),
            r = "border-box" === w.css(t, "boxSizing", !1, i),
            o = r;
        if (Yt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return o = o && (f.boxSizingReliable() || s === t.style[e]), ("auto" === s || !parseFloat(s) && "inline" === w.css(t, "display", !1, i)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], o = !0), (s = parseFloat(s) || 0) + Qt(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function Xt(t, e, n, i, s) {
        return new Xt.prototype.init(t, e, n, i, s)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Rt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, o, a = G(e),
                    l = Ft.test(e),
                    c = t.style;
                if (l || (e = zt(a)), o = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (s = o.get(t, !1, i)) ? s : c[e];
                "string" === (r = typeof n) && (s = nt.exec(n)) && s[1] && (n = ot(t, e, s), r = "number"), null != n && n == n && ("number" === r && (n += s && s[3] || (w.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var s, r, o, a = G(e);
            return Ft.test(e) || (e = zt(a)), (o = w.cssHooks[e] || w.cssHooks[a]) && "get" in o && (s = o.get(t, !0, n)), void 0 === s && (s = Rt(t, e, i)), "normal" === s && e in Bt && (s = Bt[e]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
        }
    }), w.each(["height", "width"], function(t, e) {
        w.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !qt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Zt(t, e, i) : rt(t, Ut, function() {
                    return Zt(t, e, i)
                })
            },
            set: function(t, n, i) {
                var s, r = $t(t),
                    o = "border-box" === w.css(t, "boxSizing", !1, r),
                    a = i && Qt(t, e, i, o, r);
                return o && f.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Qt(t, e, "border", !1, r) - .5)), a && (s = nt.exec(n)) && "px" !== (s[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Kt(0, n, a)
            }
        }
    }), w.cssHooks.marginLeft = Wt(f.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(Rt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        w.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[t + it[i] + e] = r[i] || r[i - 2] || r[0];
                return s
            }
        }, "margin" !== t && (w.cssHooks[t + e].set = Kt)
    }), w.fn.extend({
        css: function(t, e) {
            return F(this, function(t, e, n) {
                var i, s, r = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (i = $t(t), s = e.length; o < s; o++) r[e[o]] = w.css(t, e[o], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), w.Tween = Xt, Xt.prototype = {
        constructor: Xt,
        init: function(t, e, n, i, s, r) {
            this.elem = t, this.prop = n, this.easing = s || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Xt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Xt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xt.propHooks._default.set(this), this
        }
    }, Xt.prototype.init.prototype = Xt.prototype, Xt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[w.cssProps[t.prop]] && !w.cssHooks[t.prop] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, w.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = Xt.prototype.init, w.fx.step = {};
    var Jt, te, ee, ne, ie = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;

    function re() {
        te && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(re) : t.setTimeout(re, w.fx.interval), w.fx.tick())
    }

    function oe() {
        return t.setTimeout(function() {
            Jt = void 0
        }), Jt = Date.now()
    }

    function ae(t, e) {
        var n, i = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) s["margin" + (n = it[i])] = s["padding" + n] = t;
        return e && (s.opacity = s.width = t), s
    }

    function le(t, e, n) {
        for (var i, s = (ce.tweeners[e] || []).concat(ce.tweeners["*"]), r = 0, o = s.length; r < o; r++)
            if (i = s[r].call(n, e, t)) return i
    }

    function ce(t, e, n) {
        var i, s, r = 0,
            o = ce.prefilters.length,
            a = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Jt || oe(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && o ? n : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Jt || oe(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (! function(t, e) {
                var n, i, s, r, o;
                for (n in t)
                    if (s = e[i = G(n)], r = t[n], Array.isArray(r) && (s = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (o = w.cssHooks[i]) && "expand" in o)
                        for (n in r = o.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = s);
                    else e[i] = s
            }(u, c.opts.specialEasing); r < o; r++)
            if (i = ce.prefilters[r].call(c, t, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, le, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ce, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return ot(n.elem, t, nt.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            m(t) ? (e = t, t = ["*"]) : t = t.match(L);
            for (var n, i = 0, s = t.length; i < s; i++) n = t[i], ce.tweeners[n] = ce.tweeners[n] || [], ce.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, s, r, o, a, l, c, u, h = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                m = t.nodeType && st(t),
                g = Q.get(t, "fxshow");
            for (i in n.queue || (null == (o = w._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || a()
                }), o.unqueued++, d.always(function() {
                    d.always(function() {
                        o.unqueued--, w.queue(t, "fx").length || o.empty.fire()
                    })
                })), e)
                if (s = e[i], ie.test(s)) {
                    if (delete e[i], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || w.style(t, i)
                } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p))
                for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Q.get(t, "display")), "none" === (u = w.css(t, "display")) && (c ? u = c : (lt([t], !0), c = t.style.display || c, u = w.css(t, "display"), lt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(t, "float") && (l || (d.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(t, "fxshow", {
                    display: c
                }), r && (g.hidden = !m), m && lt([t], !0), d.done(function() {
                    for (i in m || lt([t]), Q.remove(t, "fxshow"), p) w.style(t, i, p[i])
                })), l = le(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? ce.prefilters.unshift(t) : ce.prefilters.push(t)
        }
    }), w.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? w.extend({}, t) : {
            complete: n || !n && e || m(t) && t,
            duration: t,
            easing: n && e || e && !m(e) && e
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var s = w.isEmptyObject(t),
                r = w.speed(e, n, i),
                o = function() {
                    var e = ce(this, w.extend({}, t), r);
                    (s || Q.get(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    s = null != t && t + "queueHooks",
                    r = w.timers,
                    o = Q.get(this);
                if (s) o[s] && o[s].stop && i(o[s]);
                else
                    for (s in o) o[s] && o[s].stop && se.test(s) && i(o[s]);
                for (s = r.length; s--;) r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(n), e = !1, r.splice(s, 1));
                !e && n || w.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = Q.get(this),
                    i = n[t + "queue"],
                    s = n[t + "queueHooks"],
                    r = w.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(t, e) {
        var n = w.fn[e];
        w.fn[e] = function(t, i, s) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ae(e, !0), t, i, s)
        }
    }), w.each({
        slideDown: ae("show"),
        slideUp: ae("hide"),
        slideToggle: ae("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        w.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), w.timers = [], w.fx.tick = function() {
        var t, e = 0,
            n = w.timers;
        for (Jt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || w.fx.stop(), Jt = void 0
    }, w.fx.timer = function(t) {
        w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        te || (te = !0, re())
    }, w.fx.stop = function() {
        te = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(e, n) {
        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
            var s = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(s)
            }
        })
    }, ee = i.createElement("input"), ne = i.createElement("select").appendChild(i.createElement("option")), ee.type = "checkbox", f.checkOn = "" !== ee.value, f.optSelected = ne.selected, (ee = i.createElement("input")).value = "t", ee.type = "radio", f.radioValue = "t" === ee.value;
    var ue, he = w.expr.attrHandle;
    w.fn.extend({
        attr: function(t, e) {
            return F(this, w.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                w.removeAttr(this, t)
            })
        }
    }), w.extend({
        attr: function(t, e, n) {
            var i, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === r && w.isXMLDoc(t) || (s = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : s && "get" in s && null !== (i = s.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && E(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                s = e && e.match(L);
            if (s && 1 === t.nodeType)
                for (; n = s[i++];) t.removeAttribute(n)
        }
    }), ue = {
        set: function(t, e, n) {
            return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = he[e] || w.find.attr;
        he[e] = function(t, e, i) {
            var s, r, o = e.toLowerCase();
            return i || (r = he[o], he[o] = s, s = null != n(t, e, i) ? o : null, he[o] = r), s
        }
    });
    var de = /^(?:input|select|textarea|button)$/i,
        pe = /^(?:a|area)$/i;

    function fe(t) {
        return (t.match(L) || []).join(" ")
    }

    function me(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function ge(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
    }
    w.fn.extend({
        prop: function(t, e) {
            return F(this, w.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[w.propFix[t] || t]
            })
        }
    }), w.extend({
        prop: function(t, e, n) {
            var i, s, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(t) || (e = w.propFix[e] || e, s = w.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (w.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(t) {
            var e, n, i, s, r, o, a, l = 0;
            if (m(t)) return this.each(function(e) {
                w(this).addClass(t.call(this, e, me(this)))
            });
            if ((e = ge(t)).length)
                for (; n = this[l++];)
                    if (s = me(n), i = 1 === n.nodeType && " " + fe(s) + " ") {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s !== (a = fe(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, s, r, o, a, l = 0;
            if (m(t)) return this.each(function(e) {
                w(this).removeClass(t.call(this, e, me(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ge(t)).length)
                for (; n = this[l++];)
                    if (s = me(n), i = 1 === n.nodeType && " " + fe(s) + " ") {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        s !== (a = fe(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function(n) {
                w(this).toggleClass(t.call(this, n, me(this), e), e)
            }) : this.each(function() {
                var e, s, r, o;
                if (i)
                    for (s = 0, r = w(this), o = ge(t); e = o[s++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = me(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + fe(me(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var ve = /\r/g;
    w.fn.extend({
        val: function(t) {
            var e, n, i, s = this[0];
            return arguments.length ? (i = m(t), this.each(function(n) {
                var s;
                1 === this.nodeType && (null == (s = i ? t.call(this, n, w(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = w.map(s, function(t) {
                    return null == t ? "" : t + ""
                })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(s, "value")) ? n : "string" == typeof(n = s.value) ? n.replace(ve, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : fe(w.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, s = t.options,
                        r = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? r + 1 : s.length;
                    for (i = r < 0 ? l : o ? r : 0; i < l; i++)
                        if (((n = s[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (e = w(n).val(), o) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var n, i, s = t.options, r = w.makeArray(e), o = s.length; o--;)((i = s[o]).selected = w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = w.inArray(w(t).val(), e) > -1
            }
        }, f.checkOn || (w.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), f.focusin = "onfocusin" in t;
    var ye = /^(?:focusinfocus|focusoutblur)$/,
        be = function(t) {
            t.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(e, n, s, r) {
            var o, a, l, c, u, d, p, f, v = [s || i],
                y = h.call(e, "type") ? e.type : e,
                b = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = f = l = s = s || i, 3 !== s.nodeType && 8 !== s.nodeType && !ye.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(s, n))) {
                if (!r && !p.noBubble && !g(s)) {
                    for (c = p.delegateType || y, ye.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (s.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (o = 0;
                    (a = v[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? c : p.bindType || y, (d = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && z(a) && (e.result = d.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = y, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !z(s) || u && m(s[y]) && !g(s) && ((l = s[u]) && (s[u] = null), w.event.triggered = y, e.isPropagationStopped() && f.addEventListener(y, be), s[y](), e.isPropagationStopped() && f.removeEventListener(y, be), w.event.triggered = void 0, l && (s[u] = l)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = w.extend(new w.Event, n, {
                type: t,
                isSimulated: !0
            });
            w.event.trigger(i, null, e)
        }
    }), w.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                w.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return w.event.trigger(t, e, n, !0)
        }
    }), f.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    s = Q.access(i, e);
                s || i.addEventListener(t, n, !0), Q.access(i, e, (s || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    s = Q.access(i, e) - 1;
                s ? Q.access(i, e, s) : (i.removeEventListener(t, n, !0), Q.remove(i, e))
            }
        }
    });
    var _e = t.location,
        we = Date.now(),
        xe = /\?/;
    w.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
    };
    var De = /\[\]$/,
        ke = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;

    function Te(t, e, n, i) {
        var s;
        if (Array.isArray(e)) w.each(e, function(e, s) {
            n || De.test(t) ? i(t, s) : Te(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, n, i)
        });
        else if (n || "object" !== b(e)) i(t, e);
        else
            for (s in e) Te(t + "[" + s + "]", e[s], n, i)
    }
    w.param = function(t, e) {
        var n, i = [],
            s = function(t, e) {
                var n = m(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (n in t) Te(n, t[n], e, s);
        return i.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(t) && (this.checked || !ct.test(t))
            }).map(function(t, e) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                }
            }).get()
        }
    });
    var Ee = /%20/g,
        Ae = /#.*$/,
        Me = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        Pe = {},
        je = {},
        Le = "*/".concat("*"),
        Ye = i.createElement("a");

    function $e(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, s = 0,
                r = e.toLowerCase().match(L) || [];
            if (m(n))
                for (; i = r[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function He(t, e, n, i) {
        var s = {},
            r = t === je;

        function o(a) {
            var l;
            return s[a] = !0, w.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function Re(t, e) {
        var n, i, s = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && w.extend(!0, t, i), t
    }
    Ye.href = _e.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _e.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Le,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Re(Re(t, w.ajaxSettings), e) : Re(w.ajaxSettings, t)
        },
        ajaxPrefilter: $e(Pe),
        ajaxTransport: $e(je),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var s, r, o, a, l, c, u, h, d, p, f = w.ajaxSetup({}, n),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? w(m) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = f.statusCode || {},
                _ = {},
                x = {},
                D = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Oe.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, _[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) k.always(t[k.status]);
                            else
                                for (e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || D;
                        return s && s.abort(e), C(0, e), this
                    }
                };
            if (v.promise(k), f.url = ((e || f.url || _e.href) + "").replace(Ne, _e.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Ye.protocol + "//" + Ye.host != c.protocol + "//" + c.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), He(Pe, f, n, k), u) return k;
            for (d in (h = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ie.test(f.type), r = f.url.replace(Ae, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ee, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (xe.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Me, "$1"), p = (xe.test(r) ? "&" : "?") + "_=" + we++ + p), f.url = r + p), f.ifModified && (w.lastModified[r] && k.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && k.setRequestHeader("If-None-Match", w.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || u)) return k.abort();
            if (D = "abort", y.add(f.complete), k.done(f.success), k.fail(f.error), s = He(je, f, n, k)) {
                if (k.readyState = 1, h && g.trigger("ajaxSend", [k, f]), u) return k;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    k.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, s.send(_, C)
                } catch (t) {
                    if (u) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(e, n, i, a) {
                var c, d, p, _, x, D = n;
                u || (u = !0, l && t.clearTimeout(l), s = void 0, o = a || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (_ = function(t, e, n) {
                    for (var i, s, r, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (s in a)
                            if (a[s] && a[s].test(i)) {
                                l.unshift(s);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            o || (o = s)
                        }
                        r = r || o
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(f, k, i)), _ = function(t, e, n, i) {
                    var s, r, o, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                    for (r = u.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(o = c[l + " " + r] || c["* " + r]))
                            for (s in c)
                                if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, _, k, c), c ? (f.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = k.getResponseHeader("etag")) && (w.etag[r] = x)), 204 === e || "HEAD" === f.type ? D = "nocontent" : 304 === e ? D = "notmodified" : (D = _.state, d = _.data, c = !(p = _.error))) : (p = D, !e && D || (D = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || D) + "", c ? v.resolveWith(m, [d, D, k]) : v.rejectWith(m, [k, D, p]), k.statusCode(b), b = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? d : p]), y.fireWith(m, [k, D]), h && (g.trigger("ajaxComplete", [k, f]), --w.active || w.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(t, e, n) {
            return w.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return w.get(t, void 0, e, "script")
        }
    }), w.each(["get", "post"], function(t, e) {
        w[e] = function(t, n, i, s) {
            return m(n) && (s = s || i, i = n, n = void 0), w.ajax(w.extend({
                url: t,
                type: e,
                dataType: s,
                data: n,
                success: i
            }, w.isPlainObject(t) && t))
        }
    }), w._evalUrl = function(t) {
        return w.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, w.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (m(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return m(t) ? this.each(function(e) {
                w(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = w(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = m(t);
            return this.each(function(n) {
                w(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(t) {
        return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        qe = w.ajaxSettings.xhr();
    f.cors = !!qe && "withCredentials" in qe, f.ajax = qe = !!qe, w.ajaxTransport(function(e) {
        var n, i;
        if (f.cors || qe && !e.crossDomain) return {
            send: function(s, r) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(o, s[o]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n) throw t
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return w.globalEval(t), t
            }
        }
    }), w.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain) return {
            send: function(s, r) {
                e = w("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Fe, Ue = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || w.expando + "_" + we++;
            return this[t] = !0, t
        }
    }), w.ajaxPrefilter("json jsonp", function(e, n, i) {
        var s, r, o, a = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + s) : !1 !== e.jsonp && (e.url += (xe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || w.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = t[s], t[s] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === r ? w(t).removeProp(s) : t[s] = r, e[s] && (e.jsonpCallback = n.jsonpCallback, Ue.push(s)), o && m(r) && r(o[0]), o = r = void 0
        }), "script"
    }), f.createHTMLDocument = ((Fe = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Fe.childNodes.length), w.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((s = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(s)) : e = i), r = A.exec(t), o = !n && [], r ? [e.createElement(r[1])] : (r = yt([t], e, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
        var s, r, o
    }, w.fn.load = function(t, e, n) {
        var i, s, r, o = this,
            a = t.indexOf(" ");
        return a > -1 && (i = fe(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && w.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, o.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            o.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        w.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), w.expr.pseudos.animated = function(t) {
        return w.grep(w.timers, function(e) {
            return t === e.elem
        }).length
    }, w.offset = {
        setOffset: function(t, e, n) {
            var i, s, r, o, a, l, c = w.css(t, "position"),
                u = w(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (o = (i = u.position()).top, s = i.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), m(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : u.css(h)
        }
    }, w.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                w.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0), s.left += w.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - s.top - w.css(i, "marginTop", !0),
                    left: e.left - s.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                return t || bt
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        w.fn[t] = function(i) {
            return F(this, function(t, i, s) {
                var r;
                if (g(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === s) return r ? r[e] : t[i];
                r ? r.scrollTo(n ? r.pageXOffset : s, n ? s : r.pageYOffset) : t[i] = s
            }, t, i, arguments.length)
        }
    }), w.each(["top", "left"], function(t, e) {
        w.cssHooks[e] = Wt(f.pixelPosition, function(t, n) {
            if (n) return n = Rt(t, e), Yt.test(n) ? w(t).position()[e] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        w.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            w.fn[i] = function(s, r) {
                var o = arguments.length && (n || "boolean" != typeof s),
                    a = n || (!0 === s || !0 === r ? "margin" : "border");
                return F(this, function(e, n, s) {
                    var r;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === s ? w.css(e, n, a) : w.style(e, n, s, a)
                }, e, o ? s : void 0, o)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        w.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), w.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), w.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), w.proxy = function(t, e) {
        var n, i, s;
        if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = r.call(arguments, 2), (s = function() {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || w.guid++, s
    }, w.holdReady = function(t) {
        t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = m, w.isWindow = g, w.camelCase = G, w.type = b, w.now = Date.now, w.isNumeric = function(t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Ve = t.jQuery,
        Ge = t.$;
    return w.noConflict = function(e) {
        return t.$ === w && (t.$ = Ge), e && t.jQuery === w && (t.jQuery = Ve), w
    }, e || (t.jQuery = t.$ = w), w
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
                var i, s, r;
                i = t, s = e, r = n[e], s in i ? Object.defineProperty(i, s, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[s] = r
            })
        }
        return t
    }
    for (var r, o, a, l, c, u, h, d, p, f, m, g, v, y, b, _, w, x, D, k, C, S, T, E, A, M, O, I, N, P, j, L, Y, $, H, R, W, q, F, U, B, V, G, z, K, Q, Z, X, J, tt, et, nt, it, st, rt, ot, at, lt, ct, ut, ht, dt, pt, ft, mt = function(t) {
            var e = "transitionend";

            function n(e) {
                var n = this,
                    s = !1;
                return t(this).one(i.TRANSITION_END, function() {
                    s = !0
                }), setTimeout(function() {
                    s || i.triggerTransitionEnd(n)
                }, e), this
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var n = t(e).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(n) {
                    t(n).trigger(e)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var s in n)
                        if (Object.prototype.hasOwnProperty.call(n, s)) {
                            var r = n[s],
                                o = e[s],
                                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                        } var l
                }
            };
            return t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, i
        }(e = e && e.hasOwnProperty("default") ? e.default : e), gt = (o = "alert", l = "." + (a = "bs.alert"), c = (r = e).fn[o], u = {
            CLOSE: "close" + l,
            CLOSED: "closed" + l,
            CLICK_DATA_API: "click" + l + ".data-api"
        }, h = "alert", d = "fade", p = "show", f = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() {
                r.removeData(this._element, a), this._element = null
            }, e._getRootElement = function(t) {
                var e = mt.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + h)[0]), n
            }, e._triggerCloseEvent = function(t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, e._removeElement = function(t) {
                var e = this;
                if (r(t).removeClass(p), r(t).hasClass(d)) {
                    var n = mt.getTransitionDurationFromElement(t);
                    r(t).one(mt.TRANSITION_END, function(n) {
                        return e._destroyElement(t, n)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(t)
            }, e._destroyElement = function(t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = r(this),
                        i = n.data(a);
                    i || (i = new t(this), n.data(a, i)), "close" === e && i[e](this)
                })
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), t
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), r.fn[o] = f._jQueryInterface, r.fn[o].Constructor = f, r.fn[o].noConflict = function() {
            return r.fn[o] = c, f._jQueryInterface
        }, f), vt = (g = "button", y = "." + (v = "bs.button"), b = ".data-api", _ = (m = e).fn[g], w = "active", x = "btn", D = "focus", k = '[data-toggle^="button"]', C = '[data-toggle="buttons"]', S = "input", T = ".active", E = ".btn", A = {
            CLICK_DATA_API: "click" + y + b,
            FOCUS_BLUR_DATA_API: "focus" + y + b + " blur" + y + b
        }, M = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    n = m(this._element).closest(C)[0];
                if (n) {
                    var i = this._element.querySelector(S);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(w)) t = !1;
                            else {
                                var s = n.querySelector(T);
                                s && m(s).removeClass(w)
                            } if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(w), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && m(this._element).toggleClass(w)
            }, e.dispose = function() {
                m.removeData(this._element, v), this._element = null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = m(this).data(v);
                    n || (n = new t(this), m(this).data(v, n)), "toggle" === e && n[e]()
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), t
        }(), m(document).on(A.CLICK_DATA_API, k, function(t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(x) || (e = m(e).closest(E)), M._jQueryInterface.call(m(e), "toggle")
        }).on(A.FOCUS_BLUR_DATA_API, k, function(t) {
            var e = m(t.target).closest(E)[0];
            m(e).toggleClass(D, /^focus(in)?$/.test(t.type))
        }), m.fn[g] = M._jQueryInterface, m.fn[g].Constructor = M, m.fn[g].noConflict = function() {
            return m.fn[g] = _, M._jQueryInterface
        }, M), yt = (I = "carousel", P = "." + (N = "bs.carousel"), j = ".data-api", L = (O = e).fn[I], Y = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, $ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, H = "next", R = "prev", W = "left", q = "right", F = {
            SLIDE: "slide" + P,
            SLID: "slid" + P,
            KEYDOWN: "keydown" + P,
            MOUSEENTER: "mouseenter" + P,
            MOUSELEAVE: "mouseleave" + P,
            TOUCHEND: "touchend" + P,
            LOAD_DATA_API: "load" + P + j,
            CLICK_DATA_API: "click" + P + j
        }, U = "carousel", B = "active", V = "slide", G = "carousel-item-right", z = "carousel-item-left", K = "carousel-item-next", Q = "carousel-item-prev", Z = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, X = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = O(t)[0], this._indicatorsElement = this._element.querySelector(Z.INDICATORS), this._addEventListeners()
            }
            var e = t.prototype;
            return e.next = function() {
                this._isSliding || this._slide(H)
            }, e.nextWhenVisible = function() {
                !document.hidden && O(this._element).is(":visible") && "hidden" !== O(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide(R)
            }, e.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(Z.NEXT_PREV) && (mt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(Z.ACTIVE_ITEM);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) O(this._element).one(F.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? H : R;
                        this._slide(i, this._items[t])
                    }
            }, e.dispose = function() {
                O(this._element).off(P), O.removeData(this._element, N), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(t) {
                return t = s({}, Y, t), mt.typeCheckConfig(I, t, $), t
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && O(this._element).on(F.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (O(this._element).on(F.MOUSEENTER, function(e) {
                    return t.pause(e)
                }).on(F.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && O(this._element).on(F.TOUCHEND, function() {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(Z.ITEM)) : [], this._items.indexOf(t)
            }, e._getItemByDirection = function(t, e) {
                var n = t === H,
                    i = t === R,
                    s = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
                var o = (s + (t === R ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, e._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(Z.ACTIVE_ITEM)),
                    s = O.Event(F.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return O(this._element).trigger(s), s
            }, e._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z.ACTIVE));
                    O(e).removeClass(B);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && O(n).addClass(B)
                }
            }, e._slide = function(t, e) {
                var n, i, s, r = this,
                    o = this._element.querySelector(Z.ACTIVE_ITEM),
                    a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (t === H ? (n = z, i = K, s = W) : (n = G, i = Q, s = q), l && O(l).hasClass(B)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var h = O.Event(F.SLID, {
                        relatedTarget: l,
                        direction: s,
                        from: a,
                        to: c
                    });
                    if (O(this._element).hasClass(V)) {
                        O(l).addClass(i), mt.reflow(l), O(o).addClass(n), O(l).addClass(n);
                        var d = mt.getTransitionDurationFromElement(o);
                        O(o).one(mt.TRANSITION_END, function() {
                            O(l).removeClass(n + " " + i).addClass(B), O(o).removeClass(B + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                return O(r._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else O(o).removeClass(B), O(l).addClass(B), this._isSliding = !1, O(this._element).trigger(h);
                    u && this.cycle()
                }
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = O(this).data(N),
                        i = s({}, Y, O(this).data());
                    "object" == typeof e && (i = s({}, i, e));
                    var r = "string" == typeof e ? e : i.slide;
                    if (n || (n = new t(this, i), O(this).data(N, n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof r) {
                        if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]()
                    } else i.interval && (n.pause(), n.cycle())
                })
            }, t._dataApiClickHandler = function(e) {
                var n = mt.getSelectorFromElement(this);
                if (n) {
                    var i = O(n)[0];
                    if (i && O(i).hasClass(U)) {
                        var r = s({}, O(i).data(), O(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (r.interval = !1), t._jQueryInterface.call(O(i), r), o && O(i).data(N).to(o), e.preventDefault()
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Y
                }
            }]), t
        }(), O(document).on(F.CLICK_DATA_API, Z.DATA_SLIDE, X._dataApiClickHandler), O(window).on(F.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(Z.DATA_RIDE)), e = 0, n = t.length; e < n; e++) {
                var i = O(t[e]);
                X._jQueryInterface.call(i, i.data())
            }
        }), O.fn[I] = X._jQueryInterface, O.fn[I].Constructor = X, O.fn[I].noConflict = function() {
            return O.fn[I] = L, X._jQueryInterface
        }, X), bt = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = (J = e).fn[tt], st = {
            toggle: !0,
            parent: ""
        }, rt = {
            toggle: "boolean",
            parent: "(string|element)"
        }, ot = {
            SHOW: "show" + nt,
            SHOWN: "shown" + nt,
            HIDE: "hide" + nt,
            HIDDEN: "hidden" + nt,
            CLICK_DATA_API: "click" + nt + ".data-api"
        }, at = "show", lt = "collapse", ct = "collapsing", ut = "collapsed", ht = "width", dt = "height", pt = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, ft = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = J.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(pt.DATA_TOGGLE)), i = 0, s = n.length; i < s; i++) {
                    var r = n[i],
                        o = mt.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(o)).filter(function(e) {
                            return e === t
                        });
                    null !== o && a.length > 0 && (this._selector = o, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = t.prototype;
            return e.toggle = function() {
                J(this._element).hasClass(at) ? this.hide() : this.show()
            }, e.show = function() {
                var e, n, i = this;
                if (!this._isTransitioning && !J(this._element).hasClass(at) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(pt.ACTIVES)).filter(function(t) {
                        return t.getAttribute("data-parent") === i._config.parent
                    })).length && (e = null), !(e && (n = J(e).not(this._selector).data(et)) && n._isTransitioning))) {
                    var s = J.Event(ot.SHOW);
                    if (J(this._element).trigger(s), !s.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(J(e).not(this._selector), "hide"), n || J(e).data(et, null));
                        var r = this._getDimension();
                        J(this._element).removeClass(lt).addClass(ct), this._element.style[r] = 0, this._triggerArray.length && J(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            a = mt.getTransitionDurationFromElement(this._element);
                        J(this._element).one(mt.TRANSITION_END, function() {
                            J(i._element).removeClass(ct).addClass(lt).addClass(at), i._element.style[r] = "", i.setTransitioning(!1), J(i._element).trigger(ot.SHOWN)
                        }).emulateTransitionEnd(a), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var t = this;
                if (!this._isTransitioning && J(this._element).hasClass(at)) {
                    var e = J.Event(ot.HIDE);
                    if (J(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", mt.reflow(this._element), J(this._element).addClass(ct).removeClass(lt).removeClass(at);
                        var i = this._triggerArray.length;
                        if (i > 0)
                            for (var s = 0; s < i; s++) {
                                var r = this._triggerArray[s],
                                    o = mt.getSelectorFromElement(r);
                                if (null !== o) J([].slice.call(document.querySelectorAll(o))).hasClass(at) || J(r).addClass(ut).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = mt.getTransitionDurationFromElement(this._element);
                        J(this._element).one(mt.TRANSITION_END, function() {
                            t.setTransitioning(!1);
                        	J(t._element).removeClass(ct);
                        	J(t._element).addClass(lt);
                        	J(t._element).trigger(ot.HIDDEN);                        	
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(t) {
                this._isTransitioning = t
            }, e.dispose = function() {
                J.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(t) {
                return (t = s({}, st, t)).toggle = Boolean(t.toggle), mt.typeCheckConfig(tt, t, rt), t
            }, e._getDimension = function() {
                return J(this._element).hasClass(ht) ? ht : dt
            }, e._getParent = function() {
                var e = this,
                    n = null;
                mt.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    s = [].slice.call(n.querySelectorAll(i));
                return J(s).each(function(n, i) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                }), n
            }, e._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = J(t).hasClass(at);
                    e.length && J(e).toggleClass(ut, !n).attr("aria-expanded", n)
                }
            }, t._getTargetFromElement = function(t) {
                var e = mt.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = J(this),
                        i = n.data(et),
                        r = s({}, st, n.data(), "object" == typeof e && e ? e : {});
                    if (!i && r.toggle && /show|hide/.test(e) && (r.toggle = !1), i || (i = new t(this, r), n.data(et, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return st
                }
            }]), t
        }(), J(document).on(ot.CLICK_DATA_API, pt.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var e = J(this),
                n = mt.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(n));
            J(i).each(function() {
                var t = J(this),
                    n = t.data(et) ? "toggle" : e.data();
                ft._jQueryInterface.call(t, n);
            })
        }), J.fn[tt] = ft._jQueryInterface, J.fn[tt].Constructor = ft, J.fn[tt].noConflict = function() {
            return J.fn[tt] = it, ft._jQueryInterface
        }, ft), _t = "undefined" != typeof window && "undefined" != typeof document, wt = ["Edge", "Trident", "Firefox"], xt = 0, Dt = 0; Dt < wt.length; Dt += 1)
        if (_t && navigator.userAgent.indexOf(wt[Dt]) >= 0) {
            xt = 1;
            break
        } var kt = _t && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then(function() {
                e = !1, t()
            }))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout(function() {
                e = !1, t()
            }, xt))
        }
    };

    function Ct(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function St(t, e) {
        if (1 !== t.nodeType) return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function Tt(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function Et(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = St(t),
            n = e.overflow,
            i = e.overflowX,
            s = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + s + i) ? t : Et(Tt(t))
    }
    var At = _t && !(!window.MSInputMethodContext || !document.documentMode),
        Mt = _t && /MSIE 10/.test(navigator.userAgent);

    function Ot(t) {
        return 11 === t ? At : 10 === t ? Mt : At || Mt
    }

    function It(t) {
        if (!t) return document.documentElement;
        for (var e = Ot(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === St(n, "position") ? It(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Nt(t) {
        return null !== t.parentNode ? Nt(t.parentNode) : t
    }

    function Pt(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            s = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(s, 0);
        var o, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(s)) return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && It(o.firstElementChild) !== o ? It(l) : l;
        var c = Nt(t);
        return c.host ? Pt(c.host, e) : Pt(t, Nt(e).host)
    }

    function jt(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function Lt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function Yt(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ot(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function $t() {
        var t = document.body,
            e = document.documentElement,
            n = Ot(10) && getComputedStyle(e);
        return {
            height: Yt("Height", t, e, n),
            width: Yt("Width", t, e, n)
        }
    }
    var Ht = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Rt = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        Wt = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        qt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function Ft(t) {
        return qt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Ut(t) {
        var e = {};
        try {
            if (Ot(10)) {
                e = t.getBoundingClientRect();
                var n = jt(t, "top"),
                    i = jt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var s = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? $t() : {},
            o = r.width || t.clientWidth || s.right - s.left,
            a = r.height || t.clientHeight || s.bottom - s.top,
            l = t.offsetWidth - o,
            c = t.offsetHeight - a;
        if (l || c) {
            var u = St(t);
            l -= Lt(u, "x"), c -= Lt(u, "y"), s.width -= l, s.height -= c
        }
        return Ft(s)
    }

    function Bt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = Ot(10),
            s = "HTML" === e.nodeName,
            r = Ut(t),
            o = Ut(e),
            a = Et(t),
            l = St(e),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === e.nodeName && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
        var h = Ft({
            top: r.top - o.top - c,
            left: r.left - o.left - u,
            width: r.width,
            height: r.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !i && s) {
            var d = parseFloat(l.marginTop, 10),
                p = parseFloat(l.marginLeft, 10);
            h.top -= c - d, h.bottom -= c - d, h.left -= u - p, h.right -= u - p, h.marginTop = d, h.marginLeft = p
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = jt(e, "top"),
                s = jt(e, "left"),
                r = n ? -1 : 1;
            return t.top += i * r, t.bottom += i * r, t.left += s * r, t.right += s * r, t
        }(h, e)), h
    }

    function Vt(t) {
        if (!t || !t.parentElement || Ot()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === St(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function Gt(t, e, n, i) {
        var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            o = s ? Vt(t) : Pt(t, e);
        if ("viewport" === i) r = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = Bt(t, n),
                s = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                o = e ? 0 : jt(n),
                a = e ? 0 : jt(n, "left");
            return Ft({
                top: o - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: s,
                height: r
            })
        }(o, s);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Et(Tt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Bt(a, o, s);
            if ("HTML" !== a.nodeName || function t(e) {
                    var n = e.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === St(e, "position") || t(Tt(e)))
                }(o)) r = l;
            else {
                var c = $t(),
                    u = c.height,
                    h = c.width;
                r.top += l.top - l.marginTop, r.bottom = u + l.top, r.left += l.left - l.marginLeft, r.right = h + l.left
            }
        }
        return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
    }

    function zt(t, e, n, i, s) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var o = Gt(n, i, r, s),
            a = {
                top: {
                    width: o.width,
                    height: e.top - o.top
                },
                right: {
                    width: o.right - e.right,
                    height: o.height
                },
                bottom: {
                    width: o.width,
                    height: o.bottom - e.bottom
                },
                left: {
                    width: e.left - o.left,
                    height: o.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return qt({
                    key: t
                }, a[t], {
                    area: (e = a[t], e.width * e.height)
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            h = t.split("-")[1];
        return u + (h ? "-" + h : "")
    }

    function Kt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return Bt(n, i ? Vt(e) : Pt(e, n), i)
    }

    function Qt(t) {
        var e = getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function Zt(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function Xt(t, e, n) {
        n = n.split("-")[0];
        var i = Qt(t),
            s = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            o = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return s[o] = e[o] + e[l] / 2 - i[l] / 2, s[a] = n === a ? e[a] - i[c] : e[Zt(a)], s
    }

    function Jt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function te(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function(t) {
                return t[e] === n
            });
            var i = Jt(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", n))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && Ct(n) && (e.offsets.popper = Ft(e.offsets.popper), e.offsets.reference = Ft(e.offsets.reference), e = n(e, t))
        }), e
    }

    function ee(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function ne(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var s = e[i],
                r = s ? "" + s + n : t;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function ie(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function se(t, e, n, i) {
        n.updateBound = i, ie(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var s = Et(t);
        return function t(e, n, i, s) {
            var r = "BODY" === e.nodeName,
                o = r ? e.ownerDocument.defaultView : e;
            o.addEventListener(n, i, {
                passive: !0
            }), r || t(Et(o.parentNode), n, i, s), s.push(o)
        }(s, "scroll", n.updateBound, n.scrollParents), n.scrollElement = s, n.eventsEnabled = !0, n
    }

    function re() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ie(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function oe(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function ae(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && oe(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function le(t, e, n) {
        var i = Jt(t, function(t) {
                return t.name === e
            }),
            s = !!i && t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!s) {
            var r = "`" + e + "`",
                o = "`" + n + "`";
            console.warn(o + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return s
    }
    var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ue = ce.slice(3);

    function he(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = ue.indexOf(t),
            i = ue.slice(n + 1).concat(ue.slice(0, n));
        return e ? i.reverse() : i
    }
    var de = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };

    function pe(t, e, n, i) {
        var s = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            o = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            a = o.indexOf(Jt(o, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        o[a] && -1 === o[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [o.slice(0, a).concat([o[a].split(l)[0]]), [o[a].split(l)[1]].concat(o.slice(a + 1))] : [o];
        return (c = c.map(function(t, i) {
            var s = (1 === i ? !r : r) ? "height" : "width",
                o = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, o = !0, t) : o ? (t[t.length - 1] += e, o = !1, t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +s[1],
                        o = s[2];
                    if (!r) return t;
                    if (0 === o.indexOf("%")) {
                        var a = void 0;
                        switch (o) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Ft(a)[e] / 100 * r
                    }
                    if ("vh" === o || "vw" === o) return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    return r
                }(t, s, e, n)
            })
        })).forEach(function(t, e) {
            t.forEach(function(n, i) {
                oe(n) && (s[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), s
    }
    var fe = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var s = t.offsets,
                                r = s.reference,
                                o = s.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: Wt({}, l, r[l]),
                                    end: Wt({}, l, r[l] + r[c] - o[c])
                                };
                            t.offsets.popper = qt({}, o, u[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            s = t.offsets,
                            r = s.popper,
                            o = s.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = oe(+n) ? [+n, 0] : pe(n, r, o, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || It(t.instance.popper);
                        t.instance.reference === n && (n = It(n));
                        var i = ne("transform"),
                            s = t.instance.popper.style,
                            r = s.top,
                            o = s.left,
                            a = s[i];
                        s.top = "", s.left = "", s[i] = "";
                        var l = Gt(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        s.top = r, s.left = o, s[i] = a, e.boundaries = l;
                        var c = e.priority,
                            u = t.offsets.popper,
                            h = {
                                primary: function(t) {
                                    var n = u[t];
                                    return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), Wt({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = u[n];
                                    return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), Wt({}, n, i)
                                }
                            };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = qt({}, u, h[e](t))
                        }), t.offsets.popper = u, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            s = t.placement.split("-")[0],
                            r = Math.floor,
                            o = -1 !== ["top", "bottom"].indexOf(s),
                            a = o ? "right" : "bottom",
                            l = o ? "left" : "top",
                            c = o ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!le(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var s = t.placement.split("-")[0],
                            r = t.offsets,
                            o = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(s),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            h = u.toLowerCase(),
                            d = l ? "left" : "top",
                            p = l ? "bottom" : "right",
                            f = Qt(i)[c];
                        a[p] - f < o[h] && (t.offsets.popper[h] -= o[h] - (a[p] - f)), a[h] + f > o[p] && (t.offsets.popper[h] += a[h] + f - o[p]), t.offsets.popper = Ft(t.offsets.popper);
                        var m = a[h] + a[c] / 2 - f / 2,
                            g = St(t.instance.popper),
                            v = parseFloat(g["margin" + u], 10),
                            y = parseFloat(g["border" + u + "Width"], 10),
                            b = m - t.offsets.popper[h] - v - y;
                        return b = Math.max(Math.min(o[c] - f, b), 0), t.arrowElement = i, t.offsets.arrow = (Wt(n = {}, h, Math.round(b)), Wt(n, d, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (ee(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = Gt(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            s = Zt(i),
                            r = t.placement.split("-")[1] || "",
                            o = [];
                        switch (e.behavior) {
                            case de.FLIP:
                                o = [i, s];
                                break;
                            case de.CLOCKWISE:
                                o = he(i);
                                break;
                            case de.COUNTERCLOCKWISE:
                                o = he(i, !0);
                                break;
                            default:
                                o = e.behavior
                        }
                        return o.forEach(function(a, l) {
                            if (i !== a || o.length === l + 1) return t;
                            i = t.placement.split("-")[0], s = Zt(i);
                            var c, u = t.offsets.popper,
                                h = t.offsets.reference,
                                d = Math.floor,
                                p = "left" === i && d(u.right) > d(h.left) || "right" === i && d(u.left) < d(h.right) || "top" === i && d(u.bottom) > d(h.top) || "bottom" === i && d(u.top) < d(h.bottom),
                                f = d(u.left) < d(n.left),
                                m = d(u.right) > d(n.right),
                                g = d(u.top) < d(n.top),
                                v = d(u.bottom) > d(n.bottom),
                                y = "left" === i && f || "right" === i && m || "top" === i && g || "bottom" === i && v,
                                b = -1 !== ["top", "bottom"].indexOf(i),
                                _ = !!e.flipVariations && (b && "start" === r && f || b && "end" === r && m || !b && "start" === r && g || !b && "end" === r && v);
                            (p || y || _) && (t.flipped = !0, (p || y) && (i = o[l + 1]), _ && (r = "end" === (c = r) ? "start" : "start" === c ? "end" : c), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = qt({}, t.offsets.popper, Xt(t.instance.popper, t.offsets.reference, t.placement)), t = te(t.instance.modifiers, t, "flip"))
                        }), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            s = i.popper,
                            r = i.reference,
                            o = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return s[o ? "left" : "top"] = r[n] - (a ? s[o ? "width" : "height"] : 0), t.placement = Zt(e), t.offsets.popper = Ft(s), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!le(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = Jt(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            s = t.offsets.popper,
                            r = Jt(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var o = void 0 !== r ? r : e.gpuAcceleration,
                            a = Ut(It(t.instance.popper)),
                            l = {
                                position: s.position
                            },
                            c = {
                                left: Math.floor(s.left),
                                top: Math.round(s.top),
                                bottom: Math.round(s.bottom),
                                right: Math.floor(s.right)
                            },
                            u = "bottom" === n ? "top" : "bottom",
                            h = "right" === i ? "left" : "right",
                            d = ne("transform"),
                            p = void 0,
                            f = void 0;
                        if (f = "bottom" === u ? -a.height + c.bottom : c.top, p = "right" === h ? -a.width + c.right : c.left, o && d) l[d] = "translate3d(" + p + "px, " + f + "px, 0)", l[u] = 0, l[h] = 0, l.willChange = "transform";
                        else {
                            var m = "bottom" === u ? -1 : 1,
                                g = "right" === h ? -1 : 1;
                            l[u] = f * m, l[h] = p * g, l.willChange = u + ", " + h
                        }
                        var v = {
                            "x-placement": t.placement
                        };
                        return t.attributes = qt({}, v, t.attributes), t.styles = qt({}, l, t.styles), t.arrowStyles = qt({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return ae(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && ae(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, s) {
                        var r = Kt(s, e, t, n.positionFixed),
                            o = zt(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", o), ae(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        me = function() {
            function t(e, n) {
                var i = this,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Ht(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = kt(this.update.bind(this)), this.options = qt({}, t.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(qt({}, t.Defaults.modifiers, s.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = qt({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return qt({
                        name: t
                    }, i.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && Ct(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Rt(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = Kt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = zt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Xt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = te(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, ee(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ne("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = se(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return re.call(this)
                }
            }]), t
        }();
    me.Utils = ("undefined" != typeof window ? window : global).PopperUtils, me.placements = ce, me.Defaults = fe;
    var ge, ve, ye, be, _e, we, xe, De, ke, Ce, Se, Te, Ee, Ae, Me, Oe, Ie, Ne, Pe, je, Le, Ye, $e, He, Re, We, qe, Fe, Ue, Be, Ve, Ge, ze, Ke, Qe, Ze, Xe, Je, tn, en, nn, sn, rn, on, an, ln, cn, un, hn, dn, pn, fn, mn, gn, vn, yn, bn, _n, wn, xn, Dn, kn, Cn, Sn, Tn, En, An, Mn, On, In, Nn, Pn, jn, Ln, Yn, $n, Hn, Rn, Wn, qn, Fn, Un, Bn, Vn, Gn, zn, Kn, Qn, Zn, Xn, Jn, ti, ei, ni, ii, si, ri, oi, ai, li, ci, ui, hi, di, pi, fi, mi, gi, vi, yi, bi, _i, wi, xi = (ve = "dropdown", be = "." + (ye = "bs.dropdown"), _e = ".data-api", we = (ge = e).fn[ve], xe = new RegExp("38|40|27"), De = {
            HIDE: "hide" + be,
            HIDDEN: "hidden" + be,
            SHOW: "show" + be,
            SHOWN: "shown" + be,
            CLICK: "click" + be,
            CLICK_DATA_API: "click" + be + _e,
            KEYDOWN_DATA_API: "keydown" + be + _e,
            KEYUP_DATA_API: "keyup" + be + _e
        }, ke = "disabled", Ce = "show", Se = "dropup", Te = "dropright", Ee = "dropleft", Ae = "dropdown-menu-right", Me = "position-static", Oe = '[data-toggle="dropdown"]', Ie = ".dropdown form", Ne = ".dropdown-menu", Pe = ".navbar-nav", je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Le = "top-start", Ye = "top-end", $e = "bottom-start", He = "bottom-end", Re = "right-start", We = "left-start", qe = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Fe = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Ue = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = t.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !ge(this._element).hasClass(ke)) {
                    var e = t._getParentFromElement(this._element),
                        n = ge(this._menu).hasClass(Ce);
                    if (t._clearMenus(), !n) {
                        var i = {
                                relatedTarget: this._element
                            },
                            s = ge.Event(De.SHOW, i);
                        if (ge(e).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === me) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : mt.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && ge(e).addClass(Me), this._popper = new me(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === ge(e).closest(Pe).length && ge(document.body).children().on("mouseover", null, ge.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), ge(this._menu).toggleClass(Ce), ge(e).toggleClass(Ce).trigger(ge.Event(De.SHOWN, i))
                        }
                    }
                }
            }, e.dispose = function() {
                ge.removeData(this._element, ye), ge(this._element).off(be), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                ge(this._element).on(De.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(t) {
                return t = s({}, this.constructor.Default, ge(this._element).data(), t), mt.typeCheckConfig(ve, t, this.constructor.DefaultType), t
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ne))
                }
                return this._menu
            }, e._getPlacement = function() {
                var t = ge(this._element.parentNode),
                    e = $e;
                return t.hasClass(Se) ? (e = Le, ge(this._menu).hasClass(Ae) && (e = Ye)) : t.hasClass(Te) ? e = Re : t.hasClass(Ee) ? e = We : ge(this._menu).hasClass(Ae) && (e = He), e
            }, e._detectNavbar = function() {
                return ge(this._element).closest(".navbar").length > 0
            }, e._getPopperConfig = function() {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = ge(this).data(ye);
                    if (n || (n = new t(this, "object" == typeof e ? e : null), ge(this).data(ye, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = [].slice.call(document.querySelectorAll(Oe)), i = 0, s = n.length; i < s; i++) {
                        var r = t._getParentFromElement(n[i]),
                            o = ge(n[i]).data(ye),
                            a = {
                                relatedTarget: n[i]
                            };
                        if (e && "click" === e.type && (a.clickEvent = e), o) {
                            var l = o._menu;
                            if (ge(r).hasClass(Ce) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && ge.contains(r, e.target))) {
                                var c = ge.Event(De.HIDE, a);
                                ge(r).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && ge(document.body).children().off("mouseover", null, ge.noop), n[i].setAttribute("aria-expanded", "false"), ge(l).removeClass(Ce), ge(r).removeClass(Ce).trigger(ge.Event(De.HIDDEN, a)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = mt.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || ge(e.target).closest(Ne).length)) : xe.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !ge(this).hasClass(ke))) {
                    var n = t._getParentFromElement(this),
                        i = ge(n).hasClass(Ce);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var s = [].slice.call(n.querySelectorAll(je));
                        if (0 !== s.length) {
                            var r = s.indexOf(e.target);
                            38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = n.querySelector(Oe);
                            ge(o).trigger("focus")
                        }
                        ge(this).trigger("click")
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return qe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Fe
                }
            }]), t
        }(), ge(document).on(De.KEYDOWN_DATA_API, Oe, Ue._dataApiKeydownHandler).on(De.KEYDOWN_DATA_API, Ne, Ue._dataApiKeydownHandler).on(De.CLICK_DATA_API + " " + De.KEYUP_DATA_API, Ue._clearMenus).on(De.CLICK_DATA_API, Oe, function(t) {
            t.preventDefault(), t.stopPropagation(), Ue._jQueryInterface.call(ge(this), "toggle")
        }).on(De.CLICK_DATA_API, Ie, function(t) {
            t.stopPropagation()
        }), ge.fn[ve] = Ue._jQueryInterface, ge.fn[ve].Constructor = Ue, ge.fn[ve].noConflict = function() {
            return ge.fn[ve] = we, Ue._jQueryInterface
        }, Ue),
        Di = (Ve = "modal", ze = "." + (Ge = "bs.modal"), Ke = (Be = e).fn[Ve], Qe = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Ze = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Xe = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            FOCUSIN: "focusin" + ze,
            RESIZE: "resize" + ze,
            CLICK_DISMISS: "click.dismiss" + ze,
            KEYDOWN_DISMISS: "keydown.dismiss" + ze,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ze,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ze,
            CLICK_DATA_API: "click" + ze + ".data-api"
        }, Je = "modal-scrollbar-measure", tn = "modal-backdrop", en = "modal-open", nn = "fade", sn = "show", rn = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }, on = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(rn.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = t.prototype;
            return e.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Be(this._element).hasClass(nn) && (this._isTransitioning = !0);
                    var n = Be.Event(Xe.SHOW, {
                        relatedTarget: t
                    });
                    Be(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Be(document.body).addClass(en), this._setEscapeEvent(), this._setResizeEvent(), Be(this._element).on(Xe.CLICK_DISMISS, rn.DATA_DISMISS, function(t) {
                        return e.hide(t)
                    }), Be(this._dialog).on(Xe.MOUSEDOWN_DISMISS, function() {
                        Be(e._element).one(Xe.MOUSEUP_DISMISS, function(t) {
                            Be(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, e.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Be.Event(Xe.HIDE);
                    if (Be(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Be(this._element).hasClass(nn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Be(document).off(Xe.FOCUSIN), Be(this._element).removeClass(sn), Be(this._element).off(Xe.CLICK_DISMISS), Be(this._dialog).off(Xe.MOUSEDOWN_DISMISS), i) {
                            var s = mt.getTransitionDurationFromElement(this._element);
                            Be(this._element).one(mt.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(s)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                Be.removeData(this._element, Ge), Be(window, document, this._element, this._backdrop).off(ze), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(t) {
                return t = s({}, Qe, t), mt.typeCheckConfig(Ve, t, Ze), t
            }, e._showElement = function(t) {
                var e = this,
                    n = Be(this._element).hasClass(nn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && mt.reflow(this._element), Be(this._element).addClass(sn), this._config.focus && this._enforceFocus();
                var i = Be.Event(Xe.SHOWN, {
                        relatedTarget: t
                    }),
                    s = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, Be(e._element).trigger(i)
                    };
                if (n) {
                    var r = mt.getTransitionDurationFromElement(this._element);
                    Be(this._dialog).one(mt.TRANSITION_END, s).emulateTransitionEnd(r)
                } else s()
            }, e._enforceFocus = function() {
                var t = this;
                Be(document).off(Xe.FOCUSIN).on(Xe.FOCUSIN, function(e) {
                    document !== e.target && t._element !== e.target && 0 === Be(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? Be(this._element).on(Xe.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || Be(this._element).off(Xe.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? Be(window).on(Xe.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : Be(window).off(Xe.RESIZE)
            }, e._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    Be(document.body).removeClass(en), t._resetAdjustments(), t._resetScrollbar(), Be(t._element).trigger(Xe.HIDDEN)
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (Be(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(t) {
                var e = this,
                    n = Be(this._element).hasClass(nn) ? nn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = tn, n && this._backdrop.classList.add(n), Be(this._backdrop).appendTo(document.body), Be(this._element).on(Xe.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && mt.reflow(this._backdrop), Be(this._backdrop).addClass(sn), !t) return;
                    if (!n) return void t();
                    var i = mt.getTransitionDurationFromElement(this._backdrop);
                    Be(this._backdrop).one(mt.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Be(this._backdrop).removeClass(sn);
                    var s = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (Be(this._element).hasClass(nn)) {
                        var r = mt.getTransitionDurationFromElement(this._backdrop);
                        Be(this._backdrop).one(mt.TRANSITION_END, s).emulateTransitionEnd(r)
                    } else s()
                } else t && t()
            }, e._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(rn.FIXED_CONTENT)),
                        n = [].slice.call(document.querySelectorAll(rn.STICKY_CONTENT));
                    Be(e).each(function(e, n) {
                        var i = n.style.paddingRight,
                            s = Be(n).css("padding-right");
                        Be(n).data("padding-right", i).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                    }), Be(n).each(function(e, n) {
                        var i = n.style.marginRight,
                            s = Be(n).css("margin-right");
                        Be(n).data("margin-right", i).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight,
                        s = Be(document.body).css("padding-right");
                    Be(document.body).data("padding-right", i).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(rn.FIXED_CONTENT));
                Be(t).each(function(t, e) {
                    var n = Be(e).data("padding-right");
                    Be(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + rn.STICKY_CONTENT));
                Be(e).each(function(t, e) {
                    var n = Be(e).data("margin-right");
                    void 0 !== n && Be(e).css("margin-right", n).removeData("margin-right")
                });
                var n = Be(document.body).data("padding-right");
                Be(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = Je, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, n) {
                return this.each(function() {
                    var i = Be(this).data(Ge),
                        r = s({}, Qe, Be(this).data(), "object" == typeof e && e ? e : {});
                    if (i || (i = new t(this, r), Be(this).data(Ge, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](n)
                    } else r.show && i.show(n)
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Qe
                }
            }]), t
        }(), Be(document).on(Xe.CLICK_DATA_API, rn.DATA_TOGGLE, function(t) {
            var e, n = this,
                i = mt.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var r = Be(e).data(Ge) ? "toggle" : s({}, Be(e).data(), Be(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = Be(e).one(Xe.SHOW, function(t) {
                t.isDefaultPrevented() || o.one(Xe.HIDDEN, function() {
                    Be(n).is(":visible") && n.focus()
                })
            });
            on._jQueryInterface.call(Be(e), r, this)
        }), Be.fn[Ve] = on._jQueryInterface, Be.fn[Ve].Constructor = on, Be.fn[Ve].noConflict = function() {
            return Be.fn[Ve] = Ke, on._jQueryInterface
        }, on),
        ki = (ln = "tooltip", un = "." + (cn = "bs.tooltip"), hn = (an = e).fn[ln], dn = "bs-tooltip", pn = new RegExp("(^|\\s)" + dn + "\\S+", "g"), fn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, mn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, gn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, vn = "show", yn = "out", bn = {
            HIDE: "hide" + un,
            HIDDEN: "hidden" + un,
            SHOW: "show" + un,
            SHOWN: "shown" + un,
            INSERTED: "inserted" + un,
            CLICK: "click" + un,
            FOCUSIN: "focusin" + un,
            FOCUSOUT: "focusout" + un,
            MOUSEENTER: "mouseenter" + un,
            MOUSELEAVE: "mouseleave" + un
        }, _n = "fade", wn = "show", xn = ".tooltip-inner", Dn = ".arrow", kn = "hover", Cn = "focus", Sn = "click", Tn = "manual", En = function() {
            function t(t, e) {
                if (void 0 === me) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var e = t.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = an(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (an(this.getTipElement()).hasClass(wn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = an.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    an(this.element).trigger(e);
                    var n = an.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        s = mt.getUID(this.constructor.NAME);
                    i.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && an(i).addClass(_n);
                    var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(r);
                    this.addAttachmentClass(o);
                    var a = !1 === this.config.container ? document.body : an(document).find(this.config.container);
                    an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new me(this.element, i, {
                        placement: o,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Dn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), an(i).addClass(wn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);
                    var l = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, an(t.element).trigger(t.constructor.Event.SHOWN), e === yn && t._leave(null, t)
                    };
                    if (an(this.tip).hasClass(_n)) {
                        var c = mt.getTransitionDurationFromElement(this.tip);
                        an(this.tip).one(mt.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, e.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = an.Event(this.constructor.Event.HIDE),
                    s = function() {
                        e._hoverState !== vn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), an(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (an(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (an(n).removeClass(wn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Sn] = !1, this._activeTrigger[Cn] = !1, this._activeTrigger[kn] = !1, an(this.tip).hasClass(_n)) {
                        var r = mt.getTransitionDurationFromElement(n);
                        an(n).one(mt.TRANSITION_END, s).emulateTransitionEnd(r)
                    } else s();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(t) {
                an(this.getTipElement()).addClass(dn + "-" + t)
            }, e.getTipElement = function() {
                return this.tip = this.tip || an(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(an(t.querySelectorAll(xn)), this.getTitle()), an(t).removeClass(_n + " " + wn)
            }, e.setElementContent = function(t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? an(e).parent().is(t) || t.empty().append(e) : t.text(an(e).text()) : t[n ? "html" : "text"](e)
            }, e.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, e._getAttachment = function(t) {
                return mn[t.toUpperCase()]
            }, e._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) an(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                        return t.toggle(e)
                    });
                    else if (e !== Tn) {
                        var n = e === kn ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = e === kn ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        an(t.element).on(n, t.config.selector, function(e) {
                            return t._enter(e)
                        }).on(i, t.config.selector, function(e) {
                            return t._leave(e)
                        })
                    }
                    an(t.element).closest(".modal").on("hide.bs.modal", function() {
                        return t.hide()
                    })
                }), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Cn : kn] = !0), an(e.getTipElement()).hasClass(wn) || e._hoverState === vn ? e._hoverState = vn : (clearTimeout(e._timeout), e._hoverState = vn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === vn && e.show()
                }, e.config.delay.show) : e.show())
            }, e._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Cn : kn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = yn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === yn && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, e._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, e._getConfig = function(t) {
                return "number" == typeof(t = s({}, this.constructor.Default, an(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), mt.typeCheckConfig(ln, t, this.constructor.DefaultType), t
            }, e._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, e._cleanTipClass = function() {
                var t = an(this.getTipElement()),
                    e = t.attr("class").match(pn);
                null !== e && e.length && t.removeClass(e.join(""))
            }, e._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, e._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (an(t).removeClass(_n), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = an(this).data(cn),
                        i = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), an(this).data(cn, n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return gn
                }
            }, {
                key: "NAME",
                get: function() {
                    return ln
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return cn
                }
            }, {
                key: "Event",
                get: function() {
                    return bn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return un
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return fn
                }
            }]), t
        }(), an.fn[ln] = En._jQueryInterface, an.fn[ln].Constructor = En, an.fn[ln].noConflict = function() {
            return an.fn[ln] = hn, En._jQueryInterface
        }, En),
        Ci = (Mn = "popover", In = "." + (On = "bs.popover"), Nn = (An = e).fn[Mn], Pn = "bs-popover", jn = new RegExp("(^|\\s)" + Pn + "\\S+", "g"), Ln = s({}, ki.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Yn = s({}, ki.DefaultType, {
            content: "(string|element|function)"
        }), $n = "fade", Hn = "show", Rn = ".popover-header", Wn = ".popover-body", qn = {
            HIDE: "hide" + In,
            HIDDEN: "hidden" + In,
            SHOW: "show" + In,
            SHOWN: "shown" + In,
            INSERTED: "inserted" + In,
            CLICK: "click" + In,
            FOCUSIN: "focusin" + In,
            FOCUSOUT: "focusout" + In,
            MOUSEENTER: "mouseenter" + In,
            MOUSELEAVE: "mouseleave" + In
        }, Fn = function(t) {
            var e, n;

            function s() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = s).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
            var r = s.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(t) {
                An(this.getTipElement()).addClass(Pn + "-" + t)
            }, r.getTipElement = function() {
                return this.tip = this.tip || An(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var t = An(this.getTipElement());
                this.setElementContent(t.find(Rn), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Wn), e), t.removeClass($n + " " + Hn)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = An(this.getTipElement()),
                    e = t.attr("class").match(jn);
                null !== e && e.length > 0 && t.removeClass(e.join(""))
            }, s._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = An(this).data(On),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/destroy|hide/.test(t)) && (e || (e = new s(this, n), An(this).data(On, e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, i(s, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ln
                }
            }, {
                key: "NAME",
                get: function() {
                    return Mn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return On
                }
            }, {
                key: "Event",
                get: function() {
                    return qn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return In
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Yn
                }
            }]), s
        }(ki), An.fn[Mn] = Fn._jQueryInterface, An.fn[Mn].Constructor = Fn, An.fn[Mn].noConflict = function() {
            return An.fn[Mn] = Nn, Fn._jQueryInterface
        }, Fn),
        Si = (Bn = "scrollspy", Gn = "." + (Vn = "bs.scrollspy"), zn = (Un = e).fn[Bn], Kn = {
            offset: 10,
            method: "auto",
            target: ""
        }, Qn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Zn = {
            ACTIVATE: "activate" + Gn,
            SCROLL: "scroll" + Gn,
            LOAD_DATA_API: "load" + Gn + ".data-api"
        }, Xn = "dropdown-item", Jn = "active", ti = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ei = "offset", ni = "position", ii = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ti.NAV_LINKS + "," + this._config.target + " " + ti.LIST_ITEMS + "," + this._config.target + " " + ti.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Un(this._scrollElement).on(Zn.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var e = t.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? ei : ni,
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = n === ni ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, s = mt.getSelectorFromElement(t);
                    if (s && (e = document.querySelector(s)), e) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) return [Un(e)[n]().top + i, s]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                Un.removeData(this._element, Vn), Un(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(t) {
                if ("string" != typeof(t = s({}, Kn, "object" == typeof t && t ? t : {})).target) {
                    var e = Un(t.target).attr("id");
                    e || (e = mt.getUID(Bn), Un(t.target).attr("id", e)), t.target = "#" + e
                }
                return mt.typeCheckConfig(Bn, t, Qn), t
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var s = this._offsets.length; s--;) {
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                    }
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var n = Un([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(Xn) ? (n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass(Jn), n.addClass(Jn)) : (n.addClass(Jn), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS + ", " + ti.LIST_ITEMS).addClass(Jn), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass(Jn)), Un(this._scrollElement).trigger(Zn.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function() {
                var t = [].slice.call(document.querySelectorAll(this._selector));
                Un(t).filter(ti.ACTIVE).removeClass(Jn)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = Un(this).data(Vn);
                    if (n || (n = new t(this, "object" == typeof e && e), Un(this).data(Vn, n)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Kn
                }
            }]), t
        }(), Un(window).on(Zn.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(ti.DATA_SPY)), e = t.length; e--;) {
                var n = Un(t[e]);
                ii._jQueryInterface.call(n, n.data())
            }
        }), Un.fn[Bn] = ii._jQueryInterface, Un.fn[Bn].Constructor = ii, Un.fn[Bn].noConflict = function() {
            return Un.fn[Bn] = zn, ii._jQueryInterface
        }, ii),
        Ti = (oi = "." + (ri = "bs.tab"), ai = (si = e).fn.tab, li = {
            HIDE: "hide" + oi,
            HIDDEN: "hidden" + oi,
            SHOW: "show" + oi,
            SHOWN: "shown" + oi,
            CLICK_DATA_API: "click" + oi + ".data-api"
        }, ci = "dropdown-menu", ui = "active", hi = "disabled", di = "fade", pi = "show", fi = ".dropdown", mi = ".nav, .list-group", gi = ".active", vi = "> li > .active", yi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', bi = ".dropdown-toggle", _i = "> .dropdown-menu .active", wi = function() {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && si(this._element).hasClass(ui) || si(this._element).hasClass(hi))) {
                    var e, n, i = si(this._element).closest(mi)[0],
                        s = mt.getSelectorFromElement(this._element);
                    if (i) {
                        var r = "UL" === i.nodeName ? vi : gi;
                        n = (n = si.makeArray(si(i).find(r)))[n.length - 1]
                    }
                    var o = si.Event(li.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = si.Event(li.SHOW, {
                            relatedTarget: n
                        });
                    if (n && si(n).trigger(o), si(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        s && (e = document.querySelector(s)), this._activate(this._element, i);
                        var l = function() {
                            var e = si.Event(li.HIDDEN, {
                                    relatedTarget: t._element
                                }),
                                i = si.Event(li.SHOWN, {
                                    relatedTarget: n
                                });
                            si(n).trigger(e), si(t._element).trigger(i)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                si.removeData(this._element, ri), this._element = null
            }, e._activate = function(t, e, n) {
                var i = this,
                    s = ("UL" === e.nodeName ? si(e).find(vi) : si(e).children(gi))[0],
                    r = n && s && si(s).hasClass(di),
                    o = function() {
                        return i._transitionComplete(t, s, n)
                    };
                if (s && r) {
                    var a = mt.getTransitionDurationFromElement(s);
                    si(s).one(mt.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, e._transitionComplete = function(t, e, n) {
                if (e) {
                    si(e).removeClass(pi + " " + ui);
                    var i = si(e.parentNode).find(_i)[0];
                    i && si(i).removeClass(ui), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (si(t).addClass(ui), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), mt.reflow(t), si(t).addClass(pi), t.parentNode && si(t.parentNode).hasClass(ci)) {
                    var s = si(t).closest(fi)[0];
                    if (s) {
                        var r = [].slice.call(s.querySelectorAll(bi));
                        si(r).addClass(ui)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = si(this),
                        i = n.data(ri);
                    if (i || (i = new t(this), n.data(ri, i)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), t
        }(), si(document).on(li.CLICK_DATA_API, yi, function(t) {
            t.preventDefault(), wi._jQueryInterface.call(si(this), "show")
        }), si.fn.tab = wi._jQueryInterface, si.fn.tab.Constructor = wi, si.fn.tab.noConflict = function() {
            return si.fn.tab = ai, wi._jQueryInterface
        }, wi);
    ! function(t) {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = mt, t.Alert = gt, t.Button = vt, t.Carousel = yt, t.Collapse = bt, t.Dropdown = xi, t.Modal = Di, t.Popover = Ci, t.Scrollspy = Si, t.Tab = Ti, t.Tooltip = ki, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";
    var t, e;

    function n() {
        return t.apply(null, arguments)
    }

    function i(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function r(t) {
        return void 0 === t
    }

    function o(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function c(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function u(t, e) {
        for (var n in e) c(e, n) && (t[n] = e[n]);
        return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function h(t, e, n, i) {
        return Se(t, e, n, i, !0).utc()
    }

    function d(t) {
        return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), t._pf
    }

    function p(t) {
        if (null == t._isValid) {
            var n = d(t),
                i = e.call(n.parsedDateParts, function(t) {
                    return null != t
                }),
                s = !isNaN(t._d.getTime()) && n.overflow < 0 && !n.empty && !n.invalidMonth && !n.invalidWeekday && !n.weekdayMismatch && !n.nullInput && !n.invalidFormat && !n.userInvalidated && (!n.meridiem || n.meridiem && i);
            if (t._strict && (s = s && 0 === n.charsLeftOver && 0 === n.unusedTokens.length && void 0 === n.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return s;
            t._isValid = s
        }
        return t._isValid
    }

    function f(t) {
        var e = h(NaN);
        return null != t ? u(d(e), t) : d(e).userInvalidated = !0, e
    }
    e = Array.prototype.some ? Array.prototype.some : function(t) {
        for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
            if (i in e && t.call(this, e[i], i, e)) return !0;
        return !1
    };
    var m = n.momentProperties = [];

    function g(t, e) {
        var n, i, s;
        if (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), r(e._i) || (t._i = e._i), r(e._f) || (t._f = e._f), r(e._l) || (t._l = e._l), r(e._strict) || (t._strict = e._strict), r(e._tzm) || (t._tzm = e._tzm), r(e._isUTC) || (t._isUTC = e._isUTC), r(e._offset) || (t._offset = e._offset), r(e._pf) || (t._pf = d(e)), r(e._locale) || (t._locale = e._locale), m.length > 0)
            for (n = 0; n < m.length; n++) r(s = e[i = m[n]]) || (t[i] = s);
        return t
    }
    var v = !1;

    function y(t) {
        g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, n.updateOffset(this), v = !1)
    }

    function b(t) {
        return t instanceof y || null != t && null != t._isAMomentObject
    }

    function _(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function w(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = _(e)), n
    }

    function x(t, e, n) {
        var i, s = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            o = 0;
        for (i = 0; i < s; i++)(n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && o++;
        return o + r
    }

    function D(t) {
        !1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function k(t, e) {
        var i = !0;
        return u(function() {
            if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                for (var s, r = [], o = 0; o < arguments.length; o++) {
                    if (s = "", "object" == typeof arguments[o]) {
                        for (var a in s += "\n[" + o + "] ", arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                        s = s.slice(0, -2)
                    } else s = arguments[o];
                    r.push(s)
                }
                D(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1
            }
            return e.apply(this, arguments)
        }, e)
    }
    var C, S = {};

    function T(t, e) {
        null != n.deprecationHandler && n.deprecationHandler(t, e), S[t] || (D(e), S[t] = !0)
    }

    function E(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function A(t, e) {
        var n, i = u({}, t);
        for (n in e) c(e, n) && (s(t[n]) && s(e[n]) ? (i[n] = {}, u(i[n], t[n]), u(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
        for (n in t) c(t, n) && !c(e, n) && s(t[n]) && (i[n] = u({}, i[n]));
        return i
    }

    function M(t) {
        null != t && this.set(t)
    }
    n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, C = Object.keys ? Object.keys : function(t) {
        var e, n = [];
        for (e in t) c(t, e) && n.push(e);
        return n
    };
    var O = {};

    function I(t, e) {
        var n = t.toLowerCase();
        O[n] = O[n + "s"] = O[e] = t
    }

    function N(t) {
        return "string" == typeof t ? O[t] || O[t.toLowerCase()] : void 0
    }

    function P(t) {
        var e, n, i = {};
        for (n in t) c(t, n) && (e = N(n)) && (i[e] = t[n]);
        return i
    }
    var j = {};

    function L(t, e) {
        j[t] = e
    }

    function Y(t, e, n) {
        var i = "" + Math.abs(t),
            s = e - i.length;
        return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
    }
    var $ = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        R = {},
        W = {};

    function q(t, e, n, i) {
        var s = i;
        "string" == typeof i && (s = function() {
            return this[i]()
        }), t && (W[t] = s), e && (W[e[0]] = function() {
            return Y(s.apply(this, arguments), e[1], e[2])
        }), n && (W[n] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function F(t, e) {
        return t.isValid() ? (e = U(e, t.localeData()), R[e] = R[e] || function(t) {
            var e, n, i, s = t.match($);
            for (e = 0, n = s.length; e < n; e++) W[s[e]] ? s[e] = W[s[e]] : s[e] = (i = s[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
            return function(e) {
                var i, r = "";
                for (i = 0; i < n; i++) r += E(s[i]) ? s[i].call(e, t) : s[i];
                return r
            }
        }(e), R[e](t)) : t.localeData().invalidDate()
    }

    function U(t, e) {
        var n = 5;

        function i(t) {
            return e.longDateFormat(t) || t
        }
        for (H.lastIndex = 0; n >= 0 && H.test(t);) t = t.replace(H, i), H.lastIndex = 0, n -= 1;
        return t
    }
    var B = /\d/,
        V = /\d\d/,
        G = /\d{3}/,
        z = /\d{4}/,
        K = /[+-]?\d{6}/,
        Q = /\d\d?/,
        Z = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/,
        J = /\d{1,3}/,
        tt = /\d{1,4}/,
        et = /[+-]?\d{1,6}/,
        nt = /\d+/,
        it = /[+-]?\d+/,
        st = /Z|[+-]\d\d:?\d\d/gi,
        rt = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        at = {};

    function lt(t, e, n) {
        at[t] = E(e) ? e : function(t, i) {
            return t && n ? n : e
        }
    }

    function ct(t, e) {
        return c(at, t) ? at[t](e._strict, e._locale) : new RegExp(ut(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, s) {
            return e || n || i || s
        })))
    }

    function ut(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var ht = {};

    function dt(t, e) {
        var n, i = e;
        for ("string" == typeof t && (t = [t]), o(e) && (i = function(t, n) {
                n[e] = w(t)
            }), n = 0; n < t.length; n++) ht[t[n]] = i
    }

    function pt(t, e) {
        dt(t, function(t, n, i, s) {
            i._w = i._w || {}, e(t, i._w, i, s)
        })
    }
    var ft = 0,
        mt = 1,
        gt = 2,
        vt = 3,
        yt = 4,
        bt = 5,
        _t = 6,
        wt = 7,
        xt = 8;

    function Dt(t) {
        return kt(t) ? 366 : 365
    }

    function kt(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }
    q("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), q(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), L("year", 1), lt("Y", it), lt("YY", Q, V), lt("YYYY", tt, z), lt("YYYYY", et, K), lt("YYYYYY", et, K), dt(["YYYYY", "YYYYYY"], ft), dt("YYYY", function(t, e) {
        e[ft] = 2 === t.length ? n.parseTwoDigitYear(t) : w(t)
    }), dt("YY", function(t, e) {
        e[ft] = n.parseTwoDigitYear(t)
    }), dt("Y", function(t, e) {
        e[ft] = parseInt(t, 10)
    }), n.parseTwoDigitYear = function(t) {
        return w(t) + (w(t) > 68 ? 1900 : 2e3)
    };
    var Ct, St = Tt("FullYear", !0);

    function Tt(t, e) {
        return function(i) {
            return null != i ? (At(this, t, i), n.updateOffset(this, e), this) : Et(this, t)
        }
    }

    function Et(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function At(t, e, n) {
        t.isValid() && !isNaN(n) && ("FullYear" === e && kt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Mt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
    }

    function Mt(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var n, i = (e % (n = 12) + n) % n;
        return t += (e - i) / 12, 1 === i ? kt(t) ? 29 : 28 : 31 - i % 7 % 2
    }
    Ct = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    }, q("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), q("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }), q("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }), I("month", "M"), L("month", 8), lt("M", Q), lt("MM", Q, V), lt("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    }), lt("MMMM", function(t, e) {
        return e.monthsRegex(t)
    }), dt(["M", "MM"], function(t, e) {
        e[mt] = w(t) - 1
    }), dt(["MMM", "MMMM"], function(t, e, n, i) {
        var s = n._locale.monthsParse(t, i, n._strict);
        null != s ? e[mt] = s : d(n).invalidMonth = t
    });
    var Ot = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        It = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Pt(t, e) {
        var n;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = w(e);
            else if (!o(e = t.localeData().monthsParse(e))) return t;
        return n = Math.min(t.date(), Mt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function jt(t) {
        return null != t ? (Pt(this, t), n.updateOffset(this, !0), this) : Et(this, "Month")
    }
    var Lt = ot;
    var Yt = ot;

    function $t() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i = [],
            s = [],
            r = [];
        for (e = 0; e < 12; e++) n = h([2e3, e]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (i.sort(t), s.sort(t), r.sort(t), e = 0; e < 12; e++) i[e] = ut(i[e]), s[e] = ut(s[e]);
        for (e = 0; e < 24; e++) r[e] = ut(r[e]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function Ht(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function Rt(t, e, n) {
        var i = 7 + e - n;
        return -((7 + Ht(t, 0, i).getUTCDay() - e) % 7) + i - 1
    }

    function Wt(t, e, n, i, s) {
        var r, o, a = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Rt(t, i, s);
        return a <= 0 ? o = Dt(r = t - 1) + a : a > Dt(t) ? (r = t + 1, o = a - Dt(t)) : (r = t, o = a), {
            year: r,
            dayOfYear: o
        }
    }

    function qt(t, e, n) {
        var i, s, r = Rt(t.year(), e, n),
            o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
        return o < 1 ? i = o + Ft(s = t.year() - 1, e, n) : o > Ft(t.year(), e, n) ? (i = o - Ft(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = o), {
            week: i,
            year: s
        }
    }

    function Ft(t, e, n) {
        var i = Rt(t, e, n),
            s = Rt(t + 1, e, n);
        return (Dt(t) - i + s) / 7
    }
    q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), L("week", 5), L("isoWeek", 5), lt("w", Q), lt("ww", Q, V), lt("W", Q), lt("WW", Q, V), pt(["w", "ww", "W", "WW"], function(t, e, n, i) {
        e[i.substr(0, 1)] = w(t)
    });
    q("d", 0, "do", "day"), q("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }), q("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }), q("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), lt("d", Q), lt("e", Q), lt("E", Q), lt("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    }), lt("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    }), lt("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    }), pt(["dd", "ddd", "dddd"], function(t, e, n, i) {
        var s = n._locale.weekdaysParse(t, i, n._strict);
        null != s ? e.d = s : d(n).invalidWeekday = t
    }), pt(["d", "e", "E"], function(t, e, n, i) {
        e[i] = w(t)
    });
    var Ut = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Vt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Gt = ot;
    var zt = ot;
    var Kt = ot;

    function Qt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i, s, r, o = [],
            a = [],
            l = [],
            c = [];
        for (e = 0; e < 7; e++) n = h([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), a.push(s), l.push(r), c.push(i), c.push(s), c.push(r);
        for (o.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = ut(a[e]), l[e] = ut(l[e]), c[e] = ut(c[e]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
    }

    function Zt() {
        return this.hours() % 12 || 12
    }

    function Xt(t, e) {
        q(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Jt(t, e) {
        return e._meridiemParse
    }
    q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, Zt), q("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }), q("hmm", 0, 0, function() {
        return "" + Zt.apply(this) + Y(this.minutes(), 2)
    }), q("hmmss", 0, 0, function() {
        return "" + Zt.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2)
    }), q("Hmm", 0, 0, function() {
        return "" + this.hours() + Y(this.minutes(), 2)
    }), q("Hmmss", 0, 0, function() {
        return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2)
    }), Xt("a", !0), Xt("A", !1), I("hour", "h"), L("hour", 13), lt("a", Jt), lt("A", Jt), lt("H", Q), lt("h", Q), lt("k", Q), lt("HH", Q, V), lt("hh", Q, V), lt("kk", Q, V), lt("hmm", Z), lt("hmmss", X), lt("Hmm", Z), lt("Hmmss", X), dt(["H", "HH"], vt), dt(["k", "kk"], function(t, e, n) {
        var i = w(t);
        e[vt] = 24 === i ? 0 : i
    }), dt(["a", "A"], function(t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), dt(["h", "hh"], function(t, e, n) {
        e[vt] = w(t), d(n).bigHour = !0
    }), dt("hmm", function(t, e, n) {
        var i = t.length - 2;
        e[vt] = w(t.substr(0, i)), e[yt] = w(t.substr(i)), d(n).bigHour = !0
    }), dt("hmmss", function(t, e, n) {
        var i = t.length - 4,
            s = t.length - 2;
        e[vt] = w(t.substr(0, i)), e[yt] = w(t.substr(i, 2)), e[bt] = w(t.substr(s)), d(n).bigHour = !0
    }), dt("Hmm", function(t, e, n) {
        var i = t.length - 2;
        e[vt] = w(t.substr(0, i)), e[yt] = w(t.substr(i))
    }), dt("Hmmss", function(t, e, n) {
        var i = t.length - 4,
            s = t.length - 2;
        e[vt] = w(t.substr(0, i)), e[yt] = w(t.substr(i, 2)), e[bt] = w(t.substr(s))
    });
    var te, ee = Tt("Hours", !0),
        ne = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: It,
            monthsShort: Nt,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: Ut,
            weekdaysMin: Vt,
            weekdaysShort: Bt,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        ie = {},
        se = {};

    function re(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function oe(t) {
        var e = null;
        if (!ie[t] && "undefined" != typeof module && module && module.exports) try {
            e = te._abbr, require("./locale/" + t), ae(e)
        } catch (t) {}
        return ie[t]
    }

    function ae(t, e) {
        var n;
        return t && (n = r(e) ? ce(t) : le(t, e)) && (te = n), te._abbr
    }

    function le(t, e) {
        if (null !== e) {
            var n = ne;
            if (e.abbr = t, null != ie[t]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ie[t]._config;
            else if (null != e.parentLocale) {
                if (null == ie[e.parentLocale]) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({
                    name: t,
                    config: e
                }), null;
                n = ie[e.parentLocale]._config
            }
            return ie[t] = new M(A(n, e)), se[t] && se[t].forEach(function(t) {
                le(t.name, t.config)
            }), ae(t), ie[t]
        }
        return delete ie[t], null
    }

    function ce(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return te;
        if (!i(t)) {
            if (e = oe(t)) return e;
            t = [t]
        }
        return function(t) {
            for (var e, n, i, s, r = 0; r < t.length;) {
                for (e = (s = re(t[r]).split("-")).length, n = (n = re(t[r + 1])) ? n.split("-") : null; e > 0;) {
                    if (i = oe(s.slice(0, e).join("-"))) return i;
                    if (n && n.length >= e && x(s, n, !0) >= e - 1) break;
                    e--
                }
                r++
            }
            return null
        }(t)
    }

    function ue(t) {
        var e, n = t._a;
        return n && -2 === d(t).overflow && (e = n[mt] < 0 || n[mt] > 11 ? mt : n[gt] < 1 || n[gt] > Mt(n[ft], n[mt]) ? gt : n[vt] < 0 || n[vt] > 24 || 24 === n[vt] && (0 !== n[yt] || 0 !== n[bt] || 0 !== n[_t]) ? vt : n[yt] < 0 || n[yt] > 59 ? yt : n[bt] < 0 || n[bt] > 59 ? bt : n[_t] < 0 || n[_t] > 999 ? _t : -1, d(t)._overflowDayOfYear && (e < ft || e > gt) && (e = gt), d(t)._overflowWeeks && -1 === e && (e = wt), d(t)._overflowWeekday && -1 === e && (e = xt), d(t).overflow = e), t
    }

    function he(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function de(t) {
        var e, i, s, r, o, a = [];
        if (!t._d) {
            var l, c;
            for (l = t, c = new Date(n.now()), s = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], t._w && null == t._a[gt] && null == t._a[mt] && function(t) {
                    var e, n, i, s, r, o, a, l;
                    if (null != (e = t._w).GG || null != e.W || null != e.E) r = 1, o = 4, n = he(e.GG, t._a[ft], qt(Te(), 1, 4).year), i = he(e.W, 1), ((s = he(e.E, 1)) < 1 || s > 7) && (l = !0);
                    else {
                        r = t._locale._week.dow, o = t._locale._week.doy;
                        var c = qt(Te(), r, o);
                        n = he(e.gg, t._a[ft], c.year), i = he(e.w, c.week), null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : s = r
                    }
                    i < 1 || i > Ft(n, r, o) ? d(t)._overflowWeeks = !0 : null != l ? d(t)._overflowWeekday = !0 : (a = Wt(n, i, s, r, o), t._a[ft] = a.year, t._dayOfYear = a.dayOfYear)
                }(t), null != t._dayOfYear && (o = he(t._a[ft], s[ft]), (t._dayOfYear > Dt(o) || 0 === t._dayOfYear) && (d(t)._overflowDayOfYear = !0), i = Ht(o, 0, t._dayOfYear), t._a[mt] = i.getUTCMonth(), t._a[gt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = s[e];
            for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[vt] && 0 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[_t] && (t._nextDay = !0, t._a[vt] = 0), t._d = (t._useUTC ? Ht : function(t, e, n, i, s, r, o) {
                var a = new Date(t, e, n, i, s, r, o);
                return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
            }).apply(null, a), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (d(t).weekdayMismatch = !0)
        }
    }
    var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        fe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        me = /Z|[+-]\d\d(?::?\d\d)?/,
        ge = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        ve = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ye = /^\/?Date\((\-?\d+)/i;

    function be(t) {
        var e, n, i, s, r, o, a = t._i,
            l = pe.exec(a) || fe.exec(a);
        if (l) {
            for (d(t).iso = !0, e = 0, n = ge.length; e < n; e++)
                if (ge[e][1].exec(l[1])) {
                    s = ge[e][0], i = !1 !== ge[e][2];
                    break
                } if (null == s) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, n = ve.length; e < n; e++)
                    if (ve[e][1].exec(l[3])) {
                        r = (l[2] || " ") + ve[e][0];
                        break
                    } if (null == r) return void(t._isValid = !1)
            }
            if (!i && null != r) return void(t._isValid = !1);
            if (l[4]) {
                if (!me.exec(l[4])) return void(t._isValid = !1);
                o = "Z"
            }
            t._f = s + (r || "") + (o || ""), ke(t)
        } else t._isValid = !1
    }
    var _e = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function we(t, e, n, i, s, r) {
        var o = [function(t) {
            var e = parseInt(t, 10); {
                if (e <= 49) return 2e3 + e;
                if (e <= 999) return 1900 + e
            }
            return e
        }(t), Nt.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(s, 10)];
        return r && o.push(parseInt(r, 10)), o
    }
    var xe = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };

    function De(t) {
        var e, n, i, s = _e.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        if (s) {
            var r = we(s[4], s[3], s[2], s[5], s[6], s[7]);
            if (e = s[1], n = r, i = t, e && Bt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (d(i).weekdayMismatch = !0, i._isValid = !1, 1)) return;
            t._a = r, t._tzm = function(t, e, n) {
                if (t) return xe[t];
                if (e) return 0;
                var i = parseInt(n, 10),
                    s = i % 100;
                return (i - s) / 100 * 60 + s
            }(s[8], s[9], s[10]), t._d = Ht.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), d(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function ke(t) {
        if (t._f !== n.ISO_8601)
            if (t._f !== n.RFC_2822) {
                t._a = [], d(t).empty = !0;
                var e, i, s, r, o, a, l, u, h = "" + t._i,
                    p = h.length,
                    f = 0;
                for (s = U(t._f, t._locale).match($) || [], e = 0; e < s.length; e++) r = s[e], (i = (h.match(ct(r, t)) || [])[0]) && ((o = h.substr(0, h.indexOf(i))).length > 0 && d(t).unusedInput.push(o), h = h.slice(h.indexOf(i) + i.length), f += i.length), W[r] ? (i ? d(t).empty = !1 : d(t).unusedTokens.push(r), a = r, u = t, null != (l = i) && c(ht, a) && ht[a](l, u._a, u, a)) : t._strict && !i && d(t).unusedTokens.push(r);
                d(t).charsLeftOver = p - f, h.length > 0 && d(t).unusedInput.push(h), t._a[vt] <= 12 && !0 === d(t).bigHour && t._a[vt] > 0 && (d(t).bigHour = void 0), d(t).parsedDateParts = t._a.slice(0), d(t).meridiem = t._meridiem, t._a[vt] = function(t, e, n) {
                    var i;
                    if (null == n) return e;
                    return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
                }(t._locale, t._a[vt], t._meridiem), de(t), ue(t)
            } else De(t);
        else be(t)
    }

    function Ce(t) {
        var e, c, h, m, v = t._i,
            _ = t._f;
        return t._locale = t._locale || ce(t._l), null === v || void 0 === _ && "" === v ? f({
            nullInput: !0
        }) : ("string" == typeof v && (t._i = v = t._locale.preparse(v)), b(v) ? new y(ue(v)) : (a(v) ? t._d = v : i(_) ? function(t) {
            var e, n, i, s, r;
            if (0 === t._f.length) return d(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (s = 0; s < t._f.length; s++) r = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], ke(e), p(e) && (r += d(e).charsLeftOver, r += 10 * d(e).unusedTokens.length, d(e).score = r, (null == i || r < i) && (i = r, n = e));
            u(t, n || e)
        }(t) : _ ? ke(t) : r(c = (e = t)._i) ? e._d = new Date(n.now()) : a(c) ? e._d = new Date(c.valueOf()) : "string" == typeof c ? (h = e, null === (m = ye.exec(h._i)) ? (be(h), !1 === h._isValid && (delete h._isValid, De(h), !1 === h._isValid && (delete h._isValid, n.createFromInputFallback(h)))) : h._d = new Date(+m[1])) : i(c) ? (e._a = l(c.slice(0), function(t) {
            return parseInt(t, 10)
        }), de(e)) : s(c) ? function(t) {
            if (!t._d) {
                var e = P(t._i);
                t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                    return t && parseInt(t, 10)
                }), de(t)
            }
        }(e) : o(c) ? e._d = new Date(c) : n.createFromInputFallback(e), p(t) || (t._d = null), t))
    }

    function Se(t, e, n, r, o) {
        var a, l = {};
        return !0 !== n && !1 !== n || (r = n, n = void 0), (s(t) && function(t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        }(t) || i(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = n, l._i = t, l._f = e, l._strict = r, (a = new y(ue(Ce(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
    }

    function Te(t, e, n, i) {
        return Se(t, e, n, i, !1)
    }
    n.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
    var Ee = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = Te.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : f()
        }),
        Ae = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = Te.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : f()
        });

    function Me(t, e) {
        var n, s;
        if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return Te();
        for (n = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](n) || (n = e[s]);
        return n
    }
    var Oe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ie(t) {
        var e = P(t),
            n = e.year || 0,
            i = e.quarter || 0,
            s = e.month || 0,
            r = e.week || 0,
            o = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            c = e.second || 0,
            u = e.millisecond || 0;
        this._isValid = function(t) {
            for (var e in t)
                if (-1 === Ct.call(Oe, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var n = !1, i = 0; i < Oe.length; ++i)
                if (t[Oe[i]]) {
                    if (n) return !1;
                    parseFloat(t[Oe[i]]) !== w(t[Oe[i]]) && (n = !0)
                } return !0
        }(e), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60, this._days = +o + 7 * r, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = ce(), this._bubble()
    }

    function Ne(t) {
        return t instanceof Ie
    }

    function Pe(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function je(t, e) {
        q(t, 0, 0, function() {
            var t = this.utcOffset(),
                n = "+";
            return t < 0 && (t = -t, n = "-"), n + Y(~~(t / 60), 2) + e + Y(~~t % 60, 2)
        })
    }
    je("Z", ":"), je("ZZ", ""), lt("Z", rt), lt("ZZ", rt), dt(["Z", "ZZ"], function(t, e, n) {
        n._useUTC = !0, n._tzm = Ye(rt, t)
    });
    var Le = /([\+\-]|\d\d)/gi;

    function Ye(t, e) {
        var n = (e || "").match(t);
        if (null === n) return null;
        var i = ((n[n.length - 1] || []) + "").match(Le) || ["-", 0, 0],
            s = 60 * i[1] + w(i[2]);
        return 0 === s ? 0 : "+" === i[0] ? s : -s
    }

    function $e(t, e) {
        var i, s;
        return e._isUTC ? (i = e.clone(), s = (b(t) || a(t) ? t.valueOf() : Te(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + s), n.updateOffset(i, !1), i) : Te(t).local()
    }

    function He(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Re() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    n.updateOffset = function() {};
    var We = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        qe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Fe(t, e) {
        var n, i, s, r = t,
            a = null;
        return Ne(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : o(t) ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = We.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = {
            y: 0,
            d: w(a[gt]) * n,
            h: w(a[vt]) * n,
            m: w(a[yt]) * n,
            s: w(a[bt]) * n,
            ms: w(Pe(1e3 * a[_t])) * n
        }) : (a = qe.exec(t)) ? (n = "-" === a[1] ? -1 : (a[1], 1), r = {
            y: Ue(a[2], n),
            M: Ue(a[3], n),
            w: Ue(a[4], n),
            d: Ue(a[5], n),
            h: Ue(a[6], n),
            m: Ue(a[7], n),
            s: Ue(a[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = function(t, e) {
            var n;
            if (!t.isValid() || !e.isValid()) return {
                milliseconds: 0,
                months: 0
            };
            e = $e(e, t), t.isBefore(e) ? n = Be(t, e) : ((n = Be(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(Te(r.from), Te(r.to)), (r = {}).ms = s.milliseconds, r.M = s.months), i = new Ie(r), Ne(t) && c(t, "_locale") && (i._locale = t._locale), i
    }

    function Ue(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function Be(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function Ve(t, e) {
        return function(n, i) {
            var s;
            return null === i || isNaN(+i) || (T(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s), Ge(this, Fe(n = "string" == typeof n ? +n : n, i), t), this
        }
    }

    function Ge(t, e, i, s) {
        var r = e._milliseconds,
            o = Pe(e._days),
            a = Pe(e._months);
        t.isValid() && (s = null == s || s, a && Pt(t, Et(t, "Month") + a * i), o && At(t, "Date", Et(t, "Date") + o * i), r && t._d.setTime(t._d.valueOf() + r * i), s && n.updateOffset(t, o || a))
    }
    Fe.fn = Ie.prototype, Fe.invalid = function() {
        return Fe(NaN)
    };
    var ze = Ve(1, "add"),
        Ke = Ve(-1, "subtract");

    function Qe(t, e) {
        var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            i = t.clone().add(n, "months");
        return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
    }

    function Ze(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this)
    }
    n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xe = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });

    function Je() {
        return this._locale
    }

    function tn(t, e) {
        q(0, [t, t.length], 0, e)
    }

    function en(t, e, n, i, s) {
        var r;
        return null == t ? qt(this, i, s).year : (e > (r = Ft(t, i, s)) && (e = r), function(t, e, n, i, s) {
            var r = Wt(t, e, n, i, s),
                o = Ht(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }.call(this, t, e, n, i, s))
    }
    q(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), q(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), tn("gggg", "weekYear"), tn("ggggg", "weekYear"), tn("GGGG", "isoWeekYear"), tn("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), lt("G", it), lt("g", it), lt("GG", Q, V), lt("gg", Q, V), lt("GGGG", tt, z), lt("gggg", tt, z), lt("GGGGG", et, K), lt("ggggg", et, K), pt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
        e[i.substr(0, 2)] = w(t)
    }), pt(["gg", "GG"], function(t, e, i, s) {
        e[s] = n.parseTwoDigitYear(t)
    }), q("Q", 0, "Qo", "quarter"), I("quarter", "Q"), L("quarter", 7), lt("Q", B), dt("Q", function(t, e) {
        e[mt] = 3 * (w(t) - 1)
    }), q("D", ["DD", 2], "Do", "date"), I("date", "D"), L("date", 9), lt("D", Q), lt("DD", Q, V), lt("Do", function(t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), dt(["D", "DD"], gt), dt("Do", function(t, e) {
        e[gt] = w(t.match(Q)[0])
    });
    var nn = Tt("Date", !0);
    q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), L("dayOfYear", 4), lt("DDD", J), lt("DDDD", G), dt(["DDD", "DDDD"], function(t, e, n) {
        n._dayOfYear = w(t)
    }), q("m", ["mm", 2], 0, "minute"), I("minute", "m"), L("minute", 14), lt("m", Q), lt("mm", Q, V), dt(["m", "mm"], yt);
    var sn = Tt("Minutes", !1);
    q("s", ["ss", 2], 0, "second"), I("second", "s"), L("second", 15), lt("s", Q), lt("ss", Q, V), dt(["s", "ss"], bt);
    var rn, on = Tt("Seconds", !1);
    for (q("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), q(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), q(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), q(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), q(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), q(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), q(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), I("millisecond", "ms"), L("millisecond", 16), lt("S", J, B), lt("SS", J, V), lt("SSS", J, G), rn = "SSSS"; rn.length <= 9; rn += "S") lt(rn, nt);

    function an(t, e) {
        e[_t] = w(1e3 * ("0." + t))
    }
    for (rn = "S"; rn.length <= 9; rn += "S") dt(rn, an);
    var ln = Tt("Milliseconds", !1);
    q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
    var cn = y.prototype;

    function un(t) {
        return t
    }
    cn.add = ze, cn.calendar = function(t, e) {
        var i = t || Te(),
            s = $e(i, this).startOf("day"),
            r = n.calendarFormat(this, s) || "sameElse",
            o = e && (E(e[r]) ? e[r].call(this, i) : e[r]);
        return this.format(o || this.localeData().calendar(r, this, Te(i)))
    }, cn.clone = function() {
        return new y(this)
    }, cn.diff = function(t, e, n) {
        var i, s, r;
        if (!this.isValid()) return NaN;
        if (!(i = $e(t, this)).isValid()) return NaN;
        switch (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
            case "year":
                r = Qe(this, i) / 12;
                break;
            case "month":
                r = Qe(this, i);
                break;
            case "quarter":
                r = Qe(this, i) / 3;
                break;
            case "second":
                r = (this - i) / 1e3;
                break;
            case "minute":
                r = (this - i) / 6e4;
                break;
            case "hour":
                r = (this - i) / 36e5;
                break;
            case "day":
                r = (this - i - s) / 864e5;
                break;
            case "week":
                r = (this - i - s) / 6048e5;
                break;
            default:
                r = this - i
        }
        return n ? r : _(r)
    }, cn.endOf = function(t) {
        return void 0 === (t = N(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }, cn.format = function(t) {
        t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
        var e = F(this, t);
        return this.localeData().postformat(e)
    }, cn.from = function(t, e) {
        return this.isValid() && (b(t) && t.isValid() || Te(t).isValid()) ? Fe({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, cn.fromNow = function(t) {
        return this.from(Te(), t)
    }, cn.to = function(t, e) {
        return this.isValid() && (b(t) && t.isValid() || Te(t).isValid()) ? Fe({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, cn.toNow = function(t) {
        return this.to(Te(), t)
    }, cn.get = function(t) {
        return E(this[t = N(t)]) ? this[t]() : this
    }, cn.invalidAt = function() {
        return d(this).overflow
    }, cn.isAfter = function(t, e) {
        var n = b(t) ? t : Te(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(r(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }, cn.isBefore = function(t, e) {
        var n = b(t) ? t : Te(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(r(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }, cn.isBetween = function(t, e, n, i) {
        return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }, cn.isSame = function(t, e) {
        var n, i = b(t) ? t : Te(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }, cn.isSameOrAfter = function(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }, cn.isSameOrBefore = function(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }, cn.isValid = function() {
        return p(this)
    }, cn.lang = Xe, cn.locale = Ze, cn.localeData = Je, cn.max = Ae, cn.min = Ee, cn.parsingFlags = function() {
        return u({}, d(this))
    }, cn.set = function(t, e) {
        if ("object" == typeof t)
            for (var n = function(t) {
                    var e = [];
                    for (var n in t) e.push({
                        unit: n,
                        priority: j[n]
                    });
                    return e.sort(function(t, e) {
                        return t.priority - e.priority
                    }), e
                }(t = P(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
        else if (E(this[t = N(t)])) return this[t](e);
        return this
    }, cn.startOf = function(t) {
        switch (t = N(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }, cn.subtract = Ke, cn.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }, cn.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }, cn.toDate = function() {
        return new Date(this.valueOf())
    }, cn.toISOString = function(t) {
        if (!this.isValid()) return null;
        var e = !0 !== t,
            n = e ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? F(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", F(n, "Z")) : F(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, cn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
            e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var n = "[" + t + '("]',
            i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            s = e + '[")]';
        return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + s)
    }, cn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, cn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, cn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, cn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, cn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }, cn.year = St, cn.isLeapYear = function() {
        return kt(this.year())
    }, cn.weekYear = function(t) {
        return en.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, cn.isoWeekYear = function(t) {
        return en.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, cn.quarter = cn.quarters = function(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, cn.month = jt, cn.daysInMonth = function() {
        return Mt(this.year(), this.month())
    }, cn.week = cn.weeks = function(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }, cn.isoWeek = cn.isoWeeks = function(t) {
        var e = qt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }, cn.weeksInYear = function() {
        var t = this.localeData()._week;
        return Ft(this.year(), t.dow, t.doy)
    }, cn.isoWeeksInYear = function() {
        return Ft(this.year(), 1, 4)
    }, cn.date = nn, cn.day = cn.days = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i
    }, cn.weekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }, cn.isoWeekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            var e = (n = t, i = this.localeData(), "string" == typeof n ? i.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7;
        var n, i
    }, cn.dayOfYear = function(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }, cn.hour = cn.hours = ee, cn.minute = cn.minutes = sn, cn.second = cn.seconds = on, cn.millisecond = cn.milliseconds = ln, cn.utcOffset = function(t, e, i) {
        var s, r = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            if ("string" == typeof t) {
                if (null === (t = Ye(rt, t))) return this
            } else Math.abs(t) < 16 && !i && (t *= 60);
            return !this._isUTC && e && (s = He(this)), this._offset = t, this._isUTC = !0, null != s && this.add(s, "m"), r !== t && (!e || this._changeInProgress ? Ge(this, Fe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? r : He(this)
    }, cn.utc = function(t) {
        return this.utcOffset(0, t)
    }, cn.local = function(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(He(this), "m")), this
    }, cn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var t = Ye(st, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }, cn.hasAlignedHourOffset = function(t) {
        return !!this.isValid() && (t = t ? Te(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, cn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, cn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }, cn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }, cn.isUtc = Re, cn.isUTC = Re, cn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }, cn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, cn.dates = k("dates accessor is deprecated. Use date instead.", nn), cn.months = k("months accessor is deprecated. Use month instead", jt), cn.years = k("years accessor is deprecated. Use year instead", St), cn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), cn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (g(t, this), (t = Ce(t))._a) {
            var e = t._isUTC ? h(t._a) : Te(t._a);
            this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var hn = M.prototype;

    function dn(t, e, n, i) {
        var s = ce(),
            r = h().set(i, e);
        return s[n](r, t)
    }

    function pn(t, e, n) {
        if (o(t) && (e = t, t = void 0), t = t || "", null != e) return dn(t, e, n, "month");
        var i, s = [];
        for (i = 0; i < 12; i++) s[i] = dn(t, i, n, "month");
        return s
    }

    function fn(t, e, n, i) {
        "boolean" == typeof t ? (o(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, o(e) && (n = e, e = void 0), e = e || "");
        var s, r = ce(),
            a = t ? r._week.dow : 0;
        if (null != n) return dn(e, (n + a) % 7, i, "day");
        var l = [];
        for (s = 0; s < 7; s++) l[s] = dn(e, (s + a) % 7, i, "day");
        return l
    }
    hn.calendar = function(t, e, n) {
        var i = this._calendar[t] || this._calendar.sameElse;
        return E(i) ? i.call(e, n) : i
    }, hn.longDateFormat = function(t) {
        var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }, hn.invalidDate = function() {
        return this._invalidDate
    }, hn.ordinal = function(t) {
        return this._ordinal.replace("%d", t)
    }, hn.preparse = un, hn.postformat = un, hn.relativeTime = function(t, e, n, i) {
        var s = this._relativeTime[n];
        return E(s) ? s(t, e, n, i) : s.replace(/%d/i, t)
    }, hn.pastFuture = function(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return E(n) ? n(e) : n.replace(/%s/i, e)
    }, hn.set = function(t) {
        var e, n;
        for (n in t) E(e = t[n]) ? this[n] = e : this["_" + n] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, hn.months = function(t, e) {
        return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ot).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone
    }, hn.monthsShort = function(t, e) {
        return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ot.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, hn.monthsParse = function(t, e, n) {
        var i, s, r;
        if (this._monthsParseExact) return function(t, e, n) {
            var i, s, r, o = t.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) r = h([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === e ? -1 !== (s = Ct.call(this._shortMonthsParse, o)) ? s : null : -1 !== (s = Ct.call(this._longMonthsParse, o)) ? s : null : "MMM" === e ? -1 !== (s = Ct.call(this._shortMonthsParse, o)) ? s : -1 !== (s = Ct.call(this._longMonthsParse, o)) ? s : null : -1 !== (s = Ct.call(this._longMonthsParse, o)) ? s : -1 !== (s = Ct.call(this._shortMonthsParse, o)) ? s : null
        }.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
            if (s = h([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i
        }
    }, hn.monthsRegex = function(t) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || $t.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Yt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, hn.monthsShortRegex = function(t) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || $t.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Lt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, hn.week = function(t) {
        return qt(t, this._week.dow, this._week.doy).week
    }, hn.firstDayOfYear = function() {
        return this._week.doy
    }, hn.firstDayOfWeek = function() {
        return this._week.dow
    }, hn.weekdays = function(t, e) {
        return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, hn.weekdaysMin = function(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, hn.weekdaysShort = function(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, hn.weekdaysParse = function(t, e, n) {
        var i, s, r;
        if (this._weekdaysParseExact) return function(t, e, n) {
            var i, s, r, o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) r = h([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === e ? -1 !== (s = Ct.call(this._weekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = Ct.call(this._shortWeekdaysParse, o)) ? s : null : -1 !== (s = Ct.call(this._minWeekdaysParse, o)) ? s : null : "dddd" === e ? -1 !== (s = Ct.call(this._weekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._minWeekdaysParse, o)) ? s : null : "ddd" === e ? -1 !== (s = Ct.call(this._shortWeekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._weekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._minWeekdaysParse, o)) ? s : null : -1 !== (s = Ct.call(this._minWeekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._weekdaysParse, o)) ? s : -1 !== (s = Ct.call(this._shortWeekdaysParse, o)) ? s : null
        }.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
            if (s = h([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
            if (!n && this._weekdaysParse[i].test(t)) return i
        }
    }, hn.weekdaysRegex = function(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, hn.weekdaysShortRegex = function(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, hn.weekdaysMinRegex = function(t) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, hn.isPM = function(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }, hn.meridiem = function(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ae("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10;
            return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", ae), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ce);
    var mn = Math.abs;

    function gn(t, e, n, i) {
        var s = Fe(e, n);
        return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble()
    }

    function vn(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function yn(t) {
        return 4800 * t / 146097
    }

    function bn(t) {
        return 146097 * t / 4800
    }

    function _n(t) {
        return function() {
            return this.as(t)
        }
    }
    var wn = _n("ms"),
        xn = _n("s"),
        Dn = _n("m"),
        kn = _n("h"),
        Cn = _n("d"),
        Sn = _n("w"),
        Tn = _n("M"),
        En = _n("y");

    function An(t) {
        return function() {
            return this.isValid() ? this._data[t] : NaN
        }
    }
    var Mn = An("milliseconds"),
        On = An("seconds"),
        In = An("minutes"),
        Nn = An("hours"),
        Pn = An("days"),
        jn = An("months"),
        Ln = An("years");
    var Yn = Math.round,
        $n = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        };
    var Hn = Math.abs;

    function Rn(t) {
        return (t > 0) - (t < 0) || +t
    }

    function Wn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, n = Hn(this._milliseconds) / 1e3,
            i = Hn(this._days),
            s = Hn(this._months);
        e = _((t = _(n / 60)) / 60), n %= 60, t %= 60;
        var r = _(s / 12),
            o = s %= 12,
            a = i,
            l = e,
            c = t,
            u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            h = this.asSeconds();
        if (!h) return "P0D";
        var d = h < 0 ? "-" : "",
            p = Rn(this._months) !== Rn(h) ? "-" : "",
            f = Rn(this._days) !== Rn(h) ? "-" : "",
            m = Rn(this._milliseconds) !== Rn(h) ? "-" : "";
        return d + "P" + (r ? p + r + "Y" : "") + (o ? p + o + "M" : "") + (a ? f + a + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
    }
    var qn = Ie.prototype;
    return qn.isValid = function() {
        return this._isValid
    }, qn.abs = function() {
        var t = this._data;
        return this._milliseconds = mn(this._milliseconds), this._days = mn(this._days), this._months = mn(this._months), t.milliseconds = mn(t.milliseconds), t.seconds = mn(t.seconds), t.minutes = mn(t.minutes), t.hours = mn(t.hours), t.months = mn(t.months), t.years = mn(t.years), this
    }, qn.add = function(t, e) {
        return gn(this, t, e, 1)
    }, qn.subtract = function(t, e) {
        return gn(this, t, e, -1)
    }, qn.as = function(t) {
        if (!this.isValid()) return NaN;
        var e, n, i = this._milliseconds;
        if ("month" === (t = N(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + yn(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(bn(this._months)), t) {
            case "week":
                return e / 7 + i / 6048e5;
            case "day":
                return e + i / 864e5;
            case "hour":
                return 24 * e + i / 36e5;
            case "minute":
                return 1440 * e + i / 6e4;
            case "second":
                return 86400 * e + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + i;
            default:
                throw new Error("Unknown unit " + t)
        }
    }, qn.asMilliseconds = wn, qn.asSeconds = xn, qn.asMinutes = Dn, qn.asHours = kn, qn.asDays = Cn, qn.asWeeks = Sn, qn.asMonths = Tn, qn.asYears = En, qn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
    }, qn._bubble = function() {
        var t, e, n, i, s, r = this._milliseconds,
            o = this._days,
            a = this._months,
            l = this._data;
        return r >= 0 && o >= 0 && a >= 0 || r <= 0 && o <= 0 && a <= 0 || (r += 864e5 * vn(bn(a) + o), o = 0, a = 0), l.milliseconds = r % 1e3, t = _(r / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, n = _(e / 60), l.hours = n % 24, a += s = _(yn(o += _(n / 24))), o -= vn(bn(s)), i = _(a / 12), a %= 12, l.days = o, l.months = a, l.years = i, this
    }, qn.clone = function() {
        return Fe(this)
    }, qn.get = function(t) {
        return t = N(t), this.isValid() ? this[t + "s"]() : NaN
    }, qn.milliseconds = Mn, qn.seconds = On, qn.minutes = In, qn.hours = Nn, qn.days = Pn, qn.weeks = function() {
        return _(this.days() / 7)
    }, qn.months = jn, qn.years = Ln, qn.humanize = function(t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, n, i, s, r, o, a, l, c, u, h, d = this.localeData(),
            p = (n = !t, i = d, s = Fe(e = this).abs(), r = Yn(s.as("s")), o = Yn(s.as("m")), a = Yn(s.as("h")), l = Yn(s.as("d")), c = Yn(s.as("M")), u = Yn(s.as("y")), (h = r <= $n.ss && ["s", r] || r < $n.s && ["ss", r] || o <= 1 && ["m"] || o < $n.m && ["mm", o] || a <= 1 && ["h"] || a < $n.h && ["hh", a] || l <= 1 && ["d"] || l < $n.d && ["dd", l] || c <= 1 && ["M"] || c < $n.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = n, h[3] = +e > 0, h[4] = i, function(t, e, n, i, s) {
                return s.relativeTime(e || 1, !!n, t, i)
            }.apply(null, h));
        return t && (p = d.pastFuture(+this, p)), d.postformat(p)
    }, qn.toISOString = Wn, qn.toString = Wn, qn.toJSON = Wn, qn.locale = Ze, qn.localeData = Je, qn.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Wn), qn.lang = Xe, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), lt("x", it), lt("X", /[+-]?\d+(\.\d{1,3})?/), dt("X", function(t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), dt("x", function(t, e, n) {
        n._d = new Date(w(t))
    }), n.version = "2.20.1", t = Te, n.fn = cn, n.min = function() {
        return Me("isBefore", [].slice.call(arguments, 0))
    }, n.max = function() {
        return Me("isAfter", [].slice.call(arguments, 0))
    }, n.now = function() {
        return Date.now ? Date.now() : +new Date
    }, n.utc = h, n.unix = function(t) {
        return Te(1e3 * t)
    }, n.months = function(t, e) {
        return pn(t, e, "months")
    }, n.isDate = a, n.locale = ae, n.invalid = f, n.duration = Fe, n.isMoment = b, n.weekdays = function(t, e, n) {
        return fn(t, e, n, "weekdays")
    }, n.parseZone = function() {
        return Te.apply(null, arguments).parseZone()
    }, n.localeData = ce, n.isDuration = Ne, n.monthsShort = function(t, e) {
        return pn(t, e, "monthsShort")
    }, n.weekdaysMin = function(t, e, n) {
        return fn(t, e, n, "weekdaysMin")
    }, n.defineLocale = le, n.updateLocale = function(t, e) {
        if (null != e) {
            var n, i, s = ne;
            null != (i = oe(t)) && (s = i._config), (n = new M(e = A(s, e))).parentLocale = ie[t], ie[t] = n, ae(t)
        } else null != ie[t] && (null != ie[t].parentLocale ? ie[t] = ie[t].parentLocale : null != ie[t] && delete ie[t]);
        return ie[t]
    }, n.locales = function() {
        return C(ie)
    }, n.weekdaysShort = function(t, e, n) {
        return fn(t, e, n, "weekdaysShort")
    }, n.normalizeUnits = N, n.relativeTimeRounding = function(t) {
        return void 0 === t ? Yn : "function" == typeof t && (Yn = t, !0)
    }, n.relativeTimeThreshold = function(t, e) {
        return void 0 !== $n[t] && (void 0 === e ? $n[t] : ($n[t] = e, "s" === t && ($n.ss = e - 1), !0))
    }, n.calendarFormat = function(t, e) {
        var n = t.diff(e, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, n.prototype = cn, n.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    }, n
}),
function(e) {
    e.fn.extend({
        slimScroll: function(n) {
            var i = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, n);
            return this.each(function() {
                var s, r, o, a, l, c, u, h, d = "<div></div>",
                    p = 30,
                    f = !1,
                    m = e(this);
                if (m.parent().hasClass(i.wrapperClass)) {
                    var g = m.scrollTop();
                    if (x = m.siblings("." + i.barClass), w = m.siblings("." + i.railClass), S(), e.isPlainObject(n)) {
                        if ("height" in n && "auto" == n.height) {
                            m.parent().css("height", "auto"), m.css("height", "auto");
                            var v = m.parent().parent().height();
                            m.parent().css("height", v), m.css("height", v)
                        } else if ("height" in n) {
                            var y = n.height;
                            m.parent().css("height", y), m.css("height", y)
                        }
                        if ("scrollTo" in n) g = parseInt(i.scrollTo);
                        else if ("scrollBy" in n) g += parseInt(i.scrollBy);
                        else if ("destroy" in n) return x.remove(), w.remove(), void m.unwrap();
                        C(g, !1, !0)
                    }
                } else if (!(e.isPlainObject(n) && "destroy" in n)) {
                    i.height = "auto" == i.height ? m.parent().height() : i.height;
                    var b = e(d).addClass(i.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    m.css({
                        overflow: "hidden",
                        width: i.width,
                        height: i.height
                    });
                    var _, w = e(d).addClass(i.railClass).css({
                            width: i.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: i.alwaysVisible && i.railVisible ? "block" : "none",
                            "border-radius": i.railBorderRadius,
                            background: i.railColor,
                            opacity: i.railOpacity,
                            zIndex: 90
                        }),
                        x = e(d).addClass(i.barClass).css({
                            background: i.color,
                            width: i.size,
                            position: "absolute",
                            top: 0,
                            opacity: i.opacity,
                            display: i.alwaysVisible ? "block" : "none",
                            "border-radius": i.borderRadius,
                            BorderRadius: i.borderRadius,
                            MozBorderRadius: i.borderRadius,
                            WebkitBorderRadius: i.borderRadius,
                            zIndex: 99
                        }),
                        D = "right" == i.position ? {
                            right: i.distance
                        } : {
                            left: i.distance
                        };
                    w.css(D), x.css(D), m.wrap(b), m.parent().append(x), m.parent().append(w), i.railDraggable && x.bind("mousedown", function(n) {
                        var i = e(document);
                        return o = !0, t = parseFloat(x.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, x.css("top", currTop), C(0, x.position().top, !1)
                        }), i.bind("mouseup.slimscroll", function(t) {
                            o = !1, E(), i.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }), w.hover(function() {
                        T()
                    }, function() {
                        E()
                    }), x.hover(function() {
                        r = !0
                    }, function() {
                        r = !1
                    }), m.hover(function() {
                        s = !0, T(), E()
                    }, function() {
                        s = !1, E()
                    }), m.bind("touchstart", function(t, e) {
                        t.originalEvent.touches.length && (l = t.originalEvent.touches[0].pageY)
                    }), m.bind("touchmove", function(t) {
                        (f || t.originalEvent.preventDefault(), t.originalEvent.touches.length) && (C((l - t.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), l = t.originalEvent.touches[0].pageY)
                    }), S(), "bottom" === i.start ? (x.css({
                        top: m.outerHeight() - x.outerHeight()
                    }), C(0, !0)) : "top" !== i.start && (C(e(i.start).position().top, null, !0), i.alwaysVisible || x.hide()), _ = this, window.addEventListener ? (_.addEventListener("DOMMouseScroll", k, !1), _.addEventListener("mousewheel", k, !1)) : document.attachEvent("onmousewheel", k)
                }

                function k(t) {
                    if (s) {
                        var n = 0;
                        (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3);
                        var r = t.target || t.srcTarget || t.srcElement;
                        e(r).closest("." + i.wrapperClass).is(m.parent()) && C(n, !0), t.preventDefault && !f && t.preventDefault(), f || (t.returnValue = !1)
                    }
                }

                function C(t, e, n) {
                    f = !1;
                    var s = t,
                        r = m.outerHeight() - x.outerHeight();
                    if (e && (s = parseInt(x.css("top")) + t * parseInt(i.wheelStep) / 100 * x.outerHeight(), s = Math.min(Math.max(s, 0), r), s = t > 0 ? Math.ceil(s) : Math.floor(s), x.css({
                            top: s + "px"
                        })), s = (u = parseInt(x.css("top")) / (m.outerHeight() - x.outerHeight())) * (m[0].scrollHeight - m.outerHeight()), n) {
                        var o = (s = t) / m[0].scrollHeight * m.outerHeight();
                        o = Math.min(Math.max(o, 0), r), x.css({
                            top: o + "px"
                        })
                    }
                    m.scrollTop(s), m.trigger("slimscrolling", ~~s), T(), E()
                }

                function S() {
                    c = Math.max(m.outerHeight() / m[0].scrollHeight * m.outerHeight(), p), x.css({
                        height: c + "px"
                    });
                    var t = c == m.outerHeight() ? "none" : "block";
                    x.css({
                        display: t
                    })
                }

                function T() {
                    if (S(), clearTimeout(a), u == ~~u) {
                        if (f = i.allowPageScroll, h != u) {
                            var t = 0 == ~~u ? "top" : "bottom";
                            m.trigger("slimscroll", t)
                        }
                    } else f = !1;
                    h = u, c >= m.outerHeight() ? f = !0 : (x.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast"))
                }

                function E() {
                    i.alwaysVisible || (a = setTimeout(function() {
                        i.disableFadeOut && s || r || o || (x.fadeOut("slow"), w.fadeOut("slow"))
                    }, 1e3))
                }
            }), this
        }
    }), e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, n) {
        return n.fn || (n.fn = {}), e(t, n)
    });
    else if ("object" == typeof module && module.exports) {
        var n = "undefined" != typeof window ? window.jQuery : void 0;
        n || (n = require("jquery")).fn || (n.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = e(i, n)
    } else t.daterangepicker = e(t.moment, t.jQuery)
}(this, function(t, e) {
    var n = function(n, i, s) {
        if (this.parentEl = "body", this.element = e(n), this.startDate = t().startOf("day"), this.endDate = t().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = t().subtract(100, "year").format("YYYY"), this.maxYear = t().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
                direction: "ltr",
                format: t.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: t.weekdaysMin(),
                monthNames: t.monthsShort(),
                firstDay: t.localeData().firstDayOfWeek()
            }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof i && null !== i || (i = {}), "string" == typeof(i = e.extend(this.element.data(), i)).template || i.template instanceof e || (i.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = i.parentEl && e(i.parentEl).length ? e(i.parentEl) : e(this.parentEl), this.container = e(i.template).appendTo(this.parentEl), "object" == typeof i.locale && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" == typeof i.locale.daysOfWeek && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" == typeof i.locale.monthNames && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel)) {
            (p = document.createElement("textarea")).innerHTML = i.locale.customRangeLabel;
            var r = p.value;
            this.locale.customRangeLabel = r
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = t(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = t(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = t(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = t(i.maxDate, this.locale.format)), "object" == typeof i.startDate && (this.startDate = t(i.startDate)), "object" == typeof i.endDate && (this.endDate = t(i.endDate)), "object" == typeof i.minDate && (this.minDate = t(i.minDate)), "object" == typeof i.maxDate && (this.maxDate = t(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyButtonClasses && (this.applyButtonClasses = i.applyButtonClasses), "string" == typeof i.applyClass && (this.applyButtonClasses = i.applyClass), "string" == typeof i.cancelButtonClasses && (this.cancelButtonClasses = i.cancelButtonClasses), "string" == typeof i.cancelClass && (this.cancelButtonClasses = i.cancelClass), "object" == typeof i.maxSpan && (this.maxSpan = i.maxSpan), "object" == typeof i.dateLimit && (this.maxSpan = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "number" == typeof i.minYear && (this.minYear = i.minYear), "number" == typeof i.maxYear && (this.maxYear = i.maxYear), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var o = this.locale.firstDay; o > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), o--;
        var a, l, c;
        if (void 0 === i.startDate && void 0 === i.endDate && e(this.element).is(":text")) {
            var u = e(this.element).val(),
                h = u.split(this.locale.separator);
            a = l = null, 2 == h.length ? (a = t(h[0], this.locale.format), l = t(h[1], this.locale.format)) : this.singleDatePicker && "" !== u && (a = t(u, this.locale.format), l = t(u, this.locale.format)), null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
        }
        if ("object" == typeof i.ranges) {
            for (c in i.ranges) {
                a = "string" == typeof i.ranges[c][0] ? t(i.ranges[c][0], this.locale.format) : t(i.ranges[c][0]), l = "string" == typeof i.ranges[c][1] ? t(i.ranges[c][1], this.locale.format) : t(i.ranges[c][1]), this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                var d = this.maxDate;
                if (this.maxSpan && d && a.clone().add(this.maxSpan).isAfter(d) && (d = a.clone().add(this.maxSpan)), d && l.isAfter(d) && (l = d.clone()), !(this.minDate && l.isBefore(this.minDate, this.timepicker ? "minute" : "day") || d && a.isAfter(d, this.timepicker ? "minute" : "day"))) {
                    var p;
                    (p = document.createElement("textarea")).innerHTML = c;
                    r = p.value;
                    this.ranges[r] = [a, l]
                }
            }
            var f = "<ul>";
            for (c in this.ranges) f += '<li data-range-key="' + c + '">' + c + "</li>";
            this.showCustomRangeLabel && (f += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), f += "</ul>", this.container.find(".ranges").prepend(f)
        }
        "function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof i.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", e.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", e.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", e.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", e.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", e.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", e.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", e.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", e.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", e.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": e.proxy(this.show, this),
            "focus.daterangepicker": e.proxy(this.show, this),
            "keyup.daterangepicker": e.proxy(this.elementChanged, this),
            "keydown.daterangepicker": e.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", e.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", e.proxy(this.toggle, this))), this.updateElement()
    };
    return n.prototype = {
        constructor: n,
        setStartDate: function(e) {
            "string" == typeof e && (this.startDate = t(e, this.locale.format)), "object" == typeof e && (this.startDate = t(e)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(e) {
            "string" == typeof e && (this.endDate = t(e, this.locale.format)), "object" == typeof e && (this.endDate = t(e)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var t, e, n, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(n), this.rightCalendar.month.hour(t).minute(e).second(n)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(n) {
            var i, s = (i = "left" == n ? this.leftCalendar : this.rightCalendar).month.month(),
                r = i.month.year(),
                o = i.month.hour(),
                a = i.month.minute(),
                l = i.month.second(),
                c = t([r, s]).daysInMonth(),
                u = t([r, s, 1]),
                h = t([r, s, c]),
                d = t(u).subtract(1, "month").month(),
                p = t(u).subtract(1, "month").year(),
                f = t([p, d]).daysInMonth(),
                m = u.day();
            (i = []).firstDay = u, i.lastDay = h;
            for (var g = 0; g < 6; g++) i[g] = [];
            var v = f - m + this.locale.firstDay + 1;
            v > f && (v -= 7), m == this.locale.firstDay && (v = f - 6);
            for (var y = t([p, d, v, 12, a, l]), b = (g = 0, 0), _ = 0; g < 42; g++, b++, y = t(y).add(24, "hour")) g > 0 && b % 7 == 0 && (b = 0, _++), i[_][b] = y.clone().hour(o).minute(a).second(l), y.hour(12), this.minDate && i[_][b].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[_][b].isBefore(this.minDate) && "left" == n && (i[_][b] = this.minDate.clone()), this.maxDate && i[_][b].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[_][b].isAfter(this.maxDate) && "right" == n && (i[_][b] = this.maxDate.clone());
            "left" == n ? this.leftCalendar.calendar = i : this.rightCalendar.calendar = i;
            var w = "left" == n ? this.minDate : this.startDate,
                x = this.maxDate,
                D = ("left" == n ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            D += "<thead>", D += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (D += "<th></th>"), w && !w.isBefore(i.firstDay) || this.linkedCalendars && "left" != n ? D += "<th></th>" : D += '<th class="prev available"><span></span></th>';
            var k = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var C = i[1][1].month(), S = i[1][1].year(), T = x && x.year() || this.maxYear, E = w && w.year() || this.minYear, A = S == E, M = S == T, O = '<select class="monthselect">', I = 0; I < 12; I++)(!A || I >= w.month()) && (!M || I <= x.month()) ? O += "<option value='" + I + "'" + (I === C ? " selected='selected'" : "") + ">" + this.locale.monthNames[I] + "</option>" : O += "<option value='" + I + "'" + (I === C ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[I] + "</option>";
                O += "</select>";
                for (var N = '<select class="yearselect">', P = E; P <= T; P++) N += '<option value="' + P + '"' + (P === S ? ' selected="selected"' : "") + ">" + P + "</option>";
                k = O + (N += "</select>")
            }
            if (D += '<th colspan="5" class="month">' + k + "</th>", x && !x.isAfter(i.lastDay) || this.linkedCalendars && "right" != n && !this.singleDatePicker ? D += "<th></th>" : D += '<th class="next available"><span></span></th>', D += "</tr>", D += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (D += '<th class="week">' + this.locale.weekLabel + "</th>"), e.each(this.locale.daysOfWeek, function(t, e) {
                    D += "<th>" + e + "</th>"
                }), D += "</tr>", D += "</thead>", D += "<tbody>", null == this.endDate && this.maxSpan) {
                var j = this.startDate.clone().add(this.maxSpan).endOf("day");
                x && !j.isBefore(x) || (x = j)
            }
            for (_ = 0; _ < 6; _++) {
                D += "<tr>", this.showWeekNumbers ? D += '<td class="week">' + i[_][0].week() + "</td>" : this.showISOWeekNumbers && (D += '<td class="week">' + i[_][0].isoWeek() + "</td>");
                for (b = 0; b < 7; b++) {
                    var L = [];
                    i[_][b].isSame(new Date, "day") && L.push("today"), i[_][b].isoWeekday() > 5 && L.push("weekend"), i[_][b].month() != i[1][1].month() && L.push("off"), this.minDate && i[_][b].isBefore(this.minDate, "day") && L.push("off", "disabled"), x && i[_][b].isAfter(x, "day") && L.push("off", "disabled"), this.isInvalidDate(i[_][b]) && L.push("off", "disabled"), i[_][b].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && L.push("active", "start-date"), null != this.endDate && i[_][b].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && L.push("active", "end-date"), null != this.endDate && i[_][b] > this.startDate && i[_][b] < this.endDate && L.push("in-range");
                    var Y = this.isCustomDate(i[_][b]);
                    !1 !== Y && ("string" == typeof Y ? L.push(Y) : Array.prototype.push.apply(L, Y));
                    var $ = "",
                        H = !1;
                    for (g = 0; g < L.length; g++) $ += L[g] + " ", "disabled" == L[g] && (H = !0);
                    H || ($ += "available"), D += '<td class="' + $.replace(/^\s+|\s+$/g, "") + '" data-title="r' + _ + "c" + b + '">' + i[_][b].date() + "</td>"
                }
                D += "</tr>"
            }
            D += "</tbody>", D += "</table>", this.container.find(".drp-calendar." + n + " .calendar-table").html(D)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, n, i, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) n = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    n = this.endDate.clone(), i = this.startDate;
                    var r = this.container.find(".drp-calendar.right .calendar-time");
                    if ("" != r.html() && (n.hour(n.hour() || r.find(".hourselect option:selected").val()), n.minute(n.minute() || r.find(".minuteselect option:selected").val()), n.second(n.second() || r.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var o = r.find(".ampmselect option:selected").val();
                        "PM" === o && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === o && 12 === n.hour() && n.hour(0)
                    }
                    n.isBefore(this.startDate) && (n = this.startDate.clone()), s && n.isAfter(s) && (n = s.clone())
                }
                e = '<select class="hourselect">';
                for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = a; c <= l; c++) {
                    var u = c;
                    this.timePicker24Hour || (u = n.hour() >= 12 ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var h = n.clone().hour(u),
                        d = !1;
                    i && h.minute(59).isBefore(i) && (d = !0), s && h.minute(0).isAfter(s) && (d = !0), u != n.hour() || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (c = 0; c < 60; c += this.timePickerIncrement) {
                    var p = c < 10 ? "0" + c : c;
                    h = n.clone().minute(c), d = !1;
                    i && h.second(59).isBefore(i) && (d = !0), s && h.second(0).isAfter(s) && (d = !0), n.minute() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (c = 0; c < 60; c++) {
                        p = c < 10 ? "0" + c : c, h = n.clone().second(c), d = !1;
                        i && h.isBefore(i) && (d = !0), s && h.isAfter(s) && (d = !0), n.second() != c || d ? e += d ? '<option value="' + c + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + c + '">' + p + "</option>" : e += '<option value="' + c + '" selected="selected">' + p + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var f = "",
                        m = "";
                    i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (f = ' disabled="disabled" class="disabled"'), s && n.clone().hour(0).minute(0).second(0).isAfter(s) && (m = ' disabled="disabled" class="disabled"'), n.hour() >= 12 ? e += '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : e += '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                }
                this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, n = {
                    top: 0,
                    left: 0
                },
                i = e(window).width();
            this.parentEl.is("body") || (n = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, i = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - n.top : this.element.offset().top + this.element.outerHeight() - n.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: i - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - n.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - n.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > e(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = e.proxy(function(t) {
                this.outsideClick(t)
            }, this), e(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), e(window).on("resize.daterangepicker", e.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), e(document).off(".daterangepicker"), e(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var n = e(t.target);
            "focusin" == t.type || n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
            else {
                var n = this.ranges[e];
                this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            e(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (e(t.target).hasClass("available")) {
                var n = e(t.target).attr("data-title"),
                    i = n.substr(1, 1),
                    s = n.substr(3, 1),
                    r = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s],
                    o = this.leftCalendar,
                    a = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".drp-calendar tbody td").each(function(t, n) {
                    if (!e(n).hasClass("week")) {
                        var i = e(n).attr("data-title"),
                            s = i.substr(1, 1),
                            c = i.substr(3, 1),
                            u = e(n).parents(".drp-calendar").hasClass("left") ? o.calendar[s][c] : a.calendar[s][c];
                        u.isAfter(l) && u.isBefore(r) || u.isSame(r, "day") ? e(n).addClass("in-range") : e(n).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (e(t.target).hasClass("available")) {
                var n = e(t.target).attr("data-title"),
                    i = n.substr(1, 1),
                    s = n.substr(3, 1),
                    r = e(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s];
                if (this.endDate || r.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var o = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (c = this.container.find(".left .ampmselect").val()) && o < 12 && (o += 12), "AM" === c && 12 === o && (o = 0);
                        var a = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        r = r.clone().hour(o).minute(a).second(l)
                    }
                    this.endDate = null, this.setStartDate(r.clone())
                } else if (!this.endDate && r.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var c;
                        o = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (c = this.container.find(".right .ampmselect").val()) && o < 12 && (o += 12), "AM" === c && 12 === o && (o = 0);
                        a = parseInt(this.container.find(".right .minuteselect").val(), 10), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        r = r.clone().hour(o).minute(a).second(l)
                    }
                    this.setEndDate(r.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var n in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[n][0].format(i) && this.endDate.format(i) == this.ranges[n][1].format(i)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var n = e(t.target).closest(".drp-calendar").hasClass("left"),
                i = n ? "left" : "right",
                s = this.container.find(".drp-calendar." + i),
                r = parseInt(s.find(".monthselect").val(), 10),
                o = s.find(".yearselect").val();
            n || (o < this.startDate.year() || o == this.startDate.year() && r < this.startDate.month()) && (r = this.startDate.month(), o = this.startDate.year()), this.minDate && (o < this.minDate.year() || o == this.minDate.year() && r < this.minDate.month()) && (r = this.minDate.month(), o = this.minDate.year()), this.maxDate && (o > this.maxDate.year() || o == this.maxDate.year() && r > this.maxDate.month()) && (r = this.maxDate.month(), o = this.maxDate.year()), n ? (this.leftCalendar.month.month(r).year(o), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(r).year(o), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var n = e(t.target).closest(".drp-calendar"),
                i = n.hasClass("left"),
                s = parseInt(n.find(".hourselect").val(), 10),
                r = parseInt(n.find(".minuteselect").val(), 10),
                o = this.timePickerSeconds ? parseInt(n.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var a = n.find(".ampmselect").val();
                "PM" === a && s < 12 && (s += 12), "AM" === a && 12 === s && (s = 0)
            }
            if (i) {
                var l = this.startDate.clone();
                l.hour(s), l.minute(r), l.second(o), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
            } else if (this.endDate) {
                var c = this.endDate.clone();
                c.hour(s), c.minute(r), c.second(o), this.setEndDate(c)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var e = this.element.val().split(this.locale.separator),
                    n = null,
                    i = null;
                2 === e.length && (n = t(e[0], this.locale.format), i = t(e[1], this.locale.format)), (this.singleDatePicker || null === n || null === i) && (i = n = t(this.element.val(), this.locale.format)), n.isValid() && i.isValid() && (this.setStartDate(n), this.setEndDate(i), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            if (this.element.is("input") && this.autoUpdateInput) {
                var t = this.startDate.format(this.locale.format);
                this.singleDatePicker || (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change")
            }
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, e.fn.daterangepicker = function(t, i) {
        var s = e.extend(!0, {}, e.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = e(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new n(t, s, i))
        }), this
    }, n
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.metisMenu = e(t.jQuery)
}(this, function(t) {
    "use strict";

    function e(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), i.forEach(function(e) {
                var i, s, r;
                i = t, s = e, r = n[e], s in i ? Object.defineProperty(i, s, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[s] = r
            })
        }
        return t
    }
    var n, i, s, r, o, a, l, c, u = function(t) {
        var e = "transitionend",
            n = {
                TRANSITION_END: "mmTransitionEnd",
                triggerTransitionEnd: function(n) {
                    t(n).trigger(e)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                }
            };

        function i(e) {
            var i = this,
                s = !1;
            return t(this).one(n.TRANSITION_END, function() {
                s = !0
            }), setTimeout(function() {
                s || n.triggerTransitionEnd(i)
            }, e), this
        }
        return t.fn.mmEmulateTransitionEnd = i, t.event.special[n.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }, n
    }(t = t && t.hasOwnProperty("default") ? t.default : t);
    return i = "metisMenu", r = "." + (s = "metisMenu"), o = (n = t).fn[i], a = {
        toggle: !0,
        preventDefault: !0,
        activeClass: "active",
        collapseClass: "collapse",
        collapseInClass: "in",
        collapsingClass: "collapsing",
        triggerElement: "a",
        parentTrigger: "li",
        subMenu: "ul"
    }, l = {
        SHOW: "show" + r,
        SHOWN: "shown" + r,
        HIDE: "hide" + r,
        HIDDEN: "hidden" + r,
        CLICK_DATA_API: "click" + r + ".data-api"
    }, c = function() {
        function t(t, n) {
            this.element = t, this.config = e({}, a, n), this.transitioning = null, this.init()
        }
        var i = t.prototype;
        return i.init = function() {
            var t = this,
                e = this.config;
            n(this.element).find(e.parentTrigger + "." + e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded", !0).addClass(e.collapseClass + " " + e.collapseInClass), n(this.element).find(e.parentTrigger).not("." + e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded", !1).addClass(e.collapseClass), n(this.element).find(e.parentTrigger).has(e.subMenu).children(e.triggerElement).on(l.CLICK_DATA_API, function(i) {
                var s = n(this),
                    r = s.parent(e.parentTrigger),
                    o = r.siblings(e.parentTrigger).children(e.triggerElement),
                    a = r.children(e.subMenu);
                e.preventDefault && i.preventDefault(), "true" !== s.attr("aria-disabled") && (r.hasClass(e.activeClass) ? (s.attr("aria-expanded", !1), t.hide(a)) : (t.show(a), s.attr("aria-expanded", !0), e.toggle && o.attr("aria-expanded", !1)), e.onTransitionStart && e.onTransitionStart(i))
            })
        }, i.show = function(t) {
            var e = this;
            if (!this.transitioning && !n(t).hasClass(this.config.collapsingClass)) {
                var i = n(t),
                    s = n.Event(l.SHOW);
                if (i.trigger(s), !s.isDefaultPrevented()) {
                    i.parent(this.config.parentTrigger).addClass(this.config.activeClass), this.config.toggle && this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass).attr("aria-expanded", !1)), i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0), this.setTransitioning(!0);
                    var r = function() {
                        e.config && e.element && (i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass + " " + e.config.collapseInClass).height("").attr("aria-expanded", !0), e.setTransitioning(!1), i.trigger(l.SHOWN))
                    };
                    u.supportsTransitionEnd() ? i.height(t[0].scrollHeight).one(u.TRANSITION_END, r).mmEmulateTransitionEnd(350) : r()
                }
            }
        }, i.hide = function(t) {
            var e = this;
            if (!this.transitioning && n(t).hasClass(this.config.collapseInClass)) {
                var i = n(t),
                    s = n.Event(l.HIDE);
                if (i.trigger(s), !s.isDefaultPrevented()) {
                    i.parent(this.config.parentTrigger).removeClass(this.config.activeClass), i.height(i.height())[0].offsetHeight, i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass), this.setTransitioning(!0);
                    var r = function() {
                        e.config && e.element && (e.transitioning && e.config.onTransitionEnd && e.config.onTransitionEnd(), e.setTransitioning(!1), i.trigger(l.HIDDEN), i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass).attr("aria-expanded", !1))
                    };
                    u.supportsTransitionEnd() ? 0 === i.height() || "none" === i.css("display") ? r() : i.height(0).one(u.TRANSITION_END, r).mmEmulateTransitionEnd(350) : r()
                }
            }
        }, i.setTransitioning = function(t) {
            this.transitioning = t
        }, i.dispose = function() {
            n.removeData(this.element, s), n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null
        }, t.jQueryInterface = function(i) {
            return this.each(function() {
                var r = n(this),
                    o = r.data(s),
                    l = e({}, a, r.data(), "object" == typeof i && i ? i : {});
                if (!o && /dispose/.test(i) && this.dispose(), o || (o = new t(this, l), r.data(s, o)), "string" == typeof i) {
                    if (void 0 === o[i]) throw new Error('No method named "' + i + '"');
                    o[i]()
                }
            })
        }, t
    }(), n.fn[i] = c.jQueryInterface, n.fn[i].Constructor = c, n.fn[i].noConflict = function() {
        return n.fn[i] = o, c.jQueryInterface
    }, c
}), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, n, i) {
        "use strict";
        var s = {
            _positionClasses: ["bottom-left", "bottom-right", "top-right", "top-left", "bottom-center", "top-center", "mid-center"],
            _defaultIcons: ["success", "error", "info", "warning"],
            init: function(e, n) {
                this.prepareOptions(e, t.toast.options), this.process()
            },
            prepareOptions: function(e, n) {
                var i = {};
                "string" == typeof e || e instanceof Array ? i.text = e : i = e, this.options = t.extend({}, n, i)
            },
            process: function() {
                this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate()
            },
            setup: function() {
                var e = "";
                if (this._toastEl = this._toastEl || t("<div></div>", {
                        class: "jq-toast-single"
                    }), e += '<span class="jq-toast-loader"></span>', this.options.allowToastClose && (e += '<span class="close-jq-toast-single">&times;</span>'), this.options.text instanceof Array) {
                    this.options.heading && (e += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), e += '<ul class="jq-toast-ul">';
                    for (var n = 0; n < this.options.text.length; n++) e += '<li class="jq-toast-li" id="jq-toast-item-' + n + '">' + this.options.text[n] + "</li>";
                    e += "</ul>"
                } else this.options.heading && (e += '<h2 class="jq-toast-heading">' + this.options.heading + "</h2>"), e += this.options.text;
                this._toastEl.html(e), !1 !== this.options.bgColor && this._toastEl.css("background-color", this.options.bgColor), !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor), this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign), !1 !== this.options.icon && (this._toastEl.addClass("jq-has-icon"), -1 !== t.inArray(this.options.icon, this._defaultIcons) && this._toastEl.addClass("jq-icon-" + this.options.icon)), !1 !== this.options.class && this._toastEl.addClass(this.options.class)
            },
            position: function() {
                "string" == typeof this.options.position && -1 !== t.inArray(this.options.position, this._positionClasses) ? "bottom-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    bottom: 20
                }) : "top-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: 20
                }) : "mid-center" === this.options.position ? this._container.css({
                    left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                    top: t(e).outerHeight() / 2 - this._container.outerHeight() / 2
                }) : this._container.addClass(this.options.position) : "object" == typeof this.options.position ? this._container.css({
                    top: this.options.position.top ? this.options.position.top : "auto",
                    bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
                    left: this.options.position.left ? this.options.position.left : "auto",
                    right: this.options.position.right ? this.options.position.right : "auto"
                }) : this._container.addClass("bottom-left")
            },
            bindToast: function() {
                var t = this;
                this._toastEl.on("afterShown", function() {
                    t.processLoader()
                }), this._toastEl.find(".close-jq-toast-single").on("click", function(e) {
                    e.preventDefault(), "fade" === t.options.showHideTransition ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function() {
                        t._toastEl.trigger("afterHidden")
                    })) : "slide" === t.options.showHideTransition ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function() {
                        t._toastEl.trigger("afterHidden")
                    })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function() {
                        t._toastEl.trigger("afterHidden")
                    }))
                }), "function" == typeof this.options.beforeShow && this._toastEl.on("beforeShow", function() {
                    t.options.beforeShow()
                }), "function" == typeof this.options.afterShown && this._toastEl.on("afterShown", function() {
                    t.options.afterShown()
                }), "function" == typeof this.options.beforeHide && this._toastEl.on("beforeHide", function() {
                    t.options.beforeHide()
                }), "function" == typeof this.options.afterHidden && this._toastEl.on("afterHidden", function() {
                    t.options.afterHidden()
                })
            },
            addToDom: function() {
                var e = t(".jq-toast-wrap");
                if (0 === e.length ? (e = t("<div></div>", {
                        class: "jq-toast-wrap"
                    }), t("body").append(e)) : (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) && e.empty(), e.find(".jq-toast-single:hidden").remove(), e.append(this._toastEl), this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {
                    var n = e.find(".jq-toast-single").length - this.options.stack;
                    n > 0 && t(".jq-toast-wrap").find(".jq-toast-single").slice(0, n).remove()
                }
                this._container = e
            },
            canAutoHide: function() {
                return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10))
            },
            processLoader: function() {
                if (!this.canAutoHide() || !1 === this.options.loader) return !1;
                var t = this._toastEl.find(".jq-toast-loader"),
                    e = (this.options.hideAfter - 400) / 1e3 + "s",
                    n = this.options.loaderBg,
                    i = t.attr("style") || "";
                i = i.substring(0, i.indexOf("-webkit-transition")), i += "-webkit-transition: width " + e + " ease-in;                       -o-transition: width " + e + " ease-in;                       transition: width " + e + " ease-in;                       background-color: " + n + ";", t.attr("style", i).addClass("jq-toast-loaded")
            },
            animate: function() {
                var t = this;
                if (this._toastEl.hide(), this._toastEl.trigger("beforeShow"), "fade" === this.options.showHideTransition.toLowerCase() ? this._toastEl.fadeIn(function() {
                        t._toastEl.trigger("afterShown")
                    }) : "slide" === this.options.showHideTransition.toLowerCase() ? this._toastEl.slideDown(function() {
                        t._toastEl.trigger("afterShown")
                    }) : this._toastEl.show(function() {
                        t._toastEl.trigger("afterShown")
                    }), this.canAutoHide()) {
                    t = this;
                    e.setTimeout(function() {
                        "fade" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.fadeOut(function() {
                            t._toastEl.trigger("afterHidden")
                        })) : "slide" === t.options.showHideTransition.toLowerCase() ? (t._toastEl.trigger("beforeHide"), t._toastEl.slideUp(function() {
                            t._toastEl.trigger("afterHidden")
                        })) : (t._toastEl.trigger("beforeHide"), t._toastEl.hide(function() {
                            t._toastEl.trigger("afterHidden")
                        }))
                    }, this.options.hideAfter)
                }
            },
            reset: function(e) {
                "all" === e ? t(".jq-toast-wrap").remove() : this._toastEl.remove()
            },
            update: function(t) {
                this.prepareOptions(t, this.options), this.setup(), this.bindToast()
            }
        };
        t.toast = function(t) {
            var e = Object.create(s);
            return e.init(t, this), {
                reset: function(t) {
                    e.reset(t)
                },
                update: function(t) {
                    e.update(t)
                }
            }
        }, t.toast.options = {
            text: "",
            heading: "",
            showHideTransition: "fade",
            allowToastClose: !0,
            hideAfter: 3e3,
            loader: !0,
            loaderBg: "#9EC600",
            stack: 5,
            position: "bottom-left",
            bgColor: !1,
            textColor: !1,
            textAlign: "left",
            icon: !1,
            beforeShow: function() {},
            afterShown: function() {},
            beforeHide: function() {},
            afterHidden: function() {}
        }
    }(jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n), n
        } : t(jQuery)
    }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var n, i, s;
                return e && e.requirejs || (e ? i = e : e = {}, function(t) {
                    function e(t, e) {
                        return b.call(t, e)
                    }

                    function r(t, e) {
                        var n, i, s, r, o, a, l, c, u, h, d, p = e && e.split("/"),
                            f = v.map,
                            m = f && f["*"] || {};
                        if (t) {
                            for (o = (t = t.split("/")).length - 1, v.nodeIdCompat && w.test(t[o]) && (t[o] = t[o].replace(w, "")), "." === t[0].charAt(0) && p && (t = p.slice(0, p.length - 1).concat(t)), u = 0; u < t.length; u++)
                                if ("." === (d = t[u])) t.splice(u, 1), u -= 1;
                                else if (".." === d) {
                                if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
                                u > 0 && (t.splice(u - 1, 2), u -= 2)
                            }
                            t = t.join("/")
                        }
                        if ((p || m) && f) {
                            for (u = (n = t.split("/")).length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), p)
                                    for (h = p.length; h > 0; h -= 1)
                                        if ((s = f[p.slice(0, h).join("/")]) && (s = s[i])) {
                                            r = s, a = u;
                                            break
                                        } if (r) break;
                                !l && m && m[i] && (l = m[i], c = u)
                            }!r && l && (r = l, a = c), r && (n.splice(0, a, r), t = n.join("/"))
                        }
                        return t
                    }

                    function o(e, n) {
                        return function() {
                            var i = _.call(arguments, 0);
                            return "string" != typeof i[0] && 1 === i.length && i.push(null), d.apply(t, i.concat([e, n]))
                        }
                    }

                    function a(t) {
                        return function(e) {
                            m[t] = e
                        }
                    }

                    function l(n) {
                        if (e(g, n)) {
                            var i = g[n];
                            delete g[n], y[n] = !0, h.apply(t, i)
                        }
                        if (!e(m, n) && !e(y, n)) throw new Error("No " + n);
                        return m[n]
                    }

                    function c(t) {
                        var e, n = t ? t.indexOf("!") : -1;
                        return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                    }

                    function u(t) {
                        return t ? c(t) : []
                    }
                    var h, d, p, f, m = {},
                        g = {},
                        v = {},
                        y = {},
                        b = Object.prototype.hasOwnProperty,
                        _ = [].slice,
                        w = /\.js$/;
                    p = function(t, e) {
                        var n, i, s = c(t),
                            o = s[0],
                            a = e[1];
                        return t = s[1], o && (n = l(o = r(o, a))), o ? t = n && n.normalize ? n.normalize(t, (i = a, function(t) {
                            return r(t, i)
                        })) : r(t, a) : (o = (s = c(t = r(t, a)))[0], t = s[1], o && (n = l(o))), {
                            f: o ? o + "!" + t : t,
                            n: t,
                            pr: o,
                            p: n
                        }
                    }, f = {
                        require: function(t) {
                            return o(t)
                        },
                        exports: function(t) {
                            var e = m[t];
                            return void 0 !== e ? e : m[t] = {}
                        },
                        module: function(t) {
                            return {
                                id: t,
                                uri: "",
                                exports: m[t],
                                config: (e = t, function() {
                                    return v && v.config && v.config[e] || {}
                                })
                            };
                            var e
                        }
                    }, h = function(n, i, s, r) {
                        var c, h, d, v, b, _, w, x = [],
                            D = typeof s;
                        if (_ = u(r = r || n), "undefined" === D || "function" === D) {
                            for (i = !i.length && s.length ? ["require", "exports", "module"] : i, b = 0; b < i.length; b += 1)
                                if ("require" === (h = (v = p(i[b], _)).f)) x[b] = f.require(n);
                                else if ("exports" === h) x[b] = f.exports(n), w = !0;
                            else if ("module" === h) c = x[b] = f.module(n);
                            else if (e(m, h) || e(g, h) || e(y, h)) x[b] = l(h);
                            else {
                                if (!v.p) throw new Error(n + " missing " + h);
                                v.p.load(v.n, o(r, !0), a(h), {}), x[b] = m[h]
                            }
                            d = s ? s.apply(m[n], x) : void 0, n && (c && c.exports !== t && c.exports !== m[n] ? m[n] = c.exports : d === t && w || (m[n] = d))
                        } else n && (m[n] = s)
                    }, n = i = d = function(e, n, i, s, r) {
                        if ("string" == typeof e) return f[e] ? f[e](n) : l(p(e, u(n)).f);
                        if (!e.splice) {
                            if ((v = e).deps && d(v.deps, v.callback), !n) return;
                            n.splice ? (e = n, n = i, i = null) : e = t
                        }
                        return n = n || function() {}, "function" == typeof i && (i = s, s = r), s ? h(t, e, n, i) : setTimeout(function() {
                            h(t, e, n, i)
                        }, 4), d
                    }, d.config = function(t) {
                        return d(t)
                    }, n._defined = m, (s = function(t, n, i) {
                        if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                        n.splice || (i = n, n = []), e(m, t) || e(g, t) || (g[t] = [t, n, i])
                    }).amd = {
                        jQuery: !0
                    }
                }(), e.requirejs = n, e.require = i, e.define = s), e.define("almond", function() {}), e.define("jquery", [], function() {
                    var e = t || $;
                    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                }), e.define("select2/utils", ["jquery"], function(t) {
                    function e(t) {
                        var e = t.prototype,
                            n = [];
                        for (var i in e) "function" == typeof e[i] && "constructor" !== i && n.push(i);
                        return n
                    }
                    var n = {
                            Extend: function(t, e) {
                                function n() {
                                    this.constructor = t
                                }
                                var i = {}.hasOwnProperty;
                                for (var s in e) i.call(e, s) && (t[s] = e[s]);
                                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                            },
                            Decorate: function(t, n) {
                                function i() {
                                    var e = Array.prototype.unshift,
                                        i = n.prototype.constructor.length,
                                        s = t.prototype.constructor;
                                    i > 0 && (e.call(arguments, t.prototype.constructor), s = n.prototype.constructor), s.apply(this, arguments)
                                }
                                var s = e(n),
                                    r = e(t);
                                n.displayName = t.displayName, i.prototype = new function() {
                                    this.constructor = i
                                };
                                for (var o = 0; o < r.length; o++) {
                                    var a = r[o];
                                    i.prototype[a] = t.prototype[a]
                                }
                                for (var l = function(t) {
                                        var e = function() {};
                                        t in i.prototype && (e = i.prototype[t]);
                                        var s = n.prototype[t];
                                        return function() {
                                            return Array.prototype.unshift.call(arguments, e), s.apply(this, arguments)
                                        }
                                    }, c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    i.prototype[u] = l(u)
                                }
                                return i
                            }
                        },
                        i = function() {
                            this.listeners = {}
                        };
                    i.prototype.on = function(t, e) {
                        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                    }, i.prototype.trigger = function(t) {
                        var e = Array.prototype.slice,
                            n = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e)
                    }, n.Observable = i, n.generateChars = function(t) {
                        for (var e = "", n = 0; n < t; n++) e += Math.floor(36 * Math.random()).toString(36);
                        return e
                    }, n.bind = function(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }, n._convertData = function(t) {
                        for (var e in t) {
                            var n = e.split("-"),
                                i = t;
                            if (1 !== n.length) {
                                for (var s = 0; s < n.length; s++) {
                                    var r = n[s];
                                    (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), s == n.length - 1 && (i[r] = t[e]), i = i[r]
                                }
                                delete t[e]
                            }
                        }
                        return t
                    }, n.hasScroll = function(e, n) {
                        var i = t(n),
                            s = n.style.overflowX,
                            r = n.style.overflowY;
                        return (s !== r || "hidden" !== r && "visible" !== r) && ("scroll" === s || "scroll" === r || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
                    }, n.escapeMarkup = function(t) {
                        var e = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                            return e[t]
                        })
                    }, n.appendMany = function(e, n) {
                        if ("1.7" === t.fn.jquery.substr(0, 3)) {
                            var i = t();
                            t.map(n, function(t) {
                                i = i.add(t)
                            }), n = i
                        }
                        e.append(n)
                    }, n.__cache = {};
                    var s = 0;
                    return n.GetUniqueElementId = function(t) {
                        var e = t.getAttribute("data-select2-id");
                        return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++s), e = s.toString())), e
                    }, n.StoreData = function(t, e, i) {
                        var s = n.GetUniqueElementId(t);
                        n.__cache[s] || (n.__cache[s] = {}), n.__cache[s][e] = i
                    }, n.GetData = function(e, i) {
                        var s = n.GetUniqueElementId(e);
                        return i ? n.__cache[s] && null != n.__cache[s][i] ? n.__cache[s][i] : t(e).data(i) : n.__cache[s]
                    }, n.RemoveData = function(t) {
                        var e = n.GetUniqueElementId(t);
                        null != n.__cache[e] && delete n.__cache[e]
                    }, n
                }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                    function n(t, e, i) {
                        this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function() {
                        var e = t('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                    }, n.prototype.clear = function() {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function(e) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            s = this.options.get("translations").get(e.message);
                        i.append(n(s(e.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function(t) {
                        this.hideLoading();
                        var e = [];
                        if (null != t.results && 0 !== t.results.length) {
                            t.results = this.sort(t.results);
                            for (var n = 0; n < t.results.length; n++) {
                                var i = t.results[n],
                                    s = this.option(i);
                                e.push(s)
                            }
                            this.$results.append(e)
                        } else 0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        })
                    }, n.prototype.position = function(t, e) {
                        e.find(".select2-results").append(t)
                    }, n.prototype.sort = function(t) {
                        return this.options.get("sorter")(t)
                    }, n.prototype.highlightFirstItem = function() {
                        var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var n = this;
                        this.data.current(function(i) {
                            var s = t.map(i, function(t) {
                                return t.id.toString()
                            });
                            n.$results.find(".select2-results__option[aria-selected]").each(function() {
                                var n = t(this),
                                    i = e.GetData(this, "data"),
                                    r = "" + i.id;
                                null != i.element && i.element.selected || null == i.element && t.inArray(r, s) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(t) {
                        this.hideLoading();
                        var e = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(t)
                            },
                            n = this.option(e);
                        n.className += " loading-results", this.$results.prepend(n)
                    }, n.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function(n) {
                        var i = document.createElement("li");
                        i.className = "select2-results__option";
                        var s = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        for (var r in n.disabled && (delete s["aria-selected"], s["aria-disabled"] = "true"), null == n.id && delete s["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (s.role = "group", s["aria-label"] = n.text, delete s["aria-selected"]), s) {
                            var o = s[r];
                            i.setAttribute(r, o)
                        }
                        if (n.children) {
                            var a = t(i),
                                l = document.createElement("strong");
                            l.className = "select2-results__group", t(l), this.template(n, l);
                            for (var c = [], u = 0; u < n.children.length; u++) {
                                var h = n.children[u],
                                    d = this.option(h);
                                c.push(d)
                            }
                            var p = t("<ul></ul>", {
                                class: "select2-results__options select2-results__options--nested"
                            });
                            p.append(c), a.append(l), a.append(p)
                        } else this.template(n, i);
                        return e.StoreData(i, "data", n), i
                    }, n.prototype.bind = function(n, i) {
                        var s = this,
                            r = n.id + "-results";
                        this.$results.attr("id", r), n.on("results:all", function(t) {
                            s.clear(), s.append(t.data), n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), n.on("results:append", function(t) {
                            s.append(t.data), n.isOpen() && s.setClasses()
                        }), n.on("query", function(t) {
                            s.hideMessages(), s.showLoading(t)
                        }), n.on("select", function() {
                            n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), n.on("unselect", function() {
                            n.isOpen() && (s.setClasses(), s.highlightFirstItem())
                        }), n.on("open", function() {
                            s.$results.attr("aria-expanded", "true"), s.$results.attr("aria-hidden", "false"), s.setClasses(), s.ensureHighlightVisible()
                        }), n.on("close", function() {
                            s.$results.attr("aria-expanded", "false"), s.$results.attr("aria-hidden", "true"), s.$results.removeAttr("aria-activedescendant")
                        }), n.on("results:toggle", function() {
                            var t = s.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup")
                        }), n.on("results:select", function() {
                            var t = s.getHighlightedResults();
                            if (0 !== t.length) {
                                var n = e.GetData(t[0], "data");
                                "true" == t.attr("aria-selected") ? s.trigger("close", {}) : s.trigger("select", {
                                    data: n
                                })
                            }
                        }), n.on("results:previous", function() {
                            var t = s.getHighlightedResults(),
                                e = s.$results.find("[aria-selected]"),
                                n = e.index(t);
                            if (!(n <= 0)) {
                                var i = n - 1;
                                0 === t.length && (i = 0);
                                var r = e.eq(i);
                                r.trigger("mouseenter");
                                var o = s.$results.offset().top,
                                    a = r.offset().top,
                                    l = s.$results.scrollTop() + (a - o);
                                0 === i ? s.$results.scrollTop(0) : a - o < 0 && s.$results.scrollTop(l)
                            }
                        }), n.on("results:next", function() {
                            var t = s.getHighlightedResults(),
                                e = s.$results.find("[aria-selected]"),
                                n = e.index(t) + 1;
                            if (!(n >= e.length)) {
                                var i = e.eq(n);
                                i.trigger("mouseenter");
                                var r = s.$results.offset().top + s.$results.outerHeight(!1),
                                    o = i.offset().top + i.outerHeight(!1),
                                    a = s.$results.scrollTop() + o - r;
                                0 === n ? s.$results.scrollTop(0) : o > r && s.$results.scrollTop(a)
                            }
                        }), n.on("results:focus", function(t) {
                            t.element.addClass("select2-results__option--highlighted")
                        }), n.on("results:message", function(t) {
                            s.displayMessage(t)
                        }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                            var e = s.$results.scrollTop(),
                                n = s.$results.get(0).scrollHeight - e + t.deltaY,
                                i = t.deltaY > 0 && e - t.deltaY <= 0,
                                r = t.deltaY < 0 && n <= s.$results.height();
                            i ? (s.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : r && (s.$results.scrollTop(s.$results.get(0).scrollHeight - s.$results.height()), t.preventDefault(), t.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(n) {
                            var i = t(this),
                                r = e.GetData(this, "data");
                            "true" !== i.attr("aria-selected") ? s.trigger("select", {
                                originalEvent: n,
                                data: r
                            }) : s.options.get("multiple") ? s.trigger("unselect", {
                                originalEvent: n,
                                data: r
                            }) : s.trigger("close", {})
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(n) {
                            var i = e.GetData(this, "data");
                            s.getHighlightedResults().removeClass("select2-results__option--highlighted"), s.trigger("results:focus", {
                                data: i,
                                element: t(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function() {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, n.prototype.destroy = function() {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function() {
                        var t = this.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = this.$results.find("[aria-selected]").index(t),
                                n = this.$results.offset().top,
                                i = t.offset().top,
                                s = this.$results.scrollTop() + (i - n),
                                r = i - n;
                            s -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(s)
                        }
                    }, n.prototype.template = function(e, n) {
                        var i = this.options.get("templateResult"),
                            s = this.options.get("escapeMarkup"),
                            r = i(e, n);
                        null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = s(r) : t(n).append(r)
                    }, n
                }), e.define("select2/keys", [], function() {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, n) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, e.Observable), i.prototype.render = function() {
                        var n = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != e.GetData(this.$element[0], "old-tabindex") ? this._tabindex = e.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n, n
                    }, i.prototype.bind = function(t, e) {
                        var i = this,
                            s = (t.id, t.id + "-results");
                        this.container = t, this.$selection.on("focus", function(t) {
                            i.trigger("focus", t)
                        }), this.$selection.on("blur", function(t) {
                            i._handleBlur(t)
                        }), this.$selection.on("keydown", function(t) {
                            i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
                        }), t.on("results:focus", function(t) {
                            i.$selection.attr("aria-activedescendant", t.data._resultId)
                        }), t.on("selection:update", function(t) {
                            i.update(t.data)
                        }), t.on("open", function() {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", s), i._attachCloseHandler(t)
                        }), t.on("close", function() {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), window.setTimeout(function() {
                                i.$selection.focus()
                            }, 0), i._detachCloseHandler(t)
                        }), t.on("enable", function() {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), t.on("disable", function() {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, i.prototype._handleBlur = function(e) {
                        var n = this;
                        window.setTimeout(function() {
                            document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e)
                        }, 1)
                    }, i.prototype._attachCloseHandler = function(n) {
                        t(document.body).on("mousedown.select2." + n.id, function(n) {
                            var i = t(n.target).closest(".select2");
                            t(".select2.select2-container--open").each(function() {
                                t(this), this != i[0] && e.GetData(this, "element").select2("close")
                            })
                        })
                    }, i.prototype._detachCloseHandler = function(e) {
                        t(document.body).off("mousedown.select2." + e.id)
                    }, i.prototype.position = function(t, e) {
                        e.find(".selection").append(t)
                    }, i.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, i.prototype.update = function(t) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, i
                }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, n, i) {
                    function s() {
                        s.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(s, e), s.prototype.render = function() {
                        var t = s.__super__.render.call(this);
                        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                    }, s.prototype.bind = function(t, e) {
                        var n = this;
                        s.__super__.bind.apply(this, arguments);
                        var i = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(t) {
                            1 === t.which && n.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), t.on("focus", function(e) {
                            t.isOpen() || n.$selection.focus()
                        })
                    }, s.prototype.clear = function() {
                        var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title")
                    }, s.prototype.display = function(t, e) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(t, e))
                    }, s.prototype.selectionContainer = function() {
                        return t("<span></span>")
                    }, s.prototype.update = function(t) {
                        if (0 !== t.length) {
                            var e = t[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(e, n);
                            n.empty().append(i), n.attr("title", e.title || e.text)
                        } else this.clear()
                    }, s
                }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, n) {
                    function i(t, e) {
                        i.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(i, e), i.prototype.render = function() {
                        var t = i.__super__.render.call(this);
                        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                    }, i.prototype.bind = function(e, s) {
                        var r = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                            r.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                            if (!r.options.get("disabled")) {
                                var i = t(this).parent(),
                                    s = n.GetData(i[0], "data");
                                r.trigger("unselect", {
                                    originalEvent: e,
                                    data: s
                                })
                            }
                        })
                    }, i.prototype.clear = function() {
                        var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title")
                    }, i.prototype.display = function(t, e) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(t, e))
                    }, i.prototype.selectionContainer = function() {
                        return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                    }, i.prototype.update = function(t) {
                        if (this.clear(), 0 !== t.length) {
                            for (var e = [], i = 0; i < t.length; i++) {
                                var s = t[i],
                                    r = this.selectionContainer(),
                                    o = this.display(s, r);
                                r.append(o), r.attr("title", s.title || s.text), n.StoreData(r[0], "data", s), e.push(r)
                            }
                            var a = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(a, e)
                        }
                    }, i
                }), e.define("select2/selection/placeholder", ["../utils"], function(t) {
                    function e(t, e, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
                    }
                    return e.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, e.prototype.createPlaceholder = function(t, e) {
                        var n = this.selectionContainer();
                        return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, e.prototype.update = function(t, e) {
                        var n = 1 == e.length && e[0].id != this.placeholder.id;
                        if (e.length > 1 || n) return t.call(this, e);
                        this.clear();
                        var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, e
                }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(t, e, n) {
                    function i() {}
                    return i.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                            i._handleClear(t)
                        }), e.on("keypress", function(t) {
                            i._handleKeyboardClear(t, e)
                        })
                    }, i.prototype._handleClear = function(t, e) {
                        if (!this.options.get("disabled")) {
                            var i = this.$selection.find(".select2-selection__clear");
                            if (0 !== i.length) {
                                e.stopPropagation();
                                var s = n.GetData(i[0], "data"),
                                    r = this.$element.val();
                                this.$element.val(this.placeholder.id);
                                var o = {
                                    data: s
                                };
                                if (this.trigger("clear", o), o.prevented) return void this.$element.val(r);
                                for (var a = 0; a < s.length; a++)
                                    if (o = {
                                            data: s[a]
                                        }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                                this.$element.trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, i.prototype._handleKeyboardClear = function(t, n, i) {
                        i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n)
                    }, i.prototype.update = function(e, i) {
                        if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                            var s = t('<span class="select2-selection__clear">&times;</span>');
                            n.StoreData(s[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(s)
                        }
                    }, i
                }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, n) {
                    function i(t, e, n) {
                        t.call(this, e, n)
                    }
                    return i.prototype.render = function(e) {
                        var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = e.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function(t, i, s) {
                        var r = this;
                        t.call(this, i, s), i.on("open", function() {
                            r.$search.trigger("focus")
                        }), i.on("close", function() {
                            r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                        }), i.on("enable", function() {
                            r.$search.prop("disabled", !1), r._transferTabIndex()
                        }), i.on("disable", function() {
                            r.$search.prop("disabled", !0)
                        }), i.on("focus", function(t) {
                            r.$search.trigger("focus")
                        }), i.on("results:focus", function(t) {
                            r.$search.attr("aria-activedescendant", t.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                            r.trigger("focus", t)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                            r._handleBlur(t)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                            if (t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented(), t.which === n.BACKSPACE && "" === r.$search.val()) {
                                var i = r.$searchContainer.prev(".select2-selection__choice");
                                if (i.length > 0) {
                                    var s = e.GetData(i[0], "data");
                                    r.searchRemoveChoice(s), t.preventDefault()
                                }
                            }
                        });
                        var o = document.documentMode,
                            a = o && o <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) {
                            a ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                            if (a && "input" === t.type) r.$selection.off("input.search input.searchcheck");
                            else {
                                var e = t.which;
                                e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t)
                            }
                        })
                    }, i.prototype._transferTabIndex = function(t) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, i.prototype.createPlaceholder = function(t, e) {
                        this.$search.attr("placeholder", e.text)
                    }, i.prototype.update = function(t, e) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus())
                    }, i.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function(t, e) {
                        this.trigger("unselect", {
                            data: e
                        }), this.$search.val(e.text), this.handleSearch()
                    }, i.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var t = "";
                        t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", t)
                    }, i
                }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                    function e() {}
                    return e.prototype.bind = function(e, n, i) {
                        var s = this,
                            r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                            o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                        e.call(this, n, i), n.on("*", function(e, n) {
                            if (-1 !== t.inArray(e, r)) {
                                n = n || {};
                                var i = t.Event("select2:" + e, {
                                    params: n
                                });
                                s.$element.trigger(i), -1 !== t.inArray(e, o) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, e
                }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                    function n(t) {
                        this.dict = t || {}
                    }
                    return n.prototype.all = function() {
                        return this.dict
                    }, n.prototype.get = function(t) {
                        return this.dict[t]
                    }, n.prototype.extend = function(e) {
                        this.dict = t.extend({}, e.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function(t) {
                        if (!(t in n._cache)) {
                            var i = e(t);
                            n._cache[t] = i
                        }
                        return new n(n._cache[t])
                    }, n
                }), e.define("select2/diacritics", [], function() {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), e.define("select2/data/base", ["../utils"], function(t) {
                    function e(t, n) {
                        e.__super__.constructor.call(this)
                    }
                    return t.Extend(e, t.Observable), e.prototype.current = function(t) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, e.prototype.query = function(t, e) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, e.prototype.bind = function(t, e) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, n) {
                        var i = e.id + "-result-";
                        return i += t.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + t.generateChars(4), i
                    }, e
                }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, t), i.prototype.current = function(t) {
                        var e = [],
                            i = this;
                        this.$element.find(":selected").each(function() {
                            var t = n(this),
                                s = i.item(t);
                            e.push(s)
                        }), t(e)
                    }, i.prototype.select = function(t) {
                        var e = this;
                        if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(i) {
                            var s = [];
                            (t = [t]).push.apply(t, i);
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r].id; - 1 === n.inArray(o, s) && s.push(o)
                            }
                            e.$element.val(s), e.$element.trigger("change")
                        });
                        else {
                            var i = t.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(t) {
                        var e = this;
                        if (this.$element.prop("multiple")) {
                            if (t.selected = !1, n(t.element).is("option")) return t.element.selected = !1, void this.$element.trigger("change");
                            this.current(function(i) {
                                for (var s = [], r = 0; r < i.length; r++) {
                                    var o = i[r].id;
                                    o !== t.id && -1 === n.inArray(o, s) && s.push(o)
                                }
                                e.$element.val(s), e.$element.trigger("change")
                            })
                        }
                    }, i.prototype.bind = function(t, e) {
                        var n = this;
                        this.container = t, t.on("select", function(t) {
                            n.select(t.data)
                        }), t.on("unselect", function(t) {
                            n.unselect(t.data)
                        })
                    }, i.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            e.RemoveData(this)
                        })
                    }, i.prototype.query = function(t, e) {
                        var i = [],
                            s = this;
                        this.$element.children().each(function() {
                            var e = n(this);
                            if (e.is("option") || e.is("optgroup")) {
                                var r = s.item(e),
                                    o = s.matches(t, r);
                                null !== o && i.push(o)
                            }
                        }), e({
                            results: i
                        })
                    }, i.prototype.addOptions = function(t) {
                        e.appendMany(this.$element, t)
                    }, i.prototype.option = function(t) {
                        var i;
                        t.children ? (i = document.createElement("optgroup")).label = t.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = t.text : i.innerText = t.text, void 0 !== t.id && (i.value = t.id), t.disabled && (i.disabled = !0), t.selected && (i.selected = !0), t.title && (i.title = t.title);
                        var s = n(i),
                            r = this._normalizeItem(t);
                        return r.element = i, e.StoreData(i, "data", r), s
                    }, i.prototype.item = function(t) {
                        var i = {};
                        if (null != (i = e.GetData(t[0], "data"))) return i;
                        if (t.is("option")) i = {
                            id: t.val(),
                            text: t.text(),
                            disabled: t.prop("disabled"),
                            selected: t.prop("selected"),
                            title: t.prop("title")
                        };
                        else if (t.is("optgroup")) {
                            i = {
                                text: t.prop("label"),
                                children: [],
                                title: t.prop("title")
                            };
                            for (var s = t.children("option"), r = [], o = 0; o < s.length; o++) {
                                var a = n(s[o]),
                                    l = this.item(a);
                                r.push(l)
                            }
                            i.children = r
                        }
                        return (i = this._normalizeItem(i)).element = t[0], e.StoreData(t[0], "data", i), i
                    }, i.prototype._normalizeItem = function(t) {
                        t !== Object(t) && (t = {
                            id: t,
                            text: t
                        });
                        return null != (t = n.extend({}, {
                            text: ""
                        }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, {
                            selected: !1,
                            disabled: !1
                        }, t)
                    }, i.prototype.matches = function(t, e) {
                        return this.options.get("matcher")(t, e)
                    }, i
                }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        var n = e.get("data") || [];
                        i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
                    }
                    return e.Extend(i, t), i.prototype.select = function(t) {
                        var e = this.$element.find("option").filter(function(e, n) {
                            return n.value == t.id.toString()
                        });
                        0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t)
                    }, i.prototype.convertToOptions = function(t) {
                        function i(t) {
                            return function() {
                                return n(this).val() == t.id
                            }
                        }
                        for (var s = this, r = this.$element.find("option"), o = r.map(function() {
                                return s.item(n(this)).id
                            }).get(), a = [], l = 0; l < t.length; l++) {
                            var c = this._normalizeItem(t[l]);
                            if (n.inArray(c.id, o) >= 0) {
                                var u = r.filter(i(c)),
                                    h = this.item(u),
                                    d = n.extend(!0, {}, c, h),
                                    p = this.option(d);
                                u.replaceWith(p)
                            } else {
                                var f = this.option(c);
                                if (c.children) {
                                    var m = this.convertToOptions(c.children);
                                    e.appendMany(f, m)
                                }
                                a.push(f)
                            }
                        }
                        return a
                    }, i
                }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, n) {
                    function i(t, e) {
                        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e)
                    }
                    return e.Extend(i, t), i.prototype._applyDefaults = function(t) {
                        var e = {
                            data: function(t) {
                                return n.extend({}, t, {
                                    q: t.term
                                })
                            },
                            transport: function(t, e, i) {
                                var s = n.ajax(t);
                                return s.then(e), s.fail(i), s
                            }
                        };
                        return n.extend({}, e, t, !0)
                    }, i.prototype.processResults = function(t) {
                        return t
                    }, i.prototype.query = function(t, e) {
                        function i() {
                            var i = r.transport(r, function(i) {
                                var r = s.processResults(i, t);
                                s.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(r)
                            }, function() {
                                "status" in i && (0 === i.status || "0" === i.status) || s.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            s._request = i
                        }
                        var s = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var r = n.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof r.url && (r.url = r.url.call(this.$element, t)), "function" == typeof r.data && (r.data = r.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), e.define("select2/data/tags", ["jquery"], function(t) {
                    function e(e, n, i) {
                        var s = i.get("tags"),
                            r = i.get("createTag");
                        void 0 !== r && (this.createTag = r);
                        var o = i.get("insertTag");
                        if (void 0 !== o && (this.insertTag = o), e.call(this, n, i), t.isArray(s))
                            for (var a = 0; a < s.length; a++) {
                                var l = s[a],
                                    c = this._normalizeItem(l),
                                    u = this.option(c);
                                this.$element.append(u)
                            }
                    }
                    return e.prototype.query = function(t, e, n) {
                        var i = this;
                        this._removeOldTags(), null != e.term && null == e.page ? t.call(this, e, function t(s, r) {
                            for (var o = s.results, a = 0; a < o.length; a++) {
                                var l = o[a],
                                    c = null != l.children && !t({
                                        results: l.children
                                    }, !0);
                                if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || c) return !r && (s.data = o, void n(s))
                            }
                            if (r) return !0;
                            var u = i.createTag(e);
                            if (null != u) {
                                var h = i.option(u);
                                h.attr("data-select2-tag", !0), i.addOptions([h]), i.insertTag(o, u)
                            }
                            s.results = o, n(s)
                        }) : t.call(this, e, n)
                    }, e.prototype.createTag = function(e, n) {
                        var i = t.trim(n.term);
                        return "" === i ? null : {
                            id: i,
                            text: i
                        }
                    }, e.prototype.insertTag = function(t, e, n) {
                        e.unshift(n)
                    }, e.prototype._removeOldTags = function(e) {
                        this._lastTag, this.$element.find("option[data-select2-tag]").each(function() {
                            this.selected || t(this).remove()
                        })
                    }, e
                }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                    function e(t, e, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
                    }
                    return e.prototype.bind = function(t, e, n) {
                        t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                    }, e.prototype.query = function(e, n, i) {
                        var s = this;
                        n.term = n.term || "";
                        var r = this.tokenizer(n, this.options, function(e) {
                            var n, i = s._normalizeItem(e);
                            if (!s.$element.find("option").filter(function() {
                                    return t(this).val() === i.id
                                }).length) {
                                var r = s.option(i);
                                r.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([r])
                            }
                            n = i, s.trigger("select", {
                                data: n
                            })
                        });
                        r.term !== n.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), n.term = r.term), e.call(this, n, i)
                    }, e.prototype.tokenizer = function(e, n, i, s) {
                        for (var r = i.get("tokenSeparators") || [], o = n.term, a = 0, l = this.createTag || function(t) {
                                return {
                                    id: t.term,
                                    text: t.term
                                }
                            }; a < o.length;) {
                            var c = o[a];
                            if (-1 !== t.inArray(c, r)) {
                                var u = o.substr(0, a),
                                    h = l(t.extend({}, n, {
                                        term: u
                                    }));
                                null != h ? (s(h), o = o.substr(a + 1) || "", a = 0) : a++
                            } else a++
                        }
                        return {
                            term: o
                        }
                    }, e
                }), e.define("select2/data/minimumInputLength", [], function() {
                    function t(t, e, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : t.call(this, e, n)
                    }, t
                }), e.define("select2/data/maximumInputLength", [], function() {
                    function t(t, e, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : t.call(this, e, n)
                    }, t
                }), e.define("select2/data/maximumSelectionLength", [], function() {
                    function t(t, e, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
                    }
                    return t.prototype.query = function(t, e, n) {
                        var i = this;
                        this.current(function(s) {
                            var r = null != s ? s.length : 0;
                            i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength ? i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: i.maximumSelectionLength
                                }
                            }) : t.call(i, e, n)
                        })
                    }, t
                }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                    function n(t, e) {
                        this.$element = t, this.options = e, n.__super__.constructor.call(this)
                    }
                    return e.Extend(n, e.Observable), n.prototype.render = function() {
                        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                    }, n.prototype.bind = function() {}, n.prototype.position = function(t, e) {}, n.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, n
                }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t, e) {
                    function n() {}
                    return n.prototype.render = function(e) {
                        var n = e.call(this),
                            i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, n.prototype.bind = function(e, n, i) {
                        var s = this;
                        e.call(this, n, i), this.$search.on("keydown", function(t) {
                            s.trigger("keypress", t), s._keyUpPrevented = t.isDefaultPrevented()
                        }), this.$search.on("input", function(e) {
                            t(this).off("keyup")
                        }), this.$search.on("keyup input", function(t) {
                            s.handleSearch(t)
                        }), n.on("open", function() {
                            s.$search.attr("tabindex", 0), s.$search.focus(), window.setTimeout(function() {
                                s.$search.focus()
                            }, 0)
                        }), n.on("close", function() {
                            s.$search.attr("tabindex", -1), s.$search.val(""), s.$search.blur()
                        }), n.on("focus", function() {
                            n.isOpen() || s.$search.focus()
                        }), n.on("results:all", function(t) {
                            null != t.query.term && "" !== t.query.term || (s.showSearch(t) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide"))
                        })
                    }, n.prototype.handleSearch = function(t) {
                        if (!this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, n.prototype.showSearch = function(t, e) {
                        return !0
                    }, n
                }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                    function t(t, e, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
                    }
                    return t.prototype.append = function(t, e) {
                        e.results = this.removePlaceholder(e.results), t.call(this, e)
                    }, t.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, t.prototype.removePlaceholder = function(t, e) {
                        for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                            var s = e[i];
                            this.placeholder.id === s.id && n.splice(i, 1)
                        }
                        return n
                    }, t
                }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                    function e(t, e, n, i) {
                        this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return e.prototype.append = function(t, e) {
                        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                    }, e.prototype.bind = function(e, n, i) {
                        var s = this;
                        e.call(this, n, i), n.on("query", function(t) {
                            s.lastParams = t, s.loading = !0
                        }), n.on("query:append", function(t) {
                            s.lastParams = t, s.loading = !0
                        }), this.$results.on("scroll", function() {
                            var e = t.contains(document.documentElement, s.$loadingMore[0]);
                            !s.loading && e && s.$results.offset().top + s.$results.outerHeight(!1) + 50 >= s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) && s.loadMore()
                        })
                    }, e.prototype.loadMore = function() {
                        this.loading = !0;
                        var e = t.extend({}, {
                            page: 1
                        }, this.lastParams);
                        e.page++, this.trigger("query:append", e)
                    }, e.prototype.showLoadingMore = function(t, e) {
                        return e.pagination && e.pagination.more
                    }, e.prototype.createLoadingMore = function() {
                        var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return e.html(n(this.lastParams)), e
                    }, e
                }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                    function n(e, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i)
                    }
                    return n.prototype.bind = function(t, e, n) {
                        var i = this,
                            s = !1;
                        t.call(this, e, n), e.on("open", function() {
                            i._showDropdown(), i._attachPositioningHandler(e), s || (s = !0, e.on("results:all", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }), e.on("results:append", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), e.on("close", function() {
                            i._hideDropdown(), i._detachPositioningHandler(e)
                        }), this.$dropdownContainer.on("mousedown", function(t) {
                            t.stopPropagation()
                        })
                    }, n.prototype.destroy = function(t) {
                        t.call(this), this.$dropdownContainer.remove()
                    }, n.prototype.position = function(t, e, n) {
                        e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, n.prototype.render = function(e) {
                        var n = t("<span></span>"),
                            i = e.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function(t) {
                        this.$dropdownContainer.detach()
                    }, n.prototype._attachPositioningHandler = function(n, i) {
                        var s = this,
                            r = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id,
                            l = this.$container.parents().filter(e.hasScroll);
                        l.each(function() {
                            e.StoreData(this, "select2-scroll-position", {
                                x: t(this).scrollLeft(),
                                y: t(this).scrollTop()
                            })
                        }), l.on(r, function(n) {
                            var i = e.GetData(this, "select2-scroll-position");
                            t(this).scrollTop(i.y)
                        }), t(window).on(r + " " + o + " " + a, function(t) {
                            s._positionDropdown(), s._resizeDropdown()
                        })
                    }, n.prototype._detachPositioningHandler = function(n, i) {
                        var s = "scroll.select2." + i.id,
                            r = "resize.select2." + i.id,
                            o = "orientationchange.select2." + i.id;
                        this.$container.parents().filter(e.hasScroll).off(s), t(window).off(s + " " + r + " " + o)
                    }, n.prototype._positionDropdown = function() {
                        var e = t(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            s = null,
                            r = this.$container.offset();
                        r.bottom = r.top + this.$container.outerHeight(!1);
                        var o = {
                            height: this.$container.outerHeight(!1)
                        };
                        o.top = r.top, o.bottom = r.top + o.height;
                        var a = this.$dropdown.outerHeight(!1),
                            l = e.scrollTop(),
                            c = e.scrollTop() + e.height(),
                            u = l < r.top - a,
                            h = c > r.bottom + a,
                            d = {
                                left: r.left,
                                top: o.bottom
                            },
                            p = this.$dropdownParent;
                        "static" === p.css("position") && (p = p.offsetParent());
                        var f = p.offset();
                        d.top -= f.top, d.left -= f.left, n || i || (s = "below"), h || !u || n ? !u && h && n && (s = "below") : s = "above", ("above" == s || n && "below" !== s) && (d.top = o.top - f.top - a), null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)), this.$dropdownContainer.css(d)
                    }, n.prototype._resizeDropdown = function() {
                        var t = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                    }, n.prototype._showDropdown = function(t) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, n
                }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function t(t, e, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
                    }
                    return t.prototype.showSearch = function(t, e) {
                        return !(function t(e) {
                            for (var n = 0, i = 0; i < e.length; i++) {
                                var s = e[i];
                                s.children ? n += t(s.children) : n++
                            }
                            return n
                        }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
                    }, t
                }), e.define("select2/dropdown/selectOnClose", ["../utils"], function(t) {
                    function e() {}
                    return e.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), e.on("close", function(t) {
                            i._handleSelectOnClose(t)
                        })
                    }, e.prototype._handleSelectOnClose = function(e, n) {
                        if (n && null != n.originalSelect2Event) {
                            var i = n.originalSelect2Event;
                            if ("select" === i._type || "unselect" === i._type) return
                        }
                        var s = this.getHighlightedResults();
                        if (!(s.length < 1)) {
                            var r = t.GetData(s[0], "data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                data: r
                            })
                        }
                    }, e
                }), e.define("select2/dropdown/closeOnSelect", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, n) {
                        var i = this;
                        t.call(this, e, n), e.on("select", function(t) {
                            i._selectTriggered(t)
                        }), e.on("unselect", function(t) {
                            i._selectTriggered(t)
                        })
                    }, t.prototype._selectTriggered = function(t, e) {
                        var n = e.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {
                            originalEvent: n,
                            originalSelect2Event: e
                        })
                    }, t
                }), e.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(t) {
                            var e = t.input.length - t.maximum,
                                n = "Please delete " + e + " character";
                            return 1 != e && (n += "s"), n
                        },
                        inputTooShort: function(t) {
                            return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(t) {
                            var e = "You can only select " + t.maximum + " item";
                            return 1 != t.maximum && (e += "s"), e
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, n, i, s, r, o, a, l, c, u, h, d, p, f, m, g, v, y, b, _, w, x, D, k, C, S, T, E) {
                    function A() {
                        this.reset()
                    }
                    return A.prototype.apply = function(h) {
                        if (null == (h = t.extend(!0, {}, this.defaults, h)).dataAdapter) {
                            if (null != h.ajax ? h.dataAdapter = f : null != h.data ? h.dataAdapter = p : h.dataAdapter = d, h.minimumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, v)), h.maximumInputLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, y)), h.maximumSelectionLength > 0 && (h.dataAdapter = c.Decorate(h.dataAdapter, b)), h.tags && (h.dataAdapter = c.Decorate(h.dataAdapter, m)), null == h.tokenSeparators && null == h.tokenizer || (h.dataAdapter = c.Decorate(h.dataAdapter, g)), null != h.query) {
                                var E = e(h.amdBase + "compat/query");
                                h.dataAdapter = c.Decorate(h.dataAdapter, E)
                            }
                            if (null != h.initSelection) {
                                var A = e(h.amdBase + "compat/initSelection");
                                h.dataAdapter = c.Decorate(h.dataAdapter, A)
                            }
                        }
                        if (null == h.resultsAdapter && (h.resultsAdapter = n, null != h.ajax && (h.resultsAdapter = c.Decorate(h.resultsAdapter, D)), null != h.placeholder && (h.resultsAdapter = c.Decorate(h.resultsAdapter, x)), h.selectOnClose && (h.resultsAdapter = c.Decorate(h.resultsAdapter, S))), null == h.dropdownAdapter) {
                            if (h.multiple) h.dropdownAdapter = _;
                            else {
                                var M = c.Decorate(_, w);
                                h.dropdownAdapter = M
                            }
                            if (0 !== h.minimumResultsForSearch && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, C)), h.closeOnSelect && (h.dropdownAdapter = c.Decorate(h.dropdownAdapter, T)), null != h.dropdownCssClass || null != h.dropdownCss || null != h.adaptDropdownCssClass) {
                                var O = e(h.amdBase + "compat/dropdownCss");
                                h.dropdownAdapter = c.Decorate(h.dropdownAdapter, O)
                            }
                            h.dropdownAdapter = c.Decorate(h.dropdownAdapter, k)
                        }
                        if (null == h.selectionAdapter) {
                            if (h.multiple ? h.selectionAdapter = s : h.selectionAdapter = i, null != h.placeholder && (h.selectionAdapter = c.Decorate(h.selectionAdapter, r)), h.allowClear && (h.selectionAdapter = c.Decorate(h.selectionAdapter, o)), h.multiple && (h.selectionAdapter = c.Decorate(h.selectionAdapter, a)), null != h.containerCssClass || null != h.containerCss || null != h.adaptContainerCssClass) {
                                var I = e(h.amdBase + "compat/containerCss");
                                h.selectionAdapter = c.Decorate(h.selectionAdapter, I)
                            }
                            h.selectionAdapter = c.Decorate(h.selectionAdapter, l)
                        }
                        if ("string" == typeof h.language)
                            if (h.language.indexOf("-") > 0) {
                                var N = h.language.split("-")[0];
                                h.language = [h.language, N]
                            } else h.language = [h.language];
                        if (t.isArray(h.language)) {
                            var P = new u;
                            h.language.push("en");
                            for (var j = h.language, L = 0; L < j.length; L++) {
                                var Y = j[L],
                                    $ = {};
                                try {
                                    $ = u.loadPath(Y)
                                } catch (t) {
                                    try {
                                        Y = this.defaults.amdLanguageBase + Y, $ = u.loadPath(Y)
                                    } catch (t) {
                                        h.debug && window.console && console.warn && console.warn('Select2: The language file for "' + Y + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                P.extend($)
                            }
                            h.translations = P
                        } else {
                            var H = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                R = new u(h.language);
                            R.extend(H), h.translations = R
                        }
                        return h
                    }, A.prototype.reset = function() {
                        function e(t) {
                            return t.replace(/[^\u0000-\u007E]/g, function(t) {
                                return h[t] || t
                            })
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: c.escapeMarkup,
                            language: E,
                            matcher: function n(i, s) {
                                if ("" === t.trim(i.term)) return s;
                                if (s.children && s.children.length > 0) {
                                    for (var r = t.extend(!0, {}, s), o = s.children.length - 1; o >= 0; o--) null == n(i, s.children[o]) && r.children.splice(o, 1);
                                    return r.children.length > 0 ? r : n(i, r)
                                }
                                var a = e(s.text).toUpperCase(),
                                    l = e(i.term).toUpperCase();
                                return a.indexOf(l) > -1 ? s : null
                            },
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(t) {
                                return t
                            },
                            templateResult: function(t) {
                                return t.text
                            },
                            templateSelection: function(t) {
                                return t.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, A.prototype.set = function(e, n) {
                        var i = {};
                        i[t.camelCase(e)] = n;
                        var s = c._convertData(i);
                        t.extend(!0, this.defaults, s)
                    }, new A
                }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, n, i) {
                    function s(e, s) {
                        if (this.options = e, null != s && this.fromElement(s), this.options = n.apply(this.options), s && s.is("input")) {
                            var r = t(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                        }
                    }
                    return s.prototype.fromElement = function(t) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), i.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")), i.StoreData(t[0], "tags", !0)), i.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")), i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl")));
                        var s;
                        s = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, i.GetData(t[0])) : i.GetData(t[0]);
                        var r = e.extend(!0, {}, s);
                        for (var o in r = i._convertData(r)) e.inArray(o, n) > -1 || (e.isPlainObject(this.options[o]) ? e.extend(this.options[o], r[o]) : this.options[o] = r[o]);
                        return this
                    }, s.prototype.get = function(t) {
                        return this.options[t]
                    }, s.prototype.set = function(t, e) {
                        this.options[t] = e
                    }, s
                }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, n, i) {
                    var s = function(t, i) {
                        null != n.GetData(t[0], "select2") && n.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), s.__super__.constructor.call(this);
                        var r = t.attr("tabindex") || 0;
                        n.StoreData(t[0], "old-tabindex", r), t.attr("tabindex", "-1");
                        var o = this.options.get("dataAdapter");
                        this.dataAdapter = new o(t, this.options);
                        var a = this.render();
                        this._placeContainer(a);
                        var l = this.options.get("selectionAdapter");
                        this.selection = new l(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                        var c = this.options.get("dropdownAdapter");
                        this.dropdown = new c(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                        var u = this.options.get("resultsAdapter");
                        this.results = new u(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var h = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                            h.trigger("selection:update", {
                                data: t
                            })
                        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(t[0], "select2", this), t.data("select2", this)
                    };
                    return n.Extend(s, n.Observable), s.prototype._generateId = function(t) {
                        return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                    }, s.prototype._placeContainer = function(t) {
                        t.insertAfter(this.$element);
                        var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e)
                    }, s.prototype._resolveWidth = function(t, e) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == e) {
                            var i = this._resolveWidth(t, "style");
                            return null != i ? i : this._resolveWidth(t, "element")
                        }
                        if ("element" == e) {
                            var s = t.outerWidth(!1);
                            return s <= 0 ? "auto" : s + "px"
                        }
                        if ("style" == e) {
                            var r = t.attr("style");
                            if ("string" != typeof r) return null;
                            for (var o = r.split(";"), a = 0, l = o.length; a < l; a += 1) {
                                var c = o[a].replace(/\s/g, "").match(n);
                                if (null !== c && c.length >= 1) return c[1]
                            }
                            return null
                        }
                        return e
                    }, s.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, s.prototype._registerDomEvents = function() {
                        var e = this;
                        this.$element.on("change.select2", function() {
                            e.dataAdapter.current(function(t) {
                                e.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }), this.$element.on("focus.select2", function(t) {
                            e.trigger("focus", t)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function(n) {
                            t.each(n, e._syncA), t.each(n, e._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                    }, s.prototype._registerDataEvents = function() {
                        var t = this;
                        this.dataAdapter.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, s.prototype._registerSelectionEvents = function() {
                        var e = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            e.toggleDropdown()
                        }), this.selection.on("focus", function(t) {
                            e.focus(t)
                        }), this.selection.on("*", function(i, s) {
                            -1 === t.inArray(i, n) && e.trigger(i, s)
                        })
                    }, s.prototype._registerDropdownEvents = function() {
                        var t = this;
                        this.dropdown.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, s.prototype._registerResultsEvents = function() {
                        var t = this;
                        this.results.on("*", function(e, n) {
                            t.trigger(e, n)
                        })
                    }, s.prototype._registerEvents = function() {
                        var t = this;
                        this.on("open", function() {
                            t.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            t.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            t.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            t.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            t.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(e) {
                            t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(n) {
                                t.trigger("results:all", {
                                    data: n,
                                    query: e
                                })
                            })
                        }), this.on("query:append", function(e) {
                            this.dataAdapter.query(e, function(n) {
                                t.trigger("results:append", {
                                    data: n,
                                    query: e
                                })
                            })
                        }), this.on("keypress", function(e) {
                            var n = e.which;
                            t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault())
                        })
                    }, s.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, s.prototype._syncSubtree = function(t, e) {
                        var n = !1,
                            i = this;
                        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                            if (e)
                                if (e.addedNodes && e.addedNodes.length > 0)
                                    for (var s = 0; s < e.addedNodes.length; s++) {
                                        e.addedNodes[s].selected && (n = !0)
                                    } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function(t) {
                                i.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }
                    }, s.prototype.trigger = function(t, e) {
                        var n = s.__super__.trigger,
                            i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting",
                                clear: "clearing"
                            };
                        if (void 0 === e && (e = {}), t in i) {
                            var r = i[t],
                                o = {
                                    prevented: !1,
                                    name: t,
                                    args: e
                                };
                            if (n.call(this, r, o), o.prevented) return void(e.prevented = !0)
                        }
                        n.call(this, t, e)
                    }, s.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, s.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, s.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, s.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, s.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, s.prototype.focus = function(t) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, s.prototype.enable = function(t) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
                        var e = !t[0];
                        this.$element.prop("disabled", e)
                    }, s.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var t = [];
                        return this.dataAdapter.current(function(e) {
                            t = e
                        }), t
                    }, s.prototype.val = function(e) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                        var n = e[0];
                        t.isArray(n) && (n = t.map(n, function(t) {
                            return t.toString()
                        })), this.$element.val(n).trigger("change")
                    }, s.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, s.prototype.render = function() {
                        var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(e[0], "element", this.$element), e
                    }, s
                }), e.define("jquery-mousewheel", ["jquery"], function(t) {
                    return t
                }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(t, e, n, i, s) {
                    if (null == t.fn.select2) {
                        var r = ["open", "close", "destroy"];
                        t.fn.select2 = function(e) {
                            if ("object" == typeof(e = e || {})) return this.each(function() {
                                var i = t.extend(!0, {}, e);
                                new n(t(this), i)
                            }), this;
                            if ("string" == typeof e) {
                                var i, o = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var t = s.GetData(this, "select2");
                                    null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = t[e].apply(t, o)
                                }), t.inArray(e, r) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + e)
                        }
                    }
                    return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
                }), {
                    define: e.define,
                    require: e.require
                }
            }(),
            n = e.require("jquery.select2");
        return t.fn.select2.amd = e, n
    });
var $jscomp = {
    scope: {},
    findInternal: function(t, e, n) {
        t instanceof String && (t = String(t));
        for (var i = t.length, s = 0; s < i; s++) {
            var r = t[s];
            if (e.call(n, r, s, t)) return {
                i: s,
                v: r
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
        if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
        t != Array.prototype && t != Object.prototype && (t[e] = n.value)
    }, $jscomp.getGlobal = function(t) {
        return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(t, e, n, i) {
        if (e) {
            for (n = $jscomp.global, t = t.split("."), i = 0; i < t.length - 1; i++) {
                var s = t[i];
                s in n || (n[s] = {}), n = n[s]
            }(e = e(i = n[t = t[t.length - 1]])) != i && null != e && $jscomp.defineProperty(n, t, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    }, $jscomp.polyfill("Array.prototype.find", function(t) {
        return t || function(t, e) {
            return $jscomp.findInternal(this, t, e).v
        }
    }, "es6-impl", "es3"),
    function(t, e, n) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e || n)
    }(function(t) {
        var e = function(e, n, i) {
            var s = {
                invalid: [],
                getCaret: function() {
                    try {
                        var t, n = 0,
                            i = e.get(0),
                            r = document.selection,
                            o = i.selectionStart;
                        return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = r.createRange()).moveStart("character", -s.val().length), n = t.text.length) : (o || "0" === o) && (n = o), n
                    } catch (t) {}
                },
                setCaret: function(t) {
                    try {
                        if (e.is(":focus")) {
                            var n, i = e.get(0);
                            i.setSelectionRange ? i.setSelectionRange(t, t) : ((n = i.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select())
                        }
                    } catch (t) {}
                },
                events: function() {
                    e.on("keydown.mask", function(t) {
                        e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val()), e.data("mask-previus-caret-pos", s.getCaret()), s.maskDigitPosMapOld = s.maskDigitPosMap
                    }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", s.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            e.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        e.data("changed", !0)
                    }).on("blur.mask", function() {
                        a === s.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
                    }).on("blur.mask", function() {
                        a = s.val()
                    }).on("focus.mask", function(e) {
                        !0 === i.selectOnFocus && t(e.target).select()
                    }).on("focusout.mask", function() {
                        i.clearIfNotMatch && !r.test(s.val()) && s.val("")
                    })
                },
                getRegexMask: function() {
                    for (var t, e, i, s, r = [], a = 0; a < n.length; a++)(t = o.translation[n.charAt(a)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = t.optional, (t = t.recursive) ? (r.push(n.charAt(a)), s = {
                        digit: n.charAt(a),
                        pattern: e
                    }) : r.push(i || t ? e + "?" : e)) : r.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return r = r.join(""), s && (r = r.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(r)
                },
                destroyEvents: function() {
                    e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                },
                val: function(t) {
                    var n = e.is("input") ? "val" : "text";
                    return 0 < arguments.length ? (e[n]() !== t && e[n](t), n = e) : n = e[n](), n
                },
                calculateCaretPosition: function() {
                    var t = e.data("mask-previus-value") || "",
                        n = s.getMasked(),
                        i = s.getCaret();
                    if (t !== n) {
                        var r, o = e.data("mask-previus-caret-pos") || 0,
                            a = (n = n.length, t.length),
                            l = t = 0,
                            c = 0,
                            u = 0;
                        for (r = i; r < n && s.maskDigitPosMap[r]; r++) l++;
                        for (r = i - 1; 0 <= r && s.maskDigitPosMap[r]; r--) t++;
                        for (r = i - 1; 0 <= r; r--) s.maskDigitPosMap[r] && c++;
                        for (r = o - 1; 0 <= r; r--) s.maskDigitPosMapOld[r] && u++;
                        i > a ? i = 10 * n : o >= i && o !== a ? s.maskDigitPosMapOld[i] || (o = i, i = i - (u - c) - t, s.maskDigitPosMap[i] && (i = o)) : i > o && (i = i + (c - u) + l)
                    }
                    return i
                },
                behaviour: function(n) {
                    n = n || window.event, s.invalid = [];
                    var i = e.data("mask-keycode");
                    if (-1 === t.inArray(i, o.byPassKeys)) {
                        i = s.getMasked();
                        var r = s.getCaret();
                        return setTimeout(function() {
                            s.setCaret(s.calculateCaretPosition())
                        }, t.jMaskGlobals.keyStrokeCompensation), s.val(i), s.setCaret(r), s.callbacks(n)
                    }
                },
                getMasked: function(t, e) {
                    var r, a, l, c = [],
                        u = void 0 === e ? s.val() : e + "",
                        h = 0,
                        d = n.length,
                        p = 0,
                        f = u.length,
                        m = 1,
                        g = "push",
                        v = -1,
                        y = 0,
                        b = [];
                    for (i.reverse ? (g = "unshift", m = -1, r = 0, h = d - 1, p = f - 1, a = function() {
                            return -1 < h && -1 < p
                        }) : (r = d - 1, a = function() {
                            return h < d && p < f
                        }); a();) {
                        var _ = n.charAt(h),
                            w = u.charAt(p),
                            x = o.translation[_];
                        x ? (w.match(x.pattern) ? (c[g](w), x.recursive && (-1 === v ? v = h : h === r && h !== v && (h = v - m), r === v && (h -= m)), h += m) : w === l ? (y--, l = void 0) : x.optional ? (h += m, p -= m) : x.fallback ? (c[g](x.fallback), h += m, p -= m) : s.invalid.push({
                            p: p,
                            v: w,
                            e: x.pattern
                        }), p += m) : (t || c[g](_), w === _ ? (b.push(p), p += m) : (l = _, b.push(p + y), y++), h += m)
                    }
                    return u = n.charAt(r), d !== f + 1 || o.translation[u] || c.push(u), c = c.join(""), s.mapMaskdigitPositions(c, b, f), c
                },
                mapMaskdigitPositions: function(t, e, n) {
                    for (t = i.reverse ? t.length - n : 0, s.maskDigitPosMap = {}, n = 0; n < e.length; n++) s.maskDigitPosMap[e[n] + t] = 1
                },
                callbacks: function(t) {
                    var r = s.val(),
                        o = r !== a,
                        l = [r, t, e, i],
                        c = function(t, e, n) {
                            "function" == typeof i[t] && e && i[t].apply(this, n)
                        };
                    c("onChange", !0 === o, l), c("onKeyPress", !0 === o, l), c("onComplete", r.length === n.length, l), c("onInvalid", 0 < s.invalid.length, [r, t, e, s.invalid, i])
                }
            };
            e = t(e);
            var r, o = this,
                a = s.val();
            n = "function" == typeof n ? n(s.val(), void 0, e, i) : n, o.mask = n, o.options = i, o.remove = function() {
                var t = s.getCaret();
                return o.options.placeholder && e.removeAttr("placeholder"), e.data("mask-maxlength") && e.removeAttr("maxlength"), s.destroyEvents(), s.val(o.getCleanVal()), s.setCaret(t), e
            }, o.getCleanVal = function() {
                return s.getMasked(!0)
            }, o.getMaskedVal = function(t) {
                return s.getMasked(!1, t)
            }, o.init = function(a) {
                if (a = a || !1, i = i || {}, o.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, o.byPassKeys = t.jMaskGlobals.byPassKeys, o.translation = t.extend({}, t.jMaskGlobals.translation, i.translation), o = t.extend(!0, {}, o, i), r = s.getRegexMask(), a) s.events(), s.val(s.getMasked());
                else {
                    i.placeholder && e.attr("placeholder", i.placeholder), e.data("mask") && e.attr("autocomplete", "off"), a = 0;
                    for (var l = !0; a < n.length; a++) {
                        var c = o.translation[n.charAt(a)];
                        if (c && c.recursive) {
                            l = !1;
                            break
                        }
                    }
                    l && e.attr("maxlength", n.length).data("mask-maxlength", !0), s.destroyEvents(), s.events(), a = s.getCaret(), s.val(s.getMasked()), s.setCaret(a)
                }
            }, o.init(!e.is("input"))
        };
        t.maskWatchers = {};
        var n = function() {
                var n = t(this),
                    s = {},
                    r = n.attr("data-mask");
                if (n.attr("data-mask-reverse") && (s.reverse = !0), n.attr("data-mask-clearifnotmatch") && (s.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (s.selectOnFocus = !0), i(n, r, s)) return n.data("mask", new e(this, r, s))
            },
            i = function(e, n, i) {
                i = i || {};
                var s = t(e).data("mask"),
                    r = JSON.stringify;
                e = t(e).val() || t(e).text();
                try {
                    return "function" == typeof n && (n = n(e)), "object" != typeof s || r(s.options) !== r(i) || s.mask !== n
                } catch (t) {}
            },
            s = function(t) {
                var e, n = document.createElement("div");
                return (e = (t = "on" + t) in n) || (n.setAttribute(t, "return;"), e = "function" == typeof n[t]), e
            };
        t.fn.mask = function(n, s) {
            s = s || {};
            var r = this.selector,
                o = (a = t.jMaskGlobals).watchInterval,
                a = s.watchInputs || a.watchInputs,
                l = function() {
                    if (i(this, n, s)) return t(this).data("mask", new e(this, n, s))
                };
            return t(this).each(l), r && "" !== r && a && (clearInterval(t.maskWatchers[r]), t.maskWatchers[r] = setInterval(function() {
                t(document).find(r).each(l)
            }, o)), this
        }, t.fn.masked = function(t) {
            return this.data("mask").getMaskedVal(t)
        }, t.fn.unmask = function() {
            return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
                var e = t(this).data("mask");
                e && e.remove().removeData("mask")
            })
        }, t.fn.cleanVal = function() {
            return this.data("mask").getCleanVal()
        }, t.applyDataMask = function(e) {
            ((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(n)
        }, s = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            keyStrokeCompensation: 10,
            useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && s("input"),
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        }, t.jMaskGlobals = t.jMaskGlobals || {}, (s = t.jMaskGlobals = t.extend(!0, {}, s, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function() {
            t.jMaskGlobals.watchDataMask && t.applyDataMask()
        }, s.watchInterval)
    }, window.jQuery, window.Zepto),
    function(t) {
        t.fn.bootstrapWizard = function(e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return 1 === n.length && n.toString(), this.data("bootstrapWizard")[e](n)
            }
            return this.each(function(n) {
                if (!(n = t(this)).data("bootstrapWizard")) {
                    var i = new function(e, n) {
                        e = t(e);
                        var i = this,
                            s = [],
                            r = t.extend({}, t.fn.bootstrapWizard.defaults, n),
                            o = null,
                            a = null;
                        this.rebindClick = function(t, e) {
                            t.unbind("click", e).bind("click", e)
                        }, this.fixNavigationButtons = function() {
                            if (o.length || (a.find("a:first").tab("show"), o = a.find('li:has([data-toggle="tab"]):first')), t(r.previousSelector, e).toggleClass("disabled", i.firstIndex() >= i.currentIndex()), t(r.nextSelector, e).toggleClass("disabled", i.currentIndex() >= i.navigationLength()), t(r.backSelector, e).toggleClass("disabled", 0 == s.length), i.rebindClick(t(r.nextSelector, e), i.next), i.rebindClick(t(r.previousSelector, e), i.previous), i.rebindClick(t(r.lastSelector, e), i.last), i.rebindClick(t(r.firstSelector, e), i.first), i.rebindClick(t(r.backSelector, e), i.back), r.onTabShow && "function" == typeof r.onTabShow && !1 === r.onTabShow(o, a, i.currentIndex())) return !1
                        }, this.next = function(t) {
                            if (e.hasClass("last") || r.onNext && "function" == typeof r.onNext && !1 === r.onNext(o, a, i.nextIndex())) return !1;
                            t = i.currentIndex(), $index = i.nextIndex(), $index > i.navigationLength() || (s.push(t), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                        }, this.previous = function(t) {
                            if (e.hasClass("first") || r.onPrevious && "function" == typeof r.onPrevious && !1 === r.onPrevious(o, a, i.previousIndex())) return !1;
                            t = i.currentIndex(), $index = i.previousIndex(), 0 > $index || (s.push(t), a.find('li:has([data-toggle="tab"]):eq(' + $index + ") a").tab("show"))
                        }, this.first = function(t) {
                            if (r.onFirst && "function" == typeof r.onFirst && !1 === r.onFirst(o, a, i.firstIndex()) || e.hasClass("disabled")) return !1;
                            s.push(i.currentIndex()), a.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")
                        }, this.last = function(t) {
                            if (r.onLast && "function" == typeof r.onLast && !1 === r.onLast(o, a, i.lastIndex()) || e.hasClass("disabled")) return !1;
                            s.push(i.currentIndex()), a.find('li:has([data-toggle="tab"]):eq(' + i.navigationLength() + ") a").tab("show")
                        }, this.back = function() {
                            if (0 == s.length) return null;
                            var t = s.pop();
                            if (r.onBack && "function" == typeof r.onBack && !1 === r.onBack(o, a, t)) return s.push(t), !1;
                            e.find('li:has([data-toggle="tab"]):eq(' + t + ") a").tab("show")
                        }, this.currentIndex = function() {
                            return a.find('li:has([data-toggle="tab"])').index(o)
                        }, this.firstIndex = function() {
                            return 0
                        }, this.lastIndex = function() {
                            return i.navigationLength()
                        }, this.getIndex = function(t) {
                            return a.find('li:has([data-toggle="tab"])').index(t)
                        }, this.nextIndex = function() {
                            return a.find('li:has([data-toggle="tab"])').index(o) + 1
                        }, this.previousIndex = function() {
                            return a.find('li:has([data-toggle="tab"])').index(o) - 1
                        }, this.navigationLength = function() {
                            return a.find('li:has([data-toggle="tab"])').length - 1
                        }, this.activeTab = function() {
                            return o
                        }, this.nextTab = function() {
                            return a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")").length ? a.find('li:has([data-toggle="tab"]):eq(' + (i.currentIndex() + 1) + ")") : null
                        }, this.previousTab = function() {
                            return 0 >= i.currentIndex() ? null : a.find('li:has([data-toggle="tab"]):eq(' + parseInt(i.currentIndex() - 1) + ")")
                        }, this.show = function(t) {
                            0 < (t = isNaN(t) ? e.find('li:has([data-toggle="tab"]) a[href=#' + t + "]") : e.find('li:has([data-toggle="tab"]):eq(' + t + ") a")).length && (s.push(i.currentIndex()), t.tab("show"))
                        }, this.disable = function(t) {
                            a.find('li:has([data-toggle="tab"]):eq(' + t + ")").addClass("disabled")
                        }, this.enable = function(t) {
                            a.find('li:has([data-toggle="tab"]):eq(' + t + ")").removeClass("disabled")
                        }, this.hide = function(t) {
                            a.find('li:has([data-toggle="tab"]):eq(' + t + ")").hide()
                        }, this.display = function(t) {
                            a.find('li:has([data-toggle="tab"]):eq(' + t + ")").show()
                        }, this.remove = function(e) {
                            var n = void 0 !== e[1] && e[1];
                            e = a.find('li:has([data-toggle="tab"]):eq(' + e[0] + ")"), n && (n = e.find("a").attr("href"), t(n).remove()), e.remove()
                        };
                        var l = function(e) {
                                var n = a.find('li:has([data-toggle="tab"])');
                                if (e = n.index(t(e.currentTarget).parent('li:has([data-toggle="tab"])')), n = t(n[e]), r.onTabClick && "function" == typeof r.onTabClick && !1 === r.onTabClick(o, a, i.currentIndex(), e, n)) return !1
                            },
                            c = function(e) {
                                if ($element = t(e.target).parent(), e = a.find('li:has([data-toggle="tab"])').index($element), $element.hasClass("disabled") || r.onTabChange && "function" == typeof r.onTabChange && !1 === r.onTabChange(o, a, i.currentIndex(), e)) return !1;
                                o = $element, i.fixNavigationButtons()
                            };
                        this.resetWizard = function() {
                            t('a[data-toggle="tab"]', a).off("click", l), t('a[data-toggle="tab"]', a).off("shown shown.bs.tab", c), a = e.find("ul:first", e), o = a.find('li:has([data-toggle="tab"]).active', e), t('a[data-toggle="tab"]', a).on("click", l), t('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c), i.fixNavigationButtons()
                        }, a = e.find("ul:first", e), o = a.find('li:has([data-toggle="tab"]).active', e), a.hasClass(r.tabClass) || a.addClass(r.tabClass), r.onInit && "function" == typeof r.onInit && r.onInit(o, a, 0), r.onShow && "function" == typeof r.onShow && r.onShow(o, a, i.nextIndex()), t('a[data-toggle="tab"]', a).on("click", l), t('a[data-toggle="tab"]', a).on("shown shown.bs.tab", c)
                    }(n, e);
                    n.data("bootstrapWizard", i), i.fixNavigationButtons()
                }
            })
        }, t.fn.bootstrapWizard.defaults = {
            tabClass: "nav nav-pills",
            nextSelector: ".wizard li.next",
            previousSelector: ".wizard li.previous",
            firstSelector: ".wizard li.first",
            lastSelector: ".wizard li.last",
            backSelector: ".wizard li.back",
            onShow: null,
            onInit: null,
            onNext: null,
            onPrevious: null,
            onLast: null,
            onFirst: null,
            onBack: null,
            onTabChange: null,
            onTabClick: null,
            onTabShow: null
        }
    }(jQuery),
    function(t, e, n) {
        "use strict";
        var i = function(e, n) {
            this.widget = "", this.$element = t(e), this.defaultTime = n.defaultTime, this.disableFocus = n.disableFocus, this.disableMousewheel = n.disableMousewheel, this.isOpen = n.isOpen, this.minuteStep = n.minuteStep, this.modalBackdrop = n.modalBackdrop, this.orientation = n.orientation, this.secondStep = n.secondStep, this.snapToStep = n.snapToStep, this.showInputs = n.showInputs, this.showMeridian = n.showMeridian, this.showSeconds = n.showSeconds, this.template = n.template, this.appendWidgetTo = n.appendWidgetTo, this.showWidgetOnAddonClick = n.showWidgetOnAddonClick, this.icons = n.icons, this.maxHours = n.maxHours, this.explicitMode = n.explicitMode, this.handleDocumentClick = function(t) {
                var e = t.data.scope;
                e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget()
            }, this._init()
        };
        i.prototype = {
            constructor: i,
            _init: function() {
                var e = this;
                this.showWidgetOnAddonClick && this.$element.parent().hasClass("input-group") && this.$element.parent().hasClass("bootstrap-timepicker") ? (this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({
                    "click.timepicker": t.proxy(this.showWidget, this)
                }), this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                })) : this.template ? this.$element.on({
                    "focus.timepicker": t.proxy(this.showWidget, this),
                    "click.timepicker": t.proxy(this.showWidget, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }) : this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }), !1 !== this.template ? this.$widget = t(this.getTemplate()).on("click", t.proxy(this.widgetClick, this)) : this.$widget = !1, this.showInputs && !1 !== this.$widget && this.$widget.find("input").each(function() {
                    t(this).on({
                        "click.timepicker": function() {
                            t(this).select()
                        },
                        "keydown.timepicker": t.proxy(e.widgetKeydown, e),
                        "keyup.timepicker": t.proxy(e.widgetKeyup, e)
                    })
                }), this.setDefaultTime(this.defaultTime)
            },
            blurElement: function() {
                this.highlightedUnit = null, this.updateFromElementVal()
            },
            clear: function() {
                this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
            },
            decrementHour: function() {
                if (this.showMeridian)
                    if (1 === this.hour) this.hour = 12;
                    else {
                        if (12 === this.hour) return this.hour--, this.toggleMeridian();
                        if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                        this.hour--
                    }
                else this.hour <= 0 ? this.hour = this.maxHours - 1 : this.hour--
            },
            decrementMinute: function(t) {
                var e;
                0 > (e = t ? this.minute - t : this.minute - this.minuteStep) ? (this.decrementHour(), this.minute = e + 60) : this.minute = e
            },
            decrementSecond: function() {
                var t = this.second - this.secondStep;
                0 > t ? (this.decrementMinute(!0), this.second = t + 60) : this.second = t
            },
            elementKeydown: function(t) {
                switch (t.which) {
                    case 9:
                        if (t.shiftKey) {
                            if ("hour" === this.highlightedUnit) {
                                this.hideWidget();
                                break
                            }
                            this.highlightPrevUnit()
                        } else {
                            if (this.showMeridian && "meridian" === this.highlightedUnit || this.showSeconds && "second" === this.highlightedUnit || !this.showMeridian && !this.showSeconds && "minute" === this.highlightedUnit) {
                                this.hideWidget();
                                break
                            }
                            this.highlightNextUnit()
                        }
                        t.preventDefault(), this.updateFromElementVal();
                        break;
                    case 27:
                        this.updateFromElementVal();
                        break;
                    case 37:
                        t.preventDefault(), this.highlightPrevUnit(), this.updateFromElementVal();
                        break;
                    case 38:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.incrementHour(), this.highlightHour();
                                break;
                            case "minute":
                                this.incrementMinute(), this.highlightMinute();
                                break;
                            case "second":
                                this.incrementSecond(), this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(), this.highlightMeridian()
                        }
                        this.update();
                        break;
                    case 39:
                        t.preventDefault(), this.highlightNextUnit(), this.updateFromElementVal();
                        break;
                    case 40:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.decrementHour(), this.highlightHour();
                                break;
                            case "minute":
                                this.decrementMinute(), this.highlightMinute();
                                break;
                            case "second":
                                this.decrementSecond(), this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(), this.highlightMeridian()
                        }
                        this.update()
                }
            },
            getCursorPosition: function() {
                var t = this.$element.get(0);
                if ("selectionStart" in t) return t.selectionStart;
                if (n.selection) {
                    t.focus();
                    var e = n.selection.createRange(),
                        i = n.selection.createRange().text.length;
                    return e.moveStart("character", -t.value.length), e.text.length - i
                }
            },
            getTemplate: function() {
                var t, e, n, i, s, r;
                switch (this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', s = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', n = '<span class="bootstrap-timepicker-minute"></span>', i = '<span class="bootstrap-timepicker-second"></span>', s = '<span class="bootstrap-timepicker-meridian"></span>'), r = '<table><tr><td><a href="#" data-action="incrementHour"><span class="' + this.icons.up + '"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="' + this.icons.up + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="' + this.icons.up + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="' + this.icons.up + '"></span></a></td>' : "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + n + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + i + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + s + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><span class="' + this.icons.down + '"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="' + this.icons.down + '"></span></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="' + this.icons.down + '"></span></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="' + this.icons.down + '"></span></a></td>' : "") + "</tr></table>", this.template) {
                    case "modal":
                        t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">' + r + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                        break;
                    case "dropdown":
                        t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + r + "</div>"
                }
                return t
            },
            getTime: function() {
                return "" === this.hour ? "" : this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "")
            },
            hideWidget: function() {
                !1 !== this.isOpen && (this.$element.trigger({
                    type: "hide.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), t(n).off("mousedown.timepicker, touchend.timepicker", this.handleDocumentClick), this.isOpen = !1, this.$widget.detach())
            },
            highlightUnit: function() {
                this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
            },
            highlightNextUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.highlightMinute();
                        break;
                    case "minute":
                        this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "second":
                        this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "meridian":
                        this.highlightHour()
                }
            },
            highlightPrevUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                        break;
                    case "minute":
                        this.highlightHour();
                        break;
                    case "second":
                        this.highlightMinute();
                        break;
                    case "meridian":
                        this.showSeconds ? this.highlightSecond() : this.highlightMinute()
                }
            },
            highlightHour: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2)
                }, 0)
            },
            highlightMinute: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5)
                }, 0)
            },
            highlightSecond: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                }, 0)
            },
            highlightMeridian: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11)
                }, 0) : setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                }, 0))
            },
            incrementHour: function() {
                if (this.showMeridian) {
                    if (11 === this.hour) return this.hour++, this.toggleMeridian();
                    12 === this.hour && (this.hour = 0)
                }
                return this.hour === this.maxHours - 1 ? void(this.hour = 0) : void this.hour++
            },
            incrementMinute: function(t) {
                var e;
                (e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep) > 59 ? (this.incrementHour(), this.minute = e - 60) : this.minute = e
            },
            incrementSecond: function() {
                var t = this.second + this.secondStep - this.second % this.secondStep;
                t > 59 ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t
            },
            mousewheel: function(e) {
                if (!this.disableMousewheel) {
                    e.preventDefault(), e.stopPropagation();
                    var n = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                        i = null;
                    switch ("mousewheel" === e.type ? i = -1 * e.originalEvent.wheelDelta : "DOMMouseScroll" === e.type && (i = 40 * e.originalEvent.detail), i && (e.preventDefault(), t(this).scrollTop(i + t(this).scrollTop())), this.highlightedUnit) {
                        case "minute":
                            n > 0 ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                            break;
                        case "second":
                            n > 0 ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian(), this.highlightMeridian();
                            break;
                        default:
                            n > 0 ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                    }
                    return !1
                }
            },
            changeToNearestStep: function(t, e) {
                return t % e == 0 ? t : Math.round(t % e / e) ? (t + (e - t % e)) % 60 : t - t % e
            },
            place: function() {
                if (!this.isInline) {
                    var n = this.$widget.outerWidth(),
                        i = this.$widget.outerHeight(),
                        s = t(e).width(),
                        r = t(e).height(),
                        o = t(e).scrollTop(),
                        a = parseInt(this.$element.parents().filter(function() {
                            return "auto" !== t(this).css("z-index")
                        }).first().css("z-index"), 10) + 10,
                        l = this.component ? this.component.parent().offset() : this.$element.offset(),
                        c = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
                        u = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1),
                        h = l.left,
                        d = l.top;
                    this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"), "auto" !== this.orientation.x ? (this.$widget.addClass("timepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (h -= n - u)) : (this.$widget.addClass("timepicker-orient-left"), l.left < 0 ? h -= l.left - 10 : l.left + n > s && (h = s - n - 10));
                    var p, f, m = this.orientation.y;
                    "auto" === m && (p = -o + l.top - i, f = o + r - (l.top + c + i), m = Math.max(p, f) === f ? "top" : "bottom"), this.$widget.addClass("timepicker-orient-" + m), "top" === m ? d += c : d -= i + parseInt(this.$widget.css("padding-top"), 10), this.$widget.css({
                        top: d,
                        left: h,
                        zIndex: a
                    })
                }
            },
            remove: function() {
                t("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
            },
            setDefaultTime: function(t) {
                if (this.$element.val()) this.updateFromElementVal();
                else if ("current" === t) {
                    var e = new Date,
                        n = e.getHours(),
                        i = e.getMinutes(),
                        s = e.getSeconds(),
                        r = "AM";
                    0 !== s && (60 === (s = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && (i += 1, s = 0)), 0 !== i && (60 === (i = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && (n += 1, i = 0)), this.showMeridian && (0 === n ? n = 12 : n >= 12 ? (n > 12 && (n -= 12), r = "PM") : r = "AM"), this.hour = n, this.minute = i, this.second = s, this.meridian = r, this.update()
                } else !1 === t ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
            },
            setTime: function(t, e) {
                if (t) {
                    var n, i, s, r, o, a;
                    if ("object" == typeof t && t.getMonth) s = t.getHours(), r = t.getMinutes(), o = t.getSeconds(), this.showMeridian && (a = "AM", s > 12 && (a = "PM", s %= 12), 12 === s && (a = "PM"));
                    else {
                        if ((n = (/a/i.test(t) ? 1 : 0) + (/p/i.test(t) ? 2 : 0)) > 2) return void this.clear();
                        if (s = (i = t.replace(/[^0-9\:]/g, "").split(":"))[0] ? i[0].toString() : i.toString(), this.explicitMode && s.length > 2 && s.length % 2 != 0) return void this.clear();
                        r = i[1] ? i[1].toString() : "", o = i[2] ? i[2].toString() : "", s.length > 4 && (o = s.slice(-2), s = s.slice(0, -2)), s.length > 2 && (r = s.slice(-2), s = s.slice(0, -2)), r.length > 2 && (o = r.slice(-2), r = r.slice(0, -2)), s = parseInt(s, 10), r = parseInt(r, 10), o = parseInt(o, 10), isNaN(s) && (s = 0), isNaN(r) && (r = 0), isNaN(o) && (o = 0), o > 59 && (o = 59), r > 59 && (r = 59), s >= this.maxHours && (s = this.maxHours - 1), this.showMeridian ? (s > 12 && (n = 2, s -= 12), n || (n = 1), 0 === s && (s = 12), a = 1 === n ? "AM" : "PM") : 12 > s && 2 === n ? s += 12 : s >= this.maxHours ? s = this.maxHours - 1 : (0 > s || 12 === s && 1 === n) && (s = 0)
                    }
                    this.hour = s, this.snapToStep ? (this.minute = this.changeToNearestStep(r, this.minuteStep), this.second = this.changeToNearestStep(o, this.secondStep)) : (this.minute = r, this.second = o), this.meridian = a, this.update(e)
                } else this.clear()
            },
            showWidget: function() {
                this.isOpen || this.$element.is(":disabled") || (this.$widget.appendTo(this.appendWidgetTo), t(n).on("mousedown.timepicker, touchend.timepicker", {
                    scope: this
                }, this.handleDocumentClick), this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), this.place(), this.disableFocus && this.$element.blur(), "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", t.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"), this.isOpen = !0)
            },
            toggleMeridian: function() {
                this.meridian = "AM" === this.meridian ? "PM" : "AM"
            },
            update: function(t) {
                this.updateElement(), t || this.updateWidget(), this.$element.trigger({
                    type: "changeTime.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                })
            },
            updateElement: function() {
                this.$element.val(this.getTime()).change()
            },
            updateFromElementVal: function() {
                this.setTime(this.$element.val())
            },
            updateWidget: function() {
                if (!1 !== this.$widget) {
                    var t = this.hour,
                        e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute,
                        n = 1 === this.second.toString().length ? "0" + this.second : this.second;
                    this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(n), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(n), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
                }
            },
            updateFromWidgetInputs: function() {
                if (!1 !== this.$widget) {
                    var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                    this.setTime(t, !0)
                }
            },
            widgetClick: function(e) {
                e.stopPropagation(), e.preventDefault();
                var n = t(e.target),
                    i = n.closest("a").data("action");
                i && this[i](), this.update(), n.is("input") && n.get(0).setSelectionRange(0, 2)
            },
            widgetKeydown: function(e) {
                var n = t(e.target),
                    i = n.attr("class").replace("bootstrap-timepicker-", "");
                switch (e.which) {
                    case 9:
                        if (e.shiftKey) {
                            if ("hour" === i) return this.hideWidget()
                        } else if (this.showMeridian && "meridian" === i || this.showSeconds && "second" === i || !this.showMeridian && !this.showSeconds && "minute" === i) return this.hideWidget();
                        break;
                    case 27:
                        this.hideWidget();
                        break;
                    case 38:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.incrementHour();
                                break;
                            case "minute":
                                this.incrementMinute();
                                break;
                            case "second":
                                this.incrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()), n.get(0).setSelectionRange(0, 2);
                        break;
                    case 40:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.decrementHour();
                                break;
                            case "minute":
                                this.decrementMinute();
                                break;
                            case "second":
                                this.decrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()), n.get(0).setSelectionRange(0, 2)
                }
            },
            widgetKeyup: function(t) {
                (65 === t.which || 77 === t.which || 80 === t.which || 46 === t.which || 8 === t.which || t.which >= 48 && t.which <= 57 || t.which >= 96 && t.which <= 105) && this.updateFromWidgetInputs()
            }
        }, t.fn.timepicker = function(e) {
            var n = Array.apply(null, arguments);
            return n.shift(), this.each(function() {
                var s = t(this),
                    r = s.data("timepicker"),
                    o = "object" == typeof e && e;
                r || s.data("timepicker", r = new i(this, t.extend({}, t.fn.timepicker.defaults, o, t(this).data()))), "string" == typeof e && r[e].apply(r, n)
            })
        }, t.fn.timepicker.defaults = {
            defaultTime: "current",
            disableFocus: !1,
            disableMousewheel: !1,
            isOpen: !1,
            minuteStep: 15,
            modalBackdrop: !1,
            orientation: {
                x: "auto",
                y: "auto"
            },
            secondStep: 15,
            snapToStep: !1,
            showSeconds: !1,
            showInputs: !0,
            showMeridian: !0,
            template: "dropdown",
            appendWidgetTo: "body",
            showWidgetOnAddonClick: !0,
            icons: {
                up: "glyphicon glyphicon-chevron-up",
                down: "glyphicon glyphicon-chevron-down"
            },
            maxHours: 24,
            explicitMode: !1
        }, t.fn.timepicker.Constructor = i, t(n).on("focus.timepicker.data-api click.timepicker.data-api", '[data-provide="timepicker"]', function(e) {
            var n = t(this);
            n.data("timepicker") || (e.preventDefault(), n.timepicker())
        })
    }(jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n), n
        } : t(jQuery)
    }(function(t) {
        "use strict";
        var e = 0;
        t.fn.TouchSpin = function(n) {
            var i = {
                    min: 0,
                    max: 100,
                    initval: "",
                    replacementval: "",
                    step: 1,
                    decimals: 0,
                    stepinterval: 100,
                    forcestepdivisibility: "round",
                    stepintervaldelay: 500,
                    verticalbuttons: !1,
                    verticalup: "+",
                    verticaldown: "-",
                    verticalupclass: "",
                    verticaldownclass: "",
                    prefix: "",
                    postfix: "",
                    prefix_extraclass: "",
                    postfix_extraclass: "",
                    booster: !0,
                    boostat: 10,
                    maxboostedstep: !1,
                    mousewheel: !0,
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                    buttondown_txt: "-",
                    buttonup_txt: "+",
                    callback_before_calculation: function(t) {
                        return t
                    },
                    callback_after_calculation: function(t) {
                        return t
                    }
                },
                s = {
                    min: "min",
                    max: "max",
                    initval: "init-val",
                    replacementval: "replacement-val",
                    step: "step",
                    decimals: "decimals",
                    stepinterval: "step-interval",
                    verticalbuttons: "vertical-buttons",
                    verticalupclass: "vertical-up-class",
                    verticaldownclass: "vertical-down-class",
                    forcestepdivisibility: "force-step-divisibility",
                    stepintervaldelay: "step-interval-delay",
                    prefix: "prefix",
                    postfix: "postfix",
                    prefix_extraclass: "prefix-extra-class",
                    postfix_extraclass: "postfix-extra-class",
                    booster: "booster",
                    boostat: "boostat",
                    maxboostedstep: "max-boosted-step",
                    mousewheel: "mouse-wheel",
                    buttondown_class: "button-down-class",
                    buttonup_class: "button-up-class",
                    buttondown_txt: "button-down-txt",
                    buttonup_txt: "button-up-txt"
                };
            return this.each(function() {
                var r, o, a, l, c, u, h, d, p, f, m = t(this),
                    g = m.data(),
                    v = 0,
                    y = !1;

                function b() {
                    "" === r.prefix && (o = c.prefix.detach()), "" === r.postfix && (a = c.postfix.detach())
                }

                function _() {
                    var t, e, n;
                    "" !== (t = r.callback_before_calculation(m.val())) ? 0 < r.decimals && "." === t || (e = parseFloat(t), isNaN(e) && (e = "" !== r.replacementval ? r.replacementval : 0), (n = e).toString() !== t && (n = e), null !== r.min && e < r.min && (n = r.min), null !== r.max && e > r.max && (n = r.max), n = function(t) {
                        switch (r.forcestepdivisibility) {
                            case "round":
                                return (Math.round(t / r.step) * r.step).toFixed(r.decimals);
                            case "floor":
                                return (Math.floor(t / r.step) * r.step).toFixed(r.decimals);
                            case "ceil":
                                return (Math.ceil(t / r.step) * r.step).toFixed(r.decimals);
                            default:
                                return t
                        }
                    }(n), Number(t).toString() !== n.toString() && (m.val(n), m.trigger("change"))): "" !== r.replacementval && (m.val(r.replacementval), m.trigger("change"))
                }

                function w() {
                    if (r.booster) {
                        var t = Math.pow(2, Math.floor(v / r.boostat)) * r.step;
                        return r.maxboostedstep && t > r.maxboostedstep && (t = r.maxboostedstep, u = Math.round(u / t) * t), Math.max(r.step, t)
                    }
                    return r.step
                }

                function x() {
                    _(), u = parseFloat(r.callback_before_calculation(c.input.val())), isNaN(u) && (u = 0);
                    var t = u,
                        e = w();
                    u += e, null !== r.max && u > r.max && (u = r.max, m.trigger("touchspin.on.max"), S()), c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))), t !== u && m.trigger("change")
                }

                function D() {
                    _(), u = parseFloat(r.callback_before_calculation(c.input.val())), isNaN(u) && (u = 0);
                    var t = u,
                        e = w();
                    u -= e, null !== r.min && u < r.min && (u = r.min, m.trigger("touchspin.on.min"), S()), c.input.val(r.callback_after_calculation(Number(u).toFixed(r.decimals))), t !== u && m.trigger("change")
                }

                function k() {
                    S(), v = 0, y = "down", m.trigger("touchspin.on.startspin"), m.trigger("touchspin.on.startdownspin"), p = setTimeout(function() {
                        h = setInterval(function() {
                            v++, D()
                        }, r.stepinterval)
                    }, r.stepintervaldelay)
                }

                function C() {
                    S(), v = 0, y = "up", m.trigger("touchspin.on.startspin"), m.trigger("touchspin.on.startupspin"), f = setTimeout(function() {
                        d = setInterval(function() {
                            v++, x()
                        }, r.stepinterval)
                    }, r.stepintervaldelay)
                }

                function S() {
                    switch (clearTimeout(p), clearTimeout(f), clearInterval(h), clearInterval(d), y) {
                        case "up":
                            m.trigger("touchspin.on.stopupspin"), m.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            m.trigger("touchspin.on.stopdownspin"), m.trigger("touchspin.on.stopspin")
                    }
                    v = 0, y = !1
                }! function() {
                    var u, h, d, p, f;
                    if (!m.data("alreadyinitialized")) m.data("alreadyinitialized", !0), e += 1, m.data("spinnerid", e), m.is("input") ? ("" !== (r = t.extend({}, i, g, (f = {}, t.each(s, function(t, e) {
                        var n = "bts-" + e;
                        m.is("[data-" + n + "]") && (f[t] = m.data(n))
                    }), f), n)).initval && "" === m.val() && m.val(r.initval), _(), d = m.val(), p = m.parent(), "" !== d && (d = r.callback_after_calculation(Number(d).toFixed(r.decimals))), m.data("initvalue", d).val(d), m.addClass("form-control"), p.hasClass("input-group") ? function(e) {
                        e.addClass("bootstrap-touchspin");
                        var n, i, s = m.prev(),
                            o = m.next(),
                            a = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + r.prefix + "</span></span>",
                            c = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + r.postfix + "</span></span>";
                        s.hasClass("input-group-btn") || s.hasClass("input-group-prepend") ? (n = '<button class="' + r.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + r.buttondown_txt + "</button>", s.append(n)) : (n = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + r.buttondown_class + ' bootstrap-touchspin-down" type="button">' + r.buttondown_txt + "</button></span>", t(n).insertBefore(m)), o.hasClass("input-group-btn") || o.hasClass("input-group-append") ? (i = '<button class="' + r.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + r.buttonup_txt + "</button>", o.prepend(i)) : (i = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + r.buttonup_class + ' bootstrap-touchspin-up" type="button">' + r.buttonup_txt + "</button></span>", t(i).insertAfter(m)), t(a).insertBefore(m), t(c).insertAfter(m), l = e
                    }(p) : (h = "", m.hasClass("input-sm") && (h = "input-group-sm"), m.hasClass("input-lg") && (h = "input-group-lg"), u = r.verticalbuttons ? '<div class="input-group ' + h + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + r.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + r.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + r.buttondown_class + " bootstrap-touchspin-up " + r.verticalupclass + '" type="button">' + r.verticalup + '</button><button class="' + r.buttonup_class + " bootstrap-touchspin-down " + r.verticaldownclass + '" type="button">' + r.verticaldown + "</button></span></div>" : '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + r.buttondown_class + ' bootstrap-touchspin-down" type="button">' + r.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + r.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + r.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + r.buttonup_class + ' bootstrap-touchspin-up" type="button">' + r.buttonup_txt + "</button></span></div>", l = t(u).insertBefore(m), t(".bootstrap-touchspin-prefix", l).after(m), m.hasClass("input-sm") ? l.addClass("input-group-sm") : m.hasClass("input-lg") && l.addClass("input-group-lg")), c = {
                        down: t(".bootstrap-touchspin-down", l),
                        up: t(".bootstrap-touchspin-up", l),
                        input: t("input", l),
                        prefix: t(".bootstrap-touchspin-prefix", l).addClass(r.prefix_extraclass),
                        postfix: t(".bootstrap-touchspin-postfix", l).addClass(r.postfix_extraclass)
                    }, b(), m.on("keydown.touchspin", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? ("up" !== y && (x(), C()), t.preventDefault()) : 40 === e && ("down" !== y && (D(), k()), t.preventDefault())
                    }), m.on("keyup.touchspin", function(t) {
                        var e = t.keyCode || t.which;
                        38 === e ? S() : 40 === e && S()
                    }), m.on("blur.touchspin", function() {
                        _(), m.val(r.callback_after_calculation(m.val()))
                    }), c.down.on("keydown", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("down" !== y && (D(), k()), t.preventDefault())
                    }), c.down.on("keyup.touchspin", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || S()
                    }), c.up.on("keydown.touchspin", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || ("up" !== y && (x(), C()), t.preventDefault())
                    }), c.up.on("keyup.touchspin", function(t) {
                        var e = t.keyCode || t.which;
                        32 !== e && 13 !== e || S()
                    }), c.down.on("mousedown.touchspin", function(t) {
                        c.down.off("touchstart.touchspin"), m.is(":disabled") || (D(), k(), t.preventDefault(), t.stopPropagation())
                    }), c.down.on("touchstart.touchspin", function(t) {
                        c.down.off("mousedown.touchspin"), m.is(":disabled") || (D(), k(), t.preventDefault(), t.stopPropagation())
                    }), c.up.on("mousedown.touchspin", function(t) {
                        c.up.off("touchstart.touchspin"), m.is(":disabled") || (x(), C(), t.preventDefault(), t.stopPropagation())
                    }), c.up.on("touchstart.touchspin", function(t) {
                        c.up.off("mousedown.touchspin"), m.is(":disabled") || (x(), C(), t.preventDefault(), t.stopPropagation())
                    }), c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) {
                        y && (t.stopPropagation(), S())
                    }), c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin", function(t) {
                        y && (t.stopPropagation(), S())
                    }), c.down.on("mousemove.touchspin touchmove.touchspin", function(t) {
                        y && (t.stopPropagation(), t.preventDefault())
                    }), c.up.on("mousemove.touchspin touchmove.touchspin", function(t) {
                        y && (t.stopPropagation(), t.preventDefault())
                    }), m.on("mousewheel.touchspin DOMMouseScroll.touchspin", function(t) {
                        if (r.mousewheel && m.is(":focus")) {
                            var e = t.originalEvent.wheelDelta || -t.originalEvent.deltaY || -t.originalEvent.detail;
                            t.stopPropagation(), t.preventDefault(), e < 0 ? D() : x()
                        }
                    }), m.on("touchspin.destroy", function() {
                        var e;
                        e = m.parent(), S(), m.off(".touchspin"), e.hasClass("bootstrap-touchspin-injected") ? (m.siblings().remove(), m.unwrap()) : (t(".bootstrap-touchspin-injected", e).remove(), e.removeClass("bootstrap-touchspin")), m.data("alreadyinitialized", !1)
                    }), m.on("touchspin.uponce", function() {
                        S(), x()
                    }), m.on("touchspin.downonce", function() {
                        S(), D()
                    }), m.on("touchspin.startupspin", function() {
                        C()
                    }), m.on("touchspin.startdownspin", function() {
                        k()
                    }), m.on("touchspin.stopspin", function() {
                        S()
                    }), m.on("touchspin.updatesettings", function(e, n) {
                        ! function(e) {
                            (function(e) {
                                (r = t.extend({}, r, e), e.postfix) && (0 === m.parent().find(".bootstrap-touchspin-postfix").length && a.insertAfter(m), m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix));
                                e.prefix && (0 === m.parent().find(".bootstrap-touchspin-prefix").length && o.insertBefore(m), m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix));
                                b()
                            })(n), _();
                            var i = c.input.val();
                            "" !== i && (i = Number(r.callback_before_calculation(c.input.val())), c.input.val(r.callback_after_calculation(Number(i).toFixed(r.decimals))))
                        }()
                    })) : console.log("Must be an input.")
                }()
            })
        }
    }),
    function(t) {
        "use strict";
        t.event.special.destroyed || (t.event.special.destroyed = {
            remove: function(t) {
                t.handler && t.handler()
            }
        }), t.fn.extend({
            maxlength: function(e, n) {
                function i(t) {
                    var n = t.val();
                    n = e.twoCharLinebreak ? n.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n") : n.replace(new RegExp("\r?\n", "g"), "\n");
                    return e.utf8 ? function(t) {
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var i = t.charCodeAt(n);
                            128 > i ? e++ : e += i > 127 && 2048 > i ? 2 : 3
                        }
                        return e
                    }(n) : n.length
                }

                function s(t, e) {
                    return e - i(t)
                }

                function r(t, e) {
                    e.css({
                        display: "block"
                    }), t.trigger("maxlength.shown")
                }

                function o(t, n, i) {
                    var s = "";
                    return e.message ? s = "function" == typeof e.message ? e.message(t, n) : e.message.replace("%charsTyped%", i).replace("%charsRemaining%", n - i).replace("%charsTotal%", n) : (e.preText && (s += e.preText), s += e.showCharsTyped ? i : n - i, e.showMaxLength && (s += e.separator + n), e.postText && (s += e.postText)), s
                }

                function a(t, n, s, a) {
                    var l, c, u, h, d;
                    a && (a.html(o(n.val(), s, s - t)), t > 0 ? (c = n, u = e.threshold, h = s, d = !0, !e.alwaysShow && h - i(c) > u && (d = !1), d ? r(n, a.removeClass(e.limitReachedClass).addClass(e.warningClass)) : (l = n, a.css({
                        display: "none"
                    }), l.trigger("maxlength.hidden"))) : r(n, a.removeClass(e.warningClass).addClass(e.limitReachedClass))), e.allowOverMax && (0 > t ? n.addClass("overmax") : n.removeClass("overmax"))
                }

                function l(n, i) {
                    var s, r, o = (r = (s = n)[0], t.extend({}, "function" == typeof r.getBoundingClientRect ? r.getBoundingClientRect() : {
                        width: r.offsetWidth,
                        height: r.offsetHeight
                    }, s.offset()));
                    if ("function" !== t.type(e.placement))
                        if (t.isPlainObject(e.placement)) ! function(n, i) {
                            if (n && i) {
                                var s = {};
                                t.each(["top", "bottom", "left", "right", "position"], function(t, n) {
                                    var i = e.placement[n];
                                    void 0 !== i && (s[n] = i)
                                }), i.css(s)
                            }
                        }(e.placement, i);
                        else {
                            var a = n.outerWidth(),
                                l = i.outerWidth(),
                                c = i.width(),
                                u = i.height();
                            switch (e.appendToParent && (o.top -= n.parent().offset().top, o.left -= n.parent().offset().left), e.placement) {
                                case "bottom":
                                    i.css({
                                        top: o.top + o.height,
                                        left: o.left + o.width / 2 - c / 2
                                    });
                                    break;
                                case "top":
                                    i.css({
                                        top: o.top - u,
                                        left: o.left + o.width / 2 - c / 2
                                    });
                                    break;
                                case "left":
                                    i.css({
                                        top: o.top + o.height / 2 - u / 2,
                                        left: o.left - c
                                    });
                                    break;
                                case "right":
                                    i.css({
                                        top: o.top + o.height / 2 - u / 2,
                                        left: o.left + o.width
                                    });
                                    break;
                                case "bottom-right":
                                    i.css({
                                        top: o.top + o.height,
                                        left: o.left + o.width
                                    });
                                    break;
                                case "top-right":
                                    i.css({
                                        top: o.top - u,
                                        left: o.left + a
                                    });
                                    break;
                                case "top-left":
                                    i.css({
                                        top: o.top - u,
                                        left: o.left - l
                                    });
                                    break;
                                case "bottom-left":
                                    i.css({
                                        top: o.top + n.outerHeight(),
                                        left: o.left - l
                                    });
                                    break;
                                case "centered-right":
                                    i.css({
                                        top: o.top + u / 2,
                                        left: o.left + a - l - 3
                                    });
                                    break;
                                case "bottom-right-inside":
                                    i.css({
                                        top: o.top + o.height,
                                        left: o.left + o.width - l
                                    });
                                    break;
                                case "top-right-inside":
                                    i.css({
                                        top: o.top - u,
                                        left: o.left + a - l
                                    });
                                    break;
                                case "top-left-inside":
                                    i.css({
                                        top: o.top - u,
                                        left: o.left
                                    });
                                    break;
                                case "bottom-left-inside":
                                    i.css({
                                        top: o.top + n.outerHeight(),
                                        left: o.left
                                    })
                            }
                        }
                    else e.placement(n, i, o)
                }

                function c(t) {
                    var n = "maxlength";
                    return e.allowOverMax && (n = "data-bs-mxl"), t.attr(n) || t.attr("size")
                }
                var u = t("body");
                return t.isFunction(e) && !n && (n = e, e = {}), e = t.extend({
                    showOnReady: !1,
                    alwaysShow: !1,
                    threshold: 10,
                    warningClass: "label label-success",
                    limitReachedClass: "label label-important label-danger",
                    separator: " / ",
                    preText: "",
                    postText: "",
                    showMaxLength: !0,
                    placement: "bottom",
                    message: null,
                    showCharsTyped: !0,
                    validate: !1,
                    utf8: !1,
                    appendToParent: !1,
                    twoCharLinebreak: !0,
                    allowOverMax: !1
                }, e), this.each(function() {
                    function n() {
                        var n = o(h.val(), i, "0");
                        i = c(h), r || (r = t('<span class="bootstrap-maxlength"></span>').css({
                            display: "none",
                            position: "absolute",
                            whiteSpace: "nowrap",
                            zIndex: 1099
                        }).html(n)), h.is("textarea") && (h.data("maxlenghtsizex", h.outerWidth()), h.data("maxlenghtsizey", h.outerHeight()), h.mouseup(function() {
                            (h.outerWidth() !== h.data("maxlenghtsizex") || h.outerHeight() !== h.data("maxlenghtsizey")) && l(h, r), h.data("maxlenghtsizex", h.outerWidth()), h.data("maxlenghtsizey", h.outerHeight())
                        })), e.appendToParent ? (h.parent().append(r), h.parent().css("position", "relative")) : u.append(r), a(s(h, c(h)), h, i, r), l(h, r)
                    }
                    var i, r, h = t(this);
                    t(window).resize(function() {
                        r && l(h, r)
                    }), e.allowOverMax && (t(this).attr("data-bs-mxl", t(this).attr("maxlength")), t(this).removeAttr("maxlength")), e.showOnReady ? h.ready(function() {
                        n()
                    }) : h.focus(function() {
                        n()
                    }), h.on("maxlength.reposition", function() {
                        l(h, r)
                    }), h.on("destroyed", function() {
                        r && r.remove()
                    }), h.on("blur", function() {
                        r && !e.showOnReady && r.remove()
                    }), h.on("input", function() {
                        var t, n, o, u, d = c(h),
                            p = s(h, d),
                            f = !0;
                        return e.validate && 0 > p ? (n = d, o = (t = h).val(), u = 0, e.twoCharLinebreak && "\n" === (o = o.replace(/\r(?!\n)|\n(?!\r)/g, "\r\n")).substr(o.length - 1) && o.length % 2 == 1 && (u = 1), t.val(o.substr(0, n - u)), f = !1) : a(p, h, i, r), ("bottom-right-inside" === e.placement || "top-right-inside" === e.placement) && l(h, r), f
                    })
                })
            }
        })
    }(jQuery),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]'
        };
        e.prototype.init = function() {
            var e = this;
            t(document).on("click", this.$portletCloser, function(n) {
                n.preventDefault();
                var i = t(this).closest(e.$portletIdentifier),
                    s = i.parent();
                i.remove(), 0 == s.children().length && s.remove()
            }), t(document).on("click", this.$portletRefresher, function(n) {
                n.preventDefault();
                var i = t(this).closest(e.$portletIdentifier);
                i.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
                var s = i.find(".card-disabled");
                setTimeout(function() {
                    s.fadeOut("fast", function() {
                        s.remove()
                    })
                }, 500 + 5 * Math.random() * 300)
            })
        }, t.Portlet = new e, t.Portlet.Constructor = e
    }(window.jQuery),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"), this.$window = t(window)
        };
        e.prototype.initSelect2 = function() {
            t('[data-toggle="select2"]').select2()
        }, e.prototype.initMask = function() {
            t('[data-toggle="input-mask"]').each(function(e, n) {
                var i = t(n).data("maskFormat"),
                    s = t(n).data("reverse");
                null != s ? t(n).mask(i, {
                    reverse: s
                }) : t(n).mask(i)
            })
        }, e.prototype.initDateRange = function() {
            var e = {
                cancelClass: "btn-light",
                applyButtonClasses: "btn-success"
            };
            t('[data-toggle="date-picker"]').each(function(n, i) {
                var s = t.extend({}, e, t(i).data());
                t(i).daterangepicker(s)
            });
            var n = {
                startDate: moment().subtract(29, "days"),
                endDate: moment(),
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                }
            };
            t('[data-toggle="date-picker-range"]').each(function(e, i) {
                var s = t.extend({}, n, t(i).data()),
                    r = s.targetDisplay;
                t(i).daterangepicker(s, function(e, n) {
                    r && t(r).html(e.format("MMMM D, YYYY") + " - " + n.format("MMMM D, YYYY"))
                })
            })
        }, e.prototype.initTimePicker = function() {
            var e = {
                showSeconds: !0,
                icons: {
                    up: "mdi mdi-chevron-up",
                    down: "mdi mdi-chevron-down"
                }
            };
            t('[data-toggle="timepicker"]').each(function(n, i) {
                var s = t.extend({}, e, t(i).data());
                t(i).timepicker(s)
            })
        }, e.prototype.initTouchspin = function() {
            var e = {};
            t('[data-toggle="touchspin"]').each(function(n, i) {
                var s = t.extend({}, e, t(i).data());
                t(i).TouchSpin(s)
            })
        }, e.prototype.initMaxlength = function() {
            var e = {
                warningClass: "badge badge-success",
                limitReachedClass: "badge badge-danger",
                separator: " out of ",
                preText: "You typed ",
                postText: " chars available.",
                placement: "bottom"
            };
            t('[data-toggle="maxlength"]').each(function(n, i) {
                var s = t.extend({}, e, t(i).data());
                t(i).maxlength(s)
            })
        }, e.prototype.init = function() {
            this.initSelect2(), this.initMask(), this.initDateRange(), this.initTimePicker(), this.initTouchspin(), this.initMaxlength()
        }, t.AdvanceFormApp = new e, t.AdvanceFormApp.Constructor = e
    }(window.jQuery),
    function(t) {
        "use strict";
        var e = function() {};
        e.prototype.send = function(e, n, i, s, r, o, a, l) {
            o || (o = 3e3), a || (a = 1);
            var c = {
                heading: e,
                text: n,
                position: i,
                loaderBg: s,
                icon: r,
                hideAfter: o,
                stack: a
            };
            c.showHideTransition = l || "fade", t.toast().reset("all"), t.toast(c)
        }, t.NotificationApp = new e, t.NotificationApp.Constructor = e
    }(window.jQuery),
    function(t) {
        "use strict";
        var e = function() {};
        e.prototype.initTooltipPlugin = function() {
            t.fn.tooltip && t('[data-toggle="tooltip"]').tooltip()
        }, e.prototype.initPopoverPlugin = function() {
            t.fn.popover && t('[data-toggle="popover"]').popover()
        }, e.prototype.initSlimScrollPlugin = function() {
            t.fn.slimScroll && t(".slimscroll").slimScroll({
                height: "auto",
                position: "right",
                size: "8px",
                touchScrollStep: 20,
                color: "#9ea5ab"
            })
        }, e.prototype.initFormValidation = function() {
            t(".needs-validation").on("submit", function(e) {
                return t(this).addClass("was-validated"), !1 !== t(this)[0].checkValidity() || (e.preventDefault(), e.stopPropagation(), !1)
            })
        }, e.prototype.init = function() {
            this.initTooltipPlugin(), this.initPopoverPlugin(), this.initSlimScrollPlugin(), this.initFormValidation()
        }, t.Components = new e, t.Components.Constructor = e
    }(window.jQuery),
    function(t) {
        "use strict";
        var e = function() {
            this.$body = t("body"), this.$window = t(window)
        };
        e.prototype._resetSidebarScroll = function() {
            t(".slimscroll-menu").slimscroll({
                height: "auto",
                position: "right",
                size: "8px",
                color: "#9ea5ab",
                wheelStep: 5,
                touchScrollStep: 20
            })
        }, e.prototype.initMenu = function() {
            var e = this;
            t(".button-menu-mobile").on("click", function(t) {
                t.preventDefault(), e.$body.toggleClass("sidebar-enable"), e.$window.width() >= 768 ? e.$body.toggleClass("enlarged") : e.$body.removeClass("enlarged"), e._resetSidebarScroll()
            }), t(".side-nav").metisMenu(), e._resetSidebarScroll(), t(".right-bar-toggle").on("click", function(e) {
                t("body").toggleClass("right-bar-enabled")
            }), t(document).on("click", "body", function(e) {
                t(e.target).closest(".right-bar-toggle, .right-bar").length > 0 || t(e.target).closest(".left-side-menu, .side-nav").length > 0 || t(e.target).hasClass("button-menu-mobile") || t(e.target).closest(".button-menu-mobile").length > 0 || (t("body").removeClass("right-bar-enabled"), t("body").removeClass("sidebar-enable"))
            }), t(".side-nav a").each(function() {
                var e = window.location.href.split(/[?#]/)[0];
                this.href == e && (t(this).addClass("active"), t(this).parent().addClass("active"), t(this).parent().parent().addClass("in"), t(this).parent().parent().prev().addClass("active"), t(this).parent().parent().parent().addClass("active"), t(this).parent().parent().parent().parent().addClass("in"), t(this).parent().parent().parent().parent().parent().addClass("active"))
            }), t(".topnav-menu li a").each(function() {
                var e = window.location.href.split(/[?#]/)[0];
                this.href == e && (t(this).addClass("active"), t(this).parent().parent().addClass("active"), t(this).parent().parent().parent().parent().addClass("active"))
            }), t(".navbar-toggle").on("click", function(e) {
                t(this).toggleClass("open"), t("#navigation").slideToggle(400)
            }), t(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
                return t(this).next().hasClass("show") || t(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), t(this).next(".dropdown-menu").toggleClass("show"), !1
            })
        }, e.prototype.initLayout = function() {
            this.$window.width() >= 768 && this.$window.width() <= 1028 ? this.$body.addClass("enlarged") : 1 != this.$body.data("keep-enlarged") && this.$body.removeClass("enlarged")
        }, e.prototype.init = function() {
            var e = this;
            this.initLayout(), this.initMenu(), t.Portlet.init(), t.AdvanceFormApp.init(), t.Components.init(), e.$window.on("resize", function(t) {
                t.preventDefault(), e.initLayout(), e._resetSidebarScroll()
            })
        }, t.App = new e, t.App.Constructor = e
    }(window.jQuery),
    function(t) {
        "use strict";
        t.App.init()
    }(window.jQuery);
    
    
    /**
     * 
     * @param e
     * @param a
     * @param t
     * @param o
     * @returns
     * 
     * 
        if (r("#average-sales").length > 0) {
            e.push(this.respChart(r("#average-sales"), "Doughnut", {
                labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
                datasets: [{
                    data: [300, 135, 48, 154],
                    backgroundColor: ["#727cf5", "#fa5c7c", "#0acf97", "#ebeff2"],
                    borderColor: "transparent",
                    borderWidth: "3"
                }]
            }, {
                maintainAspectRatio: !1,
                cutoutPercentage: 60,
                legend: {
                    display: !1
                }
            }))
        }
     * 
     */    
function renderChart(e, a, t, o) {
	alert('on render');
    var n = Chart.controllers.line.prototype.draw;
    Chart.controllers.line.prototype.draw = function() {
        n.apply(this, arguments);
        var r = this.chart.chart.ctx,
            e = r.stroke;
        r.stroke = function() {
            r.save(), r.shadowColor = "rgba(0,0,0,0.01)", r.shadowBlur = 20, r.shadowOffsetX = 0, r.shadowOffsetY = 5, e.apply(this, arguments), r.restore()
        }
    };
    var s = Chart.controllers.doughnut.prototype.draw;
    Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
        draw: function() {
            s.apply(this, arguments);
            var r = this.chart.chart.ctx,
                e = r.fill;
            r.fill = function() {
                r.save(), r.shadowColor = "rgba(0,0,0,0.03)", r.shadowBlur = 4, r.shadowOffsetX = 0, r.shadowOffsetY = 3, e.apply(this, arguments), r.restore()
            }
        }
    });
    var i = Chart.controllers.bar.prototype.draw;
    Chart.controllers.bar = Chart.controllers.bar.extend({
        draw: function() {
            i.apply(this, arguments);
            var r = this.chart.chart.ctx,
                e = r.fill;
            r.fill = function() {
                r.save(), r.shadowColor = "rgba(0,0,0,0.01)", r.shadowBlur = 20, r.shadowOffsetX = 4, r.shadowOffsetY = 5, e.apply(this, arguments), r.restore()
            }
        }
    });
    var l = e.get(0).getContext("2d"),
        c = r(e).parent();
    return function() {
        var n;
        switch (e.attr("width", r(c).width()), a) {
            case "Line":
                n = new Chart(l, {
                    type: "line",
                    data: t,
                    options: o
                });
                break;
            case "Doughnut":
                n = new Chart(l, {
                    type: "doughnut",
                    data: t,
                    options: o
                });
                break;
            case "Pie":
                n = new Chart(l, {
                    type: "pie",
                    data: t,
                    options: o
                });
                break;
            case "Bar":
                n = new Chart(l, {
                    type: "bar",
                    data: t,
                    options: o
                });
                break;
            case "Radar":
                n = new Chart(l, {
                    type: "radar",
                    data: t,
                    options: o
                });
                break;
            case "PolarArea":
                n = new Chart(l, {
                    data: t,
                    type: "polarArea",
                    options: o
                })
        }
        return n
    }
};
