import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Navbar from "@/Layouts/navbar";

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <>
            <Head title={title}></Head>
            <div>
                <Navbar />
                {children}
            </div>
        </>
    );
}
