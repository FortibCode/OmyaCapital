import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, translations } from '@/i18n/translations';

const STORAGE_KEY = 'omya_lang';
const SUPPORTED_CODES = SUPPORTED_LANGUAGES.map((l) => l.code);

const LanguageContext = createContext(null);

function detectInitialLanguage() {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_CODES.includes(stored)) return stored;

    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED_CODES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
}

function resolvePath(dict, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
}

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(detectInitialLanguage);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, lang);
        }
    }, [lang]);

    const setLang = (nextLang) => {
        if (SUPPORTED_CODES.includes(nextLang)) {
            setLangState(nextLang);
        }
    };

    const value = useMemo(() => {
        const dict = translations[lang] || translations[DEFAULT_LANGUAGE];

        const t = (path) => {
            const found = resolvePath(dict, path);
            if (found !== undefined) return found;

            const fallback = resolvePath(translations[DEFAULT_LANGUAGE], path);
            return fallback !== undefined ? fallback : path;
        };

        return {
            lang,
            setLang,
            t,
            languages: SUPPORTED_LANGUAGES,
        };
    }, [lang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
