import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { getListEps, getWatch } from "../fetch";
import InfoBottom from "./InfoBottom";
import InfoTop from "./InfoTop";
import moment from "moment";

function Info() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [lastWatch, setLastWatch] = useState({});
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

    setLastWatch(JSON.parse(watch));
  }, []);

  useEffect(() => {
    getResult();
  }, [getResult]);

  useEffect(() => {
    if (lastWatch !== null && lastWatch.url !== undefined)
      getData(lastWatch.url);
  }, [getData, lastWatch]);

  console.log();

  return (
    <>
      {loading && <h1>Loading.....</h1>}
      <InfoTop
        title={result.title}
        desc={result.description}
        img={result.imgUrl}
      />
      {Object.keys(lastView).length !== 0 && (
        <div className="mt-10">
          <Link href={`/watch/${lastWatch.url}`}>
            <a className="block w-full rounded-full py-2 text-center bg-blue-500 text-white text-xs">
              Terakhir ditonton {lastView.title} <br />
              <b>
                {moment(lastWatch.timestamp).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )}
              </b>
            </a>
          </Link>
        </div>
      )}

      <InfoBottom listEps={result.episodes} />
    </>
  );
}

export default Info;
