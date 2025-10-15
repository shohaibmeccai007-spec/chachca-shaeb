import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    slug: "grain-n-grace",
    title: "Case Study: Grain n Grace",
    date: "2025-10-15",
    excerpt:
      "Grain n Grace faced delays from their agency in campaign optimization. With Flable AI, they could analyze campaigns in minutes and improve ROI.",
    tags: ["Case Study", "Marketing", "AI"],
    image: "/assets/clients/grainengrace.png", // optional image
  },
  {
    slug: "edureka",
    title: "Case Study: edureka",
    date: "2025-10-10",
    excerpt:
      "Edureka launched underperforming campaigns in India and USA. Flable AI provided actionable insights to optimize performance and lead quality.",
    tags: ["Case Study", "E-learning", "AI"],
    image: "/assets/clients/edureka.png", // optional image
  },
];

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = selectedTag
    ? blogs.filter((b) => b.tags.includes(selectedTag))
    : blogs;

  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags)));

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="mb-5 text-5xl font-extrabold bg-clip-text py-4 text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">
          Blogs & Case Studies
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Real stories where Flable AI changed the rules of marketing.
        </p>
      </header>

      {/* Tag Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full font-semibold border ${
            !selectedTag
              ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full font-semibold border ${
              selectedTag === tag
                ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {filtered.map((blog) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.slug}
            className="rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:scale-105 group"
          >
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <span className="text-xs text-gray-500 mb-2">
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              <div className="mt-auto flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <Link to={`/blog/${blog.slug}`} className="text-cyan-600">
                  Read More »
                </Link>
                {blog.image && (
                  <img src={blog.image} alt={blog.title} className="w-16" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
