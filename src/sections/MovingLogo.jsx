// import React from 'react'
// import styled, { css, keyframes } from 'styled-components';

// const MovingLogo = () => {
//   const row1 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//   ];

//   return (
//     <AppContainer>
//       <Wrapper>
//         <Marquee>
//           <MarqueeGroup>
//             {row1.map((el) => (
//               <ImageGroup>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//           <MarqueeGroup>
//             {row1.map((el) => (
//               <ImageGroup>
//                 <Image src={el} />
//               </ImageGroup>
//             ))}
//           </MarqueeGroup>
//         </Marquee>
       
//       </Wrapper>
//     </AppContainer>
//   );
// }


// export default MovingLogo;

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 1vw;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: fit-content;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Text = styled.div`
//   font-size: 35px;
//   font-weight: 500;
//   margin-bottom: 10px;
//   color: #02203c;
// `;

// const Note = styled.div`
//   font-size: 18px;
//   font-weight: 200;
//   margin-bottom: 40px;
//   color: #7c8e9a;
// `;

// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   overflow: hidden;
//   user-select: none;

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
// `;

// const scrollX = keyframes`
//   from {
//     left: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 30s linear infinite;
// `;

// const MarqueeGroup = styled.div`
//   ${common}
// `;


// const ImageGroup = styled.div`
//   display: grid;
//   place-items: center;
//   width: clamp(10rem, 1rem + 40vmin, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   /* border: 1px solid black; */
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;


// import React from "react";

// const MovingLogo = () => {
//   const row = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//   ];

//   return (
//     <div className="relative w-full h-auto overflow-hidden flex items-center">
//       <div className="flex animate-scrollX whitespace-nowrap">
//         {row.map((el, index) => (
//           <div key={index} className="w-40 h-auto mx-4">
//             <img
//               src={el}
//               alt={`Logo ${index}`}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovingLogo;


import React from "react";

// Import your PNG files
import logo1 from "../assets/logos/logo1.png";


const MovingLogo = () => {
  // Array of imported PNG files
  const logos = [logo1, logo1, logo1, logo1, logo1, logo1, logo1, logo1, logo1, logo1];

  return (
    <div className="relative w-full overflow-hidden flex items-center">
      {/* Animated container */}
      <div className="flex animate-scrollX whitespace-nowrap">
        {/* Display logos in a continuous loop */}
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="w-40 h-auto -mx-4">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingLogo;



