import React from 'react';
import { categories } from '../../constants';

const CategoryCard = ({ item }) => {
  return (
    <div className='w-full rounded-lg cursor-pointer aspect-square p-2 flex-col bg-red-100 flex justify-center items-center'>
      <img src={item.img} className='aspect-square w-full rounded-md ' alt='img' />
      <h1 className='text-lg text-pink-900'>{item.title}</h1>
    </div>
  );
};

const Categories = () => {
  
  return (
    <div className='m-4'>

    <h1 className='text-3xl font-bold'>Categories</h1>
    <div className='grid gap-3 grid-cols-4 sm:grid-cols-7 py-4'>
      {categories.map((item, idx) => (
        <CategoryCard item={item} key={idx} />
      ))}
    </div>
    </div>
  );
};

export default Categories;
