package com.example.back.service;

import com.example.back.model.Notice;
import com.example.back.repository.NoticeRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : DeptService
 * author : GGG
 * date : 2023-10-19
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-19         GGG          최초 생성
 */
@Service
public class NoticeService {
    @Autowired
    NoticeRepository noticeRepository;  // DI

    //    전체조회
    public Page<Notice> findAll(Pageable pageable) {
        Page<Notice> page = noticeRepository.findAll(pageable);
        return page;

    }


    //    ename like 조회 + paging
    public Page<Notice> findAllByUserNameContaining(String uname, Pageable pageable) {
        Page<Notice> page
                = noticeRepository.findAllByUserNameContaining(uname, pageable);
        return page;

    }

    // 저장 함수
    public Notice save(Notice notice) {

        Notice Notice2 = noticeRepository.save(notice);

        return Notice2;
    }

    // 상세 조회(1건 조회) 함수
    public Optional<Notice> findById(int id) {
        Optional<Notice> optionalNotice = noticeRepository.findById(id);
        return optionalNotice;
    }

    // 삭제함수
    public boolean removeById(int id) {
        if(noticeRepository.existsById(id)) {    // dno 있는지 확인
            noticeRepository.deleteById(id); // 삭제 진행
            return true;
        }
        return false;
    }


}
