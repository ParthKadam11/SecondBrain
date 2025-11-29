import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../utils/config";
import { Link, useNavigate } from "react-router-dom";
export function SignIn(){
    const usernameRef = useRef<HTMLInputElement >(null);
    const passwordRef = useRef<HTMLInputElement >(null);
    const navigate = useNavigate()

    async function signin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        const response=await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username:username,
            password:password
        })
        const jwt=response.data.token;
        localStorage.setItem("authorization",jwt)
        navigate("/dashboard")
    }
    return <div className="bg-Main-900 h-screen w-screen flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-68">
            <div className="flex justify-center p-4">
                Login To Your Account
            </div>
            <div className="pl-5 pr-5">
                <Input width="14" height="2.5" ref={usernameRef} placeholder="Username"/>
                <Input width="14" height="2.5" ref={passwordRef} placeholder="Password"/>   
            </div>
            <div className="flex justify-center pt-4 pl-7 pr-7 pb-3">
                <Button onClick={signin} loading={false} variant="primary" text="Sign In" fullWidth={true}/>
            </div>
            <div className="flex justify-center items-center pb-5"><Link to="/signup" className="text-sm text-blue-500">Don't have an Account? SignUp </Link></div>
        </div>
    </div>
}