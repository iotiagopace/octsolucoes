import Breadcrumb from '../components/common/Breadcrumb';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import BlogArea from '../components/Services/BlogArea';
import FactArea from '../components/Team/FactArea';
import TeamArea from '../components/Team/TeamArea';

const team = () => {
    return (
        <main>
            <SEO pageTitle="Team" />
            <Header/>
            <Breadcrumb title="Team" subtitle="Expert Team" />
            <TeamArea/>
            <FactArea/>
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default team;