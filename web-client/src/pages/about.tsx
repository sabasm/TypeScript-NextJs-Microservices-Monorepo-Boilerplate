import React from 'react';
import MultiPurposeLayout from '@/layouts/MultiPurposeLayout';


export default function AboutPage() {
  return (
    <MultiPurposeLayout header={<h1>My App</h1>} footer={<p>&copy; My App</p>}>
      <h2>About Us</h2>
      <p>We are a company that...</p>
    </MultiPurposeLayout>
  );
}
