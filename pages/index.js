import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          About
        </h1>
      </section>
      <section id="blog" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{" "}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
      <section>
        <div className="h-screen flex flex-col items-center justify-center bg-[#6592CF]">
          <div className="bg-[#243D83] w-[400px] h-[250px] flex justify-center">
            <div className="rounded-full w-[320px] h-[320px] bg-[#6592CF] flex -mt-10 flex-col items-center justify-center">
              <div className="rounded-full w-[190px] h-[190px] bg-[#243D83] flex flex-col items-center justify-center">
                <div className="rounded-full w-[70px] h-[70px] bg-[#EEB850]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen flex flex-col items-center justify-end bg-[#6592CF]">
          <div className="max-w-2xl flex flex-col items-center">
            <div className="bg-[#060F55] rounded-b-full rounded-t-full">
              <ul className="flex items-center">
                <li className="w-6 h-32 bg-[#060F55] rounded-t-full"></li>
                <li className="w-6 h-32 bg-[#6592CF] rounded-b-full"></li>
                <li className="w-6 h-32 bg-[#060F55] rounded-t-full"></li>
                <li className="w-6 h-32 bg-[#6592CF] rounded-b-full"></li>
                <li className="w-6 h-32 bg-[#060F55] rounded-t-full"></li>
                <li className="w-6 h-32 bg-[#6592CF] rounded-b-full"></li>
                <li className="w-6 h-32 bg-[#060F55] rounded-t-full"></li>
              </ul>

              <div className="bg-[#060F55] rounded-b-full w-full h-[120px]"></div>
            </div>
            <div className="w-6 h-24 bg-[#060F55] -mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}
