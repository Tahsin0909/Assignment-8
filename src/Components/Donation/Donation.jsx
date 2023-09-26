import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Donation = () => {
    const DonationData = useLoaderData()
    console.log(DonationData)           

    const [showData, setShowData] = useState()
    



    return (
        <div>
            <p>Hi donation</p>
        </div>
    );
};

export default Donation;