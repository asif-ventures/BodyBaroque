
import React from 'react';

const Concept: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[#447043] font-medium tracking-widest uppercase mb-4">The New Concept</h3>
          <h2 className="font-serif text-5xl mb-6 leading-tight">Effortlessly stylish and completely authentic.</h2>
          <p className="text-gray-600">Get the latest trends before they hit the mainstream and a personalized style prescription that tells you exactly how to wear them.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/id/103/400/600" className="w-full rounded-lg object-cover h-80" alt="Mood 1" />
            <img src="https://picsum.photos/id/106/400/400" className="w-full rounded-lg object-cover h-40" alt="Mood 2" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://picsum.photos/id/111/400/400" className="w-full rounded-lg object-cover h-40" alt="Mood 3" />
            <img src="https://picsum.photos/id/115/400/600" className="w-full rounded-lg object-cover h-80" alt="Mood 4" />
          </div>
          <div className="space-y-4">
            <img src="https://picsum.photos/id/129/400/600" className="w-full rounded-lg object-cover h-80" alt="Mood 5" />
            <img src="https://picsum.photos/id/133/400/400" className="w-full rounded-lg object-cover h-40" alt="Mood 6" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://picsum.photos/id/145/400/400" className="w-full rounded-lg object-cover h-40" alt="Mood 7" />
            <img src="https://picsum.photos/id/152/400/600" className="w-full rounded-lg object-cover h-80" alt="Mood 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
