import React from "react"
import HeroSection from "@/Components/service/HeroSection";
import PrinterRental from "@/Components/service/PrinterRental";;
import CompletePrinter from "@/Components/service/CompletePrinter"
import PrinterServices from "@/Components/service/PrinterServices";
import HowWork from "@/Components/service/HowWork";
import ProfessionalPrinter from "@/Components/service/ProfessionalPrinter";
export default function page() {
    return(
        <>
        <HeroSection/>
        <PrinterRental/>
        <CompletePrinter/>
        <PrinterServices/>
        <HowWork/>
        <ProfessionalPrinter/>
        
        </>
    )
}