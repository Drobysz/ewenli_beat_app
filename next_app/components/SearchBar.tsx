import cn from 'classnames';

interface SearchBarprops {
    colorSet?: 'dark' | 'light'
    setSearchBarRequest: (e: string)=> void;
}

export const SearchBar = ({
    colorSet = 'dark',
    setSearchBarRequest
}: SearchBarprops)=> {
    return (
        <input 
            type="text"
            onChange={(e)=> setSearchBarRequest(e.target.value)}
            className={cn(
                "min-w-[180px] w-[70%] h-14 focus:outline-2 focus:outline-pinkish",
                "max-[610px]:h-10 rounded-2xl bg-[#282727] bg-[url(/Search.svg)]",
                "max-[682px]:bg-size-[40px] max-[610px]:bg-size-[30px]",
                "bg-position-[center_left_0.25rem] bg-no-repeat",
                "text-center max-[646px]:text-sm max-[610px]:text-xs max-[690px]:pl-10",
                "max-[610px]:pl-5 placeholder-[#6B6969]",
                {
                    ['bg-[#282727] text-white/80']: colorSet == 'dark',
                    ['bg-[#282727]/25 text-gray-800']: colorSet == 'light'
                }
            )}
            placeholder="enter the name of the beat"
        />
    )
};