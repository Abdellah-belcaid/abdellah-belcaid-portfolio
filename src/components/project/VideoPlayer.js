import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, thumbnail }) => {
  return (
    <div className="player-wrapper h-full border p-4 rounded-xl">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        controls
        light={
          <div
            className="w-full h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
        }
      />
    </div>
  );
};

export default VideoPlayer;
