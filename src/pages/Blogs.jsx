import React from 'react';
import { connect } from 'react-redux';
import Header from './../layout/Header';
import BlogItem from './../components/BlogItem';

const Blogs = ({ blogs }) => {
  return (
    <main className="Blogs container padding-nav">
      <Header
        title="Blog"
        subtitle="Tech stories I write"
        image="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80"
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
