import React from 'react';

function Profile() {
  return (
    <div class="flex flex-col justify-center items-center h-[83vh]">
    <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3 border-2 border-indigo-600">
        <div class="mt-4 mb-8 w-full flex items-center"> {/* Reduced mt-2 to mt-4 */}
            <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">PF</span>
            </div>
            {/* Profile name on the right */}
            <div class="flex-1">
                <h4 class="px-2 text-xl font-bold text-navy-700 dark:text-white">NAGASUNDAR N</h4>
            </div>
        </div>
    <div class="grid grid-cols-2 gap-4 px-2 w-full">
            <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p class="text-sm text-gray-600">Email</p>
            <p class="text-base font-medium text-navy-700 dark:text-white">
                727721eucs085@skcet.ac.in
            </p>
            </div>

            <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p class="text-sm text-gray-600">Phone Number</p>
            <p class="text-base font-medium text-navy-700 dark:text-white">
                9894147343
            </p>
            </div>

            <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p class="text-sm text-gray-600">Place</p>
            <p class="text-base font-medium text-navy-700 dark:text-white">
                SKCET,Coimbatore
            </p>
            </div>

            <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p class="text-sm text-gray-600">Role</p>
            <p class="text-base font-medium text-navy-700 dark:text-white">
                User
            </p>
            </div>

        </div>
    </div>  
</div>
  );
}

export default Profile;
