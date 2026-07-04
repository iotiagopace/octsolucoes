
const BranAreaThree = () => {
  const brandData = [
    {
      id: 1,
      img: "assets/img/brand/brand-1.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 2,
      img: "assets/img/brand/brand-2.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 3,
      img: "assets/img/brand/brand-3.png",
      brandClass:
        "brand__image-item brand__image-item-3 brand__image-item-br brand__image-item-bb",
    },
    {
      id: 4,
      img: "assets/img/brand/brand-4.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-bb",
    },
    {
      id: 5,
      img: "assets/img/brand/brand-5.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 6,
      img: "assets/img/brand/brand-6.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 7,
      img: "assets/img/brand/brand-7.png",
      brandClass: "brand__image-item brand__image-item-3 brand__image-item-br",
    },
    {
      id: 8,
      img: "assets/img/brand/brand-8.png",
      brandClass: "brand__image-item brand__image-item-3",
    },
  ];
  return (
    <>
      <section className="brand__area-3 brand-border">
        <div className="container">
          <div className="brand__wrapper">
            <div className="row g-0">
              {brandData.map((brand) => {
                return (
                  <div
                    key={brand.id}
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                  >
                    <div className={`${brand.brandClass}`}>
                      <a href="#">
                        <img src={`${brand.img}`} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranAreaThree;
