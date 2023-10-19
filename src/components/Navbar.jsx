import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLinks } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/Users/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden btn btn-primary lg:flex text-3xl items-center rounded-lg font-bold'
          >
            Comfy
          </NavLink>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='w-6 h-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm z-[1] dropdown-content mt-3 w-52 p-2 bg-base-200 shadow rounded-box text-center'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME ICON */}
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            <BsSunFill className='swap-on w-6 h-6' />
            <BsMoonFill className='swap-off w-6 h-6' />
          </label>
          {/* CART LINK */}
          <NavLink to='cart' className='btn btn-ghost btn-md btn-circle ml-4'>
            <div className='indicator'>
              <BsCart3 className='w-6 h-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
