import React, { useState } from 'react';
import { PageLayout } from 'components/PageLayout';
import { useRecord } from 'hooks/useRecord';
import { CategorySection } from './moneyPageStyledComponents/categorySection';
import { useTags } from 'hooks/useTags';
import day from 'dayjs'


// 统计页面
function Statistics() {
  const { records } = useRecord()
  const expenses_records = records.filter(r => r.category === '-' )
  const income_records = records.filter(r => r.category === '+' )
  const { getName } = useTags()
  const [ category, setCategory ]  = useState<'-' | '+'>('-')
  return (
    <PageLayout>
      <CategorySection value={category}
                       onChange={ category => setCategory(category) }/>
      <div>
        { records.map(r => {
            return <div key={r.createdAt}>
              {r.tagIds.map(t => <span key={t}>{getName(t)}</span>)}
              <hr />
              {r.amount}
              <hr />
              {day(r.createdAt).format('YYYY年MM月DD日')}
              </div>
        })}
      </div>
    </PageLayout>
  );
};

export { Statistics }