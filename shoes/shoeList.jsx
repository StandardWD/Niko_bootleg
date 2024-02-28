import { Button, ScrollShadow } from "@nextui-org/react"
import Shoe from "./shoe"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";

export default function ShoeList({children, title, id, className}){

        function moveScroll(much, moveId){
            document.getElementById(moveId).scrollLeft += much;
        }

        useEffect(() => {
            moveScroll(500, `${id}List`)
        }, [])
        return <div className={`flex flex-col items-center gap-5 w-full ${className}`}>
            <div className="flex items-center justify-start gap-5">
                <span className="font-niko flex text-8xl text-white">{title}</span>
                <div className="flex gap-5">
                    <Button onClick={() => {moveScroll(-500, `${id}List`)}} isIconOnly radius="full" className="flex items-center justify-center"><ArrowBackIcon/></Button>
                    <Button onClick={() => {moveScroll(500, `${id}List`)}} isIconOnly radius="full" className="flex items-center justify-center"><ArrowForwardIcon/></Button>
                </div>
            </div>
            <ScrollShadow size={100} orientation="horizontal" hideScrollBar id={`${id}List`} className="flex gap-20 w-[87.5%] overflow-x-auto hide-scrollbar ml-64 p-2 scroll-smooth">
                {children}
            </ScrollShadow>
        </div>
}