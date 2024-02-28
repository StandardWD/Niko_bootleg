import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";

export default function Shoe({src, color, bgColor, scale, title}){
    let [selected, setSelected] = useState("M")
    return <>
    <Card className="bg-transparent backdrop-blur h-56 min-w-[32.5rem] flex flex-row p-3 gap-5 first:ml-20 last:mr-20">
        <div className="relative h-full flex items-center justify-center aspect-square">
            <span className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[75%] aspect-square rounded-lg bg-${bgColor}`}></span>
            <img src={src} width={250} height={250} className={`bg-transparent border-none drop-shadow-lg object-cover ${scale ? `scale-${scale}` : ""}`}/>
        </div>
        <CardBody>
            <span className={`font-niko text-${color} text-xl`}>{title}</span>
            <p className={`text-sm font-bold text-${color}`}>Calzado comodo, flexible y estilizado.</p>
            <div className="flex gap-2 mt-3">
                {
                    ['XS', 'S', 'M', 'L', 'XL'].map((x, i) => {
                        return <Button key={i} isIconOnly radius="full" onClick={() => setSelected(x)} className={`${x == selected ? `bg-${bgColor}` : ""} text-${x == selected ? `white` : "black"} font-bold`}>{x}</Button>
                    })
                }
            </div>
            <div className="mt-5 flex gap-10">
                <Button variant="primary" className={`bg-${bgColor} text-white`}>Buy Now</Button>
                <Button>Add to Bag</Button>
            </div>
        </CardBody>
    </Card>
    </>
}