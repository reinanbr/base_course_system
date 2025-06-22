//crie o ddashboard.tsx
import { createSignal } from 'solid-js';
import { fetchDashboardData } from '../services/api';
import { DashboardData } from '../types';

export default function Dashboard() {
  const [data, setData] = createSignal<DashboardData | null>(null);

  const loadData = async () => {
    try {
      const result = await fetchDashboardData();
      setData(result);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  // Load data when the component mounts
  loadData();

  return (
    <div>
      <h1>Dashboard</h1>
      {data() ? (
        <div>
          <p>Total Users: {data().totalUsers}</p>
          <p>Total Posts: {data().totalPosts}</p>
          <p>Total Comments: {data().totalComments}</p>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}