import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: "640px",
  });
  const isTablet = useMediaQuery({
    maxWidth: "768px",
  });

  useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);
  
  return {
    isMobile: isClient ? isMobile : false,
    isTablet: isClient ? isTablet : false,
  };
}
