

import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import '../components/Mobiles.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (type) => {
        if(selectedProduct.includes(type)){
            setSelectedProduct(selectedProduct.filter(item => item !== type))
        }
        else {
            setSelectedProduct([...selectedProduct, type])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? kitchenData : kitchenData.filter((lengths)=>selectedProduct.includes(lengths.type))

  return (
   <>
   <Navbar />

    <div className="fullpage">
    <div className="pro-selected">
    {kitchenData.map((phone) => {
        return(
            <div className='pro-input'>
                <label>
                    <input type="checkbox" checked ={selectedProduct.includes(phone.type)}
                    onChange={() => companyHandler(phone.type)}
                    />
                    {phone.type}
                </label>
            </div>
        )
    })}
</div>
<div className="pageSection">
    {filteredProduct.map((item)=>{
        return(
            <div>
                <Link to={`/fridge/${item.id}`}>
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
    </div>
   </>
  )
}

export default KitchenPage













// import React from 'react'
// import { kitchenData } from '../data/kitchen'
// import '../components/Mobiles.css'
// import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'

// const KitchenPage = () => {
//   return (
//    <>
//    <Navbar />
//    <div className="pageSection">
//     {kitchenData.map((item)=>{
//         return(
//             <div>
//                 <Link to={`/kitchen/${item.id}`}>
//                 <div className="pageImg">
//                     <img src={item.image} alt="" />
//                 </div>
//                 </Link>
//                 <div className="proModel">
//                     {item.type},{item.model}
//                 </div>
//             </div>
//         )
//     })}
//    </div>
//    </>
//   )
// }

// export default KitchenPage
