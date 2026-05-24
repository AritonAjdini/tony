import { useState } from 'react'
import styles from "./App.module.css"
export const RegExValidInputs = {
    username: /^[a-zA-Z0-9_ -]{3,16}$/, 
    steamIdentification: /^[0-9]{17}$/,
}

export const Inputfield = (props) => {

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
                    padding: '10px 10px',       /* Adds height/breathing room */
                    fontSize: '24px',           /* Makes the text large */
                    width: '30rem',              /* Forces it to fill the grid space */
                    boxSizing: 'border-box',    /* Prevents padding from breaking the layout */
                    borderRadius: '6px',        /* Clean rounded corners */
                    backgroundColor: '#fff',    /* Keeps background readable */
                    display: 'block',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',           /* Stack them neatly */
                    margin: '5px',
                    outline: 'none',
                }}
                placeholder={props.name}
                className="inpcss"
            />
            {localError && <p style={{ color: 'red', fontSize: '12px' }}>{localError}</p>}
        </div>
    );
}

export const InputfieldLogin = (props) => {
    
    return (
        <div style={{ padding: '2px' }}>
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                style={{
                 border: '2px solid #00ffdd',
                 padding: '25px 10px',       /* Adds height/breathing room */
                 fontSize: '24px',           /* Makes the text large */
                 width: '30rem',              /* Forces it to fill the grid space */
                 boxSizing: 'border-box',    /* Prevents padding from breaking the layout */
                 borderRadius: '6px',        /* Clean rounded corners */
                 backgroundColor: '#fff',    /* Keeps background readable */
                 display: 'block',
                 boxShadow: '4px 4px 10px rgba(0,0,0,0.5)',           /* Stack them neatly */
                 margin: '5px',
                 outline: 'none',
            }}
                placeholder={props.name}
                className={styles.inpcss}
            />
        </div>
    );
}