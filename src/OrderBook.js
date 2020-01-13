import React from 'react'

export default function OrderBook(props){
    console.log(props.orderBook.data)
    let buy_book_list = props.orderBook.data.buy_book.map((value, index) => 
        (
            <li key={value.price}>
                <span className="order-data-cell text-left">{value.price}</span>
                <span className="order-data-cell alt-color text-center">{value.size}</span>
                <span className="order-data-cell alt-color text-right">1000000</span>
            </li>
        )
    )
    let sell_book_list = props.orderBook.data.sell_book.map((value, index) => 
        (
            <li key={value.price}>
                <span className="order-data-cell text-left">{value.price}</span>
                <span className="order-data-cell alt-color text-center">{value.size}</span>
                <span className="order-data-cell alt-color text-right">1000000</span>
            </li>
        )
    )
    return(
        <div>
            <h1>Order Book</h1>
            <div id="order-lists">
                <ul id="sell-book" className="book-list">{sell_book_list}</ul>
                <div id="last-traded" >
                &#36;{props.orderBook.data.last_trade.price}
                </div>
                <ul id="buy-book" className="book-list">{buy_book_list}</ul>                  
            </div> 

        </div>
    )
}