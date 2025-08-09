import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Avatar
} from '@mui/material';
import {
  Home,
  Subscriptions,
  VideoLibrary,
  History,
  PlaylistPlay,
  WatchLater,
  ThumbUp,
  Download,
  Menu
} from '@mui/icons-material';

const Sidebar = ({ open, onClose }) => {
  const mainItems = [
    { text: 'Home', icon: <Home />, active: true },
    { text: 'Shorts', icon: <VideoLibrary /> },
    { text: 'Subscriptions', icon: <Subscriptions /> },
  ];

  const youItems = [
    { text: 'History', icon: <History /> },
    { text: 'Playlists', icon: <PlaylistPlay /> },
    { text: 'Your videos', icon: <VideoLibrary /> },
    { text: 'Your courses', icon: <VideoLibrary /> },
    { text: 'Watch later', icon: <WatchLater /> },
    { text: 'Liked videos', icon: <ThumbUp /> },
    { text: 'Downloads', icon: <Download /> },
  ];

  const subscriptions = [
    { name: 'Liquid Steel Gaming', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
    { name: 'RVS Maths Academy', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
    { name: 'Safari', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
    { name: 'MrBeast', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
    { name: 'TechTalkz', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
  ];

  const drawerContent = (
    <Box sx={{ width: 240, height: '100%', backgroundColor: '#0f0f0f' }}>
      <List sx={{ pt: 1 }}>
        {mainItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              py: 1,
              px: 3,
              backgroundColor: item.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: item.active ? 500 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mx: 2 }} />

      <Box sx={{ px: 3, py: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontWeight: 500,
            mb: 1,
            fontSize: '0.875rem',
          }}
        >
          You
        </Typography>
      </Box>

      <List sx={{ pt: 0 }}>
        {youItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              py: 1,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontSize: '0.875rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mx: 2 }} />

      <Box sx={{ px: 3, py: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontWeight: 500,
            mb: 1,
            fontSize: '0.875rem',
          }}
        >
          Subscriptions
        </Typography>
      </Box>

      <List sx={{ pt: 0 }}>
        {subscriptions.map((sub) => (
          <ListItem
            button
            key={sub.name}
            sx={{
              py: 1,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Avatar
                src={sub.avatar}
                sx={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              primary={sub.name}
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontSize: '0.875rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: '#0f0f0f',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            top: 64,
            height: 'calc(100vh - 64px)',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: '#0f0f0f',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;