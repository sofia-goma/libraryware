// import Loading from '@/components/shared/loading';

// export default function LoadingPage(){
//   return (
//     <div className="flex space-x-2 justify-center items-center bg-background h-screen">
//       <Loading />
//     </div>
//   )
// };
export default function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-background h-screen">
      <span className="sr-only text-primary">Loading...</span>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
    </div>
  );
}
