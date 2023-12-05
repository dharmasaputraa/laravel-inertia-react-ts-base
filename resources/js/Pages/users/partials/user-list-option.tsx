import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { User } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DropdownDialog from '@/components/dropdown-dialog';

export default function UserListOptions({ user }: { user: User }) {
    const { delete: destroy } = useForm();
    function destroyUser(user: User) {
        destroy(route('users.destroy', [user]), {
            preserveScroll: true,
        });
    }

    return (
        // Button
        // <div className="flex gap-x-1">
        //     <Button size={'icon'} variant={'outline'} asChild>
        //         <Link href={route('users.edit', [user])}>
        //             <Icon className="h-4 w-4" name="IconPencil" />
        //         </Link>
        //     </Button>
        //     <Button size={'icon'} variant={'destructive'} asChild>
        //         <Link href={route('users.destroy', [user])}>
        //             <Icon name="IconTrash" />
        //         </Link>
        //     </Button>
        // </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="h-7" variant={'outline'} size={'icon'}>
                    <Icon name="IconDots" className="h-3.5 w-3.5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={'#'}>
                        <Icon className="mr-2" name="IconId" />
                        Details
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon className="mr-2" name="IconPencil" />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className="mr-2 h-4 w-4" name="IconShare" />
                        Share
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-40">
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandFacebook" />
                                Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandInstagram" />
                                Instagram
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandTwitter" />
                                Twitter
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className="mr-2 h-4 w-4" name="IconSend" />
                        Publish
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-40">
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandFacebook" />
                                Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandInstagram" />
                                Instagram
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className="mr-2" name="IconBrandTwitter" />
                                Twitter
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownDialog
                    trigger_text="Ban"
                    description="Are you sure you want to ban this user?"
                    submit_text="Ban"
                    action={() => console.log('Ban')}
                    icon="IconBan"
                />
                <DropdownDialog
                    trigger_text="Delete Permanent"
                    description="Are you sure you want to delete permanent this user?"
                    submit_text="Delete"
                    action={() => destroyUser(user)}
                    icon="IconTrash"
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
