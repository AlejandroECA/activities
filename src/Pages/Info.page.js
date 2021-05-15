import React from "react";
import  useFetchInfo from "../Effects/useFetchInfo.effect";
import {Link} from 'react-router-dom'


const Info = () => {

    const info = useFetchInfo('Info1')

    return (
      <div>
        <h1>Info</h1>
        <p>{info.join()}</p>

        <div>
        <Link to='/userInfo'>
            <button type='button' >Next</button>
        </Link>

        </div>
      </div>
    );
}


export default Info;
