/* eslint-disable @next/next/no-img-element */

export default function FormLoading({ className }: { className?: string }) {
  return (
    <div>
      <div className="w-full h-full flex justify-center items-center flex-grow p-3">
        <img
          className={"h-5 mx-auto " + className}
          src="/spinner.gif"
          alt="Spinner"
        />
      </div>
    </div>
  );
}
