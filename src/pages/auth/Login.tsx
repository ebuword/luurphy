import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">E-posta</label>
            <input type="email" className="w-full p-2 rounded-lg border" />
          </div>
          <div>
            <label className="block mb-1">Şifre</label>
            <input type="password" className="w-full p-2 rounded-lg border" />
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
            Giriş Yap
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login; 