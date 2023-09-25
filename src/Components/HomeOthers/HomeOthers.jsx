// import { useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

import { useLoaderData } from 'react-router-dom';

const HomeOthers = () => {

    const FakeData = useLoaderData()
    
//     const useInputState = (defaultValue) =>{
//         const [search, setSearch] = useState(defaultValue)

//         const handleChange = e =>{
//             setSearch(e.target.value)
//         }
//         return {search , handleChange};
//     }


    return (
        <div>
            <Banner ></Banner>
            <Card fakeData={FakeData} ></Card>
        </div>
    );
};

export default HomeOthers;