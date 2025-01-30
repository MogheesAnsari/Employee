import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Layout.jsx'
import './Home.jsx'
import './About.jsx'
import './Services.jsx'
import './Contact.jsx'
import './Sidebar.jsx'
import './EmployeeForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
