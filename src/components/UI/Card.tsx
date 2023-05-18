import React from 'react'
import { cardStyle } from './Card.css'
import { reduceEachLeadingCommentRange } from 'typescript';

const Card = (prop:any) => {
    return (
        <div className={cardStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel error consectetur animi qui esse deleniti eius, unde amet, accusantium quis, provident consequuntur magnam exercitationem quod eum doloremque voluptatem reprehenderit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nobis esse, optio minima rem delectus quidem animi enim officiis architecto odit ipsum nulla quisquam nam ex cum nihil obcaecati fugit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, ullam at sapiente non sunt aperiam inventore quod nobis consequuntur vel labore. Minus nam non sunt? Facere neque delectus blanditiis debitis?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam id alias minus quisquam deserunt hic aliquid eaque, fuga quo aliquam, ea, aut commodi dolorem voluptate eligendi! Libero, aliquam tenetur.
            reduceEachLeadingCommentRange\
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel error consectetur animi qui esse deleniti eius, unde amet, accusantium quis, provident consequuntur magnam exercitationem quod eum doloremque voluptatem reprehenderit!
        </div>
  )
}

export default Card;