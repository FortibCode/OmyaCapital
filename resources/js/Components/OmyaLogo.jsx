import React from 'react';

const SOURCES = {
    dark: '/images/omya-capital-logo.png',
    light: '/images/omya-capital-logo-white.png',
};

export default function OmyaLogo({ variant = 'dark', className = '', height = 40 }) {
    const src = SOURCES[variant] || SOURCES.dark;

    return (
        <div className={`inline-flex items-center select-none ${className}`}>
            <img
                src={src}
                alt="OMYA CAPITAL"
                style={{ height }}
                className="w-auto object-contain"
                draggable={false}
            />
        </div>
    );
}
