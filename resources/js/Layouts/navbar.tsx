import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/nav-link";
import { PageProps } from "@/types";
import { router, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { IconChevronDown } from "@tabler/icons-react";

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="border-b border-border/60 px-4 py-2 sm:px-6 sm:py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <ApplicationLogo className="mr-4 h-8 w-auto fill-primary" />
                    <NavLink href={route("home")} active={route().current("home")}>
                        Home
                    </NavLink>
                    <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex items-center">
                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between gap-x-4 focus:outline-none">
                                {auth.user.name}
                                <IconChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mr-6 w-72">
                                <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => router.get(route("dashboard"))}>
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => router.get(route("profile.edit"))}>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => router.post(route("logout"))}>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <NavLink href={route("login")}>Login</NavLink>
                            <NavLink href={route("register")}>Register</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
