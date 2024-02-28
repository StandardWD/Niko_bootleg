import { Image } from "@nextui-org/react";
import NikeLogoSVG from "../../../assets/svgs/nikelogo";

export default function NikeTitle(){
    return <>
    <div id="Inicio" className="w-screen h-screen max-h-screen flex items-center justify-center overflow-y-hidden relative bg-slate-500">
        <div className=" w-[45rem] h-auto flex z-0 items-center justify-center overflow-hidden relative">
            <Image src="/niko/nike_shoes.png" className="object-cover min-h-[100%] h-auto min-w-[100%] w-auto select-none"/>
        </div> 
        <div className="w-[35rem] h-auto z-10 fill-white">
            <NikeLogoSVG className="drop-shadow-2xl"/>
        </div>
    </div>
    </>
}