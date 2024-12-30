import { BsArrowRightShort } from 'react-icons/bs';

export const Skills = () => (
  <section className="my-16 px-3" id="skills">
    <p className="text-3xl font-bold dark:text-white">Skills & Uses</p>
    <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
      <p className="flex flex-row flex-wrap items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Django </span>
        &nbsp;as my Backend Framework
      </p>

      <p className="flex flex-row flex-wrap items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Python and Javascript </span>
        &nbsp;as my main languages
      </p>

      <p className="flex flex-row flex-wrap items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Flutter </span>
        &nbsp;as my Mobile app framework
      </p>

      <p className="flex flex-row flex-wrap items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Redux toolkit</span>
        &nbsp;as my State Management tool
      </p>
    </div>

    <p className="text-lg font-medium dark:text-slate-300 text-slate-600">
      ...more skills include{' '}
      <span className="dark:text-white text-slate-600 font-bold">
        Spring boot
      </span>
      , <span className="dark:text-white text-slate-600 font-bold">HTML5</span>,{' '}
      <span className="dark:text-white text-slate-600 font-bold">CSS3 </span>,{' '}
      <span className="dark:text-white text-slate-600 font-bold">React.js </span>{' '}
    </p>
  </section>
);
