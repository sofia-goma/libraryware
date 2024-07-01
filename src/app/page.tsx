import Button from "@/ui/button";
import Logo from "@/ui/logo";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[90vh]">
      <div>
        <Logo />
      </div>
      <div className="absolute bottom-9 right-9 flex gap-6">
        <Button text={"Connexion"} active={true} />
        <Button text={"Register"} active={false} />
      </div>
    </main>
  );
}
