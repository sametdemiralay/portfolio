'use client';

import React, { useState } from 'react';

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('soft');

  const setBg = (active) => (activeTab === active ? 'bg-yellow' : 'bg-grey');

  const setTabsAligment = (tab) =>
    tab === 'soft' ? 'text-left' : 'text-right';

  const tabs = (
    <div className='flex'>
      {['soft', 'hard'].map((elm) => (
        <button
          key={elm}
          type='button'
          className={`btn ${setBg(elm)} ${setTabsAligment(elm)}`}
          onClick={() => setActiveTab(elm)}
        >
          {elm} Skills
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab === 'soft' ? 'justify-start' : 'justify-end'
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className='skill'>
          <span>{icon}</span> {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
