import axios from 'axios';

const KEY = 'AIzaSyCKyRqN-fiyB5p-D93KtY3JQMcbSERg02s';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 10,
        key:KEY,  
    }
});