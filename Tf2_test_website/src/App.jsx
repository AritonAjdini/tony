import './App.css'
import { Tabbleadder } from './Elements'

export default function App() {
    return(
    <div className="gridbox">
    <img src="src/assets/TF2_Icon.svg" className='floating'/>
        <Tabbleadder/>
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



