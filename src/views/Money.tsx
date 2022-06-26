import PageLayout from '../components/PageLayout';
import React from 'react';
import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    justify-content: space-around;

    > li {
      width: 50%;
      text-align: center;
      line-height: 36px;
      background: #fff;
      padding: 18px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        width: 100%; 
        position: absolute;
        bottom: 0;
        left: 0;
        background: #000;
      }
    }
  }
`
const TagsSection = styled.section`
  flex-grow: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  background: #fff;

  > ul {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background: #D9D9D9;
      text-align: center;
      border-radius: 18px;
      padding: 3px 18px;
      margin: 6px 12px 0 12px;
      font-size: 14px;
    }
  }
  > button {
    padding: 0 4px;
    margin-top: 6px;
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
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 36px;
    text-align: right;
    line-height: 72px;
    padding: 0 16px;
  }
  > .pad {
    
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;

      &.number-pad-ok-button {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
      
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: green;
      }
     }
  }
`

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

export default Money;