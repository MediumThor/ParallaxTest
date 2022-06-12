import "./MainPage.css";

import Container from "../PageElements/PortfolioCard";
import TextCard from "../PageElements/TextCard";
import ServiceCard from "../PageElements/ServiceCard";
import ContactForm from "../ContactForm/ContactForm";
import PageFill from "../PageElements/PageFill";

export default function Nav() {
  return (
    <div className="outerpage">
      <div className="mainPage">
        {/* <PortfolioCard /> */}

        {/* other bits */}

        <TextCard id="about" name="Welcome To Bogdanrand">
          {/* <h2>What do we do</h2> */}
          <p>
          Its no secret that The Twins have long been effecting the markets through their superior understanding of Egregornomics. 
Spend enough time in the market and assuridly it has been witnessed- You place your buy bid and BAM. Rekt. Big red candle... So you panic- Cut the losses. Sell. 
Nothing but a sea of green. 
It happens enough and the internal qestioning arises. The answer is yes. It really is all by design.  
          </p>
        </TextCard>
        <Container />

        {/* <PortfolioCard /> */}

        <PageFill>
          <TextCard id="sevices" name="Our Mission">
            <p>
            Suprisingly, it turns out, alot of the theories are real- from the psychic abilities, to the 215+ IQ's, the ownership of castles, banks, the majority of gene-editing research facilities on Earth, 
and being in contact with "aliens" (more on, well, all of this later), the internet as ALMOST gotten it right this time. 
            </p>
          </TextCard>
          <Container />
          <ServiceCard
            head="Stills"
            img="https://wallpapercave.com/wp/wp6072545.png"
          >
            <p>
              Ut ornare urna id mi dapibus malesuada. Aenean sit amet ultrices
              mauris, nec ornare lectus. Nulla non dolor eros. Phasellus eget
              neque eget odio condimentum cursus.
            </p>
          </ServiceCard>
          <ServiceCard
            head="VR"
            img="https://immersionvr.co.uk/wp-content/uploads/2019/07/bathroom-1-1024x512.jpg"
          >
            <p>
              Ut ornare urna id mi dapibus malesuada. Aenean sit amet ultrices
              mauris, nec ornare lectus. Nulla non dolor eros. Phasellus eget
              neque eget odio condimentum cursus.
            </p>
          </ServiceCard>
        </PageFill>

        <TextCard id="contact" name="Contact us">
          <ContactForm />
        </TextCard>

        {/* end page body */}
      </div>
    </div>
  );
}
