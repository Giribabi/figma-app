import "../Card/card.css";

function Add() {
    return (
        <div className="fullcard-container">
            <div className="fullCard-Add">
                <div>
                    <div className="logo">+</div>
                    <div id="heading">Add your own</div>
                </div>
                <br />
                <div className="content">
                    Are you a teacher or expert? Do you sell or rent out
                    equipment, venue or event tickets? Or, you know someone who
                    should be on hobbycue? Go ahead and Add your Own page
                </div>
                <br />
                <div className="btn">Add new</div>
            </div>
        </div>
    );
}

export default Add;
