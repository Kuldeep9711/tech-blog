import Logo from "../Logo";


export default function Navbar() {
    return (
        <nav className="h-18 fixed top-0 left-0 z-50 backdrop-blur-md backdrop-saturate-50">
           <div className="flex items-center justify-center h-full w-[90%] mx-auto">
                <Logo /> 
           </div>
        </nav>
    )
}