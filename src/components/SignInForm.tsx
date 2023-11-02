import React from 'react';

const SignInForm = () => {
  return (
    <div>
      <input
        className='w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border border-gray-200 bg-slate-100 rounded-2xl focus:outline-none focus:border-gray-400 focus:bg-white'
        type='email'
        placeholder='Email'
      />

      <input
        className='w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 border border-gray-200 bg-slate-100 rounded-2xl focus:outline-none focus:border-gray-400 focus:bg-white'
        type='password'
        placeholder='Password'
      />
      <button type='submit' className='w-full px-5 py-4 mt-5 text-sm font-medium text-center text-white bg-blue-600 rounded-2xl focus:ring-4 focus:outline-none'>
        Sign up
      </button>
    </div>
  );
};

export default SignInForm;
