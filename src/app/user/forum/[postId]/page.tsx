export default function PostId(params: { postId: string }) {
    console.log(params.postId);
  return <h1>Post Id {params.postId}</h1>;
}
