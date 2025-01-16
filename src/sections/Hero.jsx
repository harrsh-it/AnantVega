// // import { div } from "framer-motion/client";
// // import Button from "../components/Button";
// // import {statistics} from "../constants";

// // const Hero =() =>{
// //   return(
// //     <section 
// //     id="hero"
// //     className="w-full flex xl:flex-row  flex-col justify-center min-h-screen gap-10 max-container    border-2 border-red-500 p-2 bg-red-300"
// //     >
// //       <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
// //         <p className="text-xl font-montserrat text-coral-red mt-14">#ISRO Registered Space Tutor</p>
// //         <h1 className="mt-10 font-mokoto text-6xl max-sm:text-[72px] max-sm:leading-[82] font-bold mb-10">
// //           <span >Where boundless</span>
// //           <br/>
// //           <span>curiosities meet</span>
// //           <br />
// //           <span>infinite possibilities</span>
// //         </h1>

// //         <Button label="Register Now"/>
        

// //         <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16 ">
// //           {statistics.map((stat, 
// //           index)=>(
// //             <div>
// //               <p className='text-4xl font-savedbyzero font-bold'>{stat.value}</p>
// //               <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
// //             </div>

// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// // export default Hero;

// import { div } from "framer-motion/client";
// import Button from "../components/Button";
// import {statistics} from "../constants";
// import {BigLogo} from "../assets/images";
// import MovingLogo from "./MovingLogo";
// const Hero =() =>{
//   return(
//     <section 
//     id="hero"
//     className="w-full flex xl:flex-row lg:flex-row flex-col justify-center min-h-screen gap-10 max-container    border-2 border-red-500 p-2 "  
//     style={{
//       backgroundImage: "linear-gradient(rgba(169, 169, 169, 0.5), rgba(105, 105, 105, 0.5))",
//     }}
    
//     >
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full min-h-screen object-cover -z-10"
//       >
//         <source src="public\Untitled design (1).mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
      
      

//       <div className="relative xl:w-3/5 lg:w-3/5 flex flex-col justify-center items-start w-full xl:padding-x pt-28  lg:padding-x ">
//         <p className="text-xl font-montserrat font-bold text-white mt-6">#ISRO Registered Space Tutor</p>
//         <h1 className="mt-10 font-mokoto text-white text-6xl  font-bold mb-10  max-sm:text-4xl max-md:text-5xl">
//           <span >WHERE BOUNDLESS</span>
//           <br/>
//           <span>CURIOSITIES MEET</span>
//           <br />
//           <span>INFINITE POSSIBILITIES</span>
//         </h1>
//         <Button label="REGISTER NOW"/> 
//         <div className="px-1">
//           <MovingLogo/>
//         </div>
        
//       </div>
      
      
//       <div className="relative flex-1 flex justify-center items-center xl:min-h-screen min-xl:py-28 ">
//         <img 
//         src={BigLogo} 
//         alt="Logo" 
//         width={610}
//         height={500}
//         />
//       </div>
      
//     </section>
   
    
//   )
// }
// export default Hero;



import Button from "../components/Button";
import { BigLogo, headerLogo } from "../assets/images";
import MovingLogo from "./MovingLogo";
import "../font.css"

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full flex xl:flex-row lg:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
      style={{
        backgroundImage: "linear-gradient(to top,rgba(0, 0, 0, 1), rgba(54, 83, 90, 0.4))",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="public/Untitled design (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative xl:w-3/5 lg:w-3/5  flex flex-col justify-center items-start w-full xl:padding-x pt-28 lg:padding-x z-10">
        <p className="text-2xl font-montserrat font-bold text-white mt-20">#ISRO Registered Space Tutor</p>
        <h1 className="mt-10 font-lastica text-white   mb-10 max-sm:text-4xl max-md:text-5xl tracking-widest leading-snug"
         style={{ wordSpacing: '0.3em',
          fontWeight: 900,
          fontSize: '44px',
          }}
          
         >
          <span>WHERE BOUNDLESS</span>
          <br />
          <span>CURIOSITIES MEET</span>
          <br />
          <span>INFINITE POSSIBILITIES</span>
        </h1>
        <Button label="REGISTER NOW" />
        <div className="overflow-hidden w-full"  >
          <MovingLogo />
        </div>
      </div>

      <div className="relative  flex-1 flex justify-center items-center xl:min-h-screen min-xl:py-28 -bottom-24  lg:block hidden">
        <img
          src={headerLogo}
          alt="Logo"
          // width={610}
          // height={500}
          className=" h-auto"
          
        />
      </div>
      
    </section>
  );
};

export default Hero;
