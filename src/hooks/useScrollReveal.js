import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(element); // Trigger only once
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options]);

    return [ref, isVisible];
}
