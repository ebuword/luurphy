import { motion } from 'framer-motion';
import PostCard from '../components/PostCard';

const Posts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-4">Gönderiler</h1>
      <div className="space-y-6">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </motion.div>
  );
};

export default Posts; 