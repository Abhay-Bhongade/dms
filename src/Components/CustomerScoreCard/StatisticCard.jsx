import React from 'react';
import Card from 'react-bootstrap/Card';

const StatisticCard = ({ title, value, icon, onClick }) => {
  return (
    <Card className="mb-3" onClick={onClick} style={{ cursor: 'pointer' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {icon && <span className="me-2">{icon}</span>}
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatisticCard;
