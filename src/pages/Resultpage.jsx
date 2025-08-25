// import { useFetcher, useLocation } from "react-router-dom"
// import { Link } from "react-router-dom";
// import { ROUTES } from "../const";
// import Result from "../components/Result/Result";
// import Loading from "../components/Loading/Loading";
// import { use, useEffect, useState } from "react";

// export default function Resultpage() {
//   const [active, setActive]  = useState(false);
//   const location = useLocation();
//   const maxQuizLen = location.state.maxQuizLen
//   const correctNumLen = location.state.correctNumLen

//   useEffect(() => {
//     setTimeout(() => setActive(true), 3000);
//   }, []);

//   return (
//     <>
//        <Loading />
//        <h1>Result</h1>
//        <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}></Result>
//        <br />
//        <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
//     </>
//   )
// }
import { useLocation, Link } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

export default function Resultpage() {
  const [active, setActive]  = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  useEffect(() => {
    setTimeout(() => setActive(true), 3000); // 3秒後に非表示にする
  }, []);

  return (
    <>
       <Loading active={active} /> {/* ← activeを渡す */}
       <h1>Result</h1>
       <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
       <br />
       <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}
