package com.example.back.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * packageName : com.example.back.model
 * fileName : News
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
@Entity
@Table(name = "TB_BOARD")
@SequenceGenerator(
        name = "SQ_BOARD_GENERATOR"
        , sequenceName = "SQ_BOARD"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
// 사용법 : 1) @Where(clause = "DELETE_YN = 'N'") : select 될 때 조건("DELETE_YN = 'N'")을 강제로 붙여줌
//         2) @SQLDelete(sql = "대체 sql문") : delete 될때 대체해서 실행될 쿼리문
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE NO = ?")
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_BOARD_GENERATOR"
    )

    private Integer no;

    private String title;

    private String userName;

    private String content;

    private Integer viewCnt;




}
