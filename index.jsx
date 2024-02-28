import { Image } from "@nextui-org/react";
import NikeLogoSVG from "../../assets/svgs/nikelogo";
import MenuLeft from "./components/menu";
import NikeTitle from "./title";
import Shoes from "./shoes";

import './index.css'
import Jordan from "./jordan";

export default function Niko(){
    return <>
    <MenuLeft/>
    <NikeTitle/>
    <Shoes/>
    <Jordan/>
    </>
}
