
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const countingRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true;
      
      // Clear any existing interval
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      const step = Math.max(1, Math.floor(end / (duration * 60))); // frames per second approximation
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, endTime - now);
        const value = Math.max(0, Math.floor(end - (remaining / (duration * 1000)) * end));
        
        setCount(value);
        
        if (value >= end) {
          clearInterval(intervalRef.current);
          setCount(end);
        }
      }, 16); // roughly 60fps
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, end, duration]);

  return (
    <div ref={inViewRef} className="font-bold">
      {prefix}
      <span className="text-gradient">{count}</span>
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
      