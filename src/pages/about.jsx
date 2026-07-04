import AboutArea from "../components/About/AboutArea";
import CompanyAbout from "../components/About/CompanyAbout";
import HistoryArea from "../components/About/HistoryArea";
import Team from "../components/About/Team";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";


const about = () => {
    return (
        <main>
            <SEO pageTitle="About" />
            <Header/>
            <Breadcrumb title="About us" subtitle="About Company" />
            <AboutArea/>
            <HistoryArea/>
            <Team/>
            <CompanyAbout/>
            <Footer/>
        </main>
    );
};

export default about;