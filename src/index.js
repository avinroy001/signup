import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscriptionForm from './SubscriptionForm';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SubscriptionForm />} />
      <Route path="/success" element={<SubscriptionForm />} />
    </Routes>
  </BrowserRouter>,
);