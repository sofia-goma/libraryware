export default function BookCard({
  title,
  cover,
  date,
  type,
}: {
  authorName?: string;
  title: string;
  cover?: string;
  date?: string;
  type?: string;
}) {
  const newDate = date?.split("T")[0];
  date = newDate;

  return (
    <div className="w-full h-full flex border border-border rounded-lg p-2">
      {/* author_name */}
      {cover ? (
        <img src={cover || ""} className="w-[25%] object-cover" alt="cover" />
      ) : (
        <div className="min-w-[25%] bg-black"></div>
      )}
      <div className="text-[12px] px-[12px] w-[75%]">
        <p className=" hover:text-primary text-lg">
          {/* <span className="font-bold">Title: </span> */}
          {title}
        </p>
        <p>
          <span className="font-bold">Last update: </span>
          {date}
        </p>
        <p>
          <span className="font-bold">Type: </span>
          {type}
        </p>
      </div>
    </div>
  );
}
