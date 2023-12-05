import ApplicationLogo from '@/components/application-logo';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import Menu from '@/layouts/menu';

export default function ResponsiveSidebar({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="w-10/12" side="left">
                <Link className="mb-8 block" href="/">
                    <ApplicationLogo className="mr-4 h-8 w-auto fill-primary" />
                </Link>
                <Menu />
            </SheetContent>
        </Sheet>
    );
}
