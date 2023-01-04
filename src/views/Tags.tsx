import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useTags } from 'lib/useTags'
import { PageLayout } from 'components/PageLayout'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Center } from 'components/Center'

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

// tags 页面
function Tags() {
  const { tags, addTags } = useTags()
  return (
    <PageLayout>
      <TagList>{tags.map(t => 
        <li key={t.id}>
          <Link to={`/tags/${t.id}`}>
            <span>{t.id}: {t.name}</span>
            <Icon name="right"></Icon>
          </Link>
        </li>)}
      </TagList>
      <Center>
        <Button onClick={addTags}>新增标签</Button>
      </Center>
    </PageLayout>
  );
};

export { Tags }