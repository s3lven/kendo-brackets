import DashboardNav from '@/components/navigation/dashboard-nav';
import React from 'react'

const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <DashboardNav />
        <div className="w-full h-full flex-1 overflow-auto font-poppins">{children}</div>
    </>
  )
}

export default MainLayout