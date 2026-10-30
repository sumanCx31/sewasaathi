
const mongoose = require("mongoose");

const hamroSewaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceCategory",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: null,
    },

    thumbnail: {
      type: String,
      default: null,
    },

    requiredDocuments: [
      {
        type: String,
        trim: true,
      },
    ],

    eligibility: {
      type: String,
      default: "",
    },

    applicationProcess: [
      {
        type: String,
      },
    ],

    fee: {
      type: Number,
      default: 0,
    },

    processingTime: {
      type: String,
      default: "Not specified",
    },

    office: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    applicationUrl: {
      type: String,
      default: "",
    },

    isOnline: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HamroSewa", hamroSewaSchema);
