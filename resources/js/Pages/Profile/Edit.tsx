import DeleteUserForm from './partials/delete-user-form';
import UpdatePasswordForm from './partials/update-password-form';
import UpdateProfileInformationForm from './partials/update-profile-information-form';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Container from '@/components/container';
import UserLayout from '@/layouts/user-layout';

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title="Profile" />
            <div className="max-w-2xl space-y-6">
                <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />

                <UpdatePasswordForm />

                <DeleteUserForm />
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <UserLayout title="Profile" children={page} />;
