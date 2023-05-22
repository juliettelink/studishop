
import {CardArticle} from './CardArticle'
import {Grid} from '@mui/material';


function ListArticles(props){
    if(!props){
        return <div><h1>Pas d'article</h1></div>
    }
    else{
        const articlesListing = props.articles.map((article)=> {
        if (article.props) return (
            <Grid item xs={12} md={3}>
                <CardArticle name={article.name} price={article.price}/>
            </Grid>
        )
        else return null
        
    })
        return (
            <Grid container spacing={2}>
                {articlesListing}
            </Grid>
        )
    }
    
}

export default ListArticles