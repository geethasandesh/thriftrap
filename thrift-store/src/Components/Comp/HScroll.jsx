import a from '../../assets/1.jpg';
import b from '../../assets/2.jpg';
import c from '../../assets/3.jpg';
import d from '../../assets/4.jpg';

const ProductScroll = () => {
  const categories = [
    "Shirts",
    "Shorts",
    "Jackets",
    "Hoodies",
    "Trousers",
    "Shoes",
    "Accessories"
  ];

  const products = [
    {
      id: 1,
      name: "Levis Dri-FIT",
      category: "Men's T-shirt",
      image: a
    },
    {
      id: 2,
      name: "Levis stripes",
      category: "Men's T-shirt",
      image: b
    },
    {
      id: 3,
      name: "H&M regular fit",
      category: "Men's T-shirt",
      image: c
    },
    {
      id: 4,
      name: "Jack & Jones Regular",
      category: "Men's T-shirt",
      image: d
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Arrivals By Categories</h1>
      
      {/* Categories Scroll */}
      <div className="overflow-x-auto mb-8">
        <div className="flex justify-center space-x-4 min-w-max pb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${index === 0 
                  ? 'bg-neutral-100 text-black' 
                  : 'text-gray-600 hover:bg-neutral-100'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Scroll */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6 min-w-max pb-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="w-72 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-neutral-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <button className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;
