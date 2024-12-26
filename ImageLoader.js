export default function ImageLoader({ src, width, quality }) {
    // If it's a Sanity image URL, return it as is
    if (src.startsWith('https://cdn.sanity.io')) {
        return src;
    }
    // For all other images, return src as before
    return src;
}