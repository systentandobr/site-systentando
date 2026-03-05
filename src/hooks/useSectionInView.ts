import { useEffect, useRef } from 'react';

export const useSectionInView = (onInView?: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add('section-inview');
                        el.querySelectorAll('.reveal-up').forEach((child, i) => {
                            setTimeout(() => child.classList.add('active'), 80 * i);
                        });
                        onInView?.();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [onInView]);

    return ref;
};
