import { Logo } from "../icons/Logo";
export function Footer(){
  return (
    <footer className="bg-Main-900 text-white p-4">
      <div className="mx-auto px-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 cursor-pointer">
            <div className="flex items-center justify-center"><Logo size="2" color="white"/></div>
            <div className="text-2xl font-medium text-white">SecondBrain</div>
        </div>
        <nav className="flex items-center text-md gap-10">
          <a href="https://www.linkedin.com/in/parthganpatkadam/" target="_blank" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="/signup" className="hover:underline">Demo</a>
          <a href="https://github.com/ParthKadam11/SecondBrain" target="_blank" className="hover:underline">GitHub</a>
        </nav>
      </div>
          <a href="https://www.linkedin.com/in/parthganpatkadam/" target="_blank" className="font-semibold p-4 pt-8 flex justify-center">~ Built by Parth Kadam</a>
    </footer>
  );
}
