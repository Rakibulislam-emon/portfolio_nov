import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si"; // Other icons
import { TbBrandNextjs } from "react-icons/tb"; // Next.js icon
import { IoLogoFirebase } from "react-icons/io5";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export default function Technologies() {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {/* HTML Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                >
                    <SiHtml5 className="text-7xl text-red-600" />
                </motion.div>

                {/* CSS Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)}
                >
                    <SiCss3 className="text-7xl text-blue-600" />
                </motion.div>

                {/* JavaScript Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                >
                    <SiJavascript className="text-7xl text-yellow-400" />
                </motion.div>

                {/* Tailwind CSS Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                >
                    <SiTailwindcss className="text-7xl text-cyan-400" />
                </motion.div>

                {/* Node.js Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                >
                    <FaNodeJs className="text-7xl text-green-400" />
                </motion.div>

                {/* Express Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                >
                    <SiExpress className="text-7xl text-gray-600" />
                </motion.div>

                {/* MongoDB Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(1.5)}
                >
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                {/* Firebase Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                >
                    <IoLogoFirebase className="text-7xl text-yellow-600" />
                </motion.div>

                {/* Next.js Icon */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                >
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
            </motion.div>
        </div>
    );
}
