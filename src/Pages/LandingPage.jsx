import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "../style/landing-page.css"

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("currUser"))
            navigate("/profile");
    }, [])



    return (
        <div className="landing-page forms">
            <h2 className="welcome-page">Welcome to PopX</h2>
            <div>
                <p className="landing-page-p">Lorem ipsum dolor sit amet,
                </p>
                <p className="landing-page-p">
                    adipisicing elit. Libero, odit!</p>
            </div>

            <button className="create-acct-btn landing-btn"
                onClick={() => navigate("/signup")}>Create Account</button>
            <button className="login-landing-btn landing-btn" onClick={() => navigate("/login")}>Already Registered ?Login</button>
        </div>
    )
}

export default LandingPage
