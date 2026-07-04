import Breadcrumb from '../components/common/Breadcrumb';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import BlogArea from '../components/Services/BlogArea';
import PricingArea from '../components/Services/PricingArea';
import ServicesArea from '../components/Services/ServicesArea';
import VideoArea from '../components/Services/VideoArea';

const Services = () => {
    return (
        <main>
            <SEO pageTitle="Services" />
            <Header/>
            <Breadcrumb title="Services" subtitle="What we do" />
            <ServicesArea/>
            <PricingArea/>
            <VideoArea/>
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default Services;