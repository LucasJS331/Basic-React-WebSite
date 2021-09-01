import './style.css'
import React from 'react';
import p from "prop-types"

export const Search = ({placeholder, onChange, value})=> (
        <input placeholder={placeholder} className="input" type="search" onChange={onChange} value={value}/>
    )

Search.propTypes ={
  placeholder: p.string.isRequired,
  onChange: p.func.isRequired,
  value: p.string.isRequired
}
