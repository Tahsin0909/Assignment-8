// import { useState } from "react";
import Banner from "../Banner/Banner";
// import Card from "../Card/Card";

import { useLoaderData } from 'react-router-dom';

const HomeOthers = () => {

    const FakeData = useLoaderData()
    


    return (
        <div>
            <Banner fakeData={FakeData} ></Banner>
            {/* <Card fakeData={FakeData} ></Card> */}
        </div>
    );
};

export default HomeOthers;