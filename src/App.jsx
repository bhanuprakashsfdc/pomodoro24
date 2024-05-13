import './App.css';
import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';
import { colors } from './constants/constants';
import Pomodoro from './components/Pomodoro/Pomodoro.jsx'
function App() {
  return (
    <>
      <div className='app-container'>
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default App
