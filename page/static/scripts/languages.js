"use strict";

function pseudoUUID() {
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function download(blob, fileName = "") {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Supported languages in the application
 * @type {ReadonlyArray<string>}
 */
// const LangFilesAt = Object.freeze(
//     {
//         dev: "http://127.0.0.1:3000/github v1/static/lang",
//         web: "https://github.com/cinast/cinast/blob/fc868c03f4872758c5e697baa41a7d11cbb4418c/static/lang",
//     }[["dev", "web"][document.location.origin == "https://cinast.github.io" ? 1 : 0]]
// );
const LangFilesAt = Object.freeze("./static/lang");

/**
 * Supported languages in the application
 * @type {ReadonlyArray<string>}
 */
const Languages = Object.freeze(["[TranslationTemplate]", "zh-CN", "En"]);

/**
 * Gets the current language from document head or browser settings
 * @returns {string} Current language code
 */
let currentLang = () => document.head.lang || navigator.language;

/**
 * Object storing all loaded language files
 * @type {Object.<string, {
 *   lang: string,
 *   alliance: string[]
 *   author: string,
 *   date: string,
 *   version: string,
 *   identifier: string,
 *   description: string,
 *   translationBook: Object.<string, string>
 * }>}
 */
let LanguageFiles = {};

/**
 * Gets the language file for the current language
 * @returns {Object|undefined} Current language file or undefined if not loaded
 */
let currentLangFile = () => LanguageFiles[currentLang()];

// 预加载所有语言文件
document.addEventListener("DOMContentLoaded", () => {
    Languages.forEach((lang) => {
        if (lang !== "[TranslationTemplate]") {
            requestLangFile(lang);
        }
    });
});

/**
 * request lang file
 * @param lang which lang type have recorded in
 * @returns u can get it from `LanguageFiles[lang]`
 */
function requestLangFile(lang) {
    if (lang === "[TranslationTemplate]") return Promise.resolve(); // 跳过模板

    return fetch(`${LangFilesAt}/${lang}.json`)
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then((langData) => {
            LanguageFiles[lang] = langData;
            // 如果当前语言是刚加载的语言，立即更新 UI
            if (currentLang() === lang) updateUITranslations();
        })
        .catch((error) => console.error(`Language loading failed for ${lang}:`, error));
}

/**
 * Switches the application language
 * @param {string} lang - The language to switch to (must be one of the Languages)
 * @returns {Promise<void>}
 */
async function switchLang(lang) {
    if (lang === currentLang()) return; // 已经是当前语言，不切换
    if (!Languages.includes(lang)) return console.error(`Language ${lang} is not supported`);

    // 如果语言未加载，等待加载完成
    if (!LanguageFiles[lang]) await requestLangFile(lang);

    document.head.lang = lang;
    updateUITranslations(); // 更新 UI
}

/**
 * Updates all elements with translation keys to the current language
 */
function updateUITranslations() {
    const langFile = currentLangFile();
    if (!langFile) return;

    // 更新翻译元素并添加渐隐渐现效果
    document.querySelectorAll("[data-translation-key]").forEach((element) => {
        const key = element.getAttribute("data-translation-key");
        if (!key) return;

        // 添加动画效果
        element.style.transition = "opacity 0.3s ease";
        element.style.opacity = "0";

        const translation = langFile.translationBook[key];
        if (translation) {
            setTimeout(() => {
                element.textContent = translation;
                element.style.opacity = "1";
            }, 300);
        } else {
            console.warn(`Missing translation for key: ${key}`);
            element.style.opacity = "1";
        }
    });
}

/**
 * According to the document and generates TranslationTemplate of now u displayed
 * and u can specified the lang is it
 * @param {string[]} languages - Array of language codes to include in the template
 * @returns {Object.<string, Object>} Translation JSON template
 */
function generateTranslationTemplate(language = "[TranslationTemplate]") {
    const elements = document.querySelectorAll("[data-translation-key]");
    const translationBook = {};

    elements.forEach((element) => {
        const key = element.getAttribute("data-translation-key");
        if (key) {
            translationBook[key] = element.textContent.trim();
        }
    });

    //initialize the template
    const template = {
        lang: language,
        alliance: [language],
        author: `generated from ${document.location.href}`,
        date: new Date().toISOString().split("T")[0],
        version: `generated - ${new Date().toISOString().split("T")[0]}`,
        identifier: pseudoUUID(),
        description: "",
        translationBook: translationBook,
    };

    return template;
}

/**
 * Downloads the generated translation template as a JSON file
 * @param {string} fileName - Name of the file to download
 * @param {Object} data - JSON data to download
 */
function downloadTranslationTemplate(fileName, data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    download(blob, fileName);
}

/**
 * Download the *Translation Template* was loaded and that you want
 * @param {string[]} lang
 */
function get_TranslationTemplate_From_Loaded(lang = "[TranslationTemplate]") {
    if (!LanguageFiles[lang]) {
        // 如果模板不存在，先生成一个
        LanguageFiles[lang] = generateTranslationTemplate(lang);
    }
    const template = LanguageFiles[lang];
    if (template) {
        downloadTranslationTemplate(`${lang}_translations.json`, template);
    } else {
        console.error("Failed to generate translation template");
    }
}

// Initialize with user's preferred language or default
document.addEventListener("DOMContentLoaded", async () => {
    const preferredLang = currentLang();
    const supportedLang = Languages.find((lang) => lang === preferredLang || lang.startsWith(preferredLang.split("-")[0]));

    // 默认加载第一个支持的语言（如果 preferredLang 不支持）
    const langToLoad = supportedLang || (Languages[0] !== "[TranslationTemplate]" ? Languages[0] : Languages[1]);

    if (langToLoad) await switchLang(langToLoad);

    // 调试（DOM完全加载后）：生成翻译模板
    // LanguageFiles["[TranslationTemplate]"] = generateTranslationTemplate();
});
