import { useNavigate } from "react-router-dom"

function UnknownPage() {
    const navigate = useNavigate();
    return (
        <div style={{ width: "30%", margin: "auto" }} className="unknown"  >
            <h1>Oops Wrong path..</h1>
            <button style={{ cursor: "pointer" }} onClick={() => navigate("/signup")} className="create-account-btn">Back</button>
        </div>
    )
}

export default UnknownPage
