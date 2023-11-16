import Board from "../types/Board";
import http from "../utils/http-common";



const getAll = (title:string, page:number, size:number) => { 
    return http.get<Array<Board>>(`/board?title=${title}&page=${page}&size=${size}`);
 }

 
 const get = (id: any) => {
    return http.get<Board>(`/board/${id}`);
  };

  const create = (data: Board) => {
    return http.post<Board>("/board", data);
  };

  const update = (id: any, data: Board) => {
    return http.put<any>(`/board/${id}`, data);
  };

  const remove = (id: any) => {
    return http.delete<any>(`/board/deletion/${id}`);
  };
  
  const findByTitle = (title: string) => {
    return http.get<Array<Board>>(`/board?title=${title}`);
  };

  const BoardService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByTitle
    
  }

  export default BoardService;