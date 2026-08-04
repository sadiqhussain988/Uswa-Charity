import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AosInit() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

export default AosInit;
