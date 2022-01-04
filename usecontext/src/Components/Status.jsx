import React from 'react'
import { AppContext } from '../Context/AppContextProvider'

const Status = () => {

    const {isAuth, token} = React.useContext(AppContext)

    return (
        <div>
            {
                isAuth ? `Token is ${token}` : `User has not logged in.`
            }
            {/* <AppContext.Consumer>
                {
                    value => {
                        console.log("Inside Comsumer: ",value.token)
                        return (
                            <div>
                                {value.token}
                            </div>
                        )
                    }
                }
            </AppContext.Consumer> */}
        </div>
    )
}

export default Status
