import http from "../utils/http-common";
import Notice from "../types/Notice";


const getAll = (uname:string, page:number, size:number) => { 
    return http.get<Array<Notice>>(`/notice?uname=${uname}&page=${page}&size=${size}`);
 }

 
 const get = (id: any) => {
    return http.get<Notice>(`/notice/${id}`);
  };

  const create = (data: Notice) => {
    return http.post<Notice>("/notice", data);
  };

  const update = (id: any, data: Notice) => {
    return http.put<any>(`/notice/${id}`, data);
  };

  const remove = (id: any) => {
    return http.delete<any>(`/notice/deletion/${id}`);
  };
  
  const findByUsername = (uname: string) => {
    return http.get<Array<Notice>>(`/notice?uname=${uname}`);
  };

  const NoticeService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByUsername
    
  }

  export default NoticeService;