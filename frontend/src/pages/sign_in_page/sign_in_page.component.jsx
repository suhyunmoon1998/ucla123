import React, { useState } from "react";
import "./sign_in_page.styles.css"


export const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmittion = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

    return (
        <div className="auth-form-container">
            <form>
                <label for = "email" > email </label>
                <input value ={email} type ="email" placeholder="youremail@gmail.com" id = "email" name="email"/>
                <label for = "password" > password </label>
                <input value = {password} type ="password" placeholder="********" id = "password" name="password"/>
                <button type="submit"> SignIn</button>
            </form>
            <button> Create an Account </button>
        </div>
    )
}