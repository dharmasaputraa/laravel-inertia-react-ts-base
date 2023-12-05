import ApplicationLogo from '@/components/application-logo';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GuestLayout({
    children,
    title,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <>
            <ThemeProvider>
                <Head title={title}></Head>

                <div className="flex min-h-screen flex-col items-center px-4 pt-6 sm:justify-center sm:pt-0 ">
                    <div>
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                        </Link>
                    </div>

                    <Card className="mt-6 w-full sm:max-w-md">
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>{children}</CardContent>
                    </Card>

                    <div className="absolute right-0 top-0 mr-4 mt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
