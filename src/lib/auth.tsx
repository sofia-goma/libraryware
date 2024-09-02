import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import jwt from "jsonwebtoken";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null;

    if (!token) {
      router.push("/login");
      return;
    }

    // try {
    //   jwt.verify(token, process.env.TOKEN_SECRET as string);
    // } catch (err) {
    //   // router.push("/login");
    // }
  }, [router]);
};

export default useAuth;
