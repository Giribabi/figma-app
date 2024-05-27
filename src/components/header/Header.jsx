/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import bookmark from "../../assets/bookmark.png";
import notifications from "../../assets/notifications.png";
import toggle from "../../assets/toggle.png";
import cart from "../../assets/cart.png";
import search from "../../assets/search.png";
import "./header.css";
import ExploreItems from "../header/ExploreItems";
import Notify from "../header/Notify";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// I used inline styling in this component
const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const Brand = styled.div`
    display: flex;
    flex-direction: row;
`;
const Logo = styled.h2`
    font-style: italic;
    border: 3px solid purple;
    font-family: sans-serif;
    display: inline-block;
    padding: 0% 5%;
    margin: 0.4em 0.1em 0.6em 0.1em;
`;
const Name = styled.h3`
    font-style: italic;
    font-family: sans-serif;
    margin: 0;
`;
const Caption = styled.div`
    width: 200px;
    font-style: italic;
    color: grey;
    font-size: small;
    margin: 0;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
`;
const Search = styled.div`
    border: none;
    margin: 0.2em;
`;
const Explore = styled.div`
    margin: 0.2em;
`;
const Hobbies = styled.div`
    margin: 0.2em;
`;
const Bookmark = styled.div`
    margin: 0.2em;
`;
const Notification = styled.div`
    margin: 0.2em;
`;
const Cart = styled.div`
    margin: 0.2em;
`;
const Signin = styled.div`
    margin: 0.2em;
`;
const Toggle = styled.div`
    margin: 0.2em;
`;
function Header() {
    const [isOpen, toggleState] = useState(false);

    const handleToggle = () => {
        toggleState(!isOpen);
    };

    const [exploreOpen, toggleExplore] = useState(false);

    const handleExplore = () => {
        toggleExplore(!exploreOpen);
    };

    console.log(isOpen);
    return (
        <div>
            <HeadingContainer>
                <Brand>
                    <Logo>h</Logo>
                    <Title>
                        <Name>
                            <span style={{ color: "aqua" }}>hobby</span>
                            <span style={{ color: "purple" }}>cue</span>
                        </Name>
                        <Caption>Your Hobby, Your Community</Caption>
                    </Title>
                </Brand>
                <Search className="search">
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Search here"
                    />
                    <img
                        src={search}
                        className="search_icon"
                        alt="search_icon"
                        height="30em"
                    />
                </Search>
                <Explore className="explore" onClick={handleExplore}>
                    <div class="dropdown">
                        <button
                            style={{
                                color: "black",
                                backgroundColor: "whitesmoke",
                                border: "none",
                            }}
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Explore
                        </button>
                    </div>
                </Explore>
                <Hobbies className="hobbies">
                    <div class="dropdown">
                        <button
                            style={{
                                color: "black",
                                backgroundColor: "whitesmoke",
                                border: "none",
                            }}
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Hobbies
                        </button>
                    </div>
                </Hobbies>
                <Bookmark className="bookmark">
                    <a>
                        <img src={bookmark} alt="bookmark" height="25em" />
                    </a>
                </Bookmark>
                <Notification>
                    <a>
                        <img
                            src={notifications}
                            alt="notifications"
                            height="30em"
                        />
                    </a>
                </Notification>
                <Cart className="cart">
                    <a>
                        <img src={cart} alt="cart" height="30em" />
                    </a>
                </Cart>
                <Toggle className="toggle_button" onClick={handleToggle}>
                    <a>
                        <img src={toggle} alt="toggle_button" height="25em" />
                    </a>
                </Toggle>
                <Signin className="signIn">
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        style={{ color: "grey", border: "1px solid grey" }}
                    >
                        Sign In
                    </button>
                </Signin>
            </HeadingContainer>
            <div className="sidebars">
                {isOpen && <Notify />}
                {exploreOpen && <ExploreItems />}
            </div>
        </div>
    );
}
export default Header;
