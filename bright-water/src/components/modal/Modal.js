import { useState, useEffect } from "react";
import Overlay from "components/modal/Overlay";
import Button from "components/Button/Button";
import FocusLock from "react-focus-lock";
import { CloseIcon } from "helpers/assets";
import classes from "./Modal.module.scss";

export default function Modal({ children, size }) {
  const [isOpen, setIsopen] = useState(false);

  // Show modal after 5s
  // If I had more time I would implement local storage hook in order to prevent displaying modal on every page load
  useEffect(() => {
    const timer = setTimeout(() => setIsopen(true), 5000);

    return () => clearTimeout(timer);
  }, [setIsopen]);

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
