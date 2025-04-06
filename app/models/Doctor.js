import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  qualification: [{
    type: String,
    required: true
  }],
  experience: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  expertise: [{
    type: String,
    required: true
  }],
  publicationData: {
    heading: {
      type: String,
      required: true
    },
    publications: [{
      type: String,
      required: true
    }]
  },
  researchData: {
    heading: {
      type: String,
      required: true
    },
    research: [{
      type: String,
      required: true
    }]
  },
  aboutData: {
    heading: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    }
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  reviewEnabled: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);

export default Doctor; 