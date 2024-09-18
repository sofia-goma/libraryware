import { Separator } from "../ui/separator";
import {
  BookOpenText,
  CodeXml,
  StarIcon,
  MessagesSquare,
  Bug,
} from "lucide-react";


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
      icon: <StarIcon size={18} />,
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
      <div className="container text-secondary-foreground flex flex-col py-4 items-center gap-3 lg:flex-row justify-between">
        {showMenu}
      </div>
    </footer>
  );
}
