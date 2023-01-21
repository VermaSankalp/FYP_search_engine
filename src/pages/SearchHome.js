import { useState } from "react";
import { Button } from "../common/Components/Button.tsx";
import { InputField } from "../common/Components/InputField.tsx";
const SearchHome = () => {
    const [query, setQuery] = useState("")
    return (
        <div className="bg-white">
            <div className="flex flex-col gap-4 align-middle item-center">
                <div className="text-4xl">Financial News Search</div>
                <InputField customStyles={["py-4", "w-[600px]", "text-2xl"]} inputCallback={(query) => setQuery(query)}/>
                <Button 
                    buttonCallback={()=>console.log(`Search ${query}`)}
                    customStyles={["w-[200px]"]}
                >
                    Search
                </Button>
            </div>
            <div>
                {query}
            </div>
        </div>
    )
}

export default SearchHome; 