import BlogCard from '@/components/BlogCard';
import { NextPage } from 'next';

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eius praesentium ex. Sunt, inventore. Consequatur maxime perspiciatis modi natus ab."
      />
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eius praesentium ex. Sunt, inventore. Consequatur maxime perspiciatis modi natus ab."
      />
      <BlogCard
        title="This is my blog"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eius praesentium ex. Sunt, inventore. Consequatur maxime perspiciatis modi natus ab."
      />
    </div>
  );
};

export default Blogs;
