import React from 'react';
import { Calendar } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function EventCalendar() {
  function dateCellRender(calendarDate) {
    return calendarDate.week() > 5 ? (
      <div>
        <span className={styles.calendarDate} />
        {calendarDate.date()}
      </div>
    ) : (
      <div>{calendarDate.date()}</div>
    );
  }

  return (
    <IceContainer title="待办事项">
      <Calendar dateCellRender={dateCellRender} />
    </IceContainer>
  );
}
