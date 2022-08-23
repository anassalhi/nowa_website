// start building apps for free section
import phones from "../../assets/preview-phone.png";
import { motion } from "framer-motion";
import "./StartBuilding.scss";
export const StartBuildingSection = () => {
  return (
    <div className="start-building">
      <div className="st-preview mara mw">
        <p>START BUILDING YOUR APP FOR FREE</p>
        <p>Sign up to get early access to our private beta</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeH3WvEL6AdKQBXMtwzpur9O1vqZKh_FUhMvH7msOnNLjQwMg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET EARLY ACCESS
        </a>
        <motion.img
          src={phones}
          alt="product preview"
          initial={{
            opacity: 0,
            cy: "100%",
          }}
          style={{}}
          whileInView={{ y: [250, 0], opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
        />
      </div>
    </div>
  );
};
