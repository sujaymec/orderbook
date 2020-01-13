import React,{Component} from 'react'
import OrderBook from './OrderBook'
import axios from 'axios'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            orderBookLoaded: false
        }
    }


    getData(){
        setInterval(() => {
            axios.get("https://api.delta.exchange/orderbook/27/l2")
            .then(response => {
            this.setState({
                order_book: response,
                orderBookLoaded: true
            })
            })
        }, 1000)

    }



    componentDidMount(){
        this.getData()
    }

    render(){
        if(!this.state.orderBookLoaded){
            return (<div>data not here yet</div>)
        }
        return(
            <React.Fragment>
                <OrderBook orderBook={this.state.order_book} />
            </React.Fragment>
        )
    }
}