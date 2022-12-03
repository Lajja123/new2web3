import React from 'react'
import { Link } from "react-router-dom";
import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import { useConnect } from 'wagmi'
import Ens from './Ens';
import Metamask from './Metamask';


function Navbar() {
  
    const [step, setStep] = React.useState(0);
    const onChange = (nextStep) => {
      setStep(nextStep < 0 ? 0 : nextStep > 11 ? 11 : nextStep);
    };
  
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
  return (<>
  {window.location.pathname !=="/" ? ( <div className='navbar-div'>
    
  
    <Steps current={step}>
      <Steps.Item  description="" />
      <Steps.Item  description="" />
      <Steps.Item  description="" />
      <Steps.Item  description="" />
      <Steps.Item description="" />
      <Steps.Item description="" />
      <Steps.Item  description="" />
      <Steps.Item description="" />
      <Steps.Item  description="" />
      <Steps.Item  description="" />
      <Steps.Item description="" />
      <Steps.Item description="" />
    </Steps>
    <hr />
    <Panel header={`Step: ${step + 1}`}>
      {step===0 ? <><Metamask/></> : null}
      {step===1 ? <><Ens/></> : null}
    </Panel>
    <hr />
    <ButtonGroup className="button-group">
      <Button onClick={onPrevious} disabled={step === 0}>
        Previous
      </Button>
      <Button onClick={onNext} disabled={step === 11}>
        Next
      </Button>
    </ButtonGroup>
  </div>):null}
   </>
  )
}

export default Navbar