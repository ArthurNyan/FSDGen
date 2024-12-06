const interfaceConst = 'type';

module.exports = (componentName) => `import cn from 'classnames';
import styles from './styles.module.scss';

${interfaceConst} ${componentName}Props = {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;

    return (
        <div className={cn(cls.${componentName}, className)}>
           ${componentName}
        </div>
    );
};`;
