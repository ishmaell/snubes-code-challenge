import React from 'react';
import './css/index.css';
import Layout from './layout/Layout';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
