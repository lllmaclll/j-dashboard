import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

export default function App () {
  return (
    <main className='flex sm:flex-row flex-col'>
      <Sidebar />
      <Outlet />;
    </main>
  )
}