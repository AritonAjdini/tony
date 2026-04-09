const Tableadder=()=>{
    //UserName
    let frst=document.getElementById("first").value;
    //SteamId
    let scnd=document.getElementById("second").value;
       
        if(frst !== null && scnd !== null && (typeof frst !== 'string') && (typeof scnd === 'number')){
            return 
            ( 
                <tr>
                   <td>{frst}</td>
                   <td>{scnd}</td>
               </tr>
            )
        }else{
            <p style={color="red"}>Please insert the data correctly, and do not leave empty space!</p>
        } 
    

}

export const Tabbleadder=()=>{};