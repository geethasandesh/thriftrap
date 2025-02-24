
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold font-serif">Fashion Yatra Thrift</h1>
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Men</Link></li>
          <li><Link to="/about">Women</Link></li>
          <li><Link to="/contact">New & Featured</Link></li>
          <li><Link to="/shop">Accessories</Link></li>
          <li><Link to="/shop">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
