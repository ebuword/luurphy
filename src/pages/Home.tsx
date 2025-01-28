import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';
import GeminiChat from '../components/GeminiChat';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sol Sidebar */}
        <div className="hidden md:block">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Keşfet</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Trend Konular
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Popüler Kullanıcılar
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                Canlı Yayınlar
              </li>
            </ul>
          </div>
        </div>

        {/* Ana İçerik */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>

        {/* Sağ Sidebar - Gemini AI Chat */}
        <div className="hidden md:block">
          <GeminiChat />
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 