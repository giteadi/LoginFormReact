import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg';
import toast from "react-hot-toast";
const Navbar=(props)=>{
   const isLoggedIn=props.isLoggedIn;
   const setLoggedIn=props.setLoggedIn;
    return(
        <div  className="flex justify-between items-center p-5 bg-blue-500">

            {/* StudyNotion Image */}

            <Link to="">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>
           
           {/* Navigation fonts */}

           <nav>
                 <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                 </ul>
           </nav>

           {/* Button section:- Login Signup Logout Dashboard */}

           <div className="flex ml-3 gap-5">

               {
                 !isLoggedIn &&
                 <Link to='/login'>

                 <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={()=>{
                    toast.success("Login Successfull")
                 }}>Login</button>

                </Link>
               }

               { 
                  !isLoggedIn &&
                   <Link to='/signup'>

                   <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
  
                  </Link>
               }

               {
                  isLoggedIn &&
                   <Link to='/dashboard'>

                   <button>Dashboard</button>
  
                  </Link>
               }
               {
                isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setLoggedIn(false);
                        toast.success("Logged Out");
                    }}>LogOut</button>
                </Link>
               }
            
           </div>
        </div>
    )
}
export default Navbar;