
import Button from "./Button"

const TimerController = () => {
    return (
      <div className="controller-wrapper">
          <div className="session-wrapper">
              <p>Session length</p>
              <p>25min</p>
              <Button value = "-"/>
              <Button value = "+"/>
          </div>
          <div className="break-wrapper">
              <p>Break length</p>
              <p>5min</p>
              <Button value = "-"/>
              <Button value = "+"/>
          </div>
      </div>
    )
  }
  
  export default TimerController
  