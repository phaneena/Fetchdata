import React, { useContext, useEffect, useState } from 'react'
import { fetchcontext } from './Context'

const datass = () => {
    const {fetchproducts,favrt,addfavrt}=useContext(fetchcontext)
    const [search,setSearch]=useState('')
    console.log(fetchproducts);
    console.log(favrt);
    
    const [filtered,setFiltered]=useState([])
    useEffect(()=>{
        if(search){
            const searchfilter=fetchproducts.filter((data)=>
                data.name.toLowerCase().includes(search.toLowerCase())
            )
            setFiltered(searchfilter)
        }
        else{
            setFiltered(fetchproducts)
        }
        
    },[search])

  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {filtered.map((data)=>(
            <div key={data.id}>
                <span>{data.name}</span>
                <button onClick={()=>addfavrt(data)}>Favourites</button>
            </div>
        ))}
        <h1>Favourites</h1>
        {favrt.map((item)=>(
            <div key={item.id}>
                <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default datass