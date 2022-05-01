const list = [
  {
    id: 1,
    title: "1️⃣ swimming information",
    description: [
      "👉 12 classes will be conducted for each person as per their allotment",
      "👉 classes can be resecheduled in urgent matters",
      "👉 basic swimming is guranteed by our professional with in 12 sessions",
      "👉 person can select the timing between 4:00 pm to 8:00 pm",
      "👉 any medical conditions should be discussed with our team during the enrollment",
    ],
  },
  {
    id: 2,
    title: "2️⃣ Location",
    description: [
      "https://goo.gl/maps/5J54zHwoXYE4QkdQA",
      "📌 Sea Diamond Plaza",
    ],
  },
  {
    id: 3,
    title: "3️⃣ Fees/Subscription",
    description: [
      "👉 for children 50 BHD for 12 sessions",
      "👉 for couples 100 BHD for 12 sessions",
      "👉 for family 160 BHD for 12 sessions",
      "👉 for group please disuss with our team",
    ],
  },
  {
    id: 4,
    title: "4️⃣ Registration",
    description: [
      "https://docs.google.com/forms/d/e/1FAIpQLScfatHwUQxJFHJ95eVdrGi2B1BsAOnlYVoFoha5RH8zg2UMMg/viewform",
      "Please fill details in order to register your slot",
    ],
  },
];

Object.entries(list).forEach(([key, value]) => {
  console.log(`${value.title}`);
});
