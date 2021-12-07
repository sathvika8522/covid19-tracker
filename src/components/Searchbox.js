import React,{ useState } from 'react'
import '../styles/Searchbox.css'

const Searchbox = ({SubmitHandler}) => {

    const [search,setSearch]=useState('')

    const SubmitSearch=(e)=>
    {
         e.preventDefault()
         console.log(search)
         SubmitHandler(search)
    }
    return (
        <div className="main">
         <form className="p-relative" onSubmit={(e)=>SubmitSearch(e)} >
             <h4 className="text-white text-center mb-3">This is an unprecedented time <br />It's time for unprecedented Kindness</h4>
            <input className="form-controls w-50" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter country name........" />   
            <button type="submit" className="btn mt-3" >Search</button>
         </form>
        </div>
    )
}

export default Searchbox
