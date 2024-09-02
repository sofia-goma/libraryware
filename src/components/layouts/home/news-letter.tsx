import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter() {
  return (
    <div className="relative bg-gradient-to-r from-accent to-secondary">
      <div className="container text-background flex flex-col py-12 gap-4 items-center justify-between md:flex-row md:gap-0 md:min-h-[200px]">
        <div className="">
          <h6 className="sm:text-xl text-xl mb-1.5 tracking-wide text-popover-foreground">
            Subscribe to Our
          </h6>
          <h3 className="sm:text-3xl text-3xl font-bold uppercase tracking-wider text-popover-foreground">
            Newsletter
          </h3>
        </div>

        <div className=" flex p-1 ">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-secondary focus-within:bg-background outline-none  text-sm text-foreground"
            />
          </div>
          <Button className="ml-2">SUBMIT</Button>
        </div>
      </div>
    </div>
  );
}