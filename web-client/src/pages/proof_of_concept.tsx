import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { MainContent, Sidebar } from '@/layout/components';

export interface testComponentsPageProps {}

const TestComponentsPage = (props: testComponentsPageProps) => {
  return (
    <>
      <Sidebar left={true}>
        <h1>sidebar left</h1>
      </Sidebar>
      <MainContent>
        <h1 id="test">this is a page where i'm checking components and stuff</h1>
        <Button>Click me</Button>
        <Input label="Name" />
        <TextArea label="Description" />
      </MainContent>
      <Sidebar>
        <h1>sidebar right</h1>
      </Sidebar>
    </>
  );
};

export default TestComponentsPage;
