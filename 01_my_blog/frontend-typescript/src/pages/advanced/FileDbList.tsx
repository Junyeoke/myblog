import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import IFileDb from "../../types/advanced/IFileDb";
import FileDbService from "../../services/advanced/FileDbService";

function FileDbList(props:any) {
  // todo : 변수정의
  // 부서 배열 변수
  const [fileDb, setFileDb] = useState<Array<IFileDb>>([]);
  // title 검색어 변수
  const [searchTitle, setSearchTitle] = useState<string>("");
  // todo : 업로드 성공/실패시 화면에 메세지 출력하는 변수
  const [message, setMessage] = useState<string>("");

  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4); // 1페이지당개수
  // todo: 공통 pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [2, 4, 6];

  // todo : 함수정의
  // 1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {실행문},[])
  // 2) 컴포넌트의 변수값이 변할때 실행됨 : useEffect(() => {실행문},[감시변수])
  useEffect(() => {
    retrieveFileDb(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveFileDb = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    FileDbService.getFiles(searchTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { fileDb, totalPages } = response.data;
        setFileDb(fileDb);
        setCount(totalPages);
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchTitle = (e: any) => {
    setSearchTitle(e.target.value);
  };

  // 삭제함수(uuid)
  const deleteImage = (uuid:any) => {
    FileDbService.deleteFile(uuid) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        alert("삭제되었습니다.");
        retrieveFileDb();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };
  return (
    <>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="#">
          <button type="button" className="btn btn-outline-dark mb-3 " onClick={() => props.handleChangeImgBoard("addImgBoard")}>
            사진 올리기
          </button>
        </Link>
      </div>

   

      <div className="col-md-12 mt-3">
        <h4>사진첩</h4>


        {/* upload 성공/실패 메세지 출력 시작 */}
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        {/* upload 성공/실패 메세지 출력 끝 */}

        {/*   이미지 start */}
        <div className="row">
          {fileDb &&
            fileDb.map((data, index) => (
              <div className="col-sm-6 mt-3"  key={index} >
                <div className="card mt-3" style={{height: 100+"%"}}>
                  <img src={data.fileUrl} className="card-img-top container mt-5" alt="강의" style={{width: 60+"%", height: 60+"%"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{data.fileTitle}</h5>
                    <p className="card-text" >{data.fileContent}</p>
                    <Link to="#">
                      <span className="badge bg-warning"
                      onClick={() => props.handleChangeImgBoard("imgBoardDetail", data.uuid)}
                      >Edit</span>
                    </Link>
                    <a
                      style={{ color: "inherit" }}
                      className="ms-2"
                      onClick={() => {
                        deleteImage(data.uuid);
                      }}
                    >
                      <span className="badge bg-danger">Delete</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/*   이미지 end */}

         {/* 검색어 입력창 */}
      <div className="row mb-5 justify-content-center mt-5">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveFileDb}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* 검색창 end */}

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
    </>
  );
}

export default FileDbList;
