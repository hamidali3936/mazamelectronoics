import ContactHero from "@/Components/ContactUs/ContactHero";
import ContactForm from "@/Components/ContactUs/ContactForm";
import SubmitForm from "@/Components/ContactUs/SubmitForm";
import LocationSection from "@/Components/ContactUs/LocationSection";
export default function page() {
    return(
        <>
        <ContactHero/>
        <ContactForm/>
        <SubmitForm/>
        <LocationSection/>
        </>
    )
}