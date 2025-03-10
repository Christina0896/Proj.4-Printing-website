import Logo from '/src/assets/logo.svg';
import UserLogo from '/src/assets/user.svg';
import Wishlist from '/src/assets/wishlist.svg';
import Cart from '/src/assets/cart.svg';

function Navbar() {
  return (
    <nav className="flex items-center px-10 py-5 ">
      <div className="logoImg">
        <img src={Logo} alt="Logo image" />
      </div>
      <div className="navLinks flex gap-15 font-bold">
        <a>Home</a>
        <a>Teespace</a>
        <a>Blog</a>
        <a>Pricing Plans</a>
      </div>
      <div className="navIcon flex gap-6 items-center">
        <a href="">
          <img src={UserLogo} alt="user account" />
        </a>
        <a href="">
          <img src={Wishlist} alt="whishlist" />
        </a>
        <a href="">
          <img src={Cart} alt="cart" />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
