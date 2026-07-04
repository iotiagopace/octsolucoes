import Link from "next/link";

const TeamArea = () => {
  const teamData = [
    {
      id: 1,
      img: "assets/img/team/2/team-02-1.jpg",
      title: "Founder",
      name: "Amonodo D. Dimolat",
    },
    {
      id: 2,
      img: "assets/img/team/2/team-02-2.jpg",
      title: "CEO",
      name: "Alonso D. Blowson",
    },
    {
      id: 3,
      img: "assets/img/team/2/team-02-3.jpg",
      title: "Designer",
      name: "Miranda H. Halim",
    },
    {
      id: 4,
      img: "assets/img/team/2/team-02-4.jpg",
      title: "Architect",
      name: "Iqbal Hossain",
    },
  ];
  return (
    <>
      <section className="team__area grey-bg-5 pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="section__wrapper section__wrapper-2 mb-30">
                <span className="st-meta-2">Team</span>
                <h4 className="section__title">Our experts team</h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4">
              <div className="team__button text-sm-end">
                <Link className="tp-btn" href="/team-details" >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            {teamData.map((team) => {
              return (
                <div key={team.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="team__item-box mb-30">
                    <div className="image w-img">
                      <Link href="/team-details">
                        <img src={`${team.img}`} alt="team-img" />
                      </Link>
                    </div>
                    <div className="member__info">
                      <span>{team.title}</span>
                      <h6 className="m-name">
                        <Link href="/team-details">{team.name}</Link>
                      </h6>
                    </div>
                    <div className="team__social-2">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-behance"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
