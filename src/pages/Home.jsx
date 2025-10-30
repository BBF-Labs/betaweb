import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import SolutionsPage from '../components/SolutionsPage'
import ContactForm from '../components/ContactForm'
import AnimatedFooter from '../components/AnimatedFooter'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Services />
            <SolutionsPage />
            {/* <ContactForm /> */}
            <AnimatedFooter/>
        </>
    )
}

export default Home