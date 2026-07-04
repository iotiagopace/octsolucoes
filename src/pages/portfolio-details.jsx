import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PortfolioDetailsArea from "../components/PortfolioDetails/PortfolioDetailsArea";
import RelatedService from "../components/PortfolioDetails/RelatedService";
import SEO from "../components/seo";


const PortfolioDetails = () => {
    return (
        <main>
            <SEO pageTitle="Portfolio Details" />
            <Header/>
            <Breadcrumb title="Case" subtitle="Case Details" />
            <PortfolioDetailsArea/>
            <RelatedService/>
            <Footer/>
        </main>
    );
};

export default PortfolioDetails;