import React from 'react'

import { auth, app, db } from '../firebase'

export default props => {
    return(
        <div>{auth.currentUser.email}</div>
    )
}