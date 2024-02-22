import React from 'react'

const Register = () => {
  return (
    <div class="h-screen md:flex">
  <div class="i relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr from-blue-800 to-purple-700 md:flex">
    <div>
      <h1 class="m-6 font-sans text-4xl font-bold text-white">Plan your parties like a pro</h1>
      <p class="m-6 mt-1 text-white">We thrive on producing incredible events and our highly experienced team is full of creativity and passion, ensuring we deliver an unforgettable experience every time....Seamless, captivating events don’t just happen... they’re ProPlannd, where every detail is a masterpiece.</p>
    </div>
    <div class="absolute -bottom-32 -left-40 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
    <div class="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
    <div class="absolute -right-0 -top-40 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
    <div class="absolute -right-20 -top-20 h-80 w-80 rounded-full border-4 border-t-8 border-opacity-30"></div>
  </div>



  <div class="flex items-center justify-center bg-white py-10 md:w-1/2">
    <form class="bg-white">
      <p class="mb-1 text-sm font-normal text-gray-600">Welcome to</p>
      <h1 class="mb-7 text-2xl font-bold text-gray-800">ProPlannd</h1>
      <form class="w-full max-w-2xl mt-5 p-4 border border-blue-600 rounded">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Username
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        EMAIL
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="******************"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Confirm Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="password" placeholder="******************"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Mobile NUMBER
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        ROLE
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>ADMIN</option>
          <option>USER</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
<div class="mt-4 grid place-items-center">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Button
</button>

</div>
  
  </form>
    </form>
  </div>
</div>

  )
}

export default Register