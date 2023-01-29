import { useState } from "react";
import { Button } from "../common/Components/Button.tsx";
import { InputField } from "../common/Components/InputField.tsx";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchHome = () => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate();

    const navigateWithQuery = (query) => {
        navigate({
            pathname: "/search-results",
            search: createSearchParams({
                query: query
            }).toString()
        })
    }
    return (
        <>
            <div className="px-32 py-[52px] z-10 relative overflow-auto h-full font-source-sans-pro">
                <div className="flex flex-col gap-4 align-middle">
                    <div className="text-4xl text-center">Financial News Search</div>
                    <div className="mx-auto">
                        <InputField customStyles={["py-4", "w-[600px]", "text-2xl"]} inputCallback={(query) => setQuery(query)} onKeyDownCallback={() => {
                            navigateWithQuery(query);
                        }}/>
                    </div>
                    <div className="mx-auto">
                        <Button 
                            buttonCallback={()=>navigateWithQuery(query)}
                            customStyles={["w-[200px]"]}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div>
                    {query}
                </div>
            </div>
        </>
    )
}

export default SearchHome; 