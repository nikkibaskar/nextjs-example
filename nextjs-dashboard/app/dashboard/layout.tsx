import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) { // represents the dashboards children --- customers and invoices
 return ( <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
        <SideNav />
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
  </div>);
}