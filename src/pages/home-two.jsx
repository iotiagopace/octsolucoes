import AboutArea from "../components/HomeTwo/AboutArea";
import AppointmentCta from "../components/HomeTwo/AppointmentCta";
import BrandAreaTwo from "../components/HomeTwo/BrandAreaTwo";
import FooterTwo from "../components/HomeTwo/FooterTwo";
import HeaderTwo from "../components/HomeTwo/HeaderTwo";
import HeroSliderTwo from "../components/HomeTwo/HeroSliderTwo";
import NewsFeed from "../components/HomeTwo/NewsFeed";
import Pricing from "../components/HomeTwo/Pricing";
import ProjectArea from "../components/HomeTwo/ProjectArea";
import SmServices from "../components/HomeTwo/SmServices";
import Testimonial from "../components/HomeTwo/Testimonial";
import VideoArea from "../components/HomeTwo/VideoArea";
import SEO from "../components/seo";


const HomeTwo = () => {
    return (
        <main>
            <SEO pageTitle="Home Two" />
            <HeaderTwo/>
            <HeroSliderTwo/>
            <SmServices/>
            <AboutArea/>
            <ProjectArea/>
            <VideoArea/>
            <Testimonial/>
            <Pricing/>
            <AppointmentCta/>
            <BrandAreaTwo/>
            <NewsFeed/>
            <FooterTwo/>
        </main>
    );
};

export default HomeTwo;