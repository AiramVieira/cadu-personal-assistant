import { timeCommands } from './TimeCommands';
import { transcriptCommands } from './TranscriptCommands';
import { browserCommands } from './BrowserCommands';
import { commandListCommands } from './CommandListCommands';
import { routingCommands } from './RoutingCommands';
import { searchCommands } from './SearchCommands';

const allCommands = [];
allCommands.push(...browserCommands);
allCommands.push(...routingCommands);
allCommands.push(...timeCommands);
allCommands.push(...transcriptCommands);
allCommands.push(...commandListCommands);
allCommands.push(...searchCommands);

export default allCommands;
