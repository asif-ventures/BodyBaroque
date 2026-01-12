
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://picsum.photos/id/64/800/1000" 
              alt="Vision Model" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#E2DED0] -z-10 rounded-2xl hidden md:block"></div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h3 className="text-[#447043] font-medium tracking-widest uppercase mb-4">Our Vision</h3>
          <h2 className="font-serif text-5xl mb-8 leading-tight">Crafting your unique <br/> style blueprint.</h2>
          
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-semibold mb-3">Personalized Style Mapping</h4>
              <p className="text-gray-600 leading-relaxed">
                The core of our service is the user. We take your body type, lifestyle, budget, and personal taste to heart, providing customized advice on how to integrate the latest trends into your wardrobe seamlessly.
              </p>
            </div>
            
            <div className="h-px bg-gray-200 w-full"></div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Global Trend Forecasting</h4>
              <p className="text-gray-600 leading-relaxed">
                Our experts are constantly monitoring runways, street style, and social media to deliver vetted, up-to-the-minute trend reports. You'll always be in the know about the fabrics, colors, silhouettes, and style statements that matter right now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
