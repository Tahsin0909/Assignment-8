/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CardData = ({ card }) => {
    console.log(card)
    const { picture, category
        , card_bg_color
        , category_bg_color, title
        , text_button_bg_color } = card
        console.log(category_bg_color)
    return (
        <div className="mx-4 my-4">
            <img className="w-64 md:w-80 lg:w-[400px]  h-40" src={picture} alt="" />
            <div
            style={{
                backgroundColor:`${card_bg_color}`
            }}
            className={` bg-opacity-50 py-2 px-4 flex flex-col gap-1 `}>
                <p 
                style={{
                    backgroundColor:`${category_bg_color}`,
                    color:`${text_button_bg_color}`
                }}
                className={`   font-semibold  text-sm  py-1 px-4 w-fit`} >{category}</p>
                <p
                style={{
                    color:`${text_button_bg_color}`
                }}
                className={` font-semibold`} >{title}</p>
            </div>
        </div>
    );
};

export default CardData;