import { PageProps } from '@/types';
import UserLayout from '@/layouts/user-layout';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>Welcome to your dashboard</CardDescription>
                </CardHeader>
            </Card>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => <UserLayout title="Dashboard" children={page} />;
