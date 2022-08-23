import { useState } from "react";
import { Modal } from "../../foundation";

type buttonProps = {
  text: string;
  callback: () => void;
  hide: boolean;
};
type Props = {
  visible?: boolean;
  children?: React.ReactNode;
  title?: string;
  okButtonProps: buttonProps;
  cancelButtonProps: buttonProps;
};
export function MessageModal({
  visible = false,
  children,
  title = "",
  cancelButtonProps = {
    callback: () => {},
    hide: false,
    text: "cancel",
  },
  okButtonProps = {
    callback: () => {},
    hide: false,
    text: "ok",
  },
}: Props) {
  const [forceHide, setForceHide] = useState(false);
  return (
    <Modal
      hideModal={() => {
        cancelButtonProps.callback();
        setForceHide(false);
      }}
      showModal={visible}
      forceHide={forceHide}
      modalAnimationClass={"amMessageIn"}
      modalAnimationClassR={"amMessageOut"}
      modalContainerAnimationClass="amci"
      modalContainerAnimationClassR="amco"
    >
      <div className="messageM">
        <div className="m-h">
          {title}
          <button className="m-e">X</button>
        </div>
        <div className="m-b">{children}</div>
        <div className="m-f">
          <button
            hidden={cancelButtonProps.hide}
            onClick={() => {
              cancelButtonProps.callback();
            }}
          >
            {cancelButtonProps.text}
          </button>
          <button
            hidden={okButtonProps.hide}
            onClick={() => {
              okButtonProps.callback();
            }}
          >
            {okButtonProps.text}
          </button>
        </div>
      </div>
    </Modal>
  );
}
