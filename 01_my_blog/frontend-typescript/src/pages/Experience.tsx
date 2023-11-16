import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="ture">
      {/* <!-- 보유기술 시작--> */}
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-3">🛠Skills & Experience</h2>
          <h4 className="mb-5">
            개발자가 되기 위해 저는 아래의 기술들을 공부하고, 경험하였습니다. 😎
          </h4>
          {/* 첫번째 보유기술/경험 시작 */}
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-mirror="ture"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">HTML/CSS</h3>
              <div className="subheading mb-3">FrontEnd</div>
              <p>
                - HTML5 표준 태그 활용 - TABLE, DIV 등 태그 활용을 통한 웹페이지
                구성과 디자인 편집 가능 <br />

              </p>

              <h5 className="font-weight-bold text-end">80%</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          {/* 첫번째 보유기술/경험 끝 */}

          {/* 두번째 보유기술/경험 시작 */}
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-mirror="ture"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">Bootstrap</h3>
              <div className="subheading mb-3">FrontEnd</div>
              <p>
                - 부트스트랩 템플릿을 활용한 반응형 웹 페이지 구현 <br />
                - 부트스트랩 디자인 소스를 활용한 다양한 웹 페이지 구현
                <br />
              </p>
              <h5 className="font-weight-bold text-end">95%</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          {/* 두번째 보유기술/경험 끝 */}

          {/* 세번째 보유기술/경험 시작 */}
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-mirror="ture"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">JAVA & Springboot</h3>
              <div className="subheading mb-3">BackEnd</div>
              <p>
                - 기본적인 문법과 메서드 구현 가능 <br />- 객체지향 프로그래밍의
                이해와 기능 사용 가능
              </p>
              <h5 className="font-weight-bold text-end">75%</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          {/* 세번째 보유기술/경험 끝 */}

          {/* 네번째 보유기술/경험 시작 */}
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-mirror="ture"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">Oracle</h3>
              <div className="subheading mb-3">Database</div>
              <p>- 데이터베이스 CRUD 구현</p>
              <h5 className="font-weight-bold text-end">70%</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "70%" }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          {/* 네번째 보유기술/경험 끝 */}

          {/* 다섯번째 보유기술/경험 시작 */}
          <div
            className="d-flex flex-column flex-md-row justify-content-between mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-mirror="ture"
          >
            <div className="flex-grow-1">
              <h3 className="mb-0">React(typescript) + springboot</h3>
              <div className="subheading mb-3">fullstack</div>
              <p>
                - 리액트 + 스프링부트를 활용한 블로그 제작 및 게시판 CRUD 기능
                구현
              </p>
              <h5 className="font-weight-bold text-end">70%</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "70%" }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">July 2023 - Present</span>
            </div>
          </div>
          {/* 다섯번째 보유기술/경험 끝 */}
        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 보유기술 끝--> */}
    </div>
  );
}

export default Experience;
