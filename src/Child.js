import React from 'react'

export default function Child(props){
    console.log(props.orderBook.data)
    let list = props.orderBook.data.buy_book.map((value, index) => 
        (<li key={index}>{value.price}</li>)
    )
    let list2 = props.orderBook.data.sell_book.map((value, index) => 
        (<li key={index}>{value.price}</li>)
    )
    return(
        <div> <ul>{list}</ul> random stuff <ul>{list2}</ul> </div>
    )
}