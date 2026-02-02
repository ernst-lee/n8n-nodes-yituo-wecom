import type { INodeProperties } from 'n8n-workflow';

const showOnly = { resource: ['wefile'], operation: ['renameFile'] };

export const renameFileDescription: INodeProperties[] = [
	{
		displayName: '文件ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
		description: '文件或文件夹的ID',
	},
	{
		displayName: '新名称',
		name: 'newName',
		type: 'string',
		required: true,
		displayOptions: { show: showOnly },
		default: '',
		description: '新的文件或文件夹名称（注意：文件名最多填255个字符，英文算1个，汉字算2个）',
	},
];
