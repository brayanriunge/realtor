export default function Dashboard() {
  return (
    <div className="pt-28 md:h-full w-full md:pb-0 p-4 ">
      <div
        className="bg-no-repeat bg-cover rounded-xl bg-center w-full shadow-xl"
        style={{
          backgroundImage: "url('/survey.jpeg')",
          height: "500px",
        }}
      >
        <div className=" m-10 p-10 ">
          <div className=" py-10 items-center bg-white bg-opacity-20 rounded-2xl  ">
            <div className="flex justify-center">
              <h1
                style={{ fontFamily: "Bungee Spice, cursive" }}
                className=" font-bold   text-4xl"
              >
                GOLDMARK REALTORS
              </h1>
            </div>
            <p className="sm:text-3xl sm:p-5 text-lg p-4 sm:text-black font-bold ">
              We give our clients actionable insights and fresh perspectives
              when it comes to surveys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
