import { Button, Link, LinkIcon } from "@nextui-org/react";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react";

export default function MenuLeft(){

    let [where, setWhere] = useState("Inicio");

  function scrollToZone(id){
    document.getElementById(id).scrollIntoView()
  }
  useEffect(() => {
    if(location.hash == "") setWhere("Inicio")
    else setWhere(location.hash.slice(1))
    window.addEventListener("hashchange", () => {
      if(location.hash == "" ) {
        scrollToZone("Inicio")
        setWhere("Inicio")
      }
      else {
        scrollToZone(location.hash.slice(1))
        setWhere(location.hash.slice(1))
      }
    })
  }, [])
    return<>
    <div className="flex flex-col fixed left-5 top-1/2 -translate-y-1/2 z-20 gap-5">
        <Link href={"#Inicio"} className={`bg-white ${where == "Inicio" ? "bg-lime-400" : ""} font-niko font-bold text-5xl hover:bg-lime-400 bg-clip-text text-transparent hover:w-full transition-background cursor-pointer`}>INICIO</Link>
        <Link href={"#Calzados"} className={`bg-white ${where == "Calzados" ? "bg-lime-400" : ""} font-niko font-bold text-5xl hover:bg-lime-400 bg-clip-text text-transparent hover:w-full transition-background cursor-pointer`}>CALZADOS</Link>
        <Link href={"#Inicio"} className={`bg-white ${where == "asdasd" ? "bg-lime-400" : ""} font-niko font-bold text-5xl hover:bg-lime-400 bg-clip-text text-transparent hover:w-full transition-background cursor-pointer`}>JORDAN</Link>
        <Link href={"#Inicio"} className={`bg-white ${where == "aasdasd" ? "bg-lime-400" : ""} font-niko font-bold text-5xl hover:bg-lime-400 bg-clip-text text-transparent hover:w-full transition-background cursor-pointer`}>ROPA</Link>
    </div>
    <Button className="fixed left-[95%] top-5 z-30 bg-transparent hover:bg-lime-400 backdrop-blur-sm text-white" isIconOnly><LocalMallIcon/></Button>
    <span className="font-niko text-3xl fixed text-white z-20 left-5 top-5 italic">NIKE <span className="text-sm font-standard">BY SWD</span></span>
    </>
}