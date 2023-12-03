import AppLayout from "@/Layouts/app-layout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Container from "@/Components/container";

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Container>
                <div className="py-12">You are logged in!</div>
            </Container>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout title="Dashboard" children={page} />;
