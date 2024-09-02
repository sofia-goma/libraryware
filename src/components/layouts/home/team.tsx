import TeamCard from "@/components/shared/team-card";
import { teamMembersData } from "@/data/user-team";

export default function Team() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="text-foreground text-4xl font-extrabold">Meet our team</h2>
        <p className="text-secondary-foreground text-sm mt-4 leading-relaxed">
          Meet our team of professionals to serve you.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center my-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
        {teamMembersData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            job={member.job}
            githubLink={member.githubLink}
            linkedinLink={member.linkedinLink}
            twitterLink={member.twitterLink}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
