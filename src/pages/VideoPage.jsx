import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import VideoPlayer from '../components/VideoPlayer';
import VideoGrid from '../components/VideoGrid';

const VideoPage = ({ videos, onVideoClick }) => {
  const { id } = useParams();
  const currentVideo = videos.find((video) => video.id === id);

  if (!currentVideo) {
    return <Navigate to="/" replace />;
  }

  // Get related videos (exclude current video)
  const relatedVideos = videos.filter((video) => video.id !== id).slice(0, 8);

  return (
    <Container maxWidth="xl" sx={{ mt: 3, pb: 4, ml: { md: '240px' }, width: { md: 'calc(100% - 240px)' } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <VideoPlayer video={currentVideo} />
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <Box sx={{ mb: 2 }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '16px', 
              fontSize: '1.1rem',
              fontWeight: 600 
            }}>
              Related Videos
            </h3>
          </Box>
          <Grid container spacing={2}>
            {relatedVideos.map((video) => (
              <Grid item xs={12} sm={6} lg={12} key={video.id}>
                <div onClick={() => onVideoClick(video.id)}>
                  <VideoGrid videos={[video]} onVideoClick={onVideoClick} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoPage;