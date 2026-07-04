import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";

const VideoArea = () => {
  const { show, handleClose, handleShow } = useGlobalContext();
  return (
    <>
      <section
        className="video__area pt-120 pb-120"
        style={{
          background: `url(assets/img/bg/video-bg-2.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video__content">
                <div className="video__button-3">
                  <button
                    onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default VideoArea;
