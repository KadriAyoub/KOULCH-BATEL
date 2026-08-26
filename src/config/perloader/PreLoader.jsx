import { useGSAP } from "@gsap/react";
import { preLoaderAnim } from "../../components/animation/GsabPreL";
import "./PreLoader.css";

export default function PreLoader() {
  const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

  useGSAP(() => {
    if (!hasSeenPreloader) {
      preLoaderAnim(() => {
        sessionStorage.setItem("hasSeenPreloader", "true");
      });
    }
  }, []);

  if (hasSeenPreloader) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="pre-texts-container">
        <div className="text-line">
          <span>Welcome to</span>
        </div>

        <div className="text-line">
          <span>Koulch Batel</span>
        </div>

        <div className="text-line">
          <span>Website</span>
        </div>
      </div>
    </div>
  );
}
