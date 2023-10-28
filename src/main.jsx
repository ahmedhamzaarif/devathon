import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard, ErrorPage, Home, Layout, LogInPage, SignUpPage } from './pages'
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignUp,
  SignIn,
 } from "@clerk/clerk-react";
 
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
 

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/*" element={<LogInPage/>} />
        <Route path="/sign-up/*" element={<SignUpPage/>} />
        <Route path='*' element={<ErrorPage/>}/>
        <Route
          path="/dashboard"
          element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
