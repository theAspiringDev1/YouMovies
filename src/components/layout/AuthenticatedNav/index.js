import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavStyle, NavContainer, Logo, UserIcon, Menu } from "./styles";
import ProfileDropdown from "./ProfileDropdown";
import Dropdown from "components/Dropdown";
import Search from "components/Search";
import MobileNav from "components/layout/MobileNav";
import getIcon from "util/getIcon";
import logoDir from "assets/img/logo.png";

export const LINK_ONE = [
    {
        href: (type) => `/list/${type}/trending`,
        label: "Trending",
    },
    {
        href: (type) => `/list/${type}/popular`,
        label: "Popular",
    },
    {
        href: (type) => `/list/${type}/upcoming`,
        label: "Upcoming",
    },
    {
        href: (type) => `/list/${type}/toprated`,
        label: "Top Rated",
    },
];

export const LINK_TWO = [
    {
        href: (type) => `/list/${type}/toprated`,
        label: "Top Rated",
    },
    {
        href: (type) => `/list/${type}/popular`,
        label: "Popular",
    },
    {
        href: (type) => `/list/${type}/airing`,
        label: "Airing",
    },
    {
        href: (type) => `/list/${type}/today`,
        label: "Today",
    },
];

export default function Nav() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // CLOSE THE NAV EVERYTIME THE URL CHANGES
    useEffect(() => setIsOpen(false), [location.pathname]);

    const handleClick = () => setIsOpen(true);

    return (
        <NavStyle>
            <NavContainer>
                <Link to="/" className="logo-link">
                    <Logo src={logoDir} alt="Movie Zone Logo" />
                </Link>

                <Search />

                <Dropdown type="movie" title="Movies" links={LINK_ONE} />
                <Dropdown type="tv" title="TV Shows" links={LINK_TWO} />
                <ProfileDropdown />
                <Menu onClick={handleClick}>
                    <UserIcon>
                        <use href={getIcon("menu")} />
                    </UserIcon>
                </Menu>
            </NavContainer>
            {<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}
        </NavStyle>
    );
}