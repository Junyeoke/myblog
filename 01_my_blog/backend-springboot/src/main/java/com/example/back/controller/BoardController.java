package com.example.back.controller;

import com.example.back.model.Board;
import com.example.back.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.back.controller
 * fileName : NewsController
 * author : GGG
 * date : 2023-10-26
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-26         GGG          최초 생성
 */
@RestController
@Slf4j
@RequestMapping("/api")
public class BoardController {
    @Autowired
    BoardService boardService;

    // 전체 조회 + title like 검색
    @GetMapping("/board")
    public ResponseEntity<Object> findAllByTitleContaining(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size

    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

//            전체조회(dname="") + like 검색(dname="S")
            Page<Board> boardPage
                    = boardService.findAllByTitleContaining(title, pageable);

//            리액트 전송 : 부서배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("board", boardPage.getContent());
            response.put("currentPage", boardPage.getNumber());
            response.put("totalItems", boardPage.getTotalElements());
            response.put("totalPages", boardPage.getTotalPages());

//            신호 보내기
            if (boardPage.isEmpty() == false) {
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
    @PostMapping("/board")
    public ResponseEntity<Object> create(@RequestBody Board board) {

        try {
            Board board2 = boardService.save(board);

            return new ResponseEntity<>(board2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/board/{no}")
    public ResponseEntity<Object> update(@RequestBody Board board, @PathVariable int no) {

        try {
            Board board2 = boardService.save(board);    // db 수정

            return new ResponseEntity<>(board2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 상세조회
    @GetMapping("/board/{no}")
    public ResponseEntity<Object> findById(@PathVariable int no) {
//    상세조회 실행
        try {
            Optional<Board> optionalBoard = boardService.findById(no);

            if (optionalBoard.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalBoard.get(), HttpStatus.OK);
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

    @DeleteMapping("/board/deletion/{no}")
    public ResponseEntity<Object> delete(@PathVariable int no) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            boolean bSuccess = boardService.removeById(no);

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
