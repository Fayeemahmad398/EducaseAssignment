import { useNavigate } from "react-router-dom"

function UnknownPage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Oops Wrong path..</h1>
            <button onClick={() => navigate("/signup")}>Home</button>
        </div>
    )
}

export default UnknownPage
