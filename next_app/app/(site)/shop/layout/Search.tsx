// Props
import { DetailedHTMLProps, HTMLAttributes } from "react";

// Components
import { SearchBar } from "@/components/index";

type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search = ({...props}: SearchProps)=> {

    return (
        <div
            {...props}
            className="flex justify-center items-center px-5"
        >
            <SearchBar />
        </div>
    );
}