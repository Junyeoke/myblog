import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-mirror="ture"
      id="page-top"
      data-aos-once="false"
    >
      {/* <!-- 블로그소개--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content ">
          {/* 메인 제목 시작 */}
          <h1 className="mb-0">
            JUNHYUK's&nbsp;<span className="text-primary">blog</span>
          </h1>
          {/* 메인 제목 끝 */}

          {/* 소제목 시작 */}
          <div>
            <h4 className="lead mt-5 mb-5">
              안녕하세요! <br/>
              웹 개발자가 되기 위해 열심히 배우고 노력하고 있는 <br/>
              개발자 이준혁입니다!
            </h4>
          </div>
          {/* 소제목 끝 */}

          {/* 소셜 아이콘 + 하이퍼링크 시작 */}
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.instagram.com/junyeoke"
            >
              <i className="fab fa-instagram">
                https://www.instagram.com/junyeoke
              </i>
            </a>
            <a className="social-icon" href="https://github.com/Junyeoke">
              <i className="fab fa-github">https://github.com/Junyeoke</i>
            </a>
          </div>
          {/* 소셜 아이콘 + 하이퍼링크 끝 */}
          <div className="row">
            {/* 개인소개 카드 부분 */}
            <div className="card col-md-11 mt-5">
              <div className="card-body">
                <h4 className="card-title">🙋‍♂️ 이준혁(LEE JUNHYUK)</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  1994.08.22(29세)
                </h6>
                <p className="card-text">
                  📧 email : junyeoke@kakao.com 
                  <br/>
                  📱 phone : 010 - 4547 - 9941
                  <br/>
                  🧑🏻‍🎓 동의대학교 의생명공학 학사졸업
                </p>
                <hr/>
                <h4 className="card-title">🪪 certificate</h4>
                <p className="card-text">
                   정보처리기사(필기)
                   <br/>
                   컴퓨터활용능력 2급
                   <br/>
                   워드프로세서 단일등급

                </p>
              </div>
            </div>
            {/* 카드부분 끝 */}
          </div>
        </div>
        {/* 이미지 시작 */}
        <div className="container text-end">
          <img
            className="img-fluid img-profile  mx-auto mb-2"
            src="assets/img/pro.png"
            alt="..."
          />
        </div>
        {/* 이미지 끝 */}
      </section>

      <hr className="m-0" />
      {/* <!-- 블로그소개 끝--> */}
    </div>
  );
}

export default About;
