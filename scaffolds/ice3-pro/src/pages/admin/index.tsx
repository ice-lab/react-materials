export default function Admin() {
  return (
    <div>Admin</div>
  )
}

export const getConfig = () => {
  return {
    auth: ['admin'],
  }
}
