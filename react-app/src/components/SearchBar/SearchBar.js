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
            <input
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
                className='search-bar'
                placeholder='Search Shreddit'
            ></input>
            <AiOutlineSearch className="icon" onClick={handleSearch} />
        </div>
    )
}


export default SearchBar
