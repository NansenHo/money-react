import PageLayout from '../components/PageLayout';
import React from 'react';
import styled from 'styled-components';

const CategorySection = styled.section`
  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      width: 50%;
      text-align: center;
      line-height: 36px;
      background: #fff;
    }
  }
`
const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  > ul {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      text-align: center;
      border-radius: 18px;
      padding: 3px 18px;
      margin: 0 12px;
      font-size: 14px;
    }
  }
  > button {
    padding: 0 4px;
    border-bottom: 1px solid #333;
    color: #666;
  }
`
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block; 
      width: 100%;
      height: 70px;
      background: none;
      border: none;
      
      &:focus {
        outline: none;
      }
    }
  }
`
const NumberPadSection = styled.section`

`

// 记账页面
function Money() {
  return (    
    <PageLayout>
      <CategorySection>
        <ul>
          <li>收入</li>
          <li>支出</li>
        </ul>
      </CategorySection>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注：</span>
          <input type="text" />
        </label>
      </NotesSection>
      <NumberPadSection>
        <div>100</div>
        
      </NumberPadSection>  
    </PageLayout>
  );
};

export default Money;