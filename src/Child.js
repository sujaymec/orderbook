import React from 'react'

export default function Child(props){
    console.log(props.orderBook.data)
    let list = props.orderBook.data.buy_book.map((value, index) => {
        return <li key={index}>{value}</li>
    })
    return(
        <div> {props.orderBook.data.buy_book[1].price} {list} </div>
    )
}