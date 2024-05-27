/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const MyList = styled.div`
    position: absolute;
    width: 100px;
    left: 45vw;
    top: 50px;
`;
const MyItem = styled.div`
    display: block;
    width: 100px;
    border: 0.5px solid grey;
    padding: 8% 12%;
    background-color: rgb(241, 241, 241);
`;

function ExploreItems() {
    const notifications = ["Explore", "Hobbies", "Bookmarks", "Cart"];
    return (
        <MyList>
            {notifications.map((item) => (
                <MyItem>{item}</MyItem>
            ))}
        </MyList>
    );
}
export default ExploreItems;
