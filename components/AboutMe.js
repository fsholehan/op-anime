import Image from "next/image";
import { SocialIcon } from "react-social-icons";

function AboutMe() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <Image
          alt="photo profile"
          className="object-cover rounded-full"
          height={150}
          width={150}
          src="https://github.com/fsholehan/op-anime/blob/main/public/images/20220927_074343.jpg?raw=true"
        />
        <h1 className="text-sm font-medium text-gray-700">Siapa saya?!</h1>
      </div>
      <div className="mt-10">
        <h1>API</h1>
        <a
          className="text-blue-500 font-medium"
          href="https://op-api-fns.herokuapp.com/"
        >
          https://op-api-fns.herokuapp.com/
        </a>
      </div>
      <div className="mt-10">
        <h1 className="text-sm font-semibold text-gray-700">Sosmed</h1>
        <div className="mt-3 flex items-center space-x-3">
          <SocialIcon url="https://twitter.com/sholehanfuad" />
          <SocialIcon url="https://instagram.com/fuadnursholehan" />
          <SocialIcon url="https://t.me/fuadnur25" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
