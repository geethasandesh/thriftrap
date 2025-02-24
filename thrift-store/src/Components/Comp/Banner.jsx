import bend from '../../assets/1.jpg';

const HolidayBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="relative overflow-hidden bg-green-900 rounded-3xl h-80">
        <div className="flex flex-col md:flex-row h-full">
          {/* Content Section */}
          <div className="w-full md:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Save 50% this Holiday season
            </h1>
            <p className="text-md md:text-lg text-white/90 mb-6 max-w-2xl">
              Time to revamp your fashion game without breaking the bank! 
              Dive into our exclusive 50% off sale and discover unbeatable deals 
              on the most coveted styles.
            </p>
            <button className="w-50 px-6 py-2 rounded-full 
              border-2 border-white text-white hover:bg-white hover:text-green-900 
              transition-colors duration-300 text-lg font-medium">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 h-full relative">
            <img
              src={bend}
              alt="Winter fashion model"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-black/20 md:hidden"></div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-800 rounded-full opacity-30"></div>
        <div className="absolute -left-6 -top-6 w-28 h-28 bg-green-800 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default HolidayBanner;
