import React from 'react'
import moneytoring from '../assets/portfolio/moneytoring.png'
import petcare from '../assets/portfolio/petcare.png'
import bpbd from '../assets/portfolio/bpbd.png'

const Portfolio = () => {

    const cards = [
        {
            id: 1,
            title: 'Aplikasi Pencatatan Transaksi e-wallet atau mobile banking otomatis melalui Notifikasi',
            src: moneytoring,
            href: 'https://github.com/xcapri/MoneytoringApp'
        },
        {
            id: 2,
            title: 'Website resmi dan pusat informasi BPBD Kota Surabaya',
            src: bpbd,
            href: 'https://github.com/ArloDel/bpbd_surabaya'
            
        },
        {
            id: 3,
            title: 'Aplikasi Marketplace Perawatan Hewan Online Berbasis Web "Griyapets"',
            src: petcare,
            href: 'https://github.com/RafiWithNZ/petcare-app'
        },
    ]

    return (
        <div Name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6'>Explore my technical skills: A showcase of my front-end web development projects.</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        cards.map(({ id, src, title, href }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                        <button className=' px-6 py-3 m-4 duration-200 hover:scale-125'>{title}</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio