import React, { Component } from 'react';
import {db, loadCollection} from '../database'
import Note from './Note';
class Notes extends Component{
    // state 相当于vue中的data
    constructor (props) {
        super(props)
        this.getInitialData()
    }
    getInitialData () {
        loadCollection('notes')
        .then(collection => {
            // console.log(collection)
            // collection.insert([
            //     {
            //         text:'看我'
            //     },
            //     {
            //         text:'看你'
            //     }
            // ]);
            // db.saveDatabase();
            const entities = collection.chain()
            .find()
            .simplesort('$loki', 'isdesc')
            .data()
            // console.log(entities)
            this.setState({
                entities
            })
        })
    }
    state = {
        entities: []
    }
    createEntry () {
        // console.log(this)
        loadCollection('notes')
        .then((collection) => {
            const entity = collection.insert({
                text: ''
            })
            db.saveDatabase();
            this.setState((preState) => {
                const _entities = preState.entities;
                _entities.unshift(entity);
                return {
                    entities: _entities
                }
            })
        })
    }
    destoryEntity (entity) {
        const _entities = this.state.entities.filter((_entity) => {
            return _entity.$loki !== entity.$loki
        })
        this.setState({
            entities: _entities
        })
        loadCollection('notes')
        .then((collection) => {
            collection.remove(entity)
            db.saveDatabase()
        })
    }
    render () {
        // react 独有的JSX 模板引擎
        // 在js 里直接写html
        // react className
        // html -> js node 是会编译成为js的 ， class是一个关键字
        // key值的选择 在删除的时候  使用entity.$loki
        const entities = this.state.entities;
        const noteItems = entities.map((entity,index) => {
            return <Note key= {entity.$loki} entity = {entity} destoryEntity = {this.destoryEntity.bind(this)}/>
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