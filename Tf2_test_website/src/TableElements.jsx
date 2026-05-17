import "./App.css"
export const Rows = ({inpvalues}) =>{
    return (
        <>
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
        </>
    )
}