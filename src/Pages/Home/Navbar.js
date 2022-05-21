import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Image_Icon/Group 33092.png';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);


    return (
<div class="navbar bg-base-100 py-3 container mx-auto">
  <div class="flex-1 ">
    <a class="btn btn-ghost normal-case text-xl w-[128px]"><img src={logo} alt="" /></a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">Our Portfolio</Link></li>
      <li><Link to="/">Our Team</Link></li>
      <li><Link to="/">Contract Us</Link></li>
      <li>{!user? <Link className='btn px-10 bg-pink-500 border-0 text-white' to="/login">Login</Link>: <button  className='btn px-10 bg-pink-500 border-0 text-white' onClick={()=>signOut(auth)}>SignOut</button>}</li>

    </ul>
  </div>
</div>
    );
};

export default Navbar;