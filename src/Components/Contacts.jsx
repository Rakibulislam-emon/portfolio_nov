import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Contacts = () => {
  const form = useRef()
  const Contact = {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you!",
    social_media: [
      {
        icon: <FaEnvelope />, // Mail icon
        link: "mailto:rakibulislamemon60@gmail.com", // Replace with your email address
        text: "rakibulislamemon60@gmail.com",
      },
      {
        icon: <FaPhone />, // Phone icon
        link: "tel:+880  1979237056", // Replace with your phone number
        text: "+880 1979237056",
      },
      {
        icon: <FaWhatsapp />, // WhatsApp icon
        link: "https://wa.me/+8801743437401", // WhatsApp link using the phone number
        text: "WhatsApp: +880 1743437401",
      },
    ],
  };


  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        'service_96uzzyk', 'template_pjebjwn', form.current, 'ys8Z9GZ6WbYGTxTUe'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <section className=" text-white flex mx-auto " >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="md:container lg:ml-36 mx-auto px-5 py-14 ">
        <h2 className="title !text-white text-2xl" >
          {Contact.title}
        </h2>
        <h4 className="subtitle" >
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              required
              className="border text-slate-600 border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email Id"
              required
              className="border text-slate-600 border-slate-600 p-3 rounded"
            />
            <textarea
              placeholder="Message"
              className="border text-slate-600 border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <motion.div
              type='submit'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 800, opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <button className="  bg-white border text-black py-2 px-4 ">
                Submit
              </button>
            </motion.div>

          </form>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: +300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div key={i} className="flex items-center gap-2 ">
                <h4 className="text-white text-2xl">{content.icon}</h4>
                <a href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
