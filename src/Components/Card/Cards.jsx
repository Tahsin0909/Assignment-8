/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {  Link } from "react-router-dom";

const CardData = ({ card }) => {
    console.log(card)
    const { picture, category
        , card_bg_color
        , category_bg_color, title
        , text_button_bg_color } = card
    console.log(category_bg_color)


    return (
        <Link to={ `/${card.id}`}>
            <div className="mx-4 my-4  rounded-lg shadow-lg  hover:opacity-90 " >
                <div className="w-auto">
                    <img className="w-64 md:w-80 lg:w-[400px] relative rounded-lg shadow-md h-40" src={picture} alt="" />
                </div>
                <div
                    style={{
                        backgroundColor: `${card_bg_color}80`,

                    }}
                    className={` bg-opacity-50 py-2 px-4 flex flex-col gap-1 relative `}>
                    <p
                        style={{
                            backgroundColor: `${category_bg_color}`,
                            color: `${text_button_bg_color}`
                        }}
                        className={` rounded-lg  font-semibold  text-sm  py-1 px-4 w-fit`} >{category}</p>

                    <p
                        style={{
                            color: `${text_button_bg_color}`
                        }}
                        className={` font-semibold`} >{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardData;