// components/ContactSection.jsx
import { Mail, Phone, MessageCircle, Clock ,Send } from "lucide-react";

const contactData = [
  {
    id: 1,
    title: "Email Us",
    description: "Have questions? Send us an email anytime",
    href: "mailto:example@example.com",
    linkText: "Send an Email",
    icon: Mail,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    title: "Call Us",
    description: "+971 4 456 1407",
    href: "tel:+97144561407",
    linkText: "Call Now",
    icon: Phone,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    id: 3,
    title: "Message Us",
    description: "+971 52 364 5448",
    href: "https://wa.me/971523645448",
    linkText: "WhatsApp Now",
    icon: MessageCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    external: true,
  },
  {
    id: 4,
    title: "Office Hours",
    description: [
      "Monday - Friday: 9am - 6pm",
      "Saturday: 10am - 4pm",
      "Sunday: Closed",
    ],
    icon: Clock,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    noLink: true,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-gray-50 ">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-8 px-4">
        <p className="text-gray-600 text-lg bg-white pb-8 -mx-4 pt-8">
          Reach us via phone, WhatsApp, email, or by filling out the contact form. We'll get back to you with the information you need.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 py-10 pb-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-6 flex flex-col sm:flex-row items-start gap-4 "
          >
            {/* Icon */}
            <div className={`${item.iconBg} p-4 rounded-full flex-shrink-3 mt-1`}>
              <item.icon className={`${item.iconColor} w-6 h-6`} />
            </div>

            {/* Content */}
            <div className="text-left">
              <h3 className="font-bold mb-1 text-black">{item.title}</h3>

              {Array.isArray(item.description)
                ? item.description.map((line, idx) => (
                    <p key={idx} className="text-gray-500">
                      {line}
                    </p>
                  ))
                : <p className="text-gray-500 mb-2">{item.description}</p>
              }

             {!item.noLink && (
  <a
    href={item.href}
    target={item.external ? "_blank" : "_self"}
    className="text-red-500 font-semibold flex items-center gap-2 mt-2"
  >
    {item.linkText}
    <Send className="w-4 h-4" /> {/* icon text ke right me */}
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
