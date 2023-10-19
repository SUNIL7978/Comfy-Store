import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../Features/Users/userSlice";
import { clearCart } from "../Features/Cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className='bg-neutral py-2 text-neutral-content '>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <div className='flex gap-x-4 sm:gap-x-8 items-center'>
            <p className='text-sm font-medium'>Hello , {user.username}</p>
            <button className='btn btn-xs btn-accent' onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className='flex justify-center items-center gap-x-6'>
            <Link
              to='/login'
              className='uppercase btn btn-sm bg-indigo-400 font-bold text-xs sm:text-sm rounded-lg border-transparent'
            >
              Login / Guest
            </Link>
            <Link
              to='/register'
              className='btn btn-sm uppercase bg-blue-600 font-bold text-xs sm:text-sm rounded-lg border-transparent'
            >
              Create An Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
