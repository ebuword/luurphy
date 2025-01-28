import { motion } from 'framer-motion';
import { useState } from 'react';

const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
    >
      {/* Kullanıcı Başlığı */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profil"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold">Kullanıcı Adı</h3>
          <p className="text-sm text-gray-500">2 saat önce</p>
        </div>
      </div>

      {/* Gönderi İçeriği */}
      <p className="mb-4">Bu bir örnek gönderi içeriğidir.</p>
      
      {/* Gönderi Görseli */}
      <img
        src="https://via.placeholder.com/500x300"
        alt="Gönderi"
        className="w-full rounded-lg mb-4"
      />

      {/* Etkileşim Butonları */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-2 ${isLiked ? 'text-red-500' : ''}`}
        >
          <i className={`fas fa-heart ${isLiked ? 'text-red-500' : ''}`}></i>
          {isLiked ? 'Beğenildi' : 'Beğen'}
        </button>
        
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2"
        >
          <i className="fas fa-comment"></i>
          Yorumlar
        </button>
        
        <button className="flex items-center gap-2">
          <i className="fas fa-share"></i>
          Paylaş
        </button>
      </div>

      {/* Yorumlar Bölümü */}
      {showComments && (
        <div className="border-t pt-4 space-y-4">
          <div className="flex gap-3">
            <img
              src="https://via.placeholder.com/32"
              alt="Yorum yapan"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Yorumcu</h4>
              <p>Harika bir paylaşım!</p>
            </div>
          </div>
          
          {/* Yorum Yazma */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Yorumunuzu yazın..."
              className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              Gönder
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PostCard; 