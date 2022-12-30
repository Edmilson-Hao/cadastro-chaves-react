import userEvent from '@testing-library/user-event'
import React from 'react'
import { documentId } from 'firebase/firestore'
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore'

import { auth, app, db } from '../firebase'

export default props => {
    const keyCollection = collection(db, 'chaves')
    
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

