const Banner = () => {
  return (
    <div className="bg-[#faf4f0] ">
      <div className=" mx-auto flex  ">
      <div className="flex-auto container ml-48  w-3/4 flex flex-col gap-10">
  <h1 className="bennerText text-5xl mt-24 font-bold text-[#420926] md:text-7xl w-[650px] ">
    Revolutionizing Patient Care with
    <span className="block bannerSpan italic font-normal">
      Pharmacy-Driven
    </span>{" "}
    Solutions
  </h1>

  <p className=" font-normal w-[550px] text-xl leading-[40px] ">
    Empowering patients with real-time access to their health data, and
    simplifying pharmacy workflows.
  </p>
  <button className="btn bg-[#ff0009] w-[200px] text-white capitalize font-bold h-[60px]">
    get a demo
  </button>
</div>

        <div
          style={{
            backgroundImage: "url(/banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
          className="flex-auto w-1/4  h-screen bg-[#420926]"
        ></div>
      </div>
    </div>
  );
};

export default Banner;
