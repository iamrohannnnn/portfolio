
import React from 'react';
import { POSTS } from '../constants';
import { Post } from '../types';

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="glass-card rounded-xl p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
        <p className="text-slate-400 text-sm flex-grow">{post.content}</p>
        <div className="mt-4 pt-4 border-t border-slate-700 flex items-center space-x-4 text-xs text-slate-500">
            <span>❤️ {post.likes} Likes</span>
            <span>💬 {post.comments} Comments</span>
            {post.reposts && <span>🔁 {post.reposts} Reposts</span>}
        </div>
    </div>
);

const FeaturedPosts: React.FC = () => {
  return (
    <section id="posts">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Featured Posts & Thoughts</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {POSTS.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    </section>
  );
};

export default FeaturedPosts;
