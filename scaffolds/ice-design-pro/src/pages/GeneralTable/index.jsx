import React, { useState, useEffect } from 'react';
import { Grid } from '@alifd/next';
import { injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import ContainerTitle from './components/ContainerTitle';
import ContractTable from './components/ContractTable';
import SearchFilter from './components/SearchFilter';
import SearchHistory from './components/SearchHistory';

const { Row, Col } = Grid;

const mockData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      id: `00000${index}`,
      name: '聘用合同',
      ourCompany: '杭州xxx科技公司',
      amount: '999,999',
      currency: 'CNY',
      state: '签约中',
    };
  });
};

function GeneralTable(props) {
  const {
    intl: { formatMessage },
  } = props;

  const [dataSource, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function mockApi() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData());
      }, 600);
    });
  }

  async function fetchData() {
    await setLoading(true);
    mockApi().then((data) => {
      setData(data);
      setLoading(false);
    });
  }

  return (
    <Row wrap>
      <Col l="18">
        <IceContainer style={{ padding: '0' }}>
          <ContainerTitle
            title={formatMessage({ id: 'app.general.table.title' })}
          />
          <div style={{ padding: '20px' }}>
            <SearchFilter fetchData={fetchData} />
            <ContractTable
              isLoading={isLoading}
              dataSource={dataSource}
              fetchData={fetchData}
            />
          </div>
        </IceContainer>
      </Col>
      <Col l="6">
        <SearchHistory fetchData={fetchData} />
      </Col>
    </Row>
  );
}

export default injectIntl(GeneralTable);
