import type { INodeProperties } from 'n8n-workflow';

export const getFileListDescription: INodeProperties[] = [
	{
		displayName: '空间ID',
		name: 'spaceId',
		type: 'string',
		required: true,
		default: '',
		description: '微盘空间的ID',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['getFileList'],
			},
		},
	},
	{
		displayName: '父文件夹ID',
		name: 'fatherId',
		type: 'string',
		default: '',
		description: '父文件夹的ID，根目录时为空间spaceid',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['getFileList'],
			},
		},
	},
	{
		displayName: '排序方式',
		name: 'sortType',
		type: 'options',
		required: true,
		default: 1,
		options: [
			{
				name: '名字升序',
				value: 1,
			},
			{
				name: '名字降序',
				value: 2,
			},
			{
				name: '大小升序',
				value: 3,
			},
			{
				name: '大小降序',
				value: 4,
			},
			{
				name: '修改时间升序',
				value: 5,
			},
			{
				name: '修改时间降序',
				value: 6,
			},
		],
		description: '文件列表的排序方式',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['getFileList'],
			},
		},
	},
	{
		displayName: '起始位置',
		name: 'start',
		type: 'number',
		required: true,
		default: 0,
		description: '首次填0，后续填上一次请求返回的next_start',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['getFileList'],
			},
		},
	},
	{
		displayName: '返回数量',
		name: 'limit',
		type: 'number',
		required: true,
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 100,
		description: '分批拉取最大文件数，不超过1000',
		displayOptions: {
			show: {
				resource: ['wefile'],
				operation: ['getFileList'],
			},
		},
	},
];