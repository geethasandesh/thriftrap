import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';

const FashionCollection = () => {
  const images = [
    {
      id: 1,
      src: one,
      alt: "Model in light jacket",
      transform: "perspective(1000px) rotateY(45deg) translateX(-100px)"
    },
    {
      id: 2,
      src: two,
      alt: "Model in patterned sweater",
      transform: "perspective(1000px) rotateY(25deg) translateX(-50px)"
    },
    {
      id: 3,
      src: three,
      alt: "Model in red jacket",
      transform: "perspective(1000px) rotateY(-25deg) translateX(50px)"
    },
    {
      id: 4,
      src: four,
      alt: "Model in denim jacket",
      transform: "perspective(1000px) rotateY(-45deg) translateX(100px)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* New Texts */}
      <p className="text-sm text-gray-600 font-bold mb-2 p-4 font-serif">Experience fashion like never before</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 font-serif">
        Elevate your style with Fashion Yatra  
      </h2>
      <h2 className=" text-5xl text-red-500 font-bold font-serif">Fashion meets Passion</h2>
      <p className="text-sm text-gray-600 mb-6 text-center font-bold mb-5 p-6 font-serif">Discover a world of fashion-forward trends, curated collections, and timeless pieces that inspire. 
        Unleash your inner fashionista and embark on a journey of confidence,
         elegance and impeccable style.</p>

      {/* Shopping Button */}
      <button className="bg-black text-white px-8 py-3 rounded-full text-lg mb-16 font-serif">
        Start Shopping
      </button>

      {/* Image Gallery */}
      <div className="relative w-full max-w-7xl mx-auto mb-16">
        <div className="flex justify-center items-center gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              style={{
                transform: image.transform,
                width: '300px',
                height: '400px'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-xl font-bold text-center font-serif">
        Explore Our Latest Collections For You
      </h1>
    </div>
  );
};

export default FashionCollection;
