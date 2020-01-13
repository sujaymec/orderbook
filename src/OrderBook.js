import React from 'react'

export default function OrderBook(props){
    console.log(props.orderBook.data)
    let green_total = 0;
    let red_total = 0;
    
    let buy_book_list = props.orderBook.data.buy_book.map((value, index) => {
        if(green_total === 0){
            green_total = value.size
        }else{
            green_total = green_total + value.size
        }
        return (
            <li key={value.price}>
                <span className="order-data-cell text-left">{value.price}</span>
                <span className="order-data-cell alt-color text-center">{value.size}</span>
                <span className="order-data-cell alt-color text-right">{green_total} <span className="progress-bar" ></span> </span>
            </li>
        )}
    )
    let sell_book_list = props.orderBook.data.sell_book.map((value, index) => {
        if(red_total === 0){
            red_total = value.size
        }else{
            red_total = red_total + value.size
        }        
        return (
            <li key={value.price}>
                <span className="order-data-cell text-left">{value.price}</span>
                <span className="order-data-cell alt-color text-center">{value.size}</span>
                <span className="order-data-cell alt-color text-right">{red_total} <span className="progress-bar" ></span> </span>
            </li>
        )}
    )
    return(
        <div style={{boxShadow:'0px 3px 3px 0px #e8e8e8'}}>
            <h1>Order Book</h1>
            <div id="controls">
                <div id="red-list" onClick={() => {props.changeMode('red')}}></div>
                <div id="full-list" onClick={() => {props.changeMode('full')}}></div>
                <div id="green-list" onClick={() => {props.changeMode('green')}}></div>
            </div>
            <div id="order-lists">
                {(props.mode === 'red') ? <ul id="sell-book" className="book-list">{sell_book_list}</ul> : (props.mode === 'full') ? <ul id="sell-book" className="book-list">{sell_book_list}</ul> : ''}
                
                <div id="last-traded" >
                    <span style={{width:'60%'}} >&#36;{props.orderBook.data.last_trade.price}</span>
                    <span style={{width:'20%', fontWeight:'normal'}} className="text-right">Index Price : {props.orderBook.data.spot_price}</span>
                    <span style={{width:'20%', fontWeight:'normal'}} className="text-right">Mark Price :  {props.orderBook.data.mark_price}</span>
                </div>
                {(props.mode === 'green') ? <ul id="buy-book" className="book-list">{buy_book_list}</ul> : (props.mode === 'full') ? <ul id="buy-book" className="book-list">{buy_book_list}</ul> : ''}   
            </div> 

        </div>
    )
}