import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MyProjects = ({ data }) => {
  const { title, projects } = data;

  return (
    <section>
      <h2 className='mb-6'> {title}</h2>
      <div className='flex flex-col sm:flex-row gap-6'>
        {projects.map(({ name, image, demoUrl, githubUrl, usedTools }) => (
          <div
            key={name}
            className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-1/3'
          >
            <Image
              src={image}
              width={500}
              height={500}
              className='rounded-t-lg'
              alt='Picture of the author'
            />
            <div className='py-5 px-3'>
              <p className='text-3xl text-center'>{name}</p>
              <div className='flex justify-between my-5'>
                <Link href={demoUrl} className="project-btn">Live Demo</Link>
                <Link href={githubUrl} className="project-btn">Source Code</Link>
              </div>
              <div className='flex justify-evenly flex-wrap'>
                  {usedTools.map((tool, idx) => (
                    <span key={idx} className="project-tool">{tool}</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
