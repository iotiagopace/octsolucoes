import Link from "next/link";

const TeamArea = () => {
  const teamData = [
    {
      id: 1,
      img: "assets/img/team/3/team-1.jpg",
      name: "Rosalina D. William",
    },
    {
      id: 2,
      img: "assets/img/team/3/team-2.jpg",
      name: "Dr. Benjamin",
    },
    {
      id: 3,
      img: "assets/img/team/3/team-3.jpg",
      name: "Iqbal Hossain",
    },
    {
      id: 4,
      img: "assets/img/team/3/team-4.jpg",
      name: "Nico Robin",
    },
    {
      id: 5,
      img: "assets/img/team/3/team-6.jpg",
      name: "Madam Kurry",
    },
    {
      id: 6,
      img: "assets/img/team/3/team-9.jpg",
      name: "Dr. Asruk",
    },
    {
      id: 7,
      img: "assets/img/team/3/team-7.jpg",
      name: "Cralote Momo",
    },
    {
      id: 8,
      img: "assets/img/team/3/team-8.jpg",
      name: "Nami Stev",
    },
  ];
  return (
    <>
      <section className="team__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {teamData.map((team) => {
              return (
                <div key={team.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team__item-grid mb-30">
                    <div className="team__item-grid-thumb w-img">
                      <a href="#">
                        <img src={`${team.img}`} alt="team-img" />
                      </a>
                      <div className="team__info">
                        <span>ceo</span>
                        <h5>
                          <Link href="/team-details">{team.name}</Link>
                        </h5>
                      </div>
                      <div className="team__social-3">
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
