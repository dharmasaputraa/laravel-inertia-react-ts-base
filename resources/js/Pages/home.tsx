import Container from "@/Components/container";
import AppLayout from "@/Layouts/app-layout";

export default function Home() {
    return (
        <>
            <Container>
                <div className="py-12">Home</div>
            </Container>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout title="Home" children={page} />;
