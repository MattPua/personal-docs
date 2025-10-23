import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

const pictures = [
  {
    src: "/assets/images/cat/lulu-1.jpeg",
    alt: "Lulu derping",
  },
  {
    src: "/assets/images/cat/lulu-2.jpeg",
    alt: "Lulu in a box",
  },
  {
    src: "/assets/images/cat/lulu-3.jpeg",
    alt: "Lulu on an egg carton",
  },
  {
    src: "/assets/images/cat/lulu-4.jpeg",
    alt: "Lulu derping in a box",
  },
];

export function CatPictures() {
  return (
    <section>
    <div className="flex flex-wrap gap-2">
        {pictures.map((picture) => (
        <ImageZoom 
          key={picture.src}
          src={picture.src} 
          alt={picture.alt} 
          width={140}
          height={100}
          className="rounded-md hover:scale-125 transition-all duration-300"
        />
      ))}
    </div>
    </section>
  );
}