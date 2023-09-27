/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Banner = ({ fakeData }) => {

    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [search, setSearch] = useState(' ');

    const handleSearch = e => {
        e.preventDefault()
        setSearch(e.target.category.value)
    }

    useEffect(() => {
        if (search == ' ') {
            setData(fakeData)
        }
        else {
            setNewData(fakeData)
            const filteredData = newData.filter((item) =>
                item.category.toLowerCase().includes(search.toLowerCase())
            );
            setData(filteredData);
        }


    }, [search, fakeData, newData])


    return (
        <div className=" lg:h-[600px] h-[300px]">
            <div className="absolute top-0 ">
                <img className="w-screen lg:h-[600px] h-[300px] opacity-50" src={'https://i.ibb.co/8YNchrV/banner.jpg'} alt="" />
            </div>
            <div className=" flex flex-col justify-center h-[250px] items-center gap-8 relative lg:top-32">
                <p className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-center font-bold text-xl md:text-2xl lg:text-4xl">We Grow By Helping People In Need</p>
                <form onSubmit={handleSearch}>
                    <div className="flex gap-2  lg:gap-4 ">
                        <input name="category" type="search" placeholder="category" className="input input-bordered input-info lg:w-96 md:w-64 w-40 h-10  lg:h-14 " />
                        <input type="submit" value="Search" className="bg-blue-500 p-2 rounded-lg text-white h-10 lg:h-14 lg:p-4 hover:bg-blue-600" />
                    </div>
                </form>
            </div>
            <div className="relative  lg:mt-72">
                {
                    <Card fakeData={data}></Card>
                }
            </div>

        </div>
    );
};

export default Banner;