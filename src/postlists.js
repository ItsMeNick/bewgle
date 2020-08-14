import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import './App.css';
import data from './data.json'
import 'react-bootstrap';


class PostList extends Component {
    
    render(){
        return(
            <div className="App-header">
                {data.map((detail, index) => {
                    return <div>
                        <img src={detail["cover-image"]} alt={detail.name}></img>
                        <h1>{detail.name}</h1>
                        <h2>Category:[{detail.category[0]} , {detail.category[1]} , {detail.category[2]}]</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                            <th>Rating</th>
                            <th>Votes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>{detail.review_rating.votes[4].rating} </td>
                            <td>{detail.review_rating.votes[4].votes}</td>
                            </tr>
                            <tr>
                            <td> {detail.review_rating.votes[2].rating} </td>
                            <td>{detail.review_rating.votes[2].votes}</td>
                            </tr>
                            <tr>
                            <td>{detail.review_rating.votes[3].rating}</td>
                            <td>{detail.review_rating.votes[3].votes}</td>
                            </tr>
                            <tr>
                            <td>{detail.review_rating.votes[0].rating}</td>
                            <td>{detail.review_rating.votes[0].votes}</td>
                            </tr>
                            <tr>
                            <td>{detail.review_rating.votes[1].rating}</td>
                            <td>{detail.review_rating.votes[1].votes}</td>
                            </tr>
                            </tbody>
                        </Table>
                        <h2>Total-Votes : {detail.review_rating.total}</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                            <th>Feature</th>
                            <th>Rating</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Place </td>
                            <td>{detail.feature_rating.place}</td>
                            </tr>
                            <tr>
                            <td> Food </td>
                            <td>{detail.feature_rating.food}</td>
                            </tr>
                            <tr>
                            <td>Service</td>
                            <td>{detail.feature_rating.service}</td>
                            </tr>
                            <tr>
                            <td>Staff</td>
                            <td>{detail.feature_rating.staff}</td>
                            </tr>
                            <tr>
                            <td>Breakfast</td>
                            <td>{detail.feature_rating.breakfast}</td>
                            </tr>
                            </tbody>
                        </Table>

                        <address>Location:</address>
                        <address>{detail.area}, {detail.city} </address>
                    </div>
                })}
            </div>
        )
    }
}
export default PostList;