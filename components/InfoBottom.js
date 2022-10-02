import React, { useState } from "react";
import ListEpisode from "./ListEpisode";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

function InfoBottom({ listEps }) {
  const [reverse, setReverse] = useState(false);

  const reverseHandler = () => {
    setReverse(!reverse);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-gray-700 font-semibold">Daftar Episode</h1>
        <button onClick={reverseHandler}>
          <ArrowsUpDownIcon className="h-6" />
        </button>
      </div>

      <ListEpisode episodes={listEps} isReverse={reverse} />
    </div>
  );
}

export default InfoBottom;
