import ReactDOM from './react-dom'
import React from './react'
class Counter extends React.Component {
    render () {
        return (
            <div>Counter</div>
        )
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