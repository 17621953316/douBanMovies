import React from 'react'

import { Spin, Alert,Pagination } from 'antd'

//引入第三方包fetch jsonp相关
import fetchJSONP from 'fetch-jsonp'

import MovieItem from './MovieItem.jsx'



export default class Movielist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,//当前展示的页码 从地址栏获取
            pageSize: 14,
            total: 0,
            movieType: props.match.params.type//保存要获取的电影类型

        }
        // console.log(this.props)
    }

    componentWillMount() {
        this.loadMovieListByTypeAndPage()
    }

    //监听地址栏发生变化，
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.match.params)
        this.setState({
            isLoading: true,
            movieType: nextProps.match.params.type,
            nowPage: parseInt(nextProps.match.params.page) || 1//当前展示的页码 从地址栏获取

        }, function () {
            this.loadMovieListByTypeAndPage()
        })
    }

    loadMovieListByTypeAndPage() {
        // const data = require('../test_data/in_theaters.json')
        // setTimeout(() => {
        //     console.log(data.subjects)
        //     this.setState({
        //         isLoading: false,
        //         movies: data.subjects,
        //         total: data.total
        //     })
        // }, 3000)


        const start = this.state.pageSize * (this.state.nowPage -1)
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            this.setState({
                isLoading:false,
                movies:data.subjects,
                total:data.total
            })
        })
    }


    render() {
        return <div>
            {this.loadingRender()}

            {/* Movielist---{this.props.match.params.type}---{this.props.match.params.page} */}
        </div>
    }

    loadingRender = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                    message="加载中～～～"
                    description="正在加载电影列表，请稍后."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.movies.map(item => {
                        return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                    })}
                </div>
                <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.changePage}/>
            </div>
        }

    }

    changePage = (page)=> {
        //console.log(this.props)
        
        //window.location.href="/#/movie/"+this.state.movieType+"/"+page
        //编程式导航
        this.props.history.push("/movie/"+this.state.movieType+"/"+page)
    }


   
}