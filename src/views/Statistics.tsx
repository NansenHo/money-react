import React, { useState } from 'react';
import { PageLayout } from 'components/PageLayout';
import { useRecord } from 'hooks/useRecord';
import { RecordItem } from 'hooks/useRecord';
import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import day from 'dayjs'

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 1fr auto;
  grid-column-gap: 8px;
  padding: 8px 12px;
  background: #fff;
  color: #333;

  > p {
    font-size: 16px;
    line-height: 24px;

    > .tag:not(:last-child) {
      padding-right: 6px;
    }
  }

  > .time, .note {
    color: #999;
  }
`

const Header = styled.p`
  font-size: 14px;
  line-height: 18px;
  padding: 8px 16px;
  color: #666;
`

// 统计页面
function Statistics() {
  const { records } = useRecord()
  const { getName } = useTags()
  const [ category, setCategory ]  = useState<'-' | '+'>('-')
  const selected_Records = records.filter((v: RecordItem) => v.category === category )
  let hash: {[key: string]: RecordItem[]} = {}
  selected_Records.forEach(s => {
    const key = s.createdAt
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(s)
  })
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 0
  })

  return (
    <PageLayout>
      <CategorySection value={category}
                       onChange={ category => setCategory(category) }/>
                    {/* [key, value] 这里用析构赋值把里面两个元素拿出来 */}
        { array.map(([key, value]) => <div key={key}>
            <Header>{day(key).format('YYYY年MM月DD日')}</Header>
            <div>
              { value.map(r =>
                  <Item key={r.createdAt}>
                    <p className="tagNames">
                      {r.tagIds.map((t: number) => <span className="tag" key={t}>{getName(t)}</span>)}
                    </p>
                    <p className="note">{r.note}</p>
                    <p className="amount">￥{r.amount}</p>
                    <p className="time">{day(r.createdAt).format('HH点MM分')}</p>
                  </Item>) }
            </div>
          </div>) }
    </PageLayout>
  );
};

export { Statistics }