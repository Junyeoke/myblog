// AddReplyBoard.tsx : rfce
// 추가 게시물 페이지
import React, { useState } from "react";
import IReplyBoard from "../../types/IReplyBoard";
import ReplyBoardService from "../../services/ReplyBoardService";

function AddReplyBoard() {
  // todo: 변수 정의
  // todo: 객체 초기화
  const initialReplyBoard = {
    bid: null,
    boardTitle: "",
    boardContent: "",
    boardWriter: "",
    viewCnt: 0,
    boardGroup: null,
    boardParent: 0,
  };

  // replyBoard 객체
  const [replyBoard, setReplyBoard] = useState<IReplyBoard>(initialReplyBoard);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setReplyBoard({ ...replyBoard, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveReplyBoard = () => {
    // 임시 객체
    var data = {
      boardTitle: replyBoard.boardTitle,
      boardContent: replyBoard.boardContent,
      boardWriter: replyBoard.boardWriter,
      viewCnt: replyBoard.viewCnt,
      boardGroup: null, // 입력시 제외
      boardParent: 0, // 입력시 제외
    };

    ReplyBoardService.createBoard(data) // 게시물 저장 요청
      .then((response: any) => {
        
        setSubmitted(true);
        console.log(response.data);
        alert("저장되었습니다.");
        window.location.reload();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newReplyBoard = () => {
    setReplyBoard(initialReplyBoard); // replyBoard 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // 여기
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto"></div>
      ) : (
        <>
          <h4>✏방명록 쓰기</h4>

          <div className="col-6 mx-auto mt-5">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardTitle" className="col-form-label">
                  제목
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardTitle"
                  required
                  className="form-control"
                  value={replyBoard.boardTitle}
                  onChange={handleInputChange}
                  placeholder="제목을 작성해주세요"
                  name="boardTitle"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardContent" className="col-form-label">
                  내용
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardContent"
                  required
                  className="form-control"
                  value={replyBoard.boardContent}
                  onChange={handleInputChange}
                  placeholder="내용을 입력해주세요"
                  name="boardContent"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardWriter" className="col-form-label">
                  작성자
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardWriter"
                  required
                  className="form-control"
                  value={replyBoard.boardWriter}
                  onChange={handleInputChange}
                  placeholder="작성자 이름을 입력해주세요"
                  name="boardWriter"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveReplyBoard}
                className="btn btn-outline-warning ms-2 col"
              >
                작성하기
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddReplyBoard;
