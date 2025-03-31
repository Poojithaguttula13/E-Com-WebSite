import React from 'react'
import { womanData } from '../data/woman'
import '../components/Mobiles.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const WomanPage = () => {
  return (
   <>
   <Navbar />
   <div className="pageSection">
    {womanData.map((item)=>{
        return(
            <div>
                <Link to={`/woman/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className="proModel">
                    {item.type},{item.model}
                </div>
            </div>
        )
    })}
   </div>
   </>
  )
}

export default WomanPage
