import { useState, useEffect } from "react";

interface ImageGalleryProps {
  selectedColor: string;
}

export default function ProductImageGallery({ selectedColor }: ImageGalleryProps) {
  // Define image paths for each color
  const images = {
    "Ocean Blue": [
      "/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-main.jpg",
      "/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-detail.jpg",
      "/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-closeup.jpg",
      "/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-color.jpg"
    ],
    "Pink": [
      "/assests/images/pink/neko-6-roller-massage-therapy-pink-main.jpg",
      "/assests/images/pink/neko-6-roller-massage-therapy-pink-detail.jpg",
      "/assests/images/pink/neko-6-roller-massage-therapy-pink-closeup.jpg"
    ]
  };

  const [mainImage, setMainImage] = useState(images[selectedColor as keyof typeof images]?.[0] || "");
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    // Update images when color changes
    const colorImages = images[selectedColor as keyof typeof images] || [];
    setMainImage(colorImages[0] || "");
    setThumbnails(colorImages);
  }, [selectedColor]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
        <img
          src={mainImage}
          alt={`6-Roller Cervical Massager - ${selectedColor}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2">
        {thumbnails.slice(0, 4).map((image, index) => (
          <div 
            key={index}
            className={`aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer border-2 ${
              mainImage === image ? "border-primary" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}