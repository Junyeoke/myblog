import React, { useEffect } from "react";

function Project() {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      {/* <!-- 프로젝트 시작--> */}
      <section className="resume-section" id="project">
        <div className="resume-section-content">
          <h2 className="mb-3">🛠project</h2>
          <br />
          {/* 첫번째 카드 시작 */}
          <div className="card mb-5">
            <div className="card-header">첫번째 프로젝트</div>
            <div className="card-body">
              <h5 className="card-title">
                HTML과 CSS를 이용한 간단한 블로그 제작하기
              </h5>
              <p className="card-text">
                학원에서 처음으로 배우게 된 프론트엔드 기술인 HTML과 CSS를
                이용하여 간단한 블로그를 제작했습니다.
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#htmlCss"
              >
                자세히 보기
              </button>
              {/* 모달 시작 */}
              <div
                className="modal fade modal-dialog-scrollable modal-xl"
                id="htmlCss"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        첫번째 개인 프로젝트
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h5>📌저의 첫번째 개인 프로젝트 입니다.</h5>
                      <br />
                      <p>
                        ✔ 처음 프론트엔드 기술인 HTML과 CSS를 배웠을 때 HTML과
                        CSS 코드만으로 작성된 블로그 페이지 입니다.
                        <br />✔ one true layout 구조의 형태로 제작하였습니다.
                      </p>
                      <h5>🛠 사용기술 : HTML5, CSS </h5>
                      <br />
                      <img
                        src="https://drive.google.com/uc?export=view&id=1w_HMd_ZtJI-uIquv6YD99bNNm3ur5zhm"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 모달 끝 */}
            </div>
          </div>
          {/* 첫번째 카드 끝 */}

          {/* 두번째 카드 시작 */}
          <div className="card mb-5">
            <div className="card-header">두번째 프로젝트</div>
            <div className="card-body">
              <h5 className="card-title">
                부트스트랩을 활용한 블로그 페이지 만들기
              </h5>
              <p className="card-text">
                부트스트랩을 이용하여 애니메이션 효과 및 게시판 기능을 추가한
                블로그 사이트를 제작하였습니다.
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#project2"
              >
                자세히 보기
              </button>
              {/* 모달 시작 */}
              <div
                className="modal fade modal-dialog-scrollable modal-xl"
                id="project2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        두번째 개인 프로젝트
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h5>📌저의 두번째 개인 프로젝트 입니다.</h5>
                      <br />
                      <p>
                        ✔ 부트스트랩을 이용하여 블로그 내비게이션 바 기능과
                        게시판 부분을 제작하였습니다.
                      </p>
                      <h5>
                        🛠 사용기술 : bootstrap, css, html, typescript, react,
                        springboot{" "}
                      </h5>
                      <br />
                      <img
                        src="https://drive.google.com/uc?export=view&id=1yNGXc5G3fLUDPLBTiDnL53iRTYIApvxm"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 모달 끝 */}
            </div>
          </div>
          {/* 두번째 카드 끝 */}

          {/* 세번째 카드 시작 */}
          <div className="card mb-5">
            <div className="card-header">세번째 프로젝트</div>
            <div className="card-body">
              <h5 className="card-title">
                리액트(Typescript) + 스프링부트를 활용한 블로그 페이지 만들기
              </h5>
              <p className="card-text">
                지금 보고있는 블로그 사이트가 리액트와 스프링부트를 이용하여
                제작한 블로그 페이지 입니다.
                <br />
                포트폴리오 형식의 블로그 페이지이며, 저에 대한 소개, 기술 및
                경험 및 작은 개인 프로젝트 목록들을 보여주고 있습니다. <br />
                그리고, 게시판에는 기본적인 기능인 게시글 생성, 수정, 삭제, 조회
                기능이 있습니다.
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#project3"
              >
                자세히 보기
              </button>
              {/* 모달 시작 */}
              <div
                className="modal fade modal-dialog-scrollable modal-xl"
                id="project3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        세번째 개인 프로젝트
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h5>📌저의 세번째 개인 프로젝트 입니다.</h5>
                      <br />
                      <p>
                        ✔ 프론트 작업 부분은 React + typescript 을
                        이용하였습니다. <br />✔ 백엔드 작업 부분은 Springboot +
                        JPA + Oracle DB를 이용하였습니다.
                      </p>
                      <h5>
                        🛠 사용기술 : bootstrap, css, html, typescript, react,
                        springboot{" "}
                      </h5>
                      <br />
                      <img
                            className="img-fluid  border border-secondary p-2 mx-auto"
                            src="https://drive.google.com/uc?export=view&id=1iSW2ngQllYJJqYURSZhszNi2pGJ7c6Gr"
                            alt=""
                          />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 모달 끝 */}
            </div>
          </div>
          {/* 세번째 카드 끝 */}
        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 보유기술 끝--> */}
    </div>
  );
}

export default Project;
