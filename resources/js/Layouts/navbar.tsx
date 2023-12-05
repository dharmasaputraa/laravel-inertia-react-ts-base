import ApplicationLogo from '@/components/application-logo';
import NavLink from '@/components/nav-link';
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
import { IconChevronDown, IconChevronUp, IconCommand, IconSearch } from '@tabler/icons-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CommandPalette } from './command-palette';
import { Badge } from '@/components/ui/badge';

export default function Navbar({ openCommandPalette, setOpenCommandPalette }: CommandPaletteState) {
    const { auth } = usePage<PageProps>().props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    };

    return (
        <>
            <CommandPalette
                openCommandPalette={openCommandPalette}
                setOpenCommandPalette={setOpenCommandPalette}
            />
            <nav className="hidden border-b border-border/60 px-4 py-2 sm:px-6 sm:py-3 lg:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="mr-4 h-8 w-auto fill-primary" />
                        </Link>
                        <NavLink href={route('home')} active={route().current('home')}>
                            Home
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Button
                            onClick={() => setOpenCommandPalette(true)}
                            variant="outline"
                            className="flex items-center gap-x-4"
                        >
                            <IconSearch className="h-4 w-4 stroke-[1.5]" />
                            <span>Quick search...</span>
                            <Badge variant="secondary" className="rounded-sm px-1">
                                <span className="flex items-center">
                                    <IconCommand className="h-4 w-4 stroke-1" />
                                    <p className="mr-[0.2rem] text-muted-foreground">K</p>
                                </span>
                            </Badge>
                        </Button>
                        <ThemeToggle />
                        {auth.user ? (
                            <DropdownMenu onOpenChange={() => toggleDropdown()}>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="border bg-secondary/50 hover:bg-secondary/60"
                                    >
                                        {auth.user.name}
                                        {isDropdownOpen ? (
                                            <IconChevronUp className="ml-2 h-4 w-4" />
                                        ) : (
                                            <IconChevronDown className="ml-2 h-4 w-4" />
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-72">
                                    <DropdownMenuLabel>
                                        <div className="flex items-center font-normal">
                                            <div className="shrink-0">
                                                <img
                                                    className="mr-3 h-8 w-8 rounded-full"
                                                    src={auth.user.avatar}
                                                />
                                            </div>
                                            <div>
                                                <div>{auth.user.name}</div>
                                                <div className="text-muted-foreground">
                                                    {auth.user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => router.get(route('dashboard'))}
                                    >
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => router.get(route('profile.edit'))}
                                    >
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex gap-x-2">
                                <Button size="sm" variant="secondary" asChild>
                                    <Link href={route('login')}>Login</Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link href={route('register')}>Register</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
