import PageLayout from '../components/PageLayout';
import React from 'react';
import styled from 'styled-components';

import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { TagsSection } from './moneyPageStyledComponents/tagsSection';
import { NoteSection } from './moneyPageStyledComponents/noteSection';
import { NumberPadSection } from './moneyPageStyledComponents/numberPadSection';

const MyPageLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
`

// 记账页面
function Money() {
  return (
    <MyPageLayout className="">
      <CategorySection/>
      <TagsSection/>
      <NoteSection/>
      <NumberPadSection/>
    </MyPageLayout>
  );
};

export { Money }