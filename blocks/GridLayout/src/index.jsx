import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './index.scss';

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function generateLayout() {
  const data = [...Array(25).keys()];

  return data.map((item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05,
    };
  });
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function BasicGridLayout(props) {
  const [mounted] = useState(true);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
  const [compactType, setCompactType] = useState('vertical');
  const [layouts, setLayouts] = useState({ lg: props.initialLayout });

  const generateDOM = () => {
    return layouts.lg.map((l, i) => {
      return (
        <div key={i} className={l.static ? 'static' : ''}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  const onCompactTypeChange = () => {
    const newCompactType =
      compactType === 'horizontal'
        ? 'vertical'
        : 'horizontal';
    setCompactType(newCompactType);
  };

  const onLayoutChange = (layout, layouts) => {
    props.onLayoutChange(layout, layouts);
  };

  const onNewLayout = () => {
    setLayouts({ lg: generateLayout() });
  };

  console.log(currentBreakpoint);
  return (
    <IceContainer>
      <div style={styles.groupButton}>
        <Button type="normal" onClick={onCompactTypeChange}>
          Change Compaction Type
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={onNewLayout}
        >
          Generate New Layout
        </Button>
      </div>
      <ResponsiveReactGridLayout
        {...props}
        layouts={layouts}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        isResizable={false}
        // WidthProvider option
        measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </IceContainer>
  );
}

BasicGridLayout.defaultProps = {
  className: 'layout',
  rowHeight: 30,
  onLayoutChange() {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout(),
};

const styles = {
  groupButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};
