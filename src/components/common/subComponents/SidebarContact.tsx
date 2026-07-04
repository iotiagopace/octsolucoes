
const SidebarContact = () => {
    return (
        <div className="sidebar__contact mt-30 mb-20">
            <h4>Contact Info</h4>
            <ul>
                <li className="d-flex align-items-center">
                    <div className="sidebar__contact-icon mr-15">
                        <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="sidebar__contact-text">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                        >
                            12/A, Mirnada City Tower, NYC
                        </a>
                    </div>
                </li>
                <li className="d-flex align-items-center">
                    <div className="sidebar__contact-icon mr-15">
                        <i className="far fa-phone"></i>
                    </div>
                    <div className="sidebar__contact-text">
                        <a href="tel:+012-345-6789">088889797697</a>
                    </div>
                </li>
                <li className="d-flex align-items-center">
                    <div className="sidebar__contact-icon mr-15">
                        <i className="fal fa-envelope"></i>
                    </div>
                    <div className="sidebar__contact-text">
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SidebarContact;