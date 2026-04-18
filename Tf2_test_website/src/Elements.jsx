import { useState } from 'react'

export const Tabbleadder = () => {
    const [firstName, setFirstName] = useState('');
    // const valid = frst && scnd;

    
    return (
        <>
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
   
        <tr>
            <td>hello</td>
            <td>hello</td>
        </tr>
    
        <tr>
            <td colSpan="2" style={{ color: "red", textAlign: "center" }}>
                Please insert the data correctly!
            </td>
        </tr>
     </>
    );
}; 