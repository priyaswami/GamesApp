//Network Images

// To build an image URL, you will need 3 pieces of data. 
// The base_url, size and file_path. 
// Simply combine them all and you will have a fully qualified URL. Here’s an example URL:

// https://steamcdn-a.akamaihd.net/steam/apps/752590/library_600x900_2x.jpg

const type = "uri"
const ImagePath = (path, width = 'w500') =>
    path ? { [type]: `https://steamcdn-a.akamaihd.net/steam/apps/${path}/library_600x900_2x.jpg` } : '';

export default ImagePath;
