import { useState } from 'react'

const RegExValidInputs = {
        username: /^[a-z0-9_-]{3,16}$/,
        steamIdentification: /^[0-9]{17}$/,
}
{/*Only Usernames with atleast 3 characters and upto 16 are allowed*/}
{/*SteamID accepts only number strings of 17 numbers*/}

export const Tabbleinput = ({type}) => {
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
}; 

export const Tabblebuttons=({id})=>{
   const [Click, setClick] = useState('');
   const ClickChange=(ev)=>{
      {OnClick}
   }
}