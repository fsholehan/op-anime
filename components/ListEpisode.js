import Episode from "./Episode";

function ListEpisode({ episodes }) {
  return (
    <div className="mt-6 flex flex-col space-y-2 divide-y">
      {episodes?.map((eps, i) => (
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
