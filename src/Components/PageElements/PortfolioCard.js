import "./PortfolioCard.css";
import { Parallax, Background } from "react-parallax";

const image1 =
  "http://cdn.home-designing.com/wp-content/uploads/2018/05/white-living-room-furniture.jpg";
const image2 =
  "https://cdn.dribbble.com/userupload/2668625/file/original-ab1045b11e0703edf27481f8e6d6fcd1.jpg?compress=1&resize=2400x1800";

("https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2020/08/feature-image-81.jpg");

const Container = () => (
  <Parallax bgImage={image2} strength={200}>
    {/* <p>... Content</p> */}
    <div className="Folio_Card">
      <div className="txt">BOGDANRAND</div>
      {/* <div className="strapline">Strapline somthing</div> */}
    </div>
  </Parallax>
);

export default Container;

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
