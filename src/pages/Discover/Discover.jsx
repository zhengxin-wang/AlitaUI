import Champion from '@/components/Icons/Champion';
import Fire from '@/components/Icons/Fire';
import Star from '@/components/Icons/Star';
import StickyTabs from '../../components/StickyTabs';
import PromptList from '../PromptList/PromptList';

export default function Discover() {

  const tabs = [{
    label: 'Top',
    icon: <Champion />,
    content:  <PromptList/>
  }, {
    label: 'Latest',
    icon: <Fire />,
    content:  <div>Latest</div>
  }, {
    label: 'My liked',
    icon: <Star />,
    content:  <div>My liked</div>
  }]

  return (
    <StickyTabs tabs={tabs} />
  );
}