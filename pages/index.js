import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import web1 from '../public/web1.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>$UP ONLY</title>
        <meta name="description" content="$UP ONLY TOKEN SITE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-6xl">$UP</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tokenomics
            </h2>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Private Sale: 10% of TOTAL supply 8 ETH. <br></br>
              Public Sale: 9% of TOTAL supply, 8 ETH. <br></br>
              Team Tokens: 10% of TOTAL supply, Locked for 1 Week<br></br>
              Tokens for LP: 62% of TOTAL supply,
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl"></p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://twitter.com/Up_Only_Token">
                Twitter
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://t.me/uponly_token">
                Telegram
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#">
                Dexscreener
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#">
                DexTools
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={web1} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
