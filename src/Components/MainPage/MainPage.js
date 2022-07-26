import "./MainPage.css";

import Container from "../PageElements/PortfolioCard";
import Container2 from "../PageElements/PortfolioCard2";
import Container3 from "../PageElements/PortfolioCard3";

import TextCard from "../PageElements/TextCard";
import ServiceCard from "../PageElements/ServiceCard";
import ContactForm from "../ContactForm/ContactForm";
import PageFill from "../PageElements/PageFill";

export default function Nav() {
  return (
    <div className="outerpage">
      <div className="mainPage">
        {/* <PortfolioCard /> */}
        <PageFill>
        {/* other bits */}

        <TextCard id="about" name="Port Washington, WI Yacht Club">
          {/* <h2>What do we do</h2> */}
         
        </TextCard>
        <Container />

        {/* <PortfolioCard /> */}

        
          <TextCard id="" name="">
          <p>
          Club activities include a year round social calendar that not only consists of a full schedule of fun parties, but also informal group trips anytime during the year.
In addition, the Club participates in the city's Fish Day celebration and is involved in other community activities. Such activities include contributing funds to school scholarships and making the club available for charitable fund raising events.
The clubhouse bar is open each Friday evening during the summer months for use by its members and visiting boaters from other yacht clubs.
          </p>
          </TextCard>
          <Container2 />

           {/* <PortfolioCard /> */}

        
           <TextCard >
          <p>
            Saturday Buoy racing series for both racing class and cruising class boats, are held on most weekends, June through September.
Two long distant weekend races, one to and from Sheboygan and the other to and from Milwaukee are fun races for which individual awards are given.
The Port Washington Yacht Club sponsors the across the lake Clipper Cup race and hosts the west shore and across the lake 'Double Handed' race. Both races finish at Port Washington Harbor with award parties held at the yacht club.
            </p>
          </TextCard>
          <Container3 />
          <TextCard id="" name="">
          <p>
          Opportunities
Enjoy cruising trips to other ports with yacht club members.
Participate in fishing tournaments including the Lloyd Purnell Annual Fishing Tournament with awards given for the most successful fishermen.
</p>
          </TextCard>
          
          <ServiceCard
            head="Stills"
            img="https://imgs.search.brave.com/em2CMnN3BixkyD60zWmeSFW8zSyikXofE-xQIA4d_JU/rs:fit:612:323:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L3NhaWxpbmctdGhl/LW9jZWFuLXBpY3R1/cmUtaWQ1MDE3MTUw/NTg_az02Jm09NTAx/NzE1MDU4JnM9NjEy/eDYxMiZ3PTAmaD1B/MXY2TEhyZkJPS2F3/NzV0allNek5DbFlK/dXZ6dGR3ekFrQlFs/dEdJVWJVPQ"
          >
            <p>
              Ut ornare urna id mi dapibus malesuada. Aenean sit amet ultrices
              mauris, nec ornare lectus. Nulla non dolor eros. Phasellus eget
              neque eget odio condimentum cursus.
            </p>
          </ServiceCard>
          <ServiceCard
            head="Other"
            img="https://imgs.search.brave.com/B0LFYIncNgSwtUNx_qRiaMQYQTpwrct3s6oMWpOyDx8/rs:fit:675:439:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vY2tmaS1pbWct/Y2RuL2ltYWdlL3Vw/bG9hZC92MTU1NzI2/MDE3Ni8zMDUzZTk1/OC04NDdmLTQ1OGIt/YjI2OC1lMDJmNWNk/ZDBiOWUvd3lzaXd5/Zy9paGVvMGpiYXF4/aW9mM294bWFrbS5w/bmc"
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
