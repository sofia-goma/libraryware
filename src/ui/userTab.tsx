import React from "react";
import CardUser from "./cardUser";

type Props = {
  headers: string[];
  all: boolean;
  title?: string;
  users: {
    data: { data: unknown[] };
    isLoading: boolean;
    error: string | null;
  };
};

export default function UserTab({ title, headers, users, all }: Props) {
  return (
    <div>
      {title && (
        <h1 className="text-2xl font-medium m-2">{`${title} Users`}</h1>
      )}
      <div className="flex justify-between px-4">
        {headers.map((header, i) => (
          <p className="text-lg font-normal w-1/6" key={i}>
            {header}
          </p>
        ))}
      </div>
      <div>
        <CardUser title={title} users={users} all={all} />
      </div>
    </div>
  );
}