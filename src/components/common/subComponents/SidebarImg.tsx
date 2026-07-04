import { PhotoView } from "react-photo-view";
import PhotoProviderWrapper from "../../../provider/PhotoProviderWrapper";

interface SidebarImgProps {
    sidebarTwo: boolean;
    setShowSidebar: (value: boolean) => void;
};

const galleryImages = [
    {
        id: 1,
        img: "assets/img/gallery/gal-1.jpg",
    },
    {
        id: 2,
        img: "assets/img/gallery/gal-2.jpg",
    },
    {
        id: 3,
        img: "assets/img/gallery/gal-3.jpg",
    },
    {
        id: 4,
        img: "assets/img/gallery/gal-4.jpg",
    },
    {
        id: 5,
        img: "assets/img/gallery/gal-5.jpg",
    },
    {
        id: 6,
        img: "assets/img/gallery/gal-6.jpg",
    },
];

const SidebarImg = ({ sidebarTwo, setShowSidebar }: SidebarImgProps) => {
    return (
        <div
            className={`sidebar__img d-none ${sidebarTwo ? "d-xl-block" : "d-lg-block"
                } mb-20`}
        >
            <div className="row gx-2">
                <PhotoProviderWrapper>
                    {galleryImages.map((image) => (
                        <div key={image.id} className="col-4">
                            <div
                                onClick={() => setShowSidebar(false)}
                                className="sidebar__single-img w-img mb-10"
                            >
                                <button className="popup-image">
                                    <PhotoView src={image.img}>
                                        <img src={image.img} alt="gallery image" />
                                    </PhotoView>
                                </button>
                            </div>
                        </div>
                    ))}
                </PhotoProviderWrapper>
            </div>
        </div>
    );
};

export default SidebarImg;