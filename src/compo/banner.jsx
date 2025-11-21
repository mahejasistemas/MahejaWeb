import React from 'react';
import './banner.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Banner() {
    const text = "LOGÍSTICA INTEGRAL • TRANSPORTE SEGURO • COBERTURA NACIONAL • EFICIENCIA • ";
    const repeatedText = Array(4).fill(text).join("");
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div className={`banner-wrapper scroll-reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
            <div className="marquee-banner">
                <div className="marquee-content">
                    <span>{repeatedText}</span>
                    <span>{repeatedText}</span>
                </div>
            </div>
        </div>
    );
}
