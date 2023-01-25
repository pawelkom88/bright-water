import { useState, useEffect } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import Overlay from "components/modal/Overlay";
import Button from "components/Button/Button";
import FocusLock from "react-focus-lock";
import { CloseIcon } from "helpers/assets";
import classes from "./Modal.module.scss";

export default function Modal({ children, size }) {
  const [value, setValue] = useLocalStorage("wasDisplayed", false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      setValue(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setIsOpen, setValue, value]);

  function closeModal() {
    setIsOpen(false);
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
