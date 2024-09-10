export default function UserProfile ({
    params
}: {
    params: {
        profileId: string;
    }
}) {
    return (
        <h1>{params.profileId}</h1>
    );
}