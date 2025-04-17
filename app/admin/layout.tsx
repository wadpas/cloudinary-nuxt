import { AdminNav, AdminNavLink } from 'app/components/AdminNav'
import Logo from 'app/components/Logo'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminNav>
        <Link href='/'>{Logo()}</Link>
        <AdminNavLink href='/admin'>Dashboard</AdminNavLink>
        <AdminNavLink href='/admin/products'>Products</AdminNavLink>
        <AdminNavLink href='/admin/users'>Customers</AdminNavLink>
        <AdminNavLink href='/admin/orders'>Sales</AdminNavLink>
      </AdminNav>
      <div className='p-4 mx-auto w-[1600px] min-h-screen bg-white '>{children}</div>
    </>
  )
}
