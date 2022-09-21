import { ElementType, FC, ReactElement, useState } from "react";
import { Modal } from "@mui/material";

const CustomModal: FC<CustomModalProps> = ({ children, Trigger }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Trigger onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {typeof children === "function"
            ? children({ closeModal: handleClose })
            : children}
        </>
      </Modal>
    </>
  );
};

interface CustomModalProps {
  children:
    | ReactElement
    | ReactElement[]
    | ((props: { closeModal: () => void }) => ReactElement);
  Trigger: ElementType;
}

export default CustomModal;
