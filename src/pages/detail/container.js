import { connect } from 'react-redux'
import Detail from './component'
//如果对象比较多可以用*  import * as actionCreator from './store/actionCreator'
import { changeDetail } from './store/actionCreator'


//mapStateToProps 将 store 中的数据作为 props 绑定到组件上 
const mapStateToProps = state =>({
	title : state.detail.title,
	date : state.detail.date,
	content: state.detail.content
})
const mapDispath = dispatch => ({
	changeDetail(data) {
		const action = changeDetail(data)
		dispatch(action)
	}
})

export default connect(mapStateToProps, mapDispath)(Detail)

