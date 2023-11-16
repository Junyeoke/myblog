import React, { useEffect, useState } from "react";
import IReplyBoard from "../../types/IReplyBoard";
import ReplyBoardService from "../../services/ReplyBoardService";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

function ReplyBoardList(props: any) {
  // todo ) 변수정의
  // 답변형 게시판(게시물+답변) 배열 변수
  // 답변글 1개만 달리게 제한
  const [replyBoard, setReplyBoard] = useState<Array<IReplyBoard>>([]);

  // 검색어 변수
  const [searchBoardTitle, setSearchBoardTitle] = useState<string>("");

  // todo 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9); // 한 페이지당 개수
  // todo 공통 pageSizes : 배열 (selectbox에 사용)
  const pageSizes = [3, 6, 9];

  // todo ) 함수정의

  //  1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  //  2) 컴포넌트의 변수값이 변할 때 실행됨 : useEffect(() => {실행문},[감시할 변수])
  useEffect(() => {
    retrieveReplyBoard(); // 전체 조회
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveReplyBoard = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    ReplyBoardService.getAll(searchBoardTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const dept =  response.data.dept;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { replyBoard, totalPages } = response.data;
        // dept 저장
        setReplyBoard(replyBoard);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  // 검색어 수동 바인딩 함수
  const onChangeSearchBoardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBoardTitle(e.target.value);
  };

  // todo handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  // select 태그 수동바인딩 : 화면 값을 변수에 저장하는 것
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value); // 1 페이지당 개수 저장(3, 6, 9)
    setPage(1); // 현재페이지 번호 : 1로 강제설정
  };

  // todo Pagination 수동바인딩(공통)
  // page 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (e: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // -------------------------------------------------------

  // todo :: 답변 변수 정의
  // 1) reply 객체 초기화
  const initialReply = {
    bid: null,
    boardTitle: "",
    boardContent: "",
    boardWriter: "",
    viewCnt: 0,
    boardGroup: null,
    boardParent: 0,
  };

  // 2) 답변 글 입력 객체 변수
  const [reply, setReply] = useState(initialReply);
  // 3) reply 버튼 클릭시 상태 저장할 변수 : true/false
  const [replyClicked, setReplyClicked] = useState(false);

  // todo :: 답변 함수 정의
  // 1) input 수동 바인딩 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setReply({ ...reply, [name]: value }); // 변수저장
  };

  // 2) 답변글 생성 함수(insert)
  const saveReply = () => {
    // 임식 객체
    let data = {
      boardTitle: reply.boardTitle,
      boardContent: reply.boardContent,
      boardWriter: reply.boardWriter,
      viewCnt: 0,
      // 그룹번호(부모글 == 자식글)
      // rule : 1) 부모글 최초생성 또는 답변글 없을때 0 저장
      //        2) 답변글 생성이면 부모글 게시판 번호(bid)를 저장
      boardGroup: reply.bid,
      // 부모글번호
      // rule : 1) 부모글 최초생성 또는 답변글 없을때 자신의 게시판 번호(bid) 저장
      //        2) 답변글 생성이면 부모글 번호(bid) 저장
      boardParent: reply.bid,
    };

    ReplyBoardService.create(data) // 백엔드 답변글 저장 요청
      .then((response: any) => {
        setReplyClicked(false);
        alert("답변글이 생성되었습니다.");
        // 전체 재조회 실행
        retrieveReplyBoard();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 3) 게시물 reply 버튼 클릭시 화면에 답변입력창 보이게 하는 함수
  const newReply = (data: any) => {
    // 매개변수 데이터(객체) 수정 : boardContent: "" 으로 수정
    setReply({ ...data, boardContent: "" });
    // 답변 입력창 화면 보이기 : replyClicked : true
    setReplyClicked(true);
  };

  // 4) 답변 입력창 숨기기
  const closeReply = () => {
    // 답변 화면창 숨기기
    setReplyClicked(false);
  };

  return (
    <div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="#">
          <button type="button" className="btn btn-outline-dark mb-3 "  onClick={() => props.handleChangeReplyBoard("addReplyBoard")}>
            글쓰기
          </button>
        </Link>
      </div>
      {/* 게시판(폼1) + 답변글(폼2) */}
      <div className="col-md-12">
        {/* table start(게시판) */}
        <table className="table">
          <thead
            className="replyBoard-table text-white"
            style={{ backgroundColor: "#bd5d38" }}
          >
            <tr className="text-center">
              <th scope="col">No</th>
              <th scope="col">제목</th>
              <th scope="col">내용</th>
              <th scope="col">글쓴이</th>
              <th scope="col">댓글</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {replyBoard &&
              replyBoard.map((data, index) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={index}>
                  <td className="text-center">{data.bid}</td>
                  <td>{data.boardTitle}</td>
                  <td >{data.boardContent}</td>
                  <td className="text-center"><b>{data.boardWriter}</b></td>

                  <td className="text-center">
                    {/* 클릭하면 아래 답변 폼이 열림 */}
                    {data.boardParent == 0 && (
                      <Link to={"#"}>
                        {/* 리액트 : onClick={함수명} : 매개변수 없으면  */}
                        {/* 리액트 : onClick={()=> 함수명(매개변수)} : 매개변수 있으면  */}
                        <span
                          className="badge bg-warning"
                          onClick={() => newReply(data)}
                        >
                          Reply
                        </span>
                      </Link>
                    )}
                  </td>
                  <td className="text-center">
                    {/* 클릭시 상세화면 이동 */}
                    <Link to="#">
                      <span
                        className="badge bg-success"
                        onClick={() =>
                          props.handleChangeReplyBoard(
                            "replyBoardDetail",
                            data.bid,
                            data.boardParent
                          )
                        }
                      >
                        Edit
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}

        {/* reply form start (답변글)*/}
        <div>
          {/* 변수명 && 태그 : 변수명 = true 태그가 보이고 */}
          {/* 변수명 && 태그 : 변수명 = false 태그가 안보임 */}
          {replyClicked && (
            <div className="col-md-12 row mb-5">
              <br/>
              <hr/>
              <h4>✏댓글 작성</h4>
              <div className="col-md-12 row mt-2">
                <label
                  htmlFor="boardContent"
                  className="col-md-2 col-form-label"
                >
                  댓글
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="boardContent"
                    required
                    value={reply.boardContent}
                    onChange={handleInputChange}
                    name="boardContent"
                  />
                </div>
              </div>

              <div className="col-md-12 row mt-2">
                <label
                  htmlFor="boardWriter"
                  className="col-md-2 col-form-label"
                >
                  댓글 작성자
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="boardWriter"
                    required
                    value={reply.boardWriter}
                    onChange={handleInputChange}
                    name="boardWriter"
                  />
                </div>
              </div>

              <div className="row px-4 mt-2">
                <button
                  onClick={saveReply}
                  className="btn btn-success mt-3 col-md-5"
                >
                  작성하기
                </button>
                <div className="col-md-2"></div>

                <button
                  onClick={closeReply}
                  className="btn btn-danger mt-3 col-md-5"
                >
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>
        {/* reply form end */}
        {/* search start (검색어 입력창)*/}
        <div className="row mb-5 justify-content-center">
          <div className="col-12 w-50 input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchBoardTitle}
              onChange={onChangeSearchBoardTitle}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveReplyBoard}
            >
              Search
            </button>
          </div>
        </div>
        {/* search end */}

        {/* paging 시작(페이지 번호 컴포넌트)*/}
        <div className="mt-3  ">
          {"페이지당 게시글 수: "}
          {/* 페이지 size 변경하는 selectbox 시작 */}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size + "개"}
              </option>
            ))}
          </select>
          {/* 페이지 size 변경하는 selectbox 끝 */}

          {/* Material UI(구글) 컴포넌트 시작 */}
          {/* count : 총 페이지 건수(개수), page : 현재 페이지 번호 */}
          {/* count={1페이지당개수}, page={현재페이지번호} */}

          <Pagination
            className="pagination"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
            color="primary"
          />

          {/* Material UI(구글) 컴포넌트 끝 */}
        </div>
        {/* paging 끝 */}
      </div>
    </div>
  );
}

export default ReplyBoardList;
