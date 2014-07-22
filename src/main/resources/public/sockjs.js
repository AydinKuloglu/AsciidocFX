var JSON;
JSON || (JSON = {});
(function () {
    function m(c, n) {
        var p, v, q, r, z = k, g, f = n[c];
        f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(c));
        "function" == typeof t && (f = t.call(n, c, f));
        switch (typeof f) {
            case "string":
                return h(f);
            case "number":
                return isFinite(f) ? String(f) : "null";
            case "boolean":
            case "null":
                return String(f);
            case "object":
                if (!f)return"null";
                k += x;
                g = [];
                if ("[object Array]" === Object.prototype.toString.apply(f)) {
                    r = f.length;
                    for (p = 0; p < r; p += 1)g[p] = m(p, f) || "null";
                    q = 0 === g.length ? "[]" : k ? "[\n" + k + g.join(",\n" + k) + "\n" + z + "]" :
                        "[" + g.join(",") + "]";
                    k = z;
                    return q
                }
                if (t && "object" == typeof t)for (r = t.length, p = 0; p < r; p += 1)"string" == typeof t[p] && (v = t[p], q = m(v, f), q && g.push(h(v) + (k ? ": " : ":") + q)); else for (v in f)Object.prototype.hasOwnProperty.call(f, v) && (q = m(v, f), q && g.push(h(v) + (k ? ": " : ":") + q));
                q = 0 === g.length ? "{}" : k ? "{\n" + k + g.join(",\n" + k) + "\n" + z + "}" : "{" + g.join(",") + "}";
                k = z;
                return q
        }
    }

    function h(c) {
        n.lastIndex = 0;
        return n.test(c) ? '"' + c.replace(n, function (c) {
            var h = F[c];
            return"string" == typeof h ? h : "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4)
        }) +
            '"' : '"' + c + '"'
    }

    function c(c) {
        return 10 > c ? "0" + c : c
    }

    "use strict";
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (h) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (c) {
        return this.valueOf()
    });
    var r = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, k, x, F = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, t;
    "function" != typeof JSON.stringify && (JSON.stringify = function (c, h, p) {
        var n;
        x = k = "";
        if ("number" == typeof p)for (n = 0; n < p; n += 1)x += " "; else"string" == typeof p && (x = p);
        t = h;
        if (!h || "function" == typeof h || "object" == typeof h && "number" == typeof h.length)return m("", {"": c});
        throw Error("JSON.stringify");
    });
    "function" != typeof JSON.parse && (JSON.parse = function (c, h) {
        function k(c, m) {
            var n, g, f = c[m];
            if (f && "object" == typeof f)for (n in f)Object.prototype.hasOwnProperty.call(f, n) && (g = k(f, n), void 0 !== g ? f[n] = g : delete f[n]);
            return h.call(c, m, f)
        }

        var m;
        c = String(c);
        r.lastIndex = 0;
        r.test(c) && (c = c.replace(r, function (c) {
            return"\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return m = eval("(" + c + ")"), "function" == typeof h ? k({"": m}, "") : m;
        throw new SyntaxError("JSON.parse");
    })
})();
SockJS = function () {
    var m = document, h = window, c = {}, r = function () {
    };
    r.prototype.addEventListener = function (a, b) {
        this._listeners || (this._listeners = {});
        a in this._listeners || (this._listeners[a] = []);
        var e = this._listeners[a];
        -1 === c.arrIndexOf(e, b) && e.push(b)
    };
    r.prototype.removeEventListener = function (a, b) {
        if (this._listeners && a in this._listeners) {
            var e = this._listeners[a], d = c.arrIndexOf(e, b);
            -1 !== d && (1 < e.length ? this._listeners[a] = e.slice(0, d).concat(e.slice(d + 1)) : delete this._listeners[a])
        }
    };
    r.prototype.dispatchEvent =
        function (a) {
            var b = a.type, e = Array.prototype.slice.call(arguments, 0);
            this["on" + b] && this["on" + b].apply(this, e);
            if (this._listeners && b in this._listeners)for (var d = 0; d < this._listeners[b].length; d++)this._listeners[b][d].apply(this, e)
        };
    var n = function (a, b) {
        this.type = a;
        if ("undefined" != typeof b)for (var e in b)b.hasOwnProperty(e) && (this[e] = b[e])
    };
    n.prototype.toString = function () {
        var a = [], b;
        for (b in this)if (this.hasOwnProperty(b)) {
            var e = this[b];
            "function" == typeof e && (e = "[function]");
            a.push(b + "=" + e)
        }
        return"SimpleEvent(" +
            a.join(", ") + ")"
    };
    var k = function (a) {
        this._events = a || [];
        this._listeners = {}
    };
    k.prototype.emit = function (a) {
        this._verifyType(a);
        if (!this._nuked) {
            var b = Array.prototype.slice.call(arguments, 1);
            this["on" + a] && this["on" + a].apply(this, b);
            if (a in this._listeners)for (var e = 0; e < this._listeners[a].length; e++)this._listeners[a][e].apply(this, b)
        }
    };
    k.prototype.on = function (a, b) {
        this._verifyType(a);
        this._nuked || (a in this._listeners || (this._listeners[a] = []), this._listeners[a].push(b))
    };
    k.prototype._verifyType = function (a) {
        -1 ===
            c.arrIndexOf(this._events, a) && c.log("Event " + JSON.stringify(a) + " not listed " + JSON.stringify(this._events) + " in " + this)
    };
    k.prototype.nuke = function () {
        this._nuked = !0;
        for (var a = 0; a < this._events.length; a++)delete this[this._events[a]];
        this._listeners = {}
    };
    c.random_string = function (a, b) {
        b = b || 37;
        var e, d = [];
        for (e = 0; e < a; e++)d.push("abcdefghijklmnopqrstuvwxyz0123456789_".substr(Math.floor(Math.random() * b), 1));
        return d.join("")
    };
    c.random_number = function (a) {
        return Math.floor(Math.random() * a)
    };
    c.random_number_string =
        function (a) {
            var b = ("" + (a - 1)).length;
            return(Array(b + 1).join("0") + c.random_number(a)).slice(-b)
        };
    c.getOrigin = function (a) {
        return(a + "/").split("/").slice(0, 3).join("/")
    };
    c.isSameOriginUrl = function (a, b) {
        return b || (b = h.location.href), a.split("/").slice(0, 3).join("/") === b.split("/").slice(0, 3).join("/")
    };
    c.getParentDomain = function (a) {
        return/^[0-9.]*$/.test(a) || /^\[/.test(a) || !/[.]/.test(a) ? a : a.split(".").slice(1).join(".")
    };
    c.objectExtend = function (a, b) {
        for (var e in b)b.hasOwnProperty(e) && (a[e] = b[e]);
        return a
    };
    c.polluteGlobalNamespace = function () {
        "_jp"in h || (h._jp = {})
    };
    c.closeFrame = function (a, b) {
        return"c" + JSON.stringify([a, b])
    };
    c.userSetCode = function (a) {
        return 1E3 === a || 3E3 <= a && 4999 >= a
    };
    c.countRTO = function (a) {
        var b;
        return 100 < a ? b = 3 * a : b = a + 200, b
    };
    c.log = function () {
        h.console && console.log && console.log.apply && console.log.apply(console, arguments)
    };
    c.bind = function (a, b) {
        return a.bind ? a.bind(b) : function () {
            return a.apply(b, arguments)
        }
    };
    c.flatUrl = function (a) {
        return-1 === a.indexOf("?") && -1 === a.indexOf("#")
    };
    c.amendUrl =
        function (a) {
            var b = m.location;
            if (!a)throw Error("Wrong url for SockJS");
            if (!c.flatUrl(a))throw Error("Only basic urls are supported in SockJS");
            return 0 === a.indexOf("//") && (a = b.protocol + a), 0 === a.indexOf("/") && (a = b.protocol + "//" + b.host + a), a = a.replace(/[/]+$/, ""), a
        };
    c.arrIndexOf = function (a, b) {
        for (var e = 0; e < a.length; e++)if (a[e] === b)return e;
        return-1
    };
    c.arrSkip = function (a, b) {
        var e = c.arrIndexOf(a, b);
        return-1 === e ? a.slice() : a.slice(0, e).concat(a.slice(e + 1))
    };
    c.isArray = Array.isArray || function (a) {
        return 0 <=
            {}.toString.call(a).indexOf("Array")
    };
    c.delay = function (a, b) {
        return"function" == typeof a && (b = a, a = 0), setTimeout(b, a)
    };
    var x = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, F = {"\x00": "\\u0000", "\u0001": "\\u0001", "\u0002": "\\u0002", "\u0003": "\\u0003", "\u0004": "\\u0004", "\u0005": "\\u0005", "\u0006": "\\u0006", "\u0007": "\\u0007", "\b": "\\b", "\t": "\\t", "\n": "\\n", "\x0B": "\\u000b", "\f": "\\f", "\r": "\\r", "\u000e": "\\u000e", "\u000f": "\\u000f",
            "\u0010": "\\u0010", "\u0011": "\\u0011", "\u0012": "\\u0012", "\u0013": "\\u0013", "\u0014": "\\u0014", "\u0015": "\\u0015", "\u0016": "\\u0016", "\u0017": "\\u0017", "\u0018": "\\u0018", "\u0019": "\\u0019", "\u001a": "\\u001a", "\u001b": "\\u001b", "\u001c": "\\u001c", "\u001d": "\\u001d", "\u001e": "\\u001e", "\u001f": "\\u001f", '"': '\\"', "\\": "\\\\", "\u007f": "\\u007f", "\u0080": "\\u0080", "\u0081": "\\u0081", "\u0082": "\\u0082", "\u0083": "\\u0083", "\u0084": "\\u0084", "\u0085": "\\u0085", "\u0086": "\\u0086", "\u0087": "\\u0087", "\u0088": "\\u0088",
            "\u0089": "\\u0089", "\u008a": "\\u008a", "\u008b": "\\u008b", "\u008c": "\\u008c", "\u008d": "\\u008d", "\u008e": "\\u008e", "\u008f": "\\u008f", "\u0090": "\\u0090", "\u0091": "\\u0091", "\u0092": "\\u0092", "\u0093": "\\u0093", "\u0094": "\\u0094", "\u0095": "\\u0095", "\u0096": "\\u0096", "\u0097": "\\u0097", "\u0098": "\\u0098", "\u0099": "\\u0099", "\u009a": "\\u009a", "\u009b": "\\u009b", "\u009c": "\\u009c", "\u009d": "\\u009d", "\u009e": "\\u009e", "\u009f": "\\u009f", "\u00ad": "\\u00ad", "\u0600": "\\u0600", "\u0601": "\\u0601", "\u0602": "\\u0602",
            "\u0603": "\\u0603", "\u0604": "\\u0604", "\u070f": "\\u070f", "\u17b4": "\\u17b4", "\u17b5": "\\u17b5", "\u200c": "\\u200c", "\u200d": "\\u200d", "\u200e": "\\u200e", "\u200f": "\\u200f", "\u2028": "\\u2028", "\u2029": "\\u2029", "\u202a": "\\u202a", "\u202b": "\\u202b", "\u202c": "\\u202c", "\u202d": "\\u202d", "\u202e": "\\u202e", "\u202f": "\\u202f", "\u2060": "\\u2060", "\u2061": "\\u2061", "\u2062": "\\u2062", "\u2063": "\\u2063", "\u2064": "\\u2064", "\u2065": "\\u2065", "\u2066": "\\u2066", "\u2067": "\\u2067", "\u2068": "\\u2068", "\u2069": "\\u2069",
            "\u206a": "\\u206a", "\u206b": "\\u206b", "\u206c": "\\u206c", "\u206d": "\\u206d", "\u206e": "\\u206e", "\u206f": "\\u206f", "\ufeff": "\\ufeff", "\ufff0": "\\ufff0", "\ufff1": "\\ufff1", "\ufff2": "\\ufff2", "\ufff3": "\\ufff3", "\ufff4": "\\ufff4", "\ufff5": "\\ufff5", "\ufff6": "\\ufff6", "\ufff7": "\\ufff7", "\ufff8": "\\ufff8", "\ufff9": "\\ufff9", "\ufffa": "\\ufffa", "\ufffb": "\\ufffb", "\ufffc": "\\ufffc", "\ufffd": "\\ufffd", "\ufffe": "\\ufffe", "\uffff": "\\uffff"}, t = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        D, O = JSON && JSON.stringify || function (a) {
            return x.lastIndex = 0, x.test(a) && (a = a.replace(x, function (a) {
                return F[a]
            })), '"' + a + '"'
        }, p = function (a) {
            var b, e = {}, d = [];
            for (b = 0; 65536 > b; b++)d.push(String.fromCharCode(b));
            return a.lastIndex = 0, d.join("").replace(a, function (a) {
                return e[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
            }), a.lastIndex = 0, e
        };
    c.quote = function (a) {
        a = O(a);
        return t.lastIndex = 0, t.test(a) ? (D || (D = p(t)), a.replace(t, function (a) {
            return D[a]
        })) : a
    };
    var v = "websocket xdr-streaming xhr-streaming iframe-eventsource iframe-htmlfile xdr-polling xhr-polling iframe-xhr-polling jsonp-polling".split(" ");
    c.probeProtocols = function () {
        for (var a = {}, b = 0; b < v.length; b++) {
            var e = v[b];
            a[e] = f[e] && f[e].enabled()
        }
        return a
    };
    c.detectProtocols = function (a, b, e) {
        var d = {}, c = [];
        b || (b = v);
        for (var f = 0; f < b.length; f++) {
            var h = b[f];
            d[h] = a[h]
        }
        var g = function (a) {
            var b = a.shift();
            d[b] ? c.push(b) : 0 < a.length && g(a)
        };
        return!1 !== e.websocket && g(["websocket"]), d["xhr-streaming"] && !e.null_origin ? c.push("xhr-streaming") : !d["xdr-streaming"] || e.cookie_needed || e.null_origin ? g(["iframe-eventsource", "iframe-htmlfile"]) : c.push("xdr-streaming"),
            d["xhr-polling"] && !e.null_origin ? c.push("xhr-polling") : !d["xdr-polling"] || e.cookie_needed || e.null_origin ? g(["iframe-xhr-polling", "jsonp-polling"]) : c.push("xdr-polling"), c
    };
    c.createHook = function () {
        var a = "a" + c.random_string(8);
        if (!("_sockjs_global"in h)) {
            var b = {};
            h._sockjs_global = function (a) {
                return a in b || (b[a] = {id: a, del: function () {
                    delete b[a]
                }}), b[a]
            }
        }
        return h._sockjs_global(a)
    };
    c.attachMessage = function (a) {
        c.attachEvent("message", a)
    };
    c.attachEvent = function (a, b) {
        "undefined" != typeof h.addEventListener ?
            h.addEventListener(a, b, !1) : (m.attachEvent("on" + a, b), h.attachEvent("on" + a, b))
    };
    c.detachMessage = function (a) {
        c.detachEvent("message", a)
    };
    c.detachEvent = function (a, b) {
        "undefined" != typeof h.addEventListener ? h.removeEventListener(a, b, !1) : (m.detachEvent("on" + a, b), h.detachEvent("on" + a, b))
    };
    var q = {}, E = !1, z = function () {
        for (var a in q)q[a](), delete q[a]
    };
    c.attachEvent("unload", function () {
        E || (E = !0, z())
    });
    c.unload_add = function (a) {
        var b = c.random_string(8);
        return q[b] = a, E && c.delay(z), b
    };
    c.unload_del = function (a) {
        a in
            q && delete q[a]
    };
    c.createIframe = function (a, b) {
        var e = m.createElement("iframe"), d, l, f = function () {
            clearTimeout(d);
            try {
                e.onload = null
            } catch (a) {
            }
            e.onerror = null
        }, h = function () {
            e && (f(), setTimeout(function () {
                e && e.parentNode.removeChild(e);
                e = null
            }, 0), c.unload_del(l))
        };
        return e.src = a, e.style.display = "none", e.style.position = "absolute", e.onerror = function () {
            e && (h(), b("onerror"))
        }, e.onload = function () {
            clearTimeout(d);
            d = setTimeout(function () {
                e && (h(), b("onload timeout"))
            }, 2E3)
        }, m.body.appendChild(e), d = setTimeout(function () {
            e &&
            (h(), b("timeout"))
        }, 15E3), l = c.unload_add(h), {post: function (a, b) {
            try {
                e && e.contentWindow && e.contentWindow.postMessage(a, b)
            } catch (d) {
            }
        }, cleanup: h, loaded: f}
    };
    c.createHtmlfile = function (a, b) {
        var e = new ActiveXObject("htmlfile"), d, l, f, g = function () {
            clearTimeout(d)
        }, k = function () {
            e && (g(), c.unload_del(l), f.parentNode.removeChild(f), f = e = null, CollectGarbage())
        };
        e.open();
        e.write('<html><script>document.domain="' + document.domain + '";\x3c/script></html>');
        e.close();
        e.parentWindow._jp = h._jp;
        var m = e.createElement("div");
        return e.body.appendChild(m), f = e.createElement("iframe"), m.appendChild(f), f.src = a, d = setTimeout(function () {
            e && (k(), b("timeout"))
        }, 15E3), l = c.unload_add(k), {post: function (a, b) {
            try {
                f && f.contentWindow && f.contentWindow.postMessage(a, b)
            } catch (d) {
            }
        }, cleanup: k, loaded: g}
    };
    var g = function () {
    };
    g.prototype = new k(["chunk", "finish"]);
    g.prototype._start = function (a, b, e, d) {
        var l = this;
        try {
            l.xhr = new XMLHttpRequest
        } catch (f) {
        }
        if (!l.xhr)try {
            l.xhr = new h.ActiveXObject("Microsoft.XMLHTTP")
        } catch (g) {
        }
        if (h.ActiveXObject || h.XDomainRequest)b +=
            (-1 === b.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        l.unload_ref = c.unload_add(function () {
            l._cleanup(!0)
        });
        try {
            l.xhr.open(a, b, !0)
        } catch (k) {
            l.emit("finish", 0, "");
            l._cleanup();
            return
        }
        d && d.no_credentials || (l.xhr.withCredentials = "true");
        if (d && d.headers)for (var m in d.headers)l.xhr.setRequestHeader(m, d.headers[m]);
        l.xhr.onreadystatechange = function () {
            if (l.xhr) {
                var a = l.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status, d = a.responseText
                        } catch (c) {
                        }
                        1223 === b && (b = 204);
                        d && 0 < d.length && l.emit("chunk", b, d);
                        break;
                    case 4:
                        b =
                            a.status, 1223 === b && (b = 204), l.emit("finish", b, a.responseText), l._cleanup(!1)
                }
            }
        };
        l.xhr.send(e)
    };
    g.prototype._cleanup = function (a) {
        if (this.xhr) {
            c.unload_del(this.unload_ref);
            this.xhr.onreadystatechange = function () {
            };
            if (a)try {
                this.xhr.abort()
            } catch (b) {
            }
            this.unload_ref = this.xhr = null
        }
    };
    g.prototype.close = function () {
        this.nuke();
        this._cleanup(!0)
    };
    (c.XHRCorsObject = function () {
        var a = this, b = arguments;
        c.delay(function () {
            a._start.apply(a, b)
        })
    }).prototype = new g;
    (c.XHRLocalObject = function (a, b, e) {
        var d = this;
        c.delay(function () {
            d._start(a,
                b, e, {no_credentials: !0})
        })
    }).prototype = new g;
    g = c.XDRObject = function (a, b, e) {
        var d = this;
        c.delay(function () {
            d._start(a, b, e)
        })
    };
    g.prototype = new k(["chunk", "finish"]);
    g.prototype._start = function (a, b, e) {
        var d = this, l = new XDomainRequest;
        b += (-1 === b.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var f = l.ontimeout = l.onerror = function () {
            d.emit("finish", 0, "");
            d._cleanup(!1)
        };
        l.onprogress = function () {
            d.emit("chunk", 200, l.responseText)
        };
        l.onload = function () {
            d.emit("finish", 200, l.responseText);
            d._cleanup(!1)
        };
        d.xdr = l;
        d.unload_ref =
            c.unload_add(function () {
                d._cleanup(!0)
            });
        try {
            d.xdr.open(a, b), d.xdr.send(e)
        } catch (h) {
            f()
        }
    };
    g.prototype._cleanup = function (a) {
        if (this.xdr) {
            c.unload_del(this.unload_ref);
            this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
            if (a)try {
                this.xdr.abort()
            } catch (b) {
            }
            this.unload_ref = this.xdr = null
        }
    };
    g.prototype.close = function () {
        this.nuke();
        this._cleanup(!0)
    };
    c.isXHRCorsCapable = function () {
        return h.XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? 1 : h.XDomainRequest && m.domain ? 2 : s.enabled() ?
            3 : 4
    };
    var f = function (a, b, e) {
        if (this === h)return new f(a, b, e);
        var d = this, l;
        d._options = {devel: !1, debug: !1, protocols_whitelist: [], info: void 0, rtt: void 0};
        e && c.objectExtend(d._options, e);
        d._base_url = c.amendUrl(a);
        d._server = d._options.server || c.random_number_string(1E3);
        d._options.protocols_whitelist && d._options.protocols_whitelist.length ? l = d._options.protocols_whitelist : ("string" == typeof b && 0 < b.length ? l = [b] : c.isArray(b) ? l = b : l = null, l && d._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'));
        d._protocols = [];
        d.protocol = null;
        d.readyState = f.CONNECTING;
        d._ir = P(d._base_url);
        d._ir.onfinish = function (a, b) {
            d._ir = null;
            a ? (d._options.info && (a = c.objectExtend(a, d._options.info)), d._options.rtt && (b = d._options.rtt), d._applyInfo(a, b, l), d._didClose()) : d._didClose(1002, "Can't connect to server", !0)
        }
    };
    f.prototype = new r;
    f.version = "0.3.4";
    f.CONNECTING = 0;
    f.OPEN = 1;
    f.CLOSING = 2;
    f.CLOSED = 3;
    f.prototype._debug = function () {
        this._options.debug && c.log.apply(c, arguments)
    };
    f.prototype._dispatchOpen = function () {
        this.readyState ===
            f.CONNECTING ? (this._transport_tref && (clearTimeout(this._transport_tref), this._transport_tref = null), this.readyState = f.OPEN, this.dispatchEvent(new n("open"))) : this._didClose(1006, "Server lost session")
    };
    f.prototype._dispatchMessage = function (a) {
        this.readyState === f.OPEN && this.dispatchEvent(new n("message", {data: a}))
    };
    f.prototype._dispatchHeartbeat = function (a) {
        this.readyState === f.OPEN && this.dispatchEvent(new n("heartbeat", {}))
    };
    f.prototype._didClose = function (a, b, e) {
        var d = this;
        if (d.readyState !== f.CONNECTING &&
            d.readyState !== f.OPEN && d.readyState !== f.CLOSING)throw Error("INVALID_STATE_ERR");
        d._ir && (d._ir.nuke(), d._ir = null);
        d._transport && (d._transport.doCleanup(), d._transport = null);
        var l = new n("close", {code: a, reason: b, wasClean: c.userSetCode(a)});
        if (!c.userSetCode(a) && d.readyState === f.CONNECTING && !e) {
            if (d._try_next_protocol(l))return;
            l = new n("close", {code: 2E3, reason: "All transports failed", wasClean: !1, last_event: l})
        }
        d.readyState = f.CLOSED;
        c.delay(function () {
            d.dispatchEvent(l)
        })
    };
    f.prototype._didMessage = function (a) {
        switch (a.slice(0,
            1)) {
            case "o":
                this._dispatchOpen();
                break;
            case "a":
                a = JSON.parse(a.slice(1) || "[]");
                for (var b = 0; b < a.length; b++)this._dispatchMessage(a[b]);
                break;
            case "m":
                a = JSON.parse(a.slice(1) || "null");
                this._dispatchMessage(a);
                break;
            case "c":
                a = JSON.parse(a.slice(1) || "[]");
                this._didClose(a[0], a[1]);
                break;
            case "h":
                this._dispatchHeartbeat()
        }
    };
    f.prototype._try_next_protocol = function (a) {
        var b = this;
        b.protocol && (b._debug("Closed transport:", b.protocol, "" + a), b.protocol = null);
        for (b._transport_tref && (clearTimeout(b._transport_tref),
            b._transport_tref = null); ;) {
            a = b.protocol = b._protocols.shift();
            if (!a)return!1;
            if (f[a] && !0 === f[a].need_body && (!m.body || "undefined" != typeof m.readyState && "complete" !== m.readyState))return b._protocols.unshift(a), b.protocol = "waiting-for-load", c.attachEvent("load", function () {
                b._try_next_protocol()
            }), !0;
            if (f[a] && f[a].enabled(b._options)) {
                b._transport_tref = c.delay((b._options.rto || 0) * (f[a].roundTrips || 1) || 5E3, function () {
                    b.readyState === f.CONNECTING && b._didClose(2007, "Transport timeouted")
                });
                var e = c.random_string(8),
                    e = b._base_url + "/" + b._server + "/" + e;
                return b._debug("Opening transport:", a, " url:" + e, " RTO:" + b._options.rto), b._transport = new f[a](b, e, b._base_url), !0
            }
            b._debug("Skipping transport:", a)
        }
    };
    f.prototype.close = function (a, b) {
        if (a && !c.userSetCode(a))throw Error("INVALID_ACCESS_ERR");
        return this.readyState !== f.CONNECTING && this.readyState !== f.OPEN ? !1 : (this.readyState = f.CLOSING, this._didClose(a || 1E3, b || "Normal closure"), !0)
    };
    f.prototype.send = function (a) {
        if (this.readyState === f.CONNECTING)throw Error("INVALID_STATE_ERR");
        return this.readyState === f.OPEN && this._transport.doSend(c.quote("" + a)), !0
    };
    f.prototype._applyInfo = function (a, b, e) {
        this._options.info = a;
        this._options.rtt = b;
        this._options.rto = c.countRTO(b);
        this._options.info.null_origin = !m.domain;
        b = c.probeProtocols();
        this._protocols = c.detectProtocols(b, e, a)
    };
    g = f.websocket = function (a, b) {
        var e = this, d = b + "/websocket";
        "https" === d.slice(0, 5) ? d = "wss" + d.slice(5) : d = "ws" + d.slice(4);
        e.ri = a;
        e.url = d;
        e.ws = new (h.WebSocket || h.MozWebSocket)(e.url);
        e.ws.onmessage = function (a) {
            e.ri._didMessage(a.data)
        };
        e.unload_ref = c.unload_add(function () {
            e.ws.close()
        });
        e.ws.onclose = function () {
            e.ri._didMessage(c.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    g.prototype.doSend = function (a) {
        this.ws.send("[" + a + "]")
    };
    g.prototype.doCleanup = function () {
        var a = this.ws;
        a && (a.onmessage = a.onclose = null, a.close(), c.unload_del(this.unload_ref), this.unload_ref = this.ri = this.ws = null)
    };
    g.enabled = function () {
        return!!h.WebSocket || !!h.MozWebSocket
    };
    g.roundTrips = 2;
    var u = function () {
    };
    u.prototype.send_constructor = function (a) {
        this.send_buffer =
            [];
        this.sender = a
    };
    u.prototype.doSend = function (a) {
        this.send_buffer.push(a);
        this.send_stop || this.send_schedule()
    };
    u.prototype.send_schedule_wait = function () {
        var a = this, b;
        a.send_stop = function () {
            a.send_stop = null;
            clearTimeout(b)
        };
        b = c.delay(25, function () {
            a.send_stop = null;
            a.send_schedule()
        })
    };
    u.prototype.send_schedule = function () {
        var a = this;
        if (0 < a.send_buffer.length) {
            var b = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, b, function (b, d) {
                a.send_stop = null;
                !1 === b ? a.ri._didClose(1006, "Sending error " +
                    d) : a.send_schedule_wait()
            });
            a.send_buffer = []
        }
    };
    u.prototype.send_destructor = function () {
        this._send_stop && this._send_stop();
        this._send_stop = null
    };
    var Q = function (a, b, e) {
        if (!("_send_form"in this)) {
            var d = this._send_form = m.createElement("form"), f = this._send_area = m.createElement("textarea");
            f.name = "d";
            d.style.display = "none";
            d.style.position = "absolute";
            d.method = "POST";
            d.enctype = "application/x-www-form-urlencoded";
            d.acceptCharset = "UTF-8";
            d.appendChild(f);
            m.body.appendChild(d)
        }
        var d = this._send_form, f = this._send_area,
            h = "a" + c.random_string(8);
        d.target = h;
        d.action = a + "/jsonp_send?i=" + h;
        var g;
        try {
            g = m.createElement('<iframe name="' + h + '">')
        } catch (k) {
            g = m.createElement("iframe"), g.name = h
        }
        g.id = h;
        d.appendChild(g);
        g.style.display = "none";
        try {
            f.value = b
        } catch (n) {
            c.log("Your browser is seriously broken. Go home! " + n.message)
        }
        d.submit();
        var p = function (a) {
            g.onerror && (g.onreadystatechange = g.onerror = g.onload = null, c.delay(500, function () {
                g.parentNode.removeChild(g);
                g = null
            }), f.value = "", e(!0))
        };
        return g.onerror = g.onload = p, g.onreadystatechange =
            function (a) {
                "complete" == g.readyState && p()
            }, p
    }, R = function (a) {
        return function (b, c, d) {
            return(new a("POST", b + "/xhr_send", c)).onfinish = function (a, b) {
                d(200 === a || 204 === a, "http status " + a)
            }, function (a) {
                d(!1, a)
            }
        }
    }, S = function (a, b) {
        var e, d = m.createElement("script"), f, g = function (a) {
            f && (f.parentNode.removeChild(f), f = null);
            d && (clearTimeout(e), d.parentNode.removeChild(d), d.onreadystatechange = d.onerror = d.onload = d.onclick = null, d = null, b(a), b = null)
        }, h = !1, k = null;
        d.id = "a" + c.random_string(8);
        d.src = a;
        d.type = "text/javascript";
        d.charset = "UTF-8";
        d.onerror = function (a) {
            k || (k = setTimeout(function () {
                h || g(c.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
            }, 1E3))
        };
        d.onload = function (a) {
            g(c.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
        };
        d.onreadystatechange = function (a) {
            if (/loaded|closed/.test(d.readyState)) {
                if (d && d.htmlFor && d.onclick) {
                    h = !0;
                    try {
                        d.onclick()
                    } catch (b) {
                    }
                }
                d && g(c.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
            }
        };
        if ("undefined" == typeof d.async && m.attachEvent)if (/opera/i.test(navigator.userAgent))f =
            m.createElement("script"), f.text = "try{var a = document.getElementById('" + d.id + "'); if(a)a.onerror();}catch(x){};", d.async = f.async = !1; else {
            try {
                d.htmlFor = d.id, d.event = "onclick"
            } catch (n) {
            }
            d.async = !0
        }
        "undefined" != typeof d.async && (d.async = !0);
        e = setTimeout(function () {
            g(c.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
        }, 35E3);
        var p = m.getElementsByTagName("head")[0];
        return p.insertBefore(d, p.firstChild), f && p.insertBefore(f, p.firstChild), g
    }, g = f["jsonp-polling"] = function (a, b) {
        c.polluteGlobalNamespace();
        this.ri = a;
        this.trans_url = b;
        this.send_constructor(Q);
        this._schedule_recv()
    };
    g.prototype = new u;
    g.prototype._schedule_recv = function () {
        var a = this;
        a._recv_stop = T(a.trans_url + "/jsonp", S, function (b) {
            a._recv_stop = null;
            b && (a._is_closing || a.ri._didMessage(b));
            a._is_closing || a._schedule_recv()
        })
    };
    g.enabled = function () {
        return!0
    };
    g.need_body = !0;
    g.prototype.doCleanup = function () {
        this._is_closing = !0;
        this._recv_stop && this._recv_stop();
        this.ri = this._recv_stop = null;
        this.send_destructor()
    };
    var T = function (a, b, e) {
        var d =
            "a" + c.random_string(6);
        a = a + "?c=" + escape("_jp." + d);
        var f = 0;
        b = b(a, function (a) {
            switch (f) {
                case 0:
                    delete h._jp[d];
                    e(a);
                    break;
                case 1:
                    e(a);
                    f = 2;
                    break;
                case 2:
                    delete h._jp[d]
            }
        });
        h._jp[d] = b;
        return function () {
            h._jp[d] && (f = 1, h._jp[d](c.closeFrame(1E3, "JSONP user aborted read")))
        }
    }, g = function () {
    };
    g.prototype = new u;
    g.prototype.run = function (a, b, c, d, f) {
        this.ri = a;
        this.trans_url = b;
        this.send_constructor(R(f));
        this.poll = new G(a, d, b + c, f)
    };
    g.prototype.doCleanup = function () {
        this.poll && (this.poll.abort(), this.poll = null)
    };
    var y = f["xhr-streaming"] = function (a, b) {
        this.run(a, b, "/xhr_streaming", A, c.XHRCorsObject)
    };
    y.prototype = new g;
    y.enabled = function () {
        return h.XMLHttpRequest && "withCredentials"in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    };
    y.roundTrips = 2;
    y.need_body = !0;
    u = f["xdr-streaming"] = function (a, b) {
        this.run(a, b, "/xhr_streaming", A, c.XDRObject)
    };
    u.prototype = new g;
    u.enabled = function () {
        return!!h.XDomainRequest
    };
    u.roundTrips = 2;
    var H = f["xhr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", A, c.XHRCorsObject)
    };
    H.prototype =
        new g;
    H.enabled = y.enabled;
    H.roundTrips = 2;
    y = f["xdr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", A, c.XDRObject)
    };
    y.prototype = new g;
    y.enabled = u.enabled;
    y.roundTrips = 2;
    var s = function () {
    };
    s.prototype.i_constructor = function (a, b, e) {
        var d = this;
        d.ri = a;
        d.origin = c.getOrigin(e);
        d.base_url = e;
        d.trans_url = b;
        a = e + "/iframe.html";
        d.ri._options.devel && (a += "?t=" + +new Date);
        d.window_id = c.random_string(8);
        a += "#" + d.window_id;
        d.iframeObj = c.createIframe(a, function (a) {
            d.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        });
        d.onmessage_cb = c.bind(d.onmessage, d);
        c.attachMessage(d.onmessage_cb)
    };
    s.prototype.doCleanup = function () {
        if (this.iframeObj) {
            c.detachMessage(this.onmessage_cb);
            try {
                this.iframeObj.iframe.contentWindow && this.postMessage("c")
            } catch (a) {
            }
            this.iframeObj.cleanup();
            this.onmessage_cb = this.iframeObj = this.iframeObj = null
        }
    };
    s.prototype.onmessage = function (a) {
        if (a.origin === this.origin) {
            var b = a.data.slice(0, 8), c = a.data.slice(8, 9);
            a = a.data.slice(9);
            if (b === this.window_id)switch (c) {
                case "s":
                    this.iframeObj.loaded();
                    this.postMessage("s",
                        JSON.stringify([f.version, this.protocol, this.trans_url, this.base_url]));
                    break;
                case "t":
                    this.ri._didMessage(a)
            }
        }
    };
    s.prototype.postMessage = function (a, b) {
        this.iframeObj.post(this.window_id + a + (b || ""), this.origin)
    };
    s.prototype.doSend = function (a) {
        this.postMessage("m", a)
    };
    s.enabled = function () {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return("function" == typeof h.postMessage || "object" == typeof h.postMessage) && !a
    };
    var I, J = function (a, b) {
        parent !== h ? parent.postMessage(I +
            a + (b || ""), "*") : c.log("Can't postMessage, no parent window.", a, b)
    }, w = function () {
    };
    w.prototype._didClose = function (a, b) {
        J("t", c.closeFrame(a, b))
    };
    w.prototype._didMessage = function (a) {
        J("t", a)
    };
    w.prototype._doSend = function (a) {
        this._transport.doSend(a)
    };
    w.prototype._doCleanup = function () {
        this._transport.doCleanup()
    };
    c.parent_origin = void 0;
    f.bootstrap_iframe = function () {
        var a;
        I = m.location.hash.slice(1);
        c.attachMessage(function (b) {
            if (b.source === parent && ("undefined" == typeof c.parent_origin && (c.parent_origin =
                b.origin), b.origin === c.parent_origin)) {
                var e = b.data.slice(0, 8), d = b.data.slice(8, 9);
                b = b.data.slice(9);
                if (e === I)switch (d) {
                    case "s":
                        var g = JSON.parse(b), e = g[0], d = g[1];
                        b = g[2];
                        g = g[3];
                        e !== f.version && c.log('Incompatibile SockJS! Main site uses: "' + e + '", the iframe: "' + f.version + '".');
                        if (!c.flatUrl(b) || !c.flatUrl(g)) {
                            c.log("Only basic urls are supported in SockJS");
                            break
                        }
                        if (!c.isSameOriginUrl(b) || !c.isSameOriginUrl(g)) {
                            c.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([h.location.href,
                                b, g]) + ")");
                            break
                        }
                        a = new w;
                        a._transport = new w[d](a, b, g);
                        break;
                    case "m":
                        a._doSend(b);
                        break;
                    case "c":
                        a && a._doCleanup(), a = null
                }
            }
        });
        J("s")
    };
    var B = function (a, b) {
        var e = this;
        c.delay(function () {
            e.doXhr(a, b)
        })
    };
    B.prototype = new k(["finish"]);
    B.prototype.doXhr = function (a, b) {
        var e = this, d = (new Date).getTime(), f = new b("GET", a + "/info"), g = c.delay(8E3, function () {
            f.ontimeout()
        });
        f.onfinish = function (a, b) {
            clearTimeout(g);
            g = null;
            if (200 === a) {
                var c = (new Date).getTime() - d, f = JSON.parse(b);
                "object" != typeof f && (f = {});
                e.emit("finish",
                    f, c)
            } else e.emit("finish")
        };
        f.ontimeout = function () {
            f.close();
            e.emit("finish")
        }
    };
    var M = function (a) {
        var b = this, e = function () {
            var d = new s;
            d.protocol = "w-iframe-info-receiver";
            var c = function (a) {
                "string" == typeof a && "m" === a.substr(0, 1) ? (a = JSON.parse(a.substr(1)), b.emit("finish", a[0], a[1])) : b.emit("finish");
                d.doCleanup();
                d = null
            };
            d.i_constructor({_options: {}, _didClose: c, _didMessage: c}, a, a)
        };
        m.body ? e() : c.attachEvent("load", e)
    };
    M.prototype = new k(["finish"]);
    var N = function () {
        var a = this;
        c.delay(function () {
            a.emit("finish",
                {}, 2E3)
        })
    };
    N.prototype = new k(["finish"]);
    var P = function (a) {
        if (c.isSameOriginUrl(a))return new B(a, c.XHRLocalObject);
        switch (c.isXHRCorsCapable()) {
            case 1:
                return new B(a, c.XHRLocalObject);
            case 2:
                return new B(a, c.XDRObject);
            case 3:
                return new M(a);
            default:
                return new N
        }
    };
    (w["w-iframe-info-receiver"] = function (a, b, e) {
        (new B(e, c.XHRLocalObject)).onfinish = function (b, c) {
            a._didMessage("m" + JSON.stringify([b, c]));
            a._didClose()
        }
    }).prototype.doCleanup = function () {
    };
    k = f["iframe-eventsource"] = function () {
        this.protocol =
            "w-iframe-eventsource";
        this.i_constructor.apply(this, arguments)
    };
    k.prototype = new s;
    k.enabled = function () {
        return"EventSource"in h && s.enabled()
    };
    k.need_body = !0;
    k.roundTrips = 3;
    (w["w-iframe-eventsource"] = function (a, b) {
        this.run(a, b, "/eventsource", K, c.XHRLocalObject)
    }).prototype = new g;
    k = f["iframe-xhr-polling"] = function () {
        this.protocol = "w-iframe-xhr-polling";
        this.i_constructor.apply(this, arguments)
    };
    k.prototype = new s;
    k.enabled = function () {
        return h.XMLHttpRequest && s.enabled()
    };
    k.need_body = !0;
    k.roundTrips = 3;
    (w["w-iframe-xhr-polling"] = function (a, b) {
        this.run(a, b, "/xhr", A, c.XHRLocalObject)
    }).prototype = new g;
    k = f["iframe-htmlfile"] = function () {
        this.protocol = "w-iframe-htmlfile";
        this.i_constructor.apply(this, arguments)
    };
    k.prototype = new s;
    k.enabled = function () {
        return s.enabled()
    };
    k.need_body = !0;
    k.roundTrips = 3;
    (w["w-iframe-htmlfile"] = function (a, b) {
        this.run(a, b, "/htmlfile", L, c.XHRLocalObject)
    }).prototype = new g;
    var G = function (a, b, c, d) {
        this.ri = a;
        this.Receiver = b;
        this.recv_url = c;
        this.AjaxObject = d;
        this._scheduleRecv()
    };
    G.prototype._scheduleRecv = function () {
        var a = this, b = a.poll = new a.Receiver(a.recv_url, a.AjaxObject);
        b.onmessage = function (b) {
            a.ri._didMessage(b.data)
        };
        b.onclose = function (c) {
            a.poll = b = b.onmessage = b.onclose = null;
            a.poll_is_closing || ("permanent" === c.reason ? a.ri._didClose(1006, "Polling error (" + c.reason + ")") : a._scheduleRecv())
        }
    };
    G.prototype.abort = function () {
        this.poll_is_closing = !0;
        this.poll && this.poll.abort()
    };
    var K = function (a) {
        var b = this, e = new EventSource(a);
        e.onmessage = function (a) {
            b.dispatchEvent(new n("message",
                {data: unescape(a.data)}))
        };
        b.es_close = e.onerror = function (a, f) {
            var g = f ? "user" : 2 !== e.readyState ? "network" : "permanent";
            b.es_close = e.onmessage = e.onerror = null;
            e.close();
            e = null;
            c.delay(200, function () {
                b.dispatchEvent(new n("close", {reason: g}))
            })
        }
    };
    K.prototype = new r;
    K.prototype.abort = function () {
        this.es_close && this.es_close({}, !0)
    };
    var C, L = function (a) {
        var b = this;
        c.polluteGlobalNamespace();
        b.id = "a" + c.random_string(6, 26);
        a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + b.id);
        if (void 0 === C)if ("ActiveXObject"in
            h)try {
            C = !!new ActiveXObject("htmlfile")
        } catch (e) {
        } else C = !1;
        var d = C ? c.createHtmlfile : c.createIframe, f;
        h._jp[b.id] = {start: function () {
            f.loaded()
        }, message: function (a) {
            b.dispatchEvent(new n("message", {data: a}))
        }, stop: function () {
            b.iframe_close({}, "network")
        }};
        b.iframe_close = function (a, c) {
            f.cleanup();
            b.iframe_close = f = null;
            delete h._jp[b.id];
            b.dispatchEvent(new n("close", {reason: c}))
        };
        f = d(a, function (a) {
            b.iframe_close({}, "permanent")
        })
    };
    L.prototype = new r;
    L.prototype.abort = function () {
        this.iframe_close && this.iframe_close({},
            "user")
    };
    var A = function (a, b) {
        var c = this, d = 0;
        c.xo = new b("POST", a, null);
        c.xo.onchunk = function (a, b) {
            if (200 === a)for (; ;) {
                var f = b.slice(d), g = f.indexOf("\n");
                if (-1 === g)break;
                d += g + 1;
                f = f.slice(0, g);
                c.dispatchEvent(new n("message", {data: f}))
            }
        };
        c.xo.onfinish = function (a, b) {
            c.xo.onchunk(a, b);
            c.xo = null;
            c.dispatchEvent(new n("close", {reason: 200 === a ? "network" : "permanent"}))
        }
    };
    return A.prototype = new r, A.prototype.abort = function () {
        this.xo && (this.xo.close(), this.dispatchEvent(new n("close", {reason: "user"})), this.xo =
            null)
    }, f.getUtils = function () {
        return c
    }, f.getIframeTransport = function () {
        return s
    }, f
}();
"_sockjs_onload"in window && setTimeout(_sockjs_onload, 1);
"function" == typeof define && define.amd && define("sockjs", [], function () {
    return SockJS
});