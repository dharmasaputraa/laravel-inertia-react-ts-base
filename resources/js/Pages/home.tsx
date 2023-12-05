import Container from '@/components/container';
import AppLayout from '@/layouts/app-layout';

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
