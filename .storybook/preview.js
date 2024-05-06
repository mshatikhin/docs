import dedent from 'dedent';

/** @type {import('@storybook/addons').Parameters} */
export const parameters = {
    docs: {
        transformSource: (_, story) => story.parameters.fullSource,
    },

    exportToCodeSandbox: {
        requiredDependencies: {
            'react': '^18.3.1', // for React
            'react-dom': '^18.3.1', // for React
            'react-scripts': '^5', // necessary when using typescript in CodeSandbox
        },
        optionalDependencies: {
            '@skbkontur/react-ui': '^4',
        },
        indexTsx: dedent`
            import * as ReactDOM from 'react-dom';
            import { STORY_NAME as Example } from './example';
            ReactDOM.render(
                    <Example />,
                document.getElementById('root'),
            );`,
    },
};
