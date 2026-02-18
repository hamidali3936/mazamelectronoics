import React from "react"
import AboutHero from "@/Components/AboutUs/AboutHero"
import OurPrinting from "@/Components/AboutUs/OurPrinting"
import StatsSection from "@/Components/AboutUs/stateSection"
import OurValues from "@/Components/AboutUs/OurValues"
import OurJourney from "@/Components/AboutUs/OurJourney"
import OurPromise from "@/Components/AboutUs/OurPromise"
import BrowserPrinter from "@/Components/AboutUs/BrowserPrinter"
export default function page(){
    return(
        <>
        <AboutHero/>
        <OurPrinting/>
        <StatsSection/>
        <OurValues/>
        <OurJourney/>
        <OurPromise/>
        <BrowserPrinter/>
        </>
    )
}