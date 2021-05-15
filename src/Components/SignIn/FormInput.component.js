import React from 'react';


const FormInput = ({ handleChange, label , ...restOfprops}) => {
    return(
        <div >
            <input onChange={handleChange} {...restOfprops}/>
            {
                label? (<label> {label} </label>):null
            }
        </div>
    )

}

export default FormInput