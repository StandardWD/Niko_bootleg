import { Button } from "@nextui-org/react";
import Shoe from "./shoe";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";

export default function Shoes(){
    function moveScroll(much, id){
        document.getElementById(id).scrollLeft += much;
    }
    useEffect(() => {
        moveScroll(500, "airforceList")
    }, [])

    return <>
    <div id="Calzados" className="w-screen min-h-screen relative bg-slate-500 flex flex-col justify-center items-center">
        <span className="font-niko text-9xl text-white absolute top-5">CALZADOS</span>
        <div className="flex flex-col items-center gap-5 w-full ">
            <div className="flex items-center justify-start gap-5">
                <span className="font-niko flex text-8xl text-white/80">AIR FORCE</span>
                <div className="flex gap-5">
                    <Button onClick={() => {moveScroll(-500, "airforceList")}} isIconOnly radius="full" className="flex items-center justify-center"><ArrowBackIcon/></Button>
                    <Button onClick={() => {moveScroll(500, "airforceList")}} isIconOnly radius="full" className="flex items-center justify-center"><ArrowForwardIcon/></Button>
                </div>
            </div>
            <div id="airforceList" className="flex gap-20 w-[87.5%] overflow-x-auto hide-scrollbar ml-64 p-2 scroll-smooth">
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
            </div>
        </div>
    </div>
    </>
}