import AppLayout from "@/layouts/app-layout";
import { PageProps } from "@/types";
import Container from "@/components/container";

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
