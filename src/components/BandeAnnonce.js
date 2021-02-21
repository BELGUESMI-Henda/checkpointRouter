import React from 'react'
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function BandeAnnonce({ match, movieList }) {
    const movie = movieList.find(el => el.title === match.params.id)
    return (
        <div className="container mb-2">
         <div className="justify-content-center container sticky-top" style={{ height: "75px" }}>
             <Link to='/' style={{ textDecoration: "none" }}>
                <Button className="btn btn-success btn-sm "  >
                    Home 
                </Button>
             </Link>
         </div>
             <div>
                <div>
                    <iframe title={movie.title} width="100%" height="400" src={movie.trailerLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <Card className="bg-dark text-white">

                    <Card.Body>
                        <Card.Text>
                            {movie.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={movie.posterUrl} />
                </Card>

            </div>
            <div className="justify-content-center " style={{ height: "75px" }}>
            </div>
        </div >
    )
}

export default BandeAnnonce