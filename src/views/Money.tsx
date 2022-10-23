import { PageLayout } from 'components/PageLayout';
import React, { useState } from 'react';
import styled from 'styled-components';

import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { TagsSection } from './moneyPageStyledComponents/tagsSection';
import { NoteSection } from './moneyPageStyledComponents/noteSection';
import { NumberPadSection } from './moneyPageStyledComponents/numberPadSection';

const MyPageLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    category: '-' as ('-' | '+'),
    note: '',
    amount: '',
  })

  // typeof 可以拿到一个值的类型
  // obj: Partial<typeof selected> 表明 obj 的类型是 selected 的一部分
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }

  return (
    <MyPageLayout className="">
      <CategorySection value={selected.category} 
                       onChange={ category => onChange({category}) }/>
      <TagsSection value={selected.tagIds}
                   // {tags} 是 {tags: tags} 的缩写
                   onChange={ tagIds => onChange({tagIds}) }/>
      <NoteSection value={selected.note}
                   onChange={ note => onChange({note}) }/>
      <NumberPadSection value={selected.amount} 
                        onChange={ amount => onChange({amount})}/>
    </MyPageLayout>
  );
};

export { Money }