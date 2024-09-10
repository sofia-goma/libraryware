import * as React from "react";
import { CirclePlus } from "lucide-react";
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
}: {
  title: string;
  handleSubmit: () => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default">
          <CirclePlus className="w-5 h-5 mr-2" />
          Post
        </Button>
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
          <form className="my-2">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Share your thougths</Label>
                <Input id="name" placeholder="Share your thougths" />
              </div>
            </div>
          </form>
          <div className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Post</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

{
  /* <Popover>
<PopoverTrigger asChild>
  <Button variant="default">
    <CirclePlus className="w-5 h-5 mr-2" />
    Post
  </Button>
</PopoverTrigger>
<PopoverContent className="w-80">
  <div className="grid gap-4">
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
    <div className="grid gap-2">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          defaultValue="100%"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxWidth">Max. width</Label>
        <Input
          id="maxWidth"
          defaultValue="300px"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          defaultValue="25px"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="maxHeight">Max. height</Label>
        <Input
          id="maxHeight"
          defaultValue="none"
          className="col-span-2 h-8"
        />
      </div>
    </div>
  </div>
</PopoverContent>
</Popover> */
}
