import { useState } from 'react';
import { motion } from 'framer-motion';

import Login from './Login';
import Register from './Register';

export default function SigningContainer() {
  const [selected, setSelected] = useState('login');

  return (
    <div className='bg-gray-200 rounded-xl shadow-xl p-10 pt-7 w-96 h-96 absolute top-1/4 right-60'>
      <div className='h-10'>
        <motion.h1
          onClick={() => setSelected('login')}
          animate={{
            color: selected === 'login' ? '#000' : '#888',
            translateX: selected === 'login' ? '0%' : '14rem',
            cursor: selected === 'login' ? 'default' : 'pointer',
          }}
          transition={{ duration: 0.3 }}
          className='text-2xl font-bold mb-2 absolute'
        >
          Log In
        </motion.h1>
        <motion.h1
          onClick={() => setSelected('register')}
          className='text-2xl font-bold mb-2 absolute translate-x-[13rem]'
          animate={{
            color: selected !== 'login' ? '#000' : '#888',
            translateX: selected !== 'login' ? '0%' : '13rem',
            cursor: selected !== 'login' ? 'default' : 'pointer',
          }}
          transition={{ duration: 0.3 }}
        >
          Register
        </motion.h1>
      </div>
      {selected === 'login' ? <Login /> : <Register />}
    </div>
  );
}
