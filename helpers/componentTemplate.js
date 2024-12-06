const interfaceConst = 'type';

module.exports = (componentName) => `import cn from 'classnames';
import cls from './${componentName}.module.scss';

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
