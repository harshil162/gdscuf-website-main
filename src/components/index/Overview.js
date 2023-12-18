import React from 'react'
import Col from 'react-bootstrap/Col'

const Overview = ({ header, body, icon }) => (
  <Col xs={12} md={4}>
    <div className="feature-card">
      <div className="feature-card__body">
        <i className={icon} aria-hidden="true" style={{paddingBottom: 20}}></i>
        <h4 className="feature-title">{header}</h4>
        <p>{body}</p>
      </div>
    </div>
  </Col>
)

export default Overview
