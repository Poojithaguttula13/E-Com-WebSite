
import React, { useState } from 'react'
import { acData } from '../data/ac'
import '../../App.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AcPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if(selectedProduct.includes(company)){
            setSelectedProduct(selectedProduct.filter(item => item !== company))
        }
        else {
            setSelectedProduct([...selectedProduct, company])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((lengths)=>selectedProduct.includes(lengths.company))

  return (
   <>
   <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
    {acData.map((phone) => {
        return(
            <div className='pro-input'>
                <label>
                    <input type="checkbox" checked ={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                    />
                    {phone.company}
                </label>
            </div>
        )
    })}
</div>
<div className="pageSection">
    {filteredProduct.map((item)=>{
        return(
            <div>
                <Link to={`/ac/${item.id}`}>
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
    </div>
   </>
  )
}

export default AcPage
