import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getFormattedInitials from "@/lib/get-formatted-initials";
import { LucideLinkedin, XIcon } from "lucide-react";
import { GitHubIcon } from "../icons/github";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
export default function TeamCard({
  name,
  job,
  githubLink,
  linkedinLink,
  twitterLink,
  imageSrc,
}: ITeam) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar className="w-32 h-32 inline-block static">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>{getFormattedInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="py-4">
        <h4 className="text-foreground text-base font-bold">{name}</h4>
        <p className="text-muted-foreground text-xs mt-1">{job}</p>
        <div className="space-x-4 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <GitHubIcon className="w-3 fill-foreground m-0 pt-[-10px]" />
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <Linkedin className="w-3 fill-foreground" />
            </a>
          )}

          {twitterLink && (
            <a
              href={twitterLink}
              target="_blank"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <Twitter className="w-3 fill-current" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
