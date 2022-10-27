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
      {(() => {
        if (id == "character") {
          return (
            <div className="modal">
              <img src={modalInfo.image} />
              <p>{modalInfo.id}</p>
              <p>{modalInfo.name}</p>
              <p>{modalInfo.status}</p>
              <p>{modalInfo.species}</p>
            </div>
          );
        } else if (id == "location") {
          return (
            <div className="modal">
              {modalInfo.id}
              {modalInfo.name}
              {modalInfo.type}
              {modalInfo.dimension}
            </div>
          );
        } else {
          return (
            <div className="modal">
              {modalInfo.id}
              {modalInfo.name}
              {modalInfo.air_date}
              {modalInfo.episode}
            </div>
          );
        }
      })()}
    </div>
  );
}
export default Modal;
