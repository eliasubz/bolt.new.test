import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Mail, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'text-gray-600 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">React Demo</h1>
          <div className="flex gap-4">
            <NavLink to="/" className={linkClass}>
              <Home size={20} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              <FileText size={20} />
              <span>Blog</span>
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              <Mail size={20} />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;