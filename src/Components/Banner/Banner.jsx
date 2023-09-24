

const Banner = () => {
    return (
        <div className="">
                <div className="absolute top-0 ">
                    <img className="w-screen h-screen opacity-50" src={'https://i.ibb.co/8YNchrV/banner.jpg'} alt="" />
                </div>
                <div className=" flex flex-col justify-center items-center gap-8 relative top-32">
                    <p className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent  font-bold text-4xl">We Grow By Helping People In Need</p>
                    <div className="flex gap-4">
                        <input type="text" placeholder="category" className="input input-bordered input-info w-96 max-w-xs" />
                        <button className="btn btn-accent">Search</button>
                    </div>
                </div>

        </div>
    );
};

export default Banner;