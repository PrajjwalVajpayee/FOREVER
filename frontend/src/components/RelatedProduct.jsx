import  { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProduct = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(()=>{
        
    })
    return (
   
    <div>
      
    </div>
  )
}

export default RelatedProduct
