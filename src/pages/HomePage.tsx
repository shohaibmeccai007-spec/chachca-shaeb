import HeroSection from "../components/HeroSection";
import ValueProposition from "../components/ValueProposition";
import AutoScrollCarousel from "../components/AutoScrollCarousel";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  AlertCircle,
  Link2,
  BarChart3,
  ArrowRight,
  Zap,
  CheckCircle2,
  X,
  Quote,
  Star,
} from "lucide-react";

const ProblemSolutionSection = () => (
  <section className="max-w-6xl mx-auto px-4 pt-24 pb-20">
    {/* Problem */}
    <ScrollReveal variant="default">
      <div className="bg-gradient-to-r from-fuchsia-50 via-violet-50 to-cyan-50 rounded-2xl p-8 mb-14 flex flex-col items-center shadow-sm relative overflow-hidden border-l-8 border-fuchsia-400">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-100/20 via-violet-100/20 to-cyan-100/20"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent text-lg font-semibold uppercase tracking-wider">
              The Real Problem
            </span>
          </div>
          <p className="text-2xl md:text-3xl text-gray-900 font-semibold text-center max-w-3xl mb-2">
            Marketing teams waste millions because data is scattered across 10+
            platforms. You're making big decisions with incomplete information,
            optimizing for clicks instead of profit.
          </p>
        </div>
      </div>
    </ScrollReveal>
    {/* Solution Steps */}
    <ScrollReveal variant="default">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16 w-full">
        {/* Step 1 */}
        <div className="flex-1 min-w-[220px] bg-white rounded-2xl p-6 text-center shadow-md border-t-8 border-fuchsia-400">
          <div className="flex items-center justify-center mb-4">
            <Link2 className="w-9 h-9 text-fuchsia-500" />
          </div>
          <div className="font-bold text-fuchsia-700 text-xl mb-1">Day 1</div>
          <div className="text-lg text-gray-800 mb-1">
            Connect all data sources in minutes
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex-1 min-w-[220px] bg-white rounded-2xl p-6 text-center shadow-md border-t-8 border-violet-400">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="w-9 h-9 text-violet-500" />
          </div>
          <div className="font-bold text-violet-700 text-xl mb-1">Day 7</div>
          <div className="text-lg text-gray-800 mb-1">
            AI builds your profit-first dashboard
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex-1 min-w-[220px] bg-white rounded-2xl p-6 text-center shadow-md border-t-8 border-cyan-400">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-9 h-9 text-cyan-500" />
          </div>
          <div className="font-bold text-cyan-700 text-xl mb-1">Ongoing</div>
          <div className="text-lg text-gray-800 mb-1">
            Autonomous optimization + clear ROI
          </div>
        </div>
      </div>
    </ScrollReveal>
    {/* Before/After Cards */}
    <ScrollReveal>
      <div className="flex flex-col md:flex-row gap-7 items-center justify-center mb-12">
        {/* Before Card */}
        <div className="flex-1 bg-gradient-to-r from-fuchsia-50 to-violet-50 border-l-8 border-fuchsia-400 p-7 rounded-2xl shadow-inner min-w-[260px]">
          <div className="flex items-center gap-2 mb-2 text-fuchsia-600 font-bold uppercase text-sm">
            <X className="w-5 h-5" /> Before
          </div>
          <ul className="list-disc text-gray-700 pl-6 text-base space-y-1">
            <li>Blind spending</li>
            <li>Manual reports</li>
            <li>Vanity metrics</li>
          </ul>
        </div>
        {/* After Card */}
        <div className="flex-1 bg-gradient-to-r from-violet-50 to-cyan-50 border-l-8 border-cyan-400 p-7 rounded-2xl shadow-inner min-w-[260px]">
          <div className="flex items-center gap-2 mb-2 text-cyan-600 font-bold uppercase text-sm">
            <CheckCircle2 className="w-5 h-5" /> After
          </div>
          <ul className="list-disc text-gray-700 pl-6 text-base space-y-1">
            <li>Profit clarity</li>
            <li>Automated insights</li>
            <li>Smart execution</li>
          </ul>
        </div>
      </div>
    </ScrollReveal>
    {/* Bold CTA */}
    <ScrollReveal variant="default">
      <div className="flex flex-col items-center pt-6">
        <Link
          to="/book-demo"
          className="inline-flex items-center px-7 py-4 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 rounded-full text-lg font-extrabold text-white shadow-xl hover:scale-[1.04] transition-all"
        >
          Start running profit-first marketing in 7 days
          <ArrowRight className="ml-3 w-6 h-6" />
        </Link>
      </div>
    </ScrollReveal>
  </section>
);

const CustomerTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "Edureka",
      name: "Sanjay",
      role: "Digital Marketing Manager",
      testimonial:
        "Flable AI transformed our marketing operations completely. We saw a 120% increase in conversion rates within the first month. The AI CMO approach is revolutionary.",
      rating: 5,
      color: "from-fuchsia-500 to-cyan-400",
    },
    {
      id: 2,
      company: "MYOP",
      name: "Afroze",
      role: "E-commerce Manager",
      testimonial:
        "The autonomous optimization features saved us 20+ hours per week. Our ROAS improved by 340% and we're now scaling profitably across all channels.",
      rating: 5,
      color: "from-cyan-400 to-violet-500",
    },
    {
      id: 3,
      company: "Grain n Grace",
      name: "Luqman",
      role: "Digital Marketing Specialist",
      testimonial:
        "Flable AI's profit-first approach changed everything. We finally have clarity on which campaigns actually drive revenue, not just vanity metrics.",
      rating: 5,
      color: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-violet-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-100/20 via-cyan-100/20 to-violet-100/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-fuchsia-200 rounded-full px-6 py-3 mb-8">
              <Quote className="h-5 w-5 text-fuchsia-600" />
              <span className="text-sm font-medium text-gray-700">
                Customer Success Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses using Flable AI to transform
              their marketing operations
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ScrollReveal key={testimonial.id} variant="zoom">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-3xl`}
                ></div>

                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mb-4`}
                  >
                    <Quote className="h-6 w-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                        <p
                          className={`text-sm font-semibold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                        >
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Ready to Join Them?
                </span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Start your transformation with Flable AI and see results in 7
                days
              </p>
              <Link
                to="/book-demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 rounded-full text-white font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Success Story
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-fuchsia-50/60 to-white">
      {/* Hero Section at the top */}
      <HeroSection />
      {/* Problem → Solution section */}
      <ProblemSolutionSection />
      {/* Value Proposition */}
      <ValueProposition />
      {/* Auto-Scrolling Clients Carousel */}
      <AutoScrollCarousel />
      {/* Customer Testimonials */}
      <CustomerTestimonialsSection />
    </div>
  );
};

export default HomePage;
