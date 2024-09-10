import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileSettingForm from "../forms/profile-setting-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCallIcon, MapIcon } from 'lucide-react';

const ProfileTabCard: React.FC<{ user: any }> = ({ user }) => {
  return (
    <Tabs defaultValue="about-me" className="w-full md:w-8/12 lg:w-9/12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about-me">About Me</TabsTrigger>
        <TabsTrigger value="book-mark">Posts</TabsTrigger>
        <TabsTrigger value="settings">Setting</TabsTrigger>
      </TabsList>
      <TabsContent value="about-me">
        <Card>
          <CardHeader>
            <CardTitle>About me</CardTitle>
            <CardDescription>
              Bio here.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam fermentum enim neque.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col gap-1">
              <span className="font-bold flex gap-2 items-center">
                <MapIcon className="w-4 h-4" /> Location
              </span>
              <span className="text-secondary-foreground ">{user.address || "N/A"}</span>
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
      <TabsContent value="book-mark">
        <Card>
          <CardHeader>
            <CardTitle>Bork Mark</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              fermentum enim neque.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              fermentum enim neque.
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
