import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'

const SearchBar = () => {
    return (
        <div class="mx-auto">
    <div class="flex border-1 border-gray-200 rounded-md w-[80%]">
        <input type="text" class="px-3 py-2 w-80 h-3/4 rounded-tl-lg rounded-bl-lg border-gray-200 focus:outline-5 ring-0 focus:border-0" placeholder="Search..." />
        <button class="px-3 text-white bg-primary border-0 rounded-tr-lg rounded-br-lg">
            <SearchIcon className='h-5 w-5 text-white' />
        </button>
    </div>
</div>
    );
};

export default SearchBar;