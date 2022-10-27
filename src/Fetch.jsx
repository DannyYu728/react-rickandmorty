import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const ramUrl = "https://rickandmortyapi.com/api/";

function Fetch() {
  const { id } = useParams();
  const location = useLocation();
  const [infos, setInfos] = useState([]);
  const [modalInfo, setModalInfo] = useState({})
  const [pageNum, setPageNum] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  let pageDown = () => {
    setPageNum(pageNum - 1);
  };

  let pageUp = () => {
    setPageNum(pageNum + 1);
  };

  useEffect(() => {
    const getPage = async () => {
      let response = await axios(ramUrl + `${id}?page=${pageNum}`);
      setPageCount(response.data.info.pages);
      setInfos(response.data.results);
      console.log(infos);
      console.log(pageCount);
    };
    getPage();
  }, [pageNum, location]);

  let getModal = (ele) => {
    setModalInfo(ele)
    let main = document.querySelector(".mainModal");
    main.classList.remove("hidden");
  };

  return (
    <div className="page">
      <div className="display">
        {infos.map((ele, index) => {
          return (
            <div key={index} className="info" onClick={() => getModal(ele)}>
              {(() => {
                if (id === "character") {
                  return <img src={ele.image} />;
                } else {
                  return <p>{ele.name}</p>;
                }
              })()}
            </div>
          );
        })}
      </div>
      <div className="bottom">
        <button className="btns" onClick={pageDown}>
          Previous
        </button>
        <p className="pageNumDisplay">{pageNum}</p>
        <button className="btns" onClick={pageUp}>
          Next
        </button>
      </div>
      <Modal modalInfo={modalInfo} />
    </div>
  );
}

export default Fetch;
