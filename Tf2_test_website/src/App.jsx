// import "./App.css"
// import { Inputfield } from './Elements'
// import { useState } from 'react'
// import { RegExValidInputs } from './Elements'
// const App = () => {
//     const [inpval, setInpVal] = useState({ Username: "", SteamID: "" });
//     const [rows, setRows] = useState([]);
    
//     const isUsernameValid = RegExValidInputs.username.test(inpval.Username);
//     const isSteamIDValid = RegExValidInputs.steamIdentification.test(inpval.SteamID);
//     const isInvalid = isUsernameValid && isSteamIDValid;
    
//     // const handleChange = (e) => {
//     // const buttonId = e.target.id; // Correct way to get the ID
        
//     //     if (buttonId === "insert") {
//     //       if (inpval.Username && inpval.SteamID) {
//     //         setRows(prevRows => [...prevRows, inpval]);
//     //         setInpVal({ Username: "", SteamID: "" }); // Reset
//     //       }
//     //     } else if (buttonId === "delete") {
//     //       setRows([]); 
//     //     }
//     //   };
    
//     //  const handleClick = ({id}) => {
//     //    if(id==="insert"){
//     //       if (inpval.Username && inpval.SteamID) {
//     //          setRows(prevRows => [...prevRows, inpval]);
//     //          setInpVal({ Username: "", SteamID: "" }); 
//     //        }
//     //    }
//     //   }

//     const handleChange = (e) => {
//     const { name, value } = e.target; 
//     setInpVal(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handles the button actions
//   const handleClick = (e) => {
//     const buttonId = e.currentTarget.id;

//     if (buttonId === "insert") {
//       if (isFormValid) {
//         setRows(prevRows => [...prevRows, inpval]);
//         setInpVal({ Username: "", SteamID: "" }); // Reset
//       }
//     } else if (buttonId === "delete") {
//       setRows([]);
//     }
//   };

//     return( 
//            <div className="gridbox">
//               <img src="src/assets/TF2_Icon.svg" className='floating'/>
//                 <div>
//                     <div id="inputs">
//                         <h1>TF2 User Database</h1>
//                         <Inputfield type="text" value={inpval.Username} onChange={handleChange}/>
//                         <Inputfield type="number" value={inpval.SteamID} onChange={handleChange}/>
//                     </div>
//                     <div id="buttons">
//                         <button onClick={handleClick} style={{ opacity: isInvalid ? 0.5 : 1, cursor: isInvalid ? 'not-allowed' : 'pointer' }} className="btn" id="insert" data-tooltip="Insert the Username and SteamId">Insert</button>
//                         <button onClick={handleClick} style={{ opacity: isInvalid ? 0.5 : 1, cursor: isInvalid ? 'not-allowed' : 'pointer' }} className="btn" id="delete" data-tooltip="Delete the elements of the table">Delete</button>
//                     </div>
//                 </div>  
//                 <table>
//                     <thead>
//                       <tr>
//                            <th id="firsthd">Name</th>
//                            <th id="scndhd">SteamID</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                        {rows.map((row, index) => {
//                         return(
//                             <tr key={index}>
//                                <td>{row.Username}</td>
//                                <td>{row.SteamID}</td> 
//                            </tr>
//                         )
//                       })}
//                     </tbody>
//                 </table>
//             </div> 
//             );  
// }






// export default App

// import "./App.css"
// import { Inputfield, RegExValidInputs } from './Elements.jsx'; 
// import { useState } from 'react';

// const App = () => {
//   const [inpval, setInpVal] = useState({ Username: "", SteamID: "" });
//   const [rows, setRows] = useState([]);

//   const isUsernameValid = RegExValidInputs.username.test(inpval.Username);
//   const isSteamIDValid = RegExValidInputs.steamIdentification.test(inpval.SteamID);
//   const isFormValid = isUsernameValid && isSteamIDValid;

//   const handleChange = (e) => {
//     const { name, value } = e.target; 
//     setInpVal(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleClick = (e) => {
//     const buttonId = e.currentTarget.value

//     if (buttonId === "insert") {
//       if (isFormValid) {
//         setRows(prevRows => [...prevRows, inpval]);
//         setInpVal({ Username: "", SteamID: "" }); // Reset
//       }
//     } else if (buttonId === "delete") {
//       setRows([]);
//     }
//   };
//   //
//   console.log("Current State:", inpval);
//   console.log("User Valid:", isUsernameValid, "Steam Valid:", isSteamIDValid);
//   //
//   return (
//     <div className="gridbox">
//       <img src="src/assets/TF2_Icon.svg" className='floating' alt="TF2 Icon" />
//       <div>
//         <div id="inputs">
//           <h1>TF2 User Database</h1>
//           {/* Ensure your Inputfield component passes 'name' to the input tag */}
//           <Inputfield 
//             name="Username" 
//             type="text" 
//             value={inpval.Username} 
//             onChange={handleChange} 
//           />
//           <Inputfield 
//             name="SteamID" 
//             type="number" 
//             value={inpval.SteamID} 
//             onChange={handleChange} 
//           />
//         </div>
//         <div id="buttons">
//           <button 
//             onClick={handleClick} 
//             disabled={!isFormValid}
//             style={{ opacity: !isFormValid ? 0.5 : 1, cursor: !isFormValid ? 'not-allowed' : 'pointer' }} 
//             className="btn" 
//             id="insert"
//           >
//             Insert
//           </button>
//           <button 
//             onClick={handleClick} 
//             className="btn" 
//             style={{ opacity: !isFormValid ? 0.5 : 1, cursor: !isFormValid ? 'not-allowed' : 'pointer' }} 
//             disabled={rows.length>0? false:true}
//             id="delete"
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th id="firsthd">Name</th>
//             <th id="scndhd">SteamID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.Username}</td>
//               <td>{row.SteamID}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App; // Cleanly outside the component

import "./App.css"
import { Inputfield, Btns, RegExValidInputs } from "./Elements"
import { useState } from "react"
export const App = () => {
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
          <Btns
            onClick={ClickChange}
            disabled={!error} // 'error' is your Boolcheck result
            style={{ opacity: !error ? 0.5 : 1, cursor: !error ? 'not-allowed' : 'pointer' }} 
          />
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
          {inpvalues.map((item, index) => (
            <tr key={index}>
              <td>{item.Username}</td>
              <td>{item.SteamID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App; // Cleanly outside the component
