import { Button } from "./Button"
import { Link, useNavigate } from "react-router-dom"

export function HeroTitle(){
    const navigate =useNavigate()
    return <div className="min-h-screen flex items-center pl-20 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/background.jpg')"}}>
                <div className="absolute inset-0 bg-black/30 -z-0"></div>                
                <div className="flex flex-col relative z-10 max-w-4xl">
                    <span className="text-6xl font-medium text-white drop-shadow-lg">Think Faster</span>
                    <span className="text-7xl font-thin text-white drop-shadow-lg">Organize Smarter</span>
                    <span className="text-7xl font-medium text-white drop-shadow-lg">Remember Everything.</span>
                    <span className="text-2xl pt-4 text-white drop-shadow-md">lightweight personal inbox for ideas from across the web.</span>
                    <div className="flex pt-6 gap-4">
                        <div ><Button variant="primary" text="Get Started" onClick={() => navigate("/signup")}/></div>
                        <Link to={"/signin"} target="_blank">
                            <Button variant="primary" text="LOGIN"/>
                        </Link>
                    </div>
                </div>
            </div>
}