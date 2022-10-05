import Image from "next/image";

function InfoTop({ img, desc, title }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="relative h-[200px] w-[140px]">
        <Image priority layout="fill" className="rounded-lg" src={img} alt="" />
      </div>
      <h1 className="text-gray-700 font-semibold text-lg">{title}</h1>
      <p className="line-clamp-4 text-sm">{desc}</p>
    </div>
  );
}

export default InfoTop;
