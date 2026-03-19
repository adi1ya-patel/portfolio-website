import axios from 'axios';

async function fetchRSS() {
  const channelId = 'UCrtH1DkBI-VT1aspazq9Wzg';
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  try {
    const response = await axios.get(rssUrl);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchRSS();
