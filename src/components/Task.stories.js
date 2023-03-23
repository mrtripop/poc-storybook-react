import React from 'react';

import Task from './Task';

// Component documenting
export default {
	component: Task,
	title: 'Task',
};

// Component (ใช้ args เพื่อ reduce code และ maintain)
const Template = (args) => <Task {...args} />;

// Story(think of each story as a permutation of a component)
export const Default = Template.bind({});
Default.args = {
	task: {
		id: '1',
		title: 'Test Task',
		state: 'TASK_INBOX',
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		state: 'TASK_PINNED',
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		state: 'TASK_ARCHIVED',
	},
};
