import React from 'react'
import { tvData } from '../data/tv'
import '../components/Mobiles.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const TvPage = () => {
  return (
   <>
   <Navbar />
   <div className="pageSection">
    {tvData.map((item)=>{
        return(
            <div>
                <Link to={`/tv/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className="proModel">
                    {item.brand},{item.model}
                </div>
            </div>
        )
    })}
   </div>
   </>
  )
}

export default TvPage
