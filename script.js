const questions = [
    // Ownership
    { text: 'Tell me about a time when you took on something significant outside your area of responsibility. Why was it important? What was the outcome?', lp: 'Ownership' },
    { text: "Describe a time when you didn't think you were going to meet a commitment you promised. How did you identify the risk and communicate it to stakeholders? Is there anything you would do differently?", lp: 'Ownership' },
    { text: "Describe a time when you had to transition a project you owned to a new owner. What steps did you take to make sure the transition went smoothly? Tell me about a time that you chose to get involved in a project that you had already transitioned to somebody else. What was the situation? Why was it important to get involved?", lp: 'Ownership' },
    { text: "Tell me about a time when you saw a peer struggling and decided to step in and help. What was the situation? Why did you decide to step in? What actions did you take?", lp: 'Ownership' },

    // Have Backbone; Disagree and Commit
    { text: "Tell me about a time when you strongly disagreed with your manager or peer on something you considered very important to the business. What was it and how did you handle it? Knowing what you know now, would you do anything differently?", lp: 'Have backbone; disagree and commit' },
    { text: "Describe a time when you took an unpopular stance in a meeting with peers and your leader. What was it? Why did you feel strongly about it? What did you do? What was the outcome?", lp: 'Have backbone; disagree and commit' },
    { text: "Describe a time when you felt really strongly about something on a project but the team decided to go in a different direction. How hard did you press the issue? How did you approach that project afterward?", lp: 'Have backbone; disagree and commit' },
    { text: "Tell me about a time when you pushed back against a decision that negatively impacted your team. What was the issue? How did it turn out? Would you have done anything differently?", lp: 'Have backbone; disagree and commit' },

    // Earn Trust
    { text: "Tell me about a time when you had to communicate a change in direction that you anticipated people would have concerns with. What did you do to understand the concerns and mitigate them? Were there any changes you made along the way after hearing these concerns? How did you handle questions and/or resistance? Were you able to get people comfortable with the change?", lp: 'Earn Trust' },
    { text: "Give me an example of a tough or critical piece of feedback you received. What was it and what did you do about it?", lp: 'Earn Trust' },
    { text: "Describe a time when you needed to influence a peer who had a differing opinion about a shared goal. What did you do? What was the outcome?", lp: 'Earn Trust' },
    { text: "Give me an example of a time when you were not able to meet a commitment. What was the commitment and what were the obstacles that prevented success? What was the impact to your customers/peers and what did you learn from it?", lp: 'Earn Trust' },

    // Dive Deep
    { text: "Tell me about a time when you were trying to understand a complex problem/root cause/ a big problem/ an issue on your team and you had to dig into the details to figure it out. Who did you talk with or where did you have to look to find the most valuable information? How did you use that information to help solve the problem?", lp: 'Dive Deep' },
    { text: "Tell me about a problem you had to solve that required in-depth thought and analysis. How did you know you were focusing on the right things? What was the outcome? Would you have done anything differently?", lp: 'Dive Deep' },
    { text: "Have you ever created a metric that helped identify a need for a change in your department? What was the metric? Why did you create it? How did this and other information influence change? What was the outcome of the change?", lp: 'Dive Deep' },

    // Invent and Simplify
    { text: "Give me an example of a complex problem you solved with a simple solution. What made the problem complex? How do you know your solution addressed the problem?", lp: 'Invent and Simplify' },
    { text: "Describe the most innovative thing you’ve done and why you thought it was innovative. What was the problem it was solving? What was innovative about it?", lp: 'Invent and Simplify' },
    { text: "Tell me about a time when you were able to make something simpler for customers. What drove you to implement this change? What was the impact?", lp: 'Invent and Simplify' },
    { text: "Tell me about a time when you had a challenging problem or situation that the usual approach wouldn't address. How did you select an alternative/new/innovative approach? What alternative approach(es) did you consider? What was the end result? What was the impact?", lp: 'Invent and Simplify' },

    // Deliver Results
    { text: "Give me an example of a time when you were able to deliver an important project under a tight deadline/ facing a big obstacle/ exceeding expectations. What sacrifices did you have to make to meet the deadline/to overcome the obstacle? What challenges did you overcome? How did you impact the final deliverable? What was the final outcome?", lp: 'Deliver Results' },
    { text: "Tell me about a time when you or your team were more than half way to meeting a goal when you realized it may not be the right goal or may have unintended consequences. What was the situation? What did you do? What was the outcome? Looking back, would you have done anything differently?", lp: 'Deliver Results' },
    { text: "Tell me about a time when you did not effectively manage your projects and something did not get completed on time. What was the impact? What approaches do you use to make sure you are focusing on the right deliverables when you have several competing priorities?", lp: 'Deliver Results' },

    // Customer Obsession
    { text: "Describe a difficult interaction you had with a customer. How did you deal with it? What was the outcome? How would you handle it differently?", lp: 'Customer Obsession' },
    { text: "Tell me about a time when you went above and beyond for a customer. Why did you do it? How did the customer respond? What was the outcome?", lp: 'Customer Obsession' },
    { text: "Give me an example of when you were able to anticipate a customer need with a solution/product they didn't know they needed/wanted yet. How did you know they needed this? How did they respond?", lp: 'Customer Obsession' },
    { text: "Give me an example of a time when you asked for customer feedback. How did you use that feedback to drive innovation or improvement? How did the customer respond?", lp: 'Customer Obsession' },
    { text: "Sometimes customers make unreasonable requests. Tell me about a time when you've had to push back or say no to a customer request. What did you say or do in response to that request?", lp: 'Customer Obsession' },

    // Bias for Action
    { text: "Give me an example of a calculated risk that you have taken where speed was critical. What was the situation and how did you handle it? What steps did you take to mitigate the risk? What was the outcome? Knowing what you know now, would you have done anything differently?", lp: 'Bias for Action' },
    { text: "Tell me about a time when you worked against tight deadlines and didn't have time to consider all options before making a decision. How much time did you have? What approach did you take? What did you learn from the situation?", lp: 'Bias for Action' },
    { text: "Describe a situation where you made an important business decision without consulting your manager. What was the situation and how did it turn out? Would you have done anything differently?", lp: 'Bias for Action' },
    { text: "Give me an example of when you had to make an important decision and had to decide between moving forward or gathering more information. What did you do? What was the outcome? What information is necessary for you to have before acting?", lp: 'Bias for Action' },

    // Are Right, A Lot
    { text: "Tell me about a time when you didn't have enough data to make the right decision. What did you do? What path did you take? Did the decision turn out to be the correct one?", lp: 'Are Right, A Lot' },
    { text: "Tell me about a strategic decision you had to make without clear data or benchmarks. How did you make your final decision? What alternatives did you consider? What were the tradeoffs of each? How did you mitigate risk?", lp: 'Are Right, A Lot' },
    { text: "Tell me about a time when you made a difficult decision with input from many different sources (customers, stakeholders, partner teams, etc.). What was the situation and how did you arrive at your decision? Did the decision turn out to be the correct one? Why or why not?", lp: 'Are Right, A Lot' },

    // Learn and Be Curious
    { text: "Tell me about a time when you realized you needed a deeper level of subject matter expertise to do your job well. What did you do about it? What was the outcome? Is there anything you would have done differently?", lp: 'Learn and Be Curious' },
    { text: "Describe a time when you took on work outside of your comfort area/ you didn’t know what to do next or how to solve a challenging problem… How did you identify what you needed to learn to be successful? How did you go about building expertise to meet your goal? Did you meet your goal?", lp: 'Learn and Be Curious' },
    { text: "We all have things about ourselves we'd like to improve on at work. Give me an example of something that you've worked on to improve your overall work effectiveness. What resources did you identify to help you develop? What was the impact?", lp: 'Learn and Be Curious' },
    { text: "Give me an example of a time when you explored a new or unexpected area of an existing space. Why hadn't this been explored already? Why did you move forward? What were the results or what was the impact?", lp: 'Learn and Be Curious' },

    // Hire and Develop the Best
    { text: "Tell me about a time when you helped one of your team members develop their career. How did you help that team member? What was the result?", lp: 'Hire and Develop the Best' },
    { text: "Tell me about a time when you invested in an employee's development. What did you invest in and why? What was the outcome? Can you share an example where investing in an employee's development didn't work out?", lp: 'Hire and Develop the Best' },
    { text: "Give me an example of a time you provided feedback to develop the strengths of someone on your team. Were you able to positively impact their performance?", lp: 'Hire and Develop the Best' },
    { text: "Tell me about a time when you provided coaching for a team member. What started the coaching? What was the outcome?", lp: 'Hire and Develop the Best' },

    // Insist on the Highest Standard
    { text: "Describe a time when you refused to compromise your standards around quality/customer service, etc. Who was your customer? What was the result?", lp: 'Insist on the highest standard' },
    { text: "Tell me about a time when you were unsatisfied with the status quo. What did you do to change it? What was the impact? Would you do anything differently in the future?", lp: 'Insist on the highest standard' },
    { text: "Tell me about a time when you worked to improve the quality of a product/service/solution that was already getting good customer feedback. Why did you think it needed improvement? How did customers react?", lp: 'Insist on the highest standard' },
    { text: "Tell me about a time when you had to make a decision between standards and delivery. What tradeoffs did you have make? What was the outcome? Knowing what you know now, would you have done anything differently?", lp: 'Insist on the highest standard' },
    { text: "Describe the most significant continuous improvement project that you led. What was the catalyst to this change and how did you go about it? What was the outcome?", lp: 'Insist on the highest standard' },

    // Think Big
    { text: "Tell me about a time when you were working on an initiative or goal and saw an opportunity to do something much bigger or better than the initial focus. Did you take that opportunity? Why or why not? What was the outcome?", lp: 'Think Big' },
    { text: "Give me an example of how you have changed the direction or view of a specific function/department and helped them embrace a new way of thinking. Why was a change needed? What was the outcome?", lp: 'Think Big' },
    { text: "Tell me about a time when you drove adoption for your vision/ideas. How did you know your vision/idea was adopted by others? How did you drive adoption for your vision/ideas? How did you track adoption? Would you do anything differently?", lp: 'Think Big' },
    { text: "Give me an example of an idea or vision you had which was adopted by global stakeholders. How did you drive adoption for your vision/ideas? How did you track adoption? Would you do anything differently?", lp: 'Think Big' },
    { text: "Tell me about a time when you thought differently to improve a process that was working. What assumptions did you have to question? How did you evaluate if the change improved the process? Knowing what you know now, would you do anything differently?", lp: 'Think Big' }
];

