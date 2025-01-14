import PropTypes from "prop-types";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="w-fit h-fit">{children}</div>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
