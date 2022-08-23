import "../../styles/home.scss";
import hero from "../../assets/hero.png";
import video from "../../assets/video.png";
import vector1 from "../../assets/Vector.png";
import vector2 from "../../assets/Vector-1.png";
import vector3 from "../../assets/Vector-2.png";
import vector4 from "../../assets/Vector-3.png";
import productFeature1 from "../../assets/feature-1.png";
import productFeature2 from "../../assets/feature-3.png";
import productFeature3 from "../../assets/feature-4.png";
import productFeature4 from "../../assets/feature-2.png";
import feature1 from "../../assets/small-feature-icon.png";
import feature2 from "../../assets/small-feature-icon (1).png";
import feature3 from "../../assets/small-feature-icon (2).png";
import feature4 from "../../assets/small-feature-icon (3).png";
import feature5 from "../../assets/small-feature-icon (4).png";
import { Footer, NavBar, StartBuildingSection } from "../../components";
import { Modal } from "../../foundation";
import { useState } from "react";
import { motion } from "framer-motion";
export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <main>
        <div className="hero-wrapper">
          <NavBar />
          <div className="hero mara mw">
            <div className="hero-text">
              <motion.h1
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
              >
                FALL IN LOVE WITH BUILDING APPS.
              </motion.h1>
              <motion.p
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
              >
                Unlock a new level of power in building native apps using the
                most flexible app building tool ever made! Nowa gives you an
                ultimate freedom to build whatever app you want ten times
                faster.
              </motion.p>
              <motion.a
                animate={{ y: [150, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{
                  once: true,
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeH3WvEL6AdKQBXMtwzpur9O1vqZKh_FUhMvH7msOnNLjQwMg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET EARLY ACCESS
              </motion.a>
            </div>
            <motion.img
              src={hero}
              alt="hero"
              className="hero-splash"
              whileInView={{ x: [400, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.75,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
            />
            <motion.img
              src={hero}
              alt="hero"
              className="hero-splash2"
              whileInView={{ y: [500, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.75,
                delay: 0.3,
              }}
              viewport={{
                once: true,
              }}
            />
          </div>
        </div>
        <div className="section-one mara mw">
          <p>BUILD APPLICATIONS FAST AND EASY</p>
          <p>Discover how it works:</p>
          <img src={video} alt="video" onClick={() => setShowModal(true)} />
          <div className="so-sponsers mara mw">
            <img src={vector4} alt="science and startups" />
            <img src={vector1} alt="berlin" />
            <img src={vector3} alt="europe union" />
            <img src={vector2} alt="esf berlin" />
          </div>
        </div>
        <div className="section-two mara mw">
          <div className="st-feature">
            <motion.div
              className="feature-desc"
              whileInView={{ x: [-250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>CREATE STUNNING UI EFFORTLESSLY</p>
              <p>
                With free-hand design approach, creating UI with Nowa feels like
                drawing on a paper! Break free from templates and limitations
                and create any design you want.
              </p>
            </motion.div>
            <motion.div
              className="feature-image"
              whileInView={{ x: [250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature1} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature">
            <motion.div
              className="feature-desc"
              whileInView={{ x: [-250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>GET THE SAME POWER OF CODE, BUT EASIER</p>
              <p>
                Have the power to build any logic in details using Nowa advanced
                drag and drop system, but much faster, easier and enjoyable than
                writing lines of boring code.
              </p>
            </motion.div>
            <motion.div
              className="feature-image"
              whileInView={{ x: [250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature2} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature">
            <motion.div
              className="feature-desc"
              whileInView={{ x: [-250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>YOUR FAVOURITE BACKEND</p>
              <p>
                Firebase, or your own API, you can easily connect your app to
                any API within a couple of clicks.
              </p>
            </motion.div>
            <motion.div
              className="feature-image"
              whileInView={{ x: [250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature3} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-feature">
            <motion.div
              className="feature-desc"
              whileInView={{ x: [-250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>YOU STILL NEED CODE? WE GOT YOU!</p>
              <p>
                You can download the full-source code for your app anytime, for
                free. Even better, you can combine Nowa and Code together: with
                Nowa Hybrid Approach, use your favorite IDE and Nowa on the same
                project simultaneously.
              </p>
            </motion.div>
            <motion.div
              className="feature-image"
              whileInView={{ x: [250, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <img src={productFeature4} alt="placeholder" />
            </motion.div>
          </div>
          <div className="st-features mara mw">
            <div className="feature-wrapper">
              <img src={feature5} alt="feature one" />
              <p>NATIVE QUALITY</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature2} alt="feature one" />
              <p>EXPORT FOR EVERY PLATFORM</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature3} alt="feature one" />
              <p>USE BOTH ON WEB AND DESKTOP</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature4} alt="feature one" />
              <p>FLUTTER BASED</p>
            </div>
            <div className="feature-wrapper">
              <img src={feature1} alt="feature one" />
              <p>MARKETPLACE</p>
            </div>
          </div>
        </div>
        <StartBuildingSection />
      </main>
      <Footer />
      <Modal
        hideModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
        forceHide={false}
        modalAnimationClass={"ami"}
        modalAnimationClassR={"amo"}
        modalContainerAnimationClass="amci"
        modalContainerAnimationClassR="amco"
      >
        <iframe
          src="https://www.youtube.com/embed/UnnskF9AIi4?autoplay=1&mute=1"
          scrolling="no"
          allowFullScreen={true}
          title="How to create a NEWS APPLICATION in NOWA"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Modal>
    </>
  );
};
