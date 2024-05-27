import "../Card/card.css";

function Testimonials() {
    return (
        <div className="fullcard-container">
            <div
                className="fullCard"
                style={{ backgroundColor: "rgb(250, 238, 250)" }}
            >
                <div>
                    <div className="logo1">,,</div>
                    <div id="heading">Testimonials</div>
                </div>
                <br />
                <div className="content" style={{ color: "grey" }}>
                    In a fast growing and ever changing city like Bangalore, it
                    sometimes becomes very difficult to find or connect with
                    like minded people. Websites like hobbycue.com is a great
                    service which helps me get in touch with, communicate,
                    connect and exchange ideas with other dancers. It also
                    provides the extra benefit of finding products and services
                    that I can avail,which I can be assured is going to be of
                    great quality as it comes recommended by people of the
                    hobbycue community. To have dicussions, to get visibility,
                    and to be able to safely explore various hobbies and
                    activities in my city, all under one root, is an excellent
                    idea and I highly recommend it.
                </div>
                <br />
                <audio controls></audio>
            </div>
        </div>
    );
}

export default Testimonials;
