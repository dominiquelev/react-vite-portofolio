const Jumbotron = () => {
  return (
    <div className="bg-black">
    <div className="container mx-auto px-4 mt-14 md:mt-20">
      <div className="grid md:grid-cols-2 flex-row">
        <div className="flex flex-col justify-center text-yellow-400">
          <h1 className=" underline text-center md:text-left text-yellow-600 font-bold text-[45px] md:text-[80px] ">DOMINIQUE LIZA E</h1>
          <p className="text-center md:text-left text-[14px] md:text-[30px] ">Student of Purwadhika Digital Technology</p>
          <p className="text-center md:text-left text-[10px] md:text-[15px] font-extralight italic">A hardworking and ambitious individual with a great passion in new
            digital technology especially Web Development.</p>
        
        </div>

        <div>
          <img
            src="photo.avif"
            alt="photo"
            className=" m-auto rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jumbotron;
