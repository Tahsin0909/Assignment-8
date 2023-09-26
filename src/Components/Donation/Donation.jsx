/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Donation = ({ Data }) => {
    console.log(Data)
    const { picture, category
        , card_bg_color
        , category_bg_color, title
        , text_button_bg_color, donate
    } = Data


    return (
        <div>
            <div
                style={{
                    backgroundColor: `${card_bg_color}80`
                }}
                className="relative flex mb-4 flex-col md:flex-row  rounded-xl gap-2 mr-3 shadow-md">
                <div className="overflow-hidden rounded-xl  ">
                    <img
                        src={picture}
                        className="lg:h-48 h-[200px] lg:w-60 md:w-52  object-cover"
                    />
                </div>
                <div className=" flex flex-col gap-2 justify-center md:p-0 p-4">
                    <div
                        style={{
                            backgroundColor: `${category_bg_color}`
                        }}
                        className="w-fit rounded-lg"
                    >
                        <p
                            style={{
                                color: `${text_button_bg_color}`
                            }}
                            className="p-2  font-semibold">
                            {category}
                        </p>
                    </div>
                    <div

                    >
                        <p className="font-semibold">
                            {title}
                        </p>
                    </div>

                    <div>

                        <p
                            style={{
                                color: `${text_button_bg_color}`
                            }}
                            className="">
                            {donate && '$'}{donate}
                        </p>
                    </div>
                    <Link to={`/${Data.id}`}>
                        <button
                            style={{
                                backgroundColor: `${text_button_bg_color}`
                            }}
                            className="btn text-white"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Donation;