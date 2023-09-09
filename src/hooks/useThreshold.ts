import { useEffect, useState } from "react";

export default function useThreshold(defaultThreshold: number, thresholdMobile: number) {
    const [threshold, setThreshold] = useState(defaultThreshold);

    const updateThreshold = () => {
        const newThreshold = window.innerWidth < 500 ? thresholdMobile : defaultThreshold;
        setThreshold(newThreshold);
    };

    useEffect(() => {
        updateThreshold();
        window.addEventListener('resize', updateThreshold);

        return () => {
            window.removeEventListener('resize', updateThreshold);
        };
    }, []);

    return threshold;
}