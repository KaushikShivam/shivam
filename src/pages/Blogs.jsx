import React from 'react';
import Header from './../layout/Header';
import BlogItem from './../components/BlogItem';

const Blogs = () => {
  return (
    <main className="Blogs container padding-nav">
      <Header
        title="Blogs"
        subtitle="Tech stories I write"
        image="http://www.thedesignwork.com/wp-content/uploads/2011/05/Minimalist-Wallpaper-05.jpg"
      />
      <div className="margin-big">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </main>
  );
};

export default Blogs;
