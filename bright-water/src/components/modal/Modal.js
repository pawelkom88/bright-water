import { useState } from "react";
import Overlay from "components/modal/Overlay";
import Button from "components/Button/Button";
import classes from "./Modal.module.scss";
import FocusLock from "react-focus-lock";
import { CloseIcon } from "helpers/assets";

export default function Modal({ children, size }) {
  const [isOpen, setIsopen] = useState(true);

  function closeModal() {
    setIsopen(false);
  }

  return (
    <>
      {isOpen && (
        <Overlay onClose={closeModal}>
          <FocusLock>
            <dialog
              style={{ height: `${size}` }}
              className={classes.modal}
              onClick={e => e.stopPropagation()}
              open>
              <Button className={classes.button} onClick={closeModal}>
                <img src={CloseIcon.src} alt={CloseIcon.alt} />
              </Button>
              {children}
            </dialog>
          </FocusLock>
        </Overlay>
      )}
    </>
  );
}
