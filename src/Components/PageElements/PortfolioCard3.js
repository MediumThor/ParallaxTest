import "./PortfolioCard.css";
import { Parallax, Background } from "react-parallax";

const image1 =
"https://imgs.search.brave.com/-OZletqiEnwbXQILwmr6z3KFgBZXIPtEckyJT1twN2o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/bWFyaW5hcy5jb20v/djIvZTI0YmU2YzFk/MjdjYzY4NWQ5MjEy/OWRiYjA4NzhhNTNm/ZTI1OTYwNTg4YTg3/ZDg3MjYyYmUxMGJl/YzU1NjVhNy5qcGc";

const image2 =
"https://imgs.search.brave.com/vRw5MTFRPU_PbdhQIO9rOn8h6FVjhUEwMu0c6UbBDe0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9uaWNr/eWJveWNoYXJ0ZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8xMS9Cb2F0/XzAwMS5qcGc";

("https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2020/08/feature-image-81.jpg");

const Container3 = () => (
  <Parallax bgImage={image2} strength={100}
  blur={{ min: -10, max: 10 }}>
    
  
    <div 
    style={{ height: '800px' }} 
    className="Folio_Card">
      <div className="txt">Cruising and Fishing</div>
      {/* <div className="strapline">Strapline somthing</div> */}
    </div>
  </Parallax>
);

export default Container3;



// export default function PortfolioCard() {
//   return (
//     <Parallax
//       bgImage={image2}
//       strength={500}
//       className={"test"}
//       bgImageSize={"(min-width: 400px) 400px, 100vw"}
//     >
//       <div className="Folio_Card">
//         <div className="txt">LOGO</div>

//         {/* <img
//         className="Port_Img"
//         src="http://cdn.home-designing.com/wp-content/uploads/2018/05/white-living-room-furniture.jpg"
//         alt="Girl in a jacket"
//       ></img>

//       <div className="txt">LOGO</div> */}
//       </div>
//     </Parallax>
//   );
// }
