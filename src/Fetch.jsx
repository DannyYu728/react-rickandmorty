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
  const [searchName, setSearch] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [innerModalToggle, setInnerModalToggle] = useState(false);

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
    let div = document.querySelector(".load");
    let search = document.querySelector(".searchBar");
    let bar = document.querySelector(".searchBar2");
    let load3 = document.querySelector(".load3");
    let load4 = document.querySelector(".load4");
    div.classList.remove("hidden");
    search.classList.add("goAway");
    bar.classList.add("goAway");
    await delay(4000);
    search.classList.add("hidden");
    load3.classList.add("invis");
    load4.classList.add("invis");
    await delay(2000);
    div.classList.add("hidden");
    load3.classList.remove("invis");
    load4.classList.remove("invis");
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

  // let getModal = async (ele) => {
  //   let main = document.querySelector(".mainModal");
  //   let modal = document.querySelector(".modal");
  //   setModalInfo(ele);
  //   main.classList.remove("hidden");
  //   await delay(1700);
  //   modal.classList.remove("hidden");
  // };

  let getModal = async (ele) => {
    if (!modalToggle) {
      setModalInfo(ele);
      setModalToggle(true);
      await delay(1700);
      setInnerModalToggle(true);

    } else {
      setModalToggle(false);
      setInnerModalToggle(false)
    }
  };

  return (
    <div className="page">
      <div className="searchBar hidden goAway">
        <form onSubmit={searchFetch}>
          <input
            className="searchBar2 goAway"
            type="text"
            maxLength="20"
            value={searchName}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </form>
      </div>
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
      {modalToggle && <Modal modalInfo={modalInfo} getModal={getModal} innerModalToggle={innerModalToggle} />}
      <div className="load hidden">
        <div className=" load1 "></div>
        <div className=" load2 "></div>
        <div className=" load3 "></div>
        <div className=" load4 "></div>
      </div>
    </div>
  );
}

export default Fetch;
