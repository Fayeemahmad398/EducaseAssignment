import { useEffect, useState } from "react"
import "../style/signup.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Radio, TextField } from "@mui/material";
import "../style/signup.css"

function Signup() {
    const navigate = useNavigate();
    const [allUsers, setAllusers] = useState([]);
    const [userInfo, setUserInfo] = useState(
        {
            fullname: "", phoneNo: "", email: "",
            password: "", company: "", agency: "yes"
        })


    //setting the users details in local state
    function handleChangeByUser(e) {
        const { name, value } = e.target;
        userInfo[name] = value;
        setUserInfo({ ...userInfo });
    }

    function checkEmailExist() {
        let users = JSON.parse(localStorage.getItem("allUsers")) || [];
        return users.some((info) => info.email == userInfo.email)

    }

    function handleCreateAcount() {
        //checking all info entered by user or not
        for (let key in userInfo) {
            //not required field
            if (key == "company") continue;
            //these are required field
            if (!userInfo[key]) {
                toast.warn(`Enter the ${key} please !`);
                return;
            }
        }
        //checking email is allready used or not
        let isEmailAllreadyUsed = checkEmailExist();

        if (!isEmailAllreadyUsed) {
            let allUsersInfos = JSON.parse(localStorage.getItem("allUsers")) || allUsers;
            setAllusers([...allUsersInfos, userInfo]);
            localStorage.setItem("allUsers", JSON.stringify([...allUsersInfos, userInfo]));
            setUserInfo({
                fullname: "", phoneNo: "", email: "",
                password: "", company: "", IsAgency: true
            });
            toast.success("Acount created acount successfully");
            navigate("/login");
        } else {
            toast.warn("Email is allready used")
            return;
        }
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("currUser"))) {
            navigate("/profile")
        }
    })




    return (
        <div className="forms">
            <h3 className="create-acc-heading">Create your popX acount</h3>
            <TextField
                required
                id="outlined-required"
                label="Enter fullname"
                defaultValue=""
                placeholder="Enter fullname"
                type="text" name="fullname" onChange={handleChangeByUser}
                size="small"
                inputProps={{ color: "#6c25ff;" }}
                InputLabelProps={{ style: { color: "#6c25ff" } }}
            />
            <TextField
                required
                id="outlined-required"
                label="Enter phone"
                defaultValue=""
                placeholder="Enter phone"
                type="tel" name="phoneNo" onChange={handleChangeByUser}
                size="small"
                inputProps={{ color: "#6c25ff;" }}
                InputLabelProps={{ style: { color: "#6c25ff" } }}
            />
            <TextField
                required
                id="outlined-required"
                label="Enter email Address"
                defaultValue=""
                placeholder="Enter email address"
                type="email" name="email" onChange={handleChangeByUser}
                size="small"
                inputProps={{ color: "#6c25ff;" }}
                InputLabelProps={{ style: { color: "#6c25ff" } }}
            />
            <TextField
                required
                id="outlined-required"
                label="Enter password"
                defaultValue=""
                placeholder="Enter password"
                type="password" name="password" onChange={handleChangeByUser}
                size="small"
                inputProps={{ color: "#6c25ff;" }}
                InputLabelProps={{ style: { color: "#6c25ff" } }}
            />
            <TextField
                id="outlined-required"
                label="company"
                defaultValue=""
                placeholder="Enter company name"
                type="text" name="company" onChange={handleChangeByUser}
                size="small"
                inputProps={{ color: "#6c25ff;" }}
                InputLabelProps={{ style: { color: "#6c25ff", } }}
            />
            <div>
                <p>Are you a agency  <span style={{ color: "red", }}>
                    *
                </span>
                </p>
                <Radio
                    checked={userInfo.agency == "yes"}
                    onChange={handleChangeByUser}
                    value="yes"
                    name="agency"
                    inputProps={{ color: "#6c25ff;" }}
                    style={{ color: "#6c25ff" }}

                />
                <Radio
                    checked={userInfo.agency == "no"}
                    onChange={handleChangeByUser}
                    value="no"
                    name="agency"
                    style={{ color: "#6c25ff" }}
                />
            </div>
            <button className="create-account-btn" onClick={handleCreateAcount}>Create Account</button>
        </div>
    )
}

export default Signup
