import React from 'react'

import { Button, Radio, Icon } from 'antd'

import fetchJSONP from 'fetch-jsonp'



export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
       console.log(props)
    }

    componentDidMount() {
        fetchJSONP('https://api.douban.com/v2/movie/subject/'+this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            this.setState({
                tit:data.title,
                sum:data.summary,
                im:data.images.large
            })
        })
    }


    render() {
        return <div>
                    <Button type="primary" onClick={this.goList}>
                    <Icon type="left" />Backward
                </Button>
                <div style={{textAlign:"center"}}>
                    <h2>{this.state.tit}</h2>
                    <img src={this.state.im}></img>
                    <p>{this.state.sum}</p>
                </div>
                </div>
    }

    goList = () => {
        this.props.history.go(-1)
    }
}