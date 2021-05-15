import React from 'react';


import {CustomButtonContainer} from './Button.Styles'

const CustomButton = ({children,...props}) => {
    return(
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>

    )
}

export default CustomButton