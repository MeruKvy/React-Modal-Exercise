import { useRef } from "react";
import { SModal, SmodalWrapper, SModalHeader } from "./modal.styled.js";
import { AiFillCloseCircle } from "react-icons/ai";
import { useOnClickOutside } from "../../hooks/useOnClickOutside.js";

export function Modal({ Visible = true, children, title, onClose }) {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => onClose());

  if (!Visible) {
    return <></>;
  }

  return (
    <SmodalWrapper>
      <SModal ref={modalRef}>
        <SModalHeader>
          <h3>{title}</h3>
          <button onClick={onClose}>
            <AiFillCloseCircle />
          </button>
        </SModalHeader>
        {children}
      </SModal>
    </SmodalWrapper>
  );
}
