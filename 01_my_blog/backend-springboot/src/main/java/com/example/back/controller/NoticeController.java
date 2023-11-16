package com.example.back.controller;

import com.example.back.model.Notice;
import com.example.back.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller
 * fileName : DeptController
 * author : GGG
 * date : 2023-10-19
 * description : 부서 컨트롤러 (@RestController - react용)
 * 요약 :
 * react(3000) <-> springboot(8000) 연동 : axios
 * 인터넷 기본 보안 : ip, port 최초에 지정된 것과 달라지면
 * => 해킹으로 기본 인정 (블러킹 : 단절) : CORS 보안
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api")
public class NoticeController {
    @Autowired
    NoticeService noticeService;    // DI


    // 전체 조회 + dname like 검색
    @GetMapping("/notice")
    public ResponseEntity<Object> findAllByUserNameContaining(
            @RequestParam(defaultValue = "") String uname,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size

    ) {
        try {
//            페이지 변수 저장 (page:현재페이지 번호, size: 한 페이지당 개수)
//            함수 매개변수 : Pageable(위의 값을 넣기)
//            사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 한페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<Notice> noticePage
                    = noticeService.findAllByUserNameContaining(uname, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("notice", noticePage.getContent());                // 부서배열 전송
            response.put("currentPage", noticePage.getNumber());          // 현재페이지번호 전송
            response.put("totalItems", noticePage.getTotalElements());    // 총 건수(개수) 전송
            response.put("totalPages", noticePage.getTotalPages());       // 총 페이지수 전송

//            신호 보내기
            if (noticePage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }


        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    저장함수
    @PostMapping("/notice")
    public ResponseEntity<Object> create(@RequestBody Notice notice) {

        try {
            Notice notice2 = noticeService.save(notice);

            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/notice/{id}")
    public ResponseEntity<Object> update(@RequestBody Notice notice, @PathVariable int id) {

        try {
            Notice notice2 = noticeService.save(notice);    // db 수정

            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 상세조회
    @GetMapping("/notice/{id}")
    public ResponseEntity<Object> findById(@PathVariable int id) {
//    상세조회 실행
        try {
            Optional<Notice> optionalNotice = noticeService.findById(id);

            if (optionalNotice.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalNotice.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 삭제함수

    @DeleteMapping("/notice/deletion/{id}")
    public ResponseEntity<Object> delete(@PathVariable int id) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = noticeService.removeById(id);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
