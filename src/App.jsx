import React from 'react'

//引入使用ant design 的组件
import {
  Layout, Menu, Breadcrumb, Icon
} from 'antd'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

//引入路由相关组件
import {HashRouter,Route,Link} from 'react-router-dom'

//引入组件
import Home from './components/home/Home.jsx'
import Movie from './components/movie/Movie.jsx'
import About from './components/about/About.jsx'

//导入模块化的样式
import styles from '../src/css/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  componentWillMount() {
    console.log()
    } 

  render() {
    return <HashRouter>
     <Layout style={{height:"100%"}}>
        <Header className="header">
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split("/")[1]]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to="/movie/in_theaters/1">电影</Link>
            </Menu.Item>
            <Menu.Item key="about">
             <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>
       
        <Content style={{ padding: '0 20px' ,zIndex:"1"}}>
          <div style={{ background: '#fff', padding: 10, minHeight: 280 ,height: "100%"}}>
              <Route path="/home" component={Home}></Route>
             <Route path="/movie" component={Movie}></Route>
             <Route path="/about" component={About}></Route>
          </div>
        </Content>
        
        <Footer style={{ textAlign: 'center' }}>
          豆瓣电影 ©2019 最好看的电影
        </Footer>
      </Layout>
    </HashRouter>
    
    
  }
}