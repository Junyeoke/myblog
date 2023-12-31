DROP SEQUENCE SQ_NOTICE;
CREATE SEQUENCE SQ_NOTICE START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_BOARD;
CREATE SEQUENCE SQ_BOARD START WITH 1 INCREMENT BY 1;

DROP SEQUENCE SQ_REPLY_BOARD;
CREATE SEQUENCE SQ_REPLY_BOARD INCREMENT BY 1 START WITH 1;


DROP TABLE TB_NOTICE CASCADE CONSTRAINT;
DROP TABLE TB_BOARD CASCADE CONSTRAINT;
DROP TABLE TB_REPLY_BOARD CASCADE CONSTRAINT;
DROP TABLE TB_FILE_DB CASCADE CONSTRAINT;




CREATE TABLE TB_NOTICE
(
    ID         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);


CREATE TABLE TB_BOARD
(
    NO         NUMBER NOT NULL PRIMARY KEY,
    TITLE       VARCHAR2(255),
    USER_NAME   VARCHAR2(255),
    CONTENT     VARCHAR2(255),
    VIEW_CNT    NUMBER DEFAULT 0,
    DELETE_YN   VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME VARCHAR2(255),
    UPDATE_TIME VARCHAR2(255),
    DELETE_TIME VARCHAR2(255)
);

CREATE TABLE TB_REPLY_BOARD
(
    BID           NUMBER NOT NULL
        CONSTRAINT PK_REPLY_BOARD PRIMARY KEY, -- 게시판번호
    BOARD_TITLE   VARCHAR2(256),               -- 제목
    BOARD_CONTENT VARCHAR2(255),               -- 내용
    BOARD_WRITER  VARCHAR2(255),               -- 작성자
    VIEW_CNT      NUMBER DEFAULT 0,            -- 조회수
    BOARD_GROUP   NUMBER,                      -- 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
    BOARD_PARENT  NUMBER,                      -- 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )
    DELETE_YN     VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME   VARCHAR2(255),
    UPDATE_TIME   VARCHAR2(255),
    DELETE_TIME   VARCHAR2(255)
);

-- Upload Table
CREATE TABLE TB_FILE_DB
(
    UUID         VARCHAR2(1000) NOT NULL
        CONSTRAINT PK_FILE_DB PRIMARY KEY, -- 파일 UUID
    FILE_TITLE   VARCHAR2(1000),           -- 제목
    FILE_CONTENT VARCHAR2(1000),           -- 내용
    FILE_NAME    VARCHAR2(1000),           -- 파일명
    FILE_DATA    BLOB,                     -- 바이너리 파일(이미지파일)
    FILE_URL     VARCHAR2(1000),           -- 파일 다운로드 URL
    DELETE_YN    VARCHAR2(1) DEFAULT 'N',
    INSERT_TIME  VARCHAR2(255),
    UPDATE_TIME  VARCHAR2(255),
    DELETE_TIME  VARCHAR2(255)
);