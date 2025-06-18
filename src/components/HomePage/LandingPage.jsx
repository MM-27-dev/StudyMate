import React from 'react'
import Navbar from './Navbar'

import { FeaturesSection } from './FeaturesSection'
import PricingSection from './PricingSection'
import DiscoverPersonalities from './DiscoverPersonalities'
import SeamlessFollowUp from './SeamlessFollowUp'
import FAQSection from './FAQSection'
import JoinCommunity from './JoinCommunity'
import Footer from './Footer'
import {HeroSection }from './HeroSection'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <PricingSection/>
        <DiscoverPersonalities/>
        <SeamlessFollowUp/>
        <FAQSection/>
        <JoinCommunity/>
        <Footer/>
    </div>
  )
}

export default LandingPage