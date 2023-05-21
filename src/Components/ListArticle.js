import React from 'react'
import CardArticle from './CardArticle'

function ListArticle(props){
    if(!props){
        return <div><h1>Pas d'article</h1></div>
    }
    else{
        const articlesListing = props.articles.map((article)=> <CardArticle name={article.name} price={article.price}/>)
        
        return (
            <div>
                {articlesListing}
            </div>
        )
    }
    
}

export default ListArticle