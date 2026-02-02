import type { INodeProperties } from 'n8n-workflow';

const showOnly = { resource: ['wefile'], operation: ['createFolder'] };

export const createFolderDescription: INodeProperties[] = [
	{
		displayName: '空间ID',
		name: 'spaceId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
		description: '微盘空间的ID',
	},
	{
		displayName: '父文件夹ID',
		name: 'fatherId',
		type: 'string',
		displayOptions: { show: showOnly },
		default: '',
		description: '父文件夹的ID，留空则在空间根目录创建（此时fatherid使用spaceid）',
	},
	{
		displayName: '文件类型',
		name: 'fileType',
		type: 'options',
		required: true,
		displayOptions: { show: showOnly },
		default: 1,
		description: '创建的文件类型',
		options: [
			{
				name: '文件夹',
				value: 1,
			},
			{
				name: '文档',
				value: 3,
			},
			{
				name: '表格',
				value: 4,
			},
		],
	},
	{
		displayName: '文件名字',
		name: 'fileName',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
	},
];
