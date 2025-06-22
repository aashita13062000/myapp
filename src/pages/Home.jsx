import { motion } from 'framer-motion';
import aashitaImg from '../assets/aashita.jpeg'; // adjust the path if needed




const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <motion.img
          src={aashitaImg}
          alt="Aashita"
          className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Hi, I'm Aashita 👋</h1>
        <p className="text-xl">Cloud-Native Developer | Java & React</p>
      </div>
    </section>
  );
};

export default Home;