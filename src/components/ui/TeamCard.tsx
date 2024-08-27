import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function TeamCard({
  name,
  job,
  githubLink = "",
  linkedinLink = "",
  twitterLink = "",
}: {
  name: string;
  job: string;
  githubLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
}) {
  return (
    <div>
      <img
        src="https://readymadeui.com/team-1.webp"
        className="w-32 h-32 rounded-full inline-block"
      />

      <div className="py-4">
        <h4 className="text-gray-800 text-base font-bold">{name}</h4>
        <p className="text-gray-800 text-xs mt-1">{job}</p>

        <div className="space-x-4 mt-4">
          <Link
            href={githubLink}
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <FaGithub fill="#333" width="12px" />
          </Link>

          <Link
            href={linkedinLink}
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <FaLinkedin fill="#333" width="12px" />
          </Link>

          <Link
            href={twitterLink}
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
          >
            <FaTwitter fill="#333" width="12px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
