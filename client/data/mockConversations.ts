import { ConversationData, ConversationMessage } from './types';

// Helper to generate timestamps relative to current time
const getTimestamp = (daysAgo: number, hoursAgo: number = 0, minutesAgo: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(date.getHours() - hoursAgo);
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
};

// Mock conversations mapped by chat ID
export const mockConversations: ConversationData = {
  'chat-1': [ // Alice Johnson
    { id: 'msg-1-1', isSender: false, type: 'snap', timestamp: getTimestamp(2, 10) },
    { id: 'msg-1-2', isSender: true, type: 'video', timestamp: getTimestamp(2, 9) },
    { id: 'msg-1-3', isSender: false, type: 'chat', text: 'Hey! How are you doing?', timestamp: getTimestamp(2, 8) },
    { id: 'msg-1-4', isSender: true, type: 'chat', text: 'I\'m good! Just finished work', timestamp: getTimestamp(2, 7) },
    { id: 'msg-1-5', isSender: false, type: 'video', timestamp: getTimestamp(1, 3) },
    { id: 'msg-1-6', isSender: true, type: 'snap', timestamp: getTimestamp(1, 2) },
    { id: 'msg-1-7', isSender: false, type: 'chat', text: 'That looks amazing! Where was this taken? I\'ve been wanting to visit somewhere similar for my vacation', timestamp: getTimestamp(0, 1) },
    { id: 'msg-1-8', isSender: true, type: 'chat', text: 'It\'s at the new coffee shop downtown. You should definitely check it out when you have time!', timestamp: getTimestamp(0, 0, 30) },
  ],

  'chat-2': [ // Bob Smith
    { id: 'msg-2-1', isSender: true, type: 'chat', text: 'Meeting at 3pm?', timestamp: getTimestamp(3, 5) },
    { id: 'msg-2-2', isSender: false, type: 'chat', text: 'Yes, confirmed', timestamp: getTimestamp(3, 4) },
    { id: 'msg-2-3', isSender: true, type: 'snap', timestamp: getTimestamp(2, 10) },
    { id: 'msg-2-4', isSender: false, type: 'video', timestamp: getTimestamp(2, 8) },
    { id: 'msg-2-5', isSender: false, type: 'chat', text: 'Great presentation today!', timestamp: getTimestamp(1, 6) },
    { id: 'msg-2-6', isSender: true, type: 'chat', text: 'Thanks! I spent a lot of time preparing for it. Really glad it went well and everyone seemed engaged', timestamp: getTimestamp(1, 5) },
    { id: 'msg-2-7', isSender: false, type: 'snap', timestamp: getTimestamp(0, 2) },
  ],

  'chat-3': [ // Charlie Brown
    { id: 'msg-3-1', isSender: false, type: 'video', timestamp: getTimestamp(5, 12) },
    { id: 'msg-3-2', isSender: true, type: 'snap', timestamp: getTimestamp(5, 10) },
    { id: 'msg-3-3', isSender: false, type: 'chat', text: 'Did you see the game last night?', timestamp: getTimestamp(4, 8) },
    { id: 'msg-3-4', isSender: true, type: 'chat', text: 'Yes! Incredible comeback in the fourth quarter. I couldn\'t believe they managed to turn it around like that', timestamp: getTimestamp(4, 7) },
    { id: 'msg-3-5', isSender: false, type: 'chat', text: 'I know right! Best game of the season so far', timestamp: getTimestamp(4, 6) },
    { id: 'msg-3-6', isSender: false, type: 'snap', timestamp: getTimestamp(0, 5) },
  ],

  'chat-4': [ // Diana Prince
    { id: 'msg-4-1', isSender: true, type: 'video', timestamp: getTimestamp(1, 8) },
    { id: 'msg-4-2', isSender: true, type: 'chat', text: 'Just landed!', timestamp: getTimestamp(1, 7) },
    { id: 'msg-4-3', isSender: false, type: 'chat', text: 'Welcome back! How was the trip?', timestamp: getTimestamp(1, 6) },
    { id: 'msg-4-4', isSender: true, type: 'chat', text: 'Amazing! The conference was really informative and I met so many interesting people from different companies', timestamp: getTimestamp(1, 5) },
    { id: 'msg-4-5', isSender: false, type: 'snap', timestamp: getTimestamp(1, 3) },
    { id: 'msg-4-6', isSender: true, type: 'video', timestamp: getTimestamp(1, 0) },
  ],

  'chat-5': [ // Emma Wilson
    { id: 'msg-5-1', isSender: true, type: 'chat', text: 'Happy Birthday! 🎉', timestamp: getTimestamp(2, 12) },
    { id: 'msg-5-2', isSender: false, type: 'chat', text: 'Thank you so much!', timestamp: getTimestamp(2, 11) },
    { id: 'msg-5-3', isSender: true, type: 'snap', timestamp: getTimestamp(2, 10) },
    { id: 'msg-5-4', isSender: false, type: 'video', timestamp: getTimestamp(2, 8) },
    { id: 'msg-5-5', isSender: true, type: 'chat', text: 'Hope you have an amazing day! Any special plans for celebrating? Let me know if you need any recommendations for dinner places', timestamp: getTimestamp(2, 6) },
  ],

  'chat-6': [ // Frank Miller
    { id: 'msg-6-1', isSender: false, type: 'snap', timestamp: getTimestamp(4, 14) },
    { id: 'msg-6-2', isSender: true, type: 'video', timestamp: getTimestamp(4, 12) },
    { id: 'msg-6-3', isSender: false, type: 'chat', text: 'Can you send me the notes?', timestamp: getTimestamp(3, 10) },
    { id: 'msg-6-4', isSender: true, type: 'chat', text: 'Sure, I\'ll email them now', timestamp: getTimestamp(3, 9) },
    { id: 'msg-6-5', isSender: true, type: 'snap', timestamp: getTimestamp(3, 8) },
    { id: 'msg-6-6', isSender: false, type: 'chat', text: 'Got them, thanks! These are really comprehensive. I especially liked the section about the new project timeline', timestamp: getTimestamp(3, 7) },
    { id: 'msg-6-7', isSender: true, type: 'chat', text: 'No problem! Let me know if you need clarification on anything', timestamp: getTimestamp(3, 6) },
  ],

  'chat-7': [ // Grace Kelly
    { id: 'msg-7-1', isSender: false, type: 'video', timestamp: getTimestamp(6, 10) },
    { id: 'msg-7-2', isSender: false, type: 'chat', text: 'Miss you!', timestamp: getTimestamp(6, 9) },
    { id: 'msg-7-3', isSender: true, type: 'chat', text: 'Miss you too! Can\'t wait to see you next week', timestamp: getTimestamp(6, 8) },
    { id: 'msg-7-4', isSender: false, type: 'snap', timestamp: getTimestamp(5, 12) },
    { id: 'msg-7-5', isSender: true, type: 'video', timestamp: getTimestamp(5, 10) },
  ],

  'chat-8': [ // Henry Ford
    { id: 'msg-8-1', isSender: true, type: 'chat', text: 'The project is complete', timestamp: getTimestamp(7, 8) },
    { id: 'msg-8-2', isSender: false, type: 'chat', text: 'Excellent work! The client will be thrilled. This was a challenging project but you really delivered beyond expectations', timestamp: getTimestamp(7, 7) },
    { id: 'msg-8-3', isSender: true, type: 'snap', timestamp: getTimestamp(6, 15) },
    { id: 'msg-8-4', isSender: false, type: 'video', timestamp: getTimestamp(6, 12) },
    { id: 'msg-8-5', isSender: false, type: 'chat', text: 'Let\'s celebrate!', timestamp: getTimestamp(6, 10) },
  ],

  'chat-9': [ // Iris Chang
    { id: 'msg-9-1', isSender: false, type: 'snap', timestamp: getTimestamp(8, 6) },
    { id: 'msg-9-2', isSender: true, type: 'chat', text: 'Love the new design!', timestamp: getTimestamp(8, 5) },
    { id: 'msg-9-3', isSender: false, type: 'chat', text: 'Thanks! I worked really hard on it. The color scheme took forever to get right but I think it really ties everything together now', timestamp: getTimestamp(8, 4) },
    { id: 'msg-9-4', isSender: true, type: 'video', timestamp: getTimestamp(7, 10) },
    { id: 'msg-9-5', isSender: false, type: 'snap', timestamp: getTimestamp(7, 8) },
  ],

  'chat-10': [ // Jack Ryan
    { id: 'msg-10-1', isSender: true, type: 'video', timestamp: getTimestamp(10, 12) },
    { id: 'msg-10-2', isSender: false, type: 'chat', text: 'That\'s hilarious! 😂', timestamp: getTimestamp(10, 11) },
    { id: 'msg-10-3', isSender: true, type: 'chat', text: 'I knew you\'d appreciate it', timestamp: getTimestamp(10, 10) },
    { id: 'msg-10-4', isSender: true, type: 'snap', timestamp: getTimestamp(10, 8) },
    { id: 'msg-10-5', isSender: false, type: 'chat', text: 'Send me more like this! I need some good laughs today. Work has been absolutely crazy this week', timestamp: getTimestamp(10, 7) },
  ],

  'chat-11': [ // Kate Bishop
    { id: 'msg-11-1', isSender: false, type: 'chat', text: 'Are you free this weekend?', timestamp: getTimestamp(14, 10) },
    { id: 'msg-11-2', isSender: true, type: 'chat', text: 'Saturday works for me! What did you have in mind? I\'m up for anything as long as we can grab some good food', timestamp: getTimestamp(14, 9) },
    { id: 'msg-11-3', isSender: false, type: 'snap', timestamp: getTimestamp(14, 8) },
    { id: 'msg-11-4', isSender: true, type: 'video', timestamp: getTimestamp(14, 6) },
    { id: 'msg-11-5', isSender: false, type: 'chat', text: 'Perfect! See you then', timestamp: getTimestamp(14, 4) },
  ],

  'chat-12': [ // Leo Martinez
    { id: 'msg-12-1', isSender: true, type: 'snap', timestamp: getTimestamp(18, 14) },
    { id: 'msg-12-2', isSender: false, type: 'video', timestamp: getTimestamp(18, 12) },
    { id: 'msg-12-3', isSender: true, type: 'chat', text: 'Check out this article I found. It\'s about that topic we were discussing last week. Really interesting perspective', timestamp: getTimestamp(18, 10) },
    { id: 'msg-12-4', isSender: false, type: 'chat', text: 'Reading it now...', timestamp: getTimestamp(18, 9) },
    { id: 'msg-12-5', isSender: false, type: 'chat', text: 'This is exactly what I was looking for!', timestamp: getTimestamp(18, 8) },
  ],

  'chat-13': [ // Maya Lopez
    { id: 'msg-13-1', isSender: false, type: 'video', timestamp: getTimestamp(21, 8) },
    { id: 'msg-13-2', isSender: true, type: 'snap', timestamp: getTimestamp(21, 7) },
    { id: 'msg-13-3', isSender: false, type: 'chat', text: 'The weather is perfect today! We should definitely go for that hike we\'ve been planning. The trail should be beautiful', timestamp: getTimestamp(21, 6) },
    { id: 'msg-13-4', isSender: true, type: 'chat', text: 'Absolutely! Let\'s do it', timestamp: getTimestamp(21, 5) },
  ],

  'chat-14': [ // Noah Davis
    { id: 'msg-14-1', isSender: true, type: 'chat', text: 'Thanks for your help!', timestamp: getTimestamp(25, 10) },
    { id: 'msg-14-2', isSender: false, type: 'chat', text: 'Anytime! That\'s what friends are for. Don\'t hesitate to reach out if you need anything else', timestamp: getTimestamp(25, 9) },
    { id: 'msg-14-3', isSender: false, type: 'snap', timestamp: getTimestamp(25, 7) },
    { id: 'msg-14-4', isSender: true, type: 'video', timestamp: getTimestamp(25, 5) },
  ],

  'chat-15': [ // Olivia Chen
    { id: 'msg-15-1', isSender: false, type: 'snap', timestamp: getTimestamp(30, 12) },
    { id: 'msg-15-2', isSender: true, type: 'chat', text: 'Congratulations on the promotion! You\'ve worked so hard for this and absolutely deserve it. So proud of you!', timestamp: getTimestamp(30, 11) },
    { id: 'msg-15-3', isSender: false, type: 'chat', text: 'Thank you! Still can\'t believe it', timestamp: getTimestamp(30, 10) },
    { id: 'msg-15-4', isSender: false, type: 'video', timestamp: getTimestamp(30, 8) },
  ],

  'chat-16': [ // Peter Parker
    { id: 'msg-16-1', isSender: true, type: 'video', timestamp: getTimestamp(45, 10) },
    { id: 'msg-16-2', isSender: false, type: 'chat', text: 'Great shot!', timestamp: getTimestamp(45, 9) },
    { id: 'msg-16-3', isSender: true, type: 'chat', text: 'Thanks! I\'ve been practicing my photography skills. This new camera really makes a difference', timestamp: getTimestamp(45, 8) },
    { id: 'msg-16-4', isSender: true, type: 'snap', timestamp: getTimestamp(45, 6) },
  ],

  'chat-17': [ // Quinn Taylor
    { id: 'msg-17-1', isSender: false, type: 'chat', text: 'Did you finish the report?', timestamp: getTimestamp(60, 14) },
    { id: 'msg-17-2', isSender: true, type: 'chat', text: 'Just sent it to your email. Let me know if you need any changes or have questions about the data analysis section', timestamp: getTimestamp(60, 13) },
    { id: 'msg-17-3', isSender: false, type: 'snap', timestamp: getTimestamp(60, 10) },
    { id: 'msg-17-4', isSender: true, type: 'video', timestamp: getTimestamp(60, 8) },
  ],

  'chat-18': [ // Ruby Rose
    { id: 'msg-18-1', isSender: true, type: 'snap', timestamp: getTimestamp(90, 12) },
    { id: 'msg-18-2', isSender: false, type: 'video', timestamp: getTimestamp(90, 10) },
    { id: 'msg-18-3', isSender: true, type: 'chat', text: 'Remember when we went there last summer? That was such an amazing trip. We should definitely plan another one soon', timestamp: getTimestamp(90, 8) },
    { id: 'msg-18-4', isSender: false, type: 'chat', text: 'Best vacation ever!', timestamp: getTimestamp(90, 7) },
  ],

  'chat-19': [ // Sam Wilson
    { id: 'msg-19-1', isSender: false, type: 'video', timestamp: getTimestamp(120, 10) },
    { id: 'msg-19-2', isSender: true, type: 'chat', text: 'Looking good!', timestamp: getTimestamp(120, 9) },
    { id: 'msg-19-3', isSender: false, type: 'chat', text: 'Thanks! Been working out consistently for three months now. Finally starting to see some real progress', timestamp: getTimestamp(120, 8) },
    { id: 'msg-19-4', isSender: false, type: 'snap', timestamp: getTimestamp(120, 6) },
  ],

  'chat-20': [ // Tara King
    { id: 'msg-20-1', isSender: true, type: 'chat', text: 'How\'s everything going?', timestamp: getTimestamp(180, 12) },
    { id: 'msg-20-2', isSender: false, type: 'chat', text: 'Pretty good! Life has been busy but in a good way. Started a new project at work that\'s really exciting', timestamp: getTimestamp(180, 11) },
    { id: 'msg-20-3', isSender: false, type: 'video', timestamp: getTimestamp(180, 9) },
    { id: 'msg-20-4', isSender: true, type: 'snap', timestamp: getTimestamp(180, 7) },
  ],
};