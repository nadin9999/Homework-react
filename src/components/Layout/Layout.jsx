// Layout.js
import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Хедер будет всегда на экране */}
      <main >
        {children} 
      </main>
    </div>
  );
};

export default Layout;
