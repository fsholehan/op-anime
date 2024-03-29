import React, { useState } from "react";
import ListEpisode from "./ListEpisode";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import Spinner from "./Spinner";

function InfoBottom({ listEps, loading }) {
  const [reverse, setReverse] = useState(false);
  const [eps, setEps] = useState("");

  const reverseHandler = () => {
    setReverse(!reverse);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg text-gray-700 font-semibold">Daftar Episode</h1>
        {loading && <Spinner color="text-blue-500" height="h-6" />}
        <div className="flex items-center space-x-3">
          <button onClick={reverseHandler}>
            <ArrowsUpDownIcon className="h-6" />
          </button>
          <form className="border-b">
            <input
              value={eps}
              onChange={(e) => setEps(e.target.value)}
              className="focus:outline-none w-24"
              placeholder="Cari episode"
              type="number"
            />
          </form>
        </div>
      </div>

      <ListEpisode episodes={listEps} reverse={reverse} searchEps={eps} />
    </div>
  );
}

export default InfoBottom;
