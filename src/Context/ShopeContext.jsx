import React, { createContext }  from "react";
import all_product from '../Components/Assets/Assets/all_product'
export const ShopeContext= createContext(null)
const ShopeConextProvider =(props)=>{
    const contextvalue ={all_product }
    return (
        <ShopeContext.Provider value={contextvalue}>
{props.children}
        </ShopeContext.Provider>
    )
}
export default ShopeConextProvider