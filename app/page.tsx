import Image from "next/image";
import Nav from "@/components/navbar";
import liquid from "@/public/liquid.svg";
import { Button } from "@/components/ui/button";
import hyper from "@/public/hyper.png";
import bolha from "@/public/glassliquid.svg";

export default function Home() {
  return (
    <div
      className={`h-screen bg-no-repeat bg-right bg-cover overflow-y-hidden overflow-x-hidden bg-custom-bg bg-black text-white`}>
      <div className="px-24 py-9 z-[999] relative">
        <Nav />
      </div>
      <div className="h-[calc(100vh-10.25rem)] flex items-center">
        <div className="px-24">
          <p className="text-xs">Lançamento:</p>
          <h1 className="text-8xl ">
            <strong className="font-bold animate-fade-right duration-700 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
              HYPER
            </strong>
            <br /> <span className="italic">ADAPT</span>
          </h1>
          <p className="w-[24rem] h-[9rem] mt-10">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Fugit facilis quibusdam vitae
            ex beatae odio nam nobis maiores rem blanditiis.
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa a libero at sapiente,
            blanditiis quos excepturi quo unde id omnis!
          </p>
          <div className="flex gap-[2rem] items-center ">
            <Button className="bg-gradient-to-r from-green-300 font-bold blur-md  to-purple-400 text-black rounded-3xl w-[10rem] h-[3.5rem] mt-10">
              Buy
            </Button>
            <Button className="absolute bg-gradient-to-r group  from-green-300 to-purple-400 text-black rounded-3xl w-[10rem] h-[3.5rem] mt-10">
              Buy
            </Button>
            <Button className="bg-transparent animate-in duration-150 border-[1px] font-bold  hover:bg-white/5 text-white rounded-3xl w-[10rem] h-[3.5rem] mt-10">
              Add in Cart
            </Button>
          </div>
          <Image
            src={bolha}
            className="absolute bottom-0"
            alt=""
            width={300}
          />
        </div>
        <Image
          src={hyper}
          alt=""
          className="mt-10 "
          width={1159.37}
          height={971.8}
        />
      </div>
    </div>
  );
}
