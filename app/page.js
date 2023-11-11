import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex mt-20 flex-col space-y-10 justify-center items-center h-[80vh]">
      <div className=" flex flex-col justify-between h-full mx-auto max-w-4xl sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex space-y-5 md:space-x-10  flex-col md:justify-between  md:flex-row justify-center items-center uppercase text-xl md:text-3xl  font-bold text-emerald-900 mb-10">
          <Image width={400} height={400} src='/invImg.png' className=" rounded-md max-w-2xl border-4 border-emerald-800 " />
          <div className="text-center space-y-8">
            <h1 className="">bari & adrien</h1>
            <p>1er NOVEMBRE 2023</p>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
