import { Link } from '@inertiajs/react';
import { Button } from './ui/button';

export function SimplePagination({
    links,
}: {
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
}) {
    return (
        <div className="flex items-center gap-x-1">
            {links.prev !== null ? (
                <Button variant={'outline'} size={'sm'} className="text-xs" asChild>
                    <Link preserveScroll preserveState href={links.prev}>
                        Prev
                    </Link>
                </Button>
            ) : (
                <Button variant={'outline'} size={'sm'} className="text-xs" asChild disabled>
                    <span>Prev</span>
                </Button>
            )}
            {links.next !== null ? (
                <Button variant={'outline'} size={'sm'} className="text-xs" asChild>
                    <Link preserveScroll preserveState href={links.next}>
                        Next
                    </Link>
                </Button>
            ) : (
                <Button variant={'outline'} size={'sm'} className="text-xs" asChild disabled>
                    <span>Next</span>
                </Button>
            )}
        </div>
    );
}
