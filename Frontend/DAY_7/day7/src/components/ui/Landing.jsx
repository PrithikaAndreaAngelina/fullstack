// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Landing = () => {
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     // alert("done");
//     navigate("/login/");
//   }

//   return (
//     <div className="relative h-screen">
//       {/* Video background */}
//       <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
//         <source src="https://plannd.co.uk/wp-content/uploads/2024/01/plannd-website-homepage-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Heading & Button */}
//       <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-white text-center">
//         <h1 className="text-6xl font-bold">ProPlannd</h1>
//         <button className="mt-4 bg-white text-black py-3 px-6 rounded-lg shadow-lg" onClick={handleSubmit}>Let's Go!</button>
//       </div>
//     </div>
//   );
// }

// export default Landing;

import { useNavigate } from 'react-router-dom';
import React from 'react'

const Landing = () => {
    const navigate = useNavigate();

  const handleSubmit = () => {
    // alert("done");
    navigate("/login/");
  }
  return (
    <div>
    <div className="relative h-screen">
      {/* Video background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="https://plannd.co.uk/wp-content/uploads/2024/01/plannd-website-homepage-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Heading & Button */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-white text-center">
        <h1 className="text-6xl font-bold">ProPlannd</h1>
        <button className="mt-4 bg-white text-black py-3 px-6 rounded-lg shadow-lg" onClick={handleSubmit}>Let's Go!</button>
      </div>


    </div>
    
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">At Stellar Events, we believe in turning ordinary moments into extraordinary memories. With our passion for creativity and attention to detail, we specialize in planning and executing unforgettable events tailored to your unique vision.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://imgs.search.brave.com/gtT2K8LGoik39Ab41I2zFybfU9FX2cWt8Sq2BDl7XJ4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzLzZk/L2UwL2IzNmRlMDM4/MDYxZmUxYWI1MGY1/OTU1YTkwOTJiNzE2/LmpwZw"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://imgs.search.brave.com/idzQefbnpbJQEGQIT_ZIIo5cg2w2rBzWGaWPQBmOSlM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg5LzAz/LzdjLzg5MDM3YzI5/YWI0NWVhZGY3ZGQ5/NmI3MTQ5NTE3NDc1/LmpwZw"/>
        </div>
    </div>
</section>
</div>
  )
}

export default Landing