import PageLayout from '../components/PageLayout';
import React from 'react';
import { useTags } from './ts/useTags'

// tags 页面
function Tags() {
  const { tags, setTags } = useTags()
  return (
    <PageLayout>
      <h2>Tags</h2>
    </PageLayout>
  );
};

export { Tags }