import bomber from "../../assets/bomberjacket.jpg";
import couple from "../../assets/couple.jpg";
import leather from "../../assets/watch.jpg";
import tote from "../../assets/toebag.jpg";

const ProductCollection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Couples Collection - Full Width of Left Column */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src={couple}
              alt="Collection for Couples"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  Collection For Couples
                </h2>
                <p className="text-sm md:text-base opacity-90">
                  Our Collection for Couple Features coordinated designs and patterns, 
                  allowing couples to showcase their unity through fashion.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-colors">
                Shop now
                <svg 
                  className="ml-2 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              </div>
            </div>
          </div>

          {/* Watch and Bags Grid - Two Equal Columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Leather Watch Collection */}
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={leather}
                alt="Leather Watch Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  <h2 className="text-lg md:text-2xl font-bold">
                    Leather Watch Collection
                  </h2>
                  <button className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-colors">
                Shop now
                <svg 
                  className="ml-2 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
                </div>
              </div>
            </div>

            {/* Tote Bags Collection */}
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={tote}
                alt="New Tote Bags Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  <h2 className="text-lg md:text-2xl font-bold">
                    New Tote Bags Collection
                  </h2>
                  <button className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-colors">
                Shop now
                <svg 
                  className="ml-2 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Bomber Jacket */}
        <div className="relative rounded-2xl overflow-hidden aspect-[9/9.5]">
          <img
            src={bomber}
            alt="Sheer Bomber Jacket"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-3">
                Sheer Bomber Jacket
              </h2>
              <p className="text-sm md:text-base mb-4 opacity-90">
                Introducing our stylish and versatile sheer clergy caped bomber jacket
              </p>
              <button className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm md:text-base hover:bg-white hover:text-black transition-colors">
                Shop now
                <svg 
                  className="ml-2 w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;