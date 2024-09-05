export default function Loading() {
  return (
    // <div className="mt-20 flex items-center w-full justify-center h-full">
    //   <div className="border-muted h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
    // </div>
    <div className="flex space-x-2 justify-center items-center bg-background h-[70vh] w-[80vw]">
      <span className="sr-only text-primary">Loading...</span>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
    </div>
  );
}
