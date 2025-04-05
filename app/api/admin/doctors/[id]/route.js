import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Doctor from '@/app/models/Doctor';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    console.log('Received id:', id);  // Debug log

    const doctor = await Doctor.findOne({ _id: id });
    console.log('Found doctor:', doctor);  // Debug log

    if (!doctor) {
      console.log('No doctor found for id:', id);  // Debug log
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error in GET route:', error);  // Debug log
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// PUT route for updating doctor details
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();

    const doctor = await Doctor.findOneAndUpdate(
      { _id: id },
      body,
      { new: true, runValidators: true }
    );

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE route for removing a doctor
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    console.log('Received id:', id);  // Debug log

    const doctor = await Doctor.findOneAndDelete({ _id: id });
    console.log('Doctor deleted:', doctor);  // Debug log

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 