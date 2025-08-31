import { MockChat, BaseUserData } from './types';
import { generateMockChatsFromConversations } from '../utils/chatHelpers';

// Base user data - only static properties
const baseUsers: BaseUserData[] = [
  { username: "Alice Johnson" }, // No bitmoji - will use generated avatar
  { username: "Bob Smith", bitmoji: "blobhob.svg" },
  { username: "Charlie Brown" }, // No bitmoji - will use generated avatar
  { username: "Diana Prince", bitmoji: "djoniloek.svg" },
  { username: "Emma Wilson", bitmoji: "emmadgaard.svg" },
  { username: "Frank Miller", bitmoji: "fridibubble.svg" },
  { username: "Grace Kelly", bitmoji: "soljagrace.svg" },
  { username: "Henry Ford", bitmoji: "hgudmundsen9.svg" },
  { username: "Iris Chang", bitmoji: "irismaria06.svg" },
  { username: "Jack Ryan", bitmoji: "jkjelnes.svg" },
  { username: "Kate Bishop", bitmoji: "katrinsjurdardo.svg" },
  { username: "Leo Martinez" }, // No bitmoji - will use generated avatar
  { username: "Maya Lopez", bitmoji: "magylol12.svg" },
  { username: "Noah Davis", bitmoji: "ndahl_25.svg" },
  { username: "Olivia Chen", bitmoji: "odaeyd.svg" },
  { username: "Peter Parker", bitmoji: "petersensilrid.svg" },
  { username: "Quinn Taylor" }, // No bitmoji - will use generated avatar
  { username: "Ruby Rose", bitmoji: "ronja.isaksen.svg" },
  { username: "Sam Wilson", bitmoji: "samalsdottir.svg" },
  { username: "Tara King", bitmoji: "teresamariad.svg" },
];

// Generate mockChats dynamically from conversations
export const mockChats: MockChat[] = generateMockChatsFromConversations(baseUsers);