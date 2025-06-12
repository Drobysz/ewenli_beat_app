// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

// Components
import { SearchBar } from "@/components/index";

type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Search: FC<SearchProps> = ({...props})=> {

    return (
        <div
            {...props}
            className="flex justify-center items-center px-5"
        >
            <SearchBar />
        </div>
    );
}