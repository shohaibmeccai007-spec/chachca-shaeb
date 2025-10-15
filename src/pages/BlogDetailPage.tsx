import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    slug: "grain-n-grace",
    title: "Case Study: Grain n Grace + Flable AI",
    date: "2025-10-15",
    content: [
      {
        heading: "The Challenge",
        body: `Grain n Grace faced delays and vague explanations from their agency whenever campaigns
underperformed. Waiting hours or even days for answers slowed decision-making and impacted results.`,
      },
      {
        heading: "The Solution",
        body: `With Flable AI’s diagnostic analysis, Luqman, their Digital Marketing Specialist, could
analyze campaigns at both platform and channel levels in just 10–15 minutes. This
allowed him to pinpoint issues quickly and guide the agency with clear, actionable insights,
rather than relying on vague algorithmic explanations.`,
      },
      {
        heading: "The Results",
        body: `• Reduced decision-making time from hours/days to minutes.
• Faster issue resolution with the agency, leading to improved campaign efficiency.
• Optimized campaigns delivered better ROI and more predictable results.`,
      },
      {
        heading: "Why It Worked",
        body: `Flable AI gave Grain n Grace real-time, data-driven insights and empowered the team to
take control of their campaigns. By combining deep diagnostic analysis with actionable
guidance, they could maximize performance and collaborate more effectively with their
agency`,
      },
    ],
  },
  {
    slug: "edureka",
    title: "Case Study: Edureka",
    date: "2025-10-10",
    content: [
      {
        heading: "About Edureka",
        body: `Edureka is a global e-learning platform that offers professional courses and certifications to help learners advance their careers.`,
      },
      {
        heading: "The Challenge",
        body: `Edureka launched campaigns in India and the USA that were underperforming. The team needed better insights to improve lead quality, optimize campaign performance, and identify opportunities for cross-selling.`,
      },
      {
        heading: "The Solution",
        body: `Using Flable AI, Edureka connected their Meta Ads and CRM to the platform.
Flable analyzed campaign performance, identified funnel leaks, and provided actionable
recommendations for improvements.`,
      },
      {
        heading: "The Results",
        body: `• Improved lead quality across campaigns
• Optimized campaign performance in real time
• Fixed funnel leaks and improved conversion rates
• Identified opportunities for cross-sell`,
      },
      {
        heading: "Quote",
        body: `"Using Flable AI, my team was able to analyze underperforming campaigns, implement
recommendations, and continue optimizing campaigns to improve lead quality and overall
performance." — Sanjay, Edureka`,
      },
    ],
  },
];

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  console.log("TCL: BlogDetail:React.FC -> slug", slug);
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <Link
        to="/blog"
        className="text-cyan-600 font-semibold hover:underline mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <span className="text-gray-500 text-sm mb-8 block">
        {new Date(blog.date).toLocaleDateString()}
      </span>

      {blog.content.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-gray-700 whitespace-pre-line">{section.body}</p>
        </div>
      ))}
    </main>
  );
};

export default BlogDetail;
