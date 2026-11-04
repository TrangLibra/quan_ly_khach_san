import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-theme bg-[#0d131f] text-slate-100 font-sans antialiased min-h-screen selection:bg-[#c5a059] selection:text-slate-900">
      <AdminSidebar />
      <div className="pl-72 transition-all duration-300">
        <AdminHeader />
        <main className="w-full pt-20 min-h-screen px-8 pb-12 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b0f19]">
          <div className="max-w-[1600px] mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
