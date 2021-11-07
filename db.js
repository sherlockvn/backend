const mongoose = require("mongoose");

const { Schema } = mongoose;

const Staff = new Schema(
  {
    role: { type: Number },
    email: { type: String, unique: true },
    phone_number: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    department: { type: Number },
    position: { type: Number },
    description: { type: String },
    password: { type: String },
    gender: { type: Number },
  },
  { collection: "Staff" }
);

const Patient = new Schema(
  {
    email: { type: String, unique: true },
    phone_number: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    password: { type: String },
    address: { type: String },
    description: { type: String },
    dob: { type: Date },
    gender: { type: Number },
    created_time: { type: Date, default: Date.now() },
    updated_time: { type: Date, default: Date.now() },
    code: { type: Number },
  },
  { collection: "Patient" }
);

const Medication = new Schema(
  {
    name: { type: String },
    brand: { type: String },
    price: { type: Number },
    description: { type: String },
    quantity: { type: Date },
    created_time: { type: Date, default: Date.now() },
    updated_time: { type: Date, default: Date.now() },
    created_by: { type: String },
    updated_by: { type: String },
  },
  { collection: "Medication" }
);
Medication.index({ name: 1, brand: 1 }, { unique: true });

const Room = new Schema(
  {
    type: { type: Number },
    location: { type: Object, unique: true },
    avaiable_slot: { type: Number },
    history: { type: Object },
  },
  { collection: "Room" }
);

const Image = new Schema(
  {
    obj_id: { type: String },
    obj_type: { type: Number },
    url: { type: String },
  },
  { collection: "Image" }
);
Image.index({ obj_id: 1, obj_type: 1 }, { unique: true });

const Appointment = new Schema(
  {
    doctor: { type: String },
    patient: { type: String },
    start_time: { type: Date },
    end_time: { type: Date },
    created_time: { type: Date, default: Date.now() },
    updated_time: { type: Date, default: Date.now() },
    status: { type: Number },
    illness_description: { type: String },
    diagnose: { type: Object },
    location: {type: Object},
    created_by: { type: Object },
    updated_by: { type: Object },
    bill: { type: Object },
  },
  { collection: "Appointment" }
);

//mongo model
mongoose.model("Staff", Staff);
mongoose.model("Patient", Patient);
mongoose.model("Medication", Medication);
mongoose.model("Room", Room);
mongoose.model("Image", Image);
mongoose.model("Appointment", Appointment);

//export database
module.exports.Staff = mongoose.model("Staff");
module.exports.Patient = mongoose.model("Patient");
module.exports.Medication = mongoose.model("Medication");
module.exports.Room = mongoose.model("Room");
module.exports.Image = mongoose.model("Image");
module.exports.Appointment = mongoose.model("Appointment");

mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGO_URI || "";
mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
