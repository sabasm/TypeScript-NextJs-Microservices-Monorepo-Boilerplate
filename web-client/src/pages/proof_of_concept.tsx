import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { MainContent } from '@/layout/components';

export interface testComponentsPageProps {}

const TestComponentsPage = (props: testComponentsPageProps) => {
  return (
    <MainContent>
      <h1 id="test">this is a page where i'm checking components and stuff</h1>
      <Button>Click me</Button>
      <Input label="Name" />
      <TextArea label="Description" />
    </MainContent>
  );
};

export default TestComponentsPage;
