import React, { useState } from 'react';
import { Input, Button, Grid, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';

const { Row, Col } = Grid;
const Toast = Message;

export default function PrivateMessageForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const titleChange = (title) => {
    setTitle(title);
  };

  const messageChange = (message) => {
    setMessage(message);
  };

  const sendMessage = () => {
    if (title && message) {
      Toast.success('发送成功');
      return;
    }
    Toast.error('您还有未填项');
  };

  return (
    <div className="private-message-form">
      <IceContainer title="私有消息">
        <Row style={{marginBottom: '20px'}}>
          <Col xxs="5" s="5" l="2">
            标题
          </Col>
          <Col s="14" l="7">
            <Input
              style={{ width: '100%' }}
              value={title}
              onChange={titleChange}
              placeholder="请输入标题"
            />
          </Col>
        </Row>

        <Row style={{marginBottom: '20px'}}>
          <Col xxs="5" s="5" l="2">
            消息内容
          </Col>
          <Col s="14" l="7">
            <Input.TextArea
              style={{ width: '100%' }}
              value={message}
              onChange={messageChange}
              placeholder="请输入内容" />
          </Col>
        </Row>

        <Row>
          <Col xxs="5" s="5" l="2">
            {' '}
          </Col>
          <Col>
            <Button type="primary" onClick={sendMessage}>
              发送消息
            </Button>
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
