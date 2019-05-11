import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'

import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import MovieList from './MovieList.jsx'

import MovieDetail from './MovieDetail.jsx'

///import Switch from 'switch'

export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
       // console.log(this.props.location.pathname.split("/")[2])
    }


    render() {
        return  <Layout style={{height:"100%"}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
                mode="inline"
                defaultSelectedKeys={[this.props.location.pathname.split("/")[2]]}
                style={{ height: '100%' }}
              >
                  <Menu.Item key="in_theaters">
                    <Link to="/movie/in_theaters/1">正在热映</Link>
                  </Menu.Item>
                  <Menu.Item key="coming_soon">
                   <Link to="/movie/coming_soon/1">即将上映</Link>
                  </Menu.Item>
                  <Menu.Item key="top250">
                   <Link to="/movie/top250/1">top250</Link>
                  </Menu.Item>
              </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content style={{
            background: '#fff', padding: 10, margin: 0, minHeight: 280,
          }}
          >
          <Switch>
            <Route path="/movie/subject/:id" component={MovieDetail}></Route>
            <Route path="/movie/:type/:page" component={MovieList}></Route>
          </Switch>
           
            
          </Content>
        </Layout>
      </Layout>
    }
}