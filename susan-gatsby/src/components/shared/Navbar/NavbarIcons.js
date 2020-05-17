import React from "react";
import SocialIcons from "constants/SocialIcons";
import styled from "styled-components";
import * as styles from "styles/styles";

const Navbar = () => {
    return (
        <IconWrapper>
            <SocialIcons />
        </IconWrapper>
    );
};

const IconWrapper = styled.div`
    ul {
        display: flex;
    }
    .social-icon {
        /* // margin-right: 2rem; */
        font-size: 1.9rem;
        cursor: pointer;
        ${styles.transFunction()};
    }
    .facebook-icon {
        color: #3b579d;
    }
    .twitter-icon {
        color: #3ab7f0;
    }
    .instagram-icon {
        color: #da5f53;
    }
    .icon:hover {
        color: ${styles.colors.mainYellow};
    }
    display: none;
    @media (min-width: 768px) {
        width: 10rem;
        display: flex;
        justify-content: space-around;
    }
`;

export default Navbar;
