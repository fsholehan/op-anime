import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col space-y-3">
      <h1 className="font-extrabold text-2xl animate-pulse text-gray-700">
        303
      </h1>
      <span className="text-gray-500 font-medium">Not Found</span>
      <Link href="/">
        <a className="text-blue-500">Back to home</a>
      </Link>
    </div>
  );
}

export default NotFound;
