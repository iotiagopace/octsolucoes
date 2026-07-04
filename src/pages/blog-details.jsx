import BlogDetailsArea from '../components/BlogDetails/BlogDetailsArea';
import Breadcrumb from '../components/common/Breadcrumb';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Blog Details" />
          <Header/>
          <Breadcrumb title="News" subtitle="News Details" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;