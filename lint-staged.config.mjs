/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  "*.?(c|m)[jt]s?(x)": ["eslint  --fix", "prettier --write --cache"],
  "*.{json,y?(a)ml}": ["prettier --write --cache"],
  "*.mdx": ["prettier --write --cache"],
};

export default lintStagedConfig;
