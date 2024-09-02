import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function TeamCard({
  name,
  job,
  githubLink,
  linkedinLink,
  twitterLink,
  imageSrc,
}: ITeam) {
  return (
    <div className="">
      <img
        src={imageSrc}
        alt={`${name}'s profile picture`}
        className="w-32 h-32 rounded-full inline-block"
      />

      <div className="py-4">
        <h4 className="text-foreground text-base font-bold">{name}</h4>
        <p className="text-muted-foreground text-xs mt-1">{job}</p>
        <div className="space-x-4 mt-4">
          {githubLink && (
            <Link
              href={githubLink}
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <FaGithub width="12px" className="fill-foreground" />
            </Link>
          )}
          {linkedinLink && (
            <Link
              href={linkedinLink}
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <FaLinkedin width="12px" className="fill-foreground" />
            </Link>
          )}

          {twitterLink && (
            <Link
              href={twitterLink}
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-muted hover:bg-secondary"
            >
              <FaTwitter width="12px" className="fill-foreground" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
