import './App.css'
import { Tabbleinput } from './Elements'
import { useState } from 'react'

export default function App() {
    const [submit, setsubmit] = useState('');
    
    return( 
        <Tabbleinput/>
    )
        
}



