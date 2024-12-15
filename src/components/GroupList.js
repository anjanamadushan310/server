import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function GroupList() {
    const tracks = [
        {
          title: 'Machine Learning & AI',
          description:
            'Explore the latest trends in AI, including deep learning, neural networks, and natural language processing.',
        },
        {
          title: 'Cloud Computing',
          description:
            'Learn about cloud infrastructure, services, and scaling applications in the cloud.',
        },
        {
          title: 'Cybersecurity',
          description:
            'A deep dive into securing networks, ethical hacking, and preventing cyber threats.',
        },
        {
          title: 'Blockchain & Cryptocurrency',
          description:
            'Understand the fundamentals of blockchain technology, cryptocurrencies, and decentralized applications.',
        },
        {
          title: 'Web Development',
          description:
            'Master front-end and back-end web development, including frameworks like React, Angular, and Node.js.',
        },
      ];
  return (
    <div>
       <ListGroup>
      {tracks.map((track, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between">
          <div>
            <strong>{track.title}</strong>
            <p>{track.description}</p>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </div>
  )
}
