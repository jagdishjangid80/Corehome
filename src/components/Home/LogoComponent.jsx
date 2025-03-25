import { motion } from "framer-motion";
import logo from "../../assets/images/manu.png";

const LogoComponent = ({ showPops, showLogo }) => {
  return (
    showLogo && (
      <motion.div
        className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: showPops ? 0.2 : 1, opacity: showPops ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[550px] sm:w-[180px] md:w-[320px] lg:w-[550px]"
        />
      </motion.div>
    )
  );
};

export default LogoComponent;
