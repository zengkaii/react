import React, { Component } from 'react';
import Note from './Note';
class Notes extends Component{
    // state 相当于vue中的data
    state = {
        entities: [
            '我很帅',
            '我真的很帅'
        ]
    }
    createEntry () {
        console.log(this)
    }
    destoryEntity (entity) {
        console.log(entity)
    }
    render () {
        // react 独有的JSX 模板引擎
        // 在js 里直接写html
        // react className
        // html -> js node 是会编译成为js的 ， class是一个关键字
        const entities = this.state.entities;
        const noteItems = entities.map((entity,index) => {
            return <Note key= {index} entity = {entity} destoryEntity = {this.destoryEntity}/>
        })
        return (
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon"></i>
                    Notes App _ React.js
                </h4>
                <button className="ui right floated basic violet button" onClick={this.createEntry.bind(this)}>添加笔记</button>
                <div className="ui divided items">
                {!this.state.entities.length && <span>还没有笔记，请先添加</span>}
                {noteItems}
                </div>
            </div>
        )
    }
}
export default Notes