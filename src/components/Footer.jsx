import { motion } from "framer-motion";

export default function Footer({ lang = 'en' }) {
  const content = {
    en: {
      copyright: "© 2025 Drivio. All rights reserved.",
      social: {
        facebook: "Facebook",
        instagram: "Instagram", 
        twitter: "Twitter"
      }
    },
    sq: {
      copyright: "© 2025 Drivio. Të gjitha të drejtat e rezervuara.",
      social: {
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "Twitter"
      }
    }
  }
  const t = content[lang] || content.en

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-400 py-8 mt-10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>{t.copyright}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">{t.social.facebook}</a>
          <a href="#" className="hover:text-white">{t.social.instagram}</a>
          <a href="#" className="hover:text-white">{t.social.twitter}</a>
        </div>
      </div>
    </motion.footer>
  );
}
