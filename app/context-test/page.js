"use client";
import React from 'react';

export default function ContextTest() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Translation Context Test</h1>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded">
              <h2 className="font-semibold mb-2">Context State:</h2>
              <p>Use the language selector at the top of the page to change language.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded">
              <h2 className="font-semibold mb-2">Instructions:</h2>
              <ul className="text-sm space-y-1">
                <li>• Use the language selector at the top of the page to change language</li>
                <li>• Check browser console (F12) for any errors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 