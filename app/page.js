import Image from 'next/image'
import Navbaar from "../app/compnement/Navbaar";
import Hero from "@/app/compnement/Hero";
import Vendu from "@/app/compnement/Vendu";
import Card from "@/app/compnement/Card";
import About from "@/app/compnement/About";
import RevealBento from "@/app/compnement/Contact";
export default function Home() {
  return (
   <>
   <Navbaar/>
       <Hero/>
       <Vendu/>
       <Card/>
       <About/>
       <RevealBento/>
   </>
  )
}
