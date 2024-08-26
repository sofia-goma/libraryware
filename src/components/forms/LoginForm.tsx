import Link from 'next/link';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import loginImage from '../../../public/images/login-image.webp';
import { FaUserTag, FaMailBulk, FaEye } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Type {
    name: string;
}
export default function LoginForm() {
    //   const navigate = useNavigate();
    //   const { register, handleSubmit } = useForm<Type>();
    //   const onSubmit = async (data) => {
    //     const { userEmail, userPassword } = data;
    //     console.log(userEmail, userPassword);
    //     try {
    //       localStorage.clear();
    //       sessionStorage.clear();

    //       if (!userEmail || !userPassword) {
    //         toast.error("All fields are required!");
    //       }
    //       const resp = await axios.post(`${mainConfig.BACKEND_URL}/auth/signin`, { userEmail, userPassword });
    //       if (resp.status == '200') {
    //         localStorage.setItem('token', await resp.data.data.accessToken);
    //         localStorage.setItem('id', await resp.data.data.userId);
    //         sessionStorage.setItem('token', await resp.data.data.accessToken);
    //         sessionStorage.setItem('id', await resp.data.data.userId);
    //         toast.success(await resp.data.message);
    //         setTimeout(() => {
    //           navigate('/');
    //         }, 3000)
    //       } else {
    //         toast.info("Unable to Login!");
    //         return;
    //       }

    //     } catch (error) {
    //       toast.error("Failed to create a user!");
    //     }
    //   }

    return (
        <div className="">
            <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        // {...register('userEmail', { required: true })}
                                        type="email"
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter Email"
                                    />
                                    <FaMailBulk
                                        size={24}
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-[18px] h-[18px] absolute right-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        // {...register('userPassword', { required: true })}
                                        type="password"
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
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

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="!mt-8">
                                <button type="submit" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                    Log in
                                </button>
                            </div>

                            <p className="text-sm !mt-8 text-center text-gray-800">Don't have an account <Link href="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <Image src={loginImage} className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}