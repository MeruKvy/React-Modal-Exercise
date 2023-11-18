import { SModal, SmodalWrapper, SModalHeader } from "./modal.styled.js";
import { AiFillCloseCircle } from "react-icons/ai";

export function Modal({ Visible = true, children, title, onClose }) {
  if (!Visible) {
    return <></>;
  }

  return (
    <SmodalWrapper>
      <SModal>
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
