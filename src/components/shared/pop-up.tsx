import React, { useContext } from "react";
import { Input} from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MyContext } from "@/lib/context";

type Props = { show: boolean; onClose: () => void };

const Popup = ({ show, onClose }: Props) => {
  const { state, setState }: { state?: any; setState?: any } =
    useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const response = await axios.get(`/api/books/new?isbn=${data.code}`);
    setState(response.data.data[`ISBN:${data.code}`]);
    router.push("/admin/books/new");
  };

  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 relative rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Entrer le code SBN du livre</h2>
        {/* <Input
          type={"text"}
          register={register}
          typedata="code"
          placeholder="sbn"
        /> */}
        {/* <Button submit text="Envoyer" active /> */}
        <div
          className="absolute cursor-pointer text-lg right-4 top-2 hover:text-red-600 z-60"
          onClick={onClose}
        >
          x
        </div>
      </form>
    </div>
  );
};

export default Popup;
