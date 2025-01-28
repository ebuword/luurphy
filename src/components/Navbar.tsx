import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Luurphy
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">Ana Sayfa</Link>
            <Link to="/live" className="nav-link">Canlı</Link>
            <Link to="/friends" className="nav-link">Arkadaşlar</Link>
            <Link to="/posts" className="nav-link">Gönderiler</Link>
            <Link to="/login" className="nav-link">Giriş Yap</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 