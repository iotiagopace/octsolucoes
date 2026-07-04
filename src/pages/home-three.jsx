import AboutArea from "../components/HomeThree/AboutArea";
import BlogArea from "../components/HomeThree/BlogArea";
import BranAreaThree from "../components/HomeThree/BranAreaThree";
import CtaArea from "../components/HomeThree/CtaArea";
import FooterThree from "../components/HomeThree/FooterThree";
import HeaderThree from "../components/HomeThree/HeaderThree";
import HeroArea from "../components/HomeThree/HeroArea";
import PricingThree from "../components/HomeThree/PricingThree";
import ProcessArea from "../components/HomeThree/ProcessArea";
import ProjectArea from "../components/HomeThree/ProjectArea";
import ServicesArea from "../components/HomeThree/ServicesArea";
import TeamArea from "../components/HomeThree/TeamArea";
import TestimonialArea from "../components/HomeThree/TestimonialArea";
import SEO from "../components/seo";

const HomeThree = () => {
  return (
    <main>
      <SEO pageTitle="Home Three" />
      <HeaderThree />
      <HeroArea />
      <AboutArea />
      <ServicesArea />
      <ProjectArea />
      <BranAreaThree />
      <TestimonialArea />
      <PricingThree />
      <TeamArea />
      <CtaArea />
      <ProcessArea />
      <BlogArea />
      <FooterThree />
    </main>
  );
};

export default HomeThree;
