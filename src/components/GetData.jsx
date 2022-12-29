import userEvent from '@testing-library/user-event'
import React from 'react'

import { auth, app, db } from '../firebase'

export default props => {
    const getDataFromFirebase = async () => {
        const data = await getDocs(keyCollection)
        const dadosColecao = data.docs.map(documento =>{
            return documento._document.data.value.mapValue.fields
        })
        
        console.log(dadosColecao)
    }
    
    return(
        <div>getData</div>
    )
}

