const core = require('@actions/core');

const main = async () => {
  try {
    const ref = process.env.GITHUB_REF;

    if (!ref) {
      throw 'GITHUB_REF is not defined';
    }

    if (!ref.startsWith('refs/tags/')) {
      throw `Current ref ('${ref}') is not a tag`;
    }

    const tag = ref.replace(/^refs\/tags\//, '');
    const tagTrimmed = tag.replace(/^v/, '');

    core.info(`ref=${ref}`);
    core.info(`tag=${tag}`);
    core.info(`tagTrimmed=${tagTrimmed}`);

    core.setOutput('tag', tag);
    core.setOutput('tagTrimmed', tagTrimmed);
  } catch (error) {
    core.setFailed(error);
  }
}

main();
