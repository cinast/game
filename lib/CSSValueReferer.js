/**
 * CSS Refr Module - Provides dynamic CSS property referencing
 */
class CSSRefr {
    constructor() {
        this.dynamicSheets = [];
        this.observer = new MutationObserver(this.handleMutations.bind(this));
        this.init();
    }
    /**
     * Initialize the module
     */
    init() {
        this.processRefrReplacements();
        this.setupDynamicObservers();
    }
    /**
     * Process static refr() replacements
     */
    processRefrReplacements() {
        for (let sheet of Array.from(document.styleSheets)) {
            try {
                const rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                for (let rule of rules) {
                    if (rule.type === CSSRule.STYLE_RULE && rule.cssText.includes("refr($self")) {
                        this.processRule(rule);
                    }
                }
            } catch (e) {
                console.warn("无法访问样式表:", e);
            }
        }
    }
    /**
     * Set up observers for dynamic elements
     */
    setupDynamicObservers() {
        $('style, link[rel="stylesheet"]').each((_, el) => {
            try {
                const sheet = el.sheet;
                if (sheet && sheet.cssRules) {
                    const rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                    for (let rule of rules) {
                        if (rule.type === CSSRule.STYLE_RULE && rule.cssText.includes("--referer-dynamic: 1")) {
                            this.dynamicSheets.push(sheet);
                            break;
                        }
                    }
                }
            } catch (e) {}
        });
        this.dynamicSheets.forEach((sheet) => {
            try {
                const rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                for (let rule of rules) {
                    const styleRule = rule;
                    if (rule.type === CSSRule.STYLE_RULE && styleRule.cssText.includes("refr(")) {
                        $(styleRule.selectorText).each((_, element) => {
                            this.observer.observe(element, {
                                attributes: true,
                                attributeFilter: ["style", "class"],
                            });
                        });
                    }
                }
            } catch (e) {}
        });
    }
    /**
     * Handle DOM mutations
     */
    handleMutations(mutations) {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
                this.dynamicSheets.forEach((sheet) => {
                    try {
                        const rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
                        for (let rule of rules) {
                            const styleRule = rule;
                            if (
                                rule.type === CSSRule.STYLE_RULE &&
                                styleRule.cssText.includes("refr(") &&
                                styleRule.selectorText &&
                                $(mutation.target).is(styleRule.selectorText)
                            ) {
                                this.processRule(styleRule);
                            }
                        }
                    } catch (e) {}
                });
            }
        });
    }
    /**
     * Process a single CSS rule
     */
    processRule(rule) {
        $(rule.selectorText).each((_, element) => {
            const newCSS = rule.cssText.replace(/refr\(\$self@([^)]+)\)/g, (match, attrName) => {
                try {
                    attrName = attrName.trim();
                    let value;
                    if (attrName === "textContent") {
                        value = element.textContent;
                    } else if (attrName === "value" && "value" in element) {
                        value = element.value;
                    } else if (attrName.startsWith("style.")) {
                        const styleProp = attrName.substring(6);
                        value = window.getComputedStyle(element).getPropertyValue(styleProp);
                    } else {
                        value = $(element).attr(attrName);
                    }
                    return value ? `"${value.replace(/"/g, '\\"')}"` : '""';
                } catch (e) {
                    console.warn(`处理refr($self@${attrName})失败:`, e);
                    return match;
                }
            });
        });
    }
    /**
     * Replace refr functions in CSS text
     */
    replaceRefrFunctions(cssText) {
        return cssText.replace(/refr\(\"([^)]+)\"\)/g, (match, expr) => {
            if (cssText.includes("--dynamic:")) return match;
            const parts = expr.split("@");
            if (parts.length < 2) return `/* 无效表达式: ${expr} */`;
            const selector = parts[0].trim();
            const attr = parts[1].trim();
            try {
                const element = document.querySelector(selector);
                if (!element) return `/* 元素未找到: ${selector} */`;
                let value;
                if (attr === "textContent") {
                    value = element.textContent;
                } else if (attr === "value" && "value" in element) {
                    value = element.value;
                } else if (attr.startsWith("style.")) {
                    const styleProp = attr.substring(6);
                    value = window.getComputedStyle(element).getPropertyValue(styleProp);
                } else {
                    value = element.getAttribute(attr);
                }
                return value ? `"${value.replace(/"/g, '\\"')}"` : '""';
            } catch (e) {
                console.warn(`处理refr("${expr}")失败:`, e);
                return match;
            }
        });
    }
}

// Initialize automatically when jQuery is ready
$(function () {
    new CSSRefr();
});

window.CSSRefr = CSSRefr;
