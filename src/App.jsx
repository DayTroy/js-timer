import './App.css'
import Button from './components/Button'
import TimerController from './components/TimerController'
import TimerDisplay from './components/TimerDisplay'

const App = () => {
  return (
    <div className='timer-wrapper'>
      <h1>25 + 5 Clock</h1>
      <TimerDisplay />
      <TimerController />
      <div className='timer-buttons'>
        <Button value="Start"/>
        <Button value="Reset"/>
      </div>
    </div>
  )
}

export default App
