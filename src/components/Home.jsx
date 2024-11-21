import React from 'react'
import Rafi from "../assets/rafi.jpg";
import { BsArrowRightSquareFill } from "react-icons/bs"
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-emerald-900 text-white' >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-lg sm:text-5xl font-bold text-white'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    deleteSpeed: 30,
                                    strings: [
                                        "Hi, I'm Rafi!",
                                        "I'm a Front-End Developer",
                                        "I'm a UI/UX Designer",
                                        "Also a Tech Enthusiast"
                                    ],
                                }}
                            />
                        </h2>
                    <p className='text-gray-500 py-6'>
                        Hi. My name is Rafi Nuril Zhafran you can call me Rafi. I am an under-graduate  student  from  UPN  "Veteran"  Jawa  Timurenrolled  in  Information  System  Department.  Passionateabout  programming  and  everything  IT  involved.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r from-cyan-300 to-green-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <BsArrowRightSquareFill className='ml-3' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={Rafi} alt='foto ane' className='rounded-2xl w-2/3 mx-auto md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home