import React from 'react';
import './MultiSectionPage.css';

const MultiSectionPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1>Welcome to Multi-Section Page</h1>
      </header>
      <nav className="navigation">
        {/* Navigation links to sections */}
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <section id="section1" className="section">
          <h2>Section 1</h2>
          <p>This is the content of section 1.</p>
        </section>
        <section id="section2" className="section">
          <h2>Section 2</h2>
          <p>This is the content of section 2.</p>
        </section>
        <section id="section3" className="section">
          <h2>Section 3</h2>
          <p>This is the content of section 3.</p>
        </section>
      </main>
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default MultiSectionPage;
