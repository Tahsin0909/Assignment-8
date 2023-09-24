

const Banner = () => {
    return (
        <div className=" lg:h-[600px] h-[300px]">
                <div className="absolute top-0 ">
                    <img className="w-screen lg:h-[600px] h-[300px] opacity-50" src={'https://i.ibb.co/8YNchrV/banner.jpg'} alt="" />
                </div>
                <div className=" flex flex-col justify-center h-[250px] items-center gap-8 relative lg:top-32">
                    <p className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-center font-bold text-xl md:text-2xl lg:text-4xl">We Grow By Helping People In Need</p>
                    <div className="flex gap-2  lg:gap-4">
                        <input type="text" placeholder="category" className="input input-bordered input-info lg:w-96 md:w-64 w-40 h-10  lg:h-14 " />
                        <button className="bg-blue-500 p-2 rounded-lg text-white h-10 lg:h-14 lg:p-4 hover:bg-blue-600 ">Search</button>
                    </div>
                </div>

        </div>
    );
};

export default Banner;