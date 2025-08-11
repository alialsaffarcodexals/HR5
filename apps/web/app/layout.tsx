import '../styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="grid lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block p-6 border-r border-gray-200 dark:border-gray-800">
            <div className="text-xl font-bold mb-6">Enterprise Payroll</div>
            <nav className="space-y-2">
              <a className="block hover:underline" href="/">Dashboard</a>
              <a className="block hover:underline" href="/departments">Departments</a>
              <a className="block hover:underline" href="/employees">Employees</a>
              <a className="block hover:underline" href="/payroll">Payroll</a>
              <a className="block hover:underline" href="/admin">Admin</a>
              <a className="block hover:underline" href="/self-service">Self-Service</a>
            </nav>
          </aside>
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
