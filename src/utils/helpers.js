export const formatViews = (views) => {
  const numStr = views.toString().replace(/[KM]/g, '');
  const num = parseFloat(numStr);
  
  if (views.includes('M')) {
    return `${num}M views`;
  } else if (views.includes('K')) {
    return `${num}K views`;
  }
  return `${views} views`;
};

export const formatDuration = (duration) => {
  return duration;
};

export const searchVideos = (videos, searchQuery) => {
  if (!searchQuery.trim()) {
    return videos;
  }
  
  const query = searchQuery.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(query) ||
    video.channel.toLowerCase().includes(query)
  );
};