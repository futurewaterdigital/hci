'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo');
        if (scrollTo) {
            let elementId = '';
            if (scrollTo === 'form') {
                elementId = 'form';
            } else if (scrollTo === 'doctors') {
                elementId = 'doctors-section'; // Assuming an ID for the doctors section
            } else if (scrollTo === 'hospital') {
                elementId = 'hospital-section'; // Assuming an ID for the hospital section
            }

            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    // Use a timeout to ensure the element is rendered and the layout is stable
                    // This is particularly important for mobile browsers and dynamic content
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        }
    }, [searchParams]);

    return null; // This component doesn't render any UI
} 