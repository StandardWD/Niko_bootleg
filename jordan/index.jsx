import { Image } from "@nextui-org/react";
import ShoeList from "../shoes/shoeList";
import Shoe from "../shoes/shoe";
import JordanShoe from "./jordanshoe";

export default function Jordan(){
    return <>
    <div id="Jordan" className="w-screen h-screen relative flex flex-col">
        <div className="w-[20rem] h-[20rem] absolute left-1/2 top-0 -translate-x-1/2  z-0">
            <Image src="/niko/jordan.svg" className="w-[20rem] h-[20rem] drop-shadow-xl"/>
            <span className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-niko text-red-800 text-[15rem]">JORDAN</span>
        </div>
        <ShoeList className={"absolute top-2/3 -translate-y-1/2"}>
            <JordanShoe src={"/niko/shoes/jordan1.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan2.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan3.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan4.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan5.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan6.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan7.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan8.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan9.png"} title={"JORDAN"}/>
            <JordanShoe src={"/niko/shoes/jordan10.png"} title={"JORDAN"}/>

        </ShoeList>
    </div>
    </>
}