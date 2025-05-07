import { isRouteErrorResponse, Links, Meta, Outlet, Scripts } from 'react-router'
import type { Route } from "@react-router/types/app/+types/root.ts";
import Sidebar from '@components/Sidebar';
import '@app/app.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CONTROLLER" },
    // { name: "description", content: "Welcome to J Dashboard!" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main className='flex sm:flex-row flex-col'>
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-3xl p-8 bg-gray-900 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl space-y-6 text-white">
        <h1 className="text-6xl font-extrabold text-center drop-shadow-md text-red-600">{message}</h1>
        <p className="text-lg text-center">{details}</p>
        
        {stack && (
          <div className="mt-6 p-4 bg-gray-700 text-white rounded-md overflow-x-auto shadow-inner">
            <pre className="whitespace-pre-wrap">{stack}</pre>
          </div>
        )}
        
        <div className="mt-8 flex justify-center space-x-4">
          <a href="/" className="btn btn-primary text-gray-900 px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-bold">Go Home</a>
        </div>
      </div>
    </main>
  );
}
