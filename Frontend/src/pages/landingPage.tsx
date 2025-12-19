import { Button } from "../components/Button";
import { Logo } from "../icons/Logo";
import { useNavigate} from "react-router-dom";
import { HowItWorks } from "../components/howItWorks";
import { Footer } from "../components/Footer";
import { HeroTitle } from "../components/heroTitle";

export default function LandingPage(){
    const navigate = useNavigate()
        return <div className=" h-full w-full">
            <div className="p-1 bg-black/43">
                <div className="m-2 h-20 rounded-2xl bg-Main-900 flex items-center justify-between px-16 relative z-10 drop-shadow-md">
                <div onClick={()=>{navigate("/")}} className="flex items-center gap-4 cursor-pointer">
                    <div className="flex items-center justify-center"><Logo size="3" color="white"/></div>
                    <div className="text-2xl font-medium text-white">SecondBrain</div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-white text-lg">FAQ</div>
                    <div className="text-white text-lg">How It Works</div>
                    <div className="w-20">
                        <Button fullWidth variant="secondary" text="Github" onClick={() => window.open("https://github.com/ParthKadam11/SecondBrain","_blank")}/>
                    </div>
                </div>
            </div>
            </div>
            <HeroTitle/>
            <div className="pt-30">
                <HowItWorks/>
            </div>
            <div className="pt-40 flex-col">
                <div className="bg-Main-900 p-14 pt-25 flex justify-center text-2xl text-white font-extrabold">SecondBrain is built for students, researchers, and builders who don't want to lose valuable content again.</div>
                <div className="bg-Main-900 p-3 flex justify-center pb-18">
                    <video className="rounded-2xl w-250 h-140" autoPlay muted loop playsInline preload="auto">
                    <source src="/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                <Footer/>
            </div>                
            
        </div>
}