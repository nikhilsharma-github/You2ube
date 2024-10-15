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
        "Romantic",
        "Cricket",
        "Hollywood",
        "Nature",
        "News",
        "Live",
        "Recap"
    ];
    return (
        <div className="flex flex-wrap justify-center mx-auto text-white">
            {buttonsList.map((category, index) => {
                return <Button key={index} name={category}></Button>;
            })}
        </div>
    );
};

export default ButtonList;
