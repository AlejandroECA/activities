import React ,{ useContext, useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Components/SignIn/CustomButton.component";
import useFectchUserInfo from '../Effects/useFetchUserInfo.effect'
import { globalDispatch, globalState } from "./main";
import { logOut } from '../Contexts/store.context/actions'
import { signInWithGoogle } from "../firebase/users.firebase.utils";
import {SignIn} from "../Contexts/store.context/actions"



const UserInfo = () => {

  const activate = useRef(true)
  const userFromFetch = useFectchUserInfo(activate.current)

  const state = useContext(globalState)
  const user = state.user
  console.log(state);
  const dispatch = useContext(globalDispatch)
  const handleloLogIn = async() => {

    await signInWithGoogle()
    activate.current = true
    if(userFromFetch){
      await dispatch(SignIn(userFromFetch))
      console.log(userFromFetch);
    }

  }

  return (
    <div>
      <h4>Log In</h4>
      {user ? <h4>Hi! {user.displayName} </h4> : null}
      <div>
        <CustomButton type="button" isGoogle onClick={() => handleloLogIn()}>
          LogIn with Google
        </CustomButton>
      </div>



      <div>
        <Link to="/">
          <button type="button">Back</button>
        </Link>
        {user ? (
          <div>

            <Link to="/reserve">
              <button type="button">Next</button>
            </Link>
            <button type="button" onClick = { () => {dispatch(logOut())}}>LOG OUT</button>
          </div>
        ) : null}

      </div> 

    </div>
  );

}

export default UserInfo;
