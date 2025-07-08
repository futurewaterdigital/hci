"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { translateText } from '@/lib/translation';

export default function MinimalTest() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Minimal Translation Test</h1>
          <div className="space-y-4">
            <div>
              <p>Use the language selector at the top of the page to change language.</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded">
              <p className="text-sm">
                <strong>Instructions:</strong>
              </p>
              <ul className="text-sm mt-2 list-disc list-inside">
                <li>Use the language selector at the top of the page to change language</li>
                <li>Check browser console (F12) for detailed logs</li>
                <li>Look for any error messages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 