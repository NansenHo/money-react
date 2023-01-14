import { PageLayout } from 'components/PageLayout';
import React, { useState } from 'react';
import styled from 'styled-components';

import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { TagsSection } from './moneyPageStyledComponents/tagsSection';
import { NoteSection } from './moneyPageStyledComponents/noteSection';
import { NumberPadSection } from './moneyPageStyledComponents/numberPadSection';
import { useRecord } from 'hooks/useRecord'

const MyPageLayout = styled(PageLayout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  // console.log('Money 执行了')
  const default_values = {
    tagIds: [] as number[],
    category: '-' as ('-' | '+'),
    note: '',
    amount: '',
  }
  const [selected, setSelected] = useState(default_values)

  // typeof 可以拿到一个值的类型
  // obj: Partial<typeof selected> 表明 obj 的类型是 selected 的一部分
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }
  const { addRecord } = useRecord()
  // console.log('records')
  // console.log(recods)
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(default_values)
    }
    // 在这里打印不出最新的 records，why?
    // console.log(records)
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
                        onChange={ amount => onChange({amount}) }
                        onOK={ submit }/>
    </MyPageLayout>
  );
};

export { Money }