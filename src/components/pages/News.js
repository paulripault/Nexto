import React from "react";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const News = () => (

    <div className="container" id="section_news">

      <div className="main">
        <h2> Articles </h2>
        <Button href="/createpost">Créer un article</Button>
      </div>
      <div className="Card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="test.jpg"/>
          <Card.Body>
            <Card.Title>Titre de l'article</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, massa at auctor condimentum, felis justo lacinia felis, id dictum dui nunc quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec lorem ipsum. Nam ultricies massa in nisi ullamcorper, sed bibendum lorem porttitor. 
            </Card.Text>
            <Button href="/detailledArticle" variant="primary">En Savoir Plus</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
)

export default News;