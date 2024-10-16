import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from '../App.jsx'
import SignupForm from '../SignupForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <SignupForm />
  </StrictMode>,
)
