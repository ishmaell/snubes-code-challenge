import React from 'react';
import './css/index.css';
import 'react-phone-input-2/lib/style.css';
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
