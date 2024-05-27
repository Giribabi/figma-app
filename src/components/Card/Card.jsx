/* eslint-disable jsx-a11y/anchor-is-valid */
import "./card.css";
import people from "../../assets/people.png";
import place from "../../assets/place.png";
import product from "../../assets/product.png";
import program from "../../assets/program.png";
// new CSS property "width: fit-content" to fit div size exactly to content
function Card({ type }) {
    var image = "";
    var details = "";
    var button_text = "";
    switch (type) {
        case "People":
            image = people;
            details =
                "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator";
            button_text = "Connect";
            break;
        case "Place":
            image = place;
            details =
                "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking throught hobbycue.";
            button_text = "Meet up";
            break;
        case "Product":
            image = product;
            details =
                "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.";
            button_text = "Get it";
            break;
        case "Program":
            image = program;
            details =
                "Find events, meetups and workshops related to your hobby. Register or buy tickets online.";
            button_text = "Attend";
            break;
        default:
            break;
    }
    return (
        <div className={`fullCard ${type}`}>
            <div>
                <img src={image} className="icon" alt="people_image" />
                <div id="heading">{type}</div>
            </div>
            <div className="content">{details}</div>
            <br />
            <div className="btn">{button_text}</div>
        </div>
    );
}

export default Card;
