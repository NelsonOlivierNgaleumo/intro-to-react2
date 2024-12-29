"use client"

import React, { useEffect, useState } from 'react';
import Counter from '../../components/counter';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');


  // useEfect will start the timer and after the component renders, will rerender adter 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return <div>
    {stateHook}
    <Counter initialCount={100} />
    <Counter initialCount={300} />
    <Counter initialCount={10} />
    <Counter initialCount={50} />
    <Counter initialCount={1900} />
    <Counter initialCount={12} />
    <Counter initialCount={1340} />
    <Counter initialCount={103} />
    <Counter initialCount={8} />
    </div>;
}
