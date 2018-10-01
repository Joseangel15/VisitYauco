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
        }

        this.handleNews = this.handleNews.bind(this);
    }

    componentDidMount(){
        this.handleNews()
    }

    handleNews () {
        axios.get('https://newsapi.org/v2/everything?q=yauco&sortBy=publishedAt&apiKey=2c9c5233364a428eab504039ade63d34').then(res => {
            this.setState({
                news: res.data.articles
            })
            console.log(this.state.news)
        })
    }


    render() {

        const superNews = this.state.news.map((el, i) => {
            return(
            <div className='newsBox' key={el + i}>
                <div style={{height: 'auto', width: 'auto', margin: 'auto', padding: '10px'}}>
                   <img src={el.urlToImage} alt="" className='newsImage'/>
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
    console.log(superNews)


        return (
            <div>
                <NavBar />
                <h1>News From Paradise</h1>

                <div className='allNews'>
                    {superNews}
                </div>

                <Footer />
            </div>
        )
    }
    
}

export default NewsPage;