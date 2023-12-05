import ApplicationLogo from '@/components/application-logo';
import { Icon } from '@/components/icon';
import { CommandPaletteState, PageProps } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ResponsiveNavbar({
    openCommandPalette,
    setOpenCommandPalette,
}: CommandPaletteState) {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="block border-b px-3 py-2 lg:hidden">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <ApplicationLogo className="mr-4 h-6 w-auto fill-primary" />
                </Link>

                <div className="flex items-center gap-x-2">
                    <button
                        className="focus:outline-none"
                        onClick={() => setOpenCommandPalette(true)}
                    >
                        <Icon name="IconSearch" />
                    </button>
                    <Separator orientation="vertical" className="mx-4 h-7" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="grid h-8 w-8 place-content-center border border-transparent focus:border-border"
                            >
                                <Icon name="IconMenu2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-64">
                            {/* <DropdownMenuLabel>Pages</DropdownMenuLabel>
                            <DropdownMenuSeparator /> */}
                            <DropdownMenuItem asChild>
                                <Link href={route('home')}>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#">Article</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#">About</Link>
                            </DropdownMenuItem>
                            {auth.user ? (
                                <>
                                    {/* <DropdownMenuSeparator />
                                    <DropdownMenuLabel>Manage Account</DropdownMenuLabel> */}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('dashboard')}>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('profile.edit')}>Settings</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        Logout
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('login')}>Login</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('register')}>Register</Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
