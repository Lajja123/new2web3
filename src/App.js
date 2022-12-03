import logo from './logo.svg';
import './App.css';
import React from 'react';
import "rsuite/dist/rsuite.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import landingpage from "./components/LandingPage.js";
import LandingPage from './components/LandingPage.js';

function App() {

  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 11 ? 11 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/landingpage" element={<LandingPage/>}></Route>  
        </Routes>
      </Router>
      <div>
      {/* <h1>Hello there this is the h1 tag</h1>
      <hr />
      <Steps current={step}>
        <Steps.Item  description="It will take only 12 mins" />
        <Steps.Item  description="It will take only 11 mins" />
        <Steps.Item  description="It will take only 10 mins" />
        <Steps.Item  description="It will take only 9 mins" />
        <Steps.Item description="It will take only 8 mins" />
        <Steps.Item description="It will take only 7 mins" />
        <Steps.Item  description="It will take only 6 mins" />
        <Steps.Item description="It will take only 5 mins" />
        <Steps.Item  description="It will take only 4 mins" />
        <Steps.Item  description="It will take only 3 mins" />
        <Steps.Item description="It will take only 2 mins" />
        <Steps.Item description="It will take only 1 mins" />
      </Steps>
      <hr />
      <Panel header={`Step: ${step + 1}`}>
        <Placeholder.Paragraph />
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 11}>
          Next
        </Button>
      </ButtonGroup> */}
    </div>
    </div>
  );
}

export default App;
