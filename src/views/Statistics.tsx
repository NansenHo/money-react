import React, { useState } from 'react';
import { PageLayout } from 'components/PageLayout';
import { useRecord } from 'hooks/useRecord';
import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import day from 'dayjs'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
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

  > .note {
    margin-left: 16px;
    margin-right: auto;
    color: #999;
  }
`

// 统计页面
function Statistics() {
  const { records } = useRecord()
  const { getName } = useTags()
  const [ category, setCategory ]  = useState<'-' | '+'>('-')
  let records_map = new Map()
  records.forEach(r => {
    const last_date = r.createdAt
    console.log(last_date, 'last_date')
    const one = records_map.get(last_date)
    console.log(one, 'one')
    if (!one) {
      records_map.set(last_date, [])
      console.log('111111111111')
      return
    }
    one.push(r)                                                              
  })
  console.log(records_map)

  return (
    <PageLayout>
      <CategorySection value={category}
                       onChange={ category => setCategory(category) }/>
      <div>
        { records.filter(r => r.category === category ).map(r => {
            return (<Item key={r.createdAt}>
                      <p className="tagNames">
                        {r.tagIds.map(t => <span className="tag" key={t}>{getName(t)}</span>)}
                      </p>
                      <p className="note">{r.note}</p>
                      <p className="amount">￥{r.amount}</p>
                      {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
                    </Item>)
        })}
      </div>
    </PageLayout>
  );
};

export { Statistics }