import React from 'react';
import { Grid } from '@alifd/next';
import EventCalendar from './components/EventCalendar';
import NewEvent from './components/NewEvent';
import EventList from './components/EventList';

const { Row, Col } = Grid;

export default function Events() {
  return (
    <Row gutter="20" wrap>
      <Col l="17">
        <EventCalendar />
      </Col>
      <Col l="7">
        <NewEvent />
        <EventList />
      </Col>
    </Row>
  );
}
