import { PageProps } from '@/types';
import UserLayout from '@/layouts/user-layout';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { usePage } from '@inertiajs/react';
import { SimplePagination } from '@/components/pagination';
import UserListOptions from './partials/user-list-option';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Index({ auth }: PageProps) {
    const { data: users, meta, links } = usePage<any>().props.users;

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>The list of the users registered.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Varified at</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length > 0 ? (
                                <>
                                    {users.map((user: any, i: number) => (
                                        <TableRow key={i}>
                                            <TableCell className="w-0">{meta.from + i}</TableCell>
                                            <TableCell>
                                                <div className=" flex items-center font-normal">
                                                    <div className="mr-3 shrink-0">
                                                        <Avatar>
                                                            <AvatarImage src={user.avatar} />
                                                            <AvatarFallback>
                                                                {user.acronym}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div>
                                                        <div>{user.name}</div>
                                                        <div className="text-muted-foreground">
                                                            {user.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.verified_at}</TableCell>
                                            <TableCell>{user.created_at}</TableCell>
                                            <TableCell>
                                                <div className="flex justify-end gap-x-1">
                                                    <UserListOptions user={user} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>No users.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                        Showing you {meta.to} of {meta.total} users.
                    </span>
                    <SimplePagination links={links} />
                </CardFooter>
            </Card>
        </>
    );
}

Index.layout = (page: React.ReactNode) => <UserLayout title="Users" children={page} />;
