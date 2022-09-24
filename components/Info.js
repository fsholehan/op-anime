import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { getListEps, getWatch } from "../fetch";
import InfoBottom from "./InfoBottom";
import InfoTop from "./InfoTop";

function Info() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [lastWatch, setLastWatch] = useState("");
  const [lastView, setLastView] = useState({});

  const getResult = useCallback(async () => {
    setLoading(true);
    const data = await getListEps();
    setResult(data);
    setLoading(false);
  }, []);

  const getData = useCallback(async (slug) => {
    setLoading(true);
    const data = await getWatch(slug);
    setLastView(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const watch = window.localStorage.getItem("last-watch");

    setLastWatch(watch);
  }, []);

  useEffect(() => {
    getResult();
  }, [getResult]);

  useEffect(() => {
    if (lastWatch !== "" && lastWatch !== null) getData(lastWatch);
  }, [getData, lastWatch]);

  return (
    <div>
      {loading && <h1>Loading.....</h1>}
      <InfoTop
        title={result.title}
        desc={result.description}
        img={result.imgUrl}
      />
      {Object.keys(lastView).length !== 0 && (
        <div className="mt-10">
          <Link href={`/watch/${lastWatch}`}>
            <a className="block w-full rounded-full py-2 text-center border border-blue-500 text-xs">
              Terakhir ditonton {lastView.title}
            </a>
          </Link>
        </div>
      )}

      <InfoBottom listEps={result.episodes} />
    </div>
  );
}

export default Info;
