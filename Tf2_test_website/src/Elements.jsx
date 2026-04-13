export const Tabbleadder = () => {

    const valid = frst && scnd;

    return valid ? (
        <tr>
            <td>{frst}</td>
            <td>{scnd}</td>
        </tr>
    ) : (
        <tr>
            <td colSpan="2" style={{ color: "red", textAlign: "center" }}>
                Please insert the data correctly!
            </td>
        </tr>
    );
}; 