INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '사이트 오픈 공지', '주녘주녘','공지사항 내용 테스트 1','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);
INSERT INTO TB_NOTICE
VALUES (SQ_NOTICE.nextval, '사이트 점검 공지', '주녘주녘','공지사항 내용 테스트 2', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'),NULL, NULL);




-- 답변형 게시판 테스트
-- 1
INSERT INTO TB_REPLY_BOARD
VALUES (SQ_REPLY_BOARD.nextval, '방문하고 갑니다', '블로그 구경하고 갑니다', '홍길동', 0, 1, 0, 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


COMMIT;