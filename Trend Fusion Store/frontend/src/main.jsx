import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      pauseOnHover
      className="w-full fixed left-[50%] translate-x-[-50%] max-w-xs max-sm:mt-20"
      toastClassName={() =>
        "relative flex py-2 px-4 mb-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white tracking-wide text-slate-gray shadow-lg"
      }
      bodyClassName={() => "text-sm flex items-center"}
    />
  </StrictMode>,
)
