import styles from "./Login.module.css"
import { InputfieldLogin } from "./Elements"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Allowed_users } from "./Confirmation" 
export const LoginForm = () => {
const navigate = useNavigate() 
const [error, SetError] = useState(null)
  const [text, setText] = useState({
    Username: "", Password: ""
  });

  const OnChange=(ev)=>{
    const {name, value} = ev.target
    setText((prev)=>({
      ...prev,
      [name]: value
    }));
  }  

  const OnSubmit =()=>{
    let foundMatch = false
    for (let i = 0; i < Allowed_users.length; i++) {

      if (text.Username === Allowed_users[i].Name && text.Password === Allowed_users[i].Password) {
        foundMatch = true; 
        break;             
      }
    }
    
    if(foundMatch){
      SetError(false) 
      navigate("/Text")
    } else {
      SetError(true)
    }
 
  }

  return(
    <div className={styles.gridbox}>
  <h1 className={styles.Header}>TF2 dev website</h1>
  
  <div className={styles.Insert}>
    {/* Username Input - Already correct, kept as is */}
    <InputfieldLogin 
      name="Username" 
      value={text.Username} 
      placeholder="Name" 
      className={`${styles.beautifytxt} ${styles.Insert}`} 
      OnChange={OnChange} 
    />
    
    {/* Password Input - Fixed comma syntax */}
    <InputfieldLogin 
      name="Password" 
      value={text.Password} 
      placeholder="Password" 
      className={`${styles.beautifytxt} ${styles.Insert}`} 
      OnChange={OnChange} 
    />
    
    {
    error 
      && 
    <p 
      style=
      {{ 
      color: 'red', 
      fontSize: '25px',
      fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
      textShadow: '2px 2px 2px rgba(0,0,0,0.5)',
      overflow: 'visible',
      textAlign: 'center'
      }}>Permission denied!
    </p>
    }
  </div>

  <div className={styles.btn}>
    <button type="button" className={styles.button} onClick={OnSubmit}>Login</button>
  </div>
  
  {/* Image Tag - Fixed comma syntax and alt attribute */}
  <img 
    src="src/assets/TF2_Icon.svg" 
    alt="TF2 Icon" 
    className={`${styles.iconin} ${styles.bclick}`} 
  />
</div>
  )
}

export default LoginForm