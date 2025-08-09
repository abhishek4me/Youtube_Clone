import React from 'react';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import { Search, Mic } from '@mui/icons-material';

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        flexGrow: 1, 
        maxWidth: 600,
        gap: 1
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px 0 0 20px',
            height: '40px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff4444',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
            padding: '8px 16px',
            '&::placeholder': {
              color: 'rgba(255, 255, 255, 0.7)',
              opacity: 1,
            },
          },
        }}
      />
      <IconButton
        type="submit"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          borderRadius: '0 20px 20px 0',
          height: '40px',
          width: '64px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <Search />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
          ml: 1,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <Mic />
      </IconButton>
    </Box>
  );
};

export default SearchBar;