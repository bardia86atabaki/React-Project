import React from 'react';
import Btn from '../Components/btn';

function Home() {
  return (
    <div className='flex'>
        <div className='w-1/2 mt-32'>
            <h1 className='w-1/2 font-medium text-3xl'>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
            <p className='w-2/3 mt-5'>Discover more than <span className='text-custom-yellow'>10,000 recipes </span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
            <div className='mt-10'>
                <Btn width="w-48" height="h-16">Explore Recipes</Btn>
            </div>
        </div>
        <div className='w-1/2'>
           <img src="src/Assets/1.png" alt="" />
        </div>
    </div>
  );
}

export default Home;
