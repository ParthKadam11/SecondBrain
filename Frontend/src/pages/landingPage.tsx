import { Button } from "../components/Button";
import { Logo } from "../icons/Logo";
import { useNavigate ,Link} from "react-router-dom";
import { HowItWorks } from "../components/howItWorks";
export default function LandingPage(){
    const navigate = useNavigate()
        return <div className="pt-1 bg-slate-200 h-full w-full">
            <div className="m-4 h-20 rounded-2xl bg-Main-900 flex items-center justify-between px-16">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center"><Logo size="3" color="white"/></div>
                    <div className="text-2xl font-medium text-white">SecondBrain</div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-white text-lg">FAQ</div>
                    <div className="text-white text-lg">How It Works</div>
                    <div className="w-40">
                    <Button fullWidth variant="secondary" text="Get Started" onClick={() => navigate("/signup")}/>
                    </div>
                </div>
            </div>
            <div className="pt-40 pl-18">
                <div className="text-6xl font-medium">Think Faster</div>
                <div className="text-7xl font-thin">Organize Smarter</div>
                <div className="text-7xl font-medium">Remember Everything.</div>
                <div className="text-2xl pt-4 pl-1">lightweight personal inbox for ideas from across the web.</div>
            </div>
            <div className="flex pt-6 pl-18 gap-4">
                <div><Button variant="primary" text="Get Started" onClick={() => navigate("/signup")}/></div>
                <Link to={"https://github.com/ParthKadam11/SecondBrain"} target="_blank">
                <Button variant="primary" text="GitHub"/>
                </Link>
            </div>
            
            <div>
            <HowItWorks/>
            </div>
            <div className="h-40"></div>
        </div>
}