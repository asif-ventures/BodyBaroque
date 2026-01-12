
import React, { useState } from 'react';

const StyleMapping: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-4xl mb-4">Start Your Style Prescription</h2>
      <p className="text-gray-500 mb-12 uppercase tracking-widest text-sm">Step {step} of 3</p>
      
      <div className="bg-[#F9F7F5] p-10 rounded-3xl shadow-sm border border-gray-100">
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-8 text-left">How would you describe your current aesthetic?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Minimalist', 'Baroque', 'Streetwear', 'Avant-Garde'].map((style) => (
                <button 
                  key={style}
                  onClick={() => setStep(2)}
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#447043] hover:text-[#447043] transition-all text-sm font-medium"
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-medium mb-8 text-left">What is your primary wardrobe goal?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Building a Capsule Wardrobe', 'Integrating Current Trends', 'Special Event Styling', 'Personal Identity Discovery'].map((goal) => (
                <button 
                  key={goal}
                  onClick={() => setStep(3)}
                  className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#447043] hover:text-[#447043] transition-all text-sm font-medium text-left"
                >
                  {goal}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-8 text-gray-400 hover:text-gray-600 underline text-xs">Go back</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in py-8">
            <div className="w-16 h-16 bg-[#447043] rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif mb-4">Your mapping is ready!</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">Enter your email to receive your personalized style report and curated selection.</p>
            <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
              <input type="email" placeholder="Email address" className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#447043]/20" />
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleMapping;
