'use client';
import { Separator } from "../ui/separator";
import ModeToggle from "../shared/mode-toggle";
import { BookOpenText, CodeXml, StarIcon, MessagesSquare, Bug } from "lucide-react";
import { motion } from 'framer-motion';

export default function Footer() {
  const media = [
    {
      icon: <BookOpenText size={18} />,
      link: "https://github.com/sofia-goma/libraryware",
      title: "Documentation",
    },
    {
      icon: <CodeXml size={18} />,
      link: "https://github.com/sofia-goma/libraryware",
      title: "View source",
    },
    {
      icon: <Bug size={18} />,
      link: "https://github.com/sofia-goma/libraryware/issues",
      title: "Report an issue",
    },
    {
      icon: <MessagesSquare size={18} />,
      link: "https://github.com/sofia-goma/libraryware/issues",
      title: "Feedback",
    },
    {
      icon: <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",}}
      ><StarIcon size={18} /></motion.div>,
      link: "https://github.com/sofia-goma/libraryware/issues",
      title: "Give us a star on GitHub",
    },
  ];

  const showMenu = media.map(function (m, i) {
    return (
      <a
        key={i}
        href={`${m?.link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary"
      >
        <div>{m.icon}</div>
        <p>{m.title}</p>
      </a>
    );
  });
  return (
    <footer>
      <Separator />
      <div className="container bg-background text-foreground flex flex-col py-4 items-center gap-3 lg:flex-row justify-between">
        {showMenu}
        <ModeToggle className="fixed bottom-4 right-4" />
      </div>
    </footer>
  );
}
