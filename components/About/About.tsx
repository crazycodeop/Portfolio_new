import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { NextComponentType } from 'next';

export const About: NextComponentType = () => (
  <section className="my-8 flex flex-row items-center justify-between px-3">
    <div>
      <h1 className="text-4xl font-bold dark:text-white">Roshan</h1>
      <p className="mt-1 text-lg">Fullstack Developer and a Student</p>
      <p className="mt-4 dark:text-gray-400 text-gray-500">
        Building apps, proficient in Java and Web development.
      </p>
      {/* <Link href="https://avinashprj.hashnode.dev" passHref>
        <a
          className="group mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl  dark:text-gray-400 text-gray-500 transition-all duration-150 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read my Blog
          <AiOutlineArrowRight className="text-[1.1rem] duration-150 group-hover:ml-1 rounded-full" />
        </a>
      </Link> */}
      <Link href="https://www.buymeacoffee.com/roshanyirrd" passHref>
        <a
          className="group mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl  dark:text-gray-400 text-gray-500 transition-all duration-150 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Love my work? Sponsor me!
          <AiOutlineArrowRight className="text-[1.1rem] duration-150 group-hover:ml-1 rounded-full" />
        </a>
      </Link>
    </div>
    <div className="hidden custom:block">
      <Image
        src="/assets/me.png"
        width="200"
        height="200"
        objectFit="cover"
        alt="avatar"
        style={{ borderRadius: '50%' }}
      />
    </div>
  </section>
);
