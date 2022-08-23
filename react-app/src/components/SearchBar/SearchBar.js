import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { search, emptySearch } from "../../store/search";
import './SearchBar.css'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [searchInput, setSearchInput] = useState('')
    const results = useSelector(state => state.search.search_results)

    useEffect(() => {
        if (searchInput) {
            dispatch(search(searchInput))
        } else {
            dispatch(emptySearch())
        }
    }, [dispatch, searchInput])

    const handleSearch = () => {

        history.push('/search');
    }


    return (
        <div className="search-bar-container">
            <div className="navBar__searchBar">
                <div className="navBar__searchInput">
                    {/* <form>
                        <input
                            onChange={e => setSearchInput(e.target.value)}
                            value={searchInput}
                            className='search-bar'
                            placeholder='Search Shreddit'
                        ></input>
                        <input type="submit" style={{display: "none"}} />
                        <input onClick={handleSearch} type="submit" style={{visibility: "hidden"}} />
                    </form> */}
                    <input
                        onChange={e => setSearchInput(e.target.value)}
                        value={searchInput}
                        className='search-bar'
                        placeholder='Search Shredder Communities'
                    ></input>
                    <AiOutlineSearch className="search-button" onClick={handleSearch} />
                    {/* <button className="search-button" onClick={handleSearch}>Search</button> */}
                </div>
            </div>
        </div>
    )
}


export default SearchBar
