import {
  get,
  getDatabase,
  ref,
  query,
  orderByKey,
  startAt,
  limitToFirst,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      //database related tasks
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setloading(true);
        //request firebase database
        const snapshot = await get(videoQuery);
        setloading(false);
        if (snapshot.exists()) {
          setVideos((preVideos) => {
            return [...preVideos, ...Object.values(snapshot.val())];
          });
        } else {
            setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setloading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore
  };
}
