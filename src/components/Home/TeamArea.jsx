import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Autoplay } from "swiper/modules";

const TeamArea = () => {
  const teamData = [
    {
      id: 1,
      img: "assets/img/team/team-5.jpg",
      title: "Head Of Idea",
      name: "Alonso D. Dowson",
    },
    {
      id: 2,
      img: "assets/img/team/team-4.jpg",
      title: "Ceo Of Cmt",
      name: "Angliya Willam",
    },
    {
      id: 3,
      img: "assets/img/team/team-2.jpg",
      title: "Head Of Instractor",
      name: "Josep D. Maxson",
    },
    {
      id: 4,
      img: "assets/img/team/team-3.jpg",
      title: "Head Of Art",
      name: "Iqbal Hossain",
    },
    {
      id: 5,
      img: "assets/img/team/team-1.jpg",
      title: "Head Of Art",
      name: "Sanji Maxspn",
    },
    {
      id: 6,
      img: "assets/img/team/team-6.jpg",
      title: "Head Of Creative",
      name: "Andrew Woon",
    },
  ];
  return (
    <>
      <section className="team__area pb-120">
        <div className="team__slider swiper-container">
          <Swiper
            //   spaceBetween={30}
            slidesPerView={5}
            loop={true}
            className="swiper-wrapper"
            autoplay={{ delay: 6000 }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
          >
            {teamData.map((team) => {
              return (
                <SwiperSlide key={team.id}>
                  <div className="team__item ">
                    <div className="team__image w-img">
                      <Link href="/team-details">
                        <img src={`${team.img}`} alt="" />
                      </Link>
                      <div className="team__content">
                        <span>{team.title}</span>
                        <h5>
                          <Link href="/team-details">{team.name}</Link>
                        </h5>
                      </div>
                      <div className="team__social">
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
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
