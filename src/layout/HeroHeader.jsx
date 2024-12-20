const HeroHeader = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[350px] max-w-full sm:h-[450px]  md:h-[550px] lg:h-[650px]">
      <div className="flex flex-col justify-center items-center w-full  h-full gap-20 sm:gap-10 sm:items-end sm:pr-10">
        <h1 className="text-4xl font-bold text-violet-600 md:text-5xl lg:text-6xl ">
          Priscilla
        </h1>
        <p className=" text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl">
          Developpeuse Frontend
        </p>
      </div>
    </section>
  );
};

export default HeroHeader;
