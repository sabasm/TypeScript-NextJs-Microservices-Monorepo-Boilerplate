import UserLayout from '@/layouts/UserLayout';
import React from 'react';


export default function NotFoundPage() {
return (
<UserLayout header={<h1>My App</h1>} footer={<p>&copy; My App</p>}>
<h2>404 - Page Not Found</h2>
<p>The page you are looking for could not be found.</p>
</UserLayout>
);
}
