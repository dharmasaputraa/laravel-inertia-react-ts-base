import { Head } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import Navbar from '@/layouts/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import Menu from '@/layouts/menu';
import ResponsiveSidebar from '@/layouts/responsive-sidebar';
import UserResponsiveNavbar from '@/layouts/user-responsive-navbar';

export default function UserLayout({
    children,
    title,
}: PropsWithChildren<{
    title: string;
}>) {
    const [open, setOpen] = useState(false);
    const [openSidebar, setOpenSideBar] = useState(false);

    return (
        <>
            <Head title={title}></Head>
            <ThemeProvider>
                <UserResponsiveNavbar
                    setOpenSidebar={setOpenSideBar}
                    openCommandPalette={open}
                    setOpenCommandPalette={setOpen}
                />
                <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
                <ResponsiveSidebar open={openSidebar} setOpen={setOpenSideBar} />
                <div className="grid px-4 py-6 lg:grid-cols-6 lg:gap-8 lg:px-10 lg:py-12">
                    <div className="col-span-1 hidden lg:block">
                        <Menu />
                    </div>
                    <div className="lg:col-span-5">{children}</div>
                </div>
            </ThemeProvider>
        </>
    );
}
