import Video from "./Video";
import useVideoList from "../hooks/useVideo";
import { Link } from "react-router-dom";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          next={() => setPage(page + 8)}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's the end of the videos</b>
            </p>
          }
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`}
                state= {video.title
                }
                key={video.youtubeID}
               >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                ></Video>
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                key={video.youtubeID}
              ></Video>
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && <p className="error">There was an error</p>}
      {loading && <div>Loading...</div>}
    </>
  );
}
