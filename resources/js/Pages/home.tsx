import Container from '@/components/container';
import AppLayout from '@/layouts/app-layout';

export default function Home() {
    return (
        <>
            <Container>
                <h1 className="py-12">Home</h1>
            </Container>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout title="Home" children={page} />;
