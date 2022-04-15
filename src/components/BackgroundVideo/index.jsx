import React from "react";
import { SourceVideo } from "../../shared/SourceVideo";
import styled from 'styled-components'
import VideoStars from '../../assets/stars.mp4'

const Video = styled.video`
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const BackgroundVideo = () => {
  return (
    <Video autoPlay={true} muted loop playsInline>
        <SourceVideo src={VideoStars} type="video/mp4" />
        Your browser does not support the video tag.
    </Video>
  );
};

export default BackgroundVideo;
