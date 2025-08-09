import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import VideoCard from './VideoCard';
import CategoryTabs from './CategoryTabs';

const VideoGrid = ({ videos, onVideoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // In a real app, you would filter videos based on category
  };

  if (videos.length === 0) {
    return (
      <>
        <CategoryTabs 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="rgba(255, 255, 255, 0.7)">
              No videos found
            </Typography>
            <Typography variant="body1" color="rgba(255, 255, 255, 0.5)" sx={{ mt: 1 }}>
              Try adjusting your search terms
            </Typography>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <CategoryTabs 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Container maxWidth="xl" sx={{ mt: 3, pb: 4, ml: { md: '240px' }, width: { md: 'calc(100% - 240px)' } }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-start',
          }}
        >
          {videos.map((video) => (
            <Box
              key={video.id}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 8px)',
                  md: 'calc(33.333% - 11px)',
                },
                minWidth: {
                  xs: '100%',
                  sm: '280px',
                  md: '300px',
                },
              }}
            >
              <VideoCard video={video} onClick={onVideoClick} />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default VideoGrid;
