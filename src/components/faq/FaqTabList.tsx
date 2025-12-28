import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          General
        </Tab>
        <Tab index={1} variant="desktop">
          Technical
        </Tab>
        <Tab index={2} variant="desktop">
          Projects
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          General
        </Tab>
        <Tab index={1} variant="mobile">
          Technical
        </Tab>
        <Tab index={2} variant="mobile">
          Projects
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
