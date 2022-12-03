import React from 'react'
import { Link } from "react-router-dom";
import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import { useConnect } from 'wagmi'
import Ens from './Ens';
import Metamask from './Metamask';
import Polygon from './polygon';
import Erc20 from './Erc20';
import Worldcoin from './Worldcoin';
import PushProtocol from './PushProtocol';
import Erc721 from './Erc721';
import NftPort from './NftPort';
import Covalent from './Covalent';
import IpfsValist from './IpfsValist';
import LandingPage from './LandingPage';
import { Chat } from "@pushprotocol/uiweb";
import {useAccount} from 'wagmi'




function Navbar() {
    const { address } = useAccount();

    const [step, setStep] = React.useState(0);
    const onChange = (nextStep) => {
      setStep(nextStep < 0 ? 0 : nextStep > 11 ? 11 : nextStep);
    };
  
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
  return (
    <>
      {window.location.pathname !== "/" ? (
        <div className="navbar-div">
          <Steps current={step}>
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
            <Steps.Item description="" />
          </Steps>
          <hr />
          <Panel header={`Step: ${step + 1}`}>
            {step === 0 ? (
              <>
                <LandingPage />
              </>
            ) : null}
            {step === 1 ? (
              <>
                <Metamask />
              </>
            ) : null}
            {step === 2 ? (
              <>
                <Polygon />
              </>
            ) : null}
            {step === 3 ? (
              <>
                <Erc20 />
              </>
            ) : null}
            {step === 4 ? (
              <>
                <Ens />
              </>
            ) : null}
            {step === 5 ? (
              <>
                <Worldcoin />
              </>
            ) : null}
            {step === 6 ? (
              <>
                <PushProtocol />
              </>
            ) : null}
            {step === 7 ? (
              <>
                <Erc721 />
              </>
            ) : null}
            {step === 8 ? (
              <>
                <NftPort />
              </>
            ) : null}
            {step === 9 ? (
              <>
                <Covalent />
              </>
            ) : null}
            {step === 10 ? (
              <>
                <IpfsValist />
              </>
            ) : null}
          </Panel>
          <hr />
          <div>
            <Chat
              account={address} //user address
              supportAddress="0x737175340d1D1CaB2792bcf83Cff6bE7583694c7" //support address
              apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
              env="staging"
            />
          </div>

          <ButtonGroup className="button-group">
            <Button onClick={onPrevious} disabled={step === 0}>
              Previous
            </Button>
            <Button onClick={onNext} disabled={step === 11}>
              Next
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
    </>
  );
}

export default Navbar