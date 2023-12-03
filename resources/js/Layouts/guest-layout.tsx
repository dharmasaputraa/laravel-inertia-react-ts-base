import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function GuestLayout({
    children,
    title,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <>
            <Head title={title}></Head>

            <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0 ">
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
            </div>
        </>
    );
}
