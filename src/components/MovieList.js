import React from 'react';
import { Table, Button } from 'react-bootstrap';

const movies = [
    { id: 1, name: 'Avengers', genre: 'Action', release: '2019', rating: '4.5', price: '$10' },
    { id: 2, name: 'Inception', genre: 'Sci-Fi', release: '2010', rating: '4.8', price: '$12' }
];

const MovieList = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Movie Name</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Ratings</th>
                    <th>Ticket Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                    <tr key={movie.id}>
                        <td>{movie.name}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.release}</td>
                        <td>{movie.rating}</td>
                        <td>{movie.price}</td>
                        <td>
                            <Button variant="primary">Book Now</Button>
                            <Button variant="secondary" className="ms-2">Watch Trailer</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MovieList;
