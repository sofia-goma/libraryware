"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileSettingForm from "../forms/profile-setting-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCallIcon, MapIcon } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { ScrollArea } from "../ui/scroll-area";
import PostBox from "../post/post-box";

const ProfileTabCard: React.FC<{ user: any }> = ({ user }) => {
  const posts = useQuery(api.post.getPostsByUserId, {
    userId: user.id as Id<"users">,
  });

  return (
    <Tabs defaultValue="about-me" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="about-me">About Me</TabsTrigger>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="settings">Setting</TabsTrigger>
      </TabsList>
      <TabsContent value="about-me">
        <Card>
          <CardHeader>
            <CardTitle>About me</CardTitle>
            <CardDescription>Hello world</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col gap-1">
              <span className="font-bold flex gap-2 items-center">
                <MapIcon className="w-4 h-4" /> Location
              </span>
              <span className="text-secondary-foreground ">
                {user.address || "N/A"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold flex gap-2 items-center">
                <PhoneCallIcon className="w-4 h-4" /> Phone Number
              </span>
              <span className="text-secondary-foreground ">
                {user.phone_number || "N/A"}
              </span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="posts">
        <Card>
          <CardHeader>
            <CardTitle>Posts</CardTitle>
            <CardDescription>See all your posts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="mx-2 border-x border-t border-solid border-border">
              {posts && posts.length > 0 ? (
                <ScrollArea className="w-full h-[80vh] overflow-y-auto">
                  {posts?.map((post: any, index: number) => (
                    <PostBox post={post} key={index} />
                  ))}
                </ScrollArea>
              ) : (
                <p>No posts available</p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Customize your Libraryware experience by adjusting your account,
              reading preferences, and notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ProfileSettingForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabCard;
