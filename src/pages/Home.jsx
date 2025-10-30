import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import SolutionsPage from '../components/SolutionsPage'
import ContactForm from '../components/ContactSection'
import AnimatedFooter from '../components/MinimalistFooter'
import TechStackSection from '../components/TechStackSection'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Services />
            <SolutionsPage />
            <TechStackSection />
            <ContactForm/>
            <AnimatedFooter />

        </>
    )
}

export default Home