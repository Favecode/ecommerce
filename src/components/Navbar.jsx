const Navbar = ({ activePage, cartCount, onCartClick, onNavigate }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="navbar">
      <button className="brand" type="button" onClick={() => onNavigate("home")}>
        ShopX
      </button>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={activePage === item.id ? "active" : ""}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <button className="cart-button" type="button" onClick={onCartClick}>
        Cart <span>{cartCount}</span>
      </button>
    </nav>
  );
};

export default Navbar;
