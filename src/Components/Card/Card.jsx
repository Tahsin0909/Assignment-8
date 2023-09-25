/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardData from "./Cards";


const Card = ({fakeData}) => {

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(fakeData)
    },[])
    console.log(data)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-10 mb-8'>
            {
                data?.map(card => <CardData key={card.id} card={card}></CardData>)
            }
        </div>
    );
};

export default Card;