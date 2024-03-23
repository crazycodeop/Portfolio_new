import type { NextComponentType } from 'next';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub, AiFillHeart, AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';

export const Contact: NextComponentType = () => (
  <div className="mt-16 pb-16 px-3 font-sen" id="contact">
    <p className="text-3xl font-bold dark:text-white">Get in touch</p>

    <div className="mt-8 mb-6 flex flex-row justify-center gap-x-4">
      <Link href="https://github.com/crazycodeop" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-profile"
        >
          <AiOutlineGithub />
        </a>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=9834905805" target='_blank' passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp-profile"
        >
          <AiOutlineWhatsApp />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/roshan-yadav-5b9029142" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin-profile"
        >
          <GrLinkedinOption />
        </a>
      </Link>
      <Link href="mailto:roshany.ir.ry@gmail.com" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="email"
        >
          <MdEmail />
        </a>
      </Link>
    </div>
    <div className="flex flex-row justify-center items-center text-gray-400">
      made with <AiFillHeart className=" mx-1 text-red-500" /> and NextJS
    </div>
    <div className="flex flex-row justify-center text-gray-400">
      © {new Date().getFullYear()} Roshan Yadav
    </div>
  </div>
);
