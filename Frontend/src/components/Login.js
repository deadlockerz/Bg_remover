import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3030/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/');
        } else {
          // Handle login failure here (e.g., display error message)
          console.log('Login failed');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='select-none flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:mb-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src={logo}
            alt='Your Company'
          />
          <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <div className='mt-0 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'
            action='#'
            method='POST'
          >
            <div>
              <button
                aria-label='Continue with google'
                className=' justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
              >
                {/* Google SVG */}
              </button>
              {/* Other social login buttons */}
            </div>

            <div className='w-full flex items-center justify-between py-5'>
              <hr className='w-full bg-gray-400' />
              <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
                OR
              </p>
              <hr className='w-full bg-gray-400' />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <div className='flex items-center justify-between'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                />
                <div className='text-sm'>
                  <Link
                    to='/forgot-password'
                    className=' font-semibold text-gray-600 hover:text-gray-500'
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mb-2'
              >
                Sign in
              </button>
            </div>
          </form>
          <p className='mt-10 text-center text-sm text-gray-500'>
            Not yet registered?{' '}
            <Link
              to='/register'
              className='font-semibold text-gray-900 hover:text-gray-700'
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
