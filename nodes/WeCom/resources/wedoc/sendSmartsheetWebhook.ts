import type { INodeProperties } from 'n8n-workflow';

const showOnly = { resource: ['wedoc'], operation: ['sendSmartsheetWebhook'] };

export const sendSmartsheetWebhookDescription: INodeProperties[] = [
	{
		displayName: 'JSON 请求体',
		name: 'payload_json',
		type: 'json',
		typeOptions: {
			rows: 10,
		},
		required: true,
		displayOptions: { show: showOnly },
		default: `{
  "add_records": [
    {
      "values": {
        "FIELD_ID": [
          {
            "type": "text",
            "text": "文本内容"
          }
        ]
      }
    }
  ]
}`,
		description:
			'按智能表格“接收外部数据”中的“示例数据”格式填写。支持 add_records 新增记录和 update_records 更新记录，内容必须为 UTF-8 编码。',
	},
	{
		displayName: '说明',
		name: 'sendSmartsheetWebhookNotice',
		type: 'notice',
		default: '',
		displayOptions: { show: showOnly },
		description:
			'Webhook 地址不在当前节点内配置，节点会从输入数据中读取目标地址。',
	},
];
