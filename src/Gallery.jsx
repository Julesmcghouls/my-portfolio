function Gallery() {
// Placeholder data for your images
const images = [
{ src: 'path/to/image1.jpg', title: 'Image 1', description: 'Description of image 1' },
{ src: 'path/to/image2.jpg', title: 'Image 2', description: 'Description of image 2' },
// Add more images here
];

return (
<div>
    <h1>My Photography Gallery</h1>
    <div className="gallery">
    {images.map((image, index) => (
        <div key={index} className="photo-card">
        <img src={image.src} alt={image.title} />
        <h2>{image.title}</h2>
        <p>{image.description}</p>
        </div>
    ))}
    </div>
</div>
);
}

export default Gallery;