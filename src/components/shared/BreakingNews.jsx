import React from 'react';
import Marquee from 'react-fast-marquee';
import Navbar from './Navbar';

const news = [
  {
    id: 1,
    title: "Ancient Dragon Fossil Discovered in Remote Mountain"
  },
  {
    id: 2,
    title: "Scientists Reveal New Insights Into Dragon Mythology"
  },
  {
    id: 3,
    title: "Rare Fire-Breathing Dragon Spotted by Explorers"
  },
  {
    id: 4,
    title: "New Movie About Dragons Breaks Box Office Records"
  },
  {
    id: 5,
    title: "Researchers Study the Legend of Ice Dragons in the Arctic"
  }
];

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-2 px-2 container mx-auto'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                
                    {news.map(item => ( 
                        <span key={item.id} className='mx-4 text-lg font-medium'>
                            {item.title}
                        </span>
                    ))}
                <Navbar />
            </Marquee>
        </div>
    );
};

export default BreakingNews;