import React from "react";
import Button from "./Button";

const ButtonList = () => {
    const buttonsList = [
        "All",
        "Music",
        "Gaming",
        "Sports",
        "Movies",
        "Bollywood",
        "Tech",
        "Popular",
        "Comedy",
        "Horror",
    ];
    return (
        <div className="flex">
            {buttonsList.map((category, index) => {
                return <Button key={index} name={category}></Button>;
            })}
        </div>
    );
};

export default ButtonList;
