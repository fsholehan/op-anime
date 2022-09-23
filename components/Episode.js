import Link from "next/link";

function Episode({ eps, date, slug, title }) {
  return (
    <Link href={`/watch/${slug}`}>
      <a className="flex items-end justify-between cursor-pointer hover:bg-gray-100">
        <div className="flex flex-col space-y-1">
          <h4 className="text-gray-700 font-bold">
            {eps === "" ? title : eps}
          </h4>
          <span className="text-xs">{date}</span>
        </div>
        <h1 className="font-semibold text-gray-600 text-sm">
          One Piece Episode {eps}
        </h1>
      </a>
    </Link>
  );
}

export default Episode;
