import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme, Theme } from '@/components/theme-provider';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export function ThemeToggle() {
    const { setTheme } = useTheme();

    const handleThemeChange = (theme: Theme) => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
        setTheme(theme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 stroke-[1.25] transition-all dark:-rotate-90 dark:scale-0" />
                    <IconMoonStars className="stroke absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 stroke-yellow-400 stroke-[1.25] transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleThemeChange('light' as Theme)}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('dark' as Theme)}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange('system' as Theme)}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
