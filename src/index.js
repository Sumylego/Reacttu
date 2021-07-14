import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';

import './index.css';

ReactDOM.render(

    <>
    <h1 className="heading">list of top 5 netflix series in 2021</h1>
    <Card imgsrc="https://d1sygdf8atpyev.cloudfront.net/posters/57327/the-witcher.jpeg" 
                       
                  title ="Netflix original series" sname="DARK"
                
                  links="https://www.netflix.com/in/title/80189685"/>
    
    <Card imgsrc="https://www.thedad.com/wp-content/uploads/2020/06/cursed.jpg"               
             title="Netflix original series"
             sname="CURSED"
             links="https://www.netflix.com/in/title/80199393"/>

    </>,
    document.getElementById('root')

);