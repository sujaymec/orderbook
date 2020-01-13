import React from 'react'

export default function OrderBook(props){
    console.log(props.orderBook.data)
    let green_total;
    let red_total;
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
        <div style={{boxShadow:'0px 3px 3px 0px #e8e8e8'}}>
            <h1>Order Book</h1>
            <div id="controls">
                <div id="green-list"></div>
                <div id="full-list"></div>
                <div id="red-list"></div>
            </div>
            <div id="order-lists">
                <ul id="sell-book" className="book-list">{sell_book_list}</ul>
                <div id="last-traded" >
                    <span style={{width:'60%'}} >&#36;{props.orderBook.data.last_trade.price}</span>
                    <span style={{width:'20%', fontWeight:'normal'}} className="text-right">Index Price : {props.orderBook.data.spot_price}</span>
                    <span style={{width:'20%', fontWeight:'normal'}} className="text-right">Mark Price :  {props.orderBook.data.mark_price}</span>
                </div>
                <ul id="buy-book" className="book-list">{buy_book_list}</ul>                  
            </div> 

        </div>
    )
}