import React from 'react'

const Dashboard = () => {
  return (
    <div>
    <section class="py-3">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full lg:w-3/5 px-3 mb-6 lg:mb-0">
          <div class="mb-6">
            <div class="flex flex-wrap justify-center -mx-3 -mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6">
                <div class="p-4 bg-white border border-2 border-indigo-600  rounded-xl">
                  <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                    <div class="flex flex-wrap items-center mb-6 -m-2">
                      <div class="w-auto p-2 self-start">
                        <div class="flex w-8 h-8 items-center justify-center bg-white border-2 border-black rounded-xl">
                          <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3333 5.99996H9.99996C10.1768 5.99996 10.3463 5.92972 10.4714 5.8047C10.5964 5.67967 10.6666 5.5101 10.6666 5.33329C10.6666 5.15648 10.5964 4.98691 10.4714 4.86189C10.3463 4.73686 10.1768 4.66663 9.99996 4.66663H8.66663V3.99996C8.66663 3.82315 8.59639 3.65358 8.47137 3.52855C8.34634 3.40353 8.17677 3.33329 7.99996 3.33329C7.82315 3.33329 7.65358 3.40353 7.52856 3.52855C7.40353 3.65358 7.3333 3.82315 7.3333 3.99996V4.66663C6.80286 4.66663 6.29416 4.87734 5.91908 5.25241C5.54401 5.62748 5.3333 6.13619 5.3333 6.66663C5.3333 7.19706 5.54401 7.70577 5.91908 8.08084C6.29416 8.45591 6.80286 8.66663 7.3333 8.66663H8.66663C8.84344 8.66663 9.01301 8.73686 9.13803 8.86189C9.26306 8.98691 9.3333 9.15648 9.3333 9.33329C9.3333 9.5101 9.26306 9.67967 9.13803 9.8047C9.01301 9.92972 8.84344 9.99996 8.66663 9.99996H5.99996C5.82315 9.99996 5.65358 10.0702 5.52856 10.1952C5.40353 10.3202 5.3333 10.4898 5.3333 10.6666C5.3333 10.8434 5.40353 11.013 5.52856 11.138C5.65358 11.2631 5.82315 11.3333 5.99996 11.3333H7.3333V12C7.3333 12.1768 7.40353 12.3463 7.52856 12.4714C7.65358 12.5964 7.82315 12.6666 7.99996 12.6666C8.17677 12.6666 8.34634 12.5964 8.47137 12.4714C8.59639 12.3463 8.66663 12.1768 8.66663 12V11.3333C9.19706 11.3333 9.70577 11.1226 10.0808 10.7475C10.4559 10.3724 10.6666 9.86372 10.6666 9.33329C10.6666 8.80286 10.4559 8.29415 10.0808 7.91908C9.70577 7.54401 9.19706 7.33329 8.66663 7.33329H7.3333C7.15649 7.33329 6.98692 7.26305 6.86189 7.13803C6.73687 7.01301 6.66663 6.84344 6.66663 6.66663C6.66663 6.48981 6.73687 6.32025 6.86189 6.19522C6.98692 6.0702 7.15649 5.99996 7.3333 5.99996ZM7.99996 0.666626C6.54957 0.666626 5.13174 1.09672 3.92578 1.90252C2.71982 2.70831 1.77989 3.85362 1.22485 5.19361C0.669803 6.53361 0.524579 8.00809 0.807537 9.43062C1.0905 10.8531 1.78893 12.1598 2.81451 13.1854C3.8401 14.211 5.14677 14.9094 6.5693 15.1924C7.99183 15.4753 9.46632 15.3301 10.8063 14.7751C12.1463 14.22 13.2916 13.2801 14.0974 12.0741C14.9032 10.8682 15.3333 9.45036 15.3333 7.99996C15.3333 6.05504 14.5607 4.18978 13.1854 2.81451C11.8101 1.43924 9.94488 0.666626 7.99996 0.666626ZM7.99996 14C6.81327 14 5.65324 13.6481 4.66654 12.9888C3.67985 12.3295 2.91081 11.3924 2.45669 10.2961C2.00256 9.1997 1.88374 7.9933 2.11525 6.82942C2.34676 5.66553 2.91821 4.59643 3.75732 3.75732C4.59644 2.9182 5.66553 2.34676 6.82942 2.11525C7.99331 1.88374 9.19971 2.00256 10.2961 2.45668C11.3924 2.91081 12.3295 3.67984 12.9888 4.66654C13.6481 5.65323 14 6.81327 14 7.99996C14 9.59126 13.3678 11.1174 12.2426 12.2426C11.1174 13.3678 9.59126 14 7.99996 14Z" fill="#194BFB"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="w-auto p-2">
                        <h5 class="text-xs leading-tight font-medium text-black">Total Bookings</h5>
                        <h4 class="leading-6 text-black font-semibold">5</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6">
                <div class="p-4 bg-white border border-2 border-indigo-600 rounded-xl">
                  <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                    <div class="flex flex-wrap items-center mb-6 -m-2">
                      <div class="w-auto p-2 self-start">
                        <div class="flex w-8 h-8 items-center justify-center bg-white border-2 border-black rounded-xl">
                          <svg width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33338 6.00001H7.00005C7.17686 6.00001 7.34643 5.92977 7.47145 5.80474C7.59647 5.67972 7.66671 5.51015 7.66671 5.33334C7.66671 5.15653 7.59647 4.98696 7.47145 4.86193C7.34643 4.73691 7.17686 4.66667 7.00005 4.66667H6.33338V4.33334C6.33338 4.15653 6.26314 3.98696 6.13812 3.86193C6.01309 3.73691 5.84352 3.66667 5.66671 3.66667C5.4899 3.66667 5.32033 3.73691 5.19531 3.86193C5.07028 3.98696 5.00005 4.15653 5.00005 4.33334V4.70001C4.595 4.78225 4.23495 5.01207 3.98982 5.34485C3.74468 5.67762 3.63194 6.08961 3.67348 6.50084C3.71501 6.91206 3.90787 7.29318 4.2146 7.57021C4.52133 7.84725 4.92006 8.00042 5.33338 8.00001H6.00005C6.08845 8.00001 6.17324 8.03512 6.23575 8.09764C6.29826 8.16015 6.33338 8.24493 6.33338 8.33334C6.33338 8.42174 6.29826 8.50653 6.23575 8.56904C6.17324 8.63155 6.08845 8.66667 6.00005 8.66667H4.33338C4.15657 8.66667 3.987 8.73691 3.86198 8.86193C3.73695 8.98696 3.66671 9.15653 3.66671 9.33334C3.66671 9.51015 3.73695 9.67972 3.86198 9.80474C3.987 9.92977 4.15657 10 4.33338 10H5.00005V10.3333C5.00005 10.5101 5.07028 10.6797 5.19531 10.8047C5.32033 10.9298 5.4899 11 5.66671 11C5.84352 11 6.01309 10.9298 6.13812 10.8047C6.26314 10.6797 6.33338 10.5101 6.33338 10.3333V9.96667C6.73843 9.88442 7.09847 9.6546 7.34361 9.32183C7.58875 8.98905 7.70149 8.57706 7.65995 8.16584C7.61841 7.75461 7.42556 7.37349 7.11882 7.09646C6.81209 6.81943 6.41336 6.66626 6.00005 6.66667H5.33338C5.24497 6.66667 5.16019 6.63155 5.09768 6.56904C5.03516 6.50653 5.00005 6.42174 5.00005 6.33334C5.00005 6.24493 5.03516 6.16015 5.09768 6.09764C5.16019 6.03512 5.24497 6.00001 5.33338 6.00001ZM13 7.00001H11V1C11.0005 0.882532 10.9699 0.767021 10.9114 0.665169C10.8529 0.563317 10.7684 0.478741 10.6667 0.420005C10.5654 0.361493 10.4504 0.330688 10.3334 0.330688C10.2164 0.330688 10.1014 0.361493 10 0.420005L8.00005 1.56667L6.00005 0.420005C5.8987 0.361493 5.78374 0.330688 5.66671 0.330688C5.54969 0.330688 5.43473 0.361493 5.33338 0.420005L3.33338 1.56667L1.33338 0.420005C1.23203 0.361493 1.11707 0.330688 1.00005 0.330688C0.883022 0.330688 0.768059 0.361493 0.666713 0.420005C0.564976 0.478741 0.480567 0.563317 0.422031 0.665169C0.363496 0.767021 0.332913 0.882532 0.333379 1V11.6667C0.333379 12.1971 0.544093 12.7058 0.919166 13.0809C1.29424 13.456 1.80295 13.6667 2.33338 13.6667H11.6667C12.1971 13.6667 12.7059 13.456 13.0809 13.0809C13.456 12.7058 13.6667 12.1971 13.6667 11.6667V7.66667C13.6667 7.48986 13.5965 7.32029 13.4715 7.19527C13.3464 7.07024 13.1769 7.00001 13 7.00001ZM2.33338 12.3333C2.15657 12.3333 1.987 12.2631 1.86197 12.1381C1.73695 12.0131 1.66671 11.8435 1.66671 11.6667V2.15334L3.00005 2.91334C3.10294 2.96708 3.2173 2.99515 3.33338 2.99515C3.44946 2.99515 3.56382 2.96708 3.66671 2.91334L5.66671 1.76667L7.66671 2.91334C7.7696 2.96708 7.88396 2.99515 8.00005 2.99515C8.11613 2.99515 8.23049 2.96708 8.33338 2.91334L9.66671 2.15334V11.6667C9.66852 11.8941 9.7091 12.1196 9.78671 12.3333H2.33338ZM12.3334 11.6667C12.3334 11.8435 12.2631 12.0131 12.1381 12.1381C12.0131 12.2631 11.8435 12.3333 11.6667 12.3333C11.4899 12.3333 11.3203 12.2631 11.1953 12.1381C11.0703 12.0131 11 11.8435 11 11.6667V8.33334H12.3334V11.6667Z" fill="#194BFB"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="w-auto p-2">
                        <h5 class="text-xs leading-tight font-medium text-black">In Progress Event</h5>
                        <h4 class="leading-6 text-black font-semibold">1</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6">
                <div class="p-4 bg-white border border-2 border-indigo-600 rounded-xl">
                  <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                    <div class="flex flex-wrap items-center mb-6 -m-2">
                      <div class="w-auto p-2 self-start">
                        <div class="flex w-8 h-8 items-center justify-center bg-white border-2 border-black  rounded-xl">
                          <svg width="14" height="12" viewbox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1467 6C13.4786 5.63491 13.6638 5.16004 13.6667 4.66667C13.6667 4.13623 13.456 3.62753 13.0809 3.25245C12.7058 2.87738 12.1971 2.66667 11.6667 2.66667H8.21337C8.31987 2.36545 8.35266 2.04311 8.30899 1.72662C8.26532 1.41013 8.14646 1.10871 7.96237 0.847589C7.77828 0.586469 7.53432 0.373251 7.2509 0.225785C6.96748 0.0783194 6.65286 0.000897008 6.33337 0H2.33337C1.80294 0 1.29423 0.210714 0.91916 0.585787C0.544088 0.960859 0.333374 1.46957 0.333374 2C0.336314 2.49337 0.521515 2.96824 0.853374 3.33333C0.525404 3.70002 0.344086 4.17471 0.344086 4.66667C0.344086 5.15862 0.525404 5.63332 0.853374 6C0.525404 6.36668 0.344086 6.84138 0.344086 7.33333C0.344086 7.82529 0.525404 8.29998 0.853374 8.66667C0.521515 9.03176 0.336314 9.50663 0.333374 10C0.333374 10.5304 0.544088 11.0391 0.91916 11.4142C1.29423 11.7893 1.80294 12 2.33337 12H11.6667C12.0519 11.9979 12.4283 11.8847 12.7506 11.6739C13.073 11.4631 13.3276 11.1637 13.4839 10.8116C13.6403 10.4596 13.6916 10.0699 13.6318 9.6894C13.5719 9.30889 13.4035 8.95376 13.1467 8.66667C13.4747 8.29998 13.656 7.82529 13.656 7.33333C13.656 6.84138 13.4747 6.36668 13.1467 6ZM6.33337 10.6667H2.33337C2.15656 10.6667 1.98699 10.5964 1.86197 10.4714C1.73695 10.3464 1.66671 10.1768 1.66671 10C1.66671 9.82319 1.73695 9.65362 1.86197 9.52859C1.98699 9.40357 2.15656 9.33333 2.33337 9.33333H6.33337C6.51018 9.33333 6.67975 9.40357 6.80478 9.52859C6.9298 9.65362 7.00004 9.82319 7.00004 10C7.00004 10.1768 6.9298 10.3464 6.80478 10.4714C6.67975 10.5964 6.51018 10.6667 6.33337 10.6667ZM6.33337 8H2.33337C2.15656 8 1.98699 7.92976 1.86197 7.80474C1.73695 7.67971 1.66671 7.51014 1.66671 7.33333C1.66671 7.15652 1.73695 6.98695 1.86197 6.86193C1.98699 6.73691 2.15656 6.66667 2.33337 6.66667H6.33337C6.51018 6.66667 6.67975 6.73691 6.80478 6.86193C6.9298 6.98695 7.00004 7.15652 7.00004 7.33333C7.00004 7.51014 6.9298 7.67971 6.80478 7.80474C6.67975 7.92976 6.51018 8 6.33337 8ZM6.33337 5.33333H2.33337C2.15656 5.33333 1.98699 5.2631 1.86197 5.13807C1.73695 5.01305 1.66671 4.84348 1.66671 4.66667C1.66671 4.48986 1.73695 4.32029 1.86197 4.19526C1.98699 4.07024 2.15656 4 2.33337 4H6.33337C6.51018 4 6.67975 4.07024 6.80478 4.19526C6.9298 4.32029 7.00004 4.48986 7.00004 4.66667C7.00004 4.84348 6.9298 5.01305 6.80478 5.13807C6.67975 5.2631 6.51018 5.33333 6.33337 5.33333ZM6.33337 2.66667H2.33337C2.15656 2.66667 1.98699 2.59643 1.86197 2.4714C1.73695 2.34638 1.66671 2.17681 1.66671 2C1.66671 1.82319 1.73695 1.65362 1.86197 1.5286C1.98699 1.40357 2.15656 1.33333 2.33337 1.33333H6.33337C6.51018 1.33333 6.67975 1.40357 6.80478 1.5286C6.9298 1.65362 7.00004 1.82319 7.00004 2C7.00004 2.17681 6.9298 2.34638 6.80478 2.4714C6.67975 2.59643 6.51018 2.66667 6.33337 2.66667ZM12.1267 10.4733C12.0676 10.5357 11.9962 10.585 11.917 10.6183C11.8378 10.6516 11.7526 10.6681 11.6667 10.6667H8.21337C8.37324 10.2366 8.37324 9.7634 8.21337 9.33333H11.6667C11.8435 9.33333 12.0131 9.40357 12.1381 9.52859C12.2631 9.65362 12.3334 9.82319 12.3334 10C12.3321 10.0887 12.3132 10.1762 12.2777 10.2575C12.2423 10.3388 12.1909 10.4121 12.1267 10.4733ZM12.1267 7.80667C12.0676 7.869 11.9962 7.91837 11.917 7.95165C11.8378 7.98493 11.7526 8.0014 11.6667 8H8.21337C8.37324 7.56993 8.37324 7.09674 8.21337 6.66667H11.6667C11.8435 6.66667 12.0131 6.73691 12.1381 6.86193C12.2631 6.98695 12.3334 7.15652 12.3334 7.33333C12.3321 7.42201 12.3132 7.50955 12.2777 7.59083C12.2423 7.6721 12.1909 7.74548 12.1267 7.80667ZM12.1267 5.14C12.0676 5.20233 11.9962 5.2517 11.917 5.28499C11.8378 5.31827 11.7526 5.33473 11.6667 5.33333H8.21337C8.37324 4.90327 8.37324 4.43007 8.21337 4H11.6667C11.8435 4 12.0131 4.07024 12.1381 4.19526C12.2631 4.32029 12.3334 4.48986 12.3334 4.66667C12.3321 4.75534 12.3132 4.84288 12.2777 4.92416C12.2423 5.00544 12.1909 5.07882 12.1267 5.14Z" fill="#194BFB"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="w-auto p-2">
                        <h5 class="text-xs leading-tight font-medium text-black">Previous Bookings</h5>
                        <h4 class="leading-6 text-black font-semibold">3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <div class="pt-6 pb-14 px-6 bg-white border border-2 border-indigo-600 rounded-xl">
              <div class="flex flex-wrap -mx-3 -mb-4 justify-between items-center">
                <div class="w-auto px-3 mb-4">
                  <h4 class="text-lg text-black font-bold tracking-wide">Event Survey</h4>
                </div>
                <div class="w-full sm:w-auto px-3 mb-4">
                  <div class="flex flex-wrap items-center">
                    <div class="flex items-center mr-4">
                      <span class="inline-block w-3 h-1 mr-1 bg-blue-500 rounded-full"></span>
                      <span class="text-xs font-semibold text-black">A</span>
                    </div>
                    <div class="flex items-center mr-6">
                      <span class="inline-block w-3 h-1 mr-1 bg-yellow-500 rounded-full"></span>
                      <span class="text-xs font-semibold text-black">B</span>
                    </div>
                    <div class="w-full sm:w-auto mt-4 sm:mt-0">
                      <div class="relative inline-block max-w-max bg-gray-600 rounded-xl">
                        <select class="relative py-3 pl-2 pr-6 cursor-pointer bg-transparent text-xs text-black font-semibold appearance-none outline-none" style={{ zIndex: 1 }} name="" id="">
                          <option value="">7 Days</option>
                          <option value="">30 Days</option>
                        </select>
                        <span class="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2" style={{ zIndex: 0 }}>
                          <svg width="10" height="7" viewbox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L5 5.5L9 1.5" stroke="#3D485B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              
              <div class="chart mt-8 mb-3" data-type="chart-line" style={{ minHeight: '100px' }} >
                <div id="apexchartspssl5dwz" class="apexcharts-canvas apexchartspssl5dwz apexcharts-theme-light" style={{ width: '691px', height: '100px' }}>
                  <svg id="SvgjsSvg1088" width="691" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ background: 'transparent' }}>
                    <foreignobject x="0" y="0" width="691" height="100">
                      <div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style={{ maxHeight: '50px', maxWidth: '400px' }}></div>
                    </foreignobject>
                    <rect id="SvgjsRect1092" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1133" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g>
                    <g id="SvgjsG1090" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 1)">
                      <defs id="SvgjsDefs1089"><clippath id="gridRectMaskpssl5dwz"><rect id="SvgjsRect1094" width="697" height="110" x="-4" y="-6" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clippath><clippath id="forecastMaskpssl5dwz"></clippath><clippath id="nonForecastMaskpssl5dwz"></clippath><clippath id="gridRectMarkerMaskpssl5dwz"><rect id="SvgjsRect1095" width="695" height="102" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clippath></defs><line id="SvgjsLine1093" x1="114.66666666666666" y1="0" x2="114.66666666666666" y2="98" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="114.66666666666666" y="0" width="1" height="98" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1105" class="apexcharts-grid"><g id="SvgjsG1106" class="apexcharts-gridlines-horizontal" style={{ display: 'none' }}><line id="SvgjsLine1109" x1="0" y1="0" x2="691" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1110" x1="0" y1="9.8" x2="691" y2="9.8" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1111" x1="0" y1="19.6" x2="691" y2="19.6" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1112" x1="0" y1="29.400000000000002" x2="691" y2="29.400000000000002" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1113" x1="0" y1="39.2" x2="691" y2="39.2" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1114" x1="0" y1="49" x2="691" y2="49" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1115" x1="0" y1="58.8" x2="691" y2="58.8" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1116" x1="0" y1="68.6" x2="691" y2="68.6" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1117" x1="0" y1="78.39999999999999" x2="691" y2="78.39999999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1118" x1="0" y1="88.19999999999999" x2="691" y2="88.19999999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1119" x1="0" y1="97.99999999999999" x2="691" y2="97.99999999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1107" class="apexcharts-gridlines-vertical" e="display: none;"></g><line id="SvgjsLine1121" x1="0" y1="98" x2="691" y2="98" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1120" x1="0" y1="1" x2="0" y2="98" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1108" class="apexcharts-grid-borders" style={{ display: 'none' }}></g>
                      <g id="SvgjsG1096" class="apexcharts-line-series apexcharts-plot-series">
                        <g id="SvgjsG1097" class="apexcharts-series" zindex="0" seriesname="Uniquexvisitors" data:longestseries="true" rel="1" data:realindex="0">
                          <path id="SvgjsPath1100" d="M 0 29.399999999999977 L 115.16666666666666 97.99999999999999 L 230.33333333333331 29.399999999999977 L 345.5 39.19999999999999 L 460.66666666666663 25.47999999999999 L 575.8333333333333 48.99999999999997 L 691 60.75999999999999" fill="none" fill-opacity="1" stroke="rgba(37,99,235,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskpssl5dwz)" pathto="M 0 29.399999999999977 L 115.16666666666666 97.99999999999999 L 230.33333333333331 29.399999999999977 L 345.5 39.19999999999999 L 460.66666666666663 25.47999999999999 L 575.8333333333333 48.99999999999997 L 691 60.75999999999999" pathfrom="M -1 225.39999999999998 L -1 225.39999999999998 L 115.16666666666666 225.39999999999998 L 230.33333333333331 225.39999999999998 L 345.5 225.39999999999998 L 460.66666666666663 225.39999999999998 L 575.8333333333333 225.39999999999998 L 691 225.39999999999998" fill-rule="evenodd"></path>
                          <g id="SvgjsG1098" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realindex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1137" r="0" cx="115.16666666666666" cy="97.99999999999999" class="apexcharts-marker wnpotkp3b no-pointer-events" stroke="#ffffff" fill="#2563eb" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g>
                        </g>
                        <g id="SvgjsG1101" class="apexcharts-series" zindex="1" seriesname="Totalxvisitors" data:longestseries="true" rel="2" data:realindex="1">
                          <path id="SvgjsPath1104" d="M 0 45.079999999999984 L 115.16666666666666 29.399999999999977 L 230.33333333333331 68.6 L 345.5 35.27999999999997 L 460.66666666666663 88.19999999999999 L 575.8333333333333 5.8799999999999955 L 691 33.31999999999999" fill="none" fill-opacity="1" stroke="rgba(250,204,21,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="1" clip-path="url(#gridRectMaskpssl5dwz)" pathto="M 0 45.079999999999984 L 115.16666666666666 29.399999999999977 L 230.33333333333331 68.6 L 345.5 35.27999999999997 L 460.66666666666663 88.19999999999999 L 575.8333333333333 5.8799999999999955 L 691 33.31999999999999" pathfrom="M -1 225.39999999999998 L -1 225.39999999999998 L 115.16666666666666 225.39999999999998 L 230.33333333333331 225.39999999999998 L 345.5 225.39999999999998 L 460.66666666666663 225.39999999999998 L 575.8333333333333 225.39999999999998 L 691 225.39999999999998" fill-rule="evenodd"></path>
                          <g id="SvgjsG1102" class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" data:realindex="1"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1138" r="0" cx="115.16666666666666" cy="29.399999999999977" class="apexcharts-marker we4ykd4gq no-pointer-events" stroke="#ffffff" fill="#facc15" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g>
                        </g>
                        <g id="SvgjsG1099" class="apexcharts-datalabels" data:realindex="0"></g><g id="SvgjsG1103" class="apexcharts-datalabels" data:realindex="1"></g>
                      </g>
                      <line id="SvgjsLine1122" x1="0" y1="0" x2="691" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1123" x1="0" y1="0" x2="691" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1124" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1125" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1134" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1135" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1136" class="apexcharts-point-annotations"></g>
                    </g>
                  </svg>
                  <div class="apexcharts-tooltip apexcharts-theme-light" style={{ left: '126.167px', top: '-3.4px' }}>
                    <div class="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 1, display: 'flex' }}>
                      <span class="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(37, 99, 235)' }}></span>
                      <div class="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                       
                        <div class="apexcharts-tooltip-goals-group">
                          <span class="apexcharts-tooltip-text-goals-label"></span>
                          <span class="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div class="apexcharts-tooltip-z-group">
                          <span class="apexcharts-tooltip-text-z-label"></span>
                          <span class="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div>
                    <div class="apexcharts-tooltip-series-group apexcharts-active" style={{ order: 2, display: 'flex' }}>
                      <span class="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(250, 204, 21)' }}></span>
                      <div class="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                        
                        <div class="apexcharts-tooltip-goals-group">
                          <span class="apexcharts-tooltip-text-goals-label"></span>
                          <span class="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div class="apexcharts-tooltip-z-group">
                          <span class="apexcharts-tooltip-text-z-label"></span>
                          <span class="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div class="apexcharts-yaxistooltip-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div>
            <div class="pt-6 pb-14 px-6 bg-white border border-2 border-indigo-600 rounded-xl">
              <div class="flex flex-wrap -mx-3 mb-6 justify-between items-center">
                <div class="w-auto px-3">
                  <h4 class="text-lg text-black font-bold tracking-wide">Report</h4>
                </div>
                <div class="w-auto px-3">
                  <a class="inline-flex h-9 px-3 items-center text-xs font-semibold bg-gray-600 hover:bg-gray-700 transition duration-200 rounded-lg" href="#">
                    <span class="mr-2 text-black">Details</span>
                    <svg width="7" height="10" viewbox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 9L5.5 5L1.5 1" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="px-8 md:px-14 py-10 bg-white border border-2 border-indigo-600 rounded-xl">
                <div class="flex flex-wrap items-center justify-between -mx-2">
                  <div class="w-full md:w-1/2 px-2 mb-12 md:mb-0">
                    <div class="max-w-xxs pr-12">
                      <div class="flex flex-wrap -mx-2 -mb-3">
                        <div class="w-1/2 px-2 mb-3">
                          <div class="flex items-center">
                            <div class="w-1.5 h-1.5 mr-3 bg-purple-500 rounded-full"></div>
                            <div>
                              <h5 class="text-sm leading-5 text-black font-semibold">$725.00</h5>
                              <span class="text-xs leading-none font-semibold text-black opacity-60">Shopping</span>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 px-2 mb-3">
                          <div class="flex items-center">
                            <div class="w-1.5 h-1.5 mr-3 bg-green-500 rounded-full"></div>
                            <div>
                              <h5 class="text-sm leading-5 text-black font-semibold">$725.00</h5>
                              <span class="text-xs leading-none font-semibold text-black opacity-60">Food</span>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 px-2 mb-3">
                          <div class="flex items-center">
                            <div class="w-1.5 h-1.5 mr-3 bg-blue-500 rounded-full"></div>
                            <div>
                              <h5 class="text-sm leading-5 text-black font-semibold">$2,350.00</h5>
                              <span class="text-xs leading-none font-semibold text-black opacity-60">Home</span>
                            </div>
                          </div>
                        </div>
                        <div class="w-1/2 px-2 mb-3">
                          <div class="flex items-center">
                            <div class="w-1.5 h-1.5 mr-3 bg-yellow-500 rounded-full"></div>
                            <div>
                              <h5 class="text-sm leading-5 text-black font-semibold">$710.00</h5>
                              <span class="text-xs leading-none font-semibold text-black opacity-60">Others</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-2">
                    <div class="chart px-2" data-type="radial-bar-part" data-variant="four" style={{ minHeight: '118.935px' }}>
                      <div id="apexchartsa0ntp3ws" class="apexcharts-canvas apexchartsa0ntp3ws apexcharts-theme-light" style={{ width: '266px', height: '118.935px' }}>
                        <svg id="SvgjsSvg1139" width="266" height="118.93518518518519" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, -20)" style={{ background: 'transparent' }}>
                          <foreignobject x="0" y="0" width="266" height="118.93518518518519">
                            <div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml"></div>
                          </foreignobject>
                          <g id="SvgjsG1141" class="apexcharts-inner apexcharts-graphical" transform="translate(22.166666666666657, 1)">
                            <defs id="SvgjsDefs1140"><clippath id="gridRectMaska0ntp3ws"><rect id="SvgjsRect1142" width="227.66666666666669" height="231.66666666666669" x="-4" y="-6" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clippath><clippath id="forecastMaska0ntp3ws"></clippath><clippath id="nonForecastMaska0ntp3ws"></clippath><clippath id="gridRectMarkerMaska0ntp3ws"><rect id="SvgjsRect1143" width="225.66666666666669" height="223.66666666666669" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clippath></defs>
                            <g id="SvgjsG1144" class="apexcharts-radialbar">
                              <g id="SvgjsG1145">
                                <g id="SvgjsG1146" class="apexcharts-tracks">
                                  <g id="SvgjsG1147" class="apexcharts-radialbar-track apexcharts-track" rel="1">
                                    <path id="apexcharts-radialbarTrack-0" d="M 11.203334637105769 118.54982876635582 A 100.01056910569108 100.01056910569108 0 1 1 210.46333202956092 118.54982876635584 " fill="none" fill-opacity="1" stroke="rgba(26,32,44,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.3863902439024394" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathorig="M 11.203334637105769 118.54982876635582 A 100.01056910569108 100.01056910569108 0 1 1 210.46333202956092 118.54982876635584 "></path>
                                  </g>
                                  <g id="SvgjsG1149" class="apexcharts-radialbar-track apexcharts-track" rel="2">
                                    <path id="apexcharts-radialbarTrack-1" d="M 17.608137622885877 117.98948111298307 A 93.58130081300814 93.58130081300814 0 1 1 204.05852904378082 117.9894811129831 " fill="none" fill-opacity="1" stroke="rgba(26,32,44,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.3863902439024394" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathorig="M 17.608137622885877 117.98948111298307 A 93.58130081300814 93.58130081300814 0 1 1 204.05852904378082 117.9894811129831 "></path>
                                  </g>
                                  <g id="SvgjsG1151" class="apexcharts-radialbar-track apexcharts-track" rel="3">
                                    <path id="apexcharts-radialbarTrack-2" d="M 24.012940608665986 117.42913345961033 A 87.1520325203252 87.1520325203252 0 1 1 197.6537260580007 117.42913345961034 " fill="none" fill-opacity="1" stroke="rgba(26,32,44,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.3863902439024394" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathorig="M 24.012940608665986 117.42913345961033 A 87.1520325203252 87.1520325203252 0 1 1 197.6537260580007 117.42913345961034 "></path>
                                  </g>
                                  <g id="SvgjsG1153" class="apexcharts-radialbar-track apexcharts-track" rel="4">
                                    <path id="apexcharts-radialbarTrack-3" d="M 30.417743594446094 116.86878580623758 A 80.72276422764227 80.72276422764227 0 1 1 191.24892307222058 116.8687858062376 " fill="none" fill-opacity="1" stroke="rgba(26,32,44,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.3863902439024394" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathorig="M 30.417743594446094 116.86878580623758 A 80.72276422764227 80.72276422764227 0 1 1 191.24892307222058 116.8687858062376 "></path>
                                  </g>
                                </g>
                                <g id="SvgjsG1155">
                                  <g id="SvgjsG1158" class="apexcharts-series apexcharts-radial-series" seriesname="series-1" rel="1" data:realindex="0">
                                    <path id="SvgjsPath1159" d="M 11.203334637105769 118.54982876635582 A 100.01056910569108 100.01056910569108 0 0 1 194.70925412574837 55.36367348430608 " fill="none" fill-opacity="0.85" stroke="rgba(25,75,251,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.4292682926829272" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="152" data:value="80" index="0" j="0" data:pathorig="M 11.203334637105769 118.54982876635582 A 100.01056910569108 100.01056910569108 0 0 1 194.70925412574837 55.36367348430608 "></path>
                                  </g>
                                  <g id="SvgjsG1160" class="apexcharts-series apexcharts-radial-series" seriesname="series-2" rel="2" data:realindex="1">
                                    <path id="SvgjsPath1161" d="M 17.608137622885877 117.98948111298307 A 93.58130081300814 93.58130081300814 0 0 1 141.30042473072442 21.3504750858867 " fill="none" fill-opacity="0.85" stroke="rgba(147,109,255,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.4292682926829272" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-1" data:angle="114" data:value="60" index="0" j="1" data:pathorig="M 17.608137622885877 117.98948111298307 A 93.58130081300814 93.58130081300814 0 0 1 141.30042473072442 21.3504750858867 "></path>
                                  </g>
                                  <g id="SvgjsG1162" class="apexcharts-series apexcharts-radial-series" seriesname="series-3" rel="3" data:realindex="2">
                                    <path id="SvgjsPath1163" d="M 24.012940608665986 117.42913345961033 A 87.1520325203252 87.1520325203252 0 0 1 110.83333333333334 22.681300813008136 " fill="none" fill-opacity="0.85" stroke="rgba(250,204,21,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.4292682926829272" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-2" data:angle="95" data:value="50" index="0" j="2" data:pathorig="M 24.012940608665986 117.42913345961033 A 87.1520325203252 87.1520325203252 0 0 1 110.83333333333334 22.681300813008136 "></path>
                                  </g>
                                  <g id="SvgjsG1164" class="apexcharts-series apexcharts-radial-series" seriesname="series-4" rel="4" data:realindex="3">
                                    <path id="SvgjsPath1165" d="M 30.417743594446094 116.86878580623758 A 80.72276422764227 80.72276422764227 0 0 1 43.13352681241203 65.86856492064472 " fill="none" fill-opacity="0.85" stroke="rgba(36,209,100,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="1.4292682926829272" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-3" data:angle="38" data:value="20" index="0" j="3" data:pathorig="M 30.417743594446094 116.86878580623758 A 80.72276422764227 80.72276422764227 0 0 1 43.13352681241203 65.86856492064472 "></path>
                                  </g>
                                  <circle id="SvgjsCircle1156" r="65.02956910569107" cx="110.83333333333334" cy="109.83333333333334" class="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1157" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style={{ opacity: 0 }}></g>
                                </g>
                              </g>
                            </g>
                            <line id="SvgjsLine1166" x1="0" y1="0" x2="221.66666666666669" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1167" x1="0" y1="0" x2="221.66666666666669" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/5 px-3">
          <div class="p-6 bg-white border border-2 border-indigo-600 rounded-xl">
            <div class="flex flex-wrap -mx-3 mb-6 justify-between items-center">
              <div class="w-auto px-3">
                <h4 class="text-lg text-black font-semibold">Name</h4>
              </div>
            </div>
             <div className="px-3 md:px-14 pb-4 mb-4 border-b border-gray-400">
      <div className=" text-center">
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">JD</span>
          </div>
        </div>
      </div>
    </div>
            <div>
              <div class="flex mb-6 items-center justify-between">
                <h4 class="text-lg text-black font-semibold">Recent Activity</h4>
                <a class="inline-block text-sm text-black hover:text-black font-medium tracking-wide" href="#">Details</a>
              </div>
              <div class="flex mb-6 items-center justify-between">
                <div class="flex items-center">
                  <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                    <img src="trizzle-assets/logos/s-event 1.svg" alt=""/>
                  </div>
                  <div>
                    <h5 class="text-sm font-semibold text-black">event 1</h5>
                    <span class="text-xs text-gray-400 font-semibold">in progress</span>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-black font-semibold">place</h6>
                  <span class="text-xs text-gray-400 font-semibold">Today at 7.18 AM</span>
                </div>
              </div>
              <div class="flex mb-6 items-center justify-between">
                <div class="flex items-center">
                  <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                    <img src="trizzle-assets/logos/f-event 2.svg" alt=""/>
                  </div>
                  <div>
                    <h5 class="text-sm font-semibold text-black">event 2</h5>
                    <span class="text-xs text-gray-400 font-semibold">past</span>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-black font-semibold">place</h6>
                  <span class="text-xs text-gray-400 font-semibold">Today at 7.18 AM</span>
                </div>
              </div>
              <div class="flex mb-6 items-center justify-between">
                <div class="flex items-center">
                  <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                    <img src="trizzle-assets/logos/event 3-icon.svg" alt=""/>
                  </div>
                  <div>
                    <h5 class="text-sm font-semibold text-black">event 3</h5>
                    <span class="text-xs text-gray-400 font-semibold">past</span>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-black font-semibold">place</h6>
                  <span class="text-xs text-gray-400 font-semibold">Yesterday at 10.00 PM</span>
                </div>
              </div>
              <div class="flex mb-6 items-center justify-between">
                <div class="flex items-center">
                  <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                    <img src="trizzle-assets/logos/event 4-icon.svg" alt=""/>
                  </div>
                  <div>
                    <h5 class="text-sm font-semibold text-black">event 4</h5>
                    <span class="text-xs text-gray-400 font-semibold">past</span>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-black font-semibold">place</h6>
                  <span class="text-xs text-gray-400 font-semibold">Yesterday at 4.00 PM</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                    <img src="trizzle-assets/logos/event 5-icon.svg" alt=""/>
                  </div>
                  <div>
                    <h5 class="text-sm font-semibold text-black">event 5</h5>
                    <span class="text-xs text-gray-400 font-semibold">past</span>
                  </div>
                </div>
                <div class="text-right">
                  <h6 class="text-sm text-black font-semibold">place</h6>
                  <span class="text-xs text-gray-400 font-semibold">Yesterday at 4.00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Dashboard