import React, {useState} from "react"
import {action} from "@storybook/addon-actions"
import {Rating, RatingValueType} from './Rating'

export default {
    title: 'Rating stories',
    component: 'Rating'
}

export const EmptyRating = () => <Rating value={5} onClick={x=>x}/>
export const Star1 = () => <Rating value={2} onClick={x=>x}/>
export const Star2 = () => <Rating value={3} onClick={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}