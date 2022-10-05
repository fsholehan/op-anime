import Image from "next/image";

function InfoTop({ img, desc, title }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <Image
        priority
        height={250}
        width={187}
        className="object-contain rounded-lg"
        src={img}
        alt=""
      />
      <h1 className="text-gray-700 font-semibold text-lg">{title}</h1>
      <p className="line-clamp-4 text-sm">{desc}</p>
    </div>
  );
}

export default InfoTop;
