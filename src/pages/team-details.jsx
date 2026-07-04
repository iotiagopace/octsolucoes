import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import TeamDetailsArea from "../components/TeamDetails/TeamDetailsArea";


const TeamDetails = () => {
    return (
        <main>
            <SEO pageTitle="Team Details" />
            <Header/>
            <Breadcrumb title="Team" subtitle="Team Details" />
            <TeamDetailsArea/>
            <Footer/>
        </main>
    );
};

export default TeamDetails;