import React, { useState } from 'react';


const HookForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    let [listOfUsers, setListOfUsers] = useState([]);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirm_password };
        console.log("Welcome", newUser);

        setListOfUsers([...listOfUsers, newUser]);
    };
    
    return (
        <>
        <div className="container">
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                {
                    username.length<2 && username.length>0 ? <p className='text-danger'>Username must contain more than 2 letters</p> : ""
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length < 5 && email.length>0 ? <p className='text-danger'>Email address must contain atleast 5 characters</p> : ""  
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {
                    password.length<8 && password.length>0 ? <p className='text-danger'>Password must contain 8 or more characters</p> : ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                {
                    confirm_password !== password ? <p className='text-danger'>Passwords must match</p> : ""
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            {
                listOfUsers.map((user)=>{return(
                    <div>
                        <h3>New User Information:</h3>
                        <p>Username: {user.username}</p>
                        <p>Email Address: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <p>Confirm Password: {user.confirm_password}</p>
                    </div>
                )})
            }
        </div>
        </>
        
        );
    }

export default HookForm;

