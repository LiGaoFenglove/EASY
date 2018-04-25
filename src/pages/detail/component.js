import React, { Component } from 'react'
import { Card } from 'antd';

export default class Detail extends Component {
	render() {
		// console.log(this.props)
		// return <div>Detail ---- {this.props.match.params.id}</div>
		const title = this.props.title + '(' + this.props.date + ')'
		console.log(this.props)
		return(
				// title 是上面定义的
				//dangerouslySetInnerHTML 转义作用
				<Card title={title} style={{marginTop:'15px'}}>
				   		<div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
				  </Card>
			)
	}
	componentDidMount() {//match.params  router4.0  里面获取路由ID通过match.params
		//changeDetail 在container下
		fetch('/api/detail.json?id=' + this.props.match.params.id)
		.then(res => res.json())
		.then(res => {
				if (res && res.ret && res.data) {}
				this.props.changeDetail(res.data)
			})
	}
}