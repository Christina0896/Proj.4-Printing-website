function Navbar() {
  return (
    <nav className="flex items-center px-10 py-5 ">
      <div className="logoImg">
        <img src="\src\assets\logo.svg" alt="Logo image" />
      </div>
      <div className="navLinks flex gap-15 font-bold">
        <a>Home</a>
        <a>Teespace</a>
        <a>Blog</a>
        <a>Pricing Plans</a>
      </div>
      <div className="navIcon flex gap-6 items-center">
        <a href="">
          <img src="\src\assets\user.svg" alt="user account" />
        </a>
        <a href="">
          <img src="\src\assets\wishlist.svg" alt="whishlist" />
        </a>
        <a href="">
          <img src="\src\assets\cart.svg" alt="cart" />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
