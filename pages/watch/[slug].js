import Section from "../../components/Section";
import { useCallback, useEffect, useState } from "react";
import { getWatch } from "../../fetch";
import { useRouter } from "next/router";
import Iframe from "react-iframe";

function Watch() {
  const { query, isReady } = useRouter();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async (slug) => {
    setLoading(true);
    const data = await getWatch(slug);
    setResult(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isReady) {
      getData(query.slug);
    }
  }, [getData, query.slug, isReady]);

  console.log(result);

  return (
    <Section>
      {loading && <h1>Loading....</h1>}
      <div>
        <Iframe
          url={result.video_uri}
          height="300px"
          id="myId"
          className="w-full"
          display="initial"
          position="relative"
        />
        <h1>{result.title}</h1>
      </div>
    </Section>
  );
}

export default Watch;
