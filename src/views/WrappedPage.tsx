import DashboardLayout from '../layouts/DashboardLayout'

export default function WrappedPage({ element }: { element: React.ReactNode }) {
   return <DashboardLayout>{element}</DashboardLayout>
}
