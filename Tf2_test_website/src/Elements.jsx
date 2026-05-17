import { useState } from 'react'

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
                }}
                placeholder={props.name}
                className="inpcss"
            />
            {localError && <p style={{ color: 'red', fontSize: '12px' }}>{localError}</p>}
        </div>
    );
}

