import React from 'react';
import MultiPurposeLayout from '@/layouts/MultiPurposeLayout';

export default function WallOfLovePage() {
return (
<MultiPurposeLayout header={<h1>My App</h1>} footer={<p>&copy; My App</p>}>
<h2>Wall of Love</h2>
<ul>
<li>"I love this app!" - User A</li>
<li>"This app changed my life." - User B</li>
<li>"I can't imagine going back to life before this app." - User C</li>
</ul>
</MultiPurposeLayout>
);
}
