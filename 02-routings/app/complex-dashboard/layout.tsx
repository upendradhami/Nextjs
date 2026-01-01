

type LayoutProps = {
  children: React.ReactNode,
  users: React.ReactNode,
  notification: React.ReactNode,
  revenue: React.ReactNode,
  login: React.ReactNode
}
export default function LayoutPage({children,users,notification,revenue,login
}: LayoutProps) {
  const isloggedin = false;
  return (isloggedin) ?  (
    <div>
       <div>{children}</div>
        <div className="flex">
          <div className="flex flex-col">
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{display: "flex", flex:1 }}>{notification}</div>
        </div>
      
      {}
    </div>
  ) :  (<>
  {login}
  </>
 )
}