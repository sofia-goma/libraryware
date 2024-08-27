import React from "react";
import CardBook from "./cardBook";

type Props = {
  headers: string[];
  title?: string;
  books: {
    data: { data: unknown[] };
    isLoading: boolean;
    error: string | null;
  };
};

export default function BookTab({ title, headers, books }: Props) {
  return (
    <div>
      {title && (
        <h1 className="text-2xl font-medium m-2">{`${title} Books`}</h1>
      )}
      <div className="flex justify-between px-4">
        {headers.map((header, i) => (
          <p className="text-lg font-normal w-1/6" key={i}>
            {header}
          </p>
        ))}
      </div>
      <div>
        <CardBook title={title} books={books} />
      </div>
    </div>
  );
}
