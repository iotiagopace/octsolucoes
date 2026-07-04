import { useState } from "react";
import Link from "next/link";
import portfolioData from "../../data/portfolioData";
import { motion } from "framer-motion";

const portfolioItems = portfolioData;
const uniquePortfolioItem = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioArea = () => {
  //  filterPortfolioItem
  const [filterPortfolioItem, setFilterPortfolioItem] =
    useState(uniquePortfolioItem);
  //   active button
  const [active, setIsActive] = useState("all");
  //   handleFilterPortfolio
  const handleFilterPortfolio = (category) => {
    setIsActive(category);
    if (category === "all") {
      setFilterPortfolioItem(uniquePortfolioItem);
    } else {
      const filterItems = portfolioItems.filter(
        (items) => items.category === category
      );
      setFilterPortfolioItem(filterItems);
    }
  };
  return (
    <>
      <section className="portfolio-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            {/* <!-- START PORTFOLIO FILTER AREA --> */}
            <div className="col-12">
              <div className="text-center">
                <div className="portfolio-filter mb-40">
                  <button
                    onClick={() => handleFilterPortfolio("all")}
                    className={`${active === "all" ? "active" : ""}`}
                  >
                    All Works
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Industry")}
                    className={`${active === "Industry" ? "active" : ""}`}
                  >
                    Industry
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("Manufacturing")}
                    className={`${active === "Manufacturing" ? "active" : ""}`}
                  >
                    Manufacturing
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("RennovaTion")}
                    className={`${active === "RennovaTion" ? "active" : ""}`}
                  >
                    Rennova tion
                  </button>
                  <button
                    onClick={() => handleFilterPortfolio("MaterialsMaking")}
                    className={`${
                      active === "MaterialsMaking" ? "active" : ""
                    }`}
                  >
                    Materials Making
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- END PORTFOLIO FILTER AREA --> */}
          </div>

          <motion.div layout id="portfolio-grid" className="row">
            {filterPortfolioItem.map((portfolio) => (
              <motion.div
                key={portfolio.id}
                className="col-lg-4 col-md-6"
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="portfolio-item mb-30">
                  <div className="portfolio-wrapper">
                    <div className="portfolio-image w-img">
                      <img src={`${portfolio.img}`} alt="" />
                    </div>
                    <div className="portfolio-caption">
                      <p>Industry, Manufacturing</p>
                      <h6>
                        <a href="#">{portfolio.title}</a>
                      </h6>
                    </div>
                    <div className="portfolio-caption-top">
                      <p>
                        <a href="#">Industry, Manufacturing</a>
                      </p>
                      <h6>
                        <Link href="/portfolio-details">{portfolio.title}</Link>
                      </h6>
                    </div>
                    <div className="portfolio-caption-bottom">
                      <Link href="/portfolio-details">
                          <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="more-pt-button text-center mt-10">
            <Link className="tp-btn" href="/portfolio">
                Load More <i className="fa-light fa-plus"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioArea;
