import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image_Icon/Group 33092.png'

const Navbar = () => {
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
      <li><Link className='btn px-10 bg-pink-500 border-0 text-white' to="/login">Login</Link></li>

    </ul>
  </div>
</div>
    );
};

export default Navbar;