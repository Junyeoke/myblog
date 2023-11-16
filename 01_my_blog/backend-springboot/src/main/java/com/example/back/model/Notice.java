package com.example.back.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@Table(name="TB_NOTICE")
@SequenceGenerator(
        name = "SQ_NOTICE_GENERATOR"
        , sequenceName = "SQ_NOTICE"
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
@SQLDelete(sql = "UPDATE TB_NOTICE SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE ID = ?")
public class Notice extends BaseTimeEntity {
    //    공지넘버
//    @Id : Primary Key 에 해당
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_NOTICE_GENERATOR"
    )
    @Column
    private Integer id;

    //    게시글 제목
    @Column
    private String title;
    //    게시글 사용자 이름
    @Column
    private String userName;
    // 게시글 내용
    @Column
    private String content;
}





















