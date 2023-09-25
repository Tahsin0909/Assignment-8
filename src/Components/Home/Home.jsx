
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

import CardData from '../Card/Card';
import {  useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([])

   const FakeData = useLoaderData()
   useEffect( () =>{
    setData(FakeData)
   }, []
   )


// console.log(data)
return (
    <div>
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10'>
            {
                data?.map(card => <CardData key={card.id} card={card}></CardData>)
            }
        </div>
    </div>
);
};

export default Home;