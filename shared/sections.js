const SECTIONS = [
  {
    title: "Basic Stats",
    sub: "Don't skip these, and try to be as detailed as possible — these numbers are exactly what I'll use to build your plan.",
    questions: [
      {id:'name', label:'Full name', type:'text', required:true},
      {id:'age', label:'Age', type:'number', required:true},
      {id:'sex', label:'Sex', type:'pills', options:['Male','Female'], required:true},
      {id:'height', label:'Height', hint:'cm or ft/in', type:'text', required:true},
      {id:'weight', label:'Current weight', hint:'kg or lbs', type:'text', required:true},
      {id:'occupation', label:'Occupation / work type', hint:'desk job, on your feet, shift work, etc.', type:'text'},
      {id:'daily_activity', label:'How active is your daily life outside of workouts?', hint:'1 = mostly sitting, 5 = on your feet constantly', type:'scale', min:1, max:5}
    ]
  },
  {
    title: "Goals & History",
    sub: "Tell me what you actually want, and why now.",
    questions: [
      {id:'goal', label:'What’s your #1 goal right now?', type:'pills', options:['Fat loss','Muscle gain','Body recomposition','Strength','General health','Other']},
      {id:'past_coaching', label:'Worked with a coach or structured program before? What worked or didn’t?', type:'textarea'},
      {id:'confidence', label:'Confidence in your ability to stick to a plan?', hint:'1 = low, 10 = high', type:'scale', min:1, max:10}
    ]
  },
  {
    title: "Health Screening",
    sub: "Non-negotiable — I need this to train you safely.",
    questions: [
      {id:'injuries', label:'Any injuries, past or current, I need to know about?', hint:'include old ones that flare up', type:'textarea', required:true},
      {id:'conditions', label:'Any medical conditions?', hint:'thyroid, blood pressure, diabetes, PCOS, etc. — write "none" if none', type:'textarea', required:true},
      {id:'medications', label:'Currently taking any medications or supplements?', type:'textarea', required:true},
      {id:'food_allergies', label:'Any food allergies or intolerances?', type:'textarea'},
      {id:'doctor_restrictions', label:'Has a doctor ever told you to avoid certain exercises?', type:'textarea'}
    ]
  },
  {
    title: "Lifestyle",
    sub: "How your day actually runs — this shapes when and how we train.",
    questions: [
      {id:'weekday', label:'Walk me through a typical weekday, wake to sleep.', type:'textarea'},
      {id:'weekend', label:'How does your weekend differ from your weekday?', type:'textarea'},
      {id:'energy_time', label:'When during the day do you have the most energy to train?', type:'pills', options:['Early morning','Late morning','Afternoon','Evening','Late night']},
      {id:'sleep', label:'Average hours of sleep per night', type:'pills', options:['<5','5-6','6-7','7-8','8+']},
      {id:'stress', label:'Current stress levels', hint:'1 = very low, 5 = very high', type:'scale', min:1, max:5},
      {id:'alcohol', label:'Do you drink alcohol? How often / how much?', type:'text'},
      {id:'water', label:'How much water do you drink on an average day?', type:'text'}
    ]
  },
  {
    title: "Food",
    sub: "What you actually eat, not what you think you should say.",
    questions: [
      {id:'normal_day_eating', label:'What does a normal day of eating look like right now? How many meals a day?', type:'textarea'},
      {id:'most_common_food', label:'What food do you eat most often in a regular day?', type:'textarea'},
      {id:'loved_foods', label:'Any foods you absolutely love that you’d be upset if I took away?', type:'textarea'},
      {id:'cooking', label:'Do you cook your own food, or rely on eating out / delivery / convenience stores?', type:'text'},
      {id:'prep_time', label:'Realistic time you can spend on food prep per day', type:'pills', options:['<10 min','10-20 min','20-40 min','40+ min']}
    ]
  },
  {
    title: "Training",
    sub: "The logistics that decide what your program looks like.",
    questions: [
      {id:'train_days', label:'How many days can you realistically train every week?', type:'pills', options:['2','3','4','5','6+']},
      {id:'train_time', label:'Morning or evening training?', type:'pills', options:['Morning','Evening','Flexible']},
      {id:'weekend_gym', label:'Can you go to the gym on weekends?', type:'pills', options:['Yes','No','Sometimes']},
      {id:'fav_muscle', label:'Favorite muscle to train? Any priority muscles?', type:'text'},
      {id:'equipment', label:'Gym access, home equipment, or both? Describe what’s available.', type:'textarea'},
      {id:'lifter_level', label:'How would you describe your training experience?', type:'pills', options:['Complete beginner','Beginner','Intermediate','Advanced']},
      {id:'unsafe_lifts', label:'Any lifts/movements you currently can’t do or feel unsafe doing?', type:'textarea'}
    ]
  },
  {
    title: "Logistics",
    sub: "Last one — how we'll actually work together.",
    questions: [
      {id:'checkin_time', label:'Preferred day/time for weekly check-in call', type:'text'},
      {id:'comm_method', label:'Preferred communication for daily check-ins', type:'pills', options:['WhatsApp','Instagram DM','Other']},
      {id:'photos', label:'Comfortable sending progress photos periodically for tracking?', type:'pills', options:['Yes','No','Only to myself']}
    ]
  }
];
