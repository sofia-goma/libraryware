export default function FeatureCard({ heading, description, icon }: IFeatures) {
    return (
        <div className="text-center">
            <>
                {icon}
            </>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
                {heading}
            </h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p>
        </div>
    );
}