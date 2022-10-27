import { useParams } from "react-router-dom";

function Modal(props) {
  const { modalInfo } = props;
  const { id } = useParams();

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
            <div className="modal">
              <img className="modalImg" src={modalInfo.image} />
              <p className="modalP"> ID: {modalInfo.id}</p>
              <p className="modalP">  Name: {modalInfo.name}</p>
              <p className="modalP">Status: {modalInfo.status}</p>
              <p className="modalP">Species: {modalInfo.species}</p>
            </div>
          );
        } else if (id == "location") {
          return (
            <div className="modal">
              <p className="modalP">ID: {modalInfo.id}</p>
              <p className="modalP">Name: {modalInfo.name}</p>
              <p className="modalP">Type: {modalInfo.type}</p>
              <p className="modalP">Dimension: {modalInfo.dimension}</p>
            </div>
          );
        } else {
          return (
            <div className="modal">
              <p className="modalP">ID: {modalInfo.id}</p>
              <p className="modalP">Name: {modalInfo.name}</p>
              <p className="modalP">Status: {modalInfo.air_date}</p>
              <p className="modalP">Species: {modalInfo.episode}</p>
            </div>
          );
        }
      })()}
    </div>
  );
}
export default Modal;
