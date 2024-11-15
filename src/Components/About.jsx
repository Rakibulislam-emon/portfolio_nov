import { motion } from "framer-motion";
import me from "../assets/about.jpg";

export default function About() {
    return (
        <div id="about" className="relative overflow-hidden mt-16">
            <style>
                {`
          .parallelogram {
            --p: 50px; /* control the shape (can be percentage) */
            height: 400px;
            aspect-ratio: 3/2;
            clip-path: polygon(var(--p) 0, 100% 0, calc(100% - var(--p)) 100%, 0 100%);
            object-fit: cover; /* Ensures the image covers the area of the shape */
          }
          .text-background {
            background: linear-gradient(135deg, #f8b500, #fceabb);
            padding: 20px;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
          }
        `}
            </style>
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <div className="pt-1"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <motion.h2
                                className="my-6 text-2xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl"
                                whileInView={{ opacity: 1, x: 0 }}

                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                About me
                            </motion.h2>

                            <motion.p
                                whileInView={{ opacity: 1, x: 0 }}

                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                "I'm Rakibul Islam Emon, an English Honors student with a passion for literature, language, and learning. When I'm not studying, you can find me playing chess, exploring nature, or discovering new things. I'm driven to develop my critical thinking, analytical, and creative skills, and I believe that literature has the power to shape our understanding of the world and ourselves. Let's connect and explore new ideas together!"
                            </motion.p>
                        </div>
                    </main>
                </div>
            </div>
            <motion.div
                className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 px-4"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full parallelogram" src={me} alt="About Me" />
            </motion.div>
        </div>
    );
}
