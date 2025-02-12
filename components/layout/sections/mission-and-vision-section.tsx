"use client";
interface contentProps {
    title: string;
    description: string;
}

const contents: contentProps[] = [
    {
        title: 'Mission',
        description: `We produce high-quality, eco-friendly healthcare and wellness
                products, prioritizing safety and sustainability. Through
                continuous innovation, we elevate customer well-being and
                positively impact communities as we expand from local to global
                markets.`
    },
    {
        title: 'Vision',
        description: `To be a trusted leader in the global market for natural and
                organic products, committed to driving innovation and
                sustainability that enhances the health and well-being of
                individuals and communities.`
    },
    {
        title: 'Quality Policy',
        description: `At GIDC, we are dedicated to delivering the highest-quality
                products that meet or exceed customer expectations. We achieve
                this through an effective quality management system, adherence to
                regulatory standards, strong supplier partnerships, and a
                commitment to continuous improvement. We empower all employees to
                uphold quality at every step, ensuring customer satisfaction and
                operational excellence.`
    }
]


export const MissionAndVisionSection = () => {
    return (
        <section className="container py-24 sm:py-32">
            <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl font-bold">
                <h1>Our Mission, Vision and its Quality Policy</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contents.map(({ title, description }) => (
                    <div key={title} className="m-2 rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-600">
                                {title}
                            </h3>
                        </div>
                        <div className="p-6 pt-0 text-justify">
                            {description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
