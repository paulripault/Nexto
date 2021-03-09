import React from "react";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import photo1 from "../../img/photo-9.jpg";


const test = [];

for (let i = 0; i < 10; i++) {
    test.push(<div>salut {i}</div>)
}

//{ <div>{test}</div> }

export const News = () => (

    <div className="container" id="section_news">
      <div className="main">
        <Button href="/createpost">Créer un article</Button>
      </div>
        <div className="Card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ photo1 }/>
          <Card.Body>
            <Card.Title>Titre de l'article</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, massa at auctor condimentum, 
             felis justo lacinia felis, id dictum dui nunc quis massa.  
            </Card.Text>
            <Button href="/detailledArticle" variant="primary">En Savoir Plus</Button>
          </Card.Body>
        </Card>
        </div>
    </div>
)

export default News;