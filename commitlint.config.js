module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交的类别
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
};
