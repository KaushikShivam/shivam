import React from 'react';
import { connect } from 'react-redux';
import Header from './../layout/Header';
import BlogItem from './../components/BlogItem';

const Blogs = ({ blogs }) => {
  return (
    <main className="Blogs container padding-nav">
      <Header
        title="Blogs"
        subtitle="Tech stories I write"
        image="http://www.thedesignwork.com/wp-content/uploads/2011/05/Minimalist-Wallpaper-05.jpg"
      />
      <div className="margin-big">
        {blogs.map(({ id, ...blog }) => (
          <BlogItem key={id} {...blog} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogs.blogs
});

export default connect(mapStateToProps)(Blogs);
