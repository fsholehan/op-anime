import { useEffect, useState, useCallback } from "react";
import { getListEps } from "../fetch";
import InfoBottom from "./InfoBottom";
import InfoTop from "./InfoTop";

function Info() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  const getResult = useCallback(async () => {
    setLoading(true);
    const data = await getListEps();
    setResult(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getResult();
  }, [getResult]);

  return (
    <div>
      {loading && <h1>Loading.....</h1>}
      <InfoTop
        title={result.title}
        desc={result.description}
        img={result.imgUrl}
      />
      <InfoBottom listEps={result.episodes} />
    </div>
  );
}

export default Info;