// Principle descriptions
const principles = {
    'Ownership': 'Complete tasks beyond/outside your own responsibilities; take the lead in solving problems.',
    'Have backbone; disagree and commit': 'Disagree with peers/managers using data to explain counter-arguments; stand up for your beliefs in the best interest of company/customers; openly support and commit to decisions that have been made, even if not originally in agreement.',
    'Earn Trust': 'Build positive working relationships by respecting others and their ideas; provide feedback for others in a respectful way; seek out and accept feedback; take responsibilities for shortfalls.',
    'Dive Deep': 'Investigate and get details to get work done; ask good questions to clarify situations; critically evaluate metrics and data; gather information to solve problems, even though it’s difficult and time-consuming.',
    'Invent and Simplify': 'Generate new ideas/methods to solve problems; identify new areas for improvement and deliver new features that are scalable and avoid unnecessary complexity.',
    'Deliver Results': 'Deliver important projects under tight timelines/exceed expectations/conquer obstacles that seem almost impossible.',
    'Customer Obsession': 'Gather customer feedback; improve customer experience; delight and surprise customers.',
    'Bias for Action': 'Move quickly on a project, even when some information is lacking; understand when to consult others and when not necessary.',
    'Are Right, A Lot': 'Make good decisions in the face of ambiguity/uncertainty or time pressure; apply experience and data to best approaches/decisions.',
    'Learn and Be Curious': 'Open to learning and exploring new ideas/skills; passionate about new knowledge/new areas.',
    'Hire and Develop the Best': 'Invest in growth of others; provide regular, actionable feedback to others that could improve their success; encourage high performers to join other teams to facilitate career growth.',
    'Insist on the Highest Standard': 'Set and commit to goals that are challenging yet realistic; continually try to improve process; build scalable systems.',
    'Think Big': 'Identify bold, rational, and defensible directions, even if steps to get there are unclear; take risks when necessary when in pursuit of an idea; think about problems from a new perspective.'
};

// Fisher-Yates shuffle function to randomize the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].text;
    // Clear previous principle factor description
    const principleElement = document.getElementById('principle');
    principleElement.textContent = '';
}

function chooseLP(lp) {
    const currentQuestion = questions[currentQuestionIndex];
    const principleElement = document.getElementById('principle');

    if (lp === currentQuestion.lp) {
        alert('Correct!');
    } else {
        alert('Wrong! The correct LP was: ' + currentQuestion.lp);
    }

    // Display the principle factor description
    principleElement.textContent = principles[currentQuestion.lp];
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('You have completed the quiz!');
    }
}

// Load the first question on page load
window.onload = function() {
    shuffle(questions);  // Shuffle the questions array
    loadQuestion();      // Load the first question
};