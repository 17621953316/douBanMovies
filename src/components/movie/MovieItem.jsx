import React from 'react'

import { Rate } from 'antd'

import styles from '../../css/movie_item.scss'
export default class MovieItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        //console.log(props)
    }

    render() {
        return <div className={styles.box} onClick={this.getMovieDetail}>
            <img src={this.props.images.small.replace("img3","img1")}></img>
            <div>
                <p>电影名称：{this.props.title}</p>
                <p>上映年份：{this.props.year}</p>
                <p>电影类型：{this.props.genres.join(",")}</p>
                <Rate disabled defaultValue={this.props.rating.average/2}/>
            </div>
        
    </div>
    }

    getMovieDetail =() =>{
       // console.log(this.props)
        this.props.history.push("/movie/subject"+"/"+this.props.id)
      }
}