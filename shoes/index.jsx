import { Button } from "@nextui-org/react";
import Shoe from "./shoe";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";
import ShoeList from "./shoeList";

export default function Shoes(){
    

    return <>
    <div id="Calzados" className="w-screen min-h-screen relative bg-slate-500 flex flex-col justify-center items-center gap-20 pt-[15rem] pb-[15rem]">
        <span className="font-niko text-9xl text-white absolute top-5">CALZADOS</span>
        <ShoeList title={'AIR FORCE'} id={'airforce'}>
            <Shoe src={"/niko/shoes/airforce1.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"sky-500"} className="text-white bg-sky-500"/>
            <Shoe src={"/niko/shoes/airforce2.png"} title={"AIR FORCE 1"} color={"black"} bgColor={"amber-400"} className="text-black bg-amber-400"/>
            <Shoe src={"/niko/shoes/airforce3.png"} title={"AIR FORCE 1"} color={"lime-500"} bgColor={"teal-500"} className=" text-lime-500 bg-teal-500"/>
            <Shoe src={"/niko/shoes/airforce4.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"black"} className="text-white bg-black"/>
            <Shoe src={"/niko/shoes/airforce5.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"red-600"} className="text-white bg-red-600"/>
            <Shoe src={"/niko/shoes/airforce6.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"amber-700"} className="text-white bg-amber-700"/>
            <Shoe src={"/niko/shoes/airforce7.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"cyan-500"} scale={"125"} className="text-white bg-cyan-500 scale-125 "/>
            <Shoe src={"/niko/shoes/airforce8.png"} title={"AIR FORCE 1"} color={"white"} bgColor={"black"}  className="text-white bg-black"/>
            <Shoe src={"/niko/shoes/airforce9.png"} title={"AIR FORCE 1"} color={"amber-400"} bgColor={"green-800"}  className="text-amber-400 bg-green-800 "/>
            <Shoe src={"/niko/shoes/airforce10.png"} title={"AIR FORCE 1"} color={"yellow-400"} bgColor={"yellow-800"} scale={"125"}  className=" text-yellow-400 bg-yellow-800"/>
        </ShoeList>

        <ShoeList title={'AIR MAX'} id={'airmax'}>
            <Shoe src={"/niko/shoes/airmax1.png"} title={"AIR MAX 1"} color={"slate-800"} bgColor={"red-400"} className=" bg-red-400 text-slate-800"/>
            <Shoe src={"/niko/shoes/airmax2.png"} title={"AIR MAX 1"} color={"white"} bgColor={"amber-300"} className="text-black bg-amber-300"/>
            <Shoe src={"/niko/shoes/airmax3.png"} title={"AIR MAX 1"} color={"orange-200"} bgColor={"orange-400"} className=" text-orange-200 bg-orange-400"/>
            <Shoe src={"/niko/shoes/airmax4.png"} title={"AIR MAX 1"} color={"slate-800"} bgColor={"yellow-400"} className="text-slate-800 bg-yellow-400"/>
            <Shoe src={"/niko/shoes/airmax5.png"} title={"AIR MAX 1"} color={"white"} bgColor={"red-800"} className="text-white bg-red-800"/>
            <Shoe src={"/niko/shoes/airmax6.png"} title={"AIR MAX 1"} color={"white"} bgColor={"black"} className="text-white bg-black"/>
            <Shoe src={"/niko/shoes/airmax7.png"} title={"AIR MAX 1"} color={"gray-900"} bgColor={"blue-950"} className=" bg-blue-950 text-gray-900 "/>
            <Shoe src={"/niko/shoes/airmax8.png"} title={"AIR MAX 1"} color={"white"} bgColor={"red-700"}  className="text-white bg-red-700"/>
        </ShoeList>
        
    </div>
    </>
}