import PageLayout from '../components/PageLayout';
import React from 'react';
import {Link} from 'react-router-dom'
import { useTags } from './ts/useTags'
import styled from 'styled-components'
import { Icon } from '../components/Icon'

// 自定义标签首字母要大写
const TagList = styled.ol`
  margin: 12px;
  background: #fff;
  border-radius: 8px;

  > li {
    font-size: 16px;
    line-height: 26px;
    margin: 0 8px;
    border-bottom: 1px solid #E5E5E5;

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 0;
      color: #262626;

      > span {
        width: calc(100% - 8px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      } 
    }
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
  const { tags } = useTags()
  return (
    <PageLayout>
      <TagList>{tags.map(t => 
        <li key={t.id}>
          <Link to={`/tag/${t.name}`}>
            <span>{t.name}</span>
            <Icon name="right"></Icon>
          </Link>
        </li>)}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </PageLayout>
  );
};

export { Tags }