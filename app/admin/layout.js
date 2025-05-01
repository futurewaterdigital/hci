"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {logout} from "@/lib/auth";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {useEffect, useState} from "react";

export default function AdminLayout({children}) {
  const pathname = usePathname();
  const router = useRouter();
  const [adminToken, setAdminToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setAdminToken(token);
    setIsLoading(false);

    // Handle authentication redirects
    if (token) {
      // If logged in and on login page, redirect to doctors
      if (pathname === "/admin") {
        router.push("/admin/doctors");
      }
    } else {
      // If not logged in and not on login page, redirect to login
      if (pathname !== "/admin") {
        router.push("/admin");
      }
    }
  }, [pathname, router]);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("adminToken");
    setAdminToken(null);
    router.push("/admin");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {adminToken && (
          <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex space-x-8">
                    <Link
                      href="/admin/doctors"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        pathname.startsWith("/admin/doctors")
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}>
                      Doctors
                    </Link>
                    <Link
                      href="/admin/reviews"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        pathname === "/admin/reviews"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}>
                      Reviews
                    </Link>
                    <Link
                      href="/admin/cost-compare"
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        pathname === "/admin/cost-compare"
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}>
                      Cost Comparison
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <RiLogoutCircleRLine className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
