import React from 'react'
import SideNav from "@/app/ui/dashboard/sidenav"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64 flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
