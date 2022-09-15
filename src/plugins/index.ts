/* Plugins */
import { GifPlug } from './GifPlugin';
import { VidPlug } from './IFramePlugin';
import { LoopPlug } from './LoopedPlugin';
import { TweetPlug } from './TwitterPlugin';

/* Defaults */
import {
  getDefaultEuiMarkdownParsingPlugins,
  getDefaultEuiMarkdownProcessingPlugins,
  getDefaultEuiMarkdownUiPlugins,
} from '@elastic/eui';

const plugs = [GifPlug, VidPlug, LoopPlug, TweetPlug];

export const processingList = getDefaultEuiMarkdownProcessingPlugins();
export const parsingList = getDefaultEuiMarkdownParsingPlugins();
export const uiList = getDefaultEuiMarkdownUiPlugins();

plugs.forEach(plug => {
  const { name, render, parse } = plug;
  processingList[1][1].components[name] = render;
  parsingList.push(parse);
  // uiList.push(ui);
});
