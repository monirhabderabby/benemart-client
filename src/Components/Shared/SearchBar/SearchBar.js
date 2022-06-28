import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'

const SearchBar = () => {
    return (
        <div class="mx-auto">
    <div class="flex border-1 border-gray-200 rounded-md w-[80%]">
        <input type="text" class="px-3 py-2 w-80 h-3/4" placeholder="Search..." />
        <button class="px-3 text-white bg-custom-blue border-0 ">
            <SearchIcon className='h-5 w-5 text-white' />
        </button>
    </div>
</div>
    );
};

export default SearchBar;