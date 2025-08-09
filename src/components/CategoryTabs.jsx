import React, { useState } from 'react';
import { Box, Chip, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CategoryTabs = ({ selectedCategory, onCategoryChange }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const categories = [
    'All',
    'Breaking Bad',
    'Royal Enfield',
    'Malayalam cinema',
    'Dramedy',
    'Action Thrillers',
    'Cruisers',
    'Apple',
    'Speed',
    'Live',
    'Presentations',
    'Cars',
    'Tourist destinations',
    'Recently uploaded',
    'New to you',
    'Watched',
    'Music',
    'Gaming',
    'Comedy',
    'News',
    'Sports'
  ];

  const handleScroll = (direction) => {
    const container = document.getElementById('category-container');
    const scrollAmount = 200;
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
    } else {
      container.scrollLeft += scrollAmount;
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        py: 1,
        px: 2,
        position: 'sticky',
        top: 64,
        zIndex: 100,
      }}
    >
      <IconButton
        onClick={() => handleScroll('left')}
        sx={{
          color: 'white',
          mr: 1,
          display: scrollPosition > 0 ? 'flex' : 'none',
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        id="category-container"
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          flex: 1,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => onCategoryChange(category)}
            sx={{
              backgroundColor: selectedCategory === category 
                ? 'white' 
                : 'rgba(255, 255, 255, 0.1)',
              color: selectedCategory === category 
                ? 'black' 
                : 'white',
              border: selectedCategory === category 
                ? 'none' 
                : '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.875rem',
              height: '32px',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: selectedCategory === category 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.2)',
              },
              '&:focus': {
                backgroundColor: selectedCategory === category 
                  ? 'white' 
                  : 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={() => handleScroll('right')}
        sx={{
          color: 'white',
          ml: 1,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default CategoryTabs;