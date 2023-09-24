/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CardData = ({ card }) => {
    console.log(card)
    const { picture, category
        , card_bg_color
        , category_bg_color, title
        , text_button_bg_color } = card
        console.log(text_button_bg_color)
    return (
        <div className="mx-10">
            <img className="w-64 md:w-72 lg:w-[400px]  h-40" src={picture} alt="" />
            <div className={`bg-[${card_bg_color}]  p-2 flex flex-col gap-2 border-2 border-red-700`}>
                <p className={`text-[${text_button_bg_color}] `}>{category}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default CardData;