import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ModInfo(props) {
  const { urls, ids, names, p3s, p4s, titles } = props;
  const [url, setUrl] = useState(null);
  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [p3, setP3] = useState(null);
  const [p4, setP4] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const setting = async () => {
      setUrl(urls)
      setId(ids)
      setName(names)
      setP3(p3s)
      setP4(p4s)
    };
    setting()
  }, [ids, location]);
          return (
            <div className="modal">
              <img className="modalImg" src={url} />
              <p className="modalP"> ID: {id}</p>
              <p className="modalP">  Name: {name}</p>
              <p className="modalP">{titles[0]}: {p3}</p>
              <p className="modalP">{titles[1]}: {p4}</p>
            </div>
          );
}
export default ModInfo;
