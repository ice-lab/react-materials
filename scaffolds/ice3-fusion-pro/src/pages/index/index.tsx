import { definePageConfig } from 'ice';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FusionCardBarChart from './components/FusionCardBarChart';
import FusionCardAreaChart from './components/FusionCardAreaChart';
import FusionCardTypebarChart from './components/FusionCardTypebarChart';
import FusionCardRankChart from './components/FusionCardRankChart';
import FusionCardPieChart from './components/FusionCardPieChart';
import FusionCardGroupBarChart from './components/FusionCardGroupBarChart';
import FusionCardLineChart from './components/FusionCardLineChart';

const { Cell } = ResponsiveGrid;

export default function Dashboard() {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="分析页面"
          breadcrumbs={[{ name: 'Dashboard' }, { name: '分析页面' }]}
        />
      </Cell>

      <Cell colSpan={3}>
        <FusionCardBarChart />
      </Cell>

      <Cell colSpan={3}>
        <FusionCardAreaChart />
      </Cell>

      <Cell colSpan={3}>
        <FusionCardTypebarChart />
      </Cell>

      <Cell colSpan={3}>
        <FusionCardLineChart />
      </Cell>

      <Cell colSpan={12}>
        <FusionCardRankChart />
      </Cell>

      <Cell colSpan={4}>
        <FusionCardPieChart />
      </Cell>

      <Cell colSpan={8}>
        <FusionCardGroupBarChart />
      </Cell>
    </ResponsiveGrid>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: '工作台',
  };
});
