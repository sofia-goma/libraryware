import Link from 'next/link';
// import registerImage from '../../../public/images/signin-image.webp';
import loginImage from '../../../public/images/login-image.webp';
import { FaUserTag, FaMailBulk, FaEye } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  return (
    <div className="bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <Image src={loginImage} className="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form
            className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                //   {...register('name', { required: true })}
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name" />
                <FaUserTag size={24} fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                //   {...register('email', { required: true })}
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <FaMailBulk
                  size={24}
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                //   {...register('password', { required: true })}
                  type="password"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <FaEye
                  size={24}
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                I accept the <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div className="mt-12">
              <button type="submit" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Create an account
              </button>
              <p className="text-sm mt-6 text-gray-800">Already have an account? <Link href="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}