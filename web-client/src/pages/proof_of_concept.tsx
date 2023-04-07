import React from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { MainContent } from '@/layout/components';

export interface testComponentsPageProps {}

const TestComponentsPage = (props: testComponentsPageProps) => {
  return (
    <MainContent>
      <h1>Homepage</h1>
      <h2>this is an h2</h2>
      <Button>Click me</Button>
      <Input label="Name" />
      <TextArea label="Description" />
    </MainContent>
  );
};

export default TestComponentsPage;
