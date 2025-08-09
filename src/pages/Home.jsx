import React from 'react';
import VideoGrid from '../components/VideoGrid';

const Home = ({ videos, onVideoClick }) => {
  return <VideoGrid videos={videos} onVideoClick={onVideoClick} />;
};

export default Home;