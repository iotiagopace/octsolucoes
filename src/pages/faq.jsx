import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FaqArea from "../components/Faq/FaqArea";
import FaqAreaTwo from "../components/Faq/FaqAreaTwo";
import BrandArea from "../components/Home/BrandArea";
import SEO from "../components/seo";

const faq = () => {
  return (
    <main>
      <SEO pageTitle="Faq" />
      <Header />
      <Breadcrumb title="FAQ" subtitle="FAQ Page" />
      <FaqArea />
      <FaqAreaTwo />
      <section className="brand__area pt-110">
        <BrandArea />
      </section>
      <Footer />
    </main>
  );
};

export default faq;
