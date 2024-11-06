import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Contacts = () => {
  // Static content
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
        link: "tel:+8801743437401", // Replace with your phone number
        text: "+880 1979237056",
      },
      {
        icon: <FaWhatsapp />, // WhatsApp icon
        link: "https://wa.me/+8801743437401", // WhatsApp link using the phone number
        text: "WhatsApp: +880 1743437401",
      },
    ],
  };

  return (
    <section className=" text-white flex mx-auto" >
      <div className="md:container lg:ml-36 mx-auto px-5 py-14 ">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" >
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form className="flex-1 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button className="btn self-start bg-white text-black py-2 px-4 ">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div key={i} className="flex items-center gap-2">
                <h4 className="text-white text-2xl">{content.icon}</h4>
                <a href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
