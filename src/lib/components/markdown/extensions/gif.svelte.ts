import type { TokenizerAndRendererExtension } from "marked";

export const gif = {
  name: "gif",
  level: "block",
  start(src: string) {
    return src.match(/gif:/)?.index;
  },
  tokenizer(src: string) {
    const rule = /^gif:\S+/;
    const match = rule.exec(src);
    if (match) {
      const token = {
        type: "gif",
        raw: match[0],
        text: match[0].trim(),
        tokens: [],
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
} as TokenizerAndRendererExtension;
