import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PortfolioArea from "../components/Portfolio/PortfolioArea";
import SEO from "../components/seo";


const portfolio = () => {
    return (
        <main>
          <SEO pageTitle="Portfolio" />
          <Header/>
          <Breadcrumb title="Portfolio" subtitle="Case Study" />  
          <PortfolioArea/>
          <Footer/>
        </main>
    );
};

export default portfolio;