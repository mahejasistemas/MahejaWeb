import React from 'react';
import './banner.css';

export default function Banner() {
    const text = "LOGÍSTICA INTEGRAL • TRANSPORTE SEGURO • COBERTURA NACIONAL • EFICIENCIA • ";
    const repeatedText = Array(4).fill(text).join("");

    return (
        <div className="banner-wrapper">
            <div className="marquee-banner">
                <div className="marquee-content">
                    <span>{repeatedText}</span>
                    <span>{repeatedText}</span>
                </div>
            </div>
        </div>
    );
}
