import Counter from '@/Componets/Counter/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  // throw new Error();
  return (
    <div>
      <h1>This is Home page.</h1>
      <Counter></Counter>
      <Link href="/about">
      <button className='btn btn-primary'>
        About
      </button>
      </Link>
      <Link href="/news">
      <button className='btn btn-primary'>
        News
      </button>
      </Link>
      <Link href="/products">
      <button className='btn btn-primary'>
        Products
      </button>
      </Link>
    </div>
  );
};

export default HomePage;