import React from "react";
import Intro from "./Introduction/Intro";
import Statistics from "./Statistics/Statistics";
import Properties from "./Properties/Properties";
import Hero from "./HeroSection/Hero";
 


const MainBody = () => {
     return (
         <div>
            <Intro/>
             <Statistics/>
             <Properties/>
             <Hero/>
         </div>
     )
}

export default MainBody;