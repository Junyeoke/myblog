// ReplyBoardService.ts - axios 공통 crud 답변형 게시판 서비스


import IReplyBoard from "../types/IReplyBoard";
import http from "../utils/http-common";



// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(한 페이지당 개수))
const getAll = (boardTitle:string, page:number, size:number) => {
  return http.get<Array<IReplyBoard>>(`/guestbook/reply-board?boardTitle=${boardTitle}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (bid:any) => {
  return http.get<IReplyBoard>(`/guestbook/reply-board/${bid}`);
};

// 저장 함수 : 게시물 생성(부모글)
const createBoard = (data:IReplyBoard) => {
  return http.post<IReplyBoard>("/guestbook/reply-board", data);
};

// 저장 함수 : 답변글 생성(자식글)
const create = (data:IReplyBoard) => {
    return http.post<IReplyBoard>("/guestbook/reply", data);
  };
  

// 수정 함수
const update = (bid:any, data:IReplyBoard) => {
  return http.put<any>(`/guestbook/reply-board/${bid}`, data);
};

// 삭제 함수 : 게시물(부모글) + 답변글(자식글) 모두 삭제
// 그룹 번호 : 부모글과 자식글은 모두 그룹 번호가 같음
const removeBoard = (boardGroup:any) => {
  return http.delete<any>(`/guestbook/reply-board/deletion/${boardGroup}`);
};

// 삭제 함수 : 답변글만 삭제
const remove = (bid:any) => {
    return http.delete<any>(`/guestbook/reply/deletion/${bid}`);
  };

const ReplyBoardService = {
  getAll,
  get,
  createBoard,
  create,
  update,
  removeBoard,
  remove,
};

export default ReplyBoardService;