import Link from "next/link";

const SinglePrice = ({ title, num1, num2, num3, num4, price, active }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div
          className={`${
            active
              ? "pricing__item pricing__item-active text-center mb-30"
              : "pricing__item text-center mb-30"
          }`}
        >
          <div className="pricing__item-name mb-5">
            <h5>{title}</h5>
            <p>Worth added administrations guarantee the progression study</p>
          </div>
          <div className="pricing__item-info mb-50">
            <h5>Monthly Made</h5>
            <div className="pnumber">
              <a href="#">{num1}</a>
              <a href="#">{num2}</a>
              <a href="#">{num3}</a>
              <a href="#">{num4}</a>
            </div>
          </div>
          <div className="pricing__item-price mb-30">
            <span>${price}</span>
            <p>Anytime package cancellation process</p>
          </div>
          <div
            className={`pricing__item-button ${
              active ? "tp-btn-df-active" : "tp-btn-df"
            }`}
          >
            <Link href="/pricing">
              Purchase Now <i className="fal fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePrice;
