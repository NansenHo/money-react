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
      <CategorySection>
        <ul>
          <li className='selected'>收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <TagsSection/>
      <NoteSection/>
      <NumberPadSection>
        <div className='output'>100</div>
        <div className='pad clearfix'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='number-pad-ok-button'>OK</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyPageLayout>
  );
};

export { Money }