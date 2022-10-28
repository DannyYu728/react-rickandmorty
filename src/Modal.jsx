import { useParams } from "react-router-dom";
import ModInfo from "./ModInfo";
const alts = "https://rare-gallery.com/thumbs/5001877-rick-and-morty-cartoons-tv-shows-hd-rick-morty-animated-tv-series-4k-artwork-artist-digital-art-behance.jpg";

function Modal(props) {
  const { modalInfo } = props;
  const { id } = useParams();
  const chTitles = ["Status", "Species"]
  const loTitles = ["Type", "Dimension"]
  const epTitles = ["Air Date", "Episodes"]

  return (
    <div
      className="mainModal hidden"
      onClick={() =>
        document.querySelector(".mainModal").classList.add("hidden")
      }
    >
      <div className="left"></div>
      <div className="right"></div>
      {(() => {
        if (id == "character") {
          return (
            <ModInfo
              urls={modalInfo.image}
              ids={modalInfo.id}
              names={modalInfo.name}
              p3s={modalInfo.status}
              p4s={modalInfo.species}
              titles={chTitles}
            />
          );
        } else if (id == "location") {
          return (
            <ModInfo
              urls={alts}
              ids={modalInfo.id}
              names={modalInfo.name}
              p3s={modalInfo.type}
              p4s={modalInfo.dimension}
              titles={loTitles}
            />
          );
        } else {
          return (
            <ModInfo
              urls={alts}
              ids={modalInfo.id}
              names={modalInfo.name}
              p3s={modalInfo.air_date}
              p4s={modalInfo.episode}
              titles={epTitles}
            />
          );
        }
      })()}
    </div>
  );
}
export default Modal;
