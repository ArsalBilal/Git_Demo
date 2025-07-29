import React from 'react';

function Blogs() {
  const blogPosts = [
    { id: 1, title: 'Introducing Our New Features' },
    { id: 2, title: 'How to Get the Most Out of Our App' },
    { id: 3, title: 'Tips for Secure Authentication' },
  ];

  return (
    <div className="blogs-container" style={{ padding: '1rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blogs</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '0.5rem' }}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
