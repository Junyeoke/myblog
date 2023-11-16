package com.example.back.service;

import com.example.back.model.Board;
import com.example.back.model.Board;
import com.example.back.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.back.service
 * fileName : NewsService
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
@Service
public class BoardService {

    @Autowired
    BoardRepository boardRepository;

    //    전체조회
    public Page<Board> findAll(Pageable pageable) {
        Page<Board> page = boardRepository.findAll(pageable);
        return page;

    }

    //    title like 조회 + paging
    public Page<Board> findAllByTitleContaining(String title, Pageable pageable) {
        Page<Board> page
                = boardRepository.findAllByTitleContaining(title, pageable);
        return page;

    }

    // 저장 함수
    public Board save(Board board) {

        Board Board2 = boardRepository.save(board);

        return Board2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<Board> findById(int no) {
        Optional<Board> optionalBoard = boardRepository.findById(no);
        return optionalBoard;
    }

    // 삭제함수
    public boolean removeById(int no) {
        if(boardRepository.existsById(no)) {    // no 있는지 확인
            boardRepository.deleteById(no); // 삭제 진행
            return true;
        }
        return false;
    }
}
