import Episode from "./Episode";

function ListEpisode({ episodes, searchEps, reverse }) {
  function renderEpisode(eps, i) {
    return (
      <Episode
        key={i}
        eps={eps.eps}
        date={eps.date}
        title={eps.title}
        slug={eps.slug}
      />
    );
  }

  const filteredEpisodes =
    searchEps !== ""
      ? episodes?.filter((eps) => eps.eps.includes(searchEps))
      : episodes;

  return (
    <>
      {reverse
        ? filteredEpisodes?.map(renderEpisode).reverse()
        : filteredEpisodes?.map(renderEpisode)}
    </>
  );
}

export default ListEpisode;
