import f1 from '../../assets/f1.jpg'
import f2 from '../../assets/f2.jpg'

const FeaturedSection = () => {
  const promotions = [
    {
      id: 1,
      title: "Bottega veneta Women",
      subtitle: "Exclusive Series",
      image: f1,
      link: "#"
    },
    {
      id: 2,
      title: "John Lewis : Any Day",
      subtitle: "Ceollections",
      image: f2,
      link: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Featured</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <div 
            key={promo.id} 
            className="relative rounded-2xl overflow-hidden group"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] md:aspect-[16/10] w-full">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {promo.title}
                </h2>
                <p className="text-lg md:text-xl mb-4">
                  {promo.subtitle}
                </p>
                <button className="inline-flex items-center px-6 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;