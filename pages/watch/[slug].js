import Section from "../../components/Section";
import { useCallback, useEffect, useState } from "react";
import { getWatch } from "../../fetch";
import Router, { useRouter } from "next/router";
import Iframe from "react-iframe";
import Button from "../../components/Button";
import Head from "next/head";
import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { addToLocalStorage } from "../../helpers/addToLocalStorage";

function Watch() {
  const { query, isReady } = useRouter();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [sv, setSv] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const getData = useCallback(async (slug) => {
    setLoading(true);
    const data = await getWatch(slug);
    setResult(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isReady) {
      getData(query.slug);
      localStorage.setItem("last-watch", query.slug);
    }
  }, [getData, query.slug, isReady]);

  const saveHandler = (e) => {
    e.preventDefault();
    addToLocalStorage("saved", {
      title: result.title,
      timestamp: new Date().getTime(),
      slug: query.slug,
    });
    setIsSaved(true);
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("saved");

    setSv(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (sv !== null) {
      sv.filter((s) => setIsSaved(s.slug === query.slug));
    }
  }, [query.slug, sv]);

  return (
    <>
      <Head>
        <title>Streaming {result.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Link href="/">
          <a className="mb-4 block">Beranda</a>
        </Link>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            <Iframe
              url={result.video_uri}
              height="300px"
              id="myId"
              className="w-full"
              display="initial"
              position="relative"
              allowFullScreen
            />
            <div className="flex justify-between items-center">
              <div>
                <h1 className="md:text-lg text-gray-700 font-semibold mt-3">
                  {result.title}
                </h1>
                <h2 className="font-light text-xs">{result.released}</h2>
              </div>

              {isSaved ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <button type="button" onClick={saveHandler}>
                  <BookmarkIcon className="h-5" />
                </button>
              )}
            </div>
            <div className="mt-5 flex items-center justify-between">
              <Button
                backgroundColor="bg-gray-700"
                text="Previous"
                href={`/watch/${result.prev_eps}`}
              />
              <Button
                backgroundColor="bg-blue-500"
                text="Next"
                href={`/watch/${result.next_eps}`}
              />
            </div>
            <div className="mt-5">
              <span className="font-semibold text-gray-700 text-sm">
                * Jika blank refresh
              </span>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}

export default Watch;
