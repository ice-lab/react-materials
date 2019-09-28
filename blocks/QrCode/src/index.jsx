 import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select, NumberPicker, Grid, Input } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import QRCode from 'qrcode.react';
import ColorPicker from './ColorPicker';
import styles from './index.module.scss'

const { Row, Col } = Grid;
const { Option } = Select;

export default function QrCode() {
  const [value, setValue] = useState({
    url: 'https://alibaba.github.io/ice/',
    size: 180,
    fgColor: '#000000',
    bgColor: '#F7F1F1',
    level: 'L',
    renderAs: 'svg',
  });

  const formChange = (newValue) => {
    setValue({...newValue});
  };

  const handleChangeComplete = (color, type) => {
    setValue(Object.assign({}, value, { [type]: color.hex }));
  };

  return (
    <IceContainer title="二维码生成器">
      <IceFormBinderWrapper value={value} onChange={formChange}>
        <Row className={styles.formRow}>
          <Col l="2" className={styles.label}>
            二维码大小
          </Col>
          <Col l="20">
            <IceFormBinder type="number" name="size">
              <NumberPicker
                step={5}
                min={150}
                max={300}
              />
            </IceFormBinder>
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col l="2" className={styles.label}>
            背景色
          </Col>
          <Col l="20">
            <ColorPicker
              defaultColor={value.bgColor}
              onChange={(color) => {
                handleChangeComplete(color, 'bgColor');
              }}
            />
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col l="2" className={styles.label}>
            前景色
          </Col>
          <Col l="20">
            <ColorPicker
              defaultColor={value.fgColor}
              onChange={(color) => {
                handleChangeComplete(color, 'fgColor');
              }}
            />
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col l="2" className={styles.label}>
            图案样式
          </Col>
          <Col l="20">
            <IceFormBinder name="level">
              <Select defaultValue={value.level} style={{ width: '300px' }}>
                <Option value="L">L</Option>
                <Option value="M">M</Option>
                <Option value="Q">Q</Option>
                <Option value="H">H</Option>
              </Select>
            </IceFormBinder>
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col l="2" className={styles.label}>
            二维码地址
          </Col>
          <Col l="20">
            <IceFormBinder name="url">
              <Input.TextArea
                style={{ width: '300px' }}
                placeholder="https://alibaba.github.io/ice/"
              />
            </IceFormBinder>
          </Col>
        </Row>
      </IceFormBinderWrapper>

      <Row>
        <Col l="2" className={styles.label}>
          生成二维码
        </Col>
        <Col l="20">
          <QRCode
            value={value.url}
            size={value.size}
            fgColor={value.fgColor}
            bgColor={value.bgColor}
            level={value.level}
          />
        </Col>
      </Row>
    </IceContainer>
  );
}
