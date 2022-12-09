import { useRouter } from "next/router"
import { trpc } from "../../utils/trpc"


const UserPage = () => {
    const { query } = useRouter()

    const userQuery = trpc.users.getById.useQuery(query.id)
    return (
        <div>
            <h1 className="text-[hsl(280,100%,70%)]">{userQuery.data?.name}</h1>
        </div>
    )
}

export default UserPage