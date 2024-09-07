import React from "react";
import { MessagesSquare, Share2, BookOpenCheck } from "lucide-react";
import FeatureCard from "@/components/shared/feature-card";

export default function Features() {
  const featuresdata = [
    {
      title: "Interactive Reading",
      description:
        "Dive into books like never before with our interactive reading experience. Highlight, bookmark, and take notes directly in the text, enhancing your understanding and engagement.",
      icon: <BookOpenCheck />,
    },
    {
      title: "Social Sharing",
      description:
        "Share your favorite quotes, insights, and thoughts with friends. Connect with other readers and make your reading journey a collaborative experience.",
      icon: <Share2 />,
    },
    {
      title: "Book Club Forums",
      description:
        "Join community discussions on specific book readings. Participate in lively debates, share your opinions, and deepen your understanding with fellow readers.",
      icon: <MessagesSquare />,
    },
  ];
  return (
    <div className="bg-background text-foreground">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Discover Our Exclusive Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
          {featuresdata.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature?.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
