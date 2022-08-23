// Author Yasir Kadhim
// 19/5/2022
// this code is for modal containers
// this will be used for any modal pop up
import { useEffect, useRef, useState } from "react";
import "./Modal.scss";
type Prop = {
  children: React.ReactNode;
  showModal: boolean;
  hideModal: () => void;
  modalContainerAnimationClass: string;
  modalAnimationClass: string;
  modalContainerAnimationClassR: string;
  modalAnimationClassR: string;
  forceHide: boolean;
};
export const Modal = ({
  children,
  showModal,
  hideModal,
  modalContainerAnimationClass,
  modalAnimationClass,
  modalContainerAnimationClassR,
  modalAnimationClassR,
  forceHide,
}: Prop) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [, setBuffer] = useState(false);

  function hideModalMiddleware() {
    if (modalRef.current && containerRef.current) {
      modalRef.current.classList.remove(modalAnimationClass);
      containerRef.current.classList.add(modalContainerAnimationClassR);
      containerRef.current.classList.remove(modalContainerAnimationClass);
      modalRef.current.classList.add(modalAnimationClassR);

      setBuffer((old) => !old);

      containerRef.current.classList.remove(modalContainerAnimationClass);
      modalRef.current.classList.remove(modalAnimationClass);
      containerRef.current.addEventListener(
        "animationend",
        () => {
          containerRef.current?.classList.remove(
            "SigninModal-Container-Hidden"
          );
          modalRef.current?.classList.remove(modalAnimationClassR);

          hideModal();
        },
        { once: true }
      );
    }
  }
  useEffect(() => {
    if (showModal === true) {
      containerRef.current?.classList.add(modalContainerAnimationClass);
      modalRef.current?.classList.add(modalAnimationClass);
    }
  }, [showModal, modalAnimationClass, modalContainerAnimationClass]);
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    if (forceHide) hideModalMiddleware();
    // eslint-disable-next-line
  }, [forceHide]);

  // useEffect(() => {
  //   if (showModal === true) {
  //     containerRef.current?.classList.add(modalContainerAnimationClass);
  //     modalRef.current?.classList.add(modalAnimationClass);
  //     document.documentElement.style.overflowY = "hidden";
  //   } else {
  //     document.documentElement.style.overflowY = "visible";
  //   }
  // }, [showModal, modalContainerAnimationClass, modalAnimationClass]);
  return !showModal ? (
    <></>
  ) : (
    <div
      className={"Modal-Container"}
      id="Modal-Container"
      onClick={(e) => {
        if (e.target === containerRef.current) {
          hideModalMiddleware();
        }
      }}
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div ref={modalRef} className={"Modal"}>
        {children}
      </div>
    </div>
  );
};
