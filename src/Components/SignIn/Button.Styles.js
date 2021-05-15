import styled , {css} from "styled-components";

const buttonsStyles = css`
    background-color: black;
    color: white;
    border:none;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`


const googleSignStyles = css`
    background-color: #4285f4;
    color:white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyles = props => {

    if (props.isGoogle){
        return googleSignStyles;
    }
    return buttonsStyles

}

export const CustomButtonContainer = styled.button`
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor:pointer;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    ${getButtonStyles}

`