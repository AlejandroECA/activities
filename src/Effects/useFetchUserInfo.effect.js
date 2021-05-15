import { useState, useEffect, useContext} from 'react'
import {auth} from '../firebase/firebase.utils';
import { createUserProfileDocument, signInWithGoogle } from '../firebase/users.firebase.utils'
// import { globalDispatch } from '../Pages/main'
// import { SignIn } from '../Contexts/store.context/actions'



const useFectchUserInfo = (activate) => {

    const [user, setUser] = useState(null)

    // const dispatch = useContext(globalDispatch)


    useEffect(() => {



      if(activate){

      let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            userAuth = {
                id: snapShot.id,
                ...snapShot.data(),
              }
            });
            setUser(userAuth)
        }
        else{
          setUser(userAuth)
        }
      })

      // dispatch(SignIn(user))

      console.log(user?`user fetched: ${user.displayName}`:`user fetching start`)
      console.log(user);
      
      }

    })
  

    return user

  

}

export default useFectchUserInfo


