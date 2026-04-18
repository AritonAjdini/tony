import './App.css'
import { Tabbleinput } from './Elements'

import { useState } from 'react'
export default function App() {
    const [firstName, setFirstName] = useState('');
    return( 
    <div className="gridbox">
      <img src="src/assets/TF2_Icon.svg" className='floating'/>
          <div>
            <div id="inputs">
                <h1>TF2 User Database</h1>
                <Tabbleinput type="text"/>
                <Tabbleinput type="number" />
            </div>
            <div id="buttons">
                <button className="btn" id="insert" data-tooltip="Insert the Username and SteamId">Insert</button>
                <button className="btn" id="delete" data-tooltip="Delete the elements of the table">Delete</button>
            </div>
         </div>  
       <table>
            <thead>
              <tr>
                   <th id="firsthd">Name</th>
                   <th id="scndhd">SteamID</th>
              </tr>
            </thead>
            <tbody>
                    
            </tbody>
        </table>
    </div>   
    )
        
}



