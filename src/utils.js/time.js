/**
 * get time ago
 * @param {*} postDate
 * @returns
 */
const formatPostTime = (timestamp) => {
  const now = new Date();
  const postDate = new Date(timestamp);
  const diffInSeconds = Math.floor((now - postDate) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 60 * 60;
  const secondsInDay = 24 * 60 * 60;

  if (diffInSeconds < 10) {
    return "Just now";
  } else if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} secs ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hr${hours > 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInDay * 2) {
    return "Yesterday";
  } else {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
};

export default formatPostTime;
