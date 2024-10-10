import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

    return (
        <div className="p-3">
            <h1 className="font-bold w-48">Main</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold w-48">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold w-48">Favourites</h1>
            <ul>
                <li>Liked Videos</li>
                <li>Watch Later</li>
                <li>My Playlist</li>
            </ul>
        </div>
    );
};

export default Sidebar;
