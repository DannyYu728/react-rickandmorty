import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const ramUrl = "https://rickandmortyapi.com/api/";

function Fetch() {
  const { id } = useParams();
  const location = useLocation();
  const [infos, setInfos] = useState([]);
  const [modalInfo, setModalInfo] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  let pageDown = () => {
    if (pageNum > pageCount) {
      setPageNum(1);
    } else if (pageNum > 1) {
      setPageNum(pageNum - 1);
    } else {
      setPageNum(pageCount);
    }
  };

  let pageUp = () => {
    if (pageNum < pageCount) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(1);
    }
  };

  let handleChange = (e) => {
    setPageNum(Number(e.target.value));
  };

  useEffect(() => {
    const getPage = async () => {
      let response = await axios(ramUrl + `${id}?page=${pageNum}`);
      setPageCount(response.data.info.pages);
      setInfos(response.data.results);
    };
    getPage();
  }, [pageNum, location]);

  let getModal = (ele) => {
    setModalInfo(ele);
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
        <div className="btns prev" onClick={pageDown}></div>

        <form>
          <input
            className="pageNumDisplay"
            type="text"
            size="2"
            maxLength="2"
            value={pageNum}
            onChange={handleChange}
          />
        </form>

        <div className="btns next" onClick={pageUp}></div>
      </div>
      <Modal modalInfo={modalInfo} />
    </div>
  );
}

export default Fetch;
