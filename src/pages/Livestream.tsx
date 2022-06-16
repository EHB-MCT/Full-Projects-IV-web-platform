import BackArrow from "../components/BackArrow";
import LiveYoutubeChat from "../components/LiveYoutubeChat";
import Share from "../components/Share";
import VideoPlayer from "../components/VideoPlayer";

function Livestream() {
  return (
    <>
      <div className="livebody">
        <BackArrow></BackArrow>
        <div className="streaming">
          <VideoPlayer></VideoPlayer>
          <div className="streamingBottom">
            <h1>EhB Final show 2022</h1>
            <div className="actionsYoutube">
              <Share></Share>
            </div>
          </div>
          <LiveYoutubeChat></LiveYoutubeChat>
        </div>
      </div>
    </>
  );
}

export default Livestream;
