import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip
} from '@mui/material';
import { formatViews } from '../utils/helpers';

const VideoCard = ({ video, onClick }) => {
  const handleClick = () => {
    onClick(video.id);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          '& .video-thumbnail': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            objectFit: 'cover',
          }}
        />
        <Chip
          label={video.duration}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            fontSize: '0.75rem',
            height: '20px',
          }}
        />
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: 'white',
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.3,
          }}
        >
          {video.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 0.5,
            fontSize: '0.875rem',
          }}
        >
          {video.channel}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
            }}
          >
            {formatViews(video.views)}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
            }}
          >
            •
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem',
            }}
          >
            {video.uploadDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;