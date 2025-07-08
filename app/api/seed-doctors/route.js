import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Doctor from '@/app/models/Doctor';

const doctorData = [
  {
    image: "/doctors/1.png",
    name: "Dr. Mazda K Turel",
    qualification: ["MCh (Neurosurgery)", "Fellowship in Skullbase and Neuro-oncology, Toronto, Canada", "Fellowship in Complex and Minimally Invasive Spine Surgery, Chicago, USA", "Consultant Neurosurgeon (Brain and Spine Surgery)"],
    experience: "15+",
    rating: 4.9,
    reviews: 840,
    expertise: ["Brain Tumor Surgery", "Cerebrovascular Surgery", "Epilepsy Surgery", "Minimally Invasive Spine Surgery"],
    publicationData: {
      heading: "Publications",
      publications: [
        "Prospective analysis of 246 fires of da Vinci SureForm SmartFire stapler in colorectal cancer: First Indian study",
        "Real-World Evidence of the Impact of CanAssist Breast on Physician's Decision About the Use of Adjuvant Chemotherapy in Early Breast Cancer",
        "Oncoplastic Breast Surgery - Common Complications and Management"
      ]
    },
    researchData: {
      heading: "Research",
      research: [
        "Prospective analysis of 246 fires of da Vinci SureForm SmartFire stapler in colorectal cancer: First Indian study",
        "Real-World Evidence of the Impact of CanAssist Breast on Physician's Decision About the Use of Adjuvant Chemotherapy in Early Breast Cancer",
        "Oncoplastic Breast Surgery - Common Complications and Management"
      ]
    },
    aboutData: {
      heading: "About",
      about: "Dr. Mazda K. Turel is a renowned neurosurgeon whose dedication to patient-centred care and innovative treatment approaches has earned him widespread recognition. His belief in collaborative healing, combined with his contributions to clinical research and public discourse, reflects his passion for transforming lives through neurosurgery."
    },
    isVerified: false,
    isActive: true,
    isFeatured: true,
    reviewEnabled: false
  }
];

export async function GET() {
  try {
    await dbConnect();
    
    // Clear existing data
    await Doctor.deleteMany({});
    
    // Insert new data
    const doctors = await Doctor.insertMany(doctorData);
    
    return NextResponse.json({ 
      status: 'success',
      message: 'Doctors data seeded successfully',
      doctors: doctors
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'error',
      message: 'Failed to seed doctors data',
      error: error.message 
    }, { status: 500 });
  }
} 