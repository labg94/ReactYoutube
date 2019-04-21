import axios from 'axios'

const KEY = 'AIzaSyCOP_VhPEANQNMhEXwX8gGQDyu9Mjv2m3E'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})