import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <header className="bg-red-600 text-white py-4 px-10 shadow-md flex justify-between">
        <h1 className="text-3xl font-bold">Blood Bank</h1>
        <div className="flex gap-10">
            <Link to="/home" className="text-xl text-white">Home</Link>
            <Link to="/profile" className="text-xl text-white">Profile</Link>
            <Link to="/about" className="text-xl text-white">About</Link>
            <Link to="/contact" className="text-xl text-white">Contact</Link>
        </div>
      </header>
        </div>
    )
}