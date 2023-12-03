import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import AppLayout from "@/Layouts/app-layout";
import Container from "@/Components/container";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title="Profile" />

            <div className="py-12">
                <Container>
                    <div className="max-w-2xl space-y-6">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />

                        <UpdatePasswordForm />

                        <DeleteUserForm />
                    </div>
                </Container>
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AppLayout title="Profile" children={page} />;
