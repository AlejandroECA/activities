import Info from './Info.page'
import UserInfo from './userInfo.page'
import { Switch, Route,  withRouter} from 'react-router-dom';
import React ,{useReducer}from 'react';
import { initialState , globalStoreReducer } from '../Contexts/store.context/store.context';
import Reserve from './reserve'



export const globalState = React.createContext()
export const globalDispatch = React.createContext()


const Main = () => {

    const [state, dispatch] = useReducer(
        globalStoreReducer,
        initialState
    )

    console.log(state);


    return (
        <div style={{margin:'20px '}}>
            <globalState.Provider value={state}>
                <globalDispatch.Provider value={dispatch}>

                    <Switch>
                        <Route exact path='/' component={Info} />
                        <Route path='/UserInfo' component={UserInfo} />
                        <Route path='/reserve' component={Reserve} />
                    </Switch>

                </globalDispatch.Provider>
            </globalState.Provider>
        </div>
    );
    
}

export default withRouter(Main);