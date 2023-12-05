import React from 'react';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Icon } from '@/components/icon';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import * as icons from '@tabler/icons-react';

interface Props {
    trigger_text: string;
    title?: string;
    description: string;
    cancel_text?: string;
    submit_text?: string;
    action: () => void;
    icon: keyof typeof icons;
}

export default function DropdownDialog({
    trigger_text,
    title = 'Are you absolutely sure?',
    description,
    cancel_text = 'Cancel',
    submit_text = 'Continue',
    icon,
    action,
}: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Icon className="mr-2" name={icon} />
                    {trigger_text}
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancel_text}</AlertDialogCancel>
                    <AlertDialogAction onClick={action}>{submit_text}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
