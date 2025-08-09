import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
import { PlayArrow, Menu, VideoCall, Notifications, Apps } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ searchQuery, onSearchChange, onSearchSubmit, onMenuClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 'fit-content' }}>
          <IconButton
            onClick={onMenuClick}
            sx={{ mr: 1, color: 'white' }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={handleLogoClick}
          >
            <PlayArrow sx={{ color: '#ff4444', fontSize: 32, mr: 1 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              YouTube
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.6rem',
                ml: 0.5,
                mt: -1,
              }}
            >
              IN
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, mx: { xs: 1, sm: 4 } }}>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onSearchSubmit={onSearchSubmit}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'fit-content' }}>
          <IconButton sx={{ color: 'white' }}>
            <VideoCall />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Apps />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Notifications />
          </IconButton>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              ml: 1,
              cursor: 'pointer',
            }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;