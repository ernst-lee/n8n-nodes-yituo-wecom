name: 企微 API 更新日志
description: 记录企业微信 API 更新与仓库实现的差异分析
labels: documentation
body:
- type: textarea
  attributes:
    label: 统计时间范围
    description: 格式：YYYY-MM-DD ~ YYYY-MM-DD
    placeholder: "2026-01-01 ~ 2026-03-26"
  validations:
    required: true
- type: textarea
  attributes:
    label: API 更新摘要
    description: 自动生成的更新日志内容
  validations:
    required: false
- type: textarea
  attributes:
    label: 与仓库实现的差异
    description: 需要关注或新增实现的 API
  validations:
    required: false
