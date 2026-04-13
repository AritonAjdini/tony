import './App.css'
import { Tabbleadder } from './Elements'
export default function App() {
    return(
    <div className="gridbox">
    <img src="src/assets/TF2_Icon.svg" className='floating'/>
        <div>
            <div id="inputs">
                <h1>TF2 User Database</h1>
                <input name="username" type="text" placeholder="Name of User" className="inpcss" id="first" const />
                <input name="Steamid" type="number" placeholder="SteamId" className="inpcss" id="second"/>
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
               <Tabbleadder/>
           </tbody>
        </table>
        </div>
    )
        
}



