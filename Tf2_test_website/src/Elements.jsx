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

