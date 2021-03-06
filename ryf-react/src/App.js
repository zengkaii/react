import React, { Component } from 'react';
import axios from 'axios'
import { Table, Pagination, Input, Row, Button, Modal, Form, message } from 'antd'; //对react ui 阿里的antd 部分引用
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';

const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
	remove (row) {
		confirm({
			title: '是否要删除该用户？',
			okText: '是',
			cancelText: '否',
			onOk :() => {
				const _users = this.state.users.filter(data => {
					return data.id !== row.id
				});
				this.setState({
					users: _users
				})
			}
		})
	}
	columns = [
		{
			dataIndex: 'username',
			title: '用户'
		},
		{
			dataIndex: 'age',
			title: '年龄'
		},
		{
			dataIndex: 'address',
			title: '地址'
		},
		{
			dataIndex: 'action',
			title: '操作',
			width: 200,
			render: (text, row) => {
				return (
					<div>
						<Button onClick={() => {this.modal('edit', row)}}>编辑</Button>
						<Button type="danger" style={{marginLeft: 10}} onClick={() => this.remove(row)}>删除</Button>
					</div>
				)
			}
		}

	]
    state= {
		type:'',
		modalLabel:'',
		visible: false,
		users: [
			{
				username: 'zk',
				age: 18,
				address: '深圳',
				id: 1
			},
			{
				username: 'zk',
				age: 18,
				address: '杭州',
				id: 2
			},
			{
				username: 'zk',
				age: 18,
				address: '上海',
				id: 3
			}
	]
    }
    handleOk () {
		// console.log(type)
		this.props.form.validateFieldsAndScroll((err, values) => {
			let newusername = values.username;
			let newage = values.age;
			let newaddress = values.address
			let users = this.state.users;
			if(this.state.type === 'add') {
				if (!err) {

					let getid = this.state.users[this.state.users.length-1].id;
					// console.log(getid)
					let newid = getid +1
					// console.log(newid)
					console.log(users)
					users.push({
						username:newusername,
						age:newage,
						address:newaddress,
						id: newid
					})
	
					let data = {
						username: values.username,
						age: values.age,
						address: values.address
					}
					console.log(data)
					axios.post('http://127.0.0.1:3006/user',data)
					.then(msg => {
						console.log(msg);
						this.setState({
							visible: false,
							users:users
		
						});
						message.success('添加成功')
					})
				}
			} else if (this.state.type === 'edit') {
				console.log('edit')
				// console.log(users)
				this.state.users.forEach((item) => {
					if(item.id === this.state.editRow.id) {
						item = Object.assign(item, values)
					}
				})
				this.setState({
					visible:false
				})
			}
			
		})
	}
    modal (type, row) {
		// console.log(row);
        this.setState({
            visible: true
        }, () => {
			this.props.form.resetFields();
			if (type === 'add') {
				this.setState({
					modalLabel:'添加用户',
					type:type
				})
			} else if(type === 'edit'){

			this.props.form.setFieldsValue({
				username: row.username,
				age: row.age,
				address: row.address,
				// id: row.id
			})
			// console.log(row.id)
			this.setState({
				modalLabel:'编辑用户',
				type:type,
				editRow:row
			})
		}
			// console.log(this.modalLabel);
		})
	}
	serachUser (event) {
		console.log('search')
		axios.get('http://localhost:3006/users')
		.then(data => {
			console.log(data)
		})
	}
    render() {
		const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4}
            },
            wrapperCol: {
                xs: {span: 24},
                xm: {span: 16}
            }
        }
        return (
            <div className="App">
			    <header className="App-header">
          			<img src={logo} className="App-logo" alt="logo" />
          			<h1 className="App-title">Welcome to React</h1>
       			 </header>
                <Row style={{marginTop:50}}>
                    <Search style={{width: 300}} onChange={this.serachUser.bind(this)} />
                    <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')} >添加用户</Button>
                </Row>
				<Row style={{paddingTop: 20}}>
					<Table dataSource={this.state.users} columns={this.columns} rowKey={row => row.id} bordered pagination={false}/>
				</Row>
                <Modal title={this.state.modalLabel} visible={this.state.visible} 
                onOk={() => this.handleOk()}
                onCancel={() => this.setState({visible: false})}>
                <Form>
                    <FormItem label="用户" {...formItemLayout}> 
					{
						getFieldDecorator('username', {
							rules: [{required:true, message: 'Please input your username!'}]
						})(<Input placeholder="UserName" />)
					} 
                    </FormItem>
					<FormItem label="年龄" {...formItemLayout}>
					{
						getFieldDecorator(
							'age', {rules: [{required: true,message: 'Please input your age'}]}
						)(<Input placeholder="age"/>)
					}
					</FormItem>
					<FormItem label="地址" {...formItemLayout}>
					{
						getFieldDecorator(
							'address', {rules: [{required: true,message: 'Please input your address'}]}
						)(<Input placeholder="address"/>)
					}
					</FormItem>
                </Form>
                </Modal>
            </div>
        );
    }
}


export default Form.create()(App);
