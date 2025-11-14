export default function CurrentTime() {
    const divStyle = {
        backgroundColor: "black",
        color : "white",
        padding : "10px",
        margin : "20px",
    }
    return (
        <div style={divStyle}>
            입장시간 : ⏰ 
            <span style={{color : "yellow", fontWeight : "bold"}}>
                {new Date().toLocaleTimeString()}
            </span>
        </div>
    )
}