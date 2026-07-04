import Link from 'next/link';

const ProjectArea = () => {
  return (
    <>
      <div className="project__area fix">
        <div className="project__inner">
          <div className="project__info">
            <div className="project__info-image">
              <img src="assets/img/project/project-bg-1.jpg" alt="project-bg" />
            </div>
            <div className="project__content">
              <span>Innovation, Creation</span>
              <h5 className="p-title">
                <a href="#">Globefarer Industry Solution</a>
              </h5>
              <div className="project__button mt-40">
                <Link className="tp-btn-d" href="/services-details" >
                  Project Details
                </Link>
              </div>
            </div>
          </div>
          <div className="project__info">
            <div className="project__info-image">
              <img src="assets/img/project/project-bg-2.jpg" alt="project-bg" />
            </div>
            <div className="project__content">
              <span>Innovation, Creation</span>
              <h5 className="p-title">
                <a href="#">Troma Manufacturing Solution</a>
              </h5>
              <div className="project__button mt-40">
                <Link className="tp-btn-d" href="/services-details" >
                  Project Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectArea;
