import React, { useEffect, useState } from 'react'
import './project.css'

const App = () => {
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" ></link>
 const[data,setData]=useState([])
 const[search,SetSearch]=useState("")
 const[activePhotoId, setActivePhotoId] = useState(null);

 useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=41521069-d58a1e12e0a2e683e31c49fa1&q=${search}&image_type=photo`)
    .then(res=>res.json())
    .then(d=>setData(d.hits))
 })

 const handlePhotoClick = (id) => {
    setActivePhotoId(id);
 }

 return (
    
    <div>
      <div className="re">
      
        <div className="rt">
        <i class="fa-brands fa-pied-piper-alt">Pixbay</i>
        
        
        </div>
      <input className='se' type="search" onChange={(e)=>SetSearch(e.target.value) }placeholder= '   Enter Here What You Want To Search 🔍' ></input>
      
      
      </div>
      <section className={`lp ${activePhotoId ? 'blurred-background' : ''}`} >
        {data.map((x)=>{
          return(
            <div key={x.id} onClick={() => handlePhotoClick(x.id)}>
              <img className={`mg ${activePhotoId === x.id ? 'active-photo' : ''}`} src={x.largeImageURL} alt="" ></img>
            </div>
          )
        })}
      </section>
      
    </div>
 )
}

export default App