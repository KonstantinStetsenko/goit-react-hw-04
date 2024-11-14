// ImageModal.js
import Modal from "react-modal";
import css from "./ImageModal.module.css"; // Убедитесь, что имя файла правильное

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
};

export default function ImageModal({
  photos,
  isOpen,
  onRequestClose,
  large,
  alt_description,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.Modal}
      style={customStyles}
    >
      {large && (
        <img
          src={large}
          alt={alt_description}
          className={css.image}
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div className={css.conteinerButtDesc}>
        {" "}
        <button onClick={onRequestClose} className={css.closeButton}>
          Close
        </button>{" "}
        <h3 className={css.titleDesc}>{alt_description}</h3>
      </div>
    </Modal>
  );
}
