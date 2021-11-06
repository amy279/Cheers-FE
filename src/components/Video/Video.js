import React from 'react';
import { VideoContainer } from './styled';
import { ReactFlvPlayer } from 'react-flv-player';

const Video = () => {
  return (
    <VideoContainer>
      <ReactFlvPlayer
        url="http://localhost:8000/live/cheers.flv"
        width="800px"
        height="500px"
        handleError={err => {
          switch (err) {
            case 'NetworkError':
              console.log('network error');
              break;
            case 'MediaError':
              console.log('media error');
              break;
            default:
              console.log('other error');
          }
        }}
      />
    </VideoContainer>
  );
};

export default Video;
