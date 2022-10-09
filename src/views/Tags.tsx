import PageLayout from '../components/PageLayout';
import React from 'react';
import { useTags } from './ts/useTags'
import styled from 'styled-components'
import { Icon } from '../components/Icon'

// 自定义标签首字母要大写
const TagList = styled.ol`
  margin: 12px;
  background: #fff;
  border-radius: 8px;

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 26px;
    padding: 7px 0;
    margin: 0 8px;
    border-bottom: 1px solid #E5E5E5;
  }

  > li:last-child {
    border-bottom: none;
  }
`

const Center = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  padding: 6px 16px;
  font-size: 14px;
  line-height: 22px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #FFAF25;
`

// tags 页面
function Tags() {
  const { tags, setTags } = useTags()
  return (
    <PageLayout>
      <TagList>{ tags.map(t => 
        <li key={t}>
          <span>{t}</span>
          <Icon name="right"></Icon>
        </li>) }
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </PageLayout>
  );
};

export { Tags }