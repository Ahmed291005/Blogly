import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Edit3, 
  Search, 
  Shield,
  BarChart2, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Heart,
  Users,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import MainLayout from '../components/layout/main-layout';
import { Button } from '../components/ui/button';
import BlogCard from '../components/blog/blog-card';
import { config } from '../lib/config';

// Sample data for featured blogs
const featuredBlogs = [
  {
    id: '1',
    title: 'AI in Everyday Life: Transforming How We Work and Play',
    description: 'Explore how artificial intelligence is shaping modern life, from smart homes to workplace automation.',
    coverImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Muhammad Ali',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    date: 'Aug 20, 2025',
    readingTime: '6 min read'
  },
  {
    id: '2',
    title: 'Design Thinking: Creating Solutions That Truly Matter',
    description: 'Learn the principles of design thinking and how it helps solve complex problems with creativity and empathy.',
    coverImage: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Olivia Martinez',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    date: 'Aug 2, 2025',
    readingTime: '8 min read'
  },
  {
    id: '3',
    title: 'Boost Your Productivity: Habits of Highly Effective Creators',
    description: 'Discover practical habits and routines that top creators use to stay focused, inspired, and productive.',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Liam Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    date: 'July 25, 2025',
    readingTime: '4 min read'
  }
];

const features = [
  {
    icon: <Edit3 className="h-8 w-8" />, // Represents writing/blogging
    title: 'Seamless Blogging',
    description: 'Craft, publish, and manage your stories effortlessly with Blogly’s intuitive platform.',
    gradient: 'bg-gradient-to-r from-gray-900 via-black to-gray-800'
  },
  {
    icon: <Users className="h-8 w-8" />, // Community
    title: 'Thriving Community',
    description: 'Connect with passionate creators and engage with readers who truly value your voice.',
    gradient: 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600'
  },
  {
    icon: <BarChart2 className="h-8 w-8" />, // Analytics
    title: 'Smart Analytics',
    description: 'Track engagement and growth with powerful insights to make informed content decisions.',
    gradient: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700'
  },
  {
    icon: <Shield className="h-8 w-8" />, // Security
    title: 'Privacy & Security',
    description: 'Keep your content and data safe with enterprise-grade security and privacy features.',
    gradient: 'bg-gradient-to-r from-black via-gray-900 to-gray-800'
  }
];

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
<div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-black to-gray-800 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-gray-800 to-black rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute top-32 left-1/3 w-80 h-80 bg-gradient-to-r from-black to-gray-600 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
  </div>
);


// Smooth scroll component
const SmoothScrollLink = ({ to, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(config.API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Thank you for your message! We will get back to you within 3 business days.');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 transition-colors duration-300">
      {/* Enhanced Navbar */}
              <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
           <Link to="/" className="flex items-center space-x-2 group">
  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
    <img 
      src="/logo.png" 
      alt="Blogly Logo" 
      className="w-full h-full object-cover" 
    />
  </div>
 <span 
  className="text-xl font-bold" 
  style={{ color: "black", WebkitTextStroke: "4px white", paintOrder: "stroke fill" }}
>
  Blogly
</span>

</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <SmoothScrollLink to="#home" className="text-white hover:text-gray-400 transition-colors duration-300">
                Home
              </SmoothScrollLink>
              <SmoothScrollLink to="#features" className="text-white hover:text-gray-400 transition-colors duration-300">
                Features
              </SmoothScrollLink>
              <SmoothScrollLink to="#blogs" className="text-white hover:text-gray-400 transition-colors duration-300">
                Top Reads
              </SmoothScrollLink>
             <SmoothScrollLink to="#footer" className="text-white hover:text-gray-400 transition-colors duration-300">
                Connect
              </SmoothScrollLink>
            </div>

{/* Desktop Actions */}
<div className="hidden md:flex items-center space-x-4">
  <Button 
    size="sm" 
    asChild 
    className="border border-white text-white hover:bg-gray-200 hover:text-black transition-colors">
    <Link to="/login">Login</Link>
  </Button>

  <Button 
    size="sm" 
    asChild 
    className="bg-white text-black hover:bg-gray-200 transition-colors">
    <Link to="/signup">Register</Link>
  </Button>
</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  <span className="block bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent drop-shadow-md">
    Your Story
  </span>
 <span className="block bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent drop-shadow-md">
  Starts Here
</span>

</h1>

<p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
  Every voice matters. Share yours with the world and connect with readers everywhere.
</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-gradient-to-r from-black to-gray-900 hover:from-black to-gray-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap" asChild>
                  <Link to="/signup">
                    <span className="flex items-center">
                      Join Now 
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap" asChild>
                  <Link to="/login">
                    <span className="flex items-center">
                      Browse Blogs
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
{/* Scroll indicator */}
<div 
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
  onClick={() => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }}
>
  <ChevronDown className="h-6 w-6 text-gray-800 hover:text-black transition" />
</div>
      </section>

{/* Features Section */}
<section id="features" className="py-20 bg-neutral-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-neutral-900 to-gray-600 bg-clip-text text-transparent">
        Why You’ll Love Blogly
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        A space built for your ideas, your voice, and your audience.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group p-8 bg-gradient-to-r from-black via-neutral-900 to-gray-600 text-white rounded-[40%_60%_30%_70%/60%_30%_70%_40%] shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 text-center"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Recent Blogs Section */}
      <section id="blogs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-neutral-900 to-gray-600 bg-clip-text text-transparent">
              Trending Reads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Explore the most engaging and insightful blogs crafted by our passionate community of writers.            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="group transform hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/explore" className="flex items-center whitespace-nowrap">
                Discover More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='footer' className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
        src="/logo.png" 
        alt="Blogly Logo" 
        className="w-full h-full object-cover" 
      /></div>
 <span 
  className="text-xl font-bold" 
  style={{ color: "black", WebkitTextStroke: "4px white", paintOrder: "stroke fill" }}
>
  Blogly
</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
Share your ideas, inspire others, and grow your voice with Blogly.<br/><br/>Let’s Connect !</p>
              <div className="flex space-x-4">
                {/* <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a> */}
                <a href="https://github.com/ahmed291005" target='_blank' className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border-2 border-transparent hover:border-white hover:bg-black transition-all duration-300">

                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-ahmed-5b7850340/" target='_blank' className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center rounded border-2 border-transparent hover:bg-gray-900 border-gray-900 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Sections</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#blogs" className="text-gray-400 hover:text-white transition-colors duration-300">Top Reads</a></li>
                <li><a href="#footer" className="text-gray-400 hover:text-white transition-colors duration-300">Connect</a></li>

              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#footer" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#footer" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><Link to="/privacypolicy#privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/privacypolicy#terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Blogly. Made with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> by Muhammad Ahmed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 


