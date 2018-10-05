import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './NewsPage.css';


class NewsPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            news: [],
            fillerPic: '../../Assets/news.jpg'
        }

        this.handleNews = this.handleNews.bind(this);
    }

    componentDidMount(){
        this.handleNews()
    }

    handleNews () {

        let {REACT_APP_API_KEY_NEWS} = process.env;

        axios.get(`https://newsapi.org/v2/everything?q=yauco&sortBy=publishedAt&apiKey=${REACT_APP_API_KEY_NEWS}`).then(res => {
            this.setState({
                news: res.data.articles
            })
            
        })
    }


    render() {

        const superNews = this.state.news.map((el, i) => {
            return(
            <div className='newsBox' key={el + i}>
                <div style={{height: 'auto', width: 'auto', margin: 'auto', padding: '10px'}}>
                   <img src={el.urlToImage === null? this.fillerPic: el.urlToImage} alt="" className='newsImage'/>
                </div>

                <div>
                    <h2 style={{textDecoration: 'underline', padding: '10px', marginTop: '0px', marginBottom: '0px'}}><a href={el.url}>{el.title}</a></h2>
                    <div>
                        <p style={{padding: '10px', marginTop: '0px'}}>{el.description}</p>
                    </div>
                </div>
            </div>
            )
    })
   


        return (
            <div className='bodyBack'>
                <NavBar />
                <h1 style={{fontFamily: 'Alegreya Sans SC', fontSize: '50px'}}>NEWS FROM PARADISE</h1>
                <h2 style={{fontFamily: 'Alegreya Sans SC'}}>The most recent and important news about Yauco</h2>

                <div className='allNews'>
                    {superNews}
                </div>

                <Footer />
            </div>
        )
    }
    
}

export default NewsPage;