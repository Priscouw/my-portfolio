const HeroHeader = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[350px] max-w-full sm:h-[450px]  md:h-[550px] lg:h-[650px]">
      <div className="flex flex-col justify-center items-center w-full bg-black bg-opacity-30 h-full gap-20 sm:gap-10 sm:items-start sm:pl-10 md:gap-14">
        <h1 className="text-4xl font-bold text-purple md:text-5xl lg:text-6xl ">
          Priscilla
        </h1>
        <h2 className=" text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl">
          Developpeuse Frontend
        </h2>
      </div>
    </section>
  );
};

export default HeroHeader;
