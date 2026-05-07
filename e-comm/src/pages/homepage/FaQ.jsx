import React, { useRef } from 'react';
import { Quote, Star, ArrowRight, ArrowLeft } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Katka Bohmova',
        location: 'Prague - Czech Republic',
        avatar: 'https://i.pravatar.cc/150?img=1',
        title: 'Best Product Ever!',
        text: 'It has been our dream for a long time to have our own sauna in the garden. After intensive research, we decided on a barrel sauna from Viktonwood. Fortunately! We didn\'t regret it! Even for me, as a mediocre hobby craftsman, it was no problem building the sauna myself.',
    },
    {
        id: 2,
        name: 'Stefan Kohl',
        location: 'Berlin - Germany',
        avatar: 'https://i.pravatar.cc/150?img=11',
        title: 'Five Star Service',
        text: 'It has been our dream for a long time to have our own sauna in the garden. After intensive research, we decided on a barrel sauna from Viktonwood. Fortunately! We didn\'t regret it! Even for me, as a mediocre hobby craftsman, it was no problem building the sauna myself.',
    },
    {
        id: 3,
        name: 'Bernhard Wessner',
        location: 'Berlin - Germany',
        avatar: 'https://i.pravatar.cc/150?img=5',
        title: 'Great Support & Service',
        text: 'It has been our dream for a long time to have our own sauna in the garden. After intensive research, we decided on a barrel sauna from Viktonwood. Fortunately! We didn\'t regret it! Even for me, as a mediocre hobby craftsman, it was no problem building the sauna myself.',
    },
    {
        id: 4,
        name: 'John Smith',
        location: 'United States',
        avatar: 'https://i.pravatar.cc/150?img=8',
        title: 'Very Fast Shipping',
        text: 'It has been our dream for a long time to have our own sauna in the garden. After intensive research, we decided on a barrel sauna from Viktonwood. Fortunately! We didn\'t regret it! Even for me, as a mediocre hobby craftsman, it was no problem building the sauna myself.',
    },
    {
        id: 5,
        name: 'Emma Watson',
        location: 'London - UK',
        avatar: 'https://i.pravatar.cc/150?img=9',
        title: 'Highly Recommended',
        text: 'It has been our dream for a long time to have our own sauna in the garden. After intensive research, we decided on a barrel sauna from Viktonwood. Fortunately! We didn\'t regret it! Even for me, as a mediocre hobby craftsman, it was no problem building the sauna myself.',
    }
];

const ReviewSlider = () => {
    const scrollRef = useRef(null);

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
    };

    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">

                {/* Header */}
                <div className="text-center  mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">from Customers with Love</h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                        Discover what our customers love about us: Honest, detailed reviews from satisfied shoppers sharing their experiences!
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">

                    {/* Scrollable Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-[1.5rem] p-8 min-w-[340px] max-w-[340px] snap-center flex-shrink-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-50 relative"
                            >
                                {/* Header: Avatar, Info, Quote */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                                            <p className="text-slate-400 text-xs">{review.location}</p>
                                        </div>
                                    </div>
                                    <Quote className="text-[#528292] w-8 h-8 opacity-80" fill="currentColor" />
                                </div>

                                <hr className="border-slate-100 mb-6" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-[#fbbf24]" fill="currentColor" />
                                    ))}
                                </div>

                                {/* Review Title & Text */}
                                <h5 className="font-bold text-[#528292] text-[15px] mb-3">{review.title}</h5>
                                <p className="text-slate-500 text-[13px] leading-relaxed">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:block">
                        <button
                            onClick={slideLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-slate-400 hover:text-slate-800 transition-colors z-10"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={slideRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-slate-400 hover:text-slate-800 transition-colors z-10"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>

                </div>

                {/* Footer */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <span className="font-bold text-slate-800 text-sm">4.7 Stars</span>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-[#fbbf24]" fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-slate-500 text-sm">26 reviews on</span>
                    {/* Google G Logo SVG */}
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                </div>

            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default ReviewSlider;
