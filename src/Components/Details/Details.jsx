/* eslint-disable no-unused-vars */

import { useLoaderData, useParams } from "react-router-dom";
 import { setStoredData } from "../LocalStorage/LocalStorage";
const Details = () => {
    const detailsData = useLoaderData()

    const id = useParams()
    const DonateID = id.id
    // console.log(DonateID)

    // console.log(detailsData)

    const detail = detailsData.find(Id => Id.id == DonateID)
    // console.log(detail)



    const handleBtn = () =>{
        setStoredData(DonateID);
    }



    return (
        <div className="lg:mx-32 md:mx-8 mx-[5px]  lg:mt-4 mt-2 mb-10">
            <div>
                <img className="md:w-full w-[300px] md:h-[500px] h-[300px] " src={detail.picture} alt="" />
                <div className="bg-[#00000076] lg:w-[1265px] md:w-[705px] w-[300px] py-2  md:py-6 px-4 absolute lg:bottom-[104px] md:bottom-[27px] bottom-[228px]  " >
                    <button onClick={() => handleBtn()}
                        style={{
                            backgroundColor: `${detail.text_button_bg_color}`
                        }} className={`btn text-white`}>

                        Donate {detail.donate && '$'}{detail.donate}
                    </button>
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <p className="font-bold text-2xl">{detail.title}</p>
                <p className="">{detail.description}</p>
            </div>
        </div >
    );
};

export default Details;