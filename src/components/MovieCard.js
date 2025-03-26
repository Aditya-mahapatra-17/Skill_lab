import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={movie.image} alt={movie.name} />
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    <strong>Genre:</strong> {movie.genre} <br />
                    <strong>Release:</strong> {movie.release} <br />
                    <strong>Rating:</strong> ⭐ {movie.rating}
                </Card.Text>
                <Button variant="primary">Book Now</Button>{' '}
                <Button variant="secondary">Watch Trailer</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
