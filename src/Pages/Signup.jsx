import { useState } from "react"
import "../style/signup.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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


    return (
        <div>
            <h3>Create your popX acount</h3>
            <input type="text" name="fullname" onChange={handleChangeByUser} />
            <input type="tel" name="phoneNo" onChange={handleChangeByUser} />
            <input type="email" name="email" onChange={handleChangeByUser} />
            <input type="password" name="password" onChange={handleChangeByUser} />
            <input type="text" name="company" onChange={handleChangeByUser} />
            <div>
                <p>Are you a agency *</p>
                <label htmlFor="yes">Yes</label>
                <input id="yes" type="radio"
                    value={"yes"} name="agency"
                    checked={userInfo.agency == "yes" ? true : false}
                    onChange={handleChangeByUser} />

                <label htmlFor="no">No</label>
                <input id="no" type="radio"
                    value={"no"} name="agency"
                    onChange={handleChangeByUser} />

            </div>
            <button onClick={handleCreateAcount}>Create Account</button>
        </div>
    )
}

export default Signup
