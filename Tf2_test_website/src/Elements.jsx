import { useState } from 'react'

const RegExValidInputs = {
        username: /^[a-z0-9_-]{3,16}$/,
        steamIdentification: /^[0-9]{17}$/,
}
{/*Only Usernames with atleast 3 characters and upto 16 are allowed*/}
{/*SteamID accepts only number strings of 17 numbers*/}

export const Inputfield=({type})=>{
   const [InputValue, setInputValue] = useState('');
    const [Error, setError] = useState('');

    let IsUsrnm = RegExValidInputs.username
    let IsStmD = RegExValidInputs.steamIdentification

    const Changeinput=(ev)=>{
        const val = ev.target.value;
        setInputValue(val);
        const IsUsername=IsUsrnm.test(val);
        const IsSteamID=IsStmD.test(val);
        if(type === "text"){
           (IsUsername)? setError("") : setError("Only Usernames with atleast 3 characters and upto 16 are allowed!")
        }
        if(type === "number"){
           (IsSteamID)? setError("") : setError("SteamID accepts only number strings of 17 numbers!")
        }
    }

    return (
        <div style={{padding: '2px'}}>
            <input
             value={InputValue}
             onChange={Changeinput}
             style={{
                border: Error ? '2px solid #ff0000' : '1px solid rgb(46, 250, 0)',
             }}
             placeholder={
                (type === "text")? "Username" : "SteamID"
             }
             className="inpcss"
             />
        
             {Error && <p style={{ color: 'red', fontSize: '15px', position: "center" }}>{Error}</p>}
             {!Error && InputValue && <p style={{ color: 'green', fontSize: '15px', position: "center" }}>Looking good!</p>}
        </div>
    );
}
   
export const Tabbleinput = ({id}) => {
   const [formData, setFormData] = useState({ Username: "", SteamID: "" });
   const [rows, setRows] = useState([]);

   // This runs every time the component renders
  const isUsernameValid = RegExValidInputs.username.test(formData.Username);
  const isSteamIDValid = RegExValidInputs.steamIdentification.test(formData.SteamID);
   // The buttons should be DISABLED if Username is invalid OR SteamID is invalid
   const isInvalid = !isUsernameValid || !isSteamIDValid;

 
   const handleChange = (e) => {
    const buttonId = e.target.id; // Correct way to get the ID
    
    if (buttonId === "insert") {
      // 2. Use the correct property names from your state
      if (formData.Username && formData.SteamID) {
        setRows(prevRows => [...prevRows, formData]);
        setFormData({ Username: "", SteamID: "" }); // Reset
      }
    } else if (buttonId === "delete") {
      setRows([]); // Clear the table
    }
  };

 const handleAddRow = ({id}) => {
   if(id==="insert"){
      if (formData.name && formData.role) {
         setRows(prevRows => [...prevRows, formData]);
         setFormData({ name: "", role: "" }); 
       }
   }
  
 };

 return (
   <div className="gridbox">
      <img src="src/assets/TF2_Icon.svg" className='floating'/>
          <div>
            <div id="inputs">
                <h1>TF2 User Database</h1>
                <Inputfield type="text" value={formData.Username} onChange={handleChange}/>
                <Inputfield type="number" value={formData.SteamID} onChange={handleChange}/>
            </div>
            <div id="buttons">
                <button onClick={handleAddRow} style={{ opacity: isInvalid ? 0.5 : 1, cursor: isInvalid ? 'not-allowed' : 'pointer' }} className="btn" id="insert" data-tooltip="Insert the Username and SteamId">Insert</button>
                <button onClick={handleAddRow} style={{ opacity: isInvalid ? 0.5 : 1, cursor: isInvalid ? 'not-allowed' : 'pointer' }} className="btn" id="delete" data-tooltip="Delete the elements of the table">Delete</button>
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
               {rows.map((row, index) => (
                   <tr key={index}>
                       <td>{row.Username}</td>
                       <td>{row.SteamID}</td> 
                   </tr>
               ))}
            </tbody>
        </table>
    </div> 
    )  
}; 


