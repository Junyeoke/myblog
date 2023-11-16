import React, { useEffect, useState } from "react";
import AOS from "aos";
import NoticeList from "./notice/NoticeList";
import BoardList from "./board/BoardList";

import AddNotice from "./notice/AddNotice";
import NoticeDetail from "./notice/NoticeDetail";
import AddBoard from "./board/AddBoard";
import BoardDetail from "./board/BoardDetail";
import AddReplyBoard from "./reply-board/AddReplyBoard";
import ReplyBoard from "./reply-board/ReplyBoard";
import ReplyBoardList from "./reply-board/ReplyBoardList";
import FileDbList from "./advanced/FileDbList";
import AddFileDb from "./advanced/AddFileDb";
import FileDb from "./advanced/FileDb";

function Board() {
  useEffect(() => {
    handleChangeNotice("noticeList");
    AOS.init();
  }, []);
  // todo: 바인딩 변수 정의
  // notice 게시판 이름 저장 변수
  const [viewNotice, setViewNotice] = useState<string>("");
  // board 게시판 이름 저장 변수
  const [viewBoard, setViewBoard] = useState<string>("");
  // 답변형 게시판 이름 저장 변수
  const [viewImgBoard, setviewImgBoard] = useState<string>("");
  // 기본키 저장 변수
  const [pid, setPid] = useState<number>(0);
  const [uuid, setUuid] = useState<string>("");
  const [boardParent, setBoardParent] = useState<number>(0);

  // 공지사항 버튼 클릭시 실행되는 함수
  const handleChangeNotice = (viewNotice: string, pid = 0) => {
    setViewNotice(viewNotice); // 화면명 저장
    setPid(pid); // 기본키 저장
  };

  // 화면이름에 따라 다른 컴포넌트를 보여주는 함수
  const changeNotice = () => {
    if (viewNotice === "noticeList") {
      return <NoticeList handleChangeNotice={handleChangeNotice} />;
    } else if (viewNotice === "addNotice") {
      return <AddNotice />;
    } else if (viewNotice === "noticeDetail") {
      // props : Emp 컴포넌트에 eno로 데이터 전송
      return <NoticeDetail id={pid} />;
    } else if (viewNotice === "updateNotice") {
    }
  };

  // 자유게시판 화면 이름에 따라 다른 컴포넌트 보여주는 함수
  const changeBoard = () => {
    if (viewBoard === "freeBoard") {
      return <BoardList handleChangeBoard={handleChangeBoard} />;
    } else if (viewBoard === "addBoard") {
      return <AddBoard />;
    } else if (viewBoard === "boardDetail") {
      return <BoardDetail no={pid} />;
    }
  };

  // 자유게시판 버튼 클릭시 실행되는 함수
  const handleChangeBoard = (viewBoard: string, pid = 0) => {
    setViewBoard(viewBoard);
    setPid(pid);
  };

  // 방명록 화면 이름에 따라 다른 컴포넌트 보여주는 함수
  const changeReplyBoard = () => {
    if (viewImgBoard === "replyBoard") {
      return <ReplyBoardList handleChangeReplyBoard={handleChangeReplyBoard} />;
    } else if (viewImgBoard === "addReplyBoard") {
      return <AddReplyBoard />;
    } else if (viewImgBoard === "replyBoardDetail") {
      return <ReplyBoard bid={pid} boardParent={boardParent} />;
    }
  };

  // 방명록 버튼 클릭시 실행되는 함수
  const handleChangeReplyBoard = (viewImgBoard: string, pid = 0, boardParent = 0) => {
    setviewImgBoard(viewImgBoard);
    setPid(pid);
    setBoardParent(boardParent);
  };

   // 사진첩 화면 이름에 따라 다른 컴포넌트 보여주는 함수
   const changeImgBoard = () => {
    if (viewImgBoard === "imgBoard") {
      return <FileDbList handleChangeImgBoard={handleChangeImgBoard} />;
    } else if (viewImgBoard === "addImgBoard") {
      return <AddFileDb />;
    } else if (viewImgBoard === "imgBoardDetail") {
      return <FileDb uuid={uuid}/>;
    }
  };

  // 사진첩 버튼 클릭시 실행되는 함수
  const handleChangeImgBoard = (viewImgBoard: string, uuid = "") => {
    setviewImgBoard(viewImgBoard);
    setUuid(uuid);
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="ture" data-aos-once="false">
      {/* <!-- 게시판 시작--> */}
      <section className="resume-section" id="board">
        <div className="resume-section-content">
          <h2 className="mb-5">📋board</h2>
          {/* 게시판 탭 시작 */}
          <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="notice-tab"
                data-bs-toggle="tab"
                data-bs-target="#notice-tab-pane"
                type="button"
                role="tab"
                aria-controls="notice-tab-pane"
                aria-selected="true"
                onClick={() => handleChangeNotice("noticeList")}
              >
                📢공지사항
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="board-tab"
                data-bs-toggle="tab"
                data-bs-target="#board-tab-pane"
                type="button"
                role="tab"
                aria-controls="board-tab-pane"
                aria-selected="false"
                onClick={() => handleChangeBoard("freeBoard")}
              >
                🎪자유게시판
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="board-tab"
                data-bs-toggle="tab"
                data-bs-target="#replyBoard-tab-pane"
                type="button"
                role="tab"
                aria-controls="replyBoard-tab-pane"
                aria-selected="false"
                onClick={() => handleChangeReplyBoard("replyBoard")}
              >
                📝방명록-답변형 게시판
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="imgBoard-tab"
                data-bs-toggle="tab"
                data-bs-target="#imgBoard-tab-pane"
                type="button"
                role="tab"
                aria-controls="imgBoard-tab-pane"
                aria-selected="false"
                onClick={() => handleChangeImgBoard("imgBoard")}
              >
                📸사진첩
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="notice-tab-pane"
              role="tabpanel"
              aria-labelledby="notice-tab"
              tabIndex={0}
            >
              {changeNotice()}
            </div>
            <div
              className="tab-pane fade"
              id="board-tab-pane"
              role="tabpanel"
              aria-labelledby="board-tab"
              tabIndex={0}
            >
              {changeBoard()}
            </div>
            <div
              className="tab-pane fade"
              id="replyBoard-tab-pane"
              role="tabpanel"
              aria-labelledby="replyBoard-tab"
              tabIndex={0}
            >
              {changeReplyBoard()}
            </div>
            <div
              className="tab-pane fade"
              id="imgBoard-tab-pane"
              role="tabpanel"
              aria-labelledby="imgBoard-tab"
              tabIndex={0}
            >
              {changeImgBoard()}
              
            </div>
          </div>
          {/* 게시판 탭 끝 */}
        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 자유게시판 끝--> */}
    </div>
  );
}

export default Board;
