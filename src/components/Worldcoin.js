import React from 'react'
import worldcoin1 from "../assests/images/Worldcoin1.png";
import worldcoin2 from "../assests/images/Worldcoin2.png";

function Worldcoin() {
  return (
    <div className="metamask-section1">
       <h1 className="metamask-title">Worldcoin</h1>
       <h2 className="metamask-small-title">After getting a human-friendly name, let’s complete the human verification of your wallet.

</h2>
<p className="metamask-content" >Some dApps require you to complete this step as a way to make sure that you as a user can perform a certain action only once.
</p>

<p className="metamask-content" >
Doing this human verification is quite simple!

</p>

<p className="metamask-content" >You can easily and anonymously verify they are a unique human through the <a href="https://worldcoin.org/download">Worldcoin app.</a>


</p>
<img src={worldcoin1} className="metamask-img"/>
<img src={worldcoin2} className="metamask-img"/>

<p className="metamask-content" >And that’s it! Your human verification is now complete!

</p>
<div className="connect-wallet">
    <button className='connect-btn'>Worldcoin Verification</button>
</div>
    </div>
  )
}

export default Worldcoin