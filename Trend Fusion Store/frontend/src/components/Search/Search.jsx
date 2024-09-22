 import { IoMdClose } from "react-icons/io"
import SearchItem from "./SearchItem"
import { forwardRef, useEffect, useState } from "react"
import { fetchDataFromAPI } from "../../utilities/api"

const Search = forwardRef(({ handleSearchDisplay } , search) => {

    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // Add overflow hidden to html element when component mounts
        document.documentElement.style.overflowY = 'hidden';

        return () => {
            // Cleanup function to remove overflow hidden from html element when component unmounts
            document.documentElement.style.overflowY = 'auto';
        };
    }, []);

    useEffect(() => {
        fetchSearchProducts();
    }, [query])
    
    async function fetchSearchProducts(){
        if(query === ''){
            setSearchResult([]);
            return;
        }

        const {data} = await fetchDataFromAPI(`/api/products?populate=*&filters[title][$contains]=${query}`);
        setSearchResult(data);
    }

  return (
    <section ref={search} className="overflow-y-scroll fixed z-10 top-0 left-0 w-screen h-screen bg-white font-cabin">
        <div className="relative flex items-center justify-end py-4 pe-[5%]">
            <input 
                type="text"
                autoFocus
                placeholder="SEARCH FOR PRODUCT" 
                onChange={(event) => {setQuery(event.target.value)}}
                className="absolute left-[50%] max-sm:left-[5%] sm:translate-x-[-50%] text-2xl sm:text-3xl font-semibold text-gray-900 border-none outline-none"
            />
            <IoMdClose onClick={handleSearchDisplay} className="text-5xl max-sm:text-3xl cursor-pointer hover:text-slate-gray"/></div>
        <div>

        <hr />

        <div className="h-full mt-5 flex flex-col items-center gap-2 max-sm:px-5">
            {searchResult?.map((item) => {
                return (
                    <SearchItem 
                        key={item.id} 
                        image={import.meta.env.VITE_DEV_URL + item.img[0].url}
                        id={item.id}
                        handleSearchDisplay={handleSearchDisplay}
                    />
                )
            })}
        </div>

        </div>
    </section>
  )
})

export default Search