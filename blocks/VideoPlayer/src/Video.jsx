import React from 'react';

export default function Video(props) {
  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  const { sources, ...others } = props;

  if (!sources || !sources.length) {
    return null;
  }

  return (
    <video controls autoPlay {...others} >
      <track kind="captions" />
      {sources.map((video, index) => {
        return <source {...video} key={index} />;
      })}
    </video>
  );
}
