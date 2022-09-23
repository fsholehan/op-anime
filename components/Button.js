import Link from "next/link";

export default function Button({ href, text, backgroundColor }) {
  return (
    <Link href={href}>
      <a
        className={`${backgroundColor} text-white w-32 md:w-64 py-3 block text-center font-semibold text-sm rounded-md`}
      >
        {text}
      </a>
    </Link>
  );
}
