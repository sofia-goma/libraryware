import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileSettingForm from "../forms/ProfileSettingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaMapMarkerAlt } from "react-icons/fa";
const ProfileTabCard: React.FC = () => {
  return (
    <Tabs defaultValue="about-me" className="w-9/12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about-me">About Me</TabsTrigger>
        <TabsTrigger value="book-mark">Book Mark</TabsTrigger>
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
                <FaMapMarkerAlt className="w-4 h-4" /> Location
              </span>
              <span className="text-gray-600 ">Japan, Tokyo</span>
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
