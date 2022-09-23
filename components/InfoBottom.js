import React from "react";
import ListEpisode from "./ListEpisode";

function InfoBottom({ listEps }) {
  return (
    <div className="mt-10">
      <h1 className="text-lg text-gray-700 font-semibold">Daftar Episode</h1>
      <ListEpisode episodes={listEps} />
    </div>
  );
}

export default InfoBottom;
