export default function Button({
  title,
  className,
  type,
  handleClick
}: IButton) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ${className}`}
    >
      <span className="font-medium">
        {title?.toUpperCase()}
      </span>
    </button>
  );
}
