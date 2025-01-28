import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile = () => {
  const { username } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-4">Profil: {username}</h1>
    </motion.div>
  );
};

export default Profile; 