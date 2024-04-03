import "../style/profile.css"
import profileImg from "../assets/Ellipse 114@2x.png"
import camera from "../assets/cameraImg.svg"

function Profile() {
    const currUser = JSON.parse(localStorage.getItem("currUser"));
    const currUserInfo = JSON.parse(
        localStorage.getItem("allUsers"))
        .find((user) => user.email == currUser.email);
    console.log(currUser, currUserInfo);

    return <div style={{ width: "100%", height: "100%", margin: "auto" }}>
        <div className="forms profile">
            <div style={{
                width: "100%", height: "60px", display: "flex", padding: "10px",
                alignItems: "center", boxShadow: "0px 0px 2px grey"

            }}>Account setting</div>
            <div style={{ padding: "10px" }}>

                <div className="profile-box">
                    <div style={{ height: "70px", position: "relative" }} className="img-box">
                        <img src={profileImg} alt="" />
                        <img src={camera} alt="" className="camera" />
                    </div>
                    {
                        currUserInfo &&
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{fontWeight:"600"}}>{currUserInfo.fullname}</div>
                            <div>{currUserInfo.email}</div>
                        </div>
                    }
                </div>
                <div>Lorem ipsum dolor , pariatur commodi odit aliquid saepe rerum, hic deserunt laborum molestiae ducimus quam repudiandae!</div>
            </div>
        </div>
    </div>
}

export default Profile
