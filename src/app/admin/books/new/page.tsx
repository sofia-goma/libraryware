"use client";
import { MyContext } from "@/lib/context";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const Page = ({}: Props) => {
  const {
    state,
    categories,
    setState,
  }: { state?: any; categories?: any; setState?: any } = useContext(MyContext);
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  if (!state) return;

  const back = () => {
    router.push("/admin/books");
  };

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (selectedValue) {
      const response = await axios.post("/api/books", {
        categoryId: Number(selectedValue),
        author: state.author || 1,
        title: state.details.title,
        cover: `https://covers.openlibrary.org/b/id/${state.details.covers[0]}-L.jpg`,
        publicationYear: Number(state.details.publish_date) || 0,
        numberOfPage: Number(state.details.number_of_pages) || 0,
        code: state.bib_key,
        edition: state.details.publishers[0] || "unknown",
      });
      toast.success("Vous venez d'ajouter un livre", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.href = "/admin/books";
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm z-50">
      <div className="bg-white p-6 relative rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Les infos du livre</h2>
          <div className="flex gap-2">
            <div className="">
              <Image
                src={`https://covers.openlibrary.org/b/id/${state.details.covers[0]}-L.jpg`}
                alt="alt"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{state.details.title}</h1>
              <p className="text-xl">
                {state.details.publish_date} by {state.details.publishers}
              </p>
              <p className="text-xl">{state.details.publish_places}</p>
              <p className="italic">{state.details.number_of_pages} pages</p>
              <select
                id="select"
                value={selectedValue}
                onChange={handleSelectChange}
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              >
                <option value="">Chosis la categorie du livre</option>
                {categories.data.data.map((el: any, i: number) => (
                  <option key={i} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={!selectedValue}
                className={`px-4 py-2 rounded-xl bg-slate-500 my-2 ${
                  selectedValue
                    ? "bg-slate-500 hover:bg-slate-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Ajouter
              </button>
              <button
                onClick={back}
                className="px-4 py-2 rounded-xl bg-red-300 m-2"
              >
                Annuler
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
