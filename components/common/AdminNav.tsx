import Link from 'next/link';
import { FC } from 'react';
import Logo from './Logo';
import {
  AiOutlineDashboard,
  AiOutlineContainer,
  AiOutlineTeam,
  AiOutlineMail,
} from 'react-icons/ai';

interface Props {}

const AdminNav: FC<Props> = (props): JSX.Element => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <Link href="/admin" className="flex items-center space-x-2 p-3 mb-10">
        <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
        <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
          Admin
        </span>
      </Link>
      {/* Nav items */}
      <div className="space-y-6">
        <Link
          href="/admin"
          className="flex items-center p-3 text-highlight-light dark:text-highlight-dark text-xl hover:scale-[0.98] transition"
        >
          <AiOutlineDashboard size={24} />
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link
          href="/admin/posts"
          className="flex items-center p-3 text-highlight-light dark:text-highlight-dark text-xl hover:scale-[0.98] transition"
        >
          <AiOutlineContainer size={24} />
          <span className="ml-2">Posts</span>
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center p-3 text-highlight-light dark:text-highlight-dark text-xl hover:scale-[0.98] transition"
        >
          <AiOutlineTeam size={24} />
          <span className="ml-2">Users</span>
        </Link>
        <Link
          href="/admin/comments"
          className="flex items-center p-3 text-highlight-light dark:text-highlight-dark text-xl hover:scale-[0.98] transition"
        >
          <AiOutlineMail size={24} />
          <span className="ml-2">Comments</span>
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
