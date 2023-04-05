const core = require('@actions/core');

const main = async () => {
  try {
    const ref = process.env.GITHUB_REF;

    if (!ref) {
      throw 'GITHUB_REF is not defined';
    }

    if (!ref.startsWith('refs/tags/')) {
      core.setFailed(`Current ref ('${ref}') is not a tag`);
      return;
    }

    core.info(`ref=${ref}`);

    const tag = ref.replace(/^refs\/tags\//, '');
    const tagTrimmed = tag.replace(/^v/, '');

    core.info(`tag=${tag}`);
    core.info(`tagTrimmed=${tagTrimmed}`);

    core.setOutput('tag', tag);
    core.setOutput('tagTrimmed', tagTrimmed);
  } catch (error) {
    core.setFailed(error);
  }
};

main();
