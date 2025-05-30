import { useState, useEffect, useRef } from "react";

export const useInView = ()=>{
    const ref = useRef<HTMLElement | null>(null);
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> setIsIntersecting(entry.isIntersecting),
            {threshold: 0.1}
        );
        const currentElement = ref.current;

        if (currentElement) {
          observer.observe(currentElement);
        }
    
        return () => {
          if (currentElement) {
            observer.unobserve(currentElement);
          }
          observer.disconnect();
        };
    }, []);

    return [ref, isIntersecting] as const
}