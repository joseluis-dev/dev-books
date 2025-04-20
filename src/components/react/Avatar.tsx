import { useEffect } from "react"
import { useUser } from "../../hooks/User/useUser"
import CircleUserRoundIcon from "./CircleUserRoundIcon"

export const Avatar = () => {
  const { user, loadUser, isLoading } = useUser()
  console.log(user, isLoading)

  useEffect(() => {
    if (!user) {
      loadUser()
    }
  }, [])
  return (
    <div>
      {(!user || isLoading) && <CircleUserRoundIcon width={48} height={48} />}
      {(user && !isLoading) && <div className="flex items-center justify-center">
        <span className="flex bg-gray-400 p-3 rounded-full w-12 justify-center">{user?.name.slice(0,1)}</span>
        <div className="flex flex-col ml-2">
          <span>{user?.name}</span>
          <span className="text-xs text-gray-400">@{user?.name.toLowerCase()}</span>
        </div>
      </div>}
    </div>
  )
}
