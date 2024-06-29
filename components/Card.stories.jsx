import Card from './card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    onPress: { action: 'onPress' },
  },
};

const MockedData = {
  name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  date: 'YYYY-MM-DD ~ YYYY-MM-DD',
  location: 'Pyeongchang, Gangwon-do, Korea',
  id: 1
}

export const Default = {
  args: {
    ...MockedData
  },
};

export const Focused = {
  args: {
    ...MockedData,
    focused: true,
  },
};