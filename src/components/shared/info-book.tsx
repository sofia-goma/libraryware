import React from "react";
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';


type Props = { show: boolean; onClose: () => void };

const InfoBook = ({ show, onClose }: Props) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
      <div className="bg-white p-6 relative rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Les infos du livre</h2>
      </div>
    </div>
  );
};

export default InfoBook;
