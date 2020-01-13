import React from 'react'

export default function OrderBook(props){
    console.log(props.orderBook.data)
    let buy_book_list = props.orderBook.data.buy_book.map((value, index) => 
        (<li key={index}>{value.price} {index} </li>)
    )
    let sell_book_list = props.orderBook.data.sell_book.map((value, index) => 
        (<li key={index}>{value.price}</li>)
    )
    return(
        <div>
            <h1>Order Book</h1>
            <div id="order-lists">
                <ul id="buy-book" className="book-list">{buy_book_list}</ul> 
                <div id="last-traded" >
                &#36;{props.orderBook.data.last_trade.price}
                </div>
                <ul id="sell-book" className="book-list">{sell_book_list}</ul>                 
            </div> 

        </div>
    )
}