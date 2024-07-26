import Button from "@/ui/button";
import Logo from "@/ui/logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-[100vh] loading">
      <div>
        <Logo active />
      </div>
      <div className="absolute bottom-9 right-9 flex gap-6">
        <Link href={"/login"}>
          <Button text={"Connexion"} active={true} />
        </Link>
        <Link href={"/register"}>
          <Button text={"S'inscrire"} active={false} />
        </Link>
      </div>
    </main>
  );
}
