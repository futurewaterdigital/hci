import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

const medicalProcedures = [
  {
    procedure: 'Heart Bypass (CABG)',
    India: '5,200',
    UK: '134,000',
    USA: '144,000',
    Thailand: '15,121',
    Singapore: '37,000',
    Turkey: '15,000',
  },
  {
    procedure: 'Angioplasty',
    India: '3,300',
    UK: '13,000',
    USA: '57,000',
    Thailand: '13,000',
    Singapore: '13,000',
    Turkey: '15,000',
  },
  {
    procedure: 'Heart Valve Replacement',
    India: '5,500',
    UK: '30,000',
    USA: '170,000',
    Thailand: '17,000',
    Singapore: '17,000',
    Turkey: '17,000',
  },
  {
    procedure: 'Total Hip Replacement',
    India: '3,500',
    UK: '12,500',
    USA: '50,000',
    Thailand: '12,000',
    Singapore: '13,000',
    Turkey: '13,000',
  },
  {
    procedure: 'Total Knee Replacement',
    India: '11,000',
    UK: '40,000',
    USA: '50,000',
    Thailand: '13,000',
    Singapore: '14,000',
    Turkey: '11,000',
  },
  {
    procedure: 'IVF Treatment',
    India: '65,000',
    UK: '12,000',
    USA: '12,000',
    Thailand: '12,000',
    Singapore: '15,000',
    Turkey: '5,000',
  },
  {
    procedure: 'Dental Implant',
    India: '1,500',
    UK: '4,000',
    USA: '3,500',
    Thailand: '2,400',
    Singapore: '3,000',
    Turkey: '1,000',
  },
  {
    procedure: 'Gastric Bypass',
    India: '12,000',
    UK: '15,000',
    USA: '35,000',
    Thailand: '16,800',
    Singapore: '15,000',
    Turkey: '15,000',
  },
  {
    procedure: 'Spinal Fusion',
    India: '18,000',
    UK: '30,000',
    USA: '110,000',
    Thailand: '15,000',
    Singapore: '15,000',
    Turkey: '15,000',
  },
  {
    procedure: 'Liver Transplant',
    India: '95,000',
    UK: '200,000',
    USA: '300,000',
    Thailand: '75,000',
    Singapore: '150,000',
    Turkey: '120,000',
  },
  {
    procedure: 'Dental Crown',
    India: '1,200',
    UK: '1,000',
    USA: '1,200',
    Thailand: '600',
    Singapore: '800',
    Turkey: '600',
  },
  {
    procedure: 'Gastric Sleeve',
    India: '5,000',
    UK: '12,000',
    USA: '20,000',
    Thailand: '14,000',
    Singapore: '15,000',
    Turkey: '12,000',
  },
  {
    procedure: 'Gastric Band',
    India: '5,000',
    UK: '10,000',
    USA: '18,000',
    Thailand: '12,000',
    Singapore: '14,000',
    Turkey: '9,000',
  },
  {
    procedure: 'Breast Implants',
    India: '12,000',
    UK: '8,000',
    USA: '10,000',
    Thailand: '5,000',
    Singapore: '8,000',
    Turkey: '4,500',
  },
  {
    procedure: 'Rhinoplasty',
    India: '6,000',
    UK: '7,000',
    USA: '8,500',
    Thailand: '4,500',
    Singapore: '8,000',
    Turkey: '3,500',
  },
  {
    procedure: 'Face Lift',
    India: '15,000',
    UK: '12,000',
    USA: '15,000',
    Thailand: '7,000',
    Singapore: '12,000',
    Turkey: '6,500',
  },
  {
    procedure: 'Liposuction',
    India: '5,500',
    UK: '7,000',
    USA: '9,000',
    Thailand: '4,000',
    Singapore: '8,000',
    Turkey: '3,000',
  },
  {
    procedure: 'Tummy Tuck',
    India: '7,000',
    UK: '9,000',
    USA: '9,500',
    Thailand: '5,500',
    Singapore: '9,000',
    Turkey: '4,500',
  },
  {
    procedure: 'Hair Transplant',
    India: '6,200',
    UK: '15,000',
    USA: '15,000',
    Thailand: '7,000',
    Singapore: '12,000',
    Turkey: '2,500',
  },
  {
    procedure: 'Lasik (both eyes)',
    India: '6,500',
    UK: '5,000',
    USA: '4,000',
    Thailand: '2,500',
    Singapore: '3,500',
    Turkey: '2,000',
  }
];

const hotelPrices = [
  {
    category: '5-Star Hotel',
    Bangalore: '100',
    Chennai: '100',
    Delhi: '133',
    Hyderabad: '63',
  },
  {
    category: '3-Star Hotel',
    Bangalore: '33',
    Chennai: '27',
    Delhi: '43',
    Hyderabad: '43',
  }
];

export async function POST() {
  try {
    const { db } = await connectToDatabase();

    // Clear existing collections
    await db.collection('medicalProcedures').deleteMany({});
    await db.collection('hotelPrices').deleteMany({});

    // Insert new data
    await db.collection('medicalProcedures').insertMany(medicalProcedures);
    await db.collection('hotelPrices').insertMany(hotelPrices);

    return NextResponse.json({ 
      message: 'Data seeded successfully',
      medicalProcedures: medicalProcedures.length,
      hotelPrices: hotelPrices.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to seed data' },
      { status: 500 }
    );
  }
} 