import React from 'react'
import { MagnifyingGlass } from 'phosphor-react'

const SearchBar = (props) => {
  return (
    <div className="Search-bar">
        <MagnifyingGlass/>
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="Search-input" />
    </div>
  )
}

export default SearchBar