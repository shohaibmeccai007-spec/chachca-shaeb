import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
// @ts-ignore
const blogFiles = import.meta.glob('../../content/blogs/*.json', { eager: true });
const blogs = Object.values(blogFiles).map((mod: any) => mod.default || mod);
const allTags = Array.from(new Set(blogs.flatMap((b: any) => b.tags || [])));

const gradient = 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400';

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const visibleBlogs = blogs.slice(0, 5);
  const filtered = useMemo(
    () => selectedTag ? visibleBlogs.filter((b: any) => b.tags?.includes(selectedTag)) : visibleBlogs,
    [selectedTag]
  );

  const clientCaseStudies: any[] = [];

  return (
    <main className="min-h-screen w-full bg-white pb-24">
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16">
        <header className="mb-14 text-center ">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 drop-shadow-lg">Flable AI Insights</h1>
          <p className="text-xl md:text-2xl text-violet-900 font-semibold mb-2">Curated stories where AI rewrites the rules of marketing.</p>
          <span className="block w-28 h-1 mx-auto rounded-full mt-3 mb-3 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"/>
        </header>
        <aside className="mb-8 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-white/60 p-3 shadow-lg border border-violet-100 max-w-3xl mx-auto">
          <button
            className={`px-5 py-2 rounded-full font-semibold border border-violet-300 text-base transition-all duration-150 ${!selectedTag ? gradient+' text-white shadow-lg' : 'bg-white text-violet-800 hover:shadow-md'}`}
            onClick={() => setSelectedTag(null)}
          >All</button>
          {allTags.map(tag => (
            <button key={tag}
              className={`px-5 py-2 rounded-full font-semibold border border-violet-200 text-base transition-all duration-150 ${selectedTag===tag ? gradient+' text-white shadow-lg' : 'bg-white text-violet-700 hover:shadow-md'}`}
              onClick={() => setSelectedTag(tag)}
            >{tag}</button>
          ))}
        </aside>
        {!filtered.length ? (
          <div className="text-center text-gray-600 py-16 text-xl">No insights found for this tag yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filtered.map((blog: any) => (
              <div key={blog.slug} className="group bg-[#faf7fd]/90 rounded-2xl shadow-xl border-2 border-violet-100 hover:border-cyan-300 hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.03] cursor-pointer ring-1 ring-fuchsia-200 hover:ring-cyan-400">
                <Link to={`/blog/${blog.slug}`} className="block">
                  {blog.image && <img src={blog.image} alt="" className="w-full h-56 object-cover object-center transition-all group-hover:brightness-110 group-hover:scale-[1.04]" />}
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex flex-wrap mb-2 gap-2">
                      {blog.tags && blog.tags.map((tag: string) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full font-semibold bg-gradient-to-r from-fuchsia-100 via-violet-100 to-cyan-100 text-violet-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-2 leading-tight text-gray-900 group-hover:text-fuchsia-700 transition-colors">{blog.title}</h2>
                    <span className="text-xs text-gray-500 mb-2 tracking-wide">{new Date(blog.date).toLocaleDateString()}</span>
                    <p className="text-[1.05rem] text-gray-700 mb-5 line-clamp-3 font-medium">{blog.excerpt}</p>
                    <span className="block mt-auto font-semibold text-fuchsia-700 group-hover:underline">Read More »</span>
                  </div>
                </Link>
                <div className="px-6 pb-5 pt-2 text-xs text-gray-500 italic border-t border-violet-100">
                  Inspired by <a href={blog.attribution.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-violet-700 underline font-bold hover:text-fuchsia-700">{blog.attribution.sourceTitle}</a>{blog.attribution.sourceAuthor ? ` by ${blog.attribution.sourceAuthor}` : ''}.
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Client Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500 drop-shadow">Client Case Studies</h2>
          <p className="text-lg text-gray-700 mb-4">Proven results from real Flable AI deployments.</p>
        </header>
        {clientCaseStudies.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-24">
            <div className="max-w-sm w-full bg-gradient-to-br from-cyan-100 via-violet-50 to-fuchsia-50 rounded-2xl shadow-inner border-2 border-cyan-200 flex flex-col items-center p-8">
              <span className="block mb-4"><Sparkles className="w-12 h-12 text-cyan-400" /></span>
              <h3 className="text-xl font-bold mb-2 text-cyan-900">Client success stories coming soon</h3>
              <p className="text-base text-cyan-900/80">We’re compiling real-world case studies of how Flable AI is helping brands transform marketing with intelligence, scale, and results.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Card rendering for each case study will go here! */}
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;