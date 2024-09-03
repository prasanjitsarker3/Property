import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-2/12 bg-gray-800 text-white flex flex-col p-4 space-y-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav className="flex flex-col space-y-4">
            <Link href="/admin/dashboard">
              <h1 className="hover:bg-gray-700 p-2 rounded">Dashboard</h1>
            </Link>
            <Link href="/admin/banner">
              <h1 className="hover:bg-gray-700 p-2 rounded">Banner</h1>
            </Link>
            <Link href="/admin/technology">
              <h1 className="hover:bg-gray-700 p-2 rounded">Technology</h1>
            </Link>
            <Link href="/admin/profile">
              <h1 className="hover:bg-gray-700 p-2 rounded">Profile</h1>
            </Link>
            <Link href="/admin/project">
              <h1 className="hover:bg-gray-700 p-2 rounded">Project</h1>
            </Link>
            <Link href="/admin/contact">
              <h1 className="hover:bg-gray-700 p-2 rounded">Contact</h1>
            </Link>
            <Link href="/admin/blog">
              <h1 className="hover:bg-gray-700 p-2 rounded">Blog</h1>
            </Link>
          </nav>
        </div>
        <div className="flex-1 p-6 bg-white overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
