import type { INodeProperties } from 'n8n-workflow';

const showOnly = { resource: ['wefile'], operation: ['fileSecuritySettings'] };

// 水印密度选项（根据官方文档）
const marginTypeOptions = [
	{ name: '低密度水印', value: 1, description: '低密度水印' },
	{ name: '高密度水印', value: 2, description: '高密度水印' },
];

export const fileSecuritySettingsDescription: INodeProperties[] = [
	{
		displayName: '文件ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
		description: '文件的fileid<a href="https://developer.work.weixin.qq.com/document/path/93661" target="_blank">更多信息</a>',
	},
	{
		displayName: '水印设置',
		name: 'watermarkCollection',
		type: 'fixedCollection',
		displayOptions: { show: showOnly },
		default: {},
		placeholder: '添加水印设置',
		typeOptions: { multipleValues: false },
		description: '水印相关设置，仅支持在线文档类型<a href="https://developer.work.weixin.qq.com/document/path/93661" target="_blank">更多信息</a>',
		options: [
			{
				displayName: '水印',
				name: 'watermark',
				values: [
					{
						displayName: '水印文字',
						name: 'text',
						type: 'string',
						default: '',
						description: '水印文字。此字段不填则保持原样',
					},
					{
						displayName: '水印密度',
						name: 'marginType',
						type: 'options',
						default: 1,
						options: marginTypeOptions,
						description: '水印类型：1=低密度水印，2=高密度水印。此字段不填则保持原样',
					},
					{
						displayName: '显示访问人名称',
						name: 'showVisitorName',
						type: 'boolean',
						default: false,
						description: '是否显示访问人名称。此字段不填则保持原样',
					},
					{
						displayName: '显示水印文本',
						name: 'showText',
						type: 'boolean',
						default: false,
						description: '是否展示水印文本。此字段不填则保持原样',
					},
				],
			},
		],
	},
];
