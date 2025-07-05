"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CSS Refr Module - Provides dynamic CSS property referencing
 */
var CSSRefr = /** @class */ (function () {
    function CSSRefr() {
        this.dynamicSheets = [];
        this.observer = new MutationObserver(this.handleMutations.bind(this));
        this.init();
    }
    /**
     * Initialize the module
     */
    CSSRefr.prototype.init = function () {
        this.processRefrReplacements();
        this.setupDynamicObservers();
    };
    /**
     * Process static refr() replacements
     */
    CSSRefr.prototype.processRefrReplacements = function () {
        for (var _i = 0, _a = Array.from(document.styleSheets); _i < _a.length; _i++) {
            var sheet = _a[_i];
            try {
                var rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                for (var _b = 0, rules_1 = rules; _b < rules_1.length; _b++) {
                    var rule = rules_1[_b];
                    if (rule.type === CSSRule.STYLE_RULE && rule.cssText.includes("refr($self")) {
                        this.processRule(rule);
                    }
                }
            }
            catch (e) {
                console.warn("无法访问样式表:", e);
            }
        }
    };
    /**
     * Set up observers for dynamic elements
     */
    CSSRefr.prototype.setupDynamicObservers = function () {
        var _this = this;
        $('style, link[rel="stylesheet"]').each(function (_, el) {
            try {
                var sheet = el.sheet;
                if (sheet && sheet.cssRules) {
                    var rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                    for (var _i = 0, rules_2 = rules; _i < rules_2.length; _i++) {
                        var rule = rules_2[_i];
                        if (rule.type === CSSRule.STYLE_RULE && rule.cssText.includes("--referer-dynamic: 1")) {
                            _this.dynamicSheets.push(sheet);
                            break;
                        }
                    }
                }
            }
            catch (e) { }
        });
        this.dynamicSheets.forEach(function (sheet) {
            try {
                var rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                for (var _i = 0, rules_3 = rules; _i < rules_3.length; _i++) {
                    var rule = rules_3[_i];
                    var styleRule = rule;
                    if (rule.type === CSSRule.STYLE_RULE && styleRule.cssText.includes("refr(")) {
                        $(styleRule.selectorText).each(function (_, element) {
                            _this.observer.observe(element, {
                                attributes: true,
                                attributeFilter: ["style", "class"],
                            });
                        });
                    }
                }
            }
            catch (e) { }
        });
    };
    /**
     * Handle DOM mutations
     */
    CSSRefr.prototype.handleMutations = function (mutations) {
        var _this = this;
        mutations.forEach(function (mutation) {
            if (mutation.type === "attributes") {
                _this.dynamicSheets.forEach(function (sheet) {
                    try {
                        var rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                        for (var _i = 0, rules_4 = rules; _i < rules_4.length; _i++) {
                            var rule = rules_4[_i];
                            var styleRule = rule;
                            if (rule.type === CSSRule.STYLE_RULE &&
                                styleRule.cssText.includes("refr(") &&
                                styleRule.selectorText &&
                                $(mutation.target).is(styleRule.selectorText)) {
                                _this.processRule(styleRule);
                            }
                        }
                    }
                    catch (e) { }
                });
            }
        });
    };
    /**
     * Process a single CSS rule
     */
    CSSRefr.prototype.processRule = function (rule) {
        $(rule.selectorText).each(function (_, element) {
            var newCSS = rule.cssText.replace(/refr\(\$self@([^)]+)\)/g, function (match, attrName) {
                try {
                    attrName = attrName.trim();
                    var value = void 0;
                    if (attrName === "textContent") {
                        value = element.textContent;
                    }
                    else if (attrName === "value" && "value" in element) {
                        value = element.value;
                    }
                    else if (attrName.startsWith("style.")) {
                        var styleProp = attrName.substring(6);
                        value = window.getComputedStyle(element).getPropertyValue(styleProp);
                    }
                    else {
                        value = $(element).attr(attrName);
                    }
                    return value ? "\"".concat(value.replace(/"/g, '\\"'), "\"") : '""';
                }
                catch (e) {
                    console.warn("\u5904\u7406refr($self@".concat(attrName, ")\u5931\u8D25:"), e);
                    return match;
                }
            });
        });
    };
    /**
     * Replace refr functions in CSS text
     */
    CSSRefr.prototype.replaceRefrFunctions = function (cssText) {
        return cssText.replace(/refr\(\"([^)]+)\"\)/g, function (match, expr) {
            if (cssText.includes("--dynamic:"))
                return match;
            var parts = expr.split("@");
            if (parts.length < 2)
                return "/* \u65E0\u6548\u8868\u8FBE\u5F0F: ".concat(expr, " */");
            var selector = parts[0].trim();
            var attr = parts[1].trim();
            try {
                var element = document.querySelector(selector);
                if (!element)
                    return "/* \u5143\u7D20\u672A\u627E\u5230: ".concat(selector, " */");
                var value = void 0;
                if (attr === "textContent") {
                    value = element.textContent;
                }
                else if (attr === "value" && "value" in element) {
                    value = element.value;
                }
                else if (attr.startsWith("style.")) {
                    var styleProp = attr.substring(6);
                    value = window.getComputedStyle(element).getPropertyValue(styleProp);
                }
                else {
                    value = element.getAttribute(attr);
                }
                return value ? "\"".concat(value.replace(/"/g, '\\"'), "\"") : '""';
            }
            catch (e) {
                console.warn("\u5904\u7406refr(\"".concat(expr, "\")\u5931\u8D25:"), e);
                return match;
            }
        });
    };
    return CSSRefr;
}());
// Export as module
exports.default = CSSRefr;
// Initialize automatically when jQuery is ready
$(function () {
    new CSSRefr();
});
