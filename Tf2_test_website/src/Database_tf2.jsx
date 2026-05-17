import "./App.css"
import { Inputfield, RegExValidInputs } from "./Elements"
import { useState } from "react"
import { Rows } from "./TableElements"
export const Database = () => {
  const [error, setError] = useState('')
  const [inpvalues, SetValues] = useState([])
  const [inputvalue, SetInputValue] = useState({
    Username: "", SteamID: ""
  })

const ChangeOnActions = (ev) => {
    const { name, value } = ev.target;

    SetInputValue((prev) => ({
      ...prev,
      [name]: value
    }));

    const currentData = { ...inputvalue, [name]: value };

    const Booluser = RegExValidInputs.username.test(currentData.Username || "");
    const Boolid = RegExValidInputs.steamIdentification.test(currentData.SteamID || ""); 
    
    const Boolcheck = Booluser && Boolid;
    
    setError(Boolcheck);
};

  const ClickChange = () => {
    SetValues((prev) => [...prev, inputvalue])
    SetInputValue({
      Username: "",
      SteamID: ""
    });
    setError(false);
 }

 const Remove = () => {
  SetValues([])
 }


     return (
    <div className="gridbox">
      <img src="src/assets/TF2_Icon.svg" className='floating' alt="TF2 Icon" />
      <div>
        <div id="inputs">
          <h1>TF2 User Database</h1>
          <Inputfield name="Username" type="text" value={inputvalue.Username} onChange={ChangeOnActions}/>
          <Inputfield name="SteamID" type="text" value={inputvalue.SteamID} onChange={ChangeOnActions}/>
        </div>
        <div id="buttons">
          <button
            onClick={ClickChange}
            disabled={!error} 
            style={{ opacity: !error ? 0.5 : 1, cursor: !error ? 'not-allowed' : 'pointer' }} 
            className="btn"
        >Insert Data</button>
        <button
            onClick={Remove}
            disabled={inpvalues.length === 0}
            style={{ opacity:  (inpvalues.length === 0)? 0.5 : 1, cursor: (inpvalues.length === 0)? 'not-allowed' : 'pointer' }} 
            className="btn"
        >Delete All</button>
        </div>
      </div>
      {/*Bëje tabelën krejt si element në vete*/}
      <Rows inpvalues={inpvalues}/>
      {/*Bëje këtë krejt si element në vete*/}
    </div>
  );
};

export default Database; 
