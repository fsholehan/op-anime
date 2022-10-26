import { useEffect } from "react";
import Episode from "./Episode";

function ListEpisode({ episodes, isReverse, filterEps }) {
  useEffect(() => {
    if (filterEps !== "") {
      episodes.filter((neps) => (neps.eps = filterEps));
    }
  }, [episodes, filterEps]);

  return (
    <div className="mt-6 flex flex-col space-y-2 divide-y">
      {isReverse
        ? episodes
            .map((eps, i) => (
              <Episode
                key={i}
                eps={eps.eps}
                date={eps.date}
                title={eps.title}
                slug={eps.slug}
              />
            ))
            .reverse()
        : episodes?.map((eps, i) => (
            <Episode
              key={i}
              eps={eps.eps}
              date={eps.date}
              title={eps.title}
              slug={eps.slug}
            />
          ))}
    </div>
  );
}

export default ListEpisode;
