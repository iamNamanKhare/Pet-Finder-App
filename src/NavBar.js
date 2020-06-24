import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
    const [padding] = useState(15);
    return (
        <header
            css={css`
                background-color: ${colors.dark};
                padding: ${padding}px;
            `}
        >
            <Link to="/">Adopt Me!</Link>
            <span
                aria-label="logo"
                role="img"
                css={css`
                    font-size: 60px;
                `}
            >
                🐕
            </span>
        </header>
    );
};

export default NavBar;
