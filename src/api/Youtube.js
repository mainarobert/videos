import axios from 'axios';

const KEY = 'AIzaSyD9ODchLGc5OfZpTr7RIlRsV0y-MDClmqE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

