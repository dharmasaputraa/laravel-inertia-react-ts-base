import { Head } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import Navbar from '@/layouts/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import ResponsiveNavbar from '@/layouts/responsive-navbar';

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<{
    title: string;
}>) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Head title={title}></Head>
            <ThemeProvider>
                <ResponsiveNavbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
                <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
                {children}
            </ThemeProvider>
        </>
    );
}
