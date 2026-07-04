import Link from "next/link";

const SinglePricingThree = ({active,price,disClassOne,disClassTwo,yearly,df}) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className={`pricing__item-3 ${active ? 'pricing__item-3-active' : ''}
         ${df ? 'pricing__item-3-df' : ''} mb-30`}>
          <div className="sm-content sm-content-1">
            <div className="sm-content-name">
              <h5>${price}</h5>
              <span>/{yearly ? 'yearly' : 'Monthly'}</span>
            </div>
            <p className="pr-text mb-30">
              Industry allows your business technology computers to store,
              transmit.
            </p>
            <Link className={`${active ? 'tp-btn-4-active' : 'tp-btn-4'} w-100`} href="/pricing" >
               Join In This Plan     
            </Link>
          </div>
          <div className="sm-content">
            <ul>
              <li>
                Request API Integration <i className="fas fa-check"></i>
              </li>
              <li>
                IT Registration <i className="fas fa-check"></i>
              </li>
              <li className={`${disClassOne ? 'disable' : ''}`}>
                UIX Design & Development <i className="fas fa-check"></i>
              </li>
              <li className={`${disClassTwo ? 'disable' : ''}`}>
                Search Engine Optimization
                <i className="fas fa-check"></i>
              </li>
            </ul>
            <div className={`more-option${active && '-active'} mt-25 text-center`}>
              <span>30 Day Money Back</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePricingThree;
