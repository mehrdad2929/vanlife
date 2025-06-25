// components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app">
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/shop" style={{ marginRight: '1rem' }}>Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
