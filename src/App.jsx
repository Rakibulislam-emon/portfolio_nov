import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';

import About from "./Components/About";
// import Contact from "./Components/Contact";
import Contacts from "./Components/Contacts";
// import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
// import Project from "./Components/Project";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Loader from "./Components/Loader";

export default function App() {
  // loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    //    cleanup state
    return () => clearTimeout(timer)
}, [])

 
  return (
    <>
    <Toaster/>
   {isLoading ? <Loader/> :  <>
        <div className="overflow-x-hidden text-stone-300 antialiased">
          <div className="fixed inset-0 -z-10">
            <div className="relative h-full w-full bg-black">
              <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            </div>
          </div>
          <div className="container mx-auto ">
            <Navbar />
            <Hero/>
            <Technologies/>
            {/* <Project/> */}
            <Projects/>
            {/* <Experience/> */}
            <About/>
            {/* <Contact/> */}
            <Contacts/>
          </div>
        </div>
     </>}
    </>
  )
}
