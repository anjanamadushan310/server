import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function GroupList() {
  const tracks = [
    {
      title: 'Sustainable Infrastructure and Mechanical Systems',
      description:
        'Sustainable Construction Materials, Green Building Technologies, Transportation Systems, Sustainable Water Management, Climate Change, Environmental Sustainability, Sustainable Transportation, Urban Planning, Urban Drainage Systems, Water Recycling and Reuse, Energy-Efficient Systems.',
    },
    {
      title: 'Renewable Energy Systems and Smart Grid Technologies',
      description:
        'Advancements in Solar Technology, Wind Energy, Telecommunications Technologies, Smart Energy.',
    },
    {
      title: 'Sustainable Materials and Green Manufacturing Processes',
      description:
        'Biodegradable and Sustainable Polymers, Sustainable Textile Production, Processing Techniques, Material Science, Polymer Processing, Separation Processes, Recycling and Upcycling Technologies.',
    },
    {
      title: 'Digital Solutions for Sustainable Engineering',
      description:
        'AI and Machine Learning, Big Data, IoT for Smart Infrastructure Management, Simulation and Modeling Tools.',
    },
    {
      title: 'Interdisciplinary Approaches to Sustainability in Education',
      description:
        'STEM and Humanities integration, Innovative Teaching methods, Quantitative Analysis and Modeling, Ethical and Cultural Dimensions of Engineering.',
    },
  ];

  return (
    <div>
      <ListGroup>
        {tracks.map((track, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-start"
            style={{
              backgroundColor: '#f8f9fa',
              borderLeft: '5px solid #006400',
            }}
          >
            <div>
              <strong style={{ color: '#006400', fontSize: '1.2rem' }}>
                {track.title}
              </strong>
              <p className="text-muted" style={{ margin: '0.5rem 0' }}>
                {track.description}
              </p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
