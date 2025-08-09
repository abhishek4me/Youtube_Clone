import React, { useRef, useState } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { formatViews } from '../utils/helpers';

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (!video) {
    return null;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#000',
          mb: 3,
        }}
      >
        <video
          ref={videoRef}
          controls
          width="100%"
          height="auto"
          style={{
            maxHeight: '70vh',
            objectFit: 'contain',
          }}
          poster={video.thumbnail}
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>

      <Box sx={{ px: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'white',
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          {video.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
            }}
          >
            {video.channel}
          </Typography>
          <Chip
            label={video.duration}
            size="small"
            sx={{
              backgroundColor: 'rgba(255, 68, 68, 0.1)',
              color: '#ff4444',
              border: '1px solid rgba(255, 68, 68, 0.3)',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {formatViews(video.views)}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            •
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {video.uploadDate}
          </Typography>
        </Box>

        <Paper
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            p: 3,
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
            }}
          >
            {video.description}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
