import React from 'react'
import '..//../assets/css/index.css'

const Home = () => {
    
      return (
        <><section>
          <div class="mx-auto max-w-screen-xl items-center sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
            <img class="w-full dark:hidden" src="https://previews.123rf.com/images/digitalgenetics/digitalgenetics1011/digitalgenetics101100545/8161215-3d-man-party-isolated-on-white.jpg" alt="dashboard image" />
            <img class="hidden w-full dark:block" src="https://previews.123rf.com/images/digitalgenetics/digitalgenetics1011/digitalgenetics101100545/8161215-3d-man-party-isolated-on-white.jpg" alt="dashboard image" />
            <div class="mt-4 md:mt-0">
              <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-black">Let's organize, coordinate, and deliver more events and ideas that unite us.</h2>
              <p class=" font-light  md:text-lg">ProPlannd facilitates connections with service providers and like-minded communities, making it effortless to organize and discover new events.Crafting Unforgettable Experiences, One Event at a Time.</p>
              <a href="/admin/services" class="mt-4 bg-yellow-500 hover:bg-primary-800 focus:ring-primary-300 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4">
                View all Services
                <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div class="mb-4">

          </div>
        </section>
      </>
      );
    };

export default Home