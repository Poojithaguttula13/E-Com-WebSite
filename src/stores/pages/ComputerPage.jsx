import React from 'react'
import { computerData } from '../data/computers'
import '../components/Mobiles.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ComputerPage = () => {
  return (
   <>
   <Navbar />
   <div className="pageSection">
    {computerData.map((item)=>{
        return(
            <div>
                <Link to={`/computer/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div className="proModel">
                    {item.company},{item.model}
                </div>
            </div>
        )
    })}
   </div>
   </>
  )
}

export default ComputerPage
