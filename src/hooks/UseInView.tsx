import { useState, useEffect, useRef } from "react";

export const useInView = ()=>{
    const ref = useRef(null)
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> setIsIntersecting(entry.isIntersecting),
            {threshold: 0.1}
        );

        if(ref.current) observer.observe(ref.current);
        return ()=> observer.disconnect();
    }, []);

    return [ref, isIntersecting] as const
}