import { FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="bg-[url('/herobg.svg')] h-[30rem] lg:h-[36rem] w-full text-white text-center">
      <h2 className="text-4xl font-semibold lg:text-6xl pt-16 sm:pt-32 mb-8">Transforming Today
        <br />
        For
        <br />
        Digital Tomorrow</h2>
      <p className="w-[90vw] font-semibold lg:w-full mb-8">We are committed to offering state-of-the-art software solutions that
        <br />
        enable companies to prosper in the digital world.</p>
      <button className="flex items-center mx-auto gap-2 bg-[#E53B3A] border-0 py-1 px-3 focus:outline-nonerounded rounded-lg text-base mt-4 md:mt-0">
        Learn More
        <FaArrowRight />
      </button>
    </main>
  );
}
