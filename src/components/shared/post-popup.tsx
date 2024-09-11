import * as React from "react";
import { CirclePlus, PlusCircleIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PostPopup({
  title,
  handleSubmit,
  shape,
}: {
  title: string;
  handleSubmit?: (content: string) => void;
  shape?: boolean;
}) {
  const [postContent, setPostContent] = React.useState(""); // State to store the input value

  const handlePost = () => {
    if (handleSubmit) {
      handleSubmit(postContent); // Pass the content to the submit function
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        {shape ? (
          <PlusCircleIcon className="hover:cursor-pointer" />
        ) : (
          <Button variant="default">
            <CirclePlus className="w-5 h-5 mr-2" />
            Post
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-0 m-0 border-none shadow-none">
          <div className="my-2">
            <p className="font-bold">
              Post <span className="font-normal">{title}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Share your insights, favorite moments, and questions with fellow
              readers.
            </p>
          </div>
          <div className="my-2">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  placeholder="Share your thougths"
                  value={postContent} // Bind input value to state
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handlePost}>Post</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
