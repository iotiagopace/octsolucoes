import { Modal } from "react-bootstrap";

const VideoModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <div className="video-modal-wrapper">
              <p>
                <iframe
                  src="https://www.youtube.com/embed/LQmTKxI4Wn4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;
