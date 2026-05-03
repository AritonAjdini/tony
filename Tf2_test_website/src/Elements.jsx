// import { useState } from 'react'

// export const RegExValidInputs = {
//         username: /^[a-z0-9_-]{3,16}$/,
//         steamIdentification: /^[0-9]{17}$/,
// }
// {/*Only Usernames with atleast 3 characters and upto 16 are allowed*/}
// {/*SteamID accepts only number strings of 17 numbers*/}

// export const Inputfield=(props)=>{
//    const [InputValue, setInputValue] = useState('');
//     const [Error, setError] = useState('');

//     let IsUsrnm = RegExValidInputs.username
//     let IsStmD = RegExValidInputs.steamIdentification

//     const Changeinput=(ev)=>{
//         const val = ev.target.value;
//         setInputValue(val);
//         const IsUsername=IsUsrnm.test(val);
//         const IsSteamID=IsStmD.test(val);
//         if(props.type === "text"){
//            (IsUsername)? setError("") : setError("Only Usernames with atleast 3 characters and upto 16 are allowed!")
//         }
//         if(props.type === "number"){
//            (IsSteamID)? setError("") : setError("SteamID accepts only number strings of 17 numbers!")
//         }
//     }

//     return (
//         <div style={{padding: '2px'}}>
//             <input
//              name={props.name}
//              type={props.type}
//              value={props.InputValue}
//             //  onChange={Changeinput}
//              onChange={props.ChangeonActions}
//              style={{
//                 border: Error ? '2px solid #ff0000' : '1px solid rgb(46, 250, 0)',
//              }}
//              placeholder={
//                 (props.type === "text")? "Username" : "SteamID"
//              }
//              className="inpcss"
             
//              />
        
//              {Error && <p style={{ color: 'red', fontSize: '15px', position: "center" }}>{Error}</p>}
//              {!Error && InputValue && <p style={{ color: 'green', fontSize: '15px', position: "center" }}>Looking good!</p>}
//         </div>
//     );
// }

// export const Btns = (props) => {
//    return (
//       <>
//          <button 
//            className="btn" 
//             name="Insert">
//             Insert
//           </button>
//           <button 
//             className="btn" 
//             name="Delete"
//             disabled={props.error}
//             style={{ opacity: !error ? 0.5 : 1, cursor: !error ? 'not-allowed' : 'pointer' }}
//           >
//             Delete
//           </button>
//       </>
//    )
// } 
   
import { useState } from 'react'

export const RegExValidInputs = {
    username: /^[a-z0-9_-]{3,16}$/,
    steamIdentification: /^[0-9]{17}$/,
}

export const Inputfield = (props) => {
    // We use a local error state just for the red border/text message
    const [localError, setLocalError] = useState('');

    const handleInternalChange = (ev) => {
        const val = ev.target.value;
        
        
        if (props.name === "Username") {
            RegExValidInputs.username.test(val) 
                ? setLocalError("") 
                : setLocalError("Only Usernames with atleast 3 characters and upto 16 are allowed!");
        } else {
            RegExValidInputs.steamIdentification.test(val) 
                ? setLocalError("") 
                : setLocalError("SteamID accepts only number strings of 17 digits!");
        }

        // 2. CRITICAL: Send the data up to the Parent's ChangeOnActions
        props.onChange(ev);
    };

    return (
        <div style={{ padding: '2px' }}>
            <input
                name={props.name}
                type={props.type}
                value={props.value} // Uses value from App.jsx state
                onChange={handleInternalChange}
                style={{
                    border: localError ? '2px solid #ff0000' : '2px solid #2efa00',
                }}
                placeholder={props.name}
                className="inpcss"
            />
            {localError && <p style={{ color: 'red', fontSize: '12px' }}>{localError}</p>}
        </div>
    );
}

