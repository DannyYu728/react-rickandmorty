import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const ramUrl = "https://rickandmortyapi.com/api/";

function Fetch({ showSearch, setShowSearch }) {
  const { id } = useParams();
  const location = useLocation();
  const [infos, setInfos] = useState([]);
  const [modalInfo, setModalInfo] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchName, setSearch] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [innerModalToggle, setInnerModalToggle] = useState(false);
  const [loadMain, setLoadMain] = useState(false);
  const [load4, setLoad4] = useState(false);

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

  const delay = (duration) => {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  };

  useEffect(() => {
    const getPage = async () => {
      let response = await axios(ramUrl + `${id}?page=${pageNum}`);
      setPageCount(response.data.info.pages);
      setInfos(response.data.results);
    };
    getPage();
  }, [pageNum, location]);

  const searchAnimation = async () => {
    setLoadMain(true);
    setLoad4(true);
    setShowSearch(false)
    await delay(5000);
    setLoad4(false);
    await delay(1000);
    setLoadMain(false);
  };

  const searchFetch = async (e) => {
    e.preventDefault();
    searchAnimation();
    await delay(2000);
    let response = await axios(ramUrl + `${id}?name=${searchName}`);
    setInfos(response.data.results);
    setSearch("");
  };

  let handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  let getModal = async (ele) => {
    if (!modalToggle) {
      setModalInfo(ele);
      setModalToggle(true);
      await delay(1700);
      setInnerModalToggle(true);
    } else {
      setModalToggle(false);
      setInnerModalToggle(false);
    }
  };

  return (
    <div className="page">
      {showSearch && (
        <div className="searchBar">
          <form onSubmit={searchFetch}>
            <input
              className="searchBar2"
              type="text"
              maxLength="20"
              value={searchName}
              onChange={handleSearch}
              placeholder="Search..."
            />
          </form>
        </div>
      )}
      <div className="display">
        {infos.map((ele, index) => {
          return (
            <div key={index} className="info" onClick={() => getModal(ele)}>
              {(() => {
                if (id === "character") {
                  return <img src={ele.image} alt="Stuff" />;
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
      {modalToggle && (
        <Modal
          modalInfo={modalInfo}
          getModal={getModal}
          innerModalToggle={innerModalToggle}
        />
      )}
      {loadMain && (
        <div className="load">
          <div className=" load1 "></div>
          <div className=" load2 "></div>
          {load4 && <div className=" load3 "></div>}
          {load4 && <div className=" load4 "></div>}
        </div>
      )}
    </div>
  );
}

export default Fetch;
