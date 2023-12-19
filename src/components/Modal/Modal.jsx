import React, { useEffect } from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;
