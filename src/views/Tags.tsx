import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import {useTags} from 'useTags';
import Icon from 'components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    line-height: 20px;
    border-bottom: 1px solid #d5d5d9;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right"/>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
