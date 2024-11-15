import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { projects } from "../constants";
import "./ProjectsCards.css"
export default function Projects() {
    const swiperRef = useRef(null);
    const projectLength = projects.length;
    return (
        <section>
            {/* Header Section */}
            <div className="max-w-screen-xl mx-auto flex justify-around items-center">
                {
                     projectLength > 3 &&
                    <motion.button
                    onClick={() => swiperRef.current?.slidePrev()}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                    className="text-4xl"
                >
                    <FaArrowLeft size={30} />
                </motion.button>
                }
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl"
                >
                    Projects
                </motion.h2>
                {
                    projectLength > 3 &&
                    <motion.button
                        onClick={() => swiperRef.current?.slideNext()}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1.5 }}
                        className="text-4xl"
                    >
                        <FaArrowRight size={30} />
                    </motion.button>
                }

            </div>

            {/* Swiper Carousel */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 1.5 }}
            >
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },    // Small screens (sm)
                        640: { slidesPerView: 1, spaceBetween: 10 },    // Adjust for small screens (sm)
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="mySwiper"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="p-4">
                            {/* Flip Card */}
                            <div className="card">
                                <div className="card-inner">
                                    {/* Front Side: Image */}
                                    <div className="card-front">
                                        <img
                                            src={project.image}
                                            alt="Project Image"
                                            className="h-full w-auto
                                             rounded-xl"
                                        />
                                    </div>

                                    {/* Back Side: Project Details */}
                                    <div className="card-back flex flex-col justify-between items-center border  p-6 rounded-xl">
                                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                        <p className="text-white mb-4">{project.description}</p>

                                        {/* Technologies Used */}
                                        <div className="mb-4">
                                            <h4 className="text-lg font-semibold text-white mb-2  ">Technologies Used:</h4>
                                            <ul className="flex gap-3 flex-wrap justify-center">
                                                {project.technologies.map((tech, index) => (
                                                    <li key={index} className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Links to Live Demo and GitHub */}
                                        <div className="flex justify-center gap-6 mt-4">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-semibold text-orange-500 hover:text-orange-600 transition-all duration-300"
                                            >
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 underline"
                                            >
                                                GitHub
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
}
