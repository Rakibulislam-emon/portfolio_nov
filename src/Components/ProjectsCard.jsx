/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight, FaCartPlus, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";  // Ensure this is installed and imported

export default function ProjectsCard({products,heading}) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    

    return (
        <section className="max-w-screen-2xl mx-auto   ">
            <div className="lg:flex  lg:justify-between lg:p-8 ">
                <h1 className="text-4xl font-bold mb-4">{heading}</h1>
                <div className="flex gap-x-1 items-center">
                    <button className="border px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold">
                        View All
                    </button>
                    <div className="flex gap-x-2">
                        <button ref={prevRef} className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg">
                            <FaAngleLeft size={40} />
                        </button>
                        <button ref={nextRef} className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg">
                            <FaAngleRight size={40} />
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                spaceBetween={-100}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    375: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                    1280: { slidesPerView: 5, spaceBetween: 40 },
                }}
                className="mySwiper"
            >
                {products.map((product, idx) => (
                    <SwiperSlide key={idx} className="flex flex-col items-center mt-8">
                        <div className="group w-full hover:shadow-2xl max-w-[290px] rounded-2xl font-[sans-serif] overflow-hidden mx-auto">
                            <div className="px-4 h-96">
                                <div className="max-w-[260px] flex justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-52 h-52 rounded-2xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-gray-800 font-medium">{product.name}</h3>
                                    <div className="mt-1 flex items-center gap-x-2">
                                        <ReactStars
                                            count={5}
                                            value={Math.round((product.ratings / 50) * 5) / 5}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="text-sm text-gray-600">({product.ratings} ratings)</p>
                                    </div>
                                    <div className="mt-1 flex justify-center items-center">
                                        <span className="line-through text-gray-500 text-sm">${product.originalPrice.toFixed(2)}</span>
                                        <p className="text-2xl font-bold mx-2 text-gray-900">${product.discountedPrice.toFixed(2)}</p>
                                        <p className="text-sm border p-1 text-gray-600">{product.discount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-4 px-3 w-full justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center space-x-1 border border-[#636364]">
                                    <button onClick={decrement} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg font-semibold">{quantity}</span>
                                    <button onClick={increment} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                                        <FaPlus />
                                    </button>
                                </div>
                                <div>
                                    <button className="flex items-center gap-x-2 bg-[#6bb252] hover:bg-[#ffc107] text-white p-2 rounded-md">
                                        <FaCartPlus />
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="border flex border-[#212529]">
                                    <button className="justify-center items-center px-2">
                                        <FaRegHeart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}