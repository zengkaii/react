import ReactDOM from './react-dom'
import React from './react'
class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    render () {
        return (
            <div>
                <h1>count: {this.state.num}</h1>
                <button onClick={() => this.onClick()}>add</button>
            </div>
        )
    }
    onClick () {
        // console.log(1111)
        this.state.num ++
        this.setState({
            num: this.state.num
        })
    }
}
ReactDOM.render(
    <div>
        Hello
        <span className='rt' onClick="console.log('zz');" style={{fontSize:20,fontWight:'bold'}}>World</span>
        <Counter/>
    </div>,
    document.getElementById('root')
)