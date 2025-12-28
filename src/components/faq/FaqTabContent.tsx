import TabContent from '../ui/tab/TabContent';
import GeneralTab from './GeneralTab';
import TechnicalTab from './TechnicalTab';
import ProjectsTab from './ProjectsTab';

const data = [
  {
    id: 1,
    tabTitle: 'General',
    tabContent: <GeneralTab />,
  },
  {
    id: 2,
    tabTitle: 'Technical',
    tabContent: <TechnicalTab />,
  },
  {
    id: 3,
    tabTitle: 'Projects',
    tabContent: <ProjectsTab />,
  },
];

const FaqTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
