import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "소크라테스",
    comment: "인생은 짧고 예술은 길다."
  },{
    name: "토마스 에디슨",
    comment: "많은 인생의 실패자들이 포기할 때, 자신이 성공에 얼마나 가까이 있었는지 모른다."
  },{
    name: "아리스토텔레스",
    comment: "우리가 반복적으로 하는 것은 우리를 만든다. 훌륭함은 하나의 행동이 아니라 하나의 습관이다."
  },{
    name: "우디 앨런",
    comment: "행복해지는 재능은 자신이 가지지 못한 것이 아닌, 자신이 가진 것에 감사하고 그것을 사랑하는 것이다."
  },{
    name: "요슈타인 가아더",
    comment: "행복이란 하늗이 파랗다는 걸 발견하는 만큼이나 쉬운 일이다."
  }
]

function CommentList(props) {
  return (
    <div>
      {
        comments.map(comment => {
          return <Comment name = {comment.name} comment = {comment.comment}/>
        })
      }
    </div>
  )
}

export default CommentList