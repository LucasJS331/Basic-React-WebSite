import './style.css'
export const SearchBtn = ({placeholder, onChange, value})=>{
    return(
        <input placeholder={placeholder} className="input" type="search" onChange={onChange} value={value}/>
    )
}