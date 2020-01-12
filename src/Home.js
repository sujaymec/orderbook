import React,{Component} from 'react'
import Child from './Child'
import axios from 'axios'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            orderBookLoaded: false
        }
    }


    getData(){
        axios.get("https://api.delta.exchange/orderbook/27/l2")
        .then(response => {
          this.setState({
              order_book: response,
              orderBookLoaded: true
          })
        })
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
                <Child orderBook={this.state.order_book} />
            </React.Fragment>
        )
    }
}