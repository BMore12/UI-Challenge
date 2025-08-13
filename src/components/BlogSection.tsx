import './BlogSection.css';
import BlogCard from './BlogCard';
import blog1 from '../assets/Images/blog1.jpg';
import blog2 from '../assets/Images/blog2.jpg';
import blog3 from '../assets/Images/blog3.jpg';

const blogs = [
  {
    title: 'Coffee Connoisseur',
    img: blog1,
    desc: 'Discover the rich history of coffee and how it has evolved over the centuries. From its origins to modern-day brewing techniques, explore the journey of coffee.',
    
  },
  {
    title: 'Coffee Connoisseur',
    img: blog2,
    desc: 'Discover the best coffee brewing techniques and learn how to make the perfect cup at home. From espresso to pour-over, explore the world of coffee.',

  },
  {
    title: 'Coffee Connoisseur',
    img: blog3,
    desc: 'Discover the unique flavors and aromas of different coffee beans. Learn how to choose the right beans for your brewing method and elevate your coffee experience.',
  },
];

const BlogSection = () => (
  <section className="blog-section">
    <img src="/images/blog-header.jpg" alt="Blog Header" style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', borderRadius: '16px', marginBottom: '24px' }} />
    <h2>LATEST BLOGS</h2>
    <p>Explore The Recent Most Bought Shakes This Week</p>
    <div className="blog-cards">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  </section>
);

export default BlogSection;
