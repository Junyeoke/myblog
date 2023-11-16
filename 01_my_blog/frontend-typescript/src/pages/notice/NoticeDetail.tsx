import React, { useEffect, useState } from "react";
import NoticeService from "../../services/NoticeService";
import { useNavigate, useParams } from "react-router-dom";
import Notice from "./../../types/Notice";
import axios from "axios";

function NoticeDetail(props: any) {
  // 전체조회 페이지에서 전송한 기본키(dno)
  const id = props.id;
  // 강제 페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세 조회 : 기본키 있음)
  const initialNotice = {
    id: "",
    title: "",
    userName: "",
    content: "",
    insertTime: "",
  };

  // 수정될 객체
  const [notice, setNotice] = useState<Notice>(initialNotice);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  const [viewNotice, setViewNotice] = useState<string>("");

  const [pid, setPid] = useState<number>(0);

  // 수정 버튼 클릭시 실행되는 함수
  const handleChangeNotice = (viewNotice: string, pid = 0) => {
    setViewNotice(viewNotice); // 화면명 저장
    setPid(pid); // 기본키 저장
  };

  // 상세 조회 함수
  const getNotice = (id: string) => {
    NoticeService.get(id) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setNotice(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + dno 값이 바뀌면 실행
  useEffect(() => {
    if (id) getNotice(id);
  }, [id]);

  // input 태그 수동바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNotice({ ...notice, [name]: value });
  };

  // 수정함수
  const updateNotice = () => {
    NoticeService.update(notice.id, notice) // 벡엔드로 수정요청
      .then((response: any) => {
        alert("수정되었습니다.");
        window.location.reload();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수
  const deleteNotice = () => {
    NoticeService.remove(notice.id) // 벡엔드로 삭제요청
      .then((response: any) => {
        alert("삭제되었습니다.");
        window.location.reload();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#updateModal"
        >
          게시글 수정
        </button>

        <button className="btn btn-outline-danger" onClick={deleteNotice}>
                  삭제
                </button>
        {/* 수정 모달창 */}
        <div
          className="modal fade modal-lg"
          id="updateModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  게시글 수정
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="title" className="col-form-label">
                  제목
                </label>
                <input
                  type="text"
                  id="boardTitle"
                  required
                  className="form-control mb-3"
                  value={notice.title}
                  onChange={handleInputChange}
                  placeholder="글제목"
                  name="title"
                />
                <label htmlFor="userName" className="col-form-label ">
                  작성자
                </label>
                <input
                  type="text"
                  id="userName"
                  required
                  className="form-control mb-4"
                  value={notice.userName}
                  onChange={handleInputChange}
                  placeholder="작성자명"
                  name="userName"
                />
                <label htmlFor="content" className="col-form-label ">
                  내용
                </label>
                {/* TODO : 글쓰기 화면  : CKeditor*/}
                <input
                  type="text"
                  id="content"
                  required
                  className="form-control mb-4"
                  value={notice.content}
                  onChange={handleInputChange}
                  placeholder="내용"
                  name="content"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  닫기
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={updateNotice}
                >
                  수정
                </button>

                
              </div>
            </div>
          </div>
        </div>
        {/* 수정 모달창 끝 */}
      </div>

      <table className="table">
        <tbody>
          <tr>
            <th className="col-md-2">제목</th>
            <td>{notice.title}</td>
          </tr>
          <tr>
            <th className="col-md-2">작성자</th>
            <td>{notice.userName}</td>
          </tr>
          <tr>
            <th className="col-md-2">작성일시</th>
            <td>{notice.insertTime}</td>
          </tr>
        </tbody>
      </table>
      <div dangerouslySetInnerHTML={{ __html: notice.content }}></div>

    
    </>
  );
}

export default NoticeDetail;
