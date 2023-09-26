/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../LocalStorage/LocalStorage";
import Donation from "./Donation";


const Donations = () => {
    const DonationsData = useLoaderData()

    const [showData, setShowData] = useState([]);

    const [seeMore, setSeeMore] = useState(4)

    useEffect(() => {
        const storedDonations = getStoredData()
        const storedId = storedDonations.map(ID => parseInt(ID))

        const StoredData = DonationsData.filter(data => storedId.includes(data.id))
        setShowData(StoredData)

    }, [DonationsData])


    // console.log(showData.length)
    const handleBtn = () =>{

        if(seeMore == 4){
            setSeeMore(showData.length)
        }
        else{
            setSeeMore(4)
        }
        
    }


    if(showData.length == 0){
        return (
            <div className="justify-center items-center h-screen flex ">
                <p>No Data Found</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-4  md:mx-32 mt-4 items-center">
                    {
                        showData.slice(0, seeMore).map(Data => <Donation key={Data.id} Data={Data}></Donation>)
                    }
                </div>
                <div className={`text-center ${showData.length > 4? ' ': 'hidden'}`}>
                    <button onClick={() => handleBtn()} className="btn btn-primary">{`${seeMore == 4 ? 'See More': 'See Less'}`}</button>
                </div>
            </div>
        );
    }
};

export default Donations;