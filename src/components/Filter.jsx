import React from 'react'

const Filter = () => {
    return (
        <div className=' bg-[#e8eddf]/[.5] mb-10 w-full px-10 py-4 gap-6 rounded-xl  backdrop-blur-lg'>
            <h1 className='font-bold text-xl'>Filters</h1>
            <div className=" mt-4">

                <div class="relative inline-block w-64 mr-4">
                    <select id="size" name="size" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option disabled selected>Size</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                </div>
                <div class="relative inline-block w-64 mr-4">
                    <select id="orientation" name="orientation" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option disabled selected>Orientation</option>
                        <option>Landscape</option>
                        <option>Potrait</option>
                        <option>Square</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Filter