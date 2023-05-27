# GitHub Action: Get tag

> 🔴 **Project status**: discontinued<sup>[[?]](https://github.com/Tyrrrz/.github/blob/master/docs/project-status.md)</sup>

> **Note**:
> As an alternative, use `${{ github.ref_name }}` to reference the current git tag inside a GitHub Actions step.

GitHub Action that parses the current git tag from the `GITHUB_REF` environment variable.

## Usage

```yaml
on:
  push:
    tags:
      - '*'

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - name: Get tag
        id: tag
        uses: tyrrrz/action-get-tag@v1

      - name: Print tag
        run: echo ${{steps.tag.outputs.tag}}

      - name: Print tag (with leading 'v' stripped)
        run: echo ${{steps.tag.outputs.tag_stripped}}
```
